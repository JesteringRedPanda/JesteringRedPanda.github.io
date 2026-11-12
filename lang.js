/* ============ LANGUAGES, FLAGS, START PAGE ============ */
const flagStar = (cx, cy, R, rot) => { let d = ''; for (let i = 0; i < 10; i++) { const a = rot + (-Math.PI / 2) + i * Math.PI / 5, q = i % 2 ? R * 0.4 : R; d += (i ? 'L' : 'M') + (cx + q * Math.cos(a)).toFixed(2) + ' ' + (cy + q * Math.sin(a)).toFixed(2); } return `<path d="${d}Z" fill="#FFDE00"/>`; };
const FLAGS = {
  ja: '<rect width="30" height="20" fill="#FFFFFF"/><circle cx="15" cy="10" r="6" fill="#BC002D"/>',
  de: '<rect width="30" height="7" fill="#1A1A1A"/><rect y="7" width="30" height="6.5" fill="#DD0000"/><rect y="13.5" width="30" height="6.5" fill="#FFCE00"/>',
  zh: '<rect width="30" height="20" fill="#DE2910"/>' + flagStar(5.5, 5.5, 3.6, 0) + flagStar(11, 2.4, 1.2, 0.5) + flagStar(13, 4.8, 1.2, 0.2) + flagStar(13, 7.6, 1.2, 0) + flagStar(11, 10, 1.2, -0.3)
};
const flagSvg = (id, w) => `<svg class="flag" viewBox="0 0 30 20" width="${w || 24}" height="${Math.round((w || 24) * 2 / 3)}" role="img" aria-label="${esc((LANG_BY[id] || {}).name || 'Language')} flag"><clipPath id="fc${id}${w || 24}"><rect width="30" height="20" rx="3"/></clipPath><g clip-path="url(#fc${id}${w || 24})">${FLAGS[id] || '<rect width="30" height="20" fill="var(--soft)"/><path d="M0 14 L10 6 L16 12 L21 8 L30 15 V20 H0Z" fill="var(--line)"/>'}</g><rect width="30" height="20" rx="3" fill="none" stroke="var(--line)" stroke-width="1"/></svg>`;
const LANGS = [
  { id: 'ja', name: 'Japanese', native: '日本語', status: 'live', line: '--c-hira', note: 'Full course: kana, kanji, vocabulary, grammar, JLPT N5 and N4' },
  { id: 'de', name: 'German', native: 'Deutsch', status: 'soon', line: '--c-phrase', note: 'Coming soon' },
  { id: 'zh', name: 'Chinese', native: '中文', status: 'soon', line: '--c-kanji', note: 'Coming soon' },
  { id: 'es', name: 'Spanish', native: 'Español', status: 'later', line: '--c-kata' },
  { id: 'fr', name: 'French', native: 'Français', status: 'later', line: '--c-vocab' },
  { id: 'ko', name: 'Korean', native: '한국어', status: 'later', line: '--c-hira' },
  { id: 'it', name: 'Italian', native: 'Italiano', status: 'later', line: '--c-phrase' },
  { id: 'pt', name: 'Portuguese', native: 'Português', status: 'later', line: '--c-kanji' }
];
const LANG_BY = {}; LANGS.forEach(l => { LANG_BY[l.id] = l; });
const curLang = () => S.prof.lang || '';

function viewStart() {
  const cur = curLang(), env = window.APP_ENV || {};
  const acct = FX.user
    ? `<p class="lab">Signed in</p><div class="who">${avatar(S.prof, 44)}<div><b>${esc(fxName() || FX.user.name || 'You')}</b><br><span class="muted small">Your progress is saved to your account.</span></div></div>`
    : FX.status === 'checking' ? '<p class="muted">Checking for account support…</p>'
    : fxOn() ? `<p class="muted">Sign in to keep your progress, badges and friends on every device. You never have to.</p>
        <button class="btn lg gsign" data-act="signIn"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.5c2-1.9 3.4-4.7 3.4-8.1z"/><path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .6-2.2 1-3.7 1-2.8 0-5.2-1.9-6-4.5H2.4v2.8C4.2 20.5 7.8 23 12 23z"/><path fill="#FBBC05" d="M6 14.1c-.2-.6-.3-1.3-.3-2.1s.1-1.4.3-2.1V7.1H2.4C1.7 8.6 1.3 10.2 1.3 12s.4 3.4 1.1 4.9L6 14.1z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.400 2.200 15 1.200 12 1.200 7.800 1.200 4.200 3.700 2.400 7.100L6 9.900c.8-2.600 3.200-4.500 6-4.500z"/></svg>${env.preview ? 'Try the demo account' : 'Continue with Google'}</button>
        ${env.preview ? '<p class="muted small">Preview only: the demo account lives in this browser so you can try friends, usernames and the admin tools. The live site uses real Google sign-in.</p>' : ''}`
    : '<p class="muted">Account saving is not switched on for this copy of the site, so your progress stays on this device. Backup codes in your profile let you move it by hand.</p>';
  return `<section class="page start">
    <div class="startHero card"><div class="shText"><p class="eyebrow"><i class="dotc" style="--c:var(--c-hira)"></i>ようこそ · Welcome</p>
      <h1>日本に行きたい</h1><p class="sub">Learn the way you would ride a metro map: one line at a time. Pick a language, learn a little every day, and keep your streak alive. Signing in is optional.</p></div>
      <div class="shPanda">${pandaFull({ pose: 'wave', w: 150 })}</div></div>
    <div class="card"><h2>1 · Choose what you study</h2>
      <div class="langs" role="radiogroup" aria-label="Language">${LANGS.map(l => {
        const on = cur === l.id, can = l.status !== 'later';
        return `<button class="lang${on ? ' on' : ''}${can ? '' : ' off'}" style="--c:var(${l.line})" ${can ? `data-act="pickLang" data-id="${l.id}" role="radio" aria-checked="${on}"` : 'disabled aria-disabled="true"'}>
          <span class="lflag">${flagSvg(l.id, 34)}</span><span class="ltx"><b>${esc(l.name)}</b><span class="glyph">${esc(l.native)}</span><small>${l.status === 'live' ? 'Available now' : l.status === 'soon' ? 'Coming soon' : 'Later'}</small></span></button>`;
      }).join('')}</div>
      <p class="muted small">German and Chinese can be chosen now so your friends see your flag. Their lessons are still being built. The other languages are planned for later updates.</p></div>
    <div class="cols2"><div class="card"><h2>2 · Save your progress <span class="muted small">optional</span></h2>${acct}</div>
      <div class="card go2"><h2>3 · Start</h2><p class="muted">${cur ? 'You are learning <b>' + esc(LANG_BY[cur].name) + '</b>.' : 'Pick a language above to begin.'}</p>
        <button class="btn lg" data-act="startGo" ${cur ? '' : 'disabled'}>${cur === 'ja' || !cur ? 'Start learning' : 'Continue'}</button>
        ${FX.user ? '' : '<p class="muted small">No account needed. Guest progress stays in this browser.</p>'}</div></div>
  </section>`;
}
ACT.pickLang = el => { if (!location.hash || location.hash === '#') location.hash = 'start'; S.prof.lang = el.dataset.id; save(); if (FX.profile) fxPush(); render(); };
ACT.startGo = () => { go('today'); };

function viewSoon() {
  const l = LANG_BY[curLang()] || LANG_BY.ja;
  return `<section class="page"><div class="card soon">${pandaFull({ pose: 'sleep', w: 130 })}<div><p class="eyebrow"><i class="dotc" style="--c:var(${l.line})"></i>${esc(l.native)} · Coming soon</p>
    <h1>${esc(l.name)} is still being built</h1><p class="sub">The ${esc(l.name)} course is not ready yet, so there is nothing to study here for now. Your profile already shows the ${flagSvg(l.id, 22)} flag next to your name, and your friends can see it.</p>
    <div class="row"><button class="btn" data-act="pickLang" data-id="ja">Study Japanese instead</button><a class="btn ghost" href="#profile">Open my profile</a><a class="btn ghost" href="#start">Change language</a></div></div></div></section>`;
}
