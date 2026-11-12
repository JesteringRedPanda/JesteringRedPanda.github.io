# Setup: accounts, friends and admin (about 15 minutes, free)

The site works without any of this (guest mode, progress saved in the browser). Do these steps only to switch on
Google sign-in, cloud-saved progress, usernames, friends and the Admin tab.

## 1. Put the site on GitHub Pages
1. Create a GitHub repository and upload everything in this folder (keep the `docs/` folder).
2. Repository **Settings > Pages**: Source = *Deploy from a branch*, Branch = `main`, Folder = `/docs`. Save.
3. Your site will be at `https://<your-user>.github.io/<repo>/`.

## 2. Create the Firebase project
1. Go to https://console.firebase.google.com and **Add project** (Analytics not needed).
2. **Build > Authentication > Get started > Sign-in method > Google > Enable**.
3. **Authentication > Settings > Authorized domains > Add domain**: `<your-user>.github.io`.
4. **Build > Firestore Database > Create database** (production mode, any region).
5. **Firestore > Rules**: paste the whole content of `firestore.rules`, then **Publish**.
6. **Project settings (gear) > Your apps > Web (`</>`)**: register an app and copy the `firebaseConfig` values.

## 3. Connect the site
Open `firebase-config.js` and replace `window.FIREBASE_CONFIG = null;` with your values:

```js
window.FIREBASE_CONFIG = {
  apiKey: "…", authDomain: "your-project.firebaseapp.com", projectId: "your-project",
  storageBucket: "your-project.appspot.com", messagingSenderId: "…", appId: "…"
};
```
Save the same file in **both** the repo root and `docs/`, commit, wait about a minute. The Firebase web config is not a secret;
the security comes from the rules.

## 4. Make yourself admin
1. Open your site and sign in with Google once (create your username).
2. Profile > Settings > Account: copy your **User ID**.
3. Firebase console > Firestore > **Start collection** `admins` > Document ID = your User ID > add any field (for example `ok: true`) > Save.
4. Reload the site. A new **Admin** tab appears in your Profile. To add another admin, add another document.

In the Admin tab you can: set a news banner, pin the word of the day, switch games on or off, hide built-in quotes or songs,
and add, edit or delete anime quotes and songs (paste a YouTube link) without touching code.

## Things to know
- **Songs:** only songs with a YouTube link are playable. 8 are included. Add more in Admin. Some music labels block embedding; the game then offers an "Open on YouTube" link.
- **Stroke order** loads from the KanjiVG project on first view of each character (needs internet) and is remembered on the device.
- **Lyrics:** the site does not contain song lyrics or anime audio (copyright). Quotes are short catchphrases only; keep it that way when adding your own.
- **Friends' stats** (level, streak, XP) are reported by each player's own browser, so treat them as friendly, not tamper-proof.
- **Free-tier limits** (Spark plan) are far above what a small community needs.
