'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const config=require('../config/espn.json');
const {editorialRoster}=require('../scripts/export-espn-editorial.cjs');
const {timingSummary}=require('../scripts/espn-schedule-gate.cjs');

test('el corte editorial proyecta solo planteles e identidades NBA',()=>{
  const raw={id:config.leagueId,seasonId:config.seasonId,members:[{email:'private@example.test'}],
    teams:Object.entries(config.teams).map(([id,t])=>({id:Number(id),name:t.name,owners:['private-id'],
      roster:{entries:[{lineupSlotId:12,playerPoolEntry:{player:{id:Number(id),fullName:'Jugador '+id,proTeamId:1,stats:[{notForExport:true}]}}}]}}))};
  const report=editorialRoster(raw,'2026-10-30T16:00:00Z');
  assert.equal(report.teams.length,4);assert.equal(report.teams[0].players[0].nbaTeamId,1);
  assert.doesNotMatch(JSON.stringify(report),/members|private|lineupSlotId|notForExport|stats|owners/);
  delete raw.teams[0].roster;assert.throws(()=>editorialRoster(raw,report.capturedAt),/plantel/);
});

test('el resumen distingue el objetivo 07:00 del inicio real tardío en Chile',()=>{
  const text=timingSummary(new Date('2026-10-30T16:31:39Z'),'schedule','0 7 * * *');
  assert.match(text,/07:00/);assert.match(text,/13:31:39/);assert.match(text,/America\/Santiago/);
  assert.match(text,/Cron recibido/);assert.match(text,/0 7 \* \* \*/);
  assert.match(timingSummary(new Date('2026-10-30T16:31:39Z'),'workflow_dispatch',''),/A demanda/);
});
