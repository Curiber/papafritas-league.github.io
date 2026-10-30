'use strict';
const fs = require('node:fs');
const { timeZone } = require('../config/espn.json');
const localDate = date => new Intl.DateTimeFormat('en-CA', { timeZone }).format(new Date(date));
const readHour = date => Number(new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', hourCycle: 'h23' }).format(new Date(date)));

async function decideRun({ eventName, now = new Date(), repository, runId, token, fetchImpl = fetch }) {
  if (eventName !== 'schedule') return { run: true, reason: 'La ejecución manual y las comprobaciones por push se conservan.' };
  if (readHour(now) < 7) return { run: false, reason: 'Todavía no son las 07:00 en Chile; se espera el siguiente horario UTC.' };
  const today = localDate(now);
  try {
    if (!/^[\w.-]+\/[\w.-]+$/.test(repository || '')) throw new Error('Repositorio inválido.');
    const get = async endpoint => {
      const response = await fetchImpl(`https://api.github.com/repos/${repository}/${endpoint}`, {
        headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        redirect: 'error', signal: AbortSignal.timeout(10000)
      });
      if (!response.ok) throw new Error('No se pudo consultar el historial.');
      return response.json();
    };
    const history = await get('actions/workflows/espn-results.yml/runs?status=success&per_page=30');
    if (!Array.isArray(history.workflow_runs)) throw new Error('Historial incompleto.');
    const candidates = history.workflow_runs.filter(r => r.conclusion === 'success' && r.head_branch === 'main' &&
      String(r.id) !== String(runId) && ['schedule', 'workflow_dispatch'].includes(r.event) &&
      localDate(r.updated_at) === today);
    for (const r of candidates) {
      if (!Number.isSafeInteger(r.id)) continue;
      const { jobs } = await get(`actions/runs/${r.id}/jobs?per_page=100`);
      if (!Array.isArray(jobs)) throw new Error('Faltan las etapas de una ejecución.');
      const checked = jobs.some(job => job.steps?.some(step => step.name === 'Consultar totales oficiales de ESPN' &&
        step.conclusion === 'success' && localDate(step.completed_at) === today));
      if (checked) return { run: false, reason: `Ya se consultó ESPN y se completó correctamente la ejecución ${r.id} el ${today}, hora de Chile.` };
    }
    return { run: true, reason: 'No hay una actualización completa confirmada hoy; se intentará consultar y publicar.' };
  } catch {
    // A history outage must not prevent a useful retry. The results importer is idempotent.
    return { run: true, reason: 'No se pudo comprobar el historial; se intentará la actualización para no perder el corte.' };
  }
}

function timingSummary(now, eventName, schedule) {
  const actual = new Intl.DateTimeFormat('es-CL', {timeZone, dateStyle:'short', timeStyle:'medium', hourCycle:'h23'}).format(now);
  const clean = s => String(s || 'manual / push').replace(/[\r\n|`]/g,' ');
  return `### Horario de actualización\n\n| Dato | Valor |\n| --- | --- |\n| Objetivo | 07:00 · ${timeZone} |\n| Inicio real del proceso | ${actual} · ${timeZone} |\n| Evento | ${clean(eventName)} |\n| Cron recibido | ${clean(schedule)} |\n\nLa hora programada y la hora de arranque son distintas: GitHub puede entregar el evento con retraso.\n`;
}

module.exports = { decideRun, timingSummary };
if (require.main === module) {
  const timing = timingSummary(new Date(), process.env.GITHUB_EVENT_NAME, process.env.EXPECTED_SCHEDULE);
  console.log(timing);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, timing);
  decideRun({ eventName: process.env.GITHUB_EVENT_NAME,
  repository: process.env.GITHUB_REPOSITORY, runId: process.env.GITHUB_RUN_ID, token: process.env.GH_TOKEN })
  .then(result => {
    if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `run_update=${result.run}\n`);
    console.log(result.reason);
  }).catch(() => { console.error('No se pudo evaluar el horario de actualización.'); process.exitCode = 1; });
}
