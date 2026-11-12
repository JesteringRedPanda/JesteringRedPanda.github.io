# How to update without rewriting everything

## What the project looks like
The site is split into small files, one topic each, and `build.py` joins them into `docs/` (what GitHub Pages serves):

| File | Contents |
|---|---|
| `data.js`, `data-n4.js` | kana, kanji, vocabulary, phrases, lessons (N5 + N4) |
| `core.js` | saving, XP, streak, routing |
| `badges.js` | the badge icons and rules |
| `mascot.js`, `panda-art.js` | the red panda |
| `sync.js`, `fb-bridge.js`, `fb-demo.js` | account layer (Firebase / demo / guest) |
| `lang.js` | start page, language list, flags |
| `profile.js`, `admin.js` | Profile tabs and Admin tools |
| `games.js`, `games2.js`, `quizzes.js`, `strokes.js` | minigames, quotes/songs, stroke order |
| `dex.js`, `study.js`, `home.js`, `main.js` | the other pages |
| `style.css`, `index.src.html` | the design (do not change without asking) |

## Workflow that saves the most effort
1. Keep the project in your GitHub repository. Every change is one commit, so nothing is ever lost.
2. For a new feature, start a new chat with Claude Code attached to the repo (or upload the zip) and say what you want.
   Claude reads only the files it needs and edits them, then you receive **only the changed files** (or a diff).
3. Run `python3 build.py`, commit, push. Pages updates in about a minute.
4. Ask Claude to add a line to `CHANGELOG.md` for each change, so the next session knows what exists.

## Adding things without Claude
- Quotes and songs: Profile > Admin (no code).
- A new German/Chinese course: add `data-de.js` / `data-zh.js` with the same shape as `data.js`, and Claude wires it up in one small change.
