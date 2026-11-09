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

// Retained Oct 23 snapshot: later final scores must not replace this fixture.
function partialApp() {
  const a = app();
  a.data.schedule = [a.data.schedule.find(w => w.week === 1)];
  const stats = {
    hipopotamos: {fgp:.4085,ftp:.6857,tpm:21,reb:80,ast:59,stl:17,blk:8,to:33,pts:179},
    pelafustanes: {fgp:.4626,ftp:.7941,tpm:21,reb:70,ast:21,stl:9,blk:7,to:31,pts:211},
    pilsens: {fgp:.4412,ftp:.7586,tpm:21,reb:87,ast:45,stl:17,blk:4,to:37,pts:245},
    shockers: {fgp:.4074,ftp:.7209,tpm:14,reb:69,ast:44,stl:16,blk:10,to:22,pts:177}
  };
  for (const m of a.data.schedule[0].matchups) {
    Object.assign(m, {status:'partial',updatedAt:'2026-10-23T10:21:00-03:00',updatedAtApproximate:true,
      stats:Object.fromEntries(m.teams.map(id=>[id,stats[id]]))});
    delete m.updatedDate;
  }
  return a;
}

test('el corte reproduce el 4-4-1 y el 7-2 de la captura; TO favorece menos pérdidas', () => {
  const a = partialApp();
  const scores = JSON.parse(a.run('JSON.stringify(allMatchups().map(m => evaluate(m).score))'));
  assert.deepEqual(scores, [{ a: 4, b: 4, t: 1 }, { a: 7, b: 2, t: 0 }]);
  assert.equal(a.run("evaluate(matchupById('w1-m1')).cats.find(c=>c.key==='to').w"), 'b');
  assert.equal(a.run("evaluate(matchupById('w1-m2')).cats.find(c=>c.key==='to').w"), 'b');
  assert.equal(a.run("fmtStat(D.categories[0], .4085)"), '40.85%');
});

test('parciales no se presentan como finales ni afectan la clasificación', () => {
  const a = partialApp();
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
  const a = partialApp();
  a.data.schedule[0].matchups[1].status = 'final';
  assert.equal(a.run("standings().find(r=>r.id==='pilsens').w"), 1);
  assert.equal(a.run("standings().find(r=>r.id==='shockers').l"), 1);
  assert.equal(a.run("standings().find(r=>r.id==='hipopotamos').t"), 0);
  assert.equal(a.run('played()'), true);
});

test('una cifra ausente o inválida no adjudica categorías ni genera resultados', () => {
  const a = partialApp();
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
  const a = partialApp(), report = a.data.statisticsReports.find(r=>r.id==='semana-1-corte-2026-10-23');
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
    ...a.data.schedule.flatMap(w => w.matchups.map(m => '#cruce/' + m.id))];
  for (const route of routes) {
    a.ctx.location.hash = route;
    a.run('route()');
    assert.match(a.nodes['#contenido'].innerHTML, /<h1/);
    assert.doesNotMatch(a.nodes['#contenido'].innerHTML, /Página no encontrada/);
  }
});

test('el cierre reproduce los dos marcadores y la clasificación por categorías de ESPN', () => {
  const a = app();
  a.data.schedule = a.data.schedule.filter(w => w.week === 1);
  assert.deepEqual(JSON.parse(a.run('JSON.stringify(allMatchups().filter(m=>m.week===1).map(m=>evaluate(m).score))')),
    [{a:7,b:2,t:0},{a:5,b:4,t:0}]);
  assert.deepEqual(JSON.parse(a.run('JSON.stringify(standings().map(r=>[r.id,recordOf(r.id),r.w+r.l+r.t]))')),
    [['hipopotamos','7-2-0',1],['pilsens','5-4-0',1],['shockers','4-5-0',1],['pelafustanes','2-7-0',1]]);
  assert.equal(a.run("evaluate(matchupById('w1-m1')).cats.find(c=>c.key==='to').w"),'a');
  assert.equal(a.run("evaluate(matchupById('w1-m2')).cats.find(c=>c.key==='to').w"),'a');
  for (const id of ['w1-m1','w1-m2']) {
    const html = a.run(`matchupPage(matchupById('${id}'))`);
    assert.match(html, /<small>Final<\/small>/);
    assert.match(html, /Resultado confirmado: 26 de octubre de 2026/);
    assert.doesNotMatch(html, /Corte manual|aprox\.|Marcador parcial/);
  }
});

test('el corte importado de ESPN aparece como parcial con fecha, fuentes y sin alterar la tabla', () => {
  const a = app();
  a.data.schedule = a.data.schedule.filter(w => w.week === 1);
  const before = a.run('JSON.stringify(standings())');
  const snapshot = require('../assets/cortes/espn/20261027T133752Z.json');
  a.data.schedule = require('../scripts/update-espn-results.cjs').importSnapshot(a.data, snapshot).schedule;
  assert.equal(a.run('JSON.stringify(standings())'), before);
  assert.deepEqual(JSON.parse(a.run('JSON.stringify(allMatchups().filter(m=>m.week===2).map(m=>evaluate(m).score))')),
    [{ a:6, b:3, t:0 }, { a:3, b:6, t:0 }]);
  assert.match(a.run('home()'), /Semana 2/);
  for (const id of ['w2-m1', 'w2-m2']) {
    const html = a.run(`matchupPage(matchupById('${id}'))`);
    assert.match(html, /<small>Parcial<\/small>/);
    assert.match(html, /Corte ESPN:/);
    assert.match(html, /10:37/);
    assert.match(html, /Actualizaciones previstas a las 02:00, 06:17 y 09:37/);
    assert.match(html, /Ver cruce en ESPN/);
    assert.match(html, /Datos de este corte/);
    assert.doesNotMatch(html, /Corte manual|actualización manual|aprox\./);
  }
});

test('la crónica del viernes conserva sus parciales y su agenda cuando cambia el marcador en vivo', () => {
  const a=app(),p=a.data.posts.find(p=>p.id==='clasicos-al-limite-viernes-30-octubre');
  const html=()=>a.run("article(D.posts.find(p=>p.id==='clasicos-al-limite-viernes-30-octubre'))");
  const before=html();
  assert.equal(p.partial,true);assert.equal(p.date,'2026-10-30');
  assert.match(before,/Crónica parcial/);assert.match(before,/Corte ESPN/);assert.match(before,/13:31/);
  assert.equal((before.match(/class="match reveal"/g)||[]).length,2);
  assert.equal(a.run("evaluate(D.posts.find(p=>p.id==='clasicos-al-limite-viernes-30-octubre').fantasySnapshot.matchups[0]).score.a"),5);
  assert.equal(a.run("evaluate(D.posts.find(p=>p.id==='clasicos-al-limite-viernes-30-octubre').fantasySnapshot.matchups[1]).score.b"),7);
  for(const team of a.data.teams)assert.ok(before.includes(team.name));
  a.data.schedule.find(w=>w.week===2).matchups[0].stats.hipopotamos.pts=100000;
  assert.equal(html(),before,'los cortes archivados no siguen el marcador en vivo');
  const calendar=JSON.parse(fs.readFileSync(path.join(root,'assets/cortes/semana-2-fin-de-semana-2026-10-30.json'),'utf8'));
  assert.equal(calendar.schedule.reduce((n,d)=>n+d.events.length,0),21);
  const expected={shockers:20,pilsens:17,pelafustanes:17,hipopotamos:19};
  for(const t of calendar.teams)assert.equal(t.players.reduce((n,p)=>n+p.scheduledGames.length,0),expected[t.team]);
  for(const source of p.sources.filter(s=>s.url.startsWith('./')))assert.ok(fs.existsSync(path.join(root,source.url)));
});

test('el cierre de la semana 2 reconstruye las nueve categorías sin sumar actas NBA ajenas al cómputo',()=>{
  const a=app(),r=a.data.statisticsReports.find(r=>r.id==='semana-2-final-2026-11-01');
  assert.equal(r.players.length,52);
  for(const t of a.data.teams){
    const sum=Object.fromEntries(['fgm','fga','ftm','fta','tpm','reb','ast','stl','blk','to','pts'].map(k=>[k,0]));
    for(const p of r.players.filter(p=>p.team===t.id)){
      assert.equal(p.gp,p.games.length);assert.equal(p.nbaGp,p.nbaGames.length);
      assert.ok(p.gp<=p.nbaGp);assert.ok(p.games.every(id=>p.nbaGames.includes(id)));
      for(const k in sum)sum[k]+=p.stats[k];
    }
    const total=r.teamTotals[t.id];
    for(const k of ['tpm','reb','ast','stl','blk','to','pts'])assert.equal(sum[k],total[k],t.id+': '+k);
    assert.ok(Math.abs(sum.fgm/sum.fga-total.fgp)<1e-8);
    assert.ok(Math.abs(sum.ftm/sum.fta-total.ftp)<1e-8);
  }
  const luka=r.players.find(p=>p.espnId===3945274);
  assert.ok(luka.nbaStats.pts>luka.stats.pts,'NBA y fantasy no son intercambiables');
  const html=a.run("article(D.posts.find(p=>p.id==='cierre-semana-2-shockers-mequetrefes'))");
  assert.equal((html.match(/class="report-scroll"/g)||[]).length,4);
  assert.match(html,/Cierre verificado/);assert.match(html,/No se atribuye un motivo de alineación/);
  assert.doesNotMatch(html,/las capturas no incluyen una hora|Portis, Klay Thompson y Gafford/);
});

test('la previa de la semana 3 no adelanta resultados y las rutas de mercado respetan tiers y franquicias',()=>{
  const a=app(),preview=a.data.posts.find(p=>p.id==='previa-semana-3-pilsens-hipopotamos-shockers-mequetrefes');
  const render=()=>a.run("article(D.posts.find(p=>p.id==='previa-semana-3-pilsens-hipopotamos-shockers-mequetrefes'))");
  const before=render(),announced=preview.fantasySnapshot;
  assert.deepEqual(Array.from(announced.matchups,m=>Array.from(m.teams)),[['pilsens','hipopotamos'],['shockers','pelafustanes']]);
  for(const m of announced.matchups){assert.equal(m.status,'scheduled');assert.equal(m.stats,undefined);}
  assert.match(before,/todavía sin resultado/);
  // A published preview stays unchanged when the real week starts or finishes.
  const totals=a.data.statisticsReports.find(r=>r.id==='semana-2-final-2026-11-01').teamTotals;
  for(const status of ['partial','final']){
    for(const m of a.data.schedule.find(w=>w.week===3).matchups){
      m.status=status;m.stats=Object.fromEntries(m.teams.map(id=>[id,structuredClone(totals[id])]));
    }
    assert.equal(render(),before);
  }
  const cut=JSON.parse(fs.readFileSync(path.join(root,'assets/cortes/semana-3-previa-mercado-2026-11-02.json'),'utf8'));
  const routes=[['shockers','Jaren Jackson Jr.','Jarrett Allen'],['shockers','Kon Knueppel','Ayo Dosunmu'],['pilsens','Jaylen Wells','Moussa Diabate'],['hipopotamos','Cason Wallace','Cam Spencer'],['hipopotamos','Naz Reid','Darius Acuff Jr.'],['pelafustanes','Malik Monk','Cam Spencer']];
  for(const [team,out,incoming]of routes){
    const roster=cut.teams.find(t=>t.team===team).players.filter(p=>p.name!==out);
    assert.equal(roster.length,12);roster.push(cut.marketCandidates.find(p=>p.name===incoming));
    const franchises=new Set();
    for(const tier of a.data.rules.tiers)assert.ok(roster.filter(p=>a.run(`playerTier(${JSON.stringify(p.name)})`)===tier.id).length<=tier.limit);
    for(const p of roster)if(a.run(`playerTier(${JSON.stringify(p.name)})`)){
      assert.ok(!franchises.has(p.nbaTeamId),incoming+': franquicia repetida');franchises.add(p.nbaTeamId);
    }
  }
  const market=a.data.posts.find(p=>p.id==='mercado-semana-3-flagg-especialistas-lesiones');
  const html=a.run("article(D.posts.find(p=>p.id==='mercado-semana-3-flagg-especialistas-lesiones'))");
  assert.match(html,/No hay ofertas confirmadas/);assert.doesNotMatch(html,/Haliburton|Michael Porter|\bMPJ\b|Trey Murphy/i);
  for(const file of [market.image.src,market.image.small])assert.ok(fs.existsSync(path.join(root,file)));
});

test('los 50 cómputos finales reconstruyen las 36 cifras sin confundir partidos NBA con fantasy', () => {
  const a = app(), r = a.data.statisticsReports.find(r=>r.status==='final');
  assert.equal(r.players.length,52);
  assert.equal(r.players.filter(p=>p.stats).length,50);
  assert.deepEqual(Array.from(r.players.filter(p=>!p.stats),p=>p.name).sort(),['AJ Dybantsa','Kon Knueppel']);
  for (const t of a.data.teams) {
    const sum = Object.fromEntries(['fgm','fga','ftm','fta','tpm','reb','ast','stl','blk','to','pts'].map(k=>[k,0]));
    for (const p of r.players.filter(p=>p.team===t.id && p.stats)) {
      assert.equal(p.gp,p.games.length);
      assert.equal(p.nbaGp,p.nbaGames.length);
      assert.ok(p.gp<=p.nbaGp);
      for (const k in sum) sum[k]+=p.stats[k];
    }
    sum.fgp=Math.round(sum.fgm/sum.fga*10000)/10000;
    sum.ftp=Math.round(sum.ftm/sum.fta*10000)/10000;
    const match=a.data.schedule[0].matchups.find(m=>m.teams.includes(t.id));
    for (const c of a.data.categories) assert.equal(sum[c.key],match.stats[t.id][c.key],t.id+': '+c.key);
  }
  for (const name of ['Bobby Portis','Klay Thompson','Daniel Gafford']) {
    const p=r.players.find(p=>p.name===name);
    assert.equal(p.gp,2); assert.equal(p.nbaGp,3);
  }
  for (const s of r.sourceImages) assert.ok(fs.existsSync(path.join(root,s.url)));
  const html=a.run("article(D.posts.find(p=>p.id==='cierre-semana-1-hipopotamos-pilsens'))");
  assert.equal((html.match(/class="report-scroll"/g)||[]).length,4);
  assert.match(html,/PJ NBA/); assert.match(html,/PJ cómputo/);
  assert.match(html,/Fuentes y alcance del cierre/);
  assert.doesNotMatch(html,/Los marcadores son parciales|aprox\./);
});

test('el mercado respeta exclusiones, fuentes, tiers y la distinción entre propuestas y movimientos', () => {
  const a=app(),p=a.data.posts.find(p=>p.id==='mercado-tras-semana-1-flagg-wagner');
  const html=a.run("article(D.posts.find(p=>p.id==='mercado-tras-semana-1-flagg-wagner'))");
  assert.doesNotMatch(html,/Haliburton|Michael Porter|\bMPJ\b|Trey Murphy/i);
  for (const name of ['Cooper Flagg','Franz Wagner','Nickeil Alexander-Walker','Wendell Carter Jr.','Brook Lopez','Duncan Robinson','Zach LaVine']) assert.ok(html.includes(name));
  assert.match(html,/No hay ofertas confirmadas/);
  assert.match(html,/esguince leve de hombro izquierdo/);
  assert.match(html,/manteniendo a Banchero no cumple/);
  assert.match(html,/tienen completos sus cupos/);
  assert.match(html,/No se registra ninguna alta, baja o trade/);
  assert.ok(p.sources.length>0);
  for (const [tag,indexes] of p.body) if(tag==='sources') for(const i of indexes) assert.ok(p.sources[i]?.url.startsWith('https://'));
  for(const t of a.data.teams) {
    assert.equal(t.roster.length,13);
    for(const tier of a.data.rules.tiers) assert.equal(t.roster.filter(name=>a.run(`playerTier(${JSON.stringify(name)})`)===tier.id).length,tier.limit);
  }
});

test('un empate de clasificación comparte posición sin usar el power ranking como desempate', () => {
  const a=app();
  a.data.schedule = a.data.schedule.filter(w => w.week === 1);
  const [m1,m2]=a.data.schedule[0].matchups;
  m2.stats.pilsens=structuredClone(m1.stats.hipopotamos);
  m2.stats.shockers=structuredClone(m1.stats.pelafustanes);
  assert.equal(a.run("standingPosition('hipopotamos')"),1);
  assert.equal(a.run("standingPosition('pilsens')"),1);
  const before=a.run('JSON.stringify(standings().map(r=>r.id))');
  a.data.rankings[0].entries.reverse();
  assert.equal(a.run('JSON.stringify(standings().map(r=>r.id))'),before);
});

test('la previa presenta los dos clásicos con estadísticas del cierre y sin adjudicar resultados futuros', () => {
  const a=app(),p=a.data.posts.find(p=>p.id==='previa-clasicos-santa-maria-familiar');
  assert.equal(p.category,'Previas');
  const html=a.run("article(D.posts.find(p=>p.id==='previa-clasicos-santa-maria-familiar'))");
  assert.match(html,/Clásico Santa María/);
  assert.match(html,/Clásico familiar/);
  assert.match(html,/Cromwell Pilsens con Mequetrefes/);
  assert.match(html,/Los Hipopotamos Chuchetumare y Penalolen Shockers/);
  assert.match(html,/Base estadística: cierre del 25 de octubre de 2026/);
  assert.match(html,/no son resultados ni proyecciones numéricas de la próxima fecha/);
  assert.doesNotMatch(html,/Haliburton|Michael Porter|\bMPJ\b|Trey Murphy/i);
  assert.equal(p.reportId,'semana-1-final-2026-10-25');
});

test('los diez waivers respetan los pares de altas/bajas y las pujas de la captura', () => {
  const a=app(),r=a.data.transactionReports[0];
  const expected=[
    ['pilsens','Darius Garland','Paolo Banchero',2],
    ['pilsens','Domantas Sabonis','Jalen Brunson',2],
    ['hipopotamos','Ace Bailey','Bennett Stirtz',6],
    ['hipopotamos','Walker Kessler','Onyeka Okongwu',6],
    ['shockers','Jonathan Kuminga','Herbert Jones',8],
    ['shockers','Paul Reed','Daniel Gafford',10],
    ['pelafustanes','Aaron Wiggins',"Royce O'Neale",10],
    ['shockers','Fred VanVleet','Jalen Suggs',14],
    ['pelafustanes','Jalen Smith','Klay Thompson',15],
    ['hipopotamos','Tyrese Haliburton','Josh Giddey',31]
  ];
  assert.deepEqual(JSON.parse(JSON.stringify(r.transactions.map(m=>[m.team,m.added.name,m.dropped.name,m.bid]))),expected);
  assert.equal(r.transactions.reduce((sum,m)=>sum+m.bid,0),104);
  assert.equal(r.transactions.every(m=>m.type==='waiver'),true);
  assert.equal(r.date,'2026-10-26');assert.equal(r.timeZoneShown,false);
  assert.ok(fs.existsSync(path.join(root,r.sourceImage)));
  const totals=Object.fromEntries(a.data.teams.map(t=>[t.id,r.transactions.filter(m=>m.team===t.id).reduce((sum,m)=>sum+m.bid,0)]));
  assert.deepEqual(totals,{shockers:32,pilsens:4,hipopotamos:43,pelafustanes:25});
});

test('el historial de movimientos reconstruye los planteles actuales y conserva los anteriores', () => {
  const a=app(),initial=a.data.rosterSnapshots.find(s=>s.date==='2026-10-20');
  const reports=Array.from(a.data.transactionReports).sort((x,y)=>x.date.localeCompare(y.date));
  for(const t of a.data.teams){
    const roster=Array.from(initial.teams.find(x=>x.id===t.id).roster);
    for(const r of reports){
      for(const move of r.transactions.filter(m=>m.team===t.id)){
        const i=roster.indexOf(move.dropped.name);assert.notEqual(i,-1);
        roster[i]=move.added.name;
      }
      const snapshot=a.data.rosterSnapshots.find(s=>s.date===r.date);
      assert.deepEqual(roster,Array.from(snapshot.teams.find(x=>x.id===t.id).roster));
    }
    assert.deepEqual(roster,Array.from(t.roster));assert.equal(t.roster.length,13);
  }
  assert.equal(new Set(a.data.teams.flatMap(t=>t.roster)).size,52);
  assert.equal(a.run("teamAt('hipopotamos','2026-10-25').roster.includes('Josh Giddey')"),true);
  assert.equal(a.run("teamAt('hipopotamos','2026-10-25').roster.includes('Tyrese Haliburton')"),false);
  assert.equal(a.run("teamAt('hipopotamos','2026-10-26').roster.includes('Tyrese Haliburton')"),true);
  assert.equal(a.run("teamAt('hipopotamos','2026-11-01').roster.includes('Tyrese Haliburton')"),true);
  assert.equal(a.run("teamAt('hipopotamos','2026-11-02').roster.includes('Devin Booker')"),true);
  assert.equal(a.run("teamAt('shockers','2026-11-01').roster.includes('Karl-Anthony Towns')"),true);
  assert.equal(a.run("teamAt('shockers','2026-11-02').roster.includes('Cooper Flagg')"),true);
  assert.match(a.run('rankPage()'),/Brunson/);
  assert.doesNotMatch(a.run('rankPage()'),/Domantas Sabonis/);
  assert.doesNotMatch(a.run("matchupPage(matchupById('w1-m2'))"),/Domantas Sabonis/);
  assert.match(a.run("teamPage(team('pilsens'))"),/Domantas Sabonis/);
});

test('la nueva noticia destaca el impacto deportivo y muestra los diez movimientos con su portada', () => {
  const a=app(),r=a.data.transactionReports[0],p=a.data.posts.find(p=>p.transactionReportId===r.id);
  const html=a.run(`article(D.posts.find(p=>p.id===${JSON.stringify(p.id)}))`);
  assert.equal((html.match(/class="waiver-featured"/g)||[]).length,3);
  for(const name of ['Tyrese Haliburton','Domantas Sabonis','Walker Kessler'])assert.ok(a.run("transactionHighlights('waivers-2026-10-26')").includes(name));
  assert.match(html,/\$104/);
  assert.match(html,/Jalen Smith, la segunda puja más alta/);
  assert.match(html,/ESPN Fantasy/);
  assert.match(html,/anteriores a estas adquisiciones/);
  assert.match(html,/class="article-cover"/);
  for(const f of [p.image.src,p.image.small])assert.ok(fs.existsSync(path.join(root,f)));
  assert.equal(r.nbaPlayers.length,10);
  for(const [tag,indexes]of p.body)if(tag==='sources')for(const i of indexes)assert.ok(p.sources[i]?.url.startsWith('https://site.api.espn.com/'));
});

test('el reporte del 2 de noviembre distingue ocho altas de diez ofertas fallidas y suma solo $96',()=>{
  const a=app(),r=a.data.transactionReports.find(r=>r.id==='waivers-2026-11-02');
  const expected=[
    ['shockers','Cooper Flagg','Karl-Anthony Towns',52],
    ['pilsens','Franz Wagner','Darius Garland',15],
    ['hipopotamos','Christian Braun','Cason Wallace',9],
    ['shockers','Yaxel Lendeborg','Kon Knueppel',7],
    ['pilsens','Tyrese Maxey','Anthony Edwards',5],
    ['hipopotamos','Ajay Mitchell','VJ Edgecombe',5],
    ['hipopotamos','Devin Booker','Tyrese Haliburton',2],
    ['shockers','Jarrett Allen','Jaren Jackson Jr.',1]
  ];
  assert.deepEqual(JSON.parse(JSON.stringify(r.transactions.map(m=>[m.team,m.added.name,m.dropped.name,m.bid]))),expected);
  assert.equal(r.offers.length,18);assert.equal(r.offers.filter(o=>o.result==='added').length,8);
  assert.equal(r.transactions.reduce((s,m)=>s+m.bid,0),96);
  assert.deepEqual(Object.fromEntries(a.data.teams.map(t=>[t.id,r.transactions.filter(m=>m.team===t.id).reduce((s,m)=>s+m.bid,0)])),{shockers:60,pilsens:20,hipopotamos:16,pelafustanes:0});
  const rosterAtReport=a.data.rosterSnapshots.find(s=>s.date===r.date);
  for(const o of r.offers){
    const t=rosterAtReport.teams.find(t=>t.id===o.team);
    if(o.result==='added')assert.ok(r.transactions.some(m=>m.id===o.transactionId&&m.added.name===o.claim.name&&m.bid===o.bid));
    else{assert.ok(!t.roster.includes(o.claim.name));assert.ok(!o.transactionId);}
  }
  const booker=r.offers.filter(o=>o.claim.name==='Devin Booker');
  assert.equal(booker[0].reasonCode,'already-dropped');assert.equal(booker[1].result,'added');
  assert.deepEqual(Array.from(r.offers.filter(o=>o.reasonCode==='acquisition-limit'),o=>o.claim.name),['Jrue Holiday','Jared McCain']);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root,'assets/cortes/ofertas-2026-11-02.json'),'utf8')),JSON.parse(JSON.stringify(r)));
  assert.ok(fs.existsSync(path.join(root,r.sourceImage)));
});

test('el vestuario se narra en voz directa dentro de Papafritas y conserva el registro de ESPN',()=>{
  const a=app(),p=a.data.posts.find(p=>p.id==='waivers-2-noviembre-flagg-booker-vestuario');
  const html=a.run("article(D.posts.find(p=>p.id==='waivers-2-noviembre-flagg-booker-vestuario'))");
  assert.match(html,/Vestuario Papafritas: despedidas y luchas por el mando/);
  assert.doesNotMatch(html,/ficci|fictic|imaginari|inventad|No son testimonios|fiction-note/i);
  assert.match(html,/Me lesioné, no renuncié al equipo/);assert.match(html,/casillero doble/);
  assert.equal((html.match(/class="waiver-featured"/g)||[]).length,4);
  const record=a.data.transactionReports.find(r=>r.id===p.transactionReportId);
  assert.doesNotMatch(JSON.stringify(record),/autoestima|Me lesioné|nuestro vestuario imaginario/);
  const bad=record.offers.find(o=>o.result==='unsuccessful');bad.reason='<img src=x onerror=alert(1)>';
  const offers=a.run("offersTable('waivers-2026-11-02')");
  assert.match(offers,/&lt;img/);assert.doesNotMatch(offers,/<img/);
  for(const f of [p.image.src,p.image.small])assert.ok(fs.existsSync(path.join(root,f)));
});
