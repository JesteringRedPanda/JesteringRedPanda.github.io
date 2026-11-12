/* ============ ANIME QUOTES + GUESS THE SONG ============
   Built-in items are short, famous catchphrases and plain song facts (artist, title).
   Admins can add more from the site (Profile > Admin). No lyrics and no audio are stored here;
   songs play from a YouTube link that an admin adds.                                         */
const QUOTES_BUILTIN = [
  ['お前はもう死んでいる', 'Omae wa mō shindeiru', 'You are already dead', 'Fist of the North Star', 'Kenshiro'],
  ['俺は海賊王になる！', 'Ore wa kaizoku-ō ni naru!', 'I am going to become the Pirate King!', 'One Piece', 'Monkey D. Luffy'],
  ['だってばよ', 'Datte bayo', 'You know? (his verbal tic)', 'Naruto', 'Naruto Uzumaki'],
  ['俺は火影になる！', 'Ore wa Hokage ni naru!', 'I am going to become Hokage!', 'Naruto', 'Naruto Uzumaki'],
  ['真実はいつもひとつ！', 'Shinjitsu wa itsumo hitotsu!', 'There is always only one truth!', 'Detective Conan', 'Conan Edogawa'],
  ['月に代わっておしおきよ！', 'Tsuki ni kawatte oshioki yo!', 'On behalf of the Moon, I will punish you!', 'Sailor Moon', 'Sailor Moon'],
  ['駆逐してやる！', 'Kuchiku shite yaru!', 'I will wipe them out!', 'Attack on Titan', 'Eren Yeager'],
  ['心臓を捧げよ！', 'Shinzō o sasageyo!', 'Dedicate your hearts!', 'Attack on Titan', 'Erwin Smith'],
  ['逃げちゃダメだ', 'Nigecha dame da', 'I mustn’t run away', 'Neon Genesis Evangelion', 'Shinji Ikari'],
  ['あんたバカぁ？', 'Anta baka ā?', 'Are you stupid?', 'Neon Genesis Evangelion', 'Asuka Langley Soryu'],
  ['僕と契約して、魔法少女になってよ！', 'Boku to keiyaku shite, mahō shōjo ni natte yo!', 'Make a contract with me and become a magical girl!', 'Puella Magi Madoka Magica', 'Kyubey'],
  ['じっちゃんの名にかけて！', 'Jicchan no na ni kakete!', 'On my grandfather’s name!', 'The Kindaichi Case Files', 'Hajime Kindaichi'],
  ['我が名はめぐみん！', 'Waga na wa Megumin!', 'My name is Megumin!', 'KonoSuba', 'Megumin'],
  ['エル・プサイ・コングルゥ', 'Eru Pusai Kongurū', 'El Psy Kongroo', 'Steins;Gate', 'Rintarō Okabe'],
  ['これがシュタインズ・ゲートの選択だ！', 'Kore ga Shutainzu Gēto no sentaku da!', 'This is the choice of Steins Gate!', 'Steins;Gate', 'Rintarō Okabe'],
  ['だが断る！', 'Daga kotowaru!', 'But I refuse!', 'JoJo’s Bizarre Adventure', 'Rohan Kishibe'],
  ['やれやれだぜ', 'Yare yare daze', 'Good grief', 'JoJo’s Bizarre Adventure', 'Jotaro Kujo'],
  ['オラオラオラ！', 'Ora ora ora!', '(a barrage battle cry)', 'JoJo’s Bizarre Adventure', 'Jotaro Kujo'],
  ['無駄無駄無駄', 'Muda muda muda', 'Useless, useless, useless!', 'JoJo’s Bizarre Adventure', 'Dio Brando'],
  ['あきらめたらそこで試合終了ですよ', 'Akirametara soko de shiai shūryō desu yo', 'If you give up, the game is over right there', 'Slam Dunk', 'Mitsuyoshi Anzai'],
  ['坊やだからさ', 'Bōya dakara sa', 'Because he is a greenhorn', 'Mobile Suit Gundam', 'Char Aznable'],
  ['領域展開', 'Ryōiki tenkai', 'Domain Expansion', 'Jujutsu Kaisen', 'Satoru Gojo'],
  ['全集中の呼吸', 'Zenshūchū no kokyū', 'Total Concentration Breathing', 'Demon Slayer', 'Tanjiro Kamado'],
  ['わくわく', 'Waku waku', 'Excited! (heh)', 'Spy x Family', 'Anya Forger'],
  ['私、気になります！', 'Watashi, ki ni narimasu!', 'I am curious!', 'Hyouka', 'Eru Chitanda'],
  ['私が来た！', 'Watashi ga kita!', 'I am here!', 'My Hero Academia', 'All Might'],
  ['どこでもドア！', 'Doko demo doa!', 'Anywhere Door!', 'Doraemon', 'Doraemon'],
  ['絶対だいじょうぶだよ', 'Zettai daijōbu da yo', 'It will definitely be okay', 'Cardcaptor Sakura', 'Sakura Kinomoto'],
  ['卍解', 'Bankai', 'Bankai (final release)', 'Bleach', 'Ichigo Kurosaki'],
  ['ジャン・ケン・グー', 'Jan ken gū', 'Rock-paper-scissors: rock!', 'Hunter x Hunter', 'Gon Freecss'],
  ['等価交換の原則', 'Tōka kōkan no gensoku', 'The principle of equivalent exchange', 'Fullmetal Alchemist', 'Edward Elric'],
  ['計画通り', 'Keikaku dōri', 'Just as planned', 'Death Note', 'Light Yagami'],
  ['おろ？', 'Oro?', 'Oro? (bewildered)', 'Rurouni Kenshin', 'Kenshin Himura'],
  ['かめはめ波！', 'Kamehameha!', 'Kamehameha!', 'Dragon Ball', 'Son Goku'],
  ['私の戦闘力は53万です', 'Watashi no sentōryoku wa gojūsan-man desu', 'My power level is 530,000', 'Dragon Ball Z', 'Frieza'],
  ['ペガサス流星拳！', 'Pegasasu ryūseiken!', 'Pegasus Meteor Fist!', 'Saint Seiya', 'Pegasus Seiya'],
  ['立て、立つんだジョー！', 'Tate, tatsu n da Jō!', 'Stand up, Joe!', 'Ashita no Joe', 'Danpei Tange'],
  ['ポケモンゲットだぜ！', 'Pokemon getto da ze!', 'Gotta catch it! (I got it!)', 'Pokémon', 'Ash Ketchum (Satoshi)']
].map((q, i) => ({ id: 'q:' + i, kind: 'quote', jp: q[0], ro: q[1], en: q[2], anime: q[3], char: q[4], b: 1 }));

/* artist | title | reading | YouTube id (only ones checked against search results) | hint */
const SONGS_BUILTIN = [
  ['米津玄師', 'Lemon', '', 'SX_ViT4Ra7k', 'Theme of a 2018 forensic drama'],
  ['Official髭男dism', 'Pretender', '', 'TQ8WlA2GXbk', 'A 2019 hit with a very high chorus'],
  ['LiSA', '紅蓮華', 'Gurenge', 'x1FV6IrjZCY', 'Opening of a famous demon-hunting anime'],
  ['King Gnu', '白日', 'Hakujitsu', 'ony539T074w', 'A 2019 rock hit'],
  ['RADWIMPS', '前前前世', 'Zenzenzense', 'PDSkFeMVNFs', 'From a 2016 body-swap film'],
  ['Creepy Nuts', 'Bling-Bang-Bang-Born', '', '5NzfqW_Yt6Y', 'Opening of a magic-and-muscles anime'],
  ['YOASOBI', 'アイドル', 'Idol', 'ZRtdQ81jPUQ', 'Opening of an idol-themed anime (2023)'],
  ['Eve', '廻廻奇譚', 'Kaikai Kitan', '1tk1pqwrOys', 'Opening of a cursed-spirit anime'],
  ['YOASOBI', '夜に駆ける', 'Yoru ni Kakeru', ''], ['Ado', 'うっせぇわ', 'Usseewa', ''], ['Ado', '新時代', 'Shinjidai', ''], ['Aimer', '残響散歌', 'Zankyō Sanka', ''],
  ['Vaundy', '怪獣の花唄', 'Kaijū no Hanauta', ''], ['藤井風', '死ぬのがいいわ', 'Shinu no ga ii wa', ''], ['宇多田ヒカル', 'First Love', '', ''], ['スピッツ', 'チェリー', 'Cherry', ''],
  ['Mr.Children', 'Tomorrow never knows', '', ''], ['サザンオールスターズ', 'TSUNAMI', '', ''], ['SMAP', '世界に一つだけの花', 'Sekai ni hitotsu dake no hana', ''], ['坂本九', '上を向いて歩こう', 'Ue o muite arukō', ''],
  ['竹内まりや', 'Plastic Love', '', ''], ['山下達郎', 'Christmas Eve', '', ''], ['Perfume', 'ポリリズム', 'Polyrhythm', ''], ['きゃりーぱみゅぱみゅ', 'PONPONPON', '', ''],
  ['BABYMETAL', 'ギミチョコ!!', 'Gimme Chocolate!!', ''], ['椎名林檎', '丸ノ内サディスティック', 'Marunouchi Sadistic', ''], ['ONE OK ROCK', 'The Beginning', '', ''], ['X JAPAN', '紅', 'Kurenai', ''],
  ['いきものがかり', 'ありがとう', 'Arigatō', ''], ['星野源', '恋', 'Koi', ''], ['Yuuri', 'ドライフラワー', 'Dry Flower', ''], ['ヨルシカ', 'ただ君に晴れ', 'Tada kimi ni hare', '']
].map((s, i) => ({ id: 's:' + i, kind: 'song', artist: s[0], title: s[1], ro: s[2] || '', yt: s[3] || '', hint: s[4] || '', b: 1 }));
const BUILTIN = QUOTES_BUILTIN.concat(SONGS_BUILTIN);

/* ---- content store: built-in + (shared cloud items | this browser's own items) ---- */
const CT = { remote: [], remoteCfg: {} };
const CT_KEY = 'nihon-content.v1';
const ctLocal = () => { try { const o = JSON.parse(localStorage.getItem(CT_KEY) || 'null'); return o && typeof o === 'object' ? { items: o.items || [], config: o.config || {} } : { items: [], config: {} }; } catch (e) { return { items: [], config: {} }; } };
const ctSaveLocal = o => { try { localStorage.setItem(CT_KEY, JSON.stringify(o)); } catch (e) {} };
const ctCfg = () => (fxOn() ? CT.remoteCfg : ctLocal().config) || {};
const ctExtra = () => (fxOn() ? CT.remote : ctLocal().items) || [];
const ctAll = kind => { const hid = new Set(ctCfg().hidden || []); return BUILTIN.filter(i => i.kind === kind && !hid.has(i.id)).concat(ctExtra().filter(i => i.kind === kind && i.active !== false)); };
const gameOff = key => (ctCfg().disabledGames || []).indexOf(key) >= 0;
async function fxContent() {
  if (!FX.impl) return;
  try { const c = await FX.impl.loadContent(); CT.remote = c.items || []; CT.remoteCfg = c.config || {}; } catch (e) { /* the built-in content still works */ }
  if (route() === 'games' || route() === 'today') render();
}
function ytId(u) {
  u = String(u || '').trim(); if (!u) return '';
  if (/^[\w-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/); return m ? m[1] : '';
}
const ytStart = u => { const m = String(u || '').match(/[?&#](?:t|start)=(\d+)/); return m ? +m[1] : null; };

/* ---- shared engine for "pick the right answer" rounds ---- */
let GQ = null;
const guessSpecs = {
  quote: {
    key: 'quote', title: 'Anime Quotes', f1: i => i.anime, f2: i => i.char, l1: 'Which anime is this from?', l2: 'Who says it?', unit: 'quotes', flagKey: 'quoteOk',
    blurb: 'A famous line appears in Japanese. Name the anime, or on Hard, the anime and the character. Romaji and English are hidden unless you switch them on.',
    clue: (it, g) => `<div class="qjp glyph">${esc(it.jp)}</div>${S.set.qRomaji ? `<p class="qro">${esc(it.ro || '')}</p>` : ''}${S.set.qEnglish ? `<p class="qen muted">“${esc(it.en || '')}”</p>` : ''}
      <div class="row ctr"><button class="chip${S.set.qRomaji ? ' on' : ''}" data-act="gqTog" data-k="qRomaji" aria-pressed="${!!S.set.qRomaji}">Romaji</button><button class="chip${S.set.qEnglish ? ' on' : ''}" data-act="gqTog" data-k="qEnglish" aria-pressed="${!!S.set.qEnglish}">English</button><button class="chip" data-act="gqSay">${SPEAK_SVG} Say it</button></div>`,
    playable: () => true
  },
  song: {
    key: 'song', title: 'Guess the Song', f1: i => i.artist, f2: i => i.title, l1: 'Who is the artist?', l2: 'What is the song called?', unit: 'songs', flagKey: 'songOk',
    blurb: 'A song plays from its YouTube video. Name the artist, or on Hard, the artist and the title. The video is hidden so you have to rely on your ears.',
    clue: (it, g) => {
      const id = ytId(it.yt), env = window.APP_ENV || {}, s = g.start;
      const frame = id && env.embed !== false ? `<div class="vwrap${g.showVideo ? ' show' : ''}"><iframe title="Song to guess" src="https://www.youtube-nocookie.com/embed/${id}?start=${s}&autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>${g.showVideo ? '' : '<div class="vcover"><span aria-hidden="true">♪</span><b>Listening…</b></div>'}</div>` : '';
      const link = id ? `<a class="btn ghost sm" href="https://www.youtube.com/watch?v=${id}&t=${s}s" target="_blank" rel="noopener">Open on YouTube</a>` : '';
      return `${frame}${!frame && id ? '<p class="muted ctr">Playing inside the page is not available here, so use the link and come back to answer.</p>' : ''}
        <div class="row ctr">${link}${frame ? `<button class="chip${g.showVideo ? ' on' : ''}" data-act="gqVideo" aria-pressed="${!!g.showVideo}">Show video</button>` : ''}${it.hint ? `<button class="chip${g.hint ? ' on' : ''}" data-act="gqHint">Hint</button>` : ''}</div>
        ${g.hint && it.hint ? `<p class="qen muted ctr">${esc(it.hint)}</p>` : ''}${frame ? '<p class="muted small ctr">If the video says it cannot play, the owner blocked embedding. Use “Open on YouTube”.</p>' : ''}`;
    },
    playable: i => !!ytId(i.yt)
  }
};
function guessStart(key) {
  const spec = guessSpecs[key], all = ctAll(key), pool = all.filter(spec.playable);
  GQ = { spec, all, pool, phase: 'setup', diff: (GQ && GQ.key === key && GQ.diff) || 'easy', n: 10, key };
  GAME = { stop() { GQ = null; } };
  gqPaint();
}
const GQ_N = [5, 10, 15];
function gqPaint() {
  const st = $('#gstage'); if (!st || !GQ) return; const g = GQ, spec = g.spec;
  if (g.phase === 'setup') {
    const distinct = new Set(g.all.map(spec.f1)).size;
    const unplayable = g.all.length - g.pool.length;
    st.innerHTML = `<div class="card"><h2>${spec.title}</h2><p class="muted">${spec.blurb}</p>
      <p class="lab">Difficulty</p><div class="chips">${[['easy', spec.key === 'quote' ? 'Easy · guess the anime' : 'Easy · guess the artist'], ['hard', spec.key === 'quote' ? 'Hard · anime and character' : 'Hard · artist and title']].map(d => `<button class="chip${g.diff === d[0] ? ' on' : ''}" data-act="gqSet" data-k="diff" data-v="${d[0]}" aria-pressed="${g.diff === d[0]}">${d[1]}</button>`).join('')}</div>
      <p class="lab">Rounds</p><div class="chips">${GQ_N.map(n => `<button class="chip${g.n === n ? ' on' : ''}" data-act="gqSet" data-k="n" data-v="${n}" aria-pressed="${g.n === n}">${n}</button>`).join('')}</div>
      <p class="muted small">${g.pool.length} ${spec.unit} ready to play${unplayable ? ` · ${unplayable} more need a video link (an admin can add them in Profile › Admin)` : ''}.</p>
      ${g.pool.length < 1 || distinct < 2 ? `<p class="fb bad">There is not enough content to play yet. Add more in Profile › Admin.</p>` : ''}
      <div class="row"><button class="btn lg" data-act="gqGo" ${g.pool.length < 1 || distinct < 2 ? 'disabled' : ''}>Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
    return;
  }
  if (g.phase === 'done') {
    const xp = Math.min(60, g.right * (g.diff === 'hard' ? 6 : 3));
    st.innerHTML = '';
    finishGame(spec.key, g.score, [[g.right + '/' + g.qs.length, 'fully right'], [g.diff, 'difficulty'], [g.streakBest, 'best run']], [], xp);
    const card = $('.card.done', st);
    if (card && g.wrong.length) {
      const h = document.createElement('div'); h.innerHTML = `<h4>Worth remembering</h4><ul class="plain">${g.wrong.map(w => `<li>${spec.key === 'quote' ? `<span class="glyph">${esc(w.jp)}</span> · ${esc(w.anime)}, ${esc(w.char)}` : `${esc(w.artist)} · ${esc(w.title)}${w.ro ? ' (' + esc(w.ro) + ')' : ''}`}</li>`).join('')}</ul>`;
      card.insertBefore(h, card.querySelector('.row'));
    }
    return;
  }
  const q = g.qs[g.i], it = q.item, step = q.step, last = g.diff === 'easy' || step === 2;
  const label = step === 1 ? spec.l1 : spec.l2;
  st.innerHTML = `<div class="ghud"><span>Round <b>${g.i + 1}/${g.qs.length}</b></span><span>Score <b>${g.score}</b></span><span>${g.diff}</span></div>
    <div class="card qcard">${spec.clue(it, g)}</div>
    <p class="lab ctr">${label}${g.diff === 'hard' ? ` · step ${step} of 2` : ''}</p>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${q.sel != null ? (o === q.right[step] ? ' ok' : (q.sel === i ? ' bad' : ' off')) : ''}" data-act="gqPick" data-i="${i}" ${q.sel != null ? 'disabled' : ''}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>
    ${q.sel != null ? `<div class="fb ${q.opts[q.sel] === q.right[step] ? 'ok' : 'bad'}"><span><b>${q.opts[q.sel] === q.right[step] ? 'Correct' : 'Not quite'}</b>${q.opts[q.sel] === q.right[step] ? '' : ' It is ' + esc(q.right[step]) + '.'}${last && spec.key === 'quote' ? ' “' + esc(it.en || '') + '”' : ''}${last && spec.key === 'song' && it.ro ? ' (' + esc(it.ro) + ')' : ''}</span>
      <button class="btn" data-act="gqNext" autofocus>${last && g.i + 1 >= g.qs.length ? 'See results' : last ? 'Next' : 'Continue'}</button></div>` : ''}
    <div class="row ctr"><button class="link" data-act="gexit">Quit</button></div>`;
}
function gqOpts(g, item, step) {
  const spec = g.spec, f = step === 1 ? spec.f1 : spec.f2, right = f(item);
  const pool = g.all.filter(x => x !== item), seen = new Set([right]); let cands = [];
  if (step === 2) cands = shuffle(pool.filter(x => spec.f1(x) === spec.f1(item)).map(f));
  cands = cands.concat(shuffle(pool.map(f)));
  const out = [right]; for (const c of cands) { if (!seen.has(c) && c) { seen.add(c); out.push(c); if (out.length >= 4) break; } }
  return shuffle(out);
}
ACT.gqSet = el => { GQ[el.dataset.k] = /^\d+$/.test(el.dataset.v) ? +el.dataset.v : el.dataset.v; gqPaint(); };
ACT.gqGo = () => {
  const g = GQ, n = Math.min(g.n, g.pool.length), qs = shuffle(g.pool).slice(0, n).map(item => ({ item, step: 1, sel: null, right: { 1: g.spec.f1(item), 2: g.spec.f2(item) } }));
  Object.assign(g, { phase: 'q', qs, i: 0, score: 0, right: 0, run: 0, streakBest: 0, wrong: [], hint: false, showVideo: false });
  gqSetup(); gqPaint();
};
function gqSetup() { const g = GQ, q = g.qs[g.i]; q.opts = gqOpts(g, q.item, 1); g.start = (q.item.start != null && q.item.start !== '') ? +q.item.start : (ytStart(q.item.yt) != null ? ytStart(q.item.yt) : 20 + rnd(70)); g.hint = false; g.showVideo = false; }
ACT.gqPick = el => {
  const g = GQ, q = g.qs[g.i], step = q.step; if (q.sel != null) return;
  q.sel = +el.dataset.i; const ok = q.opts[q.sel] === q.right[step];
  if (ok) { g.score += 10; sfx.ok(); q.okSteps = (q.okSteps || 0) + 1; } else { sfx.no(); }
  q.wrongAny = q.wrongAny || !ok; gqPaint();
};
ACT.gqNext = () => {
  const g = GQ, q = g.qs[g.i];
  if (g.diff === 'hard' && q.step === 1) { q.step = 2; q.sel = null; q.opts = gqOpts(g, q.item, 2); gqPaint(); return; }
  const full = !q.wrongAny; if (full) { g.right++; g.run++; g.streakBest = Math.max(g.streakBest, g.run); flag(g.spec.flagKey); } else { g.run = 0; g.wrong.push(q.item); }
  g.i++; if (g.i >= g.qs.length) { g.phase = 'done'; } else gqSetup();
  gqPaint();
};
ACT.gqTog = el => { S.set[el.dataset.k] = !S.set[el.dataset.k]; save(); gqPaint(); };
ACT.gqVideo = () => { GQ.showVideo = !GQ.showVideo; gqPaint(); };
ACT.gqHint = () => { GQ.hint = !GQ.hint; gqPaint(); };
ACT.gqSay = () => { const q = GQ && GQ.qs && GQ.qs[GQ.i]; if (q) speak(q.item.jp); };
document.addEventListener('keydown', e => {
  if (!GQ || GQ.phase !== 'q' || route() !== 'games' || !$('#modal').hidden) return;
  const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea') return;
  const q = GQ.qs[GQ.i]; if (!q) return;
  if (q.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= q.opts.length) ACT.gqPick({ dataset: { i: String(+e.key - 1) } });
  else if (q.sel != null && e.key === 'Enter') ACT.gqNext();
});
G.quote = () => guessStart('quote');
G.song = () => guessStart('song');
