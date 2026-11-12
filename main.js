/* ============ MAIN ============ */
const VIEWS = { start: viewStart, today: viewToday, dex: viewDex, study: viewStudy, games: viewGames, profile: viewProfile };
const LANG_GATED = { today: 1, dex: 1, study: 1, games: 1 };
let lastRoute = null;
function render() {
  stopGame();
  const r = route(), y = window.scrollY, soon = LANG_GATED[r] && S.prof.lang && S.prof.lang !== 'ja';
  $('#view').innerHTML = soon ? viewSoon() : VIEWS[r]();
  $$('.nav a').forEach(a => { const on = a.dataset.r === r; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  refreshChips();
  window.scrollTo(0, r === lastRoute ? y : 0); lastRoute = r;
}

ACT.ui = el => {
  const k = el.dataset.k, v = el.dataset.v, parts = k.split('.');
  let o = UI; for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
  o[parts[parts.length - 1]] = /^\d+$/.test(v) ? +v : v;
  if (k === 'dex') UI.dexQ = '';
  if (k === 'study' && v !== 'lessons') UI.lesson = null;
  render();
};

document.addEventListener('click', e => {
  if (e.target.id === 'modal') { closeModal(); return; }
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const f = ACT[el.dataset.act];
  if (f) { e.preventDefault(); f(el, e); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset && t.dataset.input === 'dexq') { UI.dexQ = t.value; const l = $('#dexlist'); if (l) l.innerHTML = dexList(); }
});
document.addEventListener('keydown', e => {
  const tg = e.target;
  if (e.key === 'Enter' && tg && tg.dataset && tg.dataset.enter && ACT[tg.dataset.enter]) { e.preventDefault(); ACT[tg.dataset.enter](tg, e); return; }
  if (!$('#modal').hidden) { if (e.key === 'Escape') closeModal(); return; }
  const tag = (tg.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || e.ctrlKey || e.metaKey || e.altKey) return;
  if (route() !== 'study') return;
  if (UI.study === 'cards' && SESS && !SESS.done) {
    if (!SESS.reveal && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ACT.flip(); }
    else if (SESS.reveal && ['1', '2', '3', '4'].indexOf(e.key) >= 0) ACT.grade({ dataset: { g: String(+e.key - 1) } });
  } else if (UI.study === 'quiz' && QZ && !QZ.done) {
    if (QZ.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= QZ.qs[QZ.i].opts.length) ACT.qans({ dataset: { i: String(+e.key - 1) } });
    else if (QZ.sel != null && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); ACT.qnext(); }
  }
});
window.addEventListener('hashchange', render);

loadState(); applyPrefs();
try { speechSynthesis.getVoices(); } catch (e) {}
document.body.insertAdjacentHTML('afterbegin', pandaSprite());
{ const m0 = $('.mark'); if (m0) m0.innerHTML = pandaMark(40); }
render();
fxInit();
