/* ============ FIREBASE BRIDGE (loaded as <script type="module"> on GitHub Pages) ============
   Reads window.FIREBASE_CONFIG from firebase-config.js. With no config, or if Firebase cannot be reached,
   it reports "not available" and the site simply runs in guest mode.                                          */
const V = '10.14.1', CDN = 'https://www.gstatic.com/firebasejs/' + V + '/';
const done = impl => { window.FBX_IMPL = impl; window.dispatchEvent(new Event('fbx-ready')); };

(async () => {
  const cfg = window.FIREBASE_CONFIG;
  if (!cfg || !cfg.apiKey) { done(null); return; }
  let A, F;
  try {
    const app = await import(CDN + 'firebase-app.js');
    A = await import(CDN + 'firebase-auth.js');
    F = await import(CDN + 'firebase-firestore.js');
    var fapp = app.initializeApp(cfg);
  } catch (e) { console.warn('Firebase could not be loaded', e); done(null); return; }

  const auth = A.getAuth(fapp), db = F.getFirestore(fapp);
  const d = (...p) => F.doc(db, ...p);
  const ms = t => (t && typeof t.toMillis === 'function') ? t.toMillis() : (typeof t === 'number' ? t : 0);
  const prof = (id, data) => Object.assign({ uid: id }, data, { usernameChangedAt: ms(data.usernameChangedAt) });
  const NAME = /^[a-z0-9_]{3,16}$/;

  const impl = {
    name: 'firebase',
    onAuth(cb) {
      A.onAuthStateChanged(auth, u => cb(u ? { uid: u.uid, name: u.displayName || '', email: u.email || '', photo: u.photoURL || '' } : null));
    },
    async signIn() { await A.signInWithPopup(auth, new A.GoogleAuthProvider()); },
    async signOut() { await A.signOut(auth); },

    async loadProgress(uid) { const s = await F.getDoc(d('progress', uid)); return s.exists() ? s.data() : null; },
    async saveProgress(uid, json, savedAt) { await F.setDoc(d('progress', uid), { json, savedAt }); },

    async getProfile(uid) { const s = await F.getDoc(d('profiles', uid)); return s.exists() ? prof(uid, s.data()) : null; },
    async getProfiles(uids) {
      const out = {};
      await Promise.all(uids.map(async u => { const s = await F.getDoc(d('profiles', u)); if (s.exists()) out[u] = prof(u, s.data()); }));
      return out;
    },
    async usernameFree(lower) { return !(await F.getDoc(d('usernames', lower))).exists(); },
    async createProfile(uid, data) {
      if (!NAME.test(data.usernameLower)) throw new Error('invalid');
      if (!(await impl.usernameFree(data.usernameLower))) throw new Error('taken');
      const p = Object.assign({}, data); delete p.usernameChangedAt;
      const b = F.writeBatch(db);
      b.set(d('profiles', uid), p);
      b.set(d('usernames', data.usernameLower), { uid });
      try { await b.commit(); } catch (e) { throw new Error(e && e.code === 'permission-denied' ? 'taken' : 'failed'); }
    },
    async rename(uid, oldLower, name) {
      if (!NAME.test(name)) throw new Error('invalid');
      const cur = await impl.getProfile(uid);
      if (cur && cur.usernameChangedAt && Date.now() < cur.usernameChangedAt + 14 * 864e5) throw new Error('cooldown');
      if (!(await impl.usernameFree(name))) throw new Error('taken');
      const b = F.writeBatch(db);
      b.update(d('profiles', uid), { username: name, usernameLower: name, usernameChangedAt: F.serverTimestamp() });
      b.set(d('usernames', name), { uid });
      if (oldLower) b.delete(d('usernames', oldLower));
      try { await b.commit(); } catch (e) { throw new Error(e && e.code === 'permission-denied' ? 'cooldown' : 'failed'); }
      return ms((await F.getDoc(d('profiles', uid))).data().usernameChangedAt) || Date.now();
    },
    async updateProfile(uid, f) {
      const keys = ['xp', 'level', 'streak', 'mastered', 'lang', 'color', 'face', 'glyph', 'motto', 'lastActive', 'badges'], p = {};
      keys.forEach(k => { if (f[k] !== undefined) p[k] = f[k]; });
      await F.updateDoc(d('profiles', uid), p);
    },
    async search(prefix) {
      const q = F.query(F.collection(db, 'profiles'), F.orderBy('usernameLower'), F.startAt(prefix), F.endAt(prefix + ''), F.limit(8));
      return (await F.getDocs(q)).docs.map(s => prof(s.id, s.data()));
    },

    async requests(uid) {
      const col = F.collection(db, 'requests');
      const [a, b] = await Promise.all([F.getDocs(F.query(col, F.where('to', '==', uid))), F.getDocs(F.query(col, F.where('from', '==', uid)))]);
      const map = s => Object.assign({ id: s.id }, s.data());
      return { incoming: a.docs.map(map), outgoing: b.docs.map(map) };
    },
    async sendRequest(from, to) {
      const back = await F.getDoc(d('requests', to + '_' + from));
      if (back.exists()) { await F.updateDoc(d('requests', to + '_' + from), { status: 'accepted' }); return; }
      await F.setDoc(d('requests', from + '_' + to), { from, to, status: 'pending', at: Date.now() });
    },
    async acceptRequest(id) { await F.updateDoc(d('requests', id), { status: 'accepted' }); },
    async removeRequest(id) { await F.deleteDoc(d('requests', id)); },

    async isAdmin(uid) { return (await F.getDoc(d('admins', uid))).exists(); },
    async loadContent() {
      const [items, cfg2] = await Promise.all([F.getDocs(F.collection(db, 'quizItems')), F.getDoc(d('siteConfig', 'main'))]);
      return { items: items.docs.map(s => Object.assign({ id: s.id }, s.data())), config: cfg2.exists() ? cfg2.data() : {} };
    },
    async saveItem(item) { const x = Object.assign({}, item); delete x.id; await F.setDoc(d('quizItems', item.id), x); },
    async deleteItem(id) { await F.deleteDoc(d('quizItems', id)); },
    async saveConfig(c) { await F.setDoc(d('siteConfig', 'main'), c); }
  };
  done(impl);
})();
