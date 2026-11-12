/* ============ GAMES ============ */
UI.game.mdeck = 'hira';
let GAME = null;
const G = {};
function stopGame() { if (GAME && GAME.stop) GAME.stop(); GAME = null; }
const GAMES = [
  ['rush', 'Kana Rush', 'Type the reading of each kana as fast as you can. You have 60 seconds and combos raise your score.', 'Typing', '--c-hira'],
  ['drop', 'Kana Drop', 'Kana fall from the top. Type each reading before it lands. Three misses and it is over.', 'Typing', '--c-kata'],
  ['match', 'Memory Match', 'Flip cards and pair every character with its reading or meaning. Fewer moves score more.', 'Memory', '--c-kanji'],
  ['build', 'Sentence Builder', 'Put Japanese words in the right order to say the English sentence. Eight rounds.', 'Grammar', '--c-vocab'],
  ['bolt', 'Lightning Round', 'True or false against the clock. Kana, kanji and words are mixed. 30 seconds.', 'Speed', '--c-phrase'],
  ['dojo', 'Stroke Dojo', 'Draw each stroke in the right order and direction. The dojo checks every stroke you make.', 'Writing', '--c-hira'],
  ['particle', 'Particle Pop', 'Pick the right particle (は, を, に, で…) to complete the sentence.', 'Grammar', '--c-vocab'],
  ['sound', 'Sound Match', 'Listen to a kana read aloud and pick the one you heard.', 'Listening', '--c-kata'],
  ['number', 'Number Dash', 'Read numbers written in kanji, or listen and pick the number you heard.', 'Numbers', '--c-kanji'],
  ['shiritori', 'Shiritori', 'Word chain against the panda. Each word must start with the last kana of the one before.', 'Vocabulary', '--c-phrase'],
  ['quote', 'Anime Quotes', 'Read a famous line and guess the anime (easy) or the anime and the character (hard).', 'Anime', '--c-phrase'],
  ['song', 'Guess the Song', 'Listen to a short clip and guess the artist (easy) or the artist and the title (hard).', 'Music', '--c-kanji'],
  ['mock', 'JLPT Mock Test', 'Twenty mixed questions at N5 or N4 level, scored like a mini exam.', 'Exam', '--c-hira']
];
const GAME_GROUPS = [['Core practice', ['rush', 'drop', 'match', 'build', 'bolt']], ['Writing and listening', ['dojo', 'sound', 'number']], ['Grammar and vocabulary', ['particle', 'shiritori']], ['Anime and music', ['quote', 'song']], ['Exam', ['mock']]];
function viewGames() {
  const g = UI.game;
  return `<section class="page"><header class="ph"><p class="eyebrow">遊び · Games</p><h1>Minigames</h1>
    <p class="sub">Short rounds that train recall and speed. Every game updates your progress and earns XP.</p></header>
    <div class="card setup"><p class="lab">Kana for the typing games</p>
      ${chipRow([['h', 'Hiragana'], ['k', 'Katakana'], ['hk', 'Both']], g.deck, 'game.deck')}
      ${chipRow([['basic', 'Basic sounds'], ['all', 'Every kana']], g.scope, 'game.scope')}
      <p class="lab">Memory Match</p>
      ${chipRow([['hira', 'Hiragana'], ['kata', 'Katakana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary']], g.mdeck, 'game.mdeck')}
      ${chipRow([[6, '6 pairs'], [8, '8 pairs'], [10, '10 pairs']], g.pairs, 'game.pairs')}</div>
    ${GAME_GROUPS.map(gr => { const L = gr[1].map(k => GAMES.find(x => x[0] === k)).filter(x => x && !gameOff(x[0])); return L.length ? `<h2 class="gh">${gr[0]}</h2><div class="gcards">${L.map(x => `<article class="gcard" style="--c:var(${x[4]})"><p class="eyebrow"><span class="dotc"></span>${x[3]}</p><h3>${x[1]}</h3><p class="muted">${x[2]}</p>
      <div class="gfoot"><span class="muted small">Best <b>${S.best[x[0]] || 0}</b></span><button class="btn" data-act="play" data-v="${x[0]}">Play</button></div></article>`).join('')}</div>` : ''; }).join('')}</section>`;
}
ACT.play = el => startGame(el.dataset.v);
ACT.gexit = () => { stopGame(); render(); };
function startGame(key) {
  stopGame();
  const meta = GAMES.find(x => x[0] === key);
  $('#view').innerHTML = `<section class="page"><div class="gbar"><button class="link" data-act="gexit">‹ Games</button><span class="eyebrow">${meta[1]}</span></div><div id="gstage" class="gstage"></div></section>`;
  window.scrollTo(0, 0);
  G[key]($('#gstage'));
}
const kanaPool = () => { const g = UI.game; return KANA.filter(i => (g.deck === 'hk' || i.type === g.deck) && (g.scope === 'all' || i.group === 'basic')); };
function finishGame(key, score, stats, missed, xp) {
  const meta = GAMES.find(x => x[0] === key), st = $('#gstage'); if (!st) return;
  const nb = score > (S.best[key] || 0); if (nb) S.best[key] = score;
  S.games++; today().games++; addXP(xp); sfx.win(); checkAch(); save();
  st.innerHTML = `<div class="card done"><p class="eyebrow">${nb ? 'New best score' : 'Round over'}</p><h2>${score} points</h2>
    <div class="stats3">${stats.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>
    <p class="muted">Best ${S.best[key]} · +${xp} XP</p>
    ${missed.length ? `<h4>Practise these</h4><div class="chips">${missed.slice(0, 12).map(id => { const it = ITEMS[id]; return `<button class="chip" data-act="detail" data-id="${esc(id)}"><span class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</span> ${esc(answerOf(it))}</button>`; }).join('')}</div>` : ''}
    <div class="row mt"><button class="btn" data-act="play" data-v="${key}">Play again</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
}
const shakeEl = el => { if (!el) return; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 320); };
const INPUT_ATTR = 'type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"';

/* ---- Kana Rush ---- */
G.rush = function (st) {
  const pool = kanaPool(); let cur = null, last = null, score = 0, combo = 0, bestCombo = 0, ok = 0, miss = 0, left = 60; const missed = new Set();
  st.innerHTML = `<div class="ghud"><span>Time <b id="gt">60</b></span><span>Score <b id="gs">0</b></span><span>Combo <b id="gc">0</b></span></div>
    <div class="gbig glyph" id="gg" aria-live="polite"></div><p class="hint" id="gh">Type the reading, for example <i>ka</i></p>
    <input id="gin" class="gin" ${INPUT_ATTR} aria-label="Type the reading">
    <div class="row ctr"><button class="btn ghost" id="gskip">Skip</button></div>`;
  const inp = $('#gin', st), gg = $('#gg', st), gh = $('#gh', st);
  const hud = () => { $('#gt', st).textContent = left; $('#gs', st).textContent = score; $('#gc', st).textContent = combo; };
  const next = () => { do { cur = pool[rnd(pool.length)]; } while (pool.length > 1 && cur === last); last = cur; gg.textContent = cur.ch; inp.value = ''; };
  const wrong = () => { miss++; combo = 0; missed.add(cur.id); touch(cur.id, false); sfx.no(); gh.textContent = 'It was ' + cur.ro; shakeEl(gg); next(); hud(); };
  inp.addEventListener('input', () => {
    const v = inp.value.trim().toLowerCase(); if (!v) return;
    const acc = accepted(cur);
    if (acc.indexOf(v) >= 0) { ok++; combo++; bestCombo = Math.max(bestCombo, combo); score += 10 + 2 * Math.min(combo, 10); touch(cur.id, true); sfx.tick(); gh.textContent = ''; next(); hud(); }
    else if (!acc.some(a => a.indexOf(v) === 0)) wrong();
  });
  $('#gskip', st).addEventListener('click', () => { wrong(); inp.focus(); });
  const tm = setInterval(() => { left--; hud(); if (left <= 0) { clearInterval(tm); GAME = null; finishGame('rush', score, [[ok, 'correct'], [pct(ok, ok + miss) + '%', 'accuracy'], [bestCombo, 'best combo']], Array.from(missed), Math.round(score / 15)); } }, 1000);
  GAME = { stop: () => clearInterval(tm) };
  next(); hud(); inp.focus();
};

/* ---- Kana Drop ---- */
G.drop = function (st) {
  const pool = kanaPool(), H = 380;
  st.innerHTML = `<div class="ghud"><span>Lives <b id="dl">3</b></span><span>Score <b id="ds">0</b></span><span>Level <b id="dv">1</b></span></div>
    <div class="dstage" id="dst" style="height:${H}px"></div>
    <input id="din" class="gin" ${INPUT_ATTR} aria-label="Type the reading of a falling kana"><p class="hint ctr">Type a reading to clear the lowest matching character.</p>`;
  const stage = $('#dst', st), inp = $('#din', st);
  let items = [], lives = 3, score = 0, cleared = 0, lv = 1, spawnT = 0.3, lastT = performance.now(), raf = 0, over = false; const missed = new Set();
  const hud = () => { $('#dl', st).textContent = lives; $('#ds', st).textContent = score; $('#dv', st).textContent = lv; };
  const spawn = () => {
    const it = pool[rnd(pool.length)], el = document.createElement('span'); el.className = 'fall glyph'; el.textContent = it.ch;
    el.style.left = (10 + rnd(Math.max(1, stage.clientWidth - 70))) + 'px'; stage.appendChild(el); items.push({ it, el, y: -50 });
  };
  const end = () => { over = true; cancelAnimationFrame(raf); GAME = null; finishGame('drop', score, [[cleared, 'cleared'], [lv, 'level reached'], [missed.size, 'missed']], Array.from(missed), Math.round(score / 12)); };
  const tick = now => {
    if (over) return;
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now; spawnT -= dt;
    if (spawnT <= 0) { spawn(); spawnT = Math.max(0.8, 2.3 - lv * 0.17); }
    const v = 45 + lv * 9;
    items.forEach(o => { o.y += v * dt; o.el.style.transform = 'translateY(' + o.y + 'px)'; });
    items.filter(o => o.y > H - 46).forEach(o => { o.el.remove(); items.splice(items.indexOf(o), 1); lives--; missed.add(o.it.id); touch(o.it.id, false); sfx.no(); });
    hud(); if (lives <= 0) { end(); return; }
    raf = requestAnimationFrame(tick);
  };
  inp.addEventListener('input', () => {
    const v = inp.value.trim().toLowerCase(); if (!v) return;
    const hit = items.filter(o => accepted(o.it).indexOf(v) >= 0).sort((a, b) => b.y - a.y)[0];
    if (hit) {
      hit.el.classList.add('pop'); const el = hit.el; setTimeout(() => el.remove(), 180); items.splice(items.indexOf(hit), 1);
      cleared++; lv = 1 + Math.floor(cleared / 8); score += 10 + lv * 2; touch(hit.it.id, true); sfx.tick(); inp.value = ''; hud();
    } else if (!items.some(o => accepted(o.it).some(a => a.indexOf(v) === 0))) inp.value = '';
  });
  GAME = { stop: () => { over = true; cancelAnimationFrame(raf); } };
  hud(); inp.focus(); raf = requestAnimationFrame(tick);
};

/* ---- Memory Match ---- */
G.match = function (st) {
  const deck = UI.game.mdeck, n = +UI.game.pairs, used = {}, picks = [];
  shuffle(DECKS[deck].items.filter(lvOk)).forEach(it => { const a = answerOf(it); if (picks.length < n && !used[a]) { used[a] = 1; picks.push(it); } });
  const cards = shuffle(picks.reduce((a, it) => a.concat([{ p: it.id, t: it.ch, g: isKana(it) || it.type === 'j' }, { p: it.id, t: answerOf(it), g: false }]), []));
  let open = [], moves = 0, found = 0, lock = false; const t0 = Date.now();
  st.innerHTML = `<div class="ghud"><span>Moves <b id="mm">0</b></span><span>Pairs <b id="mp">0/${n}</b></span><span>Time <b id="mt">0</b></span></div>
    <div class="mgrid" style="--cols:${n === 10 ? 5 : 4}">${cards.map((c, i) => `<button class="mc" data-i="${i}" data-p="${esc(c.p)}" aria-label="Card ${i + 1}"><span class="mf">${c.g ? '日' : '本'}</span><span class="mb ${c.g ? 'glyph' : ''}">${esc(c.t)}</span></button>`).join('')}</div>`;
  const tm = setInterval(() => { const t = $('#mt', st); if (t) t.textContent = Math.round((Date.now() - t0) / 1000); }, 500);
  GAME = { stop: () => clearInterval(tm) };
  const btn = i => $('.mc[data-i="' + i + '"]', st);
  st.onclick = e => {
    const b = e.target.closest('.mc'); if (!b || lock) return;
    const i = +b.dataset.i; if (open.indexOf(i) >= 0 || b.classList.contains('done')) return;
    b.classList.add('open'); open.push(i); sfx.tick();
    if (open.length < 2) return;
    moves++; $('#mm', st).textContent = moves;
    const [a, c] = open;
    if (cards[a].p === cards[c].p) {
      [a, c].forEach(k => { btn(k).classList.add('done'); }); touch(cards[a].p, true); found++; $('#mp', st).textContent = found + '/' + n; open = []; sfx.ok();
      if (found === n) {
        clearInterval(tm); GAME = null; const secs = Math.round((Date.now() - t0) / 1000);
        setTimeout(() => finishGame('match', Math.max(n * 10, n * 120 - moves * 15 - secs * 2), [[moves, 'moves'], [secs + 's', 'time'], [n, 'pairs']], [], n * 2 + (moves === n ? 5 : 0)), 500);
      }
    } else { lock = true; setTimeout(() => { [a, c].forEach(k => { const x = btn(k); if (x) x.classList.remove('open'); }); open = []; lock = false; }, 800); }
  };
};

/* ---- Sentence Builder ---- */
G.build = function (st) {
  const order = sample(SENTENCES, 8); let ri = 0, score = 0, first = 0;
  GAME = { stop: () => { st.onclick = null; } };
  function round() {
    const jp = order[ri][0], en = order[ri][1], toks = jp.split('|');
    let bank = shuffle(toks.map((t, i) => ({ t, i })));
    while (toks.length > 1 && bank.every((b, k) => b.i === k)) bank = shuffle(bank);
    let ans = [], tries = 0, hints = 0, busy = false;
    const draw = () => {
      $('#bans', st).innerHTML = ans.length ? ans.map((a, p) => `<button class="tok on" data-a="${p}">${esc(a.t)}</button>`).join('') : '<span class="muted">Tap the words below in order</span>';
      $('#bbank', st).innerHTML = bank.map(b => `<button class="tok" data-b="${b.i}">${esc(b.t)}</button>`).join('');
    };
    const msg = t => { $('#bmsg', st).textContent = t; };
    const advance = () => { ri++; if (ri >= order.length) { GAME = null; finishGame('build', score, [[first, 'first try'], [order.length, 'sentences'], [score, 'points']], [], Math.round(score / 35)); } else round(); };
    st.innerHTML = `<div class="ghud"><span>Round <b>${ri + 1}/${order.length}</b></span><span>Score <b>${score}</b></span></div>
      <div class="card"><p class="eyebrow">Say this in Japanese</p><p class="rom">${esc(en)}</p><div class="ans" id="bans"></div><div class="bank" id="bbank"></div>
      <div class="row"><button class="btn" data-g="chk">Check</button><button class="btn ghost" data-g="hint">Hint (−30)</button><button class="btn ghost" data-g="skip">Skip</button></div><p class="hint" id="bmsg" aria-live="polite"></p></div>`;
    draw();
    st.onclick = e => {
      if (busy) return;
      const t = e.target.closest('button'); if (!t) return;
      if (t.dataset.b != null) { const i = +t.dataset.b, k = bank.findIndex(b => b.i === i); if (k >= 0) { ans.push(bank.splice(k, 1)[0]); sfx.tick(); draw(); } }
      else if (t.dataset.a != null) { const p = +t.dataset.a; bank.push(ans.splice(p, 1)[0]); draw(); }
      else if (t.dataset.g === 'hint') {
        if (ans.some((a, p) => a.i !== p)) { bank = bank.concat(ans); ans = []; }
        const k = bank.findIndex(b => b.i === ans.length); if (k >= 0) { ans.push(bank.splice(k, 1)[0]); hints++; draw(); }
      } else if (t.dataset.g === 'skip') { busy = true; msg('Answer: ' + jp.replace(/\|/g, ' ')); fails_(); setTimeout(advance, 1600); }
      else if (t.dataset.g === 'chk') {
        if (ans.map(a => a.t).join('|') === jp) {
          busy = true; const pts = Math.max(30, 100 - 30 * hints - 25 * tries); score += pts; if (!tries && !hints) first++;
          sfx.ok(); msg('Correct, +' + pts); speak(jp.replace(/\|/g, '')); setTimeout(advance, 1100);
        } else {
          tries++; sfx.no(); shakeEl($('#bans', st));
          if (tries >= 3) { busy = true; msg('Answer: ' + jp.replace(/\|/g, ' ')); setTimeout(advance, 1800); } else msg('Not quite. Try another order.');
        }
      }
    };
    function fails_() { /* skipped rounds score nothing */ }
  }
  round();
};

/* ---- Lightning Round ---- */
G.bolt = function (st) {
  const pool = KANA.filter(i => i.group === 'basic').concat(KANJI, VOCAB);
  let left = 30, score = 0, ok = 0, miss = 0, combo = 0, bestCombo = 0, cur = null, truth = true; const missed = new Set();
  st.innerHTML = `<div class="ghud"><span>Time <b id="bt">30</b></span><span>Score <b id="bs">0</b></span><span>Streak <b id="bc">0</b></span></div>
    <div class="card bolt"><div id="bq"></div></div>
    <div class="row ctr"><button class="btn bad-b" data-v="0">False <kbd>←</kbd></button><button class="btn ok-b" data-v="1">True <kbd>→</kbd></button></div>
    <p class="hint ctr" id="bh">Does the answer match the character?</p>`;
  const hud = () => { $('#bt', st).textContent = left; $('#bs', st).textContent = score; $('#bc', st).textContent = combo; };
  const ask = () => {
    const it = pool[rnd(pool.length)]; cur = it; truth = Math.random() < 0.5;
    let shown = answerOf(it);
    if (!truth) { const alt = pool.filter(o => o.type === it.type && o.id !== it.id && answerOf(o) !== shown && (!it.cat || o.cat === it.cat)); const o2 = alt.length ? alt[rnd(alt.length)] : pool.find(o => o.type === it.type && answerOf(o) !== shown); shown = answerOf(o2); }
    const g = isKana(it) || it.type === 'j';
    $('#bq', st).innerHTML = `<div class="big ${g ? 'glyph' : 'txt'}">${esc(it.ch)}</div><p class="rom">${esc(shown)}</p>`;
  };
  const answer = v => {
    if (left <= 0) return;
    const right = (v === truth);
    touch(cur.id, right);
    if (right) { ok++; combo++; bestCombo = Math.max(bestCombo, combo); score += 10 + Math.min(combo, 10); sfx.tick(); $('#bh', st).textContent = ''; }
    else { miss++; combo = 0; score = Math.max(0, score - 5); missed.add(cur.id); sfx.no(); $('#bh', st).textContent = truth ? 'That was correct: ' + answerOf(cur) : 'That was wrong. It is ' + answerOf(cur); }
    hud(); ask();
  };
  st.onclick = e => { const b = e.target.closest('[data-v]'); if (b) answer(b.dataset.v === '1'); };
  const key = e => { if (e.key === 'ArrowRight' || e.key === 't' || e.key === 'T') { e.preventDefault(); answer(true); } else if (e.key === 'ArrowLeft' || e.key === 'f' || e.key === 'F') { e.preventDefault(); answer(false); } };
  document.addEventListener('keydown', key);
  const tm = setInterval(() => { left--; hud(); if (left <= 0) { clearInterval(tm); document.removeEventListener('keydown', key); GAME = null; finishGame('bolt', score, [[ok, 'correct'], [pct(ok, ok + miss) + '%', 'accuracy'], [bestCombo, 'best streak']], Array.from(missed), Math.round(score / 12)); } }, 1000);
  GAME = { stop: () => { clearInterval(tm); document.removeEventListener('keydown', key); } };
  ask(); hud();
};
