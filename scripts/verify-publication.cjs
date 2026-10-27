'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const base = 'https://curiber.github.io/papafritas-league.github.io/';
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8'), ctx);
const snapshots = ctx.window.LEAGUE_DATA.schedule.flatMap(w => w.matchups.map(m => m.sourceSnapshot).filter(Boolean));
const files = ['index.html', 'js/data.js', 'js/app.js', ...new Set(snapshots.map(f => f.replace(/^\.\//, '')))];
const normalize = s => s.replace(/\r\n/g, '\n');
(async () => {
  for (const file of files) {
    const response = await fetch(new URL(file + '?verify=' + Date.now(), base), { signal: AbortSignal.timeout(20000) });
    if (!response.ok || normalize(await response.text()) !== normalize(fs.readFileSync(path.join(root, file), 'utf8')))
      throw new Error(`La publicación no coincide con el archivo esperado: ${file}`);
  }
  console.log('Publicación verificada: código, resultados y cortes coinciden con el commit.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
