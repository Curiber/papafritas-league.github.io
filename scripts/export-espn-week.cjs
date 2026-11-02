'use strict';
const fs = require('node:fs');
const path = require('node:path');
const config = require('../config/espn.json');
const { readLeague, periodDates } = require('./fetch-espn-results.cjs');

// Public sporting facts only. Never save the raw authenticated league response.
function dailyRoster(data, scoringPeriodId) {
  if (data.id !== config.leagueId || data.seasonId !== config.seasonId || data.teams?.length !== 4)
    throw new Error('Falta la liga esperada para el acta diaria.');
  const entries = roster => (roster?.entries || []).map(e => {
    const p = e.playerPoolEntry?.player;
    if (!p?.fullName || !Number.isSafeInteger(p.id)) throw new Error('Falta una identidad de jugador.');
    return { name:p.fullName, espnId:p.id, nbaTeamId:p.proTeamId, lineupSlotId:e.lineupSlotId,
      actualStats:(p.stats || []).filter(s => s.statSourceId === 0 && s.statSplitTypeId === 1 && s.scoringPeriodId === scoringPeriodId)
        .map(s => ({ scoringPeriodId:s.scoringPeriodId, stats:Object.fromEntries(Object.entries(s.stats || {})
          .filter(([key,value]) => /^\d+$/.test(key) && typeof value === 'number' && Number.isFinite(value))) })) };
  });
  return { scoringPeriodId,
    lineupSlotCounts:data.settings?.rosterSettings?.lineupSlotCounts || {},
    teams:data.teams.map(t => {
      if (!config.teams[t.id]) throw new Error('Equipo desconocido.');
      return { team:config.teams[t.id].id, espnTeamId:t.id, players:entries(t.roster) };
    }),
    matchupRosters:(data.schedule || []).map(m => ({ matchupPeriodId:m.matchupPeriodId,
      sides:['home','away'].filter(side=>m[side]).map(side=>({ espnTeamId:m[side].teamId,
        rosterFields:Object.keys(m[side]).filter(key=>key.startsWith('roster')),
        rosters:Object.fromEntries(Object.entries(m[side]).filter(([key,value]) => key.startsWith('roster') && Array.isArray(value?.entries))
          .map(([key,value]) => [key,entries(value)])) })) })) };
}

module.exports = { dailyRoster };
if (require.main === module) (async()=>{
  if (process.argv.length !== 3) throw new Error('Indicar el archivo de salida del acta semanal.');
  const meta = await readLeague({views:['mSettings','mTeam']});
  const period = meta.status?.currentMatchupPeriod - 1;
  if (!Number.isInteger(period) || period < 1) throw new Error('No hay una semana anterior para revisar.');
  const {start,end} = periodDates(meta,period);
  const days = meta.settings.scheduleSettings.matchupPeriods[period];
  const daily=[];
  for (const day of days) {
    const raw = await readLeague({views:['mMatchupScore','mScoreboard'],scoringPeriodId:day,matchupPeriodId:period});
    daily.push(dailyRoster({...raw,teams:raw.teams?.length===4?raw.teams:meta.teams,settings:meta.settings},day));
  }
  const report = {leagueId:config.leagueId,seasonId:config.seasonId,matchupPeriodId:period,start,end,
    capturedAt:new Date().toISOString(),sourceUrl:config.scoreboardUrl,
    scope:'Actas de los períodos de cómputo informados por ESPN: pueden representar días o semanas según la configuración de la liga. Solo estadísticas reales del período consultado. Se deben contrastar con los acumulados oficiales antes de atribuir producción fantasy.',daily};
  const destination=path.resolve(process.argv[2]);
  fs.mkdirSync(path.dirname(destination),{recursive:true});
  fs.writeFileSync(destination,JSON.stringify(report,null,2)+'\n');
  console.log('Acta semanal saneada guardada; sin miembros ni credenciales.');
})().catch(error=>{console.error(error.message);process.exitCode=1;});
