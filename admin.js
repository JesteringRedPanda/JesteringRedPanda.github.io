/* ============ ADMIN (Profile > Admin) ============
   Lets an admin change the site without touching code: announcement banner, word of the day, which games
   are on, hide built-in quotes/songs, and add / edit / delete anime quotes and songs (YouTube links).
   With a backend, changes are saved for everybody (Firestore, admins only). Without one they apply to this browser. */
const AD = { kind: 'quote', edit: null, msg: '', err: '', busy: false, open: false };
const adCloud = () => fxOn();
function adCan() { return adCloud() ? !!(FX.admin && FX.user) : true; }
async function adSaveCfg(patch) {
  const cfg = Object.assign({}, ctCfg(), patch);
  if (adCloud()) { await FX.impl.saveConfig(cfg); CT.remoteCfg = cfg; } else ctSaveLocal({ items: ctLocal().items, config: cfg });
}
async function adSaveItem(it) {
  if (adCloud()) { await FX.impl.saveItem(it); const a = CT.remote, i = a.findIndex(x => x.id === it.id); if (i >= 0) a[i] = it; else a.push(it); }
  else { const o = ctLocal(), i = o.items.findIndex(x => x.id === it.id); if (i >= 0) o.items[i] = it; else o.items.push(it); ctSaveLocal(o); }
}
async function adDelItem(id) {
  if (adCloud()) { await FX.impl.deleteItem(id); CT.remote = CT.remote.filter(x => x.id !== id); }
  else { const o = ctLocal(); o.items = o.items.filter(x => x.id !== id); ctSaveLocal(o); }
}
async function adRun(f, ok) {
  if (!adCan() || AD.busy) return; AD.busy = true; AD.err = ''; AD.msg = '';
  try { await f(); AD.msg = ok || 'Saved.'; } catch (e) { AD.err = 'Could not save: ' + ((e && e.message) || 'permission denied') + (adCloud() ? ' (is this account listed in the admins collection?)' : ''); }
  AD.busy = false; render();
}
const adVal = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
const newId = () => 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function viewAdmin() {
  const cfg = ctCfg(), hidden = new Set(cfg.hidden || []), off = new Set(cfg.disabledGames || []), kind = AD.kind;
  const custom = ctExtra().filter(i => i.kind === kind), builtin = BUILTIN.filter(i => i.kind === kind);
  const e = AD.edit && AD.edit.kind === kind ? AD.edit : null;
  const lbl = i => kind === 'quote' ? `<span class="glyph">${esc(i.jp)}</span> · ${esc(i.anime)}, ${esc(i.char)}` : `${esc(i.artist)} · ${esc(i.title)}${i.yt ? '' : ' <span class="muted small">(no video link)</span>'}`;
  const fld = (id, label, v, ph, extra) => `<label class="adf"><span class="lab">${label}</span><input class="gin adin" id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" autocomplete="off" ${extra || ''}></label>`;
  const form = kind === 'quote'
    ? fld('adJp', 'Japanese line', e && e.jp, '俺は海賊王になる！') + fld('adRo', 'Romaji', e && e.ro, 'Ore wa kaizoku-ō ni naru!') + fld('adEn', 'English meaning', e && e.en, 'I will become the Pirate King!') + fld('adAnime', 'Anime', e && e.anime, 'One Piece') + fld('adChar', 'Character', e && e.char, 'Monkey D. Luffy')
    : fld('adArtist', 'Artist', e && e.artist, 'YOASOBI') + fld('adTitle', 'Song title', e && e.title, 'アイドル') + fld('adRo', 'Reading (optional)', e && e.ro, 'Idol') + fld('adYt', 'YouTube link', e && e.yt, 'https://www.youtube.com/watch?v=…') + fld('adStart', 'Start at second (optional)', e && e.start, '45', 'inputmode="numeric"') + fld('adHint', 'Hint (optional)', e && e.hint, 'Opening of an idol anime');
  const gm = GAMES.map(g => `<button class="chip${off.has(g[0]) ? '' : ' on'}" data-act="adGame" data-v="${g[0]}" aria-pressed="${!off.has(g[0])}">${esc(g[1])}</button>`).join('');
  return `<div class="card"><h2>Admin tools</h2>
    <p class="muted">${adCloud() ? (adCan() ? 'You are an admin. Changes here are saved for everyone who uses the site.' : 'Sign in with an admin account to change shared content.') : 'No account backend is connected, so these changes only apply in this browser.'}</p>
    ${AD.msg ? `<p class="fb ok" role="status">${esc(AD.msg)}</p>` : ''}${AD.err ? `<p class="fb bad" role="alert">${esc(AD.err)}</p>` : ''}</div>
    <div class="card"><h3>Announcement banner</h3><p class="muted small">Shown at the top of Today. Leave it empty to hide it.</p>
      <div class="row"><input class="gin adin" id="adAnn" value="${esc(cfg.announcement || '')}" maxlength="200" placeholder="New: Guess the Song is live!" data-enter="adAnnSave" style="flex:1;min-width:200px"><button class="btn" data-act="adAnnSave">Save</button></div></div>
    <div class="card"><h3>Word of the day</h3><p class="muted small">Type a word from the vocabulary list (for example 食べる) to pin it. Empty = automatic.</p>
      <div class="row"><input class="gin adin" id="adWotd" value="${esc(cfg.wotd ? cfg.wotd.replace(/^v:/, '') : '')}" placeholder="食べる" data-enter="adWotdSave" style="flex:1;min-width:200px"><button class="btn" data-act="adWotdSave">Save</button></div></div>
    <div class="card"><h3>Games</h3><p class="muted small">Highlighted games are visible. Tap one to switch it off or on.</p><div class="chips">${gm}</div></div>
    <div class="card"><h3>Quotes and songs</h3>
      <div class="chips">${[['quote', 'Anime quotes'], ['song', 'Songs']].map(k => `<button class="chip${kind === k[0] ? ' on' : ''}" data-act="adKind" data-v="${k[0]}" aria-pressed="${kind === k[0]}">${k[1]}</button>`).join('')}</div>
      <h4>${e ? 'Edit entry' : 'Add an entry'}</h4>
      <div class="adform">${form}</div>
      <p class="muted small">${kind === 'quote' ? 'Keep quotes short, like catchphrases. Please do not paste long dialogue or song lyrics.' : 'Paste a normal YouTube link. If the video does not play inside the site, the owner has blocked embedding; players can still open it on YouTube.'}</p>
      <div class="row"><button class="btn" data-act="adSave">${e ? 'Update' : 'Add'}</button>${e ? '<button class="btn ghost" data-act="adCancel">Cancel edit</button>' : ''}</div>
      <h4>Your entries (${custom.length})</h4>
      ${custom.length ? `<ul class="adlist">${custom.map(i => `<li class="${i.active === false ? 'off' : ''}"><span>${lbl(i)}</span><span class="adbtn"><button class="btn ghost sm" data-act="adEdit" data-id="${i.id}">Edit</button><button class="btn ghost sm" data-act="adToggle" data-id="${i.id}">${i.active === false ? 'Enable' : 'Disable'}</button><button class="btn ghost sm" data-act="adDel" data-id="${i.id}">Delete</button></span></li>`).join('')}</ul>` : '<p class="muted">Nothing added yet.</p>'}
      <h4>Built-in entries (${builtin.length})</h4><p class="muted small">Tap an entry to hide it from the games, or show it again.</p>
      <details class="adbuilt"><summary>Show built-in list</summary><ul class="adlist">${builtin.map(i => `<li class="${hidden.has(i.id) ? 'off' : ''}"><span>${lbl(i)}</span><span class="adbtn"><button class="btn ghost sm" data-act="adHide" data-id="${i.id}">${hidden.has(i.id) ? 'Show' : 'Hide'}</button></span></li>`).join('')}</ul></details></div>
    <div class="card"><h3>Backup</h3><p class="muted small">Export your added entries and settings as text, or paste a backup to restore it.</p>
      <div class="row"><button class="btn ghost" data-act="adExport">Show export</button><button class="btn ghost" data-act="adImport">Import pasted text</button></div>
      <textarea class="gin adta" id="adJson" rows="5" aria-label="Content JSON" placeholder="Export appears here. Paste a backup here to import."></textarea></div>`;
}

ACT.adKind = el => { AD.kind = el.dataset.v; AD.edit = null; AD.msg = AD.err = ''; render(); };
ACT.adAnnSave = () => adRun(() => adSaveCfg({ announcement: adVal('adAnn') }), 'Banner saved.');
ACT.adWotdSave = () => {
  const w = adVal('adWotd'); if (!w) return adRun(() => adSaveCfg({ wotd: '' }), 'Word of the day is automatic again.');
  const it = VOCAB.find(v => v.ch === w || v.rd === w || v.id === w || v.id === 'v:' + w);
  if (!it) { AD.err = 'That word is not in the vocabulary list.'; AD.msg = ''; render(); return; }
  adRun(() => adSaveCfg({ wotd: it.id }), 'Pinned ' + it.ch + '.');
};
ACT.adGame = el => { const k = el.dataset.v, s = new Set(ctCfg().disabledGames || []); if (s.has(k)) s.delete(k); else s.add(k); adRun(() => adSaveCfg({ disabledGames: Array.from(s) }), 'Games updated.'); };
ACT.adHide = el => { const k = el.dataset.id, s = new Set(ctCfg().hidden || []); if (s.has(k)) s.delete(k); else s.add(k); adRun(() => adSaveCfg({ hidden: Array.from(s) }), 'Updated.'); };
ACT.adEdit = el => { AD.edit = ctExtra().find(i => i.id === el.dataset.id) || null; AD.msg = AD.err = ''; render(); window.scrollTo(0, 0); };
ACT.adCancel = () => { AD.edit = null; render(); };
ACT.adToggle = el => { const it = ctExtra().find(i => i.id === el.dataset.id); if (it) adRun(() => adSaveItem(Object.assign({}, it, { active: it.active === false })), 'Updated.'); };
ACT.adDel = el => adRun(() => adDelItem(el.dataset.id), 'Deleted.');
ACT.adSave = () => {
  const k = AD.kind, id = AD.edit && AD.edit.kind === k ? AD.edit.id : newId(); let it;
  if (k === 'quote') {
    it = { id, kind: 'quote', jp: adVal('adJp'), ro: adVal('adRo'), en: adVal('adEn'), anime: adVal('adAnime'), char: adVal('adChar'), active: true };
    if (!it.jp || !it.anime || !it.char) { AD.err = 'Japanese line, anime and character are required.'; AD.msg = ''; return render(); }
    if (it.jp.length > 60) { AD.err = 'Keep quotes short (60 characters or fewer).'; AD.msg = ''; return render(); }
  } else {
    const yt = ytId(adVal('adYt')), st = adVal('adStart'); it = { id, kind: 'song', artist: adVal('adArtist'), title: adVal('adTitle'), ro: adVal('adRo'), yt, hint: adVal('adHint'), active: true };
    if (st && /^\d+$/.test(st)) it.start = +st; else if (ytStart(adVal('adYt')) != null) it.start = ytStart(adVal('adYt'));
    if (!it.artist || !it.title) { AD.err = 'Artist and title are required.'; AD.msg = ''; return render(); }
    if (adVal('adYt') && !yt) { AD.err = 'That does not look like a YouTube link.'; AD.msg = ''; return render(); }
  }
  AD.edit = null; adRun(() => adSaveItem(it), 'Entry saved.');
};
ACT.adExport = () => { const ta = $('#adJson'); if (ta) { ta.value = JSON.stringify({ items: ctExtra(), config: ctCfg() }, null, 1); ta.select(); } };
ACT.adImport = () => {
  const ta = $('#adJson'); let o; try { o = JSON.parse(ta.value); } catch (e) { AD.err = 'That is not valid backup text.'; AD.msg = ''; return render(); }
  const items = Array.isArray(o.items) ? o.items.filter(i => i && (i.kind === 'quote' || i.kind === 'song') && typeof i.id === 'string') : [];
  adRun(async () => { for (const it of items) await adSaveItem(it); if (o.config && typeof o.config === 'object') await adSaveCfg(o.config); }, items.length + ' entries imported.');
};
