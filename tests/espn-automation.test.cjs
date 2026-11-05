'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const os = require('node:os');
const root = path.resolve(__dirname, '..');

test('cada disparo consulta ESPN sin controles de hora ni de una ejecución anterior', () => {
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/espn-results.yml'), 'utf8').replace(/\r\n/g, '\n');
  const schedules = [...workflow.matchAll(/- cron: '([^']+)'\n\s+timezone: ([^\n]+)/g)].map(m => [m[1], m[2]]);
  assert.deepEqual(schedules, [
    ['0 2 * * *', 'America/Santiago'],
    ['17 6 * * *', 'America/Santiago'],
    ['37 9 * * *', 'America/Santiago']
  ]);
  assert.equal((workflow.match(/- cron:/g) || []).length, schedules.length);
  assert.doesNotMatch(workflow, /needs:|run_update|window-only|schedule-gate/);
  const query = workflow.split('      - name: Consultar totales oficiales de ESPN\n')[1]?.split('      - name:')[0];
  assert.ok(query, 'Debe existir la consulta de resultados');
  assert.match(query, /^        if: github\.event_name == 'schedule' \|\| \(github\.event_name == 'workflow_dispatch' && inputs\.refresh_results\)\n/);
});

test('el resumen del run es informativo y no emite una decisión para omitir la consulta', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'espn-summary-'));
  try {
    const output = path.join(temp, 'output'), summary = path.join(temp, 'summary');
    const text = execFileSync(process.execPath, [path.join(root, 'scripts/espn-run-summary.cjs')], {
      encoding: 'utf8', env: { ...process.env, GITHUB_EVENT_NAME:'schedule', EXPECTED_SCHEDULE:'0 2 * * *', GITHUB_OUTPUT:output, GITHUB_STEP_SUMMARY:summary }
    });
    assert.match(text, /Cada disparo automático consulta ESPN/);
    assert.equal(fs.readFileSync(summary, 'utf8'), text.trimEnd() + '\n');
    assert.equal(fs.existsSync(output), false);
  } finally {
    for (const name of ['output', 'summary']) {
      const file = path.join(temp, name);
      if (fs.existsSync(file)) fs.unlinkSync(file);
    }
    fs.rmdirSync(temp);
  }
});
