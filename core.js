/* ============ CORE ============ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const rnd = n => Math.floor(Math.random() * n);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const dayKey = d => { d = d || new Date(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };

/* ---- state ---- */
const KEY = 'nihon-ni-ikitai.v1';
const DEF = () => ({ saved: 0, xp: 0, items: {}, days: {}, best: {}, ach: {}, lessons: {}, games: 0, perfect: 0, tot: { ok: 0, all: 0 },
  flags: {}, last: 0, mine: [], prof: { name: '', lang: '', color: '--c-hira', face: 'panda', glyph: '日', motto: '', nameAt: 0 },
  set: { goal: 30, romaji: true, sound: true, speak: true, font: 'klee', theme: 'system', qRomaji: false, qEnglish: false } });
/* storage is per signed-in user so several people can share one browser */
let STORE_UID = '';
const storeKey = () => KEY + (STORE_UID ? '.u.' + STORE_UID : '');
const mergeState = o => {
  const d = DEF(), s = Object.assign(d, o);
  s.set = Object.assign(d.set, o.set || {}); s.tot = Object.assign(DEF().tot, o.tot || {}); s.prof = Object.assign(DEF().prof, o.prof || {}); s.flags = Object.assign({}, o.flags || {});
  return s;
};
let S = DEF();
function loadState() {
  try {
    const o = JSON.parse(localStorage.getItem(storeKey()) || 'null');
    S = (o && typeof o === 'object') ? mergeState(o) : DEF();
  } catch (e) { S = DEF(); /* storage unavailable: run in memory */ }
}
let saveT;
function save() { S.saved = Date.now(); if (typeof cloudDirty === 'function') cloudDirty(); if (typeof syncDirty === 'function') syncDirty(); clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(storeKey(), JSON.stringify(S)); } catch (e) {} }, 200); }

const UI = { ptab: 'overview', lv: 'all', dex: 'hira', dexFilter: 'all', dexQ: '', dexCat: 'all', vocCat: 'all', study: 'cards', lesson: null,
  cfg: { deck: 'hira', mode: 'mix', size: 10, dir: 'mixed' }, quiz: { deck: 'hira', dir: 'mixed', size: 10 },
  game: { deck: 'h', scope: 'basic', pairs: 8 } };

/* ---- item state & spaced repetition ---- */
const DAY = 864e5, GAP = [0, 1, 3, 7, 14, 30];
const peek = id => S.items[id] || { b: 0, due: 0, c: 0, w: 0, s: 0 };
const ref = id => S.items[id] || (S.items[id] = { b: 0, due: 0, c: 0, w: 0, s: 0 });
const lvl = id => { const x = peek(id); return x.b >= 5 ? 3 : x.b >= 3 ? 2 : (x.b >= 1 || x.s > 0) ? 1 : 0; };
const LVL_NAME = ['New', 'Learning', 'Familiar', 'Mastered'];

function today() { const k = dayKey(); return S.days[k] || (S.days[k] = { xp: 0, rev: 0, learn: 0, games: 0, ok: 0, all: 0, met: false }); }
function tally(ok) { S.tot.all++; const d = today(); d.all++; if (ok) { S.tot.ok++; d.ok++; } }
function addXP(n) {
  if (!n) return;
  const d = today(); d.xp += n; S.xp += n;
  const now = new Date(), hr = now.getHours();
  if (S.last && now - S.last > 7 * DAY) S.flags.comeback = 1;
  if (hr < 5) S.flags.night = 1; else if (hr < 7) S.flags.early = 1;
  S.last = +now;
  if (!d.met && d.xp >= S.set.goal) { d.met = true; toast('Daily goal reached'); sfx.win(); }
  checkAch(); refreshChips(); save();
}
/* g: 0 again, 1 hard, 2 good, 3 easy. Returns true when the item was new. */
function grade(id, g) {
  const x = ref(id), now = Date.now(), first = x.s === 0;
  x.s++;
  if (g === 0) { x.w++; x.b = Math.max(0, x.b - 1); x.due = now + 10 * 60e3; tally(false); }
  else {
    x.c++;
    if (g === 1) { x.b = Math.max(1, x.b); x.due = now + Math.max(36e5, GAP[x.b] * DAY * 0.5); }
    else { x.b = Math.min(5, x.b + (g === 3 ? 2 : 1)); x.due = now + GAP[x.b] * DAY; }
    tally(true);
  }
  const d = today(); if (first) d.learn++; else d.rev++;
  addXP(g + (first && g > 0 ? 1 : 0));
  return first;
}
/* lighter update used by quizzes and games */
function touch(id, ok) {
  const x = ref(id), now = Date.now(), first = x.s === 0;
  x.s++;
  if (ok) { x.c++; if (x.b === 0) { x.b = 1; x.due = now + DAY; } else if (x.due <= now) { x.b = Math.min(5, x.b + 1); x.due = now + GAP[x.b] * DAY; } }
  else { x.w++; if (x.b > 1) x.b--; x.due = now + 10 * 60e3; }
  tally(ok); if (first) today().learn++;
  save();
}
function markKnown(id) { const x = ref(id); x.b = 5; x.s = Math.max(1, x.s); x.due = Date.now() + 30 * DAY; save(); checkAch(); }
function resetItem(id) { delete S.items[id]; save(); }

const LV_CHIPS = [['all', 'N5 + N4'], ['n5', 'N5 only'], ['n4', 'N4 only']];
const lvOk = i => UI.lv === 'all' || !i.jlpt || i.jlpt === UI.lv;
const poolOf = deck => ((deck && deck !== 'all') ? DECKS[deck].items : ALL).filter(lvOk);
const dueList = deck => poolOf(deck).filter(i => { const x = S.items[i.id]; return x && x.s > 0 && x.due <= Date.now(); }).sort((a, b) => S.items[a.id].due - S.items[b.id].due);
const newList = deck => poolOf(deck).filter(i => { const x = S.items[i.id]; return !x || (x.s === 0 && x.b === 0); });
const deckStat = key => { const r = [0, 0, 0, 0]; DECKS[key].items.forEach(i => r[lvl(i.id)]++); return r; };
const cnt = (deck, min) => DECKS[deck].items.filter(i => lvl(i.id) >= min).length;

function levelInfo() { const l = Math.floor(Math.sqrt(S.xp / 30)) + 1, lo = 30 * (l - 1) * (l - 1), hi = 30 * l * l; return { l, lo, hi, p: (S.xp - lo) / (hi - lo) }; }
function streak() {
  let n = 0; const d = new Date();
  if (!(S.days[dayKey(d)] || {}).met) d.setDate(d.getDate() - 1);
  while ((S.days[dayKey(d)] || {}).met) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---- badges live in badges.js; flag() records counters they read ---- */
const flag = (k, n) => { S.flags[k] = (S.flags[k] || 0) + (n == null ? 1 : n); save(); checkAch(); };
let achBusy = false;
function checkAch() {
  if (achBusy || typeof ACH === 'undefined') return; achBusy = true;
  ACH.forEach(a => { if (!S.ach[a.id] && a.test()) { S.ach[a.id] = Date.now(); toast('Badge unlocked: ' + a.name); } });
  achBusy = false;
}

/* ---- feedback: toast, sound, speech ---- */
let toastT;
function toast(msg) { const t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2300); }
let AC;
function beep(f, d, type, v) {
  if (!S.set.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'sine'; o.frequency.value = f; g.gain.value = v || 0.05;
    o.connect(g); g.connect(AC.destination); o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + d); o.stop(AC.currentTime + d);
  } catch (e) {}
}
const sfx = {
  ok: () => { beep(660, 0.09); setTimeout(() => beep(880, 0.12), 80); },
  no: () => beep(170, 0.2, 'square', 0.03),
  win: () => { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 0.14), i * 110)); },
  tick: () => beep(500, 0.04)
};
function speakText(it) {
  return it.type === 'j' ? it.ex[0].w : it.type === 'v' ? it.rd : it.ch;
}
function speak(text) {
  if (!S.set.speak) { toast('Speech is switched off in your Profile settings'); return; }
  try {
    const u = new SpeechSynthesisUtterance(text); u.lang = 'ja-JP'; u.rate = 0.85;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().indexOf('ja') === 0);
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { toast('Speech is not available in this browser'); }
}

/* ---- item display helpers ---- */
const answerOf = it => (it.type === 'h' || it.type === 'k') ? it.ro : it.mean;
const codeOf = it => it.type === 'h' ? 'H' + pad2(it.n) : it.type === 'k' ? 'K' + pad2(it.n) : it.type === 'j' ? 'J' + String(it.n).padStart(3, '0') : it.type === 'v' ? 'V' + String(it.n).padStart(3, '0') : 'P' + pad2(it.n);
const colorOf = it => ({ h: '--c-hira', k: '--c-kata', j: '--c-kanji', v: '--c-vocab', p: '--c-phrase' })[it.type];
const TYPE_NAME = { h: 'Hiragana', k: 'Katakana', j: 'Kanji', v: 'Word', p: 'Phrase' };
const kanjiRead = k => k.on.concat(k.kun).join('、');
const isKana = it => it.type === 'h' || it.type === 'k';

/* ---- generic UI helpers ---- */
const chipRow = (opts, cur, key) => '<div class="chips" role="group">' + opts.map(o =>
  `<button class="chip${String(o[0]) === String(cur) ? ' on' : ''}" data-act="ui" data-k="${key}" data-v="${esc(o[0])}" aria-pressed="${String(o[0]) === String(cur)}">${esc(o[1])}</button>`).join('') + '</div>';
const segBar = key => {
  const s = deckStat(key), n = DECKS[key].items.length;
  return `<div class="seg" style="--c:var(${DECKS[key].color})" title="${s[3]} mastered, ${s[2]} familiar, ${s[1]} learning, ${s[0]} new">` +
    [3, 2, 1].map(l => `<i class="s${l}" style="width:${(s[l] / n * 100).toFixed(2)}%"></i>`).join('') + '</div>';
};
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

const ACT = {};
const SPEAK_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

/* ---- clipboard ---- */
ACT.copyText = el => copyText(el.dataset.t);
function copyText(t) {
  const done = () => toast('Copied');
  const fallback = () => {
    const ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Select the text and copy it by hand'); } ta.remove();
  };
  try { navigator.clipboard.writeText(t).then(done, fallback); } catch (e) { fallback(); }
}

/* ---- modal ---- */
function openModal(html, cls) {
  const m = $('#modal');
  m.innerHTML = `<div class="dlg ${cls || ''}" role="dialog" aria-modal="true">${html}</div>`;
  m.hidden = false; document.body.classList.add('noscroll');
  const c = $('.dlg .x', m); if (c) c.focus();
}
function closeModal() { const m = $('#modal'); if (!m) return; m.hidden = true; m.innerHTML = ''; document.body.classList.remove('noscroll'); }

/* ---- routing ---- */
const ROUTES = ['start', 'today', 'dex', 'study', 'games', 'profile'];
const route = () => {
  let h = location.hash.slice(1); if (h === 'progress') h = 'profile';
  if (ROUTES.indexOf(h) >= 0) return h;
  return S.prof.lang ? 'today' : 'start';
};
function go(r) { if (location.hash === '#' + r) render(); else location.hash = r; }

function applyPrefs() {
  const r = document.documentElement;
  if (S.set.theme === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.set.theme);
  r.setAttribute('data-font', S.set.font);
}
