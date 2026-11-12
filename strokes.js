/* ============ STROKE ORDER + STROKE DOJO ============
   Stroke data: KanjiVG (c) Ulrich Apel, licensed CC BY-SA 3.0, https://kanjivg.tagaini.net
   Files are fetched once from the jsDelivr CDN and remembered on this device afterwards.            */
const KVG = c => 'https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/' + c.codePointAt(0).toString(16).padStart(5, '0') + '.svg';
const SKC = {};
async function loadStrokes(ch) {
  if (SKC[ch]) return SKC[ch];
  try { const s = localStorage.getItem('kvg:' + ch); if (s) { SKC[ch] = JSON.parse(s); return SKC[ch]; } } catch (e) {}
  const res = await fetch(KVG(ch)); if (!res.ok) throw new Error('http ' + res.status);
  const doc = new DOMParser().parseFromString(await res.text(), 'image/svg+xml');
  const paths = Array.from(doc.querySelectorAll('path')).filter(p => /-s\d+$/.test(p.getAttribute('id') || '')).map(p => p.getAttribute('d'));
  if (!paths.length) throw new Error('no strokes');
  SKC[ch] = paths; try { localStorage.setItem('kvg:' + ch, JSON.stringify(paths)); } catch (e) { /* storage full: still works */ }
  return paths;
}
const SK_ATTR = '<p class="muted small">Stroke data: <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> © Ulrich Apel, CC BY-SA 3.0.</p>';
const NS = 'http://www.w3.org/2000/svg';
const GRID = '<rect x="1" y="1" width="107" height="107" rx="6" class="skbox"/><path d="M54.5 2 V107 M2 54.5 H107" class="skgrid"/><path d="M2 2 L107 107 M107 2 L2 107" class="skgrid d2"/>';

/* ---- viewer inside the detail dialog ---- */
const SKV = { n: 0, token: 0, svgs: [], total: 0, shown: 0 };
function strokePanel(str) {
  return `<h4>Stroke order</h4><div class="skbox2" id="skbox" data-s="${esc(str)}"><p class="muted">Loading stroke order…</p></div>
    <div class="row" id="skctl" hidden><button class="btn" data-act="skPlay">Play</button><button class="btn ghost" data-act="skPrev" aria-label="Previous stroke">‹ Step</button><button class="btn ghost" data-act="skNext" aria-label="Next stroke">Step ›</button><button class="btn ghost" data-act="skAll">Show all</button></div>${SK_ATTR}`;
}
async function initStrokes() {
  const box = $('#skbox'); if (!box) return; const chars = Array.from(box.dataset.s);
  try {
    const all = await Promise.all(chars.map(loadStrokes)); if (!document.body.contains(box)) return;
    SKV.svgs = []; SKV.total = 0; SKV.token++;
    box.innerHTML = chars.map((c, ci) => `<svg class="sksvg" viewBox="0 0 109 109" role="img" aria-label="Stroke order of ${esc(c)}">${GRID}${all[ci].map((d, i) => `<path class="skp hide" d="${d}" pathLength="1"/>`).join('')}<g class="sklab"></g></svg>`).join('');
    $$('.sksvg', box).forEach((svg, ci) => {
      const ps = Array.from(svg.querySelectorAll('.skp')), lab = svg.querySelector('.sklab');
      ps.forEach((p, i) => { const pt = p.getPointAtLength(0); lab.insertAdjacentHTML('beforeend', `<g class="skn hide" transform="translate(${(pt.x - 3).toFixed(1)} ${(pt.y - 3).toFixed(1)})"><circle r="4.6"/><text y="2.2">${i + 1}</text></g>`); });
      const ls = Array.from(lab.children); SKV.svgs.push({ ps, ls }); SKV.total += ps.length;
    });
    $('#skctl').hidden = false; skPlayAll();
  } catch (e) {
    box.innerHTML = '<p class="muted">Stroke order could not be loaded. It needs an internet connection the first time, and is remembered on this device after that.</p>';
  }
}
const skFlat = () => { const a = []; SKV.svgs.forEach(s => s.ps.forEach((p, i) => a.push([p, s.ls[i]]))); return a; };
function skSet(n) { SKV.token++; SKV.shown = n; skFlat().forEach((x, i) => { x[0].style.transition = 'none'; x[0].style.strokeDashoffset = 0; x[0].classList.toggle('hide', i >= n); x[0].classList.toggle('cur', i === n - 1); x[1].classList.toggle('hide', i >= n); }); }
const wait = ms => new Promise(r => setTimeout(r, ms));
async function skPlayAll() {
  const tok = ++SKV.token, all = skFlat(); skSet(0); SKV.token = tok;
  for (let i = 0; i < all.length; i++) {
    if (SKV.token !== tok || !document.body.contains(all[i][0])) return;
    const p = all[i][0]; all.forEach((x, j) => x[0].classList.toggle('cur', j === i));
    p.style.transition = 'none'; p.style.strokeDashoffset = 1; p.classList.remove('hide'); all[i][1].classList.remove('hide'); void p.getBoundingClientRect();
    p.style.transition = 'stroke-dashoffset .6s ease-in-out'; p.style.strokeDashoffset = 0; SKV.shown = i + 1;
    await wait(780);
  }
  if (SKV.token === tok) all.forEach(x => x[0].classList.remove('cur'));
}
ACT.skPlay = () => skPlayAll();
ACT.skNext = () => skSet(Math.min(SKV.total, SKV.shown + 1));
ACT.skPrev = () => skSet(Math.max(0, SKV.shown - 1));
ACT.skAll = () => { skSet(SKV.total); skFlat().forEach(x => x[0].classList.remove('cur')); };

/* ---- Stroke Dojo: draw each stroke in order, it checks start, end and shape ---- */
const SD = { set: 'hira' };
const dojoPool = () => {
  const s = SD.set;
  if (s === 'hira') return KANA.filter(i => i.type === 'h' && i.group === 'basic' && i.ch.length === 1);
  if (s === 'kata') return KANA.filter(i => i.type === 'k' && i.group === 'basic' && i.ch.length === 1);
  return KANJI.filter(k => k.jlpt === s && k.strokes <= 9);
};
G.dojo = st => {
  st.innerHTML = `<div class="card"><h2>Stroke Dojo</h2><p class="muted">Draw each stroke of the character in the right order and direction. The dojo checks where each stroke starts and ends and how it curves. Five characters per round.</p>
    <p class="lab">Practise</p><div class="chips">${[['hira', 'Hiragana'], ['kata', 'Katakana'], ['n5', 'N5 kanji'], ['n4', 'N4 kanji']].map(c => `<button class="chip${SD.set === c[0] ? ' on' : ''}" data-act="sdSet" data-v="${c[0]}" aria-pressed="${SD.set === c[0]}">${c[1]}</button>`).join('')}</div>
    <p class="muted small">Easier kanji with up to 9 strokes are used. Stroke data loads from the internet the first time you meet a character.</p>
    <div class="row"><button class="btn lg" data-act="sdGo">Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
};
ACT.sdSet = el => { SD.set = el.dataset.v; G.dojo($('#gstage')); };
ACT.sdGo = () => dojoRun($('#gstage'));

function resample(pts, n) {
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const tot = L[L.length - 1] || 1, out = []; let j = 0;
  for (let k = 0; k < n; k++) { const t = tot * k / (n - 1); while (j < L.length - 2 && L[j + 1] < t) j++; const seg = (L[j + 1] - L[j]) || 1, u = Math.min(1, Math.max(0, (t - L[j]) / seg)); const a = pts[j], b = pts[Math.min(j + 1, pts.length - 1)]; out.push([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]); }
  return out;
}
function refPoints(d) {
  const sv = document.createElementNS(NS, 'svg'), p = document.createElementNS(NS, 'path'); sv.style.cssText = 'position:absolute;width:0;height:0;visibility:hidden'; p.setAttribute('d', d); sv.appendChild(p); document.body.appendChild(sv);
  const L = p.getTotalLength(), pts = []; for (let i = 0; i <= 24; i++) { const q = p.getPointAtLength(L * i / 24); pts.push([q.x, q.y]); } sv.remove(); return pts;
}
function judge(user, ref) {
  const u = resample(user, 16), r = resample(ref, 16), d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  let m = 0, mr = 0; for (let i = 0; i < 16; i++) { m += d(u[i], r[i]); mr += d(u[i], r[15 - i]); } m /= 16; mr /= 16;
  const rl = r.reduce((s, p, i) => i ? s + d(p, r[i - 1]) : 0, 0), ul = u.reduce((s, p, i) => i ? s + d(p, u[i - 1]) : 0, 0);
  const ok = m < 17 && d(u[0], r[0]) < 25 && d(u[15], r[15]) < 25 && (rl < 8 || ul > rl * 0.45);
  return { ok, reversed: !ok && mr < 17 && mr < m * 0.75 };
}
async function dojoRun(st) {
  const items = sample(dojoPool(), 5); let ci = 0, perfect = 0, totalMiss = 0, doneChars = 0;
  const token = {}; GAME = { stop() { token.dead = true; } };
  const loadChar = async () => {
    const it = items[ci], ch = it.ch;
    st.innerHTML = `<div class="ghud"><span>Character <b>${ci + 1}/${items.length}</b></span><span>Mistakes <b id="sdm">0</b></span><span>Stroke <b id="sdn">1</b></span></div><p class="muted ctr">Loading…</p>`;
    let paths; try { paths = await loadStrokes(ch); } catch (e) { st.innerHTML = '<div class="card"><h2>Could not load stroke data</h2><p class="muted">The dojo needs the stroke files, which load from the internet the first time. Check your connection and try again.</p><div class="row"><button class="btn" data-act="sdGo">Try again</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>'; return; }
    if (token.dead) return;
    const refs = paths.map(refPoints); let k = 0, miss = 0, hintOn = false, drawing = null;
    st.innerHTML = `<div class="ghud"><span>Character <b>${ci + 1}/${items.length}</b></span><span>Mistakes <b id="sdm">0</b></span><span>Stroke <b id="sdn">1</b>/${paths.length}</span></div>
      <p class="hint ctr" id="sdh">Draw stroke 1. ${isKana(it) ? esc(it.ro) : esc(it.mean)}</p>
      <div class="dojo"><svg id="sdsvg" viewBox="0 0 109 109" aria-label="Drawing area">${GRID}<g id="sdref">${paths.map(d => `<path class="skp hide" d="${d}" pathLength="1"/>`).join('')}</g><path id="sdhint" class="skp hintp hide" d="" pathLength="1"/><polyline id="sduser" class="skuser" points=""/></svg></div>
      <div class="row ctr"><button class="btn ghost" id="sdhintbtn">Show next stroke</button><button class="btn ghost" id="sdskip">Skip character</button></div>${SK_ATTR}`;
    const svg = $('#sdsvg', st), poly = $('#sduser', st), refEls = $$('#sdref .skp', st), hintP = $('#sdhint', st), h = $('#sdh', st);
    const pt = e => { const r = svg.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 109, (e.clientY - r.top) / r.height * 109]; };
    const hud = () => { $('#sdm', st).textContent = totalMiss + miss; $('#sdn', st).textContent = Math.min(k + 1, paths.length); };
    const showHint = () => { hintP.setAttribute('d', paths[k]); hintP.classList.remove('hide'); hintP.style.transition = 'none'; hintP.style.strokeDashoffset = 1; void hintP.getBoundingClientRect(); hintP.style.transition = 'stroke-dashoffset .7s ease-in-out'; hintP.style.strokeDashoffset = 0; };
    svg.addEventListener('pointerdown', e => { if (k >= paths.length) return; e.preventDefault(); svg.setPointerCapture(e.pointerId); drawing = [pt(e)]; poly.setAttribute('points', drawing[0].join(',')); hintP.classList.add('hide'); });
    svg.addEventListener('pointermove', e => { if (!drawing) return; drawing.push(pt(e)); poly.setAttribute('points', drawing.map(p => p.join(',')).join(' ')); });
    const endDraw = async () => {
      if (!drawing) return; const pts = drawing; drawing = null; poly.setAttribute('points', '');
      if (pts.length < 2) return;
      const res = judge(pts, refs[k]);
      if (res.ok) {
        sfx.ok(); const p = refEls[k]; p.classList.remove('hide'); p.classList.add('good'); p.style.strokeDashoffset = 0; k++; hud();
        if (k >= paths.length) {
          doneChars++; if (miss <= Math.max(1, Math.floor(paths.length / 3))) { perfect++; flag('dojo'); touch(it.id, true); } totalMiss += miss;
          h.textContent = miss === 0 ? 'Perfect!' : 'Done with ' + miss + ' mistake' + (miss === 1 ? '' : 's') + '.';
          setTimeout(() => { if (token.dead) return; ci++; if (ci >= items.length) finish(); else loadChar(); }, 900);
        } else h.textContent = 'Good. Now stroke ' + (k + 1) + '.';
      } else {
        miss++; sfx.no(); shakeEl(svg); hud(); h.textContent = res.reversed ? 'Right stroke, wrong direction. Check where it starts.' : 'Not quite. The ' + ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'][k] + ' stroke is different. Try again or use the hint.';
        if (miss >= 3 && !hintOn) { hintOn = true; showHint(); }
      }
    };
    svg.addEventListener('pointerup', endDraw); svg.addEventListener('pointercancel', () => { drawing = null; poly.setAttribute('points', ''); });
    $('#sdhintbtn', st).onclick = () => { if (k < paths.length) showHint(); };
    $('#sdskip', st).onclick = () => { totalMiss += paths.length; ci++; if (ci >= items.length) finish(); else loadChar(); };
  };
  const finish = () => { GAME = null; finishGame('dojo', perfect * 20 + Math.max(0, doneChars * 5 - totalMiss * 2), [[perfect + '/' + items.length, 'clean characters'], [totalMiss, 'mistakes'], [SD.set === 'hira' ? 'Hiragana' : SD.set === 'kata' ? 'Katakana' : SD.set.toUpperCase(), 'set']], [], Math.min(40, perfect * 8 + doneChars * 2)); };
  loadChar();
}
