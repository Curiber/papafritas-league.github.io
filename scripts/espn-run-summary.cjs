'use strict';
const fs = require('node:fs');
const { timeZone } = require('../config/espn.json');

// Observability only: time and earlier runs never decide whether ESPN is queried.
function timingSummary(now, eventName, schedule) {
  const actual = new Intl.DateTimeFormat('es-CL', { timeZone, dateStyle:'short', timeStyle:'medium', hourCycle:'h23' }).format(now);
  const clean = s => String(s || 'manual / push').replace(/[\r\n|`]/g, ' ');
  const target = eventName === 'schedule' ? `02:00 · ${timeZone}` : 'A demanda: esta ejecución no es el cron diario';
  return `### Horario de actualización\n\n| Dato | Valor |\n| --- | --- |\n| Objetivo diario | ${target} |\n| Refuerzos diarios | 06:17 y 09:37 · ${timeZone} |\n| Inicio real del proceso | ${actual} · ${timeZone} |\n| Evento | ${clean(eventName)} |\n| Cron recibido | ${clean(schedule)} |\n\nCada disparo automático consulta ESPN, aunque GitHub lo entregue tarde o ya haya habido otra actualización ese día. Solo se publican cambios en los resultados; una lectura idéntica conserva la fecha del último cambio.\n`;
}

module.exports = { timingSummary };
if (require.main === module) {
  const timing = timingSummary(new Date(), process.env.GITHUB_EVENT_NAME, process.env.EXPECTED_SCHEDULE);
  console.log(timing);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, timing);
}
