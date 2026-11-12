/* ============ MASCOT ============
   The face, ears, hair and ring come from the supplied artwork (traced to vector, see panda-art.js).
   The body below the head is drawn here in the same style: black outline, dark coat, red accents. */
const PK = '#0a0206', PCOAT = '#1b1015', PGREY = '#8f7d83', PRED = '#c8141c', PFUR = '#b93b22', PFURD = '#7b1713', PCREAM = '#f2dcd6';
/* the head art occupies roughly x 65..625, y 75..600 of its 700 box */
const HEAD_BOX = { x: 65, y: 75, w: 560, h: 525 };

/* One copy of the art lives in a hidden sprite; every logo, avatar and pose refers to it with <use>. */
function pandaSprite() {
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
    <g id="pHead">${PANDA_ART.head}</g><g id="pRing">${PANDA_ART.ring}</g></defs></svg>`;
}
/* round logo: dark disc, red ring and sparkles, the head (as in the artwork) */
function pandaMark(px) {
  return `<svg class="pmark" viewBox="0 0 700 700" width="${px || 40}" height="${px || 40}" role="img" aria-label="Red panda logo"><circle cx="350" cy="350" r="350" fill="${PANDA_ART.base}"/><use href="#pRing"/><use href="#pHead"/></svg>`;
}
/* content for a 200-unit avatar circle (see avatar() in profile.js) */
function pandaHeadInner() {
  const s = 0.285, tx = 100 - (HEAD_BOX.x + HEAD_BOX.w / 2) * s, ty = 104 - (HEAD_BOX.y + HEAD_BOX.h / 2) * s;
  return `<circle cx="100" cy="100" r="100" fill="${PANDA_ART.base}"/><use href="#pHead" transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s})"/>`;
}

/* limbs are two strokes: a black one under a coloured one, so every limb has the outline */
const limb = (d, w, c) => `<path d="${d}" fill="none" stroke="${PK}" stroke-width="${w + 7}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const paw = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${PFUR}" stroke="${PK}" stroke-width="3.5"/><circle cx="${x}" cy="${y + r * 0.25}" r="${r * 0.45}" fill="${PCREAM}"/>`;

function pandaFull(o) {
  o = o || {}; const pose = o.pose || 'stand', w = o.w || 160, h = Math.round(w * 1.3);
  const s = 0.36, tx = 150 - (HEAD_BOX.x + HEAD_BOX.w / 2) * s, ty = 2 - HEAD_BOX.y * s;
  const tilt = pose === 'sleep' ? 'rotate(7 150 120)' : pose === 'think' ? 'rotate(-3 150 120)' : '';
  const TP = 'M170 292 C256 312 298 248 278 182 C266 148 236 156 240 184 C248 218 232 258 176 266 Z';
  const tail = `<defs><clipPath id="ptc${pose}"><path d="${TP}"/></clipPath></defs>
    <path d="${TP}" fill="${PFUR}" stroke="${PK}" stroke-width="4" stroke-linejoin="round"/>
    <g clip-path="url(#ptc${pose})"><path d="M212 320 L194 246 M234 316 L220 220 M256 300 L250 190 M278 280 L280 170" stroke="${PFURD}" stroke-width="14" fill="none"/><path d="M258 198 L300 156 L300 134 L236 134 Z" fill="${PCREAM}"/></g>
    <path d="${TP}" fill="none" stroke="${PK}" stroke-width="4" stroke-linejoin="round"/>`;
  const legs = limb('M133 302 L131 344', 25, PCOAT) + limb('M167 302 L169 344', 25, PCOAT)
    + `<ellipse cx="127" cy="352" rx="22" ry="11" fill="${PK}"/><ellipse cx="173" cy="352" rx="22" ry="11" fill="${PK}"/><ellipse cx="123" cy="350" rx="11" ry="5" fill="${PFURD}"/><ellipse cx="177" cy="350" rx="11" ry="5" fill="${PFURD}"/>`;
  const torso = `<path d="M112 186 Q150 176 188 186 L202 298 Q150 312 98 298 Z" fill="${PCOAT}" stroke="${PK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M143 186 L150 302 L157 186 Z" fill="${PGREY}" stroke="${PK}" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M100 250 Q150 264 200 250 L201 268 Q150 282 99 268 Z" fill="${PRED}" stroke="${PK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M150 246 l9 14 l-9 14 l-9 -14 Z" fill="${PCREAM}" stroke="${PK}" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M98 298 Q150 312 202 298 L200 310 Q150 324 100 310 Z" fill="${PRED}" stroke="${PK}" stroke-width="3" stroke-linejoin="round"/>`;
  const L = { stand: 'M116 202 Q98 234 94 272', wave: 'M116 202 Q98 234 94 272', cheer: 'M116 202 Q84 180 70 128', think: 'M116 202 Q98 234 94 272', sleep: 'M116 202 Q100 232 102 268' };
  const R = { stand: 'M184 202 Q202 234 206 272', wave: 'M184 202 Q224 192 240 140', cheer: 'M184 202 Q216 180 230 128', think: 'M184 202 Q200 182 168 178', sleep: 'M184 202 Q200 232 198 268' };
  const end = d => { const m = d.match(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)$/); return [+m[1], +m[2]]; };
  const le = end(L[pose]), re = end(R[pose]);
  const cuff = p => `<circle cx="${p[0]}" cy="${p[1]}" r="12.5" fill="${PGREY}" stroke="${PK}" stroke-width="3"/>`;
  const arms = limb(L[pose], 25, PCOAT) + limb(R[pose], 25, PCOAT) + cuff(le) + cuff(re);
  const front = paw(le[0], le[1] + 2, 12) + paw(re[0], re[1] + (pose === 'think' ? -2 : 2), 12);
  const zz = pose === 'sleep' ? `<text x="238" y="62" font-family="var(--f-disp),serif" font-weight="700" font-size="30" fill="var(--ink)">Z</text><text x="262" y="36" font-family="var(--f-disp),serif" font-weight="700" font-size="22" fill="var(--muted)">z</text><text x="278" y="18" font-family="var(--f-disp),serif" font-weight="700" font-size="16" fill="var(--muted)">z</text>` : '';
  const spark = pose === 'cheer' ? [[34, 90], [268, 90], [150, 7]].map(p => `<path d="M${p[0]} ${p[1] - 9} l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 Z" fill="${PRED}" stroke="${PK}" stroke-width="1.4" stroke-linejoin="round"/>`).join('') : '';
  return `<svg class="pfull" viewBox="0 0 300 390" width="${w}" height="${h}" role="img" aria-label="Red panda mascot"><ellipse cx="150" cy="372" rx="80" ry="9" fill="var(--ink)" opacity=".14"/>
    <g>${tail}${legs}${torso}${arms}<g transform="${tilt}"><g transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s})"><use href="#pHead"/></g></g>${front}${zz}${spark}</g></svg>`;
}
