'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const { importSnapshot } = require('../scripts/update-espn-results.cjs');
const root = path.resolve(__dirname, '..');
const fixturePath = 'assets/cortes/espn/20261027T133752Z.json';
const fixture = () => JSON.parse(fs.readFileSync(path.join(root, fixturePath), 'utf8'));
function data() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8'), ctx);
  const d = JSON.parse(JSON.stringify(ctx.window.LEAGUE_DATA));
  d.schedule = d.schedule.filter(w => w.week === 1);
  return d;
}

test('importa las 36 cifras de ESPN y conserva los datos ajenos al corte', () => {
  const d = data(), before = JSON.stringify(d), snapshot = fixture();
  const result = importSnapshot(d, snapshot);
  assert.equal(result.changed, true);
  assert.equal(JSON.stringify(d), before, 'la validación no muta sus datos de entrada');
  assert.deepEqual(result.schedule[0], d.schedule[0]);
  const week = result.schedule[1];
  assert.equal(week.start, '2026-10-26'); assert.equal(week.end, '2026-11-01');
  for (const input of snapshot.matchups) {
    for (const t of input.teams) {
      const id = require('../config/espn.json').teams[t.espnId].id;
      const m = week.matchups.find(m => m.teams.includes(id));
      assert.deepEqual(m.stats[id], t.stats);
      assert.equal(m.status, 'partial');
      assert.equal(m.updatedAt, snapshot.capturedAt);
      assert.equal(m.sourceMode, 'espn');
      assert.ok(fs.existsSync(path.join(root, m.sourceSnapshot)));
    }
  }
  const updated = { ...d, schedule: result.schedule };
  const next = fixture(); next.capturedAt = '2026-10-27T14:00:00Z';
  next.matchups.reverse(); next.matchups.forEach(m => m.teams.reverse());
  const repeated = importSnapshot(updated, next);
  assert.equal(repeated.changed, false);
  assert.deepEqual(repeated.schedule, result.schedule, 'sin novedades no se cambia la hora ni la orientación');
});

test('rechaza datos incompletos, marcadores inconsistentes y equipos incorrectos', () => {
  const mutations = [
    s => { s.leagueId = 1; }, s => { s.seasonId = 2026; },
    s => { s.matchups.pop(); }, s => { s.matchups[1].teams[0].espnId = 4; },
    s => { s.matchups[0].teams[0].name = 'Otro equipo'; },
    s => { delete s.matchups[0].teams[0].stats.ast; },
    s => { s.matchups[0].teams[0].stats.reb = -1; },
    s => { s.matchups[0].teams[0].stats.reb = 2.5; },
    s => { s.matchups[0].teams[0].stats.fgp = 46.75; },
    s => { s.matchups[0].teams[0].stats.to = '15'; },
    s => { s.matchups[0].teams[0].score = [7, 2, 0]; },
    s => { s.capturedAt = '2026-10-27T10:37:52'; },
    s => { s.start = '2026-11-02'; s.end = '2026-11-08'; },
    s => { s.end = '2026-10-25'; }, s => { s.status = 'final'; }
  ];
  for (const mutate of mutations) {
    const s = fixture(), d = data(), before = JSON.stringify(d);
    mutate(s); assert.throws(() => importSnapshot(d, s));
    assert.equal(JSON.stringify(d), before);
  }
});

test('conserva precisión, impide retroceder y exige cierre confirmado antes de sumar finales', () => {
  const s = fixture(), d = data();
  s.matchups[0].teams[1].stats.fgp = .46753246;
  let result = importSnapshot(d, s);
  assert.equal(result.schedule[1].matchups[0].stats.hipopotamos.fgp, .46753247);
  const updated = { ...d, schedule: result.schedule };
  const older = structuredClone(s); older.capturedAt = '2026-10-27T12:00:00Z';
  assert.throws(() => importSnapshot(updated, older), /anterior/);
  const final = structuredClone(s); final.status = 'final'; final.finalConfirmed = true;
  assert.throws(() => importSnapshot(updated, final), /período terminado/);
  final.capturedAt = '2026-11-02T10:00:00Z';
  result = importSnapshot(updated, final);
  assert.equal(result.schedule[1].matchups[0].status, 'final');
  final.matchups[0].teams[0].stats.pts++;
  assert.throws(() => importSnapshot({ ...d, schedule: result.schedule }, final), /final guardado/);
});

test('el comando actualiza calendario, auditoría y versión; repetirlo no escribe cambios', t => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'papafritas-espn-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(dir)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(dir).startsWith('papafritas-espn-'));
    fs.rmSync(dir, { recursive: true, force: true });
  });
  for (const file of ['scripts/update-espn-results.cjs', 'config/espn.json', 'js/data.js', 'index.html']) {
    const dest = path.join(dir, file); fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(root, file), dest);
  }
  // Keep the actual source format and remove only week 2 for this isolated import.
  const source = fs.readFileSync(path.join(root, 'js/data.js'), 'utf8').replace(/\r\n/g, '\n');
  fs.writeFileSync(path.join(dir, 'js/data.js'), source.replace(/^schedule: \[[\s\S]*?\n\],(?=\n\n\/\* Power ranking)/m,
    () => 'schedule: ' + JSON.stringify(data().schedule, null, 2) + ','));
  const input = path.join(dir, 'input.json'); fs.writeFileSync(input, JSON.stringify(fixture()));
  const run = () => spawnSync(process.execPath, ['scripts/update-espn-results.cjs', input], { cwd: dir, encoding: 'utf8' });
  let outcome = run(); assert.equal(outcome.status, 0, outcome.stderr);
  const files = ['js/data.js', 'index.html', fixturePath];
  const before = files.map(f => fs.readFileSync(path.join(dir, f), 'utf8'));
  assert.match(before[1], /js\/data.js\?v=20261027133752/);
  assert.ok(!before[1].includes('?v=2026102604'));
  outcome = run(); assert.equal(outcome.status, 0, outcome.stderr);
  assert.match(outcome.stdout, /Sin cambios/);
  assert.deepEqual(files.map(f => fs.readFileSync(path.join(dir, f), 'utf8')), before);
});
