"""Builds two outputs.
  docs/        multi-file site for GitHub Pages (real Firebase, no demo backend)
  nihon.html   single-file preview (demo backend, no Firebase) used for the Artifact and for tests
"""
import os, sys, shutil
d = os.path.dirname(os.path.abspath(__file__)) + '/'
rd = lambda f: open(d + f, encoding='utf8').read()
tpl, css = rd('index.src.html'), rd('style.css')
CORE = ['data-n4.js', 'data.js', 'core.js', 'panda-art.js', 'mascot.js', 'badges.js', 'sync.js']
REST = ['lang.js', 'profile.js', 'games.js', 'quizzes.js', 'games2.js', 'strokes.js', 'admin.js', 'dex.js', 'study.js', 'home.js', 'main.js']
def bundle(mods, pre=''):
    js = "'use strict';\n" + pre + '\n'.join(rd(f) for f in mods)
    if '</script' in js.lower(): sys.exit('script contains a closing tag')
    return js
def page(js, head=''):
    return tpl.replace('/*CSS*/', css).replace('/*JS*/', js).replace('<style>', head + '<style>', 1)

# preview: demo backend
pre = "window.APP_ENV = {preview: true, embed: false};\n"
prev = bundle(CORE + ['fb-demo.js'] + REST, pre)
pass
out = page(prev); open(d + 'nihon.html', 'w', encoding='utf8').write(out); print('preview', len(out), 'bytes')

# GitHub Pages build
dist = d + 'docs/'
shutil.rmtree(dist, ignore_errors=True); os.makedirs(dist)
js = bundle(CORE + REST, "window.APP_ENV = {preview: false, embed: true};\n")
open(dist + 'app.js', 'w', encoding='utf8').write(js)
open(dist + 'style.css', 'w', encoding='utf8').write(css)
for f in ['firebase-config.js', 'fb-bridge.js']:
    shutil.copy(d + f, dist + f)
html = tpl.replace('<style>\n/*CSS*/\n</style>', '<link rel="stylesheet" href="style.css">')
html = html.replace('<script>\n/*JS*/\n</script>', '<script src="firebase-config.js"></script>\n<script src="app.js"></script>\n<script type="module" src="fb-bridge.js"></script>')
i = html.index('<div id="app">')
SKEL = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>:root{color-scheme:light}html{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n'
html = SKEL + html[:i] + '</head>\n<body>\n' + html[i:] + '\n</body>\n</html>\n'
html = html.replace('<script src="app.js">', '<script src="app.js" charset="utf-8">')
open(dist + 'index.html', 'w', encoding='utf8').write(html)
open(dist + '.nojekyll', 'w').write('')
print('dist', sorted(os.listdir(dist)))
