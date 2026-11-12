/* ============ MORE MINIGAMES: Particle Pop, Sound Match, Number Dash, Shiritori, JLPT Mock Test ============ */
const hasJaVoice = () => { try { return speechSynthesis.getVoices().some(v => v.lang && v.lang.toLowerCase().indexOf('ja') === 0); } catch (e) { return false; } };

/* ---- a small multiple-choice engine shared by several games ---- */
let MQ = null;
function mqStart(spec) {      // spec: {key, qs:[{prompt, opts:[], a, glyph, sec, note}], xpPer, stats(mq)->[[v,l]], onDone(mq)}
  stopGame(); GAME = { stop() { MQ = null; } };
  MQ = Object.assign({ i: 0, sel: null, score: 0, right: 0, secs: {}, wrong: [] }, spec); mqPaint();
}
function mqPaint() {
  const st = $('#gstage'); if (!st || !MQ) return; const m = MQ, q = m.qs[m.i];
  if (!q) {
    const xp = Math.min(60, m.right * m.xpPer);
    const stats = m.stats ? m.stats(m) : [[m.right + '/' + m.qs.length, 'right'], [pct(m.right, m.qs.length) + '%', 'accuracy']];
    finishGame(m.key, m.score, stats, [], xp);
    const card = $('.card.done', st);
    if (card && m.wrong.length) { const h = document.createElement('div'); h.innerHTML = `<h4>Review these</h4><ul class="plain">${m.wrong.slice(0, 8).map(w => `<li>${w}</li>`).join('')}</ul>`; card.insertBefore(h, card.querySelector('.row')); }
    if (m.onDone) m.onDone(m); return;
  }
  st.innerHTML = `<div class="ghud"><span>Question <b>${m.i + 1}/${m.qs.length}</b></span><span>Score <b>${m.score}</b></span>${q.sec ? `<span>${esc(q.sec)}</span>` : ''}</div>
    <div class="card qcard">${q.prompt}</div>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${m.sel != null ? (i === q.a ? ' ok' : (m.sel === i ? ' bad' : ' off')) : ''}" data-act="mqPick" data-i="${i}" ${m.sel != null ? 'disabled' : ''}><kbd>${i + 1}</kbd><span class="${q.glyph ? 'gl glyph' : ''}">${esc(o)}</span></button>`).join('')}</div>
    ${m.sel != null ? `<div class="fb ${m.sel === q.a ? 'ok' : 'bad'}"><span><b>${m.sel === q.a ? 'Correct' : 'Not quite'}</b>${m.sel === q.a ? '' : ' The answer is ' + esc(q.opts[q.a]) + '.'}${q.note ? ' ' + esc(q.note) : ''}</span><button class="btn" data-act="mqNext" autofocus>${m.i + 1 >= m.qs.length ? 'See results' : 'Next'}</button></div>` : ''}
    <div class="row ctr"><button class="link" data-act="gexit">Quit</button></div>`;
  if (m.i !== m.said && q.say && m.sel == null) { m.said = m.i; setTimeout(() => { if (MQ === m && m.i === m.said) speak(q.say); }, 250); }
}
ACT.mqPick = el => {
  const m = MQ, q = m.qs[m.i]; if (m.sel != null) return; m.sel = +el.dataset.i;
  const ok = m.sel === q.a; if (ok) { m.score += 10; m.right++; sfx.ok(); } else { sfx.no(); m.wrong.push(q.review || esc(q.opts[q.a])); }
  if (q.sec) { const s = m.secs[q.sec] = m.secs[q.sec] || [0, 0]; s[1]++; if (ok) s[0]++; }
  if (q.id) touch(q.id, ok); mqPaint();
};
ACT.mqNext = () => { MQ.i++; MQ.sel = null; mqPaint(); };
ACT.mqSay = () => { const q = MQ && MQ.qs[MQ.i]; if (q && q.say) speak(q.say); };
document.addEventListener('keydown', e => {
  if (!MQ || route() !== 'games' || !$('#modal').hidden) return;
  const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea') return;
  const q = MQ.qs[MQ.i]; if (!q) return;
  if (MQ.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= q.opts.length) ACT.mqPick({ dataset: { i: String(+e.key - 1) } });
  else if (MQ.sel != null && e.key === 'Enter') ACT.mqNext();
});
const mqWrap = (qs, a) => qs.map(q => { const opts = shuffle(q.opts); return Object.assign({}, q, { opts, a: opts.indexOf(q.opts[q.a]) }); });

/* ---- Particle Pop ---- */
const PARTICLES = [
  ['私＿学生です。', 'は', ['を', 'に', 'で'], 'I am a student.'], ['水＿飲みます。', 'を', ['に', 'で', 'の'], 'I drink water.'],
  ['毎朝七時＿起きます。', 'に', ['を', 'で', 'の'], 'I get up at seven every morning.'], ['図書館＿勉強します。', 'で', ['に', 'を', 'の'], 'I study at the library.'],
  ['友達＿会います。', 'に', ['で', 'の', 'から'], 'I meet a friend.'], ['バス＿行きます。', 'で', ['を', 'が', 'の'], 'I go by bus.'],
  ['これは私＿本です。', 'の', ['を', 'で', 'に'], 'This is my book.'], ['友達＿映画を見ます。', 'と', ['を', 'の', 'から'], 'I watch a film with a friend.'],
  ['私＿すしが好きです。', 'も', ['を', 'に', 'で'], 'I like sushi too.'], ['東京＿京都まで電車で行きます。', 'から', ['を', 'の', 'が'], 'I go from Tokyo to Kyoto by train.'],
  ['九時＿五時まで働きます。', 'から', ['を', 'に', 'の'], 'I work from nine to five.'], ['ここ＿座ってください。', 'に', ['を', 'の', 'と'], 'Please sit here.'],
  ['これ＿いくらですか。', 'は', ['を', 'に', 'で'], 'How much is this?'], ['何＿食べますか。', 'を', ['に', 'の', 'で'], 'What will you eat?'],
  ['日本語＿勉強しています。', 'を', ['に', 'の', 'と'], 'I am studying Japanese.'], ['犬＿います。', 'が', ['を', 'の', 'で'], 'There is a dog.'],
  ['机の上＿本があります。', 'に', ['を', 'で', 'の'], 'There is a book on the desk.'], ['私＿母は先生です。', 'の', ['を', 'で', 'に'], 'My mother is a teacher.'],
  ['電車＿降ります。', 'を', ['に', 'で', 'の'], 'I get off the train.'], ['公園＿散歩します。', 'を', ['に', 'の', 'と'], 'I take a walk in the park.'],
  ['先生＿質問します。', 'に', ['を', 'で', 'の'], 'I ask the teacher a question.'], ['りんご＿三つください。', 'を', ['に', 'で', 'の'], 'Three apples, please.'],
  ['この本は先生＿もらいました。', 'に', ['を', 'の', 'で'], 'I received this book from my teacher.'], ['アメリカ＿来ました。', 'から', ['を', 'の', 'で'], 'I came from America.'],
  ['ペン＿書きます。', 'で', ['に', 'の', 'と'], 'I write with a pen.'], ['はし＿食べます。', 'で', ['に', 'の', 'と'], 'I eat with chopsticks.'],
  ['宿題＿終わりました。', 'が', ['を', 'に', 'で'], 'The homework is finished.'], ['お茶＿ください。', 'を', ['に', 'の', 'で'], 'Tea, please.'],
  ['ここ＿写真を撮ってもいいですか。', 'で', ['に', 'の', 'と'], 'May I take a photo here?'], ['何時＿寝ますか。', 'に', ['を', 'の', 'で'], 'What time do you go to bed?']
];
const partQ = p => ({ prompt: `<p class="qen muted ctr">${esc(p[3])}</p><div class="qjp glyph">${esc(p[0]).replace('＿', '<span class="blank">　</span>')}</div>`, opts: [p[1]].concat(p[2]), a: 0, glyph: 1, sec: 'Particles', review: esc(p[0].replace('＿', p[1])) + ' · ' + esc(p[3]), note: p[0].replace('＿', p[1]) });
G.particle = () => mqStart({ key: 'particle', xpPer: 3, qs: mqWrap(sample(PARTICLES, 10).map(partQ)) });

/* ---- Sound Match ---- */
G.sound = st => {
  const voice = hasJaVoice(), pool = KANA.filter(i => i.group === 'basic' && (UI.game.deck === 'hk' || i.type === UI.game.deck));
  const picks = sample(pool, 10), qs = picks.map(it => {
    const dis = sample(pool.filter(x => x.ch !== it.ch && x.ro !== it.ro), 3);
    return { id: it.id, say: it.ch, glyph: 1, sec: 'Sound', opts: [it.ch].concat(dis.map(d => d.ch)), a: 0, review: `<span class="glyph">${esc(it.ch)}</span> ${esc(it.ro)}`,
      prompt: voice ? `<p class="muted ctr">Listen, then pick the kana you heard.</p><div class="row ctr"><button class="btn lg" data-act="mqSay">${SPEAK_SVG} Play again</button></div>` : `<p class="muted ctr">No Japanese voice found on this device, so here is the sound in letters instead.</p><div class="gbig">${esc(it.ro)}</div>` };
  });
  mqStart({ key: 'sound', xpPer: 3, qs: mqWrap(qs) });
};

/* ---- Number Dash ---- */
const numKanji = n => { const d = '〇一二三四五六七八九'; if (n === 0) return '〇'; const th = Math.floor(n / 1000), h = Math.floor(n / 100) % 10, t = Math.floor(n / 10) % 10, o = n % 10; let s = ''; if (th) s += (th > 1 ? d[th] : '') + '千'; if (h) s += (h > 1 ? d[h] : '') + '百'; if (t) s += (t > 1 ? d[t] : '') + '十'; if (o) s += d[o]; return s; };
const ND = { range: 99, mode: 'read' };
G.number = st => {
  const setup = () => {
    st.innerHTML = `<div class="card"><h2>Number Dash</h2><p class="muted">A number appears in Japanese. Type it in digits before the 60 seconds run out. Each answer adds time to your score.</p>
      <p class="lab">Range</p><div class="chips">${[[20, '1 to 20'], [99, '1 to 99'], [999, 'up to 999'], [9999, 'up to 9999']].map(r => `<button class="chip${ND.range === r[0] ? ' on' : ''}" data-act="ndSet" data-k="range" data-v="${r[0]}" aria-pressed="${ND.range === r[0]}">${r[1]}</button>`).join('')}</div>
      <p class="lab">How the number is given</p><div class="chips">${[['read', 'Kanji numerals'], ['listen', 'Spoken']].map(r => `<button class="chip${ND.mode === r[0] ? ' on' : ''}" data-act="ndSet" data-k="mode" data-v="${r[0]}" aria-pressed="${ND.mode === r[0]}">${r[1]}</button>`).join('')}</div>
      ${ND.mode === 'listen' && !hasJaVoice() ? '<p class="fb bad">No Japanese voice found on this device. Pick kanji numerals instead, or install a Japanese voice.</p>' : ''}
      <div class="row"><button class="btn lg" data-act="ndGo">Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
  };
  ACT.ndSet = el => { ND[el.dataset.k] = el.dataset.k === 'range' ? +el.dataset.v : el.dataset.v; setup(); };
  ACT.ndGo = () => run();
  const run = () => {
    let cur = 0, last = 0, score = 0, ok = 0, miss = 0, left = 60, timer = null; const missed = [];
    st.innerHTML = `<div class="ghud"><span>Time <b id="gt">60</b></span><span>Score <b id="gs">0</b></span><span>Right <b id="gc">0</b></span></div>
      <div class="gbig glyph" id="gg" aria-live="polite"></div><div class="row ctr" id="gsp"></div><p class="hint" id="gh">Type the number in digits, then press Enter</p>
      <input id="gin" class="gin" inputmode="numeric" autocomplete="off" aria-label="Number in digits"><div class="row ctr"><button class="btn ghost" id="gskip">Skip</button></div>`;
    const inp = $('#gin', st), gg = $('#gg', st);
    const next = () => { do { cur = 1 + rnd(ND.range); } while (cur === last && ND.range > 1); last = cur; inp.value = '';
      if (ND.mode === 'read') gg.textContent = numKanji(cur); else { gg.textContent = '♪'; $('#gsp', st).innerHTML = `<button class="btn" id="gsay">${SPEAK_SVG} Play again</button>`; $('#gsay', st).onclick = () => speak(String(cur)); speak(String(cur)); } };
    const hud = () => { $('#gt', st).textContent = left; $('#gs', st).textContent = score; $('#gc', st).textContent = ok; };
    const end = () => { clearInterval(timer); GAME = null; finishGame('number', score, [[ok, 'right'], [miss, 'missed'], [ND.range, 'top number']], [], Math.min(40, ok * 2)); };
    const submit = () => { const v = inp.value.trim().replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 65248)); if (!v) return;
      if (+v === cur) { ok++; score += 10 + (String(cur).length * 2); sfx.ok(); } else { miss++; sfx.no(); shakeEl(inp); $('#gh', st).textContent = 'That was ' + cur + ' (' + numKanji(cur) + ')'; setTimeout(() => { const h = $('#gh', st); if (h) h.textContent = ''; }, 1500); }
      hud(); next(); };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    $('#gskip', st).onclick = () => { miss++; next(); hud(); inp.focus(); };
    timer = setInterval(() => { left--; hud(); if (left <= 0) end(); }, 1000);
    GAME = { stop() { clearInterval(timer); } };
    next(); hud(); inp.focus();
  };
  setup();
};

/* ---- Shiritori ---- */
const kanaRows = (() => { const m = []; KANA.filter(i => i.type === 'h').forEach(i => accepted(i).forEach(r => m.push([r, i.ch]))); return m.sort((a, b) => b[0].length - a[0].length); })();
function fromRomaji(s) {
  s = String(s || '').toLowerCase().trim(); if (/^[ぁ-んー]+$/.test(s)) return s; if (/[^a-z' -]/.test(s)) return s;
  s = s.replace(/[\s-]/g, ''); let out = '', i = 0;
  while (i < s.length) {
    if (s[i] === "'") { i++; continue; }
    if (s[i] === 'n' && (i + 1 >= s.length || (!/[aiueoy]/.test(s[i + 1]) && s[i + 1] !== 'n') || s[i + 1] === "'")) { out += 'ん'; i++; continue; }
    if (s[i] === 'n' && s[i + 1] === 'n' && !/[aiueoy]/.test(s[i + 2] || '')) { out += 'ん'; i += 2; continue; }
    if (s[i] === s[i + 1] && /[kstpcghbdfjmrwyz]/.test(s[i])) { out += 'っ'; i++; continue; }
    const hit = kanaRows.find(r => s.startsWith(r[0], i)); if (!hit) return s; out += hit[1]; i += hit[0].length;
  }
  return out;
}
const SMALL = { 'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ', 'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お' };
const LONG_V = { あ: 'あ', い: 'い', う: 'う', え: 'え', お: 'お' };
const lastKana = w => { let c = w.replace(/ー+$/, '').slice(-1); if (SMALL[c]) c = SMALL[c]; return c; };
let SHI_WORDS = null;
const shiWords = () => { if (!SHI_WORDS) { const seen = new Set(); SHI_WORDS = []; VOCAB.forEach(v => { if (/^[ぁ-ゖ]{2,}$/.test(v.rd) && !seen.has(v.rd)) { seen.add(v.rd); SHI_WORDS.push({ rd: v.rd, ch: v.ch, mean: v.mean }); } }); } return SHI_WORDS; };
G.shiritori = st => {
  const words = shiWords(), byRd = {}; words.forEach(w => { byRd[w.rd] = w; });
  const used = new Set(), chain = []; let score = 0, need = '', over = false;
  const pickAI = () => { const c = words.filter(w => !used.has(w.rd) && (!need || w.rd[0] === need) && lastKana(w.rd) !== 'ん'); return c.length ? c[rnd(c.length)] : null; };
  const first = pickAI(); used.add(first.rd); chain.push({ who: 'cpu', w: first }); need = lastKana(first.rd);
  const paint = msg => {
    st.innerHTML = `<div class="ghud"><span>Chain <b>${chain.length}</b></span><span>Score <b>${score}</b></span><span>Next starts with <b class="glyph">${esc(need)}</b></span></div>
      <div class="card"><p class="muted">Say a word that starts with the last sound of the previous word. Do not end a word with ん, and do not repeat words. Type in kana or romaji. I only know the words from this app, so I may not know every word you do.</p>
      <ol class="shichain">${chain.slice(-6).map(c => `<li class="${c.who}"><span class="who">${c.who === 'cpu' ? 'Me' : 'You'}</span><span class="glyph">${esc(c.w.rd)}</span><span class="muted small">${esc(c.w.ch !== c.w.rd ? c.w.ch + ' · ' : '')}${esc(c.w.mean || '')}</span></li>`).join('')}</ol></div>
      <p class="hint" id="gh">${esc(msg || '')}</p><input id="gin" class="gin" ${INPUT_ATTR} aria-label="Your word in kana or romaji" placeholder="Your word">
      <div class="row ctr"><button class="btn" id="gok">Say it</button><button class="btn ghost" id="ghint">Hint</button><button class="btn ghost" id="gend">I give up</button></div>`;
    const inp = $('#gin', st); inp.focus();
    const submit = () => {
      const raw = inp.value.trim(); if (!raw) return; const w = fromRomaji(raw);
      const bad = m => { sfx.no(); shakeEl(inp); $('#gh', st).textContent = m; };
      if (!/^[ぁ-ゖー]+$/.test(w)) return bad('Please use kana or romaji.');
      if (need && w[0] !== need) return bad('It must start with ' + need + '.');
      if (used.has(w)) return bad('That word was already used.');
      if (lastKana(w) === 'ん' || w.slice(-1) === 'ん') { used.add(w); chain.push({ who: 'me', w: { rd: w, ch: w, mean: 'ends with ん' } }); return finish('Your word ends with ん, so the chain ends.'); }
      if (!byRd[w]) return bad('I do not know that word yet. Try another one.');
      used.add(w); chain.push({ who: 'me', w: byRd[w] }); score += 10 + w.length; sfx.ok(); flagWord(byRd[w]);
      need = lastKana(w); const ai = pickAI();
      if (!ai) { score += 30; return finish('I have no word left. You win!'); }
      used.add(ai.rd); chain.push({ who: 'cpu', w: ai }); need = lastKana(ai.rd); paint('Good one.');
    };
    $('#gok', st).onclick = submit; inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    $('#ghint', st).onclick = () => { const c = words.filter(x => !used.has(x.rd) && x.rd[0] === need && lastKana(x.rd) !== 'ん'); $('#gh', st).textContent = c.length ? 'Try: ' + c[rnd(c.length)].rd[0] + '… (' + c[rnd(c.length)].mean + ')' : 'No hint available.'; score = Math.max(0, score - 3); };
    $('#gend', st).onclick = () => finish('Chain ended.');
  };
  const flagWord = w => { const v = VOCAB.find(x => x.rd === w.rd); if (v) touch(v.id, true); };
  const finish = why => { over = true; finishGame('shiritori', score, [[chain.filter(c => c.who === 'me').length, 'your words'], [chain.length, 'chain length']], [], Math.min(40, Math.round(score / 3))); const c = $('.card.done', st); if (c) { const p = document.createElement('p'); p.className = 'muted'; p.textContent = why; c.insertBefore(p, c.querySelector('.stats3')); } };
  paint('I start: ' + first.rd);
};

/* ---- JLPT Mock Test ---- */
const MK = { lv: 'n4' };
G.mock = st => {
  st.innerHTML = `<div class="card"><h2>JLPT Mock Test</h2><p class="muted">Twenty mixed questions in the style of the exam: kanji readings, vocabulary, grammar and particles. Aim for 60% or more. This is practice, not an official score.</p>
    <p class="lab">Level</p><div class="chips">${[['n5', 'N5'], ['n4', 'N4']].map(l => `<button class="chip${MK.lv === l[0] ? ' on' : ''}" data-act="mkSet" data-v="${l[0]}" aria-pressed="${MK.lv === l[0]}">${l[1]}</button>`).join('')}</div>
    <div class="row"><button class="btn lg" data-act="mkGo">Start the test</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
};
ACT.mkSet = el => { MK.lv = el.dataset.v; G.mock($('#gstage')); };
ACT.mkGo = () => {
  const lv = MK.lv, qs = [];
  const kj = KANJI.filter(k => k.jlpt === lv && k.kun.length + k.on.length > 0 && k.ex[0]), vv = VOCAB.filter(v => v.jlpt === lv);
  const kanaOf = s => s;
  sample(kj, 6).forEach(k => { const e = k.ex[0], others = sample(kj.filter(x => x !== k && x.ex[0] && x.ex[0].r !== e.r), 3).map(x => x.ex[0].r);
    qs.push({ id: k.id, sec: 'Kanji', glyph: 1, opts: [e.r].concat(others), a: 0, prompt: `<p class="muted ctr">How do you read this word?</p><div class="qjp glyph">${esc(e.w)}</div>`, review: `<span class="glyph">${esc(e.w)}</span> ${esc(e.r)} · ${esc(e.m)}` }); });
  sample(vv, 6).forEach(v => { const others = sample(vv.filter(x => x !== v), 3).map(x => x.mean);
    qs.push({ id: v.id, sec: 'Vocabulary', opts: [v.mean].concat(others), a: 0, prompt: `<p class="muted ctr">What does this word mean?</p><div class="qjp glyph">${esc(v.ch)}</div><p class="muted ctr">${esc(v.rd)}</p>`, review: `<span class="glyph">${esc(v.ch)}</span> ${esc(v.mean)}` }); });
  const gq = []; LESSONS.filter(l => l.lv === lv).forEach(l => l.quiz.forEach(q => gq.push({ l, q })));
  sample(gq, 4).forEach(x => qs.push({ sec: 'Grammar', opts: x.q.o.slice(), a: x.q.a, prompt: `<p class="muted ctr">${esc(x.l.title)}</p><div class="qjp">${esc(x.q.q)}</div>`, review: esc(x.q.q) + ' → ' + esc(x.q.o[x.q.a]) }));
  sample(PARTICLES, 4).map(partQ).forEach(q => { q.sec = 'Particles'; qs.push(q); });
  const fin = shuffle(qs.filter(q => q.opts.length >= 2));
  mqStart({ key: 'mock', xpPer: 3, qs: mqWrap(fin),
    stats: m => [[pct(m.right, m.qs.length) + '%', m.right / m.qs.length >= 0.6 ? 'pass' : 'not yet'], [m.right + '/' + m.qs.length, 'right'], [Object.keys(m.secs).map(k => k[0] + ':' + m.secs[k][0] + '/' + m.secs[k][1]).join(' ') || '-', 'by section']],
    onDone: m => { flag('mock'); } });
};
