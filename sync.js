/* ============ ACCOUNT LAYER ============
   The app only talks to FX. FX talks to window.FBX_IMPL, which is either
   - fb-bridge.js  (real Firebase, used on GitHub Pages once firebase-config.js is filled in), or
   - fb-demo.js    (an in-browser demo backend used by the preview and by tests), or
   - nothing       (guest only: everything stays on this device).                                    */
const RENAME_DAYS = 14, NAME_RE = /^[a-z0-9_]{3,16}$/;
const FX = { impl: null, user: null, profile: null, admin: false, status: 'checking', friends: { incoming: [], outgoing: [], profiles: {} }, busy: false, err: '' };
const fxOn = () => !!FX.impl;
const fxIn = () => !!FX.user;
const fxName = () => (FX.profile && FX.profile.username) || S.prof.name || '';
const nameSafe = s => String(s || '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 16);

/* ---- wiring ---- */
function fxInit() {
  const attach = impl => {
    if (FX.impl || !impl) { if (!impl && FX.status === 'checking') { FX.status = 'guest'; render(); } return; }
    FX.impl = impl; FX.status = 'ready';
    impl.onAuth(u => fxAuth(u));
    render();
  };
  if (window.FBX_IMPL) attach(window.FBX_IMPL);
  else {
    window.addEventListener('fbx-ready', () => attach(window.FBX_IMPL || null), { once: true });
    setTimeout(() => { if (!FX.impl && FX.status === 'checking') { FX.status = 'guest'; render(); } }, 4000);
  }
}

async function fxAuth(u) {
  if (!u) {
    if (FX.user) { FX.user = null; FX.profile = null; FX.admin = false; FX.friends = { incoming: [], outgoing: [], profiles: {} }; STORE_UID = ''; loadState(); applyPrefs(); }
    render(); return;
  }
  if (FX.user && FX.user.uid === u.uid) return;
  FX.user = u; FX.busy = true; render();
  try {
    const guest = S; // progress made before signing in
    STORE_UID = u.uid; loadState();
    const local = S, remote = await FX.impl.loadProgress(u.uid);
    let rs = null; if (remote && remote.json) { try { rs = mergeState(JSON.parse(remote.json)); } catch (e) { rs = null; } }
    if (rs && (!local.saved || rs.saved >= local.saved)) { S = rs; toast('Progress loaded from your account'); }
    else if (!rs && !local.saved && guest.saved && guest.xp > 0) { S = mergeState(guest); toast('Your guest progress was saved to your account'); }
    if (!S.prof.lang) S.prof.lang = guest.prof.lang || '';
    FX.profile = await FX.impl.getProfile(u.uid);
    if (FX.profile) {
      const p = FX.profile; Object.assign(S.prof, { name: p.username, lang: p.lang || S.prof.lang, color: p.color || S.prof.color, face: p.face || S.prof.face, glyph: p.glyph || S.prof.glyph, motto: p.motto != null ? p.motto : S.prof.motto, nameAt: p.usernameChangedAt || 0 });
    }
    FX.admin = !!(await FX.impl.isAdmin(u.uid).catch(() => false));
    flagOnce('signed');
    save(); applyPrefs(); fxPush(true); fxFriends(); fxContent();
    if (!FX.profile) ACT.nameOpen();
  } catch (e) { FX.err = 'Could not reach your account. Your progress is still saved on this device.'; }
  FX.busy = false; render();
}
const flagOnce = k => { if (!S.flags[k]) { S.flags[k] = 1; save(); checkAch(); } };

/* ---- saving progress to the account (debounced) ---- */
let syncT, lastPush = 0;
function syncDirty() { if (!FX.user || !FX.impl) return; clearTimeout(syncT); syncT = setTimeout(() => fxPush(), 4000); }
async function fxPush(now) {
  if (!FX.user || !FX.impl) return;
  try {
    const t = Date.now(); lastPush = t;
    await FX.impl.saveProgress(FX.user.uid, JSON.stringify(S), S.saved || t);
    if (FX.profile) await FX.impl.updateProfile(FX.user.uid, pubStats());
    FX.err = '';
  } catch (e) { FX.err = 'Sync paused: ' + (e && e.message ? e.message : 'offline'); }
}
function pubStats() {
  const li = levelInfo();
  return { xp: S.xp, level: li.l, streak: streak(), mastered: ALL.filter(i => lvl(i.id) === 3).length, lang: S.prof.lang || 'ja', color: S.prof.color, face: S.prof.face, glyph: S.prof.glyph, motto: S.prof.motto || '', lastActive: Date.now(), badges: Object.keys(S.ach).length };
}

/* ---- sign in / out ---- */
ACT.signIn = async () => {
  if (!FX.impl) { toast('Accounts are not set up on this copy of the site'); return; }
  try { await FX.impl.signIn(); } catch (e) { toast(e && e.code === 'auth/popup-closed-by-user' ? 'Sign-in cancelled' : 'Sign-in failed. Check the setup guide.'); }
};
ACT.signOut = async () => { try { await FX.impl.signOut(); } catch (e) {} toast('Signed out. You are back in guest mode.'); go('start'); };

/* ---- username: claim, change with a 14 day cooldown ---- */
const cooldownLeft = () => { const at = S.prof.nameAt || 0; return at ? Math.max(0, at + RENAME_DAYS * DAY - Date.now()) : 0; };
const fmtLeft = ms => { const d = Math.ceil(ms / DAY); return d <= 1 ? 'less than a day' : d + ' days'; };
function nameCheck(raw) {
  const n = String(raw || '').trim().toLowerCase();
  if (!NAME_RE.test(n)) return 'Use 3 to 16 letters, numbers or underscores.';
  return '';
}
const NM = { open: false, first: true, val: '', msg: '', busy: false };
ACT.nameOpen = () => { NM.open = true; NM.first = !FX.profile; NM.msg = ''; NM.val = NM.first ? nameSafe(FX.user && FX.user.name && FX.user.name.split(' ')[0]) : fxName(); renderNameDialog(); };
function renderNameDialog() {
  const left = NM.first ? 0 : cooldownLeft();
  openModal(`<button class="x ibtn" data-act="closeModal" aria-label="Close">×</button>
    <p class="eyebrow">${NM.first ? 'Welcome' : 'Change username'}</p><h2>${NM.first ? 'Choose your username' : 'Pick a new username'}</h2>
    <p class="muted">${NM.first ? 'Friends will find you by this name. You can change it later, but only once every ' + RENAME_DAYS + ' days.' : 'You can change your name once every ' + RENAME_DAYS + ' days.'}</p>
    ${left ? `<p class="fb bad">You changed your name recently. You can change it again in ${fmtLeft(left)}.</p>` :
    `<label class="vh" for="nmin">Username</label><input id="nmin" class="gin" maxlength="16" autocomplete="off" autocapitalize="none" spellcheck="false" value="${esc(NM.val)}" data-input="nm" placeholder="e.g. sakura_42">
    <p class="muted small">3 to 16 characters: a to z, 0 to 9 and _ . Names are not case sensitive.</p>
    <p class="fb ${NM.msg ? 'bad' : ''}" id="nmmsg">${esc(NM.msg)}</p>
    <div class="row"><button class="btn" data-act="nameSave" ${NM.busy ? 'disabled' : ''}>${NM.first ? 'Create profile' : 'Save name'}</button>${NM.first ? '<button class="btn ghost" data-act="signOut">Cancel</button>' : ''}</div>`}`, 'narrow');
  const i = $('#nmin'); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
}
ACT.nameSave = async () => {
  const el = $('#nmin'); if (!el || NM.busy) return;
  const raw = el.value.trim().toLowerCase(); NM.val = raw;
  const bad = nameCheck(raw); if (bad) { NM.msg = bad; renderNameDialog(); return; }
  if (!NM.first && raw === (FX.profile.usernameLower || FX.profile.username.toLowerCase())) { NM.msg = 'That is already your name.'; renderNameDialog(); return; }
  NM.busy = true; NM.msg = 'Checking…'; renderNameDialog();
  try {
    if (NM.first) {
      const data = Object.assign({ username: raw, usernameLower: raw, usernameChangedAt: 0 }, pubStats());
      await FX.impl.createProfile(FX.user.uid, data); FX.profile = Object.assign({}, data, { uid: FX.user.uid }); S.prof.name = raw; S.prof.nameAt = 0;
      toast('Welcome, ' + raw);
    } else {
      const at = await FX.impl.rename(FX.user.uid, FX.profile.usernameLower, raw);
      FX.profile.username = raw; FX.profile.usernameLower = raw; FX.profile.usernameChangedAt = at; S.prof.name = raw; S.prof.nameAt = at; flagOnce('renamed'); toast('Username changed');
    }
    NM.busy = false; NM.open = false; save(); closeModal(); fxPush(); render();
  } catch (e) {
    NM.busy = false; const m = e && e.message || '';
    NM.msg = m === 'taken' ? 'That name is taken. Try another.' : m === 'cooldown' ? 'You can only change your name every ' + RENAME_DAYS + ' days.' : m === 'invalid' ? 'That name is not allowed.' : 'Could not save the name right now. Try again.';
    renderNameDialog();
  }
};

/* ---- friends ---- */
async function fxFriends() {
  if (!FX.user || !FX.profile) return;
  try {
    const r = await FX.impl.requests(FX.user.uid), ids = new Set();
    r.incoming.concat(r.outgoing).forEach(x => { ids.add(x.from); ids.add(x.to); }); ids.delete(FX.user.uid);
    const profiles = ids.size ? await FX.impl.getProfiles(Array.from(ids)) : {};
    FX.friends = { incoming: r.incoming, outgoing: r.outgoing, profiles };
    if (friendList().length) flagOnce('friend');
  } catch (e) { FX.err = 'Could not load friends right now.'; }
  if (route() === 'profile') render();
}
const friendList = () => FX.friends.incoming.concat(FX.friends.outgoing).filter(r => r.status === 'accepted').map(r => ({ r, uid: r.from === FX.user.uid ? r.to : r.from }));
const pendingIn = () => FX.friends.incoming.filter(r => r.status === 'pending');
const pendingOut = () => FX.friends.outgoing.filter(r => r.status === 'pending');
const FR = { q: '', res: null, msg: '' };
ACT.frSearch = async () => {
  const el = $('#frq'); FR.q = el ? el.value.trim().toLowerCase().replace(/^@/, '') : '';
  if (FR.q.length < 2) { FR.msg = 'Type at least 2 letters.'; FR.res = null; render(); return; }
  FR.msg = 'Searching…'; render();
  try { FR.res = (await FX.impl.search(FR.q)).filter(p => p.uid !== FX.user.uid); FR.msg = FR.res.length ? '' : 'No one with that name yet.'; } catch (e) { FR.msg = 'Search is not available right now.'; }
  render();
};
ACT.frAdd = async el => {
  const to = el.dataset.id;
  try { await FX.impl.sendRequest(FX.user.uid, to); toast('Friend request sent'); FR.res = null; await fxFriends(); } catch (e) { toast('Could not send the request'); }
  render();
};
ACT.frAccept = async el => { try { await FX.impl.acceptRequest(el.dataset.id); await fxFriends(); flagOnce('friend'); toast('Friend added'); } catch (e) { toast('Could not accept that request'); } render(); };
ACT.frRemove = async el => { try { await FX.impl.removeRequest(el.dataset.id); await fxFriends(); } catch (e) { toast('Could not remove that'); } render(); };
