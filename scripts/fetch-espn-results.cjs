'use strict';
// ESPN's read-only Fantasy API; only sanitized category totals reach the repository.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const config = require('../config/espn.json');
const { importSnapshot, writeSnapshots } = require('./update-espn-results.cjs');
const statsMap = { fgp: '19', ftp: '20', tpm: '17', reb: '6', ast: '3', stl: '2', blk: '1', to: '11', pts: '0' };
const check = (ok, message) => { if (!ok) throw new Error(message); };

function leagueUrl(views, scoringPeriodId) {
  const url = new URL(`https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${config.seasonId}/segments/0/leagues/${config.leagueId}`);
  for (const view of views) url.searchParams.append('view', view);
  if (scoringPeriodId !== undefined) url.searchParams.set('scoringPeriodId', scoringPeriodId);
  return url;
}

async function readLeague({ views, scoringPeriodId, matchupPeriodId }, { fetchImpl = fetch, env = process.env } = {}) {
  const s2 = env.ESPN_S2?.trim(), swid = env.ESPN_SWID?.trim();
  check(Boolean(s2) === Boolean(swid), 'Configura ambos secretos de Actions: ESPN_S2 y ESPN_SWID.');
  check(![s2, swid].some(v => v && /[\r\n;]/.test(v)), 'Los secretos de ESPN deben contener solo el valor de cada cookie.');
  const headers = { Accept: 'application/json' };
  if (s2) headers.Cookie = `espn_s2=${s2}; SWID=${swid}`;
  if (matchupPeriodId !== undefined) headers['x-fantasy-filter'] = JSON.stringify({ schedule: { filterMatchupPeriodIds: { value: [matchupPeriodId] } } });
  let response;
  try {
    response = await fetchImpl(leagueUrl(views, scoringPeriodId), { headers, redirect: 'error', signal: AbortSignal.timeout(30000) });
  } catch {
    throw new Error('No se pudo conectar con ESPN. No se modificaron resultados.');
  }
  if ([401, 403].includes(response.status)) throw new Error(`ESPN rechazó el acceso (HTTP ${response.status}). Agrega o renueva ESPN_S2 y ESPN_SWID en Settings > Secrets and variables > Actions. No pegues sus valores en logs ni en el chat.`);
  check(response.ok, `ESPN respondió HTTP ${response.status}. No se modificaron resultados.`);
  let data;
  try { data = await response.json(); } catch { throw new Error('ESPN no devolvió JSON válido. No se modificaron resultados.'); }
  check(data?.id === config.leagueId && data.seasonId === config.seasonId, 'ESPN devolvió otra liga o temporada.');
  return data;
}

function periodDates(meta, period) {
  check(meta.status?.firstScoringPeriod === 1, 'Revisar la fecha de inicio de la temporada en config/espn.json.');
  const days = meta.settings?.scheduleSettings?.matchupPeriods?.[period];
  check(Array.isArray(days) && days.length > 0 && days.every((d, i) => Number.isInteger(d) && d >= 1 && (!i || d === days[i - 1] + 1)),
    `ESPN no informó las jornadas consecutivas del período ${period}.`);
  const dateAt = n => new Date(Date.parse(config.scoringPeriodStartDate + 'T12:00:00Z') + (n - 1) * 86400000).toISOString().slice(0, 10);
  return { start: dateAt(days[0]), end: dateAt(days.at(-1)), lastScoringPeriod: days.at(-1) };
}

function snapshotFromApi(meta, scores, period, capturedAt, data) {
  check(Number.isInteger(meta.status?.currentMatchupPeriod), 'ESPN no informó el período vigente.');
  const { start, end } = periodDates(meta, period);
  const rows = scores.schedule?.filter(m => m.matchupPeriodId === period);
  check(rows?.length === 2, `Se requieren los dos cruces oficiales del período ${period}.`);
  const capturedDate = new Intl.DateTimeFormat('en-CA', { timeZone: config.timeZone }).format(new Date(capturedAt));
  const final = period < meta.status.currentMatchupPeriod && capturedDate > end;
  if (final) check(rows.every(m => ['HOME', 'AWAY', 'TIE'].includes(m.winner)), 'ESPN todavía no confirmó el cierre del período anterior.');
  const snapshot = { leagueId: config.leagueId, seasonId: config.seasonId, matchupPeriodId: period, start, end,
    capturedAt, status: final ? 'final' : 'partial', retrieval: 'espn-fantasy-api',
    ...(final ? { finalConfirmed: true } : {}), matchups: rows.map(m => ({ teams: ['home', 'away'].map(side => {
      const other = side === 'home' ? 'away' : 'home';
      const t = m[side], cumulative = t?.cumulativeScore;
      const identity = meta.teams?.find(team => team.id === t?.teamId);
      const name = identity?.name || [identity?.location, identity?.nickname].filter(Boolean).join(' ');
      check(cumulative?.scoreByStat && identity, 'Faltan totales acumulados o la identidad del equipo.');
      check(Object.keys(cumulative.scoreByStat).length === 9 && Object.values(statsMap).every(id => Object.hasOwn(cumulative.scoreByStat, id)),
        'La respuesta no contiene exactamente las nueve categorías de la liga.');
      const score = [cumulative.wins, m[other]?.cumulativeScore?.wins, cumulative.ties];
      check(cumulative.ties === m[other]?.cumulativeScore?.ties, 'ESPN informó empates inconsistentes.');
      return { espnId: t.teamId, name, score,
        stats: Object.fromEntries(Object.entries(statsMap).map(([key, id]) => [key, cumulative.scoreByStat[id].score])) };
    }) })) };
  importSnapshot(data, snapshot); // Reuse all identity, totals, result and history checks before writing.
  if (final) {
    for (let i = 0; i < rows.length; i++) {
      const [wins, losses] = snapshot.matchups[i].teams[0].score;
      check(rows[i].winner === (wins > losses ? 'HOME' : wins < losses ? 'AWAY' : 'TIE'), 'El ganador oficial no coincide con las categorías.');
    }
  }
  return snapshot;
}

async function refreshResults({ root = path.resolve(__dirname, '..'), read = readLeague, now = () => new Date() } = {}) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8'), ctx);
  const data = ctx.window.LEAGUE_DATA;
  const meta = await read({ views: ['mSettings', 'mTeam', 'mMatchup'] });
  const current = meta.status?.currentMatchupPeriod;
  check(Number.isInteger(current) && current > 0, 'ESPN no informó un período vigente válido.');
  check(Number.isInteger(meta.scoringPeriodId) && meta.scoringPeriodId > 0, 'ESPN no informó la jornada vigente.');
  const pending = data.schedule.filter(w => w.week < current && w.matchups.some(m => ['partial', 'live'].includes(m.status))).map(w => w.week);
  const snapshots = [];
  for (const period of [...pending, current]) {
    const { lastScoringPeriod, start } = periodDates(meta, period);
    const stamp = now().toISOString();
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: config.timeZone }).format(new Date(stamp));
    if (today < start) continue;
    const scores = await read({ views: ['mMatchupScore', 'mScoreboard'], matchupPeriodId: period,
      scoringPeriodId: period < current ? lastScoringPeriod : meta.scoringPeriodId });
    check(!scores.status?.currentMatchupPeriod || scores.status.currentMatchupPeriod === current, 'ESPN cambió de período durante la consulta. Ejecutar nuevamente.');
    // All-zero current weeks have not started; a missing category still fails validation.
    if (period === current && scores.schedule?.filter(m => m.matchupPeriodId === period).length === 2 &&
      scores.schedule.filter(m => m.matchupPeriodId === period).every(m => ['home', 'away'].every(side => m[side]?.cumulativeScore?.scoreByStat?.['0']?.score === 0))) continue;
    const capturedAt = now().toISOString();
    snapshots.push(snapshotFromApi(meta, scores, period, capturedAt, data));
  }
  // Validate every response first, so a failure never publishes a half-updated round.
  return snapshots.length > 0 && writeSnapshots(snapshots, root);
}

module.exports = { readLeague, periodDates, snapshotFromApi, refreshResults };
if (require.main === module) refreshResults().then(changed => console.log(changed ? 'Resultados oficiales actualizados.' : 'Sin cambios en los resultados.'))
  .catch(error => { console.error(error.message); process.exitCode = 1; });
