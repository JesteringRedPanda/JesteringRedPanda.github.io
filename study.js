/* ============ STUDY ============ */
let SESS = null, QZ = null, LQ = null;

function viewStudy() {
  return `<section class="page"><header class="ph"><p class="eyebrow">勉強 · Study</p><h1>Daily practice</h1>
    <p class="sub">Flashcards bring items back just before you would forget them. Quizzes and lessons fill the gaps.</p></header>
    ${tabBar([['cards', 'Flashcards'], ['quiz', 'Quiz'], ['lessons', 'Lessons']], UI.study, 'study')}
    <div id="studybody">${UI.study === 'cards' ? (SESS ? sessHTML() : cardSetup()) : UI.study === 'quiz' ? (QZ ? quizHTML() : quizSetup()) : lessonsHTML()}</div></section>`;
}

/* ---------- flashcards ---------- */
function cardSetup() {
  const c = UI.cfg, due = dueList(c.deck).length, nw = newList(c.deck).length;
  return `<div class="card setup"><h2>Flashcard session</h2>
    <p class="lab">Deck</p>${chipRow([['all', 'Everything']].concat(DECK_ORDER.map(k => [k, DECKS[k].label])), c.deck, 'cfg.deck')}
    <p class="lab">JLPT level</p>${chipRow(LV_CHIPS, UI.lv, 'lv')}
    <p class="lab">What to study</p>${chipRow([['mix', 'Due, then new'], ['due', 'Only due'], ['new', 'Only new']], c.mode, 'cfg.mode')}
    <p class="lab">Cards in this session</p>${chipRow([[5, '5'], [10, '10'], [20, '20'], [40, '40']], c.size, 'cfg.size')}
    <p class="lab">Direction</p>${chipRow([['mixed', 'Mixed'], ['fwd', 'Character to meaning'], ['rev', 'Meaning to character']], c.dir, 'cfg.dir')}
    <p class="muted">In this deck: <b>${due}</b> due for review, <b>${nw}</b> new.</p>
    <button class="btn lg" data-act="startCards">Start session</button></div>`;
}
function newCardState() {
  const id = SESS.q[SESS.i], c = UI.cfg;
  SESS.reveal = peek(id).s === 0;
  SESS.dir = c.dir === 'mixed' ? (Math.random() < 0.5 ? 'fwd' : 'rev') : c.dir;
}
function backHTML(it, dir) {
  const g = dir === 'rev' ? `<div class="big ${isKana(it) || it.type === 'j' ? 'glyph' : 'txt'}">${esc(it.ch)}</div>` : '';
  let d;
  if (isKana(it)) d = `<p class="rom">${esc(it.ro)}</p><p class="muted">${it.type === 'h' ? 'Katakana' : 'Hiragana'}: <span class="glyph">${esc(it.type === 'h' ? toKata(it.ch) : toHira(it.ch))}</span></p>`;
  else if (it.type === 'j') d = `<p class="rom">${esc(it.mean)}</p><p class="rd">${esc(kanjiRead(it))}</p><p class="muted">${esc(it.ex[0].w)} ${esc(it.ex[0].r)} · ${esc(it.ex[0].m)}</p>`;
  else d = `<p class="rom">${esc(it.mean)}</p><p class="rd">${esc(it.rd)}</p><p class="muted">${esc(it.ro)}</p>`;
  return g + d;
}
function nextHint(id, g) {
  const x = peek(id);
  if (g === 0) return '10 min';
  const b = g === 1 ? Math.max(1, x.b) : Math.min(5, x.b + (g === 3 ? 2 : 1));
  const d = g === 1 ? Math.max(1 / 24, GAP[b] * 0.5) : GAP[b];
  return d < 1 ? '1 h' : (d < 2 ? Math.round(d * 10) / 10 : Math.round(d)) + (d <= 1 ? ' day' : ' days');
}
function sessHTML() {
  if (SESS.done) {
    const gain = today().xp - SESS.xp0, acc = pct(SESS.good, SESS.graded);
    return `<div class="card done"><p class="eyebrow">Session complete</p><h2>Nice work</h2>
      <div class="stats3"><div><b>${SESS.graded}</b><span>cards rated</span></div><div><b>${acc}%</b><span>remembered</span></div><div><b>+${gain}</b><span>XP</span></div></div>
      ${SESS.newCount ? `<p class="muted">${SESS.newCount} new item${SESS.newCount > 1 ? 's' : ''} added to your reviews.</p>` : ''}
      <div class="row"><button class="btn" data-act="startCards">Another session</button><button class="btn ghost" data-act="endSess">Back to setup</button></div></div>`;
  }
  const id = SESS.q[SESS.i], it = ITEMS[id], dir = SESS.dir, isNew = peek(id).s === 0;
  const frontBig = isKana(it) || it.type === 'j' ? `<div class="big glyph">${esc(it.ch)}</div>` : `<div class="big txt">${esc(it.ch)}</div>`;
  const front = dir === 'fwd' ? frontBig + `<p class="muted">${isKana(it) ? 'How is it read?' : 'What does it mean?'}</p>`
    : `<p class="rom">${esc(answerOf(it))}</p><p class="muted">${isKana(it) ? 'Which character is this?' : 'How is it written?'}</p>`;
  return `<div class="sess"><div class="sbar"><div class="prog"><i style="width:${(SESS.i / SESS.q.length * 100).toFixed(1)}%"></i></div><span>${SESS.i + 1} / ${SESS.q.length}</span><button class="link" data-act="endSess">End session</button></div>
    <div class="flash" style="--c:var(${colorOf(it)})">
      <p class="eyebrow"><span class="dotc"></span>${codeOf(it)} · ${TYPE_NAME[it.type]}${isNew ? ' · New' : ''}</p>
      ${front}
      ${SESS.reveal ? `<hr>${backHTML(it, dir)}<button class="ibtn sp" data-act="say" data-id="${esc(id)}" aria-label="Listen">${SPEAK_SVG}</button>` : `<button class="btn lg" data-act="flip">Show answer <kbd>Space</kbd></button>`}
    </div>
    ${SESS.reveal ? `<p class="muted ctr">${isNew ? 'New item. Study it, then rate it.' : 'How well did you remember it?'}</p><div class="grades">
      ${[['Again', 0], ['Hard', 1], ['Good', 2], ['Easy', 3]].map(g => `<button class="gbtn g${g[1]}" data-act="grade" data-g="${g[1]}"><b>${g[0]}</b><span>${nextHint(id, g[1])}</span><kbd>${g[1] + 1}</kbd></button>`).join('')}</div>` : ''}</div>`;
}
ACT.startCards = () => {
  const c = UI.cfg, due = dueList(c.deck), nw = newList(c.deck);
  let q = c.mode === 'due' ? due : c.mode === 'new' ? nw : due.concat(nw);
  q = q.slice(0, +c.size);
  if (!q.length) { toast(c.mode === 'due' ? 'Nothing is due in this deck yet' : 'Nothing to study with these settings'); return; }
  SESS = { q: q.map(i => i.id), i: 0, reveal: false, dir: 'fwd', graded: 0, good: 0, newCount: 0, xp0: today().xp, done: false };
  newCardState(); render();
};
ACT.flip = () => { if (SESS && !SESS.reveal) { SESS.reveal = true; render(); } };
ACT.grade = el => {
  if (!SESS || !SESS.reveal || SESS.done) return;
  const g = +el.dataset.g, id = SESS.q[SESS.i];
  const wasNew = grade(id, g);
  SESS.graded++; if (g > 0) SESS.good++; if (wasNew) SESS.newCount++;
  g === 0 ? sfx.no() : sfx.ok();
  if (g === 0) SESS.q.splice(Math.min(SESS.q.length, SESS.i + 4), 0, id);
  SESS.i++;
  if (SESS.i >= SESS.q.length) { SESS.done = true; sfx.win(); } else newCardState();
  render();
};
ACT.endSess = () => { SESS = null; render(); };

/* ---------- quiz ---------- */
const QDECKS = [['hira', 'Hiragana'], ['kata', 'Katakana'], ['kana', 'Both kana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary'], ['phrase', 'Phrases']];
const quizPool = deck => (deck === 'kana' ? KANA : DECKS[deck].items).filter(lvOk);
function quizSetup() {
  const q = UI.quiz, canRead = q.deck === 'kanji' || q.deck === 'vocab';
  return `<div class="card setup"><h2>Multiple-choice quiz</h2>
    <p class="lab">Topic</p>${chipRow(QDECKS, q.deck, 'quiz.deck')}
    <p class="lab">Question style</p>${chipRow([['mixed', 'Mixed'], ['fwd', 'See it, pick the answer'], ['rev', 'See the answer, pick it']].concat(canRead ? [['read', 'Readings']] : []), (q.dir === 'read' && !canRead) ? 'mixed' : q.dir, 'quiz.dir')}
    <p class="lab">Questions</p>${chipRow([[10, '10'], [20, '20'], [30, '30']], q.size, 'quiz.size')}
    <p class="muted">Questions favour items you have not mastered yet. Correct answers earn 1 XP each, plus 5 for a perfect score.</p>
    <button class="btn lg" data-act="startQuiz">Start quiz</button></div>`;
}
function readingsOf(it) { return it.type === 'j' ? it.on.concat(it.kun) : [it.rd]; }
function buildQuestion(it, pool, dir) {
  const kana = isKana(it);
  if (dir === 'read' && !(it.type === 'j' || (it.type === 'v' && it.rd !== it.ch))) dir = Math.random() < 0.5 ? 'fwd' : 'rev';
  let correct, label, cands, show, ask;
  if (dir === 'fwd') { correct = answerOf(it); cands = pool.map(answerOf); ask = kana ? 'How is this read?' : 'What does this mean?'; show = it.ch; }
  else if (dir === 'rev') { correct = it.ch; cands = pool.map(o => o.ch); ask = kana ? 'Which character is “' + it.ro + '”?' : 'Which one means “' + it.mean + '”?'; show = null; }
  else {
    const mine = readingsOf(it); correct = mine[rnd(mine.length)];
    cands = pool.filter(o => o.type === it.type && o.id !== it.id).reduce((a, o) => a.concat(readingsOf(o)), []).filter(r => mine.indexOf(r) < 0);
    ask = 'Which is a reading of this?'; show = it.ch;
  }
  const same = it.cat ? pool.filter(o => o.cat === it.cat).map(dir === 'rev' ? (o => o.ch) : answerOf) : [];
  let c = shuffle(Array.from(new Set((dir === 'read' ? cands : same.concat(cands)).filter(t => t && t !== correct))));
  if (dir !== 'read') c = shuffle(Array.from(new Set(cands.filter(t => t && t !== correct)))).slice(0, 12);
  const near = dir !== 'read' && same.length ? shuffle(same.filter(t => t !== correct)).slice(0, 2) : [];
  let wrong = Array.from(new Set(near.concat(c))).slice(0, 3);
  const opts = shuffle(wrong.concat([correct])).map(t => ({ t, ok: t === correct }));
  return { id: it.id, dir, show, ask, opts, glyphOpts: dir === 'rev' && (kana || it.type === 'j'), showKind: (kana || it.type === 'j') ? 'glyph' : 'txt' };
}
ACT.startQuiz = () => {
  const q = UI.quiz, pool = quizPool(q.deck), size = Math.min(+q.size, pool.length);
  const weak = shuffle(pool.filter(i => lvl(i.id) < 3)), strong = shuffle(pool.filter(i => lvl(i.id) >= 3));
  const ns = Math.min(strong.length, Math.floor(size * 0.25));
  let picked = weak.slice(0, size - ns).concat(strong.slice(0, ns));
  if (picked.length < size) picked = picked.concat(shuffle(pool.filter(i => picked.indexOf(i) < 0)).slice(0, size - picked.length));
  const canRead = q.deck === 'kanji' || q.deck === 'vocab';
  const dirs = q.dir === 'read' && !canRead ? 'mixed' : q.dir;
  QZ = { qs: shuffle(picked).map(it => buildQuestion(it, pool, dirs === 'mixed' ? (Math.random() < 0.5 ? 'fwd' : 'rev') : dirs)), i: 0, sel: null, score: 0, missed: [], xp0: today().xp, done: false };
  render();
};
function quizHTML() {
  if (QZ.done) {
    const n = QZ.qs.length, gain = today().xp - QZ.xp0, perfect = QZ.score === n;
    return `<div class="card done"><p class="eyebrow">${perfect ? 'Perfect score' : 'Quiz complete'}</p><h2>${QZ.score} / ${n}</h2>
      <div class="stats3"><div><b>${pct(QZ.score, n)}%</b><span>correct</span></div><div><b>${QZ.missed.length}</b><span>to review</span></div><div><b>+${gain}</b><span>XP</span></div></div>
      ${QZ.missed.length ? `<h4>Review these</h4><ul class="exl">${QZ.missed.map(id => { const it = ITEMS[id]; return `<li><button class="link" data-act="detail" data-id="${esc(id)}"><b class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</b></button> <i>${esc(answerOf(it))}${it.type === 'j' ? ' · ' + esc(kanjiRead(it)) : ''}</i></li>`; }).join('')}</ul>` : ''}
      <div class="row"><button class="btn" data-act="startQuiz">Quiz again</button><button class="btn ghost" data-act="endQuiz">Back to setup</button></div></div>`;
  }
  const q = QZ.qs[QZ.i], done = QZ.sel != null;
  return `<div class="sess"><div class="sbar"><div class="prog"><i style="width:${(QZ.i / QZ.qs.length * 100).toFixed(1)}%"></i></div><span>${QZ.i + 1} / ${QZ.qs.length}</span><button class="link" data-act="endQuiz">End quiz</button></div>
    <div class="flash" style="--c:var(${colorOf(ITEMS[q.id])})">
      ${q.show ? `<div class="big ${q.showKind}">${esc(q.show)}</div>` : ''}<p class="${q.show ? 'muted' : 'rom'}">${esc(q.ask)}</p></div>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${done ? (o.ok ? ' ok' : (QZ.sel === i ? ' bad' : ' off')) : ''}" data-act="qans" data-i="${i}" ${done ? 'disabled' : ''}><kbd>${i + 1}</kbd><span class="${q.glyphOpts ? 'glyph gl' : ''}">${esc(o.t)}</span></button>`).join('')}</div>
    ${done ? `<div class="fb ${q.opts[QZ.sel].ok ? 'ok' : 'bad'}"><b>${q.opts[QZ.sel].ok ? 'Correct' : 'Not quite'}</b> ${q.opts[QZ.sel].ok ? '' : 'The answer is ' + esc(q.opts.find(o => o.ok).t) + '.'}
      <button class="btn" data-act="qnext">${QZ.i + 1 >= QZ.qs.length ? 'See results' : 'Next'} <kbd>Enter</kbd></button></div>` : ''}</div>`;
}
ACT.qans = el => {
  if (!QZ || QZ.sel != null || QZ.done) return;
  const k = +el.dataset.i, q = QZ.qs[QZ.i]; QZ.sel = k;
  const ok = q.opts[k].ok; touch(q.id, ok);
  if (ok) { QZ.score++; addXP(1); sfx.ok(); } else { QZ.missed.push(q.id); sfx.no(); }
  render();
};
ACT.qnext = () => {
  if (!QZ || QZ.sel == null) return;
  QZ.sel = null; QZ.i++;
  if (QZ.i >= QZ.qs.length) {
    QZ.done = true;
    if (QZ.score === QZ.qs.length) { S.perfect++; addXP(5); sfx.win(); } checkAch(); save();
  }
  render();
};
ACT.endQuiz = () => { QZ = null; render(); };

/* ---------- lessons ---------- */
function lessonsHTML() {
  if (UI.lesson) return lessonView(LESSONS.find(l => l.id === UI.lesson));
  const list = LESSONS.filter(l => UI.lv === 'all' || l.lv === UI.lv), done = LESSONS.filter(l => S.lessons[l.id]).length;
  const card = l => `<button class="lcard${S.lessons[l.id] ? ' done' : ''}" data-act="openLesson" data-id="${l.id}"><span class="ljp">${l.jp}</span><span class="lt">${esc(l.title)}</span><span class="ls">${S.lessons[l.id] ? 'Completed' : 'Lesson ' + (LESSONS.indexOf(l) + 1)}</span></button>`;
  return `<p class="muted">${done} of ${LESSONS.length} lessons complete. Answer every question at the end of a lesson to finish it and earn 10 XP.</p>${chipRow(LV_CHIPS, UI.lv, 'lv')}
    ${['n5', 'n4'].map(L => list.some(l => l.lv === L) ? `<div class="sech"><h2>JLPT ${L.toUpperCase()}</h2></div><div class="lessons">${list.filter(l => l.lv === L).map(card).join('')}</div>` : '').join('')}`;
}
function lessonView(l) {
  if (!LQ || LQ.id !== l.id) LQ = { id: l.id, a: l.quiz.map(() => null) };
  const all = LQ.a.every(a => a != null), right = LQ.a.every((a, i) => a === l.quiz[i].a);
  return `<div class="lesson"><button class="link" data-act="closeLesson">‹ All lessons</button>
    <p class="eyebrow">${l.jp}</p><h2>${esc(l.title)}</h2><div class="prose">${l.body}</div>
    <h4>Examples</h4><ul class="exl ex2">${l.ex.map(e => `<li><span class="jp">${esc(e[0])}</span><span class="r">${esc(e[1])}</span><i>${esc(e[2])}</i><button class="ibtn" data-act="sayText" data-t="${esc(e[0])}" aria-label="Listen">${SPEAK_SVG}</button></li>`).join('')}</ul>
    <h4>Check yourself</h4>${l.quiz.map((q, qi) => `<div class="lq"><p><b>${qi + 1}.</b> ${esc(q.q)}</p><div class="opts">${q.o.map((o, oi) => {
      const a = LQ.a[qi], st = a == null ? '' : (oi === q.a ? ' ok' : (a === oi ? ' bad' : ' off'));
      return `<button class="opt${st}" data-act="lans" data-q="${qi}" data-i="${oi}" ${a != null ? 'disabled' : ''}><span>${esc(o)}</span></button>`;
    }).join('')}</div></div>`).join('')}
    ${all ? `<div class="fb ${right ? 'ok' : 'bad'}"><b>${right ? (S.lessons[l.id] ? 'Lesson complete' : 'Lesson complete, +10 XP') : 'Almost'}</b> ${right ? '' : 'Review the examples and try again.'}
      ${right ? '' : '<button class="btn" data-act="lretry">Try again</button>'}</div>` : ''}</div>`;
}
ACT.openLesson = el => { UI.lesson = el.dataset.id; LQ = null; render(); window.scrollTo(0, 0); };
ACT.closeLesson = () => { UI.lesson = null; LQ = null; render(); };
ACT.sayText = el => speak(el.dataset.t);
ACT.lans = el => {
  const l = LESSONS.find(x => x.id === UI.lesson); if (!l || !LQ) return;
  const qi = +el.dataset.q, oi = +el.dataset.i; if (LQ.a[qi] != null) return;
  LQ.a[qi] = oi; l.quiz[qi].a === oi ? sfx.ok() : sfx.no();
  if (LQ.a.every(a => a != null) && LQ.a.every((a, i) => a === l.quiz[i].a) && !S.lessons[l.id]) { S.lessons[l.id] = Date.now(); addXP(10); sfx.win(); }
  render();
};
ACT.lretry = () => { LQ = null; render(); };
