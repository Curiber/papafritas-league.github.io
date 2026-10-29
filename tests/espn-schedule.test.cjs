'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { decideRun } = require('../scripts/espn-schedule-gate.cjs');
const options = { eventName: 'schedule', now: new Date('2026-10-29T10:17:00Z'), repository: 'Curiber/papafritas-league.github.io', runId: '999' };
const run = (overrides = {}) => ({ id: 100, head_branch: 'main', event: 'schedule', conclusion: 'success', updated_at: '2026-10-29T10:10:00Z', ...overrides });
function api(runs, stepOverrides = {}, capture = []) {
  return async (url, request) => {
    capture.push({url,request});
    return {ok:true,json:async()=>url.includes('/jobs?') ? {jobs:[{steps:[{name:'Consultar totales oficiales de ESPN',conclusion:'success',completed_at:'2026-10-29T10:09:00Z',...stepOverrides}]}]} : {workflow_runs:runs}};
  };
}

test('los horarios UTC cubren las 07:00 de verano e invierno sin ejecutar antes', async () => {
  for (const [stamp,expected] of [
    ['2026-10-29T09:59:00Z',false], ['2026-10-29T10:00:00Z',true],
    ['2027-06-02T10:17:00Z',false], ['2027-06-02T11:00:00Z',true]
  ]) assert.equal((await decideRun({...options,now:new Date(stamp),fetchImpl:api([])})).run,expected);
});

test('un disparo manual o push no se bloquea por hora ni por otra ejecución anterior', async () => {
  for(const eventName of ['workflow_dispatch','push']) {
    const result=await decideRun({...options,eventName,now:new Date('2026-10-29T08:00:00Z'),fetchImpl:()=>{throw new Error('No debe consultar historial');}});
    assert.equal(result.run,true);
  }
});

test('los respaldos omiten una consulta de ESPN ya completada hoy, incluso si fue manual', async () => {
  for(const event of ['schedule','workflow_dispatch']) {
    const result=await decideRun({...options,fetchImpl:api([run({event})])});
    assert.equal(result.run,false);assert.match(result.reason,/ejecución 100/);
  }
});

test('una prueba solo de publicación y una ejecución fallida no consumen la actualización diaria', async () => {
  assert.equal((await decideRun({...options,fetchImpl:api([run()],{conclusion:'skipped'})})).run,true);
  assert.equal((await decideRun({...options,fetchImpl:api([run({conclusion:'failure'})])})).run,true);
  assert.equal((await decideRun({...options,fetchImpl:api([run({event:'push'})])})).run,true);
});

test('no confunde las fechas de Chile con UTC ni los intentos anteriores con el día actual', async () => {
  assert.equal((await decideRun({...options,fetchImpl:api([run({updated_at:'2026-10-29T02:00:00Z'})])})).run,true);
  assert.equal((await decideRun({...options,fetchImpl:api([run()],{completed_at:'2026-10-28T23:59:00Z'})})).run,true);
});

test('si no se puede leer el historial, se intenta actualizar para no perder el corte', async () => {
  for(const fetchImpl of [async()=>{throw new Error('network');},async()=>({ok:false,status:403}),async()=>({ok:true,json:async()=>({})})]) {
    const result=await decideRun({...options,token:'test-only-not-a-secret',fetchImpl});
    assert.equal(result.run,true);assert.match(result.reason,/No se pudo comprobar/);
    assert.doesNotMatch(result.reason,/test-only-not-a-secret/);
  }
});

test('las consultas del historial usan solo GitHub y no siguen redirecciones con el token', async () => {
  const calls=[];await decideRun({...options,token:'test-token',fetchImpl:api([run()],{},calls)});
  assert.equal(calls.length,2);
  for(const {url,request} of calls){
    assert.equal(new URL(url).origin,'https://api.github.com');
    assert.equal(request.redirect,'error');
    assert.equal(request.headers.Authorization,'Bearer test-token');
  }
});
