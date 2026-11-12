/* ============ PROFILE: avatar, header pill, tabs ============ */
let avSeq = 0;
function avatar(p, px) {
  p = p || {}; const c = 'var(' + (p.color || '--c-hira') + ')', id = 'av' + (++avSeq);
  const inner = p.face === 'glyph'
    ? `<text x="100" y="131" text-anchor="middle" font-family="var(--glyph)" font-size="98" font-weight="600" fill="var(--ink)">${esc(p.glyph || '日')}</text>`
    : `<clipPath id="${id}"><circle cx="100" cy="100" r="86"/></clipPath><g clip-path="url(#${id})"><g transform="translate(100 108) scale(.8) translate(-100 -100)">${pandaHeadInner()}</g></g>`;
  return `<svg class="av" viewBox="0 0 200 200" width="${px || 40}" height="${px || 40}" role="img" aria-label="Avatar"><circle cx="100" cy="100" r="92" fill="var(--card)" stroke="${c}" stroke-width="14"/>${inner}</svg>`;
}

function refreshChips() {
  const el = $('#chips'); if (!el) return;
  const li = levelInfo(), d = today(), name = fxName() || 'Guest', pc = Math.min(100, d.xp / S.set.goal * 100);
  el.innerHTML = `<a class="pill" href="#profile" aria-label="Open your profile">${avatar(S.prof, 38)}<span class="pbody"><span class="pname"><b>${esc(name)}</b>${S.prof.lang ? flagSvg(S.prof.lang, 18) : ''}</span>
    <span class="pstats"><span><b>${streak()}</b> day streak</span><span>Lv <b>${li.l}</b></span><span><b>${d.xp}</b>/${S.set.goal} XP</span></span></span><span class="pbar" aria-hidden="true"><i style="width:${pc.toFixed(0)}%"></i></span></a>`;
}

const PTABS = [['overview', 'Overview'], ['badges', 'Badges'], ['friends', 'Friends'], ['settings', 'Settings']];
const isAdminUi = () => FX.admin || !fxOn();   // with no backend the admin tools edit this browser only
function viewProfile() {
  const tabs = PTABS.concat(isAdminUi() ? [['admin', 'Admin']] : []);
  if (!tabs.some(t => t[0] === UI.ptab)) UI.ptab = 'overview';
  const body = { overview: pOverview, badges: pBadges, friends: pFriends, settings: pSettings, admin: () => viewAdmin() }[UI.ptab]();
  return `<section class="page"><header class="ph"><p class="eyebrow">自分 · Profile</p>${identity()}</header>
    <div class="tabs" role="tablist">${tabs.map(t => `<button class="tab${UI.ptab === t[0] ? ' on' : ''}" role="tab" aria-selected="${UI.ptab === t[0]}" data-act="ui" data-k="ptab" data-v="${t[0]}">${t[1]}${t[0] === 'friends' && pendingIn().length ? ' <span class="dotn">' + pendingIn().length + '</span>' : ''}</button>`).join('')}</div>
    ${body}</section>`;
}
function identity() {
  const li = levelInfo(), name = fxName() || 'Guest', L = LANG_BY[S.prof.lang] || null, earned = ACH.filter(a => S.ach[a.id]).length;
  return `<div class="card ident">${avatar(S.prof, 84)}<div class="idm"><h1>${esc(name)} ${S.prof.lang ? flagSvg(S.prof.lang, 28) : ''}</h1>
    <p class="muted">${L ? 'Learning ' + esc(L.name) : 'No language chosen yet'}${S.prof.motto ? ' · “' + esc(S.prof.motto) + '”' : ''}</p>
    <div class="pstat"><span><b>Lv ${li.l}</b></span><span><b>${streak()}</b> day streak</span><span><b>${S.xp}</b> XP</span><span><b>${earned}</b> of ${ACH.length} badges</span></div>
    <div class="prog thin"><i style="width:${(li.p * 100).toFixed(0)}%"></i></div><p class="muted small">${S.xp - li.lo} / ${li.hi - li.lo} XP to level ${li.l + 1}</p></div>
    ${FX.user ? '' : `<div class="idg"><p class="muted small">Guest mode. Progress is saved in this browser only.</p><button class="btn ghost sm" data-act="goStart">Sign in to save it</button></div>`}</div>`;
}
ACT.goStart = () => go('start');

function pOverview() {
  const tot = S.tot, acc = pct(tot.ok, tot.all), mastered = ALL.filter(i => lvl(i.id) === 3).length, learning = ALL.filter(i => lvl(i.id) === 1 || lvl(i.id) === 2).length;
  const cells = []; for (let i = 27; i >= 0; i--) { const x = new Date(); x.setDate(x.getDate() - i); const r = S.days[dayKey(x)], xp = r ? r.xp : 0; cells.push([x, xp, xp === 0 ? 0 : xp < S.set.goal * 0.5 ? 1 : xp < S.set.goal ? 2 : 3]); }
  const lv = (items, n) => items.filter(i => i.jlpt === n), done = it => it.filter(i => lvl(i.id) >= 1).length;
  const row = (label, items, color) => `<div class="dexrow static" style="--c:var(${color})"><span class="dn"><i class="dotc"></i>${label}</span><div class="seg" style="--c:var(${color})">${[3, 2, 1].map(l => `<i class="s${l}" style="width:${pct(items.filter(i => lvl(i.id) === l).length, items.length)}%"></i>`).join('')}</div><span class="dc"><b>${done(items)}</b>/${items.length}</span></div>`;
  return `<div class="stat4"><div class="card sc"><b>${tot.all}</b><span>Answers given</span></div><div class="card sc"><b>${acc}%</b><span>Answers right</span></div><div class="card sc"><b>${S.games}</b><span>Games played</span></div><div class="card sc"><b>${Object.keys(S.lessons).length}</b><span>Lessons done</span></div></div>
    <div class="cols2"><div class="card"><h2>Collection</h2><p class="muted">${mastered} mastered, ${learning} in progress, ${ALL.length - mastered - learning} not started.</p>
      <div class="dexrows">${DECK_ORDER.map(k => { const s = deckStat(k); return `<div class="dexrow static" style="--c:var(${DECKS[k].color})"><span class="dn"><i class="dotc"></i>${DECKS[k].label}</span>${segBar(k)}<span class="dc"><b>${s[3]}</b>/${DECKS[k].items.length}</span></div>`; }).join('')}</div></div>
      <div class="card"><h2>JLPT progress</h2><p class="muted">Items started, by level.</p><div class="dexrows">
        ${row('Kanji N5', lv(KANJI, 'n5'), '--c-kanji')}${row('Kanji N4', lv(KANJI, 'n4'), '--c-kanji')}${row('Words N5', lv(VOCAB, 'n5'), '--c-vocab')}${row('Words N4', lv(VOCAB, 'n4'), '--c-vocab')}</div>
        <p class="muted small">${LESSONS.filter(l => l.lv === 'n4' && S.lessons[l.id]).length} of ${LESSONS.filter(l => l.lv === 'n4').length} N4 grammar lessons done.</p></div></div>
    <div class="cols2"><div class="card"><h2>Last 28 days</h2><div class="heat">${cells.map(c => `<i class="a${c[2]}" title="${c[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}: ${c[1]} XP"></i>`).join('')}</div>
      <p class="muted small">Darker squares mean more XP. The darkest means you hit your goal.</p></div>
      <div class="card"><h2>Best game scores</h2><ul class="plain scores">${GAMES.map(x => `<li><span>${x[1]}</span><b>${S.best[x[0]] || 0}</b></li>`).join('')}</ul></div></div>`;
}

function pBadges() {
  const earned = ACH.filter(a => S.ach[a.id]).length;
  return `<div class="card"><h2>Badges <span class="muted small">${earned} of ${ACH.length}</span></h2><div class="badges2">${ACH.map(a => {
    const t = S.ach[a.id];
    return `<div class="badge2${t ? ' on' : ''}">${badgeSvg(a, 64)}<b>${esc(a.name)}</b><span>${esc(a.desc)}</span><small>${t ? 'Earned ' + new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Locked'}</small></div>`;
  }).join('')}</div></div>`;
}

function friendCard(p, extra) {
  const L = LANG_BY[p.lang];
  return `<div class="fcard">${avatar(p, 46)}<div class="fm"><b>${esc(p.username)}</b> ${p.lang ? flagSvg(p.lang, 18) : ''}<br><span class="muted small">${p.motto ? '“' + esc(p.motto) + '”' : (L ? 'Learning ' + esc(L.name) : '')}</span>
    <div class="pstat sm"><span>Lv <b>${p.level || 1}</b></span><span><b>${p.streak || 0}</b> day streak</span><span><b>${p.xp || 0}</b> XP</span><span><b>${p.mastered || 0}</b> mastered</span></div></div><div class="fx">${extra || ''}</div></div>`;
}
function pFriends() {
  if (!fxOn()) return `<div class="card"><h2>Friends</h2><p class="muted">Friends need an account. This copy of the site does not have accounts switched on yet. The setup guide explains how to switch them on.</p></div>`;
  if (!FX.user) return `<div class="card"><h2>Friends</h2><p class="muted">Sign in to add friends, see their streaks and levels, and let them see yours. Your progress stays private; friends only see your public stats.</p><button class="btn" data-act="goStart">Go to sign in</button></div>`;
  if (!FX.profile) return `<div class="card"><h2>Friends</h2><p class="muted">Choose a username first so friends can find you.</p><button class="btn" data-act="nameOpen">Choose username</button></div>`;
  const fl = friendList(), P = FX.friends.profiles, pin = pendingIn(), pout = pendingOut();
  return `<div class="card"><h2>Add a friend</h2><div class="row"><label class="vh" for="frq">Search by username</label><input id="frq" class="gin" style="flex:1;min-width:160px" placeholder="Search by username" value="${esc(FR.q)}" autocomplete="off" autocapitalize="none" data-enter="frSearch"><button class="btn" data-act="frSearch">Search</button></div>
      ${FR.msg ? `<p class="muted small">${esc(FR.msg)}</p>` : ''}
      ${FR.res ? `<div class="flist">${FR.res.map(p => { const known = fl.some(f => f.uid === p.uid) || pout.some(r => r.to === p.uid) || pin.some(r => r.from === p.uid);
        return friendCard(p, known ? '<span class="muted small">Already connected</span>' : `<button class="btn sm" data-act="frAdd" data-id="${esc(p.uid)}">Add friend</button>`); }).join('')}</div>` : ''}
      <p class="muted small">Your own name: <b>${esc(fxName())}</b>. Friends can find you by it.</p></div>
    ${pin.length ? `<div class="card"><h2>Requests <span class="dotn">${pin.length}</span></h2><div class="flist">${pin.map(r => P[r.from] ? friendCard(P[r.from], `<button class="btn sm" data-act="frAccept" data-id="${esc(r.id)}">Accept</button><button class="btn ghost sm" data-act="frRemove" data-id="${esc(r.id)}">Decline</button>`) : '').join('')}</div></div>` : ''}
    <div class="card"><h2>Friends <span class="muted small">${fl.length}</span> <button class="link small" data-act="frRefresh">Refresh</button></h2>
      ${fl.length ? `<div class="flist">${fl.map(f => P[f.uid] ? friendCard(P[f.uid], `<button class="btn ghost sm" data-act="frRemove" data-id="${esc(f.r.id)}">Remove</button>`) : '').join('')}</div>` : '<p class="muted">No friends yet. Search for a username above to send your first request.</p>'}
      ${pout.length ? `<hr><p class="lab">Waiting for an answer</p><div class="flist">${pout.map(r => P[r.to] ? friendCard(P[r.to], `<button class="btn ghost sm" data-act="frRemove" data-id="${esc(r.id)}">Cancel</button>`) : '').join('')}</div>` : ''}</div>`;
}
ACT.frRefresh = async () => { await fxFriends(); render(); };

const COLORS = [['--c-hira', 'Orange line'], ['--c-kata', 'Blue line'], ['--c-kanji', 'Purple line'], ['--c-vocab', 'Green line'], ['--c-phrase', 'Red line']];
const GLYPHS = ['日', '桜', '富', '猫', '龍', '星', '侍', '走', '海', '夢'];
function pSettings() {
  const set = S.set, left = cooldownLeft();
  return `<div class="card"><h2>Your profile</h2>
      <p class="lab">Username</p><div class="row"><b>${esc(fxName() || 'Guest')}</b>${FX.user ? `<button class="btn ghost sm" data-act="nameOpen">${FX.profile ? 'Change' : 'Choose'}</button><span class="muted small">${FX.profile ? (left ? 'Next change possible in ' + fmtLeft(left) : 'You can change it now. After that, wait ' + RENAME_DAYS + ' days.') : ''}</span>` : '<span class="muted small">Sign in to choose a username.</span>'}</div>
      <p class="lab">Line colour</p><div class="chips">${COLORS.map(c => `<button class="chip${S.prof.color === c[0] ? ' on' : ''}" data-act="setProf" data-k="color" data-v="${c[0]}" aria-pressed="${S.prof.color === c[0]}"><i class="dotc" style="--c:var(${c[0]})"></i>${c[1]}</button>`).join('')}</div>
      <p class="lab">Picture</p><div class="chips">${[['panda', 'Red panda'], ['glyph', 'A kanji']].map(c => `<button class="chip${S.prof.face === c[0] ? ' on' : ''}" data-act="setProf" data-k="face" data-v="${c[0]}" aria-pressed="${S.prof.face === c[0]}">${c[1]}</button>`).join('')}</div>
      ${S.prof.face === 'glyph' ? `<div class="chips">${GLYPHS.map(g => `<button class="chip glyph${S.prof.glyph === g ? ' on' : ''}" data-act="setProf" data-k="glyph" data-v="${g}" aria-pressed="${S.prof.glyph === g}">${g}</button>`).join('')}</div>` : ''}
      <p class="lab">Motto <span class="muted small">up to 40 characters</span></p><div class="row"><label class="vh" for="motto">Motto</label><input id="motto" class="gin" style="flex:1;min-width:160px" maxlength="40" placeholder="One kanji a day" value="${esc(S.prof.motto || '')}" data-enter="saveMotto"><button class="btn ghost sm" data-act="saveMotto">Save</button></div>
      <p class="lab">Language you are learning</p><div class="chips">${LANGS.filter(l => l.status !== 'later').map(l => `<button class="chip${S.prof.lang === l.id ? ' on' : ''}" data-act="setProf" data-k="lang" data-v="${l.id}" aria-pressed="${S.prof.lang === l.id}">${flagSvg(l.id, 20)} ${l.name}</button>`).join('')}</div>
      <div class="preview"><span class="muted small">How others see you</span><div class="fcardmini">${avatar(S.prof, 40)}<b>${esc(fxName() || 'Guest')}</b>${S.prof.lang ? flagSvg(S.prof.lang, 20) : ''}</div></div></div>

    <div class="card"><h2>Study settings</h2>
      <p class="lab">Daily goal</p><div class="chips">${[20, 30, 50, 100].map(v => `<button class="chip${set.goal === v ? ' on' : ''}" data-act="setPref" data-k="goal" data-v="${v}" aria-pressed="${set.goal === v}">${v} XP</button>`).join('')}</div>
      <p class="lab">Character style</p><div class="chips">${[['klee', 'Textbook'], ['gothic', 'Gothic'], ['mincho', 'Mincho']].map(f => `<button class="chip${set.font === f[0] ? ' on' : ''}" data-act="setPref" data-k="font" data-v="${f[0]}" aria-pressed="${set.font === f[0]}">${f[1]} <span class="glyph">あ漢</span></button>`).join('')}</div>
      <p class="lab">Theme</p><div class="chips">${[['system', 'Match device'], ['light', 'Light'], ['dark', 'Dark']].map(f => `<button class="chip${set.theme === f[0] ? ' on' : ''}" data-act="setPref" data-k="theme" data-v="${f[0]}" aria-pressed="${set.theme === f[0]}">${f[1]}</button>`).join('')}</div>
      <p class="lab">Options</p><div class="chips">
        ${[['romaji', 'Show romaji in tables'], ['sound', 'Sound effects'], ['speak', 'Spoken Japanese']].map(f => `<button class="chip${set[f[0]] ? ' on' : ''}" data-act="togglePref" data-k="${f[0]}" aria-pressed="${set[f[0]]}">${f[1]}</button>`).join('')}</div>
      <p class="muted small">Spoken Japanese uses your browser’s voices. If you hear nothing, install a Japanese voice in your device settings.</p></div>

    <div class="card"><h2>Account</h2>${FX.user ? `<p class="muted">Signed in${FX.user.email ? ' as <b>' + esc(FX.user.email) + '</b>' : ''}. ${FX.err ? '<span class="fb bad">' + esc(FX.err) + '</span>' : 'Your progress is saved to your account automatically.'}</p>
        <div class="row"><button class="btn ghost" data-act="signOut">Sign out</button></div>
        <p class="lab">Account ID</p><div class="row"><code class="uid">${esc(FX.user.uid)}</code><button class="btn ghost sm" data-act="copyText" data-t="${esc(FX.user.uid)}">Copy</button></div>
        <p class="muted small">You only need this ID once, to make yourself the site admin (see the setup guide). It is not secret, but it is not useful to anyone else either.</p>`
      : `<p class="muted">You are in guest mode. Your progress is saved on this device only.</p>${fxOn() ? '<button class="btn" data-act="goStart">Sign in</button>' : ''}`}</div>

    <div class="card"><h2>Backup and restore</h2><p class="muted">You can also move progress by hand: create a backup code, copy it, and paste it into the same page on another device.</p>
      <div class="row"><button class="btn" data-act="mkBackup">Create backup code</button>${PR.code ? '<button class="btn ghost" data-act="cpBackup">Copy code</button>' : ''}</div>
      ${PR.code ? `<label class="vh" for="bkout">Backup code</label><textarea id="bkout" class="anout" readonly rows="3">${esc(PR.code)}</textarea>` : ''}
      <label class="lab" for="bkin">Restore from a code</label><textarea id="bkin" class="anout" rows="3" placeholder="Paste a backup code here"></textarea>
      <div class="row"><button class="btn ghost" data-act="rsBackup">Restore</button><span class="muted small" id="rsmsg">${esc(PR.restoreMsg)}</span></div>
      <hr><h3>Start over</h3>${PR.confirm ? `<p class="fb bad">This erases all progress and badges in ${FX.user ? 'this account' : 'this browser'}.</p><div class="row"><button class="btn danger" data-act="resetDo">Erase everything</button><button class="btn ghost" data-act="resetNo">Keep my progress</button></div>`
        : '<button class="btn ghost" data-act="resetAsk">Reset all progress</button>'}</div>`;
}
ACT.setProf = el => { S.prof[el.dataset.k] = el.dataset.v; save(); if (FX.profile) fxPush(); render(); };
ACT.saveMotto = () => { const v = ($('#motto') || {}).value || ''; S.prof.motto = v.trim().slice(0, 40); save(); if (FX.profile) fxPush(); toast('Motto saved'); render(); };
