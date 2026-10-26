'use strict';
/* =====================================================================
   PAPAFRITAS LEAGUE — APP
   Router por hash + renderizado de vistas a partir de LEAGUE_DATA.
   ===================================================================== */
const D = window.LEAGUE_DATA;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const team = id => D.teams.find(t => t.id === id);
const fmtDate = d => new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z'));
const fmtShort = d => new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z')).replace('.', '').toUpperCase();
const posts = () => D.posts.slice().sort((a, b) => b.date.localeCompare(a.date));
const allMatchups = () => D.schedule.flatMap(w => w.matchups.map(m => ({ ...m, week: w.week, weekLabel: w.label, start: w.start, end: w.end })));
const matchupById = id => allMatchups().find(m => m.id === id);

/* ---------- Motor de categorías ---------- */
function fmtStat(cat, v) { return cat.pct ? (v * 100).toFixed(2) + '%' : String(v); }
const isPartial = m => m.status === 'partial' || m.status === 'live';
function statusText(m) {
  if (isPartial(m)) return 'Parcial';
  if (m.status === 'final') return evaluate(m) ? 'Final' : 'Datos pendientes';
  return 'Por jugar';
}
function cutoffText(m) {
  if (!m.updatedAt) return '';
  const stamp = new Intl.DateTimeFormat('es-CL', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    timeZone: 'America/Santiago', hour12: false
  }).format(new Date(m.updatedAt));
  return `${stamp}${m.updatedAtApproximate ? ' aprox.' : ''} · Chile`;
}
function cutoffNote(m) {
  if (m.updatedDate) return `<span class="snapshot-meta">Resultado confirmado: ${esc(fmtDate(m.updatedDate))}</span>`;
  return m.updatedAt ? `<span class="snapshot-meta">Corte manual: ${esc(cutoffText(m))}</span>` : '';
}
/** Devuelve, por categoría, quién gana: 'a' | 'b' | 't', y el marcador total. */
function evaluate(m) {
  const [a, b] = m.teams;
  if (!m.stats || !m.stats[a] || !m.stats[b]) return null;
  const valid = (c, value) => typeof value === 'number' && Number.isFinite(value) &&
    value >= 0 && (c.pct ? value <= 1 : Number.isInteger(value));
  if (!D.categories.every(c => valid(c, m.stats[a][c.key]) && valid(c, m.stats[b][c.key]))) return null;
  const cats = D.categories.map(c => {
    const va = m.stats[a][c.key], vb = m.stats[b][c.key];
    let w = 't';
    if (va !== vb) w = (c.lowerWins ? va < vb : va > vb) ? 'a' : 'b';
    return { ...c, va, vb, w };
  });
  const score = { a: cats.filter(c => c.w === 'a').length, b: cats.filter(c => c.w === 'b').length, t: cats.filter(c => c.w === 't').length };
  const result = score.a > score.b ? 'a' : score.b > score.a ? 'b' : 't';
  return { cats, score, result };
}
/** Tabla de posiciones calculada a partir de los cruces finalizados. */
function standings() {
  const rows = Object.fromEntries(D.teams.map(t => [t.id, { id: t.id, w: 0, l: 0, t: 0, cw: 0, cl: 0, ct: 0, form: [] }]));
  allMatchups().filter(m => m.status === 'final').sort((x, y) => x.week - y.week).forEach(m => {
    const ev = evaluate(m); if (!ev) return;
    const [a, b] = m.teams;
    const push = (id, res, cw, cl, ct) => { const r = rows[id]; r[res]++; r.cw += cw; r.cl += cl; r.ct += ct; r.form.push(res.toUpperCase()); };
    push(a, ev.result === 'a' ? 'w' : ev.result === 'b' ? 'l' : 't', ev.score.a, ev.score.b, ev.score.t);
    push(b, ev.result === 'b' ? 'w' : ev.result === 'a' ? 'l' : 't', ev.score.b, ev.score.a, ev.score.t);
  });
  return Object.values(rows).sort((x, y) => categoryRate(y) - categoryRate(x));
}
const categoryRate = r => (r.cw + r.ct / 2) / (r.cw + r.cl + r.ct || 1);
function standingPosition(id) {
  const rows = standings(), r = rows.find(r => r.id === id);
  return rows.findIndex(x => categoryRate(x) === categoryRate(r)) + 1;
}
const recordOf = id => { const r = standings().find(r => r.id === id); return `${r.cw}-${r.cl}-${r.ct}`; };
const played = () => allMatchups().some(m => m.status === 'final' && evaluate(m));

/* ---------- Componentes ---------- */
function crest(t, size) {
  const style = size ? ` style="--s:${size}px;--team:${esc(t.colors[0])}"` : ` style="--team:${esc(t.colors[0])}"`;
  const badge = `<span class="badge"${t.logo ? ' hidden' : ''}>${esc(t.initials)}</span>`;
  const img = t.logo ? `<img class="team-image" src="${esc(t.logo)}" alt="Escudo de ${esc(t.name)}" loading="lazy" decoding="async">` : '';
  return `<span class="crest"${style}>${img}${badge}</span>`;
}
function section(title, aside = '') { return `<div class="section-title reveal"><h2>${title}</h2><small>${aside}</small></div>`; }
function statusPill(m) {
  if (m.status === 'final') return `<span class="pill final">${statusText(m)}</span>`;
  if (isPartial(m)) return '<span class="pill partial">Parcial</span>';
  return `<span class="pill">${fmtShort(m.start)} – ${fmtShort(m.end)}</span>`;
}
function catstrip(m) {
  const ev = evaluate(m);
  return `<div class="catstrip" aria-label="Categorías">${D.categories.map((c, i) => `<span class="${ev ? ev.cats[i].w : ''}" title="${esc(c.name)}">${esc(c.id)}</span>`).join('')}</div>`;
}
function scoreBlock(m, cls = 'score') {
  const ev = evaluate(m);
  if (!ev) return `<span class="${cls} pending">${isPartial(m) ? 'Datos pendientes' : statusText(m)}</span>`;
  return `<span class="${cls}"><span>${ev.score.a}</span><span class="sep">–</span><span>${ev.score.b}</span>${ev.score.t ? `<small class="score-ties">${ev.score.t} categoría${ev.score.t > 1 ? 's' : ''} empatada${ev.score.t > 1 ? 's' : ''}</small>` : ''}</span>`;
}
function matchCard(m) {
  const [a, b] = m.teams.map(team);
  return `<a class="match reveal" href="#cruce/${esc(m.id)}" style="--ta:${esc(a.colors[0])};--tb:${esc(b.colors[0])}">
    <div class="match-top"><span class="kicker">${esc(m.weekLabel)} · Cruce ${esc(m.id.split('-m')[1] ?? '')}</span>${statusPill(m)}</div>
    <div class="versus">
      <span class="team">${crest(a, 56)}<span><strong>${esc(a.name)}</strong><small>${esc(a.owner)}</small></span></span>
      ${scoreBlock(m)}
      <span class="team">${crest(b, 56)}<span><strong>${esc(b.name)}</strong><small>${esc(b.owner)}</small></span></span>
    </div>${catstrip(m)}${cutoffNote(m)}</a>`;
}
function featured() {
  const week = D.schedule[D.schedule.length - 1];
  const m = allMatchups().find(x => x.id === week.featured) ?? allMatchups()[0];
  const [a, b] = m.teams.map(team);
  const ev = evaluate(m);
  return `<a class="feature" href="#cruce/${esc(m.id)}" style="--ta:${esc(a.colors[0])};--tb:${esc(b.colors[0])}">
    <div class="feature-head"><span class="eyebrow">Cruce destacado · ${esc(m.weekLabel)}</span>${statusPill(m)}</div>
    <div class="feature-body">
      <div class="side">${crest(a)}<div><h3>${esc(a.name)}</h3><div class="owner">${esc(a.owner)}</div></div></div>
      <div class="vs">${ev ? `<span class="score">${ev.score.a}–${ev.score.b}</span>` : 'VS'}</div>
      <div class="side">${crest(b)}<div><h3>${esc(b.name)}</h3><div class="owner">${esc(b.owner)}</div></div></div>
    </div>
    <div class="feature-foot">${catstrip(m)}<div class="meta"><span>${ev ? `${ev.score.a} categorías a ${ev.score.b}${ev.score.t ? ` · ${ev.score.t} empate${ev.score.t > 1 ? 's' : ''}` : ''}` : 'Nueve categorías en disputa · ' + fmtShort(m.start) + ' – ' + fmtShort(m.end)}</span><span class="link">Ver el cruce</span></div>${cutoffNote(m)}</div>
  </a>`;
}
function story() {
  const p = posts()[0];
  return `<div class="story"><div><span class="eyebrow">${esc(postLabel(p))} · ${fmtDate(p.date)}</span><h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p></div><a class="btn" href="#nota/${esc(p.id)}">Leer la nota</a><span class="ghost" aria-hidden="true">${esc(D.season.replace(/\s/g, ''))}</span></div>`;
}
function standingsTable(compact = false) {
  const rows = standings(), max = Math.max(1, ...rows.map(r => r.cw));
  return `<div class="table-wrap reveal"><table class="standings"><thead><tr><th>#</th><th>Equipo</th><th class="c" title="Cruces finalizados">PJ</th><th class="c" title="Categorías ganadas">G</th><th class="c" title="Categorías perdidas">P</th><th class="c" title="Categorías empatadas">E</th><th class="c" title="Categorías ganadas-perdidas-empatadas">CAT</th>${compact ? '' : '<th title="Resultados de los cruces semanales">Forma</th>'}</tr></thead><tbody>${rows.map(r => {
    const t = team(r.id);
    return `<tr><td class="pos">${played() ? standingPosition(r.id) : '—'}</td><td><a class="teamcell" href="#equipo/${t.id}">${crest(t, 36)}<span><strong>${esc(t.name)}</strong><small>${esc(t.owner)}</small></span></a></td><td class="c n">${r.w + r.l + r.t}</td><td class="c n">${r.cw}</td><td class="c n">${r.cl}</td><td class="c n">${r.ct}</td><td class="c"><div style="display:flex;align-items:center;gap:10px;justify-content:center"><span class="n" style="font-size:15px">${r.cw}-${r.cl}-${r.ct}</span><span class="bar" style="--team:${esc(t.colors[0])}"><i style="width:${Math.round(100 * r.cw / max)}%"></i></span></div></td>${compact ? '' : `<td class="streak">${r.form.length ? r.form.map(f => `<span style="color:${f === 'W' ? 'var(--win)' : f === 'L' ? 'var(--loss)' : 'var(--tie)'}">${f === 'W' ? 'G' : f === 'L' ? 'P' : 'E'}</span>`).join(' ') : '<span class="note">—</span>'}</td>`}</tr>`;
  }).join('')}</tbody></table></div>`;
}
function postImage(p, placement) {
  if (!p.image) return '';
  const image = p.image, card = placement === 'card';
  return `<img class="post-image" src="${esc(image.src)}" srcset="${esc(image.small)} 640w, ${esc(image.src)} ${image.width}w" sizes="${card ? '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px' : '(max-width: 800px) 100vw, 760px'}" width="${image.width}" height="${image.height}" alt="${card ? '' : esc(image.alt)}" loading="${card ? 'lazy' : 'eager'}" decoding="async"${card ? '' : ' fetchpriority="high"'}>`;
}
function articleCover(p) {
  if (!p.image) return '';
  return `<figure class="article-cover">${postImage(p, 'article')}<figcaption>${esc(p.image.caption)}</figcaption></figure>`;
}
function news(p) {
  const [a, b] = p.teams.slice(0, 2).map(team);
  const n = String(posts().length - posts().findIndex(x => x.id === p.id)).padStart(2, '0');
  return `<a class="news reveal" href="#nota/${esc(p.id)}" style="--ta:${esc(a?.colors[0] ?? '#ff5a1f')};--tb:${esc(b?.colors[0] ?? '#ff5a1f')}">
    <div class="news-art${p.image ? ' editorial' : ''}"><span class="pill hot cat">${esc(postLabel(p))}</span>${p.image ? postImage(p, 'card') : `${a ? crest(a, 84) : ''}${b ? `<span class="slash">/</span>${crest(b, 84)}` : ''}<span class="big" aria-hidden="true">${n}</span>`}</div>
    <div class="news-body"><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><div class="meta">${fmtDate(p.date)} · Redacción Papafritas</div></div></a>`;
}
function moveBadge(e, i) {
  if (e.prev == null) return '<span class="move new">NEW</span>';
  const d = e.prev - (i + 1);
  return d > 0 ? `<span class="move up">▲ ${d}</span>` : d < 0 ? `<span class="move down">▼ ${-d}</span>` : '<span class="move">—</span>';
}
function rankBox() {
  const r = D.rankings[0];
  return `<div class="rank-box reveal">${r.entries.map((e, i) => { const t = team(e.team); return `<a class="rank-row" href="#equipo/${t.id}"><span class="rank-num">${i + 1}</span>${crest(t, 44)}<span><div class="rank-name">${esc(t.name)}</div><div class="rank-owner">${esc(t.owner)}</div></span>${moveBadge(e, i)}</a>`; }).join('')}
    <div class="foot"><p class="note" style="margin:0">${esc(r.title)}${r.provisional ? ' · Provisional' : ''}. Opinión editorial, no la clasificación oficial.</p><a class="link" href="#ranking">Leer el análisis</a></div></div>`;
}
function teamCard(t) {
  return `<a class="team-card reveal" href="#equipo/${t.id}" style="--team:${esc(t.colors[0])}">${crest(t, 96)}<h3>${esc(t.name)}</h3><span class="owner">${esc(t.owner)}</span><span class="record">${recordOf(t.id)} · ${esc(t.city)}</span><span class="link">Ver plantel</span></a>`;
}

/* ---------- Vistas ---------- */
function home() {
  const week = D.schedule[D.schedule.length - 1];
  const ms = allMatchups().filter(m => m.week === week.week);
  return `<section class="hero" aria-label="Portada">${featured()}${story()}</section>
    ${section(`${esc(week.label)} · Cruces`, `${fmtShort(week.start)} – ${fmtShort(week.end)}`)}<div class="matches">${ms.map(matchCard).join('')}</div>
    <div class="columns"><section>${section('Tabla de posiciones', played() ? 'Temporada regular' : 'Sin cruces finalizados')}${standingsTable(true)}
      ${section('Desde la redacción', '<a href="#noticias">Todas las notas</a>')}<div class="news-grid">${posts().slice(0, 2).map(news).join('')}</div></section>
      <aside>${section('Power ranking', esc(D.rankings[0].label))}${rankBox()}</aside></div>
    ${section('Las franquicias', 'Cuatro equipos · Temporada ' + esc(D.season))}<div class="team-grid">${D.teams.map(teamCard).join('')}</div>`;
}
let filter = 'Todas';
function archive() {
  const list = posts().filter(p => filter === 'Todas' || p.category === filter);
  return `<div class="page-head"><span class="eyebrow">La crónica</span><h1>Desde la redacción</h1><p class="lead-text">El archivo de una temporada por escribir.</p></div>
    <div class="filters" aria-label="Filtrar publicaciones">${['Todas', 'Previas', 'Crónicas', 'Power Ranking', 'Trades'].map(c => `<button data-filter="${c}" class="${c === filter ? 'active' : ''}" aria-pressed="${c === filter}">${c}</button>`).join('')}</div>
    ${list.length ? `<div class="news-grid" style="margin-bottom:48px">${list.map(news).join('')}</div>` : `<div class="empty"><h2>${filter === 'Trades' ? 'Sin movimientos confirmados' : 'La primera crónica todavía está por jugarse'}</h2><p class="note">${filter === 'Trades' ? 'Publicaremos movimientos cuando estén confirmados.' : 'Cuando haya resultados, aquí estará la historia.'}</p></div>`}`;
}
function schedulePage() {
  return `<div class="page-head"><span class="eyebrow">Temporada ${esc(D.season)}</span><h1>Calendario y resultados</h1><p class="lead-text">Cada cruce se decide en nueve categorías. Toca un cruce para ver el marcador completo.</p></div>
    ${section('Tabla de posiciones', played() ? 'Temporada regular' : 'Sin cruces finalizados')}${standingsTable()}
    ${D.schedule.slice().reverse().map(w => `${section(esc(w.label), `${fmtDate(w.start)} – ${fmtDate(w.end)}`)}<div class="matches">${w.matchups.map(m => matchCard({ ...m, week: w.week, weekLabel: w.label, start: w.start, end: w.end })).join('')}</div>`).join('')}
    <p class="note" style="margin-top:28px">El récord acumula categorías ganadas, perdidas y empatadas, como en ESPN. PJ cuenta cruces semanales finalizados. La clasificación se ordena por porcentaje de categorías (un empate vale media victoria); las posiciones iguales se muestran compartidas hasta confirmar el desempate oficial.</p>`;
}
function matchupPage(m) {
  const [a, b] = m.teams.map(team), ev = evaluate(m);
  return `<a class="back" href="#calendario">← Calendario</a>
    <div class="page-head"><span class="eyebrow">${esc(m.weekLabel)} · ${fmtShort(m.start)} – ${fmtShort(m.end)} ${m.end.slice(0,4)}</span><h1>${esc(a.short)} <span style="color:var(--orange)">vs</span> ${esc(b.short)}</h1></div>
    <div class="scoreboard" style="--ta:${esc(a.colors[0])};--tb:${esc(b.colors[0])}">
      <div class="head"><a class="side" href="#equipo/${a.id}">${crest(a)}<span><h2>${esc(a.name)}</h2><span class="owner">${esc(a.owner)} · ${recordOf(a.id)}</span></span></a>
        <div class="total">${ev ? `<span>${ev.score.a}</span><span class="sep">–</span><span>${ev.score.b}</span>` : 'VS'}<small>${m.status === 'final' && ev?.result === 't' ? 'Final · empate' : statusText(m)}</small>${ev?.score.t ? `<small class="score-ties">${ev.score.t} categoría${ev.score.t > 1 ? 's' : ''} empatada${ev.score.t > 1 ? 's' : ''}</small>` : ''}</div>
        <a class="side" href="#equipo/${b.id}">${crest(b)}<span><h2>${esc(b.name)}</h2><span class="owner">${esc(b.owner)} · ${recordOf(b.id)}</span></span></a></div>
      <table><thead><tr><th>Categoría</th><th>${esc(a.short)}</th><th>${esc(b.short)}</th><th>${m.status === 'final' ? 'Gana' : 'Ventaja'}</th></tr></thead><tbody>${D.categories.map((c, i) => {
        const r = ev?.cats[i];
        return `<tr><td class="cat" title="${esc(c.name)}">${esc(c.id)}${c.lowerWins ? ' ↓' : ''}</td><td class="${r ? (r.w === 'a' ? 'w' : r.w === 'b' ? 'l' : '') : ''}">${r ? fmtStat(c, r.va) : '—'}</td><td class="${r ? (r.w === 'b' ? 'w' : r.w === 'a' ? 'l' : '') : ''}">${r ? fmtStat(c, r.vb) : '—'}</td><td>${r ? (r.w === 't' ? '<span class="note">Empate</span>' : `<span class="dot" style="background:${esc((r.w === 'a' ? a : b).colors[0])}"></span>${esc((r.w === 'a' ? a : b).short)}`) : '<span class="note">Pendiente</span>'}</td></tr>`;
      }).join('')}</tbody></table></div>
    ${cutoffNote(m)}${isPartial(m) ? '<p class="note">Marcador parcial de actualización manual. No suma victorias ni derrotas a la clasificación hasta que se confirme el cierre.</p>' : ''}${m.sourceImage ? `<a class="link" href="${esc(m.sourceImage)}" target="_blank" rel="noopener noreferrer">Ver captura fuente</a>` : ''}${ev ? '' : '<p class="note">Sin totales completos informados para este cruce.</p>'}
    ${section('Los dos planteles')}<div class="team-detail">${[a, b].map(t => `<section class="panel"><div class="rank-heading" style="margin-top:0">${crest(t, 56)}<h2><a href="#equipo/${t.id}">${esc(t.name)}</a></h2></div><p class="analysis"><strong>Líderes:</strong> ${t.leaders.map(esc).join(' · ')}</p><p class="analysis">${esc(t.strength)}</p></section>`).join('')}</div>`;
}
function normalizePlayerName(v) { return String(v).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase(); }
function playerTier(name) { const key = normalizePlayerName(name); return D.rules.tiers.find(t => t.players.some(p => normalizePlayerName(p) === key))?.id ?? null; }
function tierBadge(id) { const cls = id === 'A+' ? 'Ap' : id ?? 'none'; return `<span class="tier-badge ${cls}">${esc(id ?? 'Sin tier')}</span>`; }
function draftOrder() {
  return `<ol class="draft-order" aria-label="Orden inicial del draft">${D.draft.order.map((id, i) => { const t = team(id); return `<li><span class="draft-pick">${String(i + 1).padStart(2, '0')}</span>${crest(t, 44)}<a href="#equipo/${id}">${esc(t.name)}</a></li>`; }).join('')}</ol>`;
}
function tierDirectory(query = '') {
  const key = normalizePlayerName(query);
  const groups = D.rules.tiers.map(t => ({ ...t, players: t.players.filter(p => normalizePlayerName(p).includes(key)) })).filter(t => t.players.length);
  const count = groups.reduce((n, t) => n + t.players.length, 0);
  return { count, html: groups.length ? groups.map(t => `<section class="tier-panel"><div class="tier-heading"><h3>${tierBadge(t.id)} Tier ${esc(t.id)}</h3><span>Máximo ${t.limit} por equipo</span></div><p class="note tier-caption">${esc(t.title)}</p><ul class="tier-players">${t.players.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>`).join('') : `<div class="empty"><h3>Sin coincidencias</h3><p class="note">Prueba con otro nombre o apellido. Según el anexo, los jugadores que no figuran en ninguna lista se consideran sin tier.</p></div>` };
}
function rulesPage() {
  const r = D.rules, dir = tierDirectory();
  return `<div class="page-head"><span class="eyebrow">Temporada ${esc(D.season)} · Reglamento</span><h1>Las reglas del juego</h1><p class="lead-text">Formato y anexo de tiers comunicados por ${esc(D.commissioner)}, creador y comisionado de la liga.</p><p class="note">Fuente recibida: <time datetime="${r.date}">${fmtDate(r.date)}</time>. Esta página recoge las reglas disponibles y señala los puntos todavía pendientes.</p></div>
    <div class="rule-stats"><div class="rule-stat reveal"><strong>${r.teamCount}</strong><span>Equipos en la liga</span></div><div class="rule-stat reveal"><strong>${D.categories.length}</strong><span>Categorías por enfrentamiento</span></div><div class="rule-stat reveal"><strong>${r.weeklyAcquisitions}</strong><span>Adquisiciones máximas por equipo y semana</span></div></div>
    <div class="rule-grid"><section class="panel reveal"><h2>Formato de competencia</h2><div class="rule-copy"><p>Fantasy Basketball ${esc(r.format)} con ${r.teamCount} equipos y nueve categorías.</p><p>El récord de la clasificación acumula categorías ganadas, perdidas y empatadas, según los resultados definitivos de ESPN de la semana 1.</p><p>El draft utiliza el formato <strong>${esc(r.draftFormat)}</strong>: el orden de selección se invierte en cada ronda.</p><p>Cada equipo dispone de un máximo de <strong>${r.weeklyAcquisitions} adquisiciones por semana</strong>, incluyendo agencia libre y waivers.</p></div><h2>Las nueve categorías</h2><table><thead><tr><th scope="col">Cat.</th><th scope="col">Se compara</th><th scope="col">Objetivo</th></tr></thead><tbody>${D.categories.map(c => `<tr><th scope="row">${esc(c.id)}</th><td>${esc(c.name)}</td><td>${esc(c.goal)}</td></tr>`).join('')}</tbody></table><p class="note">En TO gana quien registra menos pérdidas. FG% y FT% comparan porcentajes.</p></section>
    <section class="panel reveal"><h2>Cupos por tier</h2><table><thead><tr><th scope="col">Tier</th><th scope="col">Máximo por equipo</th></tr></thead><tbody>${r.tiers.map(t => `<tr><th scope="row">${tierBadge(t.id)}</th><td>${t.limit} jugadores</td></tr>`).join('')}<tr><th scope="row">${tierBadge(null)}</th><td>Sin límite de cupos de tier</td></tr></tbody></table><div class="rule-copy"><p>Los tiers <strong>se mantienen fijos durante toda la temporada</strong>. El orden de los nombres dentro de cada tier no representa un ranking individual.</p><p>Máximo <strong>un jugador con tier de cada franquicia NBA</strong> por equipo. Los jugadores sin tier están exentos de esta restricción.</p><p>Un jugador que no aparece en S, A+, A o B se considera sin tier. Sigue sujeto a las demás reglas de plantilla y adquisiciones.</p></div></section></div>
    <section class="rule-notice reveal"><h2>Antes de adquirir a un jugador</h2><ol class="rule-copy"><li>Comprobar que queda un cupo disponible en su tier.</li><li>Revisar si el equipo ya tiene un jugador con tier de esa franquicia NBA.</li><li>Verificar el límite semanal de adquisiciones y el resto de las reglas aplicables.</li></ol></section>
    ${section('El anexo de jugadores', 'Tiers fijos para la temporada')}<div class="tier-search"><label for="tier-search">Buscar un jugador por nombre o apellido</label><input id="tier-search" type="search" placeholder="Ej.: Jokić, Sengun, Edwards…" autocomplete="off" aria-controls="tier-results"><p class="note" id="tier-status" role="status" aria-live="polite">${dir.count} jugadores en los tiers S, A+, A y B.</p></div><div id="tier-results">${dir.html}</div>
    <section class="rule-notice"><h2>Puntos pendientes de confirmar</h2><p class="note">El reglamento principal recibido se corta al comenzar la sección 2; el anexo de tiers sí está completo.</p><ul class="rule-copy rule-pending">${r.pending.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section><p class="note">${esc(r.source)}</p><a class="link" href="#nota/analisis-draft-2026" style="margin-bottom:40px">Leer el análisis del draft</a>`;
}
function rankingHeading(t, position) { return `<div class="rank-heading">${crest(t, 64)}<h2><a href="#equipo/${t.id}">${position ? position + '. ' : ''}${esc(t.name)}</a></h2></div>`; }

function postLabel(p) { return p.partial ? 'Crónica parcial' : p.category; }
function playerReport(reportId, teamId) {
  const report = D.statisticsReports?.find(r => r.id === reportId);
  if (!report) return '';
  const players = report.players.filter(p => p.team === teamId);
  const ids = new Set(players.flatMap(p => p.nbaGames ?? p.games));
  const sources = report.games.filter(g => ids.has(g.id));
  const columns = ['tpm', 'reb', 'ast', 'stl', 'blk', 'to', 'pts'];
  return `<details class="player-report"><summary>Ver actas de ${esc(team(teamId).name)} · ${players.length} jugadores</summary>
    <p class="note">${report.status === 'final' ? 'Totales contabilizados en el cruce fantasy, contrastados con actas NBA' : 'Totales NBA de los partidos revisados'} del ${fmtDate(report.from)} al ${fmtDate(report.through)}. ${report.status === 'final' ? 'PJ NBA: partidos jugados; PJ cómputo: actas cuya suma reproduce la captura fantasy. Las cifras restantes corresponden al cómputo fantasy.' : 'PJ: partidos jugados;'} TC/TL: convertidos e intentados. Desliza la tabla para ver todas las categorías.</p>
    <div class="report-scroll" tabindex="0" role="region" aria-label="Estadísticas individuales de ${esc(team(teamId).name)}"><table class="report-table"><caption>Actuaciones individuales ${report.status === 'final' ? 'al cierre' : 'al corte'} · temporada ${esc(report.season)}</caption><thead><tr><th scope="col">Jugador</th>${report.status === 'final' ? '<th scope="col">PJ NBA</th><th scope="col">PJ cómputo</th>' : '<th scope="col">PJ</th>'}<th scope="col">MIN</th><th scope="col">TC</th><th scope="col">TL</th><th scope="col">3PM</th><th scope="col">REB</th><th scope="col">AST</th><th scope="col">STL</th><th scope="col">BLK</th><th scope="col">TO ↓</th><th scope="col">PTS</th></tr></thead><tbody>${players.map(p => `<tr><th scope="row">${esc(p.name)}</th>${report.status === 'final' ? `<td>${p.nbaGp ?? '—'}</td>` : ''}<td>${p.gp ?? '—'}</td><td>${p.minutes ?? '—'}</td><td>${p.stats ? p.stats.fgm + '/' + p.stats.fga : '—'}</td><td>${p.stats ? p.stats.ftm + '/' + p.stats.fta : '—'}</td>${columns.map(k => `<td>${p.stats?.[k] ?? '—'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <p class="note">${report.status === 'final' ? 'Portis, Klay Thompson y Gafford jugaron tres partidos NBA, pero sus totales fantasy coinciden con dos actas. Las capturas no explican esa diferencia. Un guion indica una cifra sin confirmar.' : 'Un guion indica que no se localizó un acta; no equivale a una valoración negativa ni confirma una lesión. Las próximas actuaciones dependen de disponibilidad y alineación.'}</p><p class="note report-sources">Fuentes: ${sources.map(g => `<a href="${esc(g.url)}" target="_blank" rel="noopener noreferrer">${esc(g.name)}</a> <a href="${esc(g.dataUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Datos públicos ESPN de ${esc(g.name)}">(datos)</a>`).join(' · ')}.</p></details>`;
}
function reportSources(p) {
  const r = D.statisticsReports?.find(r => r.id === p.reportId);
  if (!r) return '';
  if (r.status === 'final') return `<details class="player-report"><summary>Fuentes y alcance del cierre</summary><p class="note">${esc(r.source)}</p><p class="note">Semana del ${fmtDate(r.from)} al ${fmtDate(r.through)}. Resultados confirmados el ${fmtDate(r.updatedDate)}; las capturas no incluyen una hora de corte.</p><p>${r.sourceImages.map(s => `<a class="link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Captura: ${esc(s.title)}</a>`).join(' · ')}</p></details>`;
  return `<details class="player-report"><summary>Fuentes y alcance del corte</summary><p class="note">${esc(r.source)}</p><p class="note">Los marcadores son parciales de actualización manual. El horario se estimó a partir del mensaje del participante y se identifica como aproximado.</p><p><a class="link" href="${esc(r.sourceImage)}" target="_blank" rel="noopener noreferrer">Ver captura de los marcadores</a></p><p class="note">Calendario consultado al preparar esta nota: ${['20261023', '20261024', '20261025'].map(day => `<a href="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${day}" target="_blank" rel="noopener noreferrer">ESPN · ${day.slice(6)} de octubre</a>`).join(' · ')}. Los partidos programados no garantizan participación de un jugador.</p></details>`;
}
function articleSources(p, indexes) {
  return `<p class="note report-sources">Fuentes: ${indexes.map(i => p.sources?.[i]).filter(Boolean).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>`).join(' · ')}.</p>`;
}

function article(p) {
  const r = D.rankings.find(r => r.id === p.rankingId);
  const report = D.statisticsReports?.find(r => r.id === p.reportId);
  const reportMeta = !report ? '' : p.category === 'Previas' ? `<span class="snapshot-meta">Base estadística: cierre del ${esc(fmtDate(report.through))}</span>` : cutoffNote({...report,updatedAtApproximate:report.approximate});
  return `<a class="back" href="#noticias">← Volver al archivo</a><article class="reading"><div class="page-head"><span class="eyebrow">${esc(postLabel(p))}</span><h1>${esc(p.title)}</h1><div class="meta"><time datetime="${p.date}">${fmtDate(p.date)}</time> · Redacción Papafritas${p.readingMinutes ? ` · ${p.readingMinutes} min de lectura` : ''}</div>${reportMeta}</div>${articleCover(p)}<p class="lead">${esc(p.excerpt)}</p>
    ${p.body.map(([tag, text]) => tag === 'sources' ? articleSources(p, text) : tag === 'player-report' ? playerReport(p.reportId, text) : tag === 'draft-order' ? draftOrder() : tag === 'team-heading' ? rankingHeading(team(text)) : `<${tag === 'h2' ? 'h2' : 'p'}>${esc(text)}</${tag === 'h2' ? 'h2' : 'p'}>`).join('')}
    ${r ? r.entries.map((e, i) => `${rankingHeading(team(e.team), i + 1)}<p>${esc(e.analysis)}</p>`).join('') : ''}
    ${reportSources(p)}<p class="source">${esc(p.source ?? 'Base documental: fichas de los cuatro equipos registradas el 20 de octubre de 2026 a partir de capturas proporcionadas por los participantes. Las valoraciones son opinión y proyección editorial: no incorporan estadísticas actuales ni presuponen disponibilidad.')}</p>
    ${p.rulesLink ? '<a class="link" href="#reglas">Consultar el reglamento y los tiers</a>' : ''}
    <div class="share"><button class="btn ghost" id="copy">Copiar enlace</button><a class="btn" href="https://wa.me/?text=${encodeURIComponent(p.title + ' ' + location.href)}" target="_blank" rel="noopener noreferrer">Compartir por WhatsApp</a></div><p id="status" role="status" class="note"></p>
    <h2>Equipos de esta nota</h2><div class="categories">${p.teams.map(id => `<a class="link" href="#equipo/${id}">${esc(team(id).name)}</a>`).join('')}</div></article>`;
}
const positions = ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'UTIL', 'UTIL', 'UTIL', 'Banca', 'Banca', 'Banca'];
function teamPage(t) {
  const st = standings().find(r => r.id === t.id), pos = standingPosition(t.id);
  const myMatches = allMatchups().filter(m => m.teams.includes(t.id));
  return `<a class="back" href="#equipos">← Todos los equipos</a>
    <section class="team-hero" style="--team:${esc(t.colors[0])}">${t.logo ? `<div class="wm" aria-hidden="true"><img src="${esc(t.logo)}" alt=""></div>` : ''}${crest(t)}<div><span class="eyebrow">${esc(t.city)} · ${esc(t.short)}</span><h1>${esc(t.name)}</h1><div class="owner">${esc(t.owner)}${t.ownerNote ? ' · ' + esc(t.ownerNote) : ''}</div>
      <div class="stats"><div class="stat"><b>${recordOf(t.id)}</b><span>Récord por categorías</span></div><div class="stat"><b>${played() ? pos + '°' : '—'}</b><span>Posición</span></div><div class="stat"><b>${st.w}-${st.l}-${st.t}</b><span>Cruces semanales</span></div><div class="stat"><b>${D.rankings[0].entries.findIndex(e => e.team === t.id) + 1}°</b><span>Power ranking</span></div></div></div></section>
    <div class="team-detail"><section class="panel reveal"><h2>Plantel</h2><div class="tier-summary" aria-label="Cupos de tier del plantel">${D.rules.tiers.map(r => `<span class="tier-badge ${r.id === 'A+' ? 'Ap' : r.id}">${esc(r.id)} ${t.roster.filter(p => playerTier(p) === r.id).length}/${r.limit}</span>`).join('')}</div>
      <table><thead><tr><th class="roster-position" scope="col">Puesto</th><th scope="col">Jugador</th><th class="roster-tier" scope="col">Tier</th></tr></thead><tbody>${t.roster.map((p, i) => `<tr><td class="kicker">${positions[i]}</td><td>${esc(p)}</td><td>${tierBadge(playerTier(p))}</td></tr>`).join('')}<tr><td class="kicker">IR</td><td class="note">Vacante</td><td>—</td></tr></tbody></table><p class="note" style="margin-top:12px">Cupos según el anexo del ${fmtDate(D.rules.date)}. <a class="link" href="#reglas" style="padding:0">Ver reglas</a></p></section>
    <section class="side-section reveal"><span class="eyebrow">Radiografía editorial</span><h2>Líderes esperados</h2><p class="analysis">${t.leaders.map(esc).join(' · ')}</p><h2>Fortalezas proyectadas</h2><p class="analysis">${esc(t.strength)}</p><h2>Desafíos por categorías</h2><p class="analysis">${esc(t.challenge)}</p><div class="categories">${D.categories.map(c => `<span>${esc(c.id)}${c.lowerWins ? ' ↓' : ''}</span>`).join('')}</div>
      <h2>Cruces</h2><div class="matches" style="grid-template-columns:1fr">${myMatches.map(matchCard).join('') || '<p class="note">Sin cruces programados.</p>'}</div></section></div>
    ${section('Publicaciones relacionadas')}<div class="news-grid" style="margin-bottom:48px">${posts().filter(p => p.teams.includes(t.id)).map(news).join('')}</div>`;
}
function rankPage() {
  const r = D.rankings[0];
  return `<div class="page-head"><span class="eyebrow">${esc(r.label)} · ${fmtDate(r.date)}</span><h1>${esc(r.title)}</h1><p class="lead-text">Opinión editorial entre los cuatro equipos. No es la clasificación oficial ni el resultado de una simulación.</p></div>
    ${r.entries.map((e, i) => { const t = team(e.team); return `<section class="rank-detail reveal"><span class="rank-num">${i + 1}</span><div>${rankingHeading(t)}<div style="margin:-4px 0 12px">${moveBadge(e, i)}</div><p class="analysis">${esc(e.analysis)}</p><p class="note">${esc(t.strength)} ${esc(t.challenge)}</p></div></section>`; }).join('')}
    <p class="note" style="margin-top:20px">Base: planteles documentados el 20 de octubre de 2026. Proyecciones cualitativas sin estadísticas actuales.</p><a class="link" href="#nota/ranking-pretemporada" style="margin-bottom:40px">Leer la nota de pretemporada</a>`;
}
function teamsPage() {
  return `<div class="page-head"><span class="eyebrow">La liga</span><h1>Las franquicias</h1><p class="lead-text">Cuatro equipos, trece jugadores cada uno y nueve categorías para discutir quién armó mejor.</p></div><div class="team-grid" style="margin-bottom:48px">${D.teams.map(teamCard).join('')}</div>`;
}

/* ---------- Ticker ---------- */
function ticker() {
  const items = [];
  allMatchups().forEach(m => { const [a, b] = m.teams.map(team), ev = evaluate(m); items.push(ev ? `<b>${esc(a.short)} ${ev.score.a}–${ev.score.b} ${esc(b.short)}</b> · ${statusText(m)}` : `${esc(a.short)} vs ${esc(b.short)} · ${fmtShort(m.start)}–${fmtShort(m.end)}`); });
  posts().slice(0, 3).forEach(p => items.push(`<b>${esc(postLabel(p))}</b> · ${esc(p.title)}`));
  const top = team(D.rankings[0].entries[0].team); items.push(`<b>Power ranking</b> · ${esc(top.name)} lidera la ${esc(D.rankings[0].label.toLowerCase())}`);
  items.push(`Temporada ${esc(D.season)} · ${D.categories.length} categorías · ${D.teams.length} equipos`);
  const rail = items.map(i => `<span class="item">${i}</span>`).join('');
  $('#ticker-rail').innerHTML = rail + rail;
}

/* ---------- Router ---------- */
function route(focus = false) {
  const hash = location.hash.slice(1), [view, id] = hash.split('/');
  if (hash === 'contenido' && $('#contenido').innerHTML) { $('#contenido').focus(); return; }
  let html, title = 'Portada', nav = view || 'home';
  if (!hash || hash === 'contenido') { html = home(); nav = 'home'; }
  else if (view === 'noticias') { html = archive(); title = 'Noticias'; }
  else if (view === 'calendario') { html = schedulePage(); title = 'Calendario'; }
  else if (view === 'equipos') { html = teamsPage(); title = 'Equipos'; }
  else if (view === 'ranking') { html = rankPage(); title = 'Power ranking'; }
  else if (view === 'reglas') { html = rulesPage(); title = 'Reglas'; }
  else if (view === 'nota' && D.posts.some(p => p.id === id)) { const p = D.posts.find(p => p.id === id); html = article(p); title = p.title; nav = 'noticias'; }
  else if (view === 'equipo' && team(id)) { html = teamPage(team(id)); title = team(id).name; nav = 'equipos'; }
  else if (view === 'cruce' && matchupById(id)) { const m = matchupById(id); html = matchupPage(m); title = m.teams.map(t => team(t).short).join(' vs '); nav = 'calendario'; }
  else html = '<div class="empty"><h1>Página no encontrada</h1><a class="link" href="#">Volver a portada</a></div>';
  $('#contenido').innerHTML = html;
  document.body.classList.toggle('is-home', nav === 'home' && (!hash || hash === 'contenido'));
  document.title = title + ' | Papafritas League';
  document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  document.querySelectorAll('.team-image').forEach(img => { const fb = () => { img.hidden = true; img.nextElementSibling.hidden = false; }; img.addEventListener('error', fb); if (img.complete && !img.naturalWidth && img.src) fb(); });
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => { filter = b.dataset.filter; route(); document.querySelector(`[data-filter="${filter}"]`).focus(); }));
  if (view === 'reglas') $('#tier-search').addEventListener('input', ev => { const r = tierDirectory(ev.target.value); $('#tier-results').innerHTML = r.html; $('#tier-status').textContent = ev.target.value.trim() ? `${r.count} coincidencias en el anexo.` : `${r.count} jugadores en los tiers S, A+, A y B.`; });
  if ($('#copy')) $('#copy').addEventListener('click', async () => { try { await navigator.clipboard.writeText(location.href); $('#status').textContent = 'Enlace copiado.'; } catch { $('#status').textContent = 'Copia este enlace: ' + location.href; } });
  reveal();
  if (focus) { window.scrollTo(0, 0); $('#contenido').focus({ preventScroll: true }); }
}
/* ---------- Animaciones de aparición ---------- */
/* Las animaciones nunca deben esconder contenido: lo que ya está en pantalla se
   muestra al instante y, por seguridad, todo se muestra a los 1,5 s aunque el
   navegador no avise el scroll (pestaña en segundo plano, ahorro de energía, etc.). */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
let revealTimer;
function reveal() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.in)').forEach((el, i) => {
    if (!io || !vh || el.getBoundingClientRect().top < vh) { el.classList.add('in'); return; }
    el.style.transitionDelay = Math.min(i * 40, 280) + 'ms'; io.observe(el);
  });
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 1500);
}

/* ---------- Arena: se ancla justo bajo el ticker ---------- */
function placeArena() { const t = $('.ticker'), a = $('.arena'); if (t && a) a.style.top = (t.offsetTop + t.offsetHeight) + 'px'; }
window.addEventListener('resize', placeArena, { passive: true });
window.addEventListener('load', placeArena);

window.addEventListener('hashchange', () => route(true));
window.addEventListener('scroll', () => document.body.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
ticker();
route();
placeArena();
