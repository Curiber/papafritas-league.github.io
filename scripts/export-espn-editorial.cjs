'use strict';
const fs = require('node:fs');
const path = require('node:path');
const config = require('../config/espn.json');
const { readLeague, periodDates } = require('./fetch-espn-results.cjs');

function editorialRoster(data, capturedAt) {
  if (data.id !== config.leagueId || data.seasonId !== config.seasonId || data.teams?.length !== 4)
    throw new Error('No se recibió la liga esperada para el corte editorial.');
  const teams = data.teams.map(t => {
    const identity = config.teams[t.id];
    if (!identity || !Array.isArray(t.roster?.entries)) throw new Error('Falta un plantel confirmado de ESPN.');
    return { team: identity.id, espnTeamId: t.id, name: t.name || identity.name,
      players: t.roster.entries.map(e => {
        const p = e.playerPoolEntry?.player;
        if (!p?.fullName || !Number.isSafeInteger(p.id) || !Number.isInteger(p.proTeamId))
          throw new Error('Falta la identidad NBA de un jugador.');
        return { name:p.fullName, espnId:p.id, nbaTeamId:p.proTeamId };
      }) };
  });
  if (new Set(teams.map(t=>t.team)).size !== 4) throw new Error('Hay equipos repetidos.');
  return { leagueId:config.leagueId, seasonId:config.seasonId, capturedAt, sourceUrl:config.scoreboardUrl,
    scope:'Planteles al corte. Los identificadores NBA permiten consultar el calendario; no garantizan participación ni cómputo fantasy futuro.', teams };
}

module.exports = { editorialRoster };
if (require.main === module) (async()=>{
  if (process.argv.length !== 3) throw new Error('Indicar el archivo de salida del corte editorial.');
  const raw = await readLeague({ views:['mRoster','mTeam','mSettings','mMatchup'] });
  const report = editorialRoster(raw, new Date().toISOString());
  const week = raw.status?.currentMatchupPeriod;
  const { start, end } = periodDates(raw, week);
  const matchups = raw.schedule?.filter(row => row.matchupPeriodId === week)
    .map(row => [config.teams[row.home?.teamId]?.id, config.teams[row.away?.teamId]?.id]);
  if (matchups?.length !== 2 || !matchups.flat().every(Boolean) || new Set(matchups.flat()).size !== 4)
    throw new Error('Faltan los dos cruces oficiales de la semana vigente.');
  report.schedule = { week, start, end, matchups };
  const destination = path.resolve(process.argv[2]);
  fs.mkdirSync(path.dirname(destination), {recursive:true});
  fs.writeFileSync(destination, JSON.stringify(report,null,2)+'\n');
  console.log('Corte editorial guardado: planteles, identidades NBA y cruces vigentes.');
})().catch(error=>{console.error(error.message);process.exitCode=1;});
