/* ============ DEMO BACKEND (preview and tests only) ============
   Same interface as fb-bridge.js, but everything lives in this browser's localStorage,
   so friends, usernames and the admin panel can be tried without a Firebase project.
   It is NOT shipped in the GitHub Pages build.                                                  */
(function () {
  const K = 'nihon-demo-backend.v1';
  const seed = () => ({
    session: null,
    profiles: {
      'demo-sakura': { uid: 'demo-sakura', username: 'sakura', usernameLower: 'sakura', usernameChangedAt: 0, lang: 'ja', color: '--c-hira', face: 'panda', glyph: '桜', motto: 'One kanji a day', xp: 1480, level: 8, streak: 12, mastered: 96, badges: 9, lastActive: Date.now() - 3600e3 },
      'demo-kenji': { uid: 'demo-kenji', username: 'kenji_runs', usernameLower: 'kenji_runs', usernameChangedAt: 0, lang: 'ja', color: '--c-kata', face: 'glyph', glyph: '走', motto: 'Shinkansen or bust', xp: 620, level: 5, streak: 3, mastered: 31, badges: 4, lastActive: Date.now() - 86400e3 },
      'demo-marta': { uid: 'demo-marta', username: 'marta_de', usernameLower: 'marta_de', usernameChangedAt: 0, lang: 'de', color: '--c-phrase', face: 'panda', glyph: '日', motto: 'Guten Tag!', xp: 300, level: 4, streak: 1, mastered: 12, badges: 2, lastActive: Date.now() - 5 * 86400e3 },
      'demo-wei': { uid: 'demo-wei', username: 'wei_hanzi', usernameLower: 'wei_hanzi', usernameChangedAt: 0, lang: 'zh', color: '--c-vocab', face: 'glyph', glyph: '龍', motto: '', xp: 90, level: 2, streak: 0, mastered: 3, badges: 1, lastActive: Date.now() - 20 * 86400e3 }
    },
    progress: {}, requests: {}, content: { items: [], config: {} }, admins: { 'demo-user': true }
  });
  let db; const load = () => { try { db = JSON.parse(localStorage.getItem(K) || 'null') || seed(); } catch (e) { db = seed(); } };
  const save = () => { try { localStorage.setItem(K, JSON.stringify(db)); } catch (e) {} };
  load();
  const listeners = [];
  const DAYMS = 864e5, wait = v => new Promise(r => setTimeout(() => r(v), 40));
  const user = () => db.session ? { uid: 'demo-user', name: 'Demo Learner', email: 'demo@example.invalid', photo: '' } : null;
  const impl = {
    name: 'demo',
    onAuth(cb) { listeners.push(cb); setTimeout(() => cb(user()), 0); },
    async signIn() { db.session = true; save(); const u = user(); listeners.forEach(l => l(u)); return u; },
    async signOut() { db.session = null; save(); listeners.forEach(l => l(null)); },
    async loadProgress(uid) { return wait(db.progress[uid] || null); },
    async saveProgress(uid, json, savedAt) { db.progress[uid] = { json, savedAt }; save(); return wait(); },
    async getProfile(uid) { return wait(db.profiles[uid] || null); },
    async getProfiles(uids) { const o = {}; uids.forEach(u => { if (db.profiles[u]) o[u] = db.profiles[u]; }); return wait(o); },
    async usernameFree(lower) { return wait(!Object.values(db.profiles).some(p => p.usernameLower === lower)); },
    async createProfile(uid, data) {
      if (!NAME_RE.test(data.usernameLower)) throw new Error('invalid');
      if (Object.values(db.profiles).some(p => p.usernameLower === data.usernameLower)) throw new Error('taken');
      db.profiles[uid] = Object.assign({ uid }, data); save(); return wait();
    },
    async rename(uid, oldLower, name) {
      const p = db.profiles[uid]; if (!p) throw new Error('invalid');
      if (!NAME_RE.test(name)) throw new Error('invalid');
      if (p.usernameChangedAt && Date.now() < p.usernameChangedAt + 14 * DAYMS) throw new Error('cooldown');
      if (Object.values(db.profiles).some(x => x.usernameLower === name && x.uid !== uid)) throw new Error('taken');
      p.username = p.usernameLower = name; p.usernameChangedAt = Date.now(); save(); return wait(p.usernameChangedAt);
    },
    async updateProfile(uid, f) { if (db.profiles[uid]) { Object.assign(db.profiles[uid], f); save(); } return wait(); },
    async search(prefix) { return wait(Object.values(db.profiles).filter(p => p.usernameLower.indexOf(prefix) === 0).slice(0, 8)); },
    async requests(uid) {
      const all = Object.keys(db.requests).map(id => Object.assign({ id }, db.requests[id]));
      return wait({ incoming: all.filter(r => r.to === uid), outgoing: all.filter(r => r.from === uid) });
    },
    async sendRequest(from, to) {
      const id = from + '_' + to; if (db.requests[id] || db.requests[to + '_' + from]) throw new Error('exists');
      db.requests[id] = { from, to, status: 'pending', at: Date.now() };
      /* demo people answer straight away so the friends list can be seen working */
      if (to.indexOf('demo-') === 0 && to !== 'demo-user') setTimeout(() => { db.requests[id].status = 'accepted'; save(); }, 900);
      save(); return wait();
    },
    async acceptRequest(id) { if (db.requests[id]) { db.requests[id].status = 'accepted'; save(); } return wait(); },
    async removeRequest(id) { delete db.requests[id]; save(); return wait(); },
    async isAdmin(uid) { return wait(!!db.admins[uid]); },
    async loadContent() { return wait(db.content); },
    async saveItem(item) { const a = db.content.items; const i = a.findIndex(x => x.id === item.id); if (i >= 0) a[i] = item; else a.push(item); save(); return wait(); },
    async deleteItem(id) { db.content.items = db.content.items.filter(x => x.id !== id); save(); return wait(); },
    async saveConfig(cfg) { db.content.config = cfg; save(); return wait(); },
    _reset() { db = seed(); save(); }
  };
  window.FBX_IMPL = impl;
})();
