'use strict';
// Imports an observed ESPN Fantasy scoreboard. Never reads credentials or NBA totals.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { isDeepStrictEqual } = require('node:util');
const config = require('../config/espn.json');
const keys = ['fgp', 'ftp', 'tpm', 'reb', 'ast', 'stl', 'blk', 'to', 'pts'];
const check = (ok, message) => { if (!ok) throw new Error(message); };
const sameStats = (a, b) => keys.every(k => a?.[k] === b?.[k]);
const validDate = d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d) &&
  Number.isFinite(Date.parse(d)) && new Date(d).toISOString().slice(0, 10) === d;
const snapshotPath = stamp => `assets/cortes/espn/${new Date(stamp).toISOString().replace(/[-:]/g, '').replace('.000', '')}.json`;

function importSnapshot(data, snapshot) {
  check(snapshot.leagueId === config.leagueId && snapshot.seasonId === config.seasonId, 'Liga o temporada incorrecta.');
  check(typeof snapshot.capturedAt === 'string' && /(?:Z|[+-]\d\d:\d\d)$/.test(snapshot.capturedAt) &&
    Number.isFinite(Date.parse(snapshot.capturedAt)), 'Falta una hora de lectura válida con zona horaria.');
  const capturedDate = new Intl.DateTimeFormat('en-CA', { timeZone: config.timeZone }).format(new Date(snapshot.capturedAt));
  check(Number.isInteger(snapshot.matchupPeriodId) && snapshot.matchupPeriodId > 0, 'Período inválido.');
  check(validDate(snapshot.start) && validDate(snapshot.end) && snapshot.start <= snapshot.end &&
    capturedDate >= snapshot.start, 'Fechas del período inválidas o aún futuras.');
  check(['partial', 'final'].includes(snapshot.status), 'Estado inválido.');
  check(snapshot.status !== 'final' || (snapshot.finalConfirmed === true && capturedDate > snapshot.end),
    'Un cierre requiere confirmación de ESPN y un período terminado.');
  check(Array.isArray(snapshot.matchups) && snapshot.matchups.length === 2, 'Se requieren los dos cruces completos.');
  const seen = new Set();
  for (const m of snapshot.matchups) {
    check(Array.isArray(m.teams) && m.teams.length === 2, 'Cada cruce debe tener dos equipos.');
    for (const t of m.teams) {
      const identity = config.teams[t.espnId];
      check(identity && t.name === identity.name && !seen.has(t.espnId), 'Equipo desconocido, repetido o renombrado: revisar la identidad en ESPN.');
      seen.add(t.espnId);
      check(keys.every(k => typeof t.stats?.[k] === 'number' && Number.isFinite(t.stats[k]) &&
        t.stats[k] >= 0 && (k === 'fgp' || k === 'ftp' ? t.stats[k] <= 1 : Number.isInteger(t.stats[k]))),
      `Faltan categorías válidas para ${t.name}.`);
      check(Array.isArray(t.score) && t.score.length === 3 && t.score.every(n => Number.isInteger(n) && n >= 0),
        'Falta el marcador de categorías mostrado por ESPN.');
    }
    const [a, b] = m.teams;
    let wins = 0, losses = 0, ties = 0;
    for (const k of keys) {
      if (a.stats[k] === b.stats[k]) ties++;
      else if (k === 'to' ? a.stats[k] < b.stats[k] : a.stats[k] > b.stats[k]) wins++;
      else losses++;
    }
    check(JSON.stringify(a.score) === JSON.stringify([wins, losses, ties]) &&
      JSON.stringify(b.score) === JSON.stringify([losses, wins, ties]), 'Las categorías no coinciden con el marcador de ESPN.');
  }
  check(seen.size === 4 && snapshot.matchups.some(m => m.teams.some(t => t.stats.pts > 0)),
    'Marcador vacío: esperar a que ESPN termine de cargar o haya resultados.');

  const schedule = structuredClone(data.schedule);
  let week = schedule.find(w => w.week === snapshot.matchupPeriodId);
  if (!week) {
    week = { week: snapshot.matchupPeriodId, label: `Semana ${snapshot.matchupPeriodId}`,
      start: snapshot.start, end: snapshot.end, featured: `w${snapshot.matchupPeriodId}-m1`, matchups: [] };
    schedule.push(week);
    schedule.sort((a, b) => a.week - b.week);
  }
  check(week.start === snapshot.start && week.end === snapshot.end,
    `El período ${snapshot.matchupPeriodId} no coincide con el calendario guardado: consulta ${snapshot.start}–${snapshot.end}; guardado ${week.start}–${week.end}.`);
  let changed = false;
  const matched = new Set();
  for (const input of snapshot.matchups) {
    const ids = input.teams.map(t => config.teams[t.espnId].id);
    let m = week.matchups.find(m => m.teams.length === 2 && ids.every(id => m.teams.includes(id)));
    if (!m) {
      check(week.matchups.length < 2, 'Los rivales no coinciden con los cruces existentes.');
      m = { id: `w${week.week}-m${week.matchups.length + 1}`, teams: ids };
      week.matchups.push(m);
    }
    matched.add(m.id);
    const stats = Object.fromEntries(m.teams.map(id => [id, Object.fromEntries(keys.map(k =>
      [k, input.teams.find(t => config.teams[t.espnId].id === id).stats[k]]))]));
    const unchanged = m.status === snapshot.status && m.teams.every(id => sameStats(m.stats?.[id], stats[id]));
    check(m.status !== 'final' || unchanged, 'Un resultado final guardado requiere revisión manual para corregirlo.');
    check(!m.updatedAt || Date.parse(snapshot.capturedAt) >= Date.parse(m.updatedAt), 'El corte es anterior al último publicado.');
    if (unchanged) continue;
    changed = true;
    Object.assign(m, { status: snapshot.status, stats, updatedAt: snapshot.capturedAt,
      sourceMode: 'espn', source: snapshot.retrieval === 'espn-fantasy-api' ? 'Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.' : 'Totales semanales oficiales de ESPN Fantasy, consultados en el marcador de la liga con sesión autenticada.',
      sourceUrl: `https://fantasy.espn.com/basketball/boxscore?leagueId=${config.leagueId}&matchupPeriodId=${week.week}&seasonId=${config.seasonId}&teamId=${input.teams[0].espnId}`,
      sourceSnapshot: `./${snapshotPath(snapshot.capturedAt)}` });
    delete m.updatedDate;
    delete m.updatedAtApproximate;
  }
  check(week.matchups.length === 2 && matched.size === 2, 'Los cruces no cubren toda la fecha.');
  return { schedule, changed };
}

function writeSnapshots(snapshots, root = path.resolve(__dirname, '..')) {
  check(Array.isArray(snapshots) && snapshots.length > 0, 'Falta un corte para importar.');
  const dataPath = path.join(root, 'js/data.js');
  const original = fs.readFileSync(dataPath, 'utf8');
  const ctx = { window: {} };
  vm.runInNewContext(original, ctx, { filename: dataPath });
  const changed = [];
  for (const snapshot of snapshots) {
    const result = importSnapshot(ctx.window.LEAGUE_DATA, snapshot);
    ctx.window.LEAGUE_DATA.schedule = result.schedule;
    if (result.changed) changed.push(snapshot);
  }
  if (!changed.length) return false;
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const normalized = original.replace(/\r\n/g, '\n');
  const pattern = /^schedule: \[[\s\S]*?\n\],(?=\n\n\/\* Power ranking)/m;
  check(pattern.test(normalized), 'No se encontró el bloque de calendario: no se modificó ningún archivo.');
  const next = normalized.replace(pattern, () => `schedule: ${JSON.stringify(ctx.window.LEAGUE_DATA.schedule, null, 2)},`).replace(/\n/g, eol);
  const audits = changed.map(snapshot => ({ snapshot, file: path.join(root, snapshotPath(snapshot.capturedAt)) }));
  check(new Set(audits.map(a => a.file)).size === audits.length, 'Cada corte de un lote debe tener una hora distinta.');
  for (const { snapshot, file } of audits) {
    check(!fs.existsSync(file) || isDeepStrictEqual(JSON.parse(fs.readFileSync(file, 'utf8')), snapshot),
      'Ya existe un corte distinto con esa hora.');
  }
  for (const { snapshot, file } of audits) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(snapshot, null, 2) + '\n');
  }
  fs.writeFileSync(dataPath, next);
  const indexPath = path.join(root, 'index.html');
  const version = new Date(Math.max(...changed.map(s => Date.parse(s.capturedAt)))).toISOString().replace(/\D/g, '').slice(0, 14);
  fs.writeFileSync(indexPath, fs.readFileSync(indexPath, 'utf8').replace(/(\?v=)\d+/g, (_, prefix) => prefix + version));
  return true;
}

function main() {
  check(process.argv.length === 3, 'Uso: node scripts/update-espn-results.cjs <corte.json>');
  const snapshot = JSON.parse(fs.readFileSync(path.resolve(process.argv[2]), 'utf8'));
  console.log(writeSnapshots([snapshot]) ? `Semana ${snapshot.matchupPeriodId} actualizada (${snapshot.status}). Corte: ${snapshot.capturedAt}` : 'Sin cambios en los resultados.');
}

module.exports = { importSnapshot, writeSnapshots };
if (require.main === module) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
