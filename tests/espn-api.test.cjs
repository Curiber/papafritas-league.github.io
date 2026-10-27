'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { readLeague, periodDates, snapshotFromApi, refreshResults } = require('../scripts/fetch-espn-results.cjs');
const { importSnapshot } = require('../scripts/update-espn-results.cjs');
const fixture = require('../assets/cortes/espn/20261027T133752Z.json');
const config = require('../config/espn.json');
const root = path.resolve(__dirname, '..');
const ids = { fgp:'19', ftp:'20', tpm:'17', reb:'6', ast:'3', stl:'2', blk:'1', to:'11', pts:'0' };
function readData(dir = root) {
  const ctx = { window:{} }; vm.runInNewContext(fs.readFileSync(path.join(dir,'js/data.js'),'utf8'),ctx);
  return JSON.parse(JSON.stringify(ctx.window.LEAGUE_DATA));
}
// Synthetic API envelopes; the category values come from the verified browser cut.
function metadata(current = 2) {
  return { id:config.leagueId, seasonId:config.seasonId, scoringPeriodId:current === 2 ? 8 : 14,
    status:{ firstScoringPeriod:1, currentMatchupPeriod:current },
    settings:{ scheduleSettings:{ matchupPeriods:{ '1':[1,2,3,4,5,6], '2':[7,8,9,10,11,12,13], '3':[14,15,16,17,18,19,20] } } },
    teams:Object.entries(config.teams).map(([id,t]) => ({ id:Number(id), name:t.name })) };
}
function scores(period = 2, final = false) {
  return { id:config.leagueId, seasonId:config.seasonId, schedule:fixture.matchups.map(m => ({
    matchupPeriodId:period, winner:final ? (m.teams[0].score[0] > m.teams[0].score[1] ? 'HOME' : 'AWAY') : 'UNDECIDED',
    ...Object.fromEntries(m.teams.map((t,i) => [i ? 'away' : 'home', { teamId:t.espnId,
      totalPoints:99999, // This must never be interpreted as a category total.
      cumulativeScore:{ wins:t.score[0], ties:t.score[2], scoreByStat:Object.fromEntries(Object.entries(t.stats).map(([k,value]) => [ids[k],{score:value}])) },
      rosterForCurrentScoringPeriod:{ entries:[] } // Daily zeros must not replace the cumulative score.
    }])) })) };
}
function workspace(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(),'papafritas-api-'));
  for (const file of ['js/data.js','index.html']) {
    const destination = path.join(dir,file); fs.mkdirSync(path.dirname(destination),{recursive:true});
    fs.copyFileSync(path.join(root,file),destination);
  }
  // Daily updates must not turn today's live scores into tomorrow's test fixtures.
  const reference = readData(); reference.schedule = reference.schedule.filter(w => w.week === 1);
  const schedule = importSnapshot(reference, fixture).schedule;
  const dataFile = path.join(dir,'js/data.js');
  const source = fs.readFileSync(dataFile,'utf8').replace(/\r\n/g,'\n');
  fs.writeFileSync(dataFile,source.replace(/^schedule: \[[\s\S]*?\n\],(?=\n\n\/\* Power ranking)/m,
    () => 'schedule: ' + JSON.stringify(schedule,null,2) + ','));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(dir)),path.resolve(os.tmpdir()));
    assert.ok(path.basename(dir).startsWith('papafritas-api-'));
    fs.rmSync(dir,{recursive:true,force:true});
  });
  return dir;
}
const fingerprint = dir => ['js/data.js','index.html'].map(f => fs.readFileSync(path.join(dir,f),'utf8'));

test('convierte el acumulado oficial y comprueba ambos marcadores sin usar banca ni totalPoints', () => {
  const d = readData(); d.schedule = d.schedule.filter(w => w.week === 1);
  const snapshot = snapshotFromApi(metadata(),scores(),2,fixture.capturedAt,d);
  assert.deepEqual(snapshot.matchups,fixture.matchups);
  assert.equal(snapshot.status,'partial');
  assert.equal(snapshot.retrieval,'espn-fantasy-api');
  assert.equal(importSnapshot(d,snapshot).changed,true);
  assert.deepEqual(periodDates(metadata(),1),{start:'2026-10-20',end:'2026-10-25',lastScoringPeriod:6});
  assert.deepEqual(periodDates(metadata(),2),{start:'2026-10-26',end:'2026-11-01',lastScoringPeriod:13});
});

test('rechaza categorías ausentes, identidades cambiadas y un ganador oficial incoherente', () => {
  const d=readData(); d.schedule=d.schedule.filter(w=>w.week===1);
  const mutations=[
    (meta,s) => { delete s.schedule[0].home.cumulativeScore.scoreByStat['19']; },
    (meta,s) => { s.schedule[0].home.cumulativeScore.wins=1; },
    (meta,s) => { meta.teams[0].name='Otro equipo'; },
    (meta,s) => { s.schedule.pop(); },
    (meta,s) => { meta.settings.scheduleSettings.matchupPeriods['2']=[7,9]; }
  ];
  for(const mutate of mutations) {
    const m=metadata(),s=scores(); mutate(m,s);
    assert.throws(()=>snapshotFromApi(m,s,2,fixture.capturedAt,d));
  }
  let s=scores(2,true); s.schedule[0].winner='AWAY';
  assert.throws(()=>snapshotFromApi(metadata(3),s,2,'2026-11-02T10:00:00Z',d),/ganador oficial/);
  s=scores(2,false);
  assert.throws(()=>snapshotFromApi(metadata(3),s,2,'2026-11-02T10:00:00Z',d),/confirmó el cierre/);
});

test('la petición usa solo el endpoint de ESPN y no revela las credenciales al fallar', async () => {
  const env={ESPN_S2:'test-value-only',ESPN_SWID:'{test-id}'};
  let request;
  const result=await readLeague({views:['mSettings','mTeam'],matchupPeriodId:2,scoringPeriodId:8},{env,
    fetchImpl:async(url,options)=>{ request={url,options}; return {ok:true,json:async()=>metadata()}; }});
  assert.equal(result.id,config.leagueId);
  assert.equal(request.url.hostname,'lm-api-reads.fantasy.espn.com');
  assert.deepEqual(request.url.searchParams.getAll('view'),['mSettings','mTeam']);
  assert.equal(request.url.searchParams.get('scoringPeriodId'),'8');
  assert.equal(request.options.redirect,'error');
  assert.equal(request.options.headers.Cookie,'espn_s2=test-value-only; SWID={test-id}');
  assert.deepEqual(JSON.parse(request.options.headers['x-fantasy-filter']),{schedule:{filterMatchupPeriodIds:{value:[2]}}});
  await assert.rejects(readLeague({views:['mSettings']},{env,fetchImpl:async()=>({status:401,json:async()=>{throw new Error('must not read authentication response');}})}),error=>{
    assert.match(error.message,/HTTP 401/); assert.doesNotMatch(error.message,/test-value-only|test-id/); return true;
  });
  await assert.rejects(readLeague({views:['mSettings']},{env:{ESPN_S2:'only-one'}}),/ambos secretos/);
  await assert.rejects(readLeague({views:['mSettings']},{env:{...env,ESPN_S2:'bad; value'}}),/solo el valor/);
});

test('una lectura sin cambios no toca archivos; una nueva cifra guarda solo el corte saneado', async t => {
  const dir=workspace(t),before=fingerprint(dir);
  const current=()=>scores();
  const read=async request=>request.views.includes('mSettings')?metadata():current();
  assert.equal(await refreshResults({root:dir,read,now:()=>new Date('2026-10-27T15:00:00Z')}),false);
  assert.deepEqual(fingerprint(dir),before);
  const readChanged=async request=>{
    if(request.views.includes('mSettings'))return metadata();
    const s=scores();s.schedule[0].home.cumulativeScore.scoreByStat['0'].score++;
    s.members=[{email:'should-not-be-written@example.test'}];
    return s;
  };
  assert.equal(await refreshResults({root:dir,read:readChanged,now:()=>new Date('2026-10-27T15:00:00Z')}),true);
  const updated=readData(dir);
  assert.equal(updated.schedule.find(w=>w.week===2).matchups[0].stats.hipopotamos.pts,97);
  const audit=fs.readFileSync(path.join(dir,'assets/cortes/espn/20261027T150000Z.json'),'utf8');
  assert.doesNotMatch(audit,/members|should-not-be-written|rosterForCurrentScoringPeriod|Cookie|totalPoints/);
  assert.deepEqual(updated.posts,readData().posts);
  assert.deepEqual(updated.teams,readData().teams);
  assert.deepEqual(updated.schedule[0],readData().schedule[0]);
});

test('en el cambio de semana cierra lo confirmado y omite una semana nueva todavía vacía', async t => {
  const dir=workspace(t);
  const read=async request=>{
    if(request.views.includes('mSettings'))return metadata(3);
    if(request.matchupPeriodId===2){assert.equal(request.scoringPeriodId,13);return scores(2,true);}
    const s=scores(3);for(const m of s.schedule)for(const side of ['home','away'])for(const stat of Object.values(m[side].cumulativeScore.scoreByStat))stat.score=0;
    return s;
  };
  assert.equal(await refreshResults({root:dir,read,now:()=>new Date('2026-11-02T10:00:00Z')}),true);
  const updated=readData(dir);
  assert.equal(updated.schedule.find(w=>w.week===2).matchups.every(m=>m.status==='final'),true);
  assert.equal(updated.schedule.some(w=>w.week===3),false);
});

test('un fallo de acceso o del segundo período conserva todo el último corte publicado', async t => {
  const dir=workspace(t),before=fingerprint(dir);
  await assert.rejects(refreshResults({root:dir,read:async()=>{throw new Error('HTTP 401');}}),/401/);
  assert.deepEqual(fingerprint(dir),before);
  const read=async request=>{
    if(request.views.includes('mSettings'))return metadata(3);
    if(request.matchupPeriodId===2)return scores(2,true);
    const s=scores(3);delete s.schedule[0].home.cumulativeScore.scoreByStat['19'];return s;
  };
  await assert.rejects(refreshResults({root:dir,read,now:()=>new Date('2026-11-02T10:00:00Z')}),/Faltan categorías/);
  assert.deepEqual(fingerprint(dir),before);
  assert.equal(fs.existsSync(path.join(dir,'assets/cortes/espn')),false);
});

test('ignora los auxiliares de tiro y sigue validando las nueve categorías oficiales', () => {
  const d=readData();d.schedule=d.schedule.filter(w=>w.week===1);
  const s=scores();
  for(const m of s.schedule)for(const side of ['home','away'])Object.assign(m[side].cumulativeScore.scoreByStat,
    {'13':{score:36},'14':{score:77},'15':{score:8},'16':{score:10}});
  assert.deepEqual(snapshotFromApi(metadata(),s,2,fixture.capturedAt,d).matchups,fixture.matchups);
  s.schedule[0].home.cumulativeScore.wins++;
  assert.throws(()=>snapshotFromApi(metadata(),s,2,fixture.capturedAt,d),/marcador de ESPN/);
});

test('un lote cierra la semana anterior y agrega la nueva sin reescribir el cierre histórico', async t => {
  const dir=workspace(t),original=readData(dir);
  const read=async request=>request.views.includes('mSettings') ? metadata(3) : scores(request.matchupPeriodId,request.matchupPeriodId===2);
  let tick=Date.parse('2026-11-02T10:00:00Z');
  assert.equal(await refreshResults({root:dir,read,now:()=>new Date(tick++)}),true);
  const updated=readData(dir);
  assert.deepEqual(updated.schedule[0],original.schedule[0]);
  assert.equal(updated.schedule.find(w=>w.week===2).matchups.every(m=>m.status==='final'),true);
  assert.equal(updated.schedule.find(w=>w.week===3).matchups.every(m=>m.status==='partial'),true);
  const cuts=fs.readdirSync(path.join(dir,'assets/cortes/espn'));
  assert.equal(cuts.length,2);
  assert.equal(new Set(updated.schedule.slice(1).map(w=>w.matchups[0].sourceSnapshot)).size,2);
});
