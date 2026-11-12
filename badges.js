/* ============ BADGES: custom SVG icons (drawn for this site) ============ */
const BS = '#1B1630';
const bp = (d, f, w) => `<path d="${d}" fill="${f}" stroke="${BS}" stroke-width="${w || 2}" stroke-linejoin="round" stroke-linecap="round"/>`;
const bl = (d, w, c) => `<path d="${d}" fill="none" stroke="${c || BS}" stroke-width="${w || 2}" stroke-linecap="round" stroke-linejoin="round"/>`;
const bc = (x, y, r, f, w) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${BS}" stroke-width="${w == null ? 2 : w}"/>`;
const br = (x, y, w, h, r, f) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" stroke="${BS}" stroke-width="2"/>`;
const bt = (x, y, t, s, f, st) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Shippori Mincho B1','Hiragino Mincho ProN','Yu Mincho',serif" font-weight="700" font-size="${s}" fill="${f || BS}"${st ? ` stroke="${BS}" stroke-width="1.4" paint-order="stroke"` : ''}>${t}</text>`;
const eyes = (x1, x2, y, r) => bc(x1, y, r || 1.7, BS, 0) + bc(x2, y, r || 1.7, BS, 0);
const star5 = (cx, cy, R, r, f) => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r : R; d += (i ? 'L' : 'M') + (cx + q * Math.cos(a)).toFixed(1) + ' ' + (cy + q * Math.sin(a)).toFixed(1); } return bp(d + 'Z', f, 1.6); };

const ICON = {
  first: bp('M32 12 C37 12 51 38 51 43 C51 48 47 51 42 51 L22 51 C17 51 13 48 13 43 C13 38 27 12 32 12 Z', '#FFFDF8') + bp('M19 41 L45 41 L49 48 C49 50 47 52 44 52 L20 52 C17 52 15 50 15 48 Z', '#23402F') + eyes(27, 37, 28, 1.8) + bl('M27.5 33 Q32 38 36.5 33', 1.8) + bp('M45 20 q4 -2 6 2 q-3 3 -6 -2 Z', '#FFFDF8', 1.4),
  goal1: bc(32, 32, 19, '#FFFFFF') + bc(32, 32, 13, '#D7413F') + bc(32, 32, 7, '#FFFFFF') + bc(32, 32, 3, '#D7413F') + bl('M32 32 L50 14', 2.4) + bp('M46 10 L54 10 L54 18 L51 15 Z', '#E8860C', 1.6),
  s3: bp('M12 30 H52 C52 43 43 52 32 52 C21 52 12 43 12 30 Z', '#E8860C') + bl('M16 36 H48', 1.6, '#FFD9A3') + bl('M22 24 q-4 -5 0 -9 q4 -4 0 -8 M32 24 q-4 -5 0 -9 q4 -4 0 -8 M42 24 q-4 -5 0 -9 q4 -4 0 -8', 2.4) + eyes(26, 38, 41, 1.6) + bl('M29 45 Q32 47 35 45', 1.6),
  s7: bp('M32 5 C37 13 45 17 43 26 C41 32 35 32 32 28 C29 32 23 32 21 26 C19 17 27 13 32 5 Z', '#FFB02E') + bp('M32 14 C34 19 38 21 37 25 C36 28 33 28 32 26 C31 28 28 28 27 25 C26 21 30 19 32 14 Z', '#FF5A3C', 1.4) + bp('M12 33 H52 C52 44 43 53 32 53 C21 53 12 44 12 33 Z', '#D7413F') + bl('M16 38 q4 3 8 0 t8 0 t8 0 t8 0', 2, '#FFE2A8') + bc(40, 46, 3.4, '#FFFDF8', 1.4) + bl('M44 33 L56 18 M48 34 L58 22', 2.2),
  s14: br(10, 26, 44, 7, 3, '#B9482A') + bp('M12 33 H52 L56 52 H8 Z', '#D7413F') + bl('M16 40 H48 M14 46 H50', 1.5, '#F59A94') + bc(24, 38, 0.1, BS, 0) + bp('M20 44 H44 V52 H20 Z', '#2B1F33', 1.6) + bc(27, 47, 1.7, '#FFE08A', 0) + bc(37, 47, 1.7, '#FFE08A', 0) + bt(48, 20, 'z', 11, BS) + bt(54, 13, 'Z', 8, BS),
  s30: bp('M6 41 C6 30 14 24 28 24 H49 C54 24 58 34 58 41 Z', '#FFFFFF') + bp('M6 41 C6 38 8 36 10 36 H58 V41 Z', '#0A8FC1', 1.8) + br(28, 28, 5, 5, 1, '#9CD8F0') + br(36, 28, 5, 5, 1, '#9CD8F0') + br(44, 28, 5, 5, 1, '#9CD8F0') + bp('M9 33 L18 28 C14 28 10 30 9 33Z', '#9CD8F0', 1.4) + bc(18, 46, 3.4, '#8A93A8') + bc(36, 46, 3.4, '#8A93A8') + bc(50, 46, 3.4, '#8A93A8') + bl('M4 50 H16 M2 55 H22', 2, '#0A8FC1'),
  s100: bc(32, 33, 19, '#2A2535') + bp('M13 30 H51 V39 H13 Z', '#F5D6B8') + eyes(25, 39, 34.5, 2) + bp('M11 20 H53 V27 H11 Z', '#D7413F') + bp('M50 21 L60 15 L56 26 Z', '#D7413F', 1.6) + bp('M52 25 L60 30 L53 31 Z', '#D7413F', 1.6) + bp('M32 21 l0 6', 'none', 1) + bc(32, 23.5, 3, '#C9CED8', 1.2),
  hira10: bc(32, 27, 14, '#FFD43B') + bp('M28 32 L36 32 L32 38 Z', '#FF8A1F', 1.6) + eyes(26, 38, 25, 1.9) + bp('M26 12 q-2 -6 2 -6 M32 11 q0 -6 3 -5', 'none', 1.8) + bp('M13 40 L21 35 L26 41 L32 35 L38 41 L43 35 L51 40 L48 54 L16 54 Z', '#FFFFFF') + bt(32, 51, 'あ', 14, '#E8860C'),
  hall: bp('M18 14 L46 14 L56 54 L8 54 Z', '#D7413F') + bt(32, 46, 'あ', 36, '#E8860C', 1) + bp('M18 18 Q32 10 46 18 L44 25 Q32 20 20 25 Z', '#1B1630', 1.6) + bc(26, 21, 1.6, '#FFFFFF', 0) + bc(38, 21, 1.6, '#FFFFFF', 0),
  kall: bp('M13 30 L17 12 L26 22 L32 9 L38 22 L47 12 L51 30 Z', '#FFC83D') + br(13, 30, 38, 6, 2, '#E8A413') + bc(17, 12, 2.3, '#D7413F') + bc(32, 9, 2.3, '#D7413F') + bc(47, 12, 2.3, '#D7413F') + bt(32, 55, 'カ', 22, '#0A8FC1', 1),
  kj25: bl('M44 44 L56 58', 4) + bc(34, 28, 18, 'none', 3) + bl('M18 22 L50 34 M16 30 L48 42 M22 14 L40 46 M32 10 L46 38 M24 36 L36 44', 1, '#9AA0B5') + bt(34, 36, '字', 20, '#7A5BD6'),
  kj60: br(16, 10, 32, 42, 4, '#1F3A6E') + bc(32, 26, 9, 'none', 2.2) + bl('M23 26 H41 M32 17 C27 22 27 30 32 35 C37 30 37 22 32 17', 1.6, '#FFC83D') + br(21, 41, 22, 4, 1, '#FFC83D') + bc(42, 44, 11, 'rgba(255,255,255,.6)', 2.2) + bt(42, 49, '済', 13, '#D7413F'),
  kj150: bl('M45 8 L22 40', 5) + bp('M20 38 Q14 42 12 52 Q22 52 26 44 Z', '#1B1630') + bl('M44 9 L41 14', 6, '#B9482A') + bl('M17 18 A17 17 0 1 0 38 51', 4.6) + br(42, 40, 11, 11, 1, '#D7413F') + bt(47.5, 49, '極', 9, '#FFFFFF'),
  v50: bp('M10 32 H54 V52 H10 Z', '#B9482A') + bp('M10 32 C10 20 54 20 54 32 Z', '#D9803F') + br(27, 30, 10, 8, 2, '#FFC83D') + bt(22, 20, 'あ', 11, '#7A5BD6') + bt(34, 14, '語', 11, '#1C9A55') + bt(45, 20, 'ア', 10, '#0A8FC1') + bl('M10 40 H54', 1.6, '#7A2D14'),
  v200: br(18, 10, 28, 34, 3, '#1C9A55') + br(18, 10, 5, 34, 2, '#14703E') + eyes(31, 41, 22, 2.4) + bl('M32 30 Q36 34 40 30', 2) + bl('M24 44 L22 54 M40 44 L42 54', 3) + bp('M16 55 H25 M39 55 H48', 'none', 3) + bt(34, 18, '辞', 7, '#FFFFFF'),
  ph: bp('M16 22 H48 L45 54 H19 Z', '#FFFFFF') + bl('M24 22 V16 C24 10 40 10 40 16 V22', 2.4) + br(22, 30, 9, 15, 3, '#0A8FC1') + bp('M39 30 L45 44 L33 44 Z', '#F8F4EA', 1.6) + bp('M33 42 L45 42 L45 46 L33 46 Z', '#23402F', 1.2) + bt(32, 27, 'OPEN', 5, '#D7413F') + bc(50, 14, 5, '#FFC83D', 1.6),
  xp500: bp('M10 38 C10 30 54 30 54 38 C54 48 46 52 32 52 C18 52 10 48 10 38 Z', '#FFFFFF') + bp('M8 28 C8 20 56 20 56 28 C56 38 44 41 32 41 C20 41 8 38 8 28 Z', '#FF7A59') + bl('M16 25 Q32 21 48 25 M15 30 Q32 26 49 30', 1.6, '#FFC2B0') + bp('M25 30 H39 V42 H25 Z', '#23402F', 1.6) + bl('M10 46 H54', 1.4, '#C9CED8'),
  xp2000: bc(46, 16, 6, '#D7413F') + bp('M4 54 L26 14 Q32 6 38 14 L60 54 Z', '#4A6FD6') + bp('M20 26 L26 14 Q32 6 38 14 L44 26 L38 22 L32 28 L26 22 Z', '#FFFFFF') + bt(32, 49, 'XP', 12, '#FFFFFF', 1) + bl('M6 54 H58', 3),
  g5: bp('M9 36 C9 27 16 24 23 24 H41 C48 24 55 27 55 36 C55 46 50 52 45 52 C40 52 39 46 32 46 C25 46 24 52 19 52 C14 52 9 46 9 36 Z', '#7A5BD6') + bp('M12 26 L9 12 L22 22 Z', '#1C9A55', 1.8) + bp('M52 26 L55 12 L42 22 Z', '#1C9A55', 1.8) + bl('M21 31 V41 M16 36 H26', 3, '#FFFFFF') + bc(41, 33, 2.8, '#FFC83D', 1.4) + bc(47, 38, 2.8, '#D7413F', 1.4) + bc(30, 31, 1.6, '#FFFFFF', 0) + bc(36, 31, 1.6, '#FFFFFF', 0),
  perf: bc(32, 27, 20, '#D7413F') + bt(32, 36, '完', 26, '#FFFFFF') + br(26, 46, 12, 8, 2, '#8A5A3A') + bl('M16 20 l-3 -4 M48 20 l3 -4 M32 5 v-3', 2),
  les5: bp('M6 26 L32 14 L58 26 L32 38 Z', '#2B3E6E') + bp('M16 32 V42 C22 48 42 48 48 42 V32 L32 39 Z', '#3A5290') + bl('M54 28 V42', 2.4) + bc(54, 45, 3, '#FFC83D', 1.6) + bt(32, 31, '先', 9, '#FFFFFF'),
  lv5: bp('M14 20 L18 8 L28 16 Z', '#B9482A', 1.8) + bp('M50 20 L46 8 L36 16 Z', '#B9482A', 1.8) + bc(32, 32, 19, '#B9482A') + bp('M20 38 C22 50 42 50 44 38 C40 33 24 33 20 38 Z', '#F8E4D8', 1.6) + eyes(25, 39, 30, 2) + bp('M29 38 H35 L32 42 Z', '#1B1630', 1) + bc(49, 49, 9, '#FFC83D', 2) + bt(49, 54, '5', 13, BS),
  lv10: [0, 72, 144, 216, 288].map(a => bp('M32 32 C26 24 26 14 32 10 C38 14 38 24 32 32 Z', '#FFB3C7', 1.6).replace('<path', `<path transform="rotate(${a} 32 32)"`)).join('') + bc(32, 32, 9, '#FFF1F5', 1.6) + bt(32, 37, '10', 12, '#D7413F'),
  m100: bc(32, 32, 22, '#FFC83D') + bc(32, 32, 16, 'none', 1.6) + br(26, 26, 12, 12, 1, '#EEF1F6') + bt(32, 21.5, '百', 9, BS) + bt(32, 51, '円', 9, BS),
  night: bp('M44 8 A21 21 0 1 0 54 36 A17 17 0 0 1 44 8 Z', '#FFE08A') + bp('M12 40 H44 C44 50 38 56 28 56 C18 56 12 50 12 40 Z', '#D7413F') + bc(21, 36, 5, '#FFFFFF', 1.6) + bc(35, 36, 5, '#FFFFFF', 1.6) + bc(21, 36, 1.8, BS, 0) + bc(35, 36, 1.8, BS, 0) + bp('M26 38 L30 38 L28 41 Z', '#FF8A1F', 1.2) + star5(50, 48, 4, 1.8, '#FFE08A'),
  early: bp('M8 46 A24 24 0 0 1 56 46 Z', '#FFC83D') + bl('M32 14 V8 M12 22 L8 18 M52 22 L56 18 M4 38 H0 M60 38 H64', 2.4, '#E8860C') + bp('M22 54 C22 44 26 38 32 38 C38 38 42 44 42 54 Z', '#FFFDF8') + bp('M24 50 H40 V54 H24 Z', '#23402F', 1.4) + eyes(29, 35, 44, 1.5) + bp('M42 36 l7 -2 l-3 5 Z', '#FF8A1F', 1.2),
  comeback: bp('M10 42 Q30 4 54 24 Q58 28 52 28 Q34 20 20 40 Q16 46 10 42 Z', '#FFC83D') + bl('M12 50 Q36 62 56 40', 2.2, '#7A5BD6').replace('fill="none"', 'fill="none" stroke-dasharray="4 4"') + bp('M52 36 L58 42 L48 44 Z', '#7A5BD6', 1.6) + eyes(30, 38, 24, 1.4),
  n4: bp('M16 30 H48 V54 H16 Z', '#FFC83D') + bl('M22 30 V20 C22 8 42 8 42 18', 4) + bc(32, 38, 3.4, BS, 0) + bl('M32 40 V45', 2.4) + bt(32, 52, 'N4', 8, BS),
  n4g: br(12, 14, 40, 36, 4, '#F6E7C8') + bl('M12 20 H52 M12 44 H52', 1.6, '#B9482A') + bp('M32 22 L35 30 L43 32 L35 34 L32 42 L29 34 L21 32 L29 30 Z', '#2A2535', 1.6) + bc(32, 32, 2.2, '#F6E7C8', 0) + bp('M8 12 Q12 12 12 16 V46 Q12 50 8 50', 'none', 2.4) + bp('M56 12 Q52 12 52 16 V46 Q52 50 56 50', 'none', 2.4),
  dojo: bl('M32 10 V54', 5) + bl('M14 32 H50', 5) + bc(32, 8, 5, '#D7413F', 1.4) + bt(32, 12, '1', 8, '#FFFFFF') + bc(10, 32, 5, '#D7413F', 1.4) + bt(10, 35.5, '2', 8, '#FFFFFF') + bl('M26 10 L20 14 M16 26 L18 30', 1.6, '#D7413F') + bp('M44 44 Q58 40 56 52 Q50 58 44 52 Z', '#1B1630', 1.6),
  quote: bp('M8 12 H56 V40 H34 L24 52 V40 H8 Z', '#FFFFFF') + star5(22, 26, 7, 3, '#FFC83D') + star5(42, 26, 7, 3, '#FFC83D') + bl('M24 34 Q32 40 40 34', 2.2) + bc(50, 50, 7, '#D7413F', 1.8) + bl('M46 56 L44 62 L50 58 L56 62 L54 56', 1.6),
  song: bc(30, 20, 11, '#FFC83D') + bl('M22 14 L38 26 M20 20 L34 30', 1.2, '#E8A413') + bp('M27 30 L33 30 L36 54 L24 54 Z', '#2A2535') + bl('M43 12 V28', 2.4) + bc(40.5, 29, 3.4, BS, 0) + bl('M43 12 Q50 14 50 20', 2.4) + bl('M50 36 V50', 2.4) + bc(47.5, 51, 3.4, BS, 0),
  friend: [[-14, 24], [14, 40]].map(a => '<g transform="rotate(' + a[0] + ' ' + (a[0] < 0 ? 22 : 42) + ' 40)">' + br(a[0] < 0 ? 15 : 35, 26, 14, 20, 6, a[0] < 0 ? '#F5C9A6' : '#E9B48A') + [0, 1, 2, 3].map(i => br((a[0] < 0 ? 15 : 35) + i * 3.5, 14 + (i === 1 || i === 2 ? -2 : 0), 3.2, 14, 1.6, a[0] < 0 ? '#F5C9A6' : '#E9B48A')).join('') + '</g>').join('') + star5(32, 12, 6, 2.6, '#FFC83D') + bl('M28 24 L24 18 M36 24 L40 18', 2),
  signed: bp('M16 44 C6 44 6 28 18 28 C20 16 40 14 44 28 C58 26 58 44 46 44 Z', '#BFE6F7') + bl('M24 34 L30 40 L42 26', 4, '#1C9A55') + br(24, 48, 16, 9, 2, '#D7413F') + bt(32, 55.5, '印', 8, '#FFFFFF'),
  renamed: bc(32, 34, 19, '#F5D6B8') + bp('M12 28 C14 12 50 12 52 28 C46 20 18 20 12 28 Z', '#3A2A20', 1.6) + bc(24, 32, 6, 'rgba(255,255,255,.7)', 2) + bc(40, 32, 6, 'rgba(255,255,255,.7)', 2) + bl('M30 32 H34', 2) + bc(24, 32, 1.6, BS, 0) + bc(40, 32, 1.6, BS, 0) + bp('M20 44 Q26 38 32 42 Q38 38 44 44 Q38 48 32 45 Q26 48 20 44 Z', '#3A2A20', 1.6) + bp('M30 36 L32 40 L34 36 Z', '#E9A27A', 1.2),
  mock: br(12, 8, 34, 46, 3, '#FFFFFF') + bl('M18 18 H40 M18 25 H40 M18 32 H32', 2) + bp('M40 40 L54 26 L58 30 L44 44 L38 46 Z', '#FFC83D', 1.8) + bc(40, 46, 9, 'none', 2.2).replace('stroke="#1B1630"', 'stroke="#D7413F"') + bt(40, 49.5, '合', 10, '#D7413F')
};
const mk = (id, name, desc, test) => ({ id, name, desc, test, icon: ICON[id] || '' });
const ACH = [
  mk('first', 'First Bite', 'Answer your first question. The rice ball approves.', () => S.tot.all >= 1),
  mk('goal1', 'Bullseye', 'Hit your daily XP goal for the first time.', () => Object.keys(S.days).some(k => S.days[k].met)),
  mk('s3', 'Warm Broth', 'Reach a 3 day streak. Still simmering.', () => streak() >= 3),
  mk('s7', 'Ramen Hot Streak', 'Reach a 7 day streak. Something is definitely on fire.', () => streak() >= 7),
  mk('s14', 'Kotatsu Commitment', 'Reach a 14 day streak. You cannot leave the blanket now.', () => streak() >= 14),
  mk('s30', 'Bullet Train Brain', 'Reach a 30 day streak. Delays: none.', () => streak() >= 30),
  mk('s100', 'Immortal Ninja', 'Reach a 100 day streak. Nobody has seen you miss a day.', () => streak() >= 100),
  mk('hira10', 'Hiragana Hatchling', 'Start learning 10 hiragana.', () => cnt('hira', 1) >= 10),
  mk('hall', 'Hiragana Hero', 'Master all 46 basic hiragana. Cape included.', () => KANA.filter(i => i.type === 'h' && i.group === 'basic').every(i => lvl(i.id) >= 3)),
  mk('kall', 'Katakana Royalty', 'Master all 46 basic katakana. All bow.', () => KANA.filter(i => i.type === 'k' && i.group === 'basic').every(i => lvl(i.id) >= 3)),
  mk('kj25', 'Kanji Collector', 'Start learning 25 kanji. Gotta catch them all.', () => cnt('kanji', 1) >= 25),
  mk('kj60', 'Passport Stamped', 'Start learning 60 kanji.', () => cnt('kanji', 1) >= 60),
  mk('kj150', 'Brush Master', 'Start learning 150 kanji.', () => cnt('kanji', 1) >= 150),
  mk('v50', 'Word Hoarder', 'Start learning 50 words. The dragon is jealous.', () => cnt('vocab', 1) >= 50),
  mk('v200', 'Walking Dictionary', 'Start learning 200 words.', () => cnt('vocab', 1) >= 200),
  mk('ph', 'Konbini Survivor', 'Learn all 20 travel phrases. Bag, please? No, thank you.', () => cnt('phrase', 1) >= 20),
  mk('xp500', 'Sushi Roller', 'Earn 500 XP in total.', () => S.xp >= 500),
  mk('xp2000', 'Mount Fuji XP', 'Earn 2000 XP in total. The view is great.', () => S.xp >= 2000),
  mk('g5', 'Arcade Gremlin', 'Finish 5 minigames. Touch grass later.', () => S.games >= 5),
  mk('perf', 'Flawless Hanko', 'Score 100% on a quiz. Stamp of approval.', () => S.perfect >= 1),
  mk('les5', 'Teacher’s Pet', 'Finish 5 lessons.', () => Object.keys(S.lessons).length >= 5),
  mk('lv5', 'Level 5 Panda', 'Reach level 5.', () => levelInfo().l >= 5),
  mk('lv10', 'Sakura Level 10', 'Reach level 10. Petals everywhere.', () => levelInfo().l >= 10),
  mk('m100', 'Hundred Club', 'Master 100 items.', () => ALL.filter(i => lvl(i.id) === 3).length >= 100),
  mk('night', 'Midnight Ramen Owl', 'Earn XP between midnight and 5 am. Sleep is optional.', () => S.flags.night > 0),
  mk('early', 'Early Bird Onigiri', 'Earn XP between 5 and 7 am.', () => S.flags.early > 0),
  mk('comeback', 'Boomerang Student', 'Come back after a week away. It returns!', () => S.flags.comeback > 0),
  mk('n4', 'N4 Unlocked', 'Start learning 20 JLPT N4 kanji. The padlock gave up.', () => KANJI.filter(k => k.jlpt === 'n4' && lvl(k.id) >= 1).length >= 20),
  mk('n4g', 'Grammar Ninja', 'Finish every JLPT N4 grammar lesson.', () => LESSONS.filter(l => l.lv === 'n4').every(l => S.lessons[l.id])),
  mk('dojo', 'Stroke Sensei', 'Pass 10 rounds of Stroke Dojo.', () => (S.flags.dojo || 0) >= 10),
  mk('quote', 'Otaku Certified', 'Guess 10 anime quotes right.', () => (S.flags.quoteOk || 0) >= 10),
  mk('song', 'Karaoke Champion', 'Guess 10 songs right.', () => (S.flags.songOk || 0) >= 10),
  mk('friend', 'High Five', 'Make your first friend.', () => (S.flags.friend || 0) > 0),
  mk('signed', 'Cloud Keeper', 'Sign in so your progress follows you.', () => (S.flags.signed || 0) > 0),
  mk('renamed', 'New Me, Who Dis?', 'Change your username.', () => (S.flags.renamed || 0) > 0),
  mk('mock', 'Exam Survivor', 'Finish a JLPT mock test.', () => (S.flags.mock || 0) > 0)
];
const badgeSvg = (a, px) => `<svg class="bi" viewBox="0 0 64 64" width="${px || 56}" height="${px || 56}" aria-hidden="true"><circle class="bgc" cx="32" cy="32" r="30"/>${a.icon}</svg>`;
