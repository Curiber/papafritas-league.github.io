'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

function app() {
  const nodes = {};
  const ctx = {
    Intl, Date, console,
    location: { hash: '', href: 'https://example.org/' },
    setTimeout: () => 0, clearTimeout() {},
    window: { innerHeight: 800, addEventListener() {}, scrollTo() {} },
    document: {
      title: '', documentElement: { clientHeight: 800 },
      body: { classList: { toggle() {} } },
      querySelector(selector) {
        if (selector === '#copy' || selector === '.arena' || selector === '.ticker') return null;
        return nodes[selector] ??= { innerHTML: '', textContent: '', addEventListener() {}, focus() {} };
      },
      querySelectorAll: () => []
    }
  };
  vm.createContext(ctx);
  for (const file of ['js/data.js', 'js/app.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });
  }
  return { ctx, nodes, data: ctx.window.LEAGUE_DATA, run: code => vm.runInContext(code, ctx) };
}

test('el corte reproduce el 4-4-1 y el 7-2 de la captura; TO favorece menos pérdidas', () => {
  const a = app();
  const scores = JSON.parse(a.run('JSON.stringify(allMatchups().map(m => evaluate(m).score))'));
  assert.deepEqual(scores, [{ a: 4, b: 4, t: 1 }, { a: 7, b: 2, t: 0 }]);
  assert.equal(a.run("evaluate(matchupById('w1-m1')).cats.find(c=>c.key==='to').w"), 'b');
  assert.equal(a.run("evaluate(matchupById('w1-m2')).cats.find(c=>c.key==='to').w"), 'b');
  assert.equal(a.run("fmtStat(D.categories[0], .4085)"), '40.85%');
});

test('parciales no se presentan como finales ni afectan la clasificación', () => {
  const a = app();
  assert.equal(a.run('played()'), false);
  assert.equal(a.run('standings().every(r=>r.w===0 && r.l===0 && r.t===0 && r.cw===0)'), true);
  for (const status of ['partial', 'live']) {
    a.ctx.fixture = { ...a.data.schedule[0].matchups[0], status, start: '2026-10-20', end: '2026-10-25' };
    const html = a.run('matchupPage(fixture)');
    assert.match(html, /<small>Parcial<\/small>/);
    assert.doesNotMatch(html, /<small>Final/);
    assert.match(html, /1 categoría empatada/);
    assert.match(html, /aprox\./);
  }
  assert.equal((a.run('standingsTable()').match(/class="pos">—/g) || []).length, 4);
});

test('solo un cierre explícito agrega un resultado definitivo', () => {
  const a = app();
  a.data.schedule[0].matchups[1].status = 'final';
  assert.equal(a.run("standings().find(r=>r.id==='pilsens').w"), 1);
  assert.equal(a.run("standings().find(r=>r.id==='shockers').l"), 1);
  assert.equal(a.run("standings().find(r=>r.id==='hipopotamos').t"), 0);
  assert.equal(a.run('played()'), true);
});

test('una cifra ausente o inválida no adjudica categorías ni genera resultados', () => {
  const a = app();
  for (const bad of [undefined, null, NaN, Infinity, -1, '80', 2.5]) {
    a.ctx.fixture = structuredClone(a.data.schedule[0].matchups[0]);
    a.ctx.fixture.stats.hipopotamos.reb = bad;
    assert.equal(a.run('evaluate(fixture)'), null);
  }
  a.ctx.fixture.stats.hipopotamos.reb = 80;
  a.ctx.fixture.stats.hipopotamos.fgp = 1.5;
  assert.equal(a.run('evaluate(fixture)'), null);
  a.data.schedule[0].matchups[0].status = 'final';
  delete a.data.schedule[0].matchups[0].stats.hipopotamos.ast;
  assert.equal(a.run('played()'), false);
  assert.equal(a.run('standings().every(r=>r.w===0 && r.l===0 && r.t===0)'), true);
  const empty = Object.fromEntries(a.data.categories.map(c => [c.key, 0]));
  a.ctx.fixture.stats = { hipopotamos: empty, pelafustanes: { ...empty } };
  assert.equal(a.run('evaluate(fixture).score.t'), 9);
});

test('las actas individuales reconstruyen las 36 cifras de la captura', () => {
  const a = app(), report = a.data.statisticsReports[0];
  assert.equal(report.players.length, 52);
  assert.equal(report.players.filter(p => p.stats).length, 49);
  assert.equal(report.players.filter(p => p.gp === null && p.stats === null).length, 3);
  assert.equal(report.games.length, 16);
  for (const m of a.data.schedule[0].matchups) {
    for (const id of m.teams) {
      const totals = Object.fromEntries(['fgm', 'fga', 'ftm', 'fta', 'tpm', 'reb', 'ast', 'stl', 'blk', 'to', 'pts'].map(k => [k, 0]));
      for (const p of report.players.filter(p => p.team === id && p.stats)) {
        assert.equal(p.gp, p.games.length);
        for (const key of Object.keys(totals)) totals[key] += p.stats[key];
      }
      totals.fgp = Math.round(totals.fgm / totals.fga * 10000) / 10000;
      totals.ftp = Math.round(totals.ftm / totals.fta * 10000) / 10000;
      for (const c of a.data.categories) assert.equal(totals[c.key], m.stats[id][c.key], id + ': ' + c.key);
    }
  }
  assert.ok(fs.existsSync(path.join(root, report.sourceImage)));
});

test('la crónica incluye cuatro equipos, actas desplegables y fuentes', () => {
  const a = app();
  const html = a.run("article(D.posts.find(p=>p.id==='parciales-semana-1-23-octubre'))");
  assert.match(html, /Crónica parcial/);
  assert.match(html, /Corte manual/);
  assert.equal((html.match(/class="report-scroll"/g) || []).length, 4);
  assert.match(html, /site\.api\.espn\.com/);
  assert.match(html, /No hay información de conversaciones de trade/);
  for (const team of a.data.teams) assert.ok(html.includes(team.name));
});

test('las vistas existentes y los enlaces directos siguen disponibles', () => {
  const a = app();
  const routes = ['', '#calendario', '#reglas', '#noticias', '#ranking', '#equipos',
    ...a.data.teams.map(t => '#equipo/' + t.id), ...a.data.posts.map(p => '#nota/' + p.id),
    '#cruce/w1-m1', '#cruce/w1-m2'];
  for (const route of routes) {
    a.ctx.location.hash = route;
    a.run('route()');
    assert.match(a.nodes['#contenido'].innerHTML, /<h1/);
    assert.doesNotMatch(a.nodes['#contenido'].innerHTML, /Página no encontrada/);
  }
});
