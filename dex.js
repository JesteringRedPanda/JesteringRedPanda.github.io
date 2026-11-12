/* ============ DEX ============ */
const DEX_TABS = [['hira', 'Hiragana'], ['kata', 'Katakana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary'], ['phrase', 'Phrases']];
const tabBar = (tabs, cur, key) => '<div class="tabs" role="tablist">' + tabs.map(t =>
  `<button class="tab${t[0] === cur ? ' on' : ''}" role="tab" aria-selected="${t[0] === cur}" data-act="ui" data-k="${key}" data-v="${t[0]}"${DECKS[t[0]] ? ` style="--c:var(${DECKS[t[0]].color})"` : ''}>${esc(t[1])}</button>`).join('') + '</div>';

const passFilter = it => { const L = lvl(it.id), f = UI.dexFilter; return f === 'all' || (f === 'new' && L === 0) || (f === 'learning' && (L === 1 || L === 2)) || (f === 'mastered' && L === 3); };

function viewDex() {
  return `<section class="page">
    <header class="ph"><p class="eyebrow">図鑑 · Dex</p><h1>Every character, one entry each</h1>
    <p class="sub">Open an entry to hear it, see examples and practise writing it. Entries fill with colour as you learn them.</p></header>
    ${tabBar(DEX_TABS, UI.dex, 'dex')}
    <div id="dexbody">${dexBody()}</div></section>`;
}
function dexBody() {
  const k = UI.dex, d = DECKS[k], s = deckStat(k), n = d.items.length;
  const kana = k === 'hira' || k === 'kata';
  let h = `<div class="deckbar" style="--c:var(${d.color})"><div class="deckinfo"><div><b>${s[3]}</b> of ${n} mastered <span class="muted">· ${s[1] + s[2]} in progress · ${s[0]} new</span></div>${segBar(k)}</div>
    <div class="row">
      <button class="btn" data-act="studyDeck" data-v="${k}">Study these</button>
      <button class="btn ghost" data-act="quizDeck" data-v="${k}">Quiz</button>
      ${kana ? `<button class="btn ghost" data-act="rushDeck" data-v="${k}">Typing game</button>` : ''}
    </div></div>
    <div class="toolbar">
      ${chipRow([['all', 'All'], ['new', 'New'], ['learning', 'In progress'], ['mastered', 'Mastered']], UI.dexFilter, 'dexFilter')}
      ${kana ? `<button class="chip${S.set.romaji ? ' on' : ''}" data-act="toggleRomaji" aria-pressed="${S.set.romaji}">Show romaji</button>`
        : `<label class="search"><span class="vh">Search</span><input id="dexq" data-input="dexq" type="search" placeholder="Search meaning, reading or character" value="${esc(UI.dexQ)}" autocomplete="off"></label>`}
    </div>`;
  if (k === 'kanji' || k === 'vocab') h += `<p class="lab">JLPT level</p>` + chipRow(LV_CHIPS, UI.lv, 'lv');
  if (k === 'kanji') h += chipRow([['all', 'All themes']].concat(KANJI_CATS), UI.dexCat, 'dexCat');
  if (k === 'vocab') h += chipRow([['all', 'All']].concat(VOCAB_CATS), UI.vocCat, 'vocCat');
  return h + `<div id="dexlist">${dexList()}</div>`;
}
const cellHTML = it => {
  const L = lvl(it.id), kana = isKana(it);
  return `<button class="cell l${L}${passFilter(it) ? '' : ' dim'}${kana ? '' : ' kj'}" data-act="detail" data-id="${esc(it.id)}" style="--c:var(${colorOf(it)})" aria-label="${esc(it.ch)} ${esc(answerOf(it))}, ${LVL_NAME[L]}">
    <span class="code">${codeOf(it)}</span><span class="glyph">${esc(it.ch)}</span>
    <span class="cap">${kana ? (S.set.romaji ? esc(it.ro) : '&nbsp;') : esc(it.mean)}</span>${it.type === 'j' ? `<span class="n5">${it.jlpt.toUpperCase()}</span>` : (it.jlpt === 'n4' ? '<span class="n5">N4</span>' : '')}</button>`;
};
function dexList() {
  const k = UI.dex, q = UI.dexQ.trim().toLowerCase();
  if (k === 'hira' || k === 'kata') {
    const type = k === 'hira' ? 'h' : 'k';
    let h = KANA_TABLE[type].map(g => `<div class="kgroup"><div class="kh"><h3>${g.title}</h3><span>${g.sub}</span></div>
      <div class="kgrid" style="--cols:${g.cols}">${g.rows.map(r => r.map(it => it ? cellHTML(it) : '<span class="gap"></span>').join('')).join('')}</div></div>`).join('');
    const pairs = type === 'h' ? [['ぬ', 'め'], ['わ', 'れ', 'ね'], ['は', 'ほ'], ['る', 'ろ'], ['さ', 'き'], ['い', 'り'], ['あ', 'お']]
      : [['シ', 'ツ'], ['ソ', 'ン'], ['ノ', 'メ'], ['ヌ', 'ス'], ['ウ', 'ワ'], ['ク', 'ケ'], ['コ', 'ユ']];
    return h + `<div class="card tip"><h3>Easy to mix up</h3><p class="muted">These sets look alike. Check the stroke direction and the angle before you answer.</p>
      <div class="look">${pairs.map(p => `<span>${p.map(c => `<b class="glyph">${c}</b>`).join('<i>/</i>')}</span>`).join('')}</div></div>`;
  }
  if (k === 'kanji') {
    const list = KANJI.filter(j => lvOk(j) && (UI.dexCat === 'all' || j.cat === UI.dexCat) && passFilter(j) &&
      (!q || j.ch.includes(q) || j.mean.toLowerCase().includes(q) || kanjiRead(j).includes(q) || j.ex.some(e => e.w.includes(q) || e.r.includes(q) || e.m.toLowerCase().includes(q))));
    if (!list.length) return '<p class="empty">No kanji match. Clear the search or the filter.</p>';
    return KANJI_CATS.filter(c => list.some(j => j.cat === c[0])).map(c => `<div class="kgroup"><div class="kh"><h3>${c[1]}</h3><span>${list.filter(j => j.cat === c[0]).length} kanji</span></div>
      <div class="kgrid kj" style="--cols:5">${list.filter(j => j.cat === c[0]).map(cellHTML).join('')}</div></div>`).join('') +
      `<p class="muted small">Tags show the JLPT level. All 103 N5 kanji are included, plus ${KANJI.filter(j => j.jlpt === 'n4').length} N4 kanji. Meanings, readings and stroke counts were checked against online kanji lists.</p>`;
  }
  if (k === 'vocab') {
    const list = VOCAB.filter(v => lvOk(v) && (UI.vocCat === 'all' || v.cat === UI.vocCat) && passFilter(v) &&
      (!q || v.ch.includes(q) || v.rd.includes(q) || v.ro.includes(q) || v.mean.toLowerCase().includes(q)));
    if (!list.length) return '<p class="empty">No words match. Clear the search or the filter.</p>';
    return `<div class="vlist">${list.map(v => `<div class="vrow l${lvl(v.id)}"><button class="vmain" data-act="detail" data-id="${esc(v.id)}">
      <span class="vjp">${esc(v.ch)}</span><span class="vmid"><span class="vrd">${esc(v.rd)}</span><span class="vro">${esc(v.ro)}</span></span><span class="vmean">${esc(v.mean)}</span></button>
      <button class="ibtn" data-act="say" data-id="${esc(v.id)}" aria-label="Listen to ${esc(v.rd)}">${SPEAK_SVG}</button></div>`).join('')}</div>`;
  }
  const sits = Array.from(new Set(PHRASES.map(p => p.sit)));
  const list = PHRASES.filter(p => passFilter(p) && (!q || p.ch.includes(q) || p.ro.toLowerCase().includes(q) || p.mean.toLowerCase().includes(q)));
  if (!list.length) return '<p class="empty">No phrases match.</p>';
  return sits.filter(s => list.some(p => p.sit === s)).map(s => `<div class="kgroup"><div class="kh"><h3>${s}</h3></div><div class="plist">${list.filter(p => p.sit === s).map(p => `
    <div class="pcard l${lvl(p.id)}"><button class="pmain" data-act="detail" data-id="${p.id}"><span class="pjp">${esc(p.ch)}</span><span class="pro">${esc(p.ro)}</span><span class="pen">${esc(p.mean)}</span></button>
    <button class="ibtn" data-act="say" data-id="${p.id}" aria-label="Listen">${SPEAK_SVG}</button></div>`).join('')}</div></div>`).join('');
}

/* ---- detail dialog ---- */
function fmtDue(x) {
  if (!x.s) return 'Not studied yet';
  const df = x.due - Date.now();
  if (df <= 0) return 'Due for review now';
  if (df < 36e5) return 'Next review in ' + Math.max(1, Math.round(df / 6e4)) + ' min';
  if (df < DAY) return 'Next review in ' + Math.round(df / 36e5) + ' h';
  return 'Next review in ' + Math.round(df / DAY) + ' days';
}
function openDetail(id) {
  const it = ITEMS[id]; if (!it) return;
  const x = peek(id), L = lvl(id), kana = isKana(it);
  let body = '';
  if (kana) {
    const other = it.type === 'h' ? toKata(it.ch) : toHira(it.ch);
    const grp = KANA_TABLE[it.type].find(g => g.key === it.group);
    const words = VOCAB.filter(v => toHira(v.rd).indexOf(toHira(it.ch)) === 0).slice(0, 4);
    body = `<div class="big glyph${it.ch.length > 1 ? ' two' : ''}">${esc(it.ch)}</div><p class="rom">${esc(it.ro)}</p>
      <dl class="kv"><dt>${it.type === 'h' ? 'Katakana' : 'Hiragana'}</dt><dd class="glyph">${esc(other)}</dd><dt>Group</dt><dd>${grp.title}</dd><dt>Typing</dt><dd>${accepted(it).join(', ')}</dd></dl>
      ${words.length ? `<h4>Words that start with ${esc(it.ch)}</h4><ul class="exl">${words.map(w => `<li><b>${esc(w.ch)}</b> <span>${esc(w.rd)}</span> <i>${esc(w.mean)}</i></li>`).join('')}</ul>` : ''}`;
  } else if (it.type === 'j') {
    body = `<div class="big glyph">${esc(it.ch)}</div><p class="rom">${esc(it.mean)}</p>
      <dl class="kv"><dt>On'yomi</dt><dd>${it.on.map(esc).join('、') || '-'}</dd><dt>Kun'yomi</dt><dd>${it.kun.map(esc).join('、') || '-'}</dd><dt>Strokes</dt><dd>${it.strokes}</dd>
      <dt>Theme</dt><dd>${esc(KANJI_CATS.find(c => c[0] === it.cat)[1])}${it.jlpt ? ' · JLPT ' + it.jlpt.toUpperCase() : ''}</dd></dl>
      <h4>Examples</h4><ul class="exl">${it.ex.map(e => `<li><b>${esc(e.w)}</b> <span>${esc(e.r)}</span> <i>${esc(e.m)}</i></li>`).join('')}</ul>`;
  } else {
    const ks = Array.from(it.ch).filter(c => KANJI_BY_CH[c]).filter((c, i, a) => a.indexOf(c) === i);
    body = `<div class="big txt">${esc(it.ch)}</div><p class="rom">${esc(it.mean)}</p>
      <dl class="kv"><dt>Reading</dt><dd>${esc(it.rd)}</dd><dt>Romaji</dt><dd>${esc(it.ro)}</dd>${it.sit ? `<dt>Use</dt><dd>${esc(it.sit)}</dd>` : `<dt>Topic</dt><dd>${esc(VOCAB_CATS.find(c => c[0] === it.cat)[1])}</dd>`}</dl>
      ${ks.length ? `<h4>Kanji inside</h4><div class="chips">${ks.map(c => `<button class="chip" data-act="detail" data-id="j:${c}"><span class="glyph">${c}</span> ${esc(KANJI_BY_CH[c].mean)}</button>`).join('')}</div>` : ''}`;
  }
  const stroke = (kana || it.type === 'j') ? strokePanel(it.ch) : '';
  const pad = (kana || it.type === 'j') ? `<h4>Practice writing</h4><div class="pad"><span class="padg glyph${it.ch.length > 1 ? ' two' : ''}">${esc(it.ch)}</span><canvas id="pad" width="640" height="640" aria-label="Drawing area"></canvas></div>
      <div class="row"><button class="btn ghost" data-act="padclear">Clear</button><button class="btn ghost" data-act="padguide">Hide guide</button></div>` : '';
  openModal(`<button class="x" data-act="closeModal" aria-label="Close">×</button>
    <p class="eyebrow" style="--c:var(${colorOf(it)})"><span class="dotc"></span>${codeOf(it)} · ${TYPE_NAME[it.type]} · ${LVL_NAME[L]}</p>${body}
    <div class="row mt"><button class="btn" data-act="say" data-id="${esc(id)}">${SPEAK_SVG} Listen</button>
      ${L < 3 ? `<button class="btn ghost" data-act="known" data-id="${esc(id)}">I already know this</button>` : ''}
      ${x.s ? `<button class="btn ghost" data-act="resetItem" data-id="${esc(id)}">Reset progress</button>` : ''}</div>
    <p class="muted small">${fmtDue(x)}${x.s ? ` · ${x.c} correct, ${x.w} missed` : ''}</p>${stroke}${pad}`);
  initPad(); if (stroke) initStrokes();
}
function initPad() {
  const c = $('#pad'); if (!c) return;
  const ctx = c.getContext('2d'); ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#000';
  let down = false, last = null;
  const pos = e => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * c.width / r.width, (e.clientY - r.top) * c.height / r.height]; };
  c.addEventListener('pointerdown', e => { down = true; last = pos(e); try { c.setPointerCapture(e.pointerId); } catch (x) {} ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(last[0] + 0.1, last[1]); ctx.stroke(); });
  c.addEventListener('pointermove', e => { if (!down) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(p[0], p[1]); ctx.stroke(); last = p; });
  ['pointerup', 'pointercancel'].forEach(t => c.addEventListener(t, () => { down = false; }));
}

/* ---- dex actions ---- */
ACT.detail = el => openDetail(el.dataset.id);
ACT.closeModal = () => closeModal();
ACT.say = el => { const it = ITEMS[el.dataset.id]; if (it) speak(speakText(it)); };
ACT.toggleRomaji = () => { S.set.romaji = !S.set.romaji; save(); render(); };
ACT.known = el => { markKnown(el.dataset.id); openDetail(el.dataset.id); if (route() !== 'games') render(); toast('Marked as mastered'); };
ACT.resetItem = el => { resetItem(el.dataset.id); openDetail(el.dataset.id); if (route() !== 'games') render(); };
ACT.padclear = () => { const c = $('#pad'); if (c) c.getContext('2d').clearRect(0, 0, c.width, c.height); };
ACT.padguide = el => { const p = $('.pad'); const h = p.classList.toggle('hide'); el.textContent = h ? 'Show guide' : 'Hide guide'; };
ACT.studyDeck = el => { UI.cfg.deck = el.dataset.v; UI.cfg.mode = 'mix'; UI.study = 'cards'; SESS = null; go('study'); };
ACT.quizDeck = el => { UI.quiz.deck = el.dataset.v; UI.study = 'quiz'; QZ = null; go('study'); };
ACT.rushDeck = el => { UI.game.deck = el.dataset.v === 'hira' ? 'h' : 'k'; go('games'); setTimeout(() => startGame('rush'), 30); };
