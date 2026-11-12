/* ============ TODAY ============ */
const firstNewDeck = () => DECK_ORDER.find(k => newList(k).length) || 'hira';
function wordOfDay() { const ov = ctCfg().wotd; if (ov && ITEMS[ov]) return ITEMS[ov]; let h = 0; dayKey().split('').forEach(c => { h = (h * 31 + c.charCodeAt(0)) >>> 0; }); return VOCAB[h % VOCAB.length]; }
const fmtDate = d => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

function viewToday() {
  const d = today(), g = S.set.goal, p = Math.min(1, d.xp / g), C = 2 * Math.PI * 44, li = levelInfo();
  const due = dueList().length, nd = firstNewDeck(), nn = newList(nd).length, st = streak();
  const missions = [['Reach your daily goal of ' + g + ' XP', Math.min(d.xp, g), g, 'study'], ['Review or learn 10 cards', Math.min(d.rev + d.learn, 10), 10, 'study'],
    ['Learn 3 new items', Math.min(d.learn, 3), 3, 'study'], ['Play one minigame', Math.min(d.games, 1), 1, 'games']];
  const days = []; for (let i = 6; i >= 0; i--) { const x = new Date(); x.setDate(x.getDate() - i); days.push([x, S.days[dayKey(x)] || { xp: 0, met: false }]); }
  const mx = Math.max(g, ...days.map(x => x[1].xp));
  const w = wordOfDay(), weak = Object.keys(S.items).filter(id => ITEMS[id] && S.items[id].w > 0 && lvl(id) < 3).sort((a, b) => S.items[b].w - S.items[a].w).slice(0, 6);
  const total = ALL.length, mastered = ALL.filter(i => lvl(i.id) === 3).length;
  const ban = ctCfg().announcement ? `<div class="banner" role="note"><b>News</b> ${esc(ctCfg().announcement)}</div>` : '';
  const pose = d.met ? 'cheer' : (new Date().getHours() >= 23 || new Date().getHours() < 5) ? 'sleep' : due ? 'think' : 'wave';
  const say = d.met ? 'Goal reached! Yatta!' : pose === 'sleep' ? 'Zzz… study tomorrow?' : due ? due + ' card' + (due === 1 ? '' : 's') + ' waiting for you.' : st ? st + ' days in a row. Don’t stop now.' : 'Ready when you are!';
  return `<section class="page today">${ban}
    <header class="ph"><p class="eyebrow">今日 · ${fmtDate(new Date())}</p><h1>${d.met ? 'Goal reached. Anything more is a bonus.' : st ? 'Keep your ' + st + '-day streak going' : 'Start your first streak today'}</h1></header>
    <div class="pet card"><button class="plain petb" data-act="petSay" aria-label="Pet the panda">${pandaFull({ pose, w: 104 })}</button><div><p class="lab">Your panda</p><p class="bubble" id="petsay">${esc(say)}</p></div></div>
    <div class="hero">
      <div class="goal card"><svg class="ring" viewBox="0 0 100 100" role="img" aria-label="${d.xp} of ${g} XP today"><circle cx="50" cy="50" r="44" class="rbg"/><circle cx="50" cy="50" r="44" class="rfg${d.met ? ' met' : ''}" stroke-dasharray="${(C * p).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 50 50)"/>
        <text x="50" y="49" class="rt1">${d.xp}</text><text x="50" y="64" class="rt2">of ${g} XP</text></svg>
        <div class="gtxt"><p class="lab">Level ${li.l}</p><div class="prog thin"><i style="width:${(li.p * 100).toFixed(0)}%"></i></div><p class="muted small">${S.xp - li.lo} / ${li.hi - li.lo} XP to level ${li.l + 1}</p>
        <p class="muted small">${st} day streak · ${mastered} of ${total} items mastered</p></div></div>
      <div class="go card"><p class="lab">Next up</p>
        <button class="btn lg" data-act="reviewDue" ${due ? '' : 'disabled'}>Review ${due} due card${due === 1 ? '' : 's'}</button>
        <button class="btn lg ghost" data-act="learnNew">Learn ${Math.min(5, nn)} new ${DECKS[nd].label.toLowerCase()}</button>
        <button class="btn ghost" data-act="goto" data-v="games">Play a minigame</button></div></div>

    <div class="cols2">
      <div class="card"><h2>Today’s missions</h2><ul class="missions">${missions.map(m => `<li class="${m[1] >= m[2] ? 'done' : ''}"><button data-act="goto" data-v="${m[3]}"><span class="chk" aria-hidden="true"></span><span class="mtx">${esc(m[0])}</span><span class="mp">${m[1]}/${m[2]}</span></button></li>`).join('')}</ul></div>
      <div class="card"><h2>Last 7 days</h2><div class="week" style="--goal:${(g / mx * 100).toFixed(1)}%">${days.map(x => `<div class="wb${x[1].met ? ' met' : ''}"><i style="height:${Math.max(x[1].xp ? 4 : 0, x[1].xp / mx * 100).toFixed(1)}%" title="${x[1].xp} XP"></i><span>${x[0].toLocaleDateString('en', { weekday: 'short' })}</span></div>`).join('')}</div>
        <p class="muted small">The line marks your daily goal.</p></div></div>

    <div class="card"><h2>Your dex</h2><div class="dexrows">${DECK_ORDER.map(k => { const s = deckStat(k), n = DECKS[k].items.length; return `<button class="dexrow" data-act="dexGo" data-v="${k}" style="--c:var(${DECKS[k].color})"><span class="dn"><i class="dotc"></i>${DECKS[k].label}</span>${segBar(k)}<span class="dc"><b>${s[3]}</b>/${n}</span></button>`; }).join('')}</div>
      <p class="muted small">Bar colours show mastered, familiar and learning items.</p></div>

    <div class="cols2">
      <div class="card word"><p class="lab">Word of the day</p><div class="wj">${esc(w.ch)}</div><p class="wr">${esc(w.rd)} · ${esc(w.ro)}</p><p class="wm">${esc(w.mean)}</p>
        <div class="row"><button class="btn ghost" data-act="say" data-id="${esc(w.id)}">${SPEAK_SVG} Listen</button><button class="btn ghost" data-act="detail" data-id="${esc(w.id)}">Details</button></div></div>
      <div class="card"><h2>Needs attention</h2>${weak.length ? `<div class="chips">${weak.map(id => { const it = ITEMS[id]; return `<button class="chip" data-act="detail" data-id="${esc(id)}"><span class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</span> ${esc(answerOf(it))}</button>`; }).join('')}</div><p class="muted small">Items you have missed most often.</p>` : '<p class="muted">Nothing yet. Items you miss will collect here so you can revisit them.</p>'}</div></div>
  </section>`;
}
ACT.goto = el => { go(el.dataset.v); };
ACT.dexGo = el => { UI.dex = el.dataset.v; go('dex'); };
const startFromHome = (deck, mode, size) => { UI.cfg.deck = deck; UI.cfg.mode = mode; UI.cfg.size = size; UI.study = 'cards'; SESS = null; go('study'); ACT.startCards(); };
ACT.reviewDue = () => startFromHome('all', 'due', 20);
ACT.learnNew = () => startFromHome(firstNewDeck(), 'new', 5);

/* ---------- settings helpers (used by Profile) ---------- */
const PR = { code: '', confirm: false, restoreMsg: '' };
ACT.setPref = el => { const k = el.dataset.k, v = el.dataset.v; S.set[k] = k === 'goal' ? +v : v; applyPrefs(); save(); refreshChips(); render(); };
ACT.togglePref = el => { S.set[el.dataset.k] = !S.set[el.dataset.k]; save(); render(); };
ACT.mkBackup = () => { try { PR.code = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) { PR.code = ''; toast('Could not create a code'); } render(); };
ACT.cpBackup = () => copyText(PR.code);
ACT.rsBackup = () => {
  const t = ($('#bkin') || {}).value || '';
  try {
    const o = JSON.parse(decodeURIComponent(escape(atob(t.trim()))));
    if (!o || typeof o !== 'object' || !o.items || !o.set) throw new Error('shape');
    S = mergeState(o);
    save(); applyPrefs(); PR.restoreMsg = 'Restored.'; PR.code = ''; refreshChips(); render(); toast('Progress restored');
  } catch (e) { PR.restoreMsg = 'That code could not be read. Check that you copied all of it.'; const m = $('#rsmsg'); if (m) m.textContent = PR.restoreMsg; }
};
ACT.resetAsk = () => { PR.confirm = true; render(); };
ACT.resetNo = () => { PR.confirm = false; render(); };
ACT.resetDo = () => { const p = S.prof; S = DEF(); S.prof = p; save(); PR.confirm = false; PR.code = ''; SESS = null; QZ = null; applyPrefs(); refreshChips(); render(); toast('Progress erased'); };

const PET_LINES = ['Kon’nichiwa!', 'Ganbatte!', 'Nyam. Ramen?', 'One more card?', 'Sugoi!', 'Practice makes perfect, 練習!', 'Tail wag. Wag wag.', 'Don’t forget your review!'];
ACT.petSay = () => { const e = $('#petsay'); if (e) e.textContent = PET_LINES[Math.floor(Math.random() * PET_LINES.length)]; };
