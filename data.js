/* ============ DATA ============ */
const toKata = s => s.replace(/[ぁ-ゖ]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
const toHira = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));

/* ---- Kana (rows split by |, cells split by space, _ = gap) ---- */
const KANA_SPEC = {
  basic: ['Gojūon', 'The 46 basic sounds', 5,
    'あ い う え お|か き く け こ|さ し す せ そ|た ち つ て と|な に ぬ ね の|は ひ ふ へ ほ|ま み む め も|や _ ゆ _ よ|ら り る れ ろ|わ _ _ _ を|ん _ _ _ _',
    'a i u e o|ka ki ku ke ko|sa shi su se so|ta chi tsu te to|na ni nu ne no|ha hi fu he ho|ma mi mu me mo|ya _ yu _ yo|ra ri ru re ro|wa _ _ _ wo|n _ _ _ _'],
  dakuten: ['Dakuten', 'Voiced sounds, marked with ゛', 5,
    'が ぎ ぐ げ ご|ざ じ ず ぜ ぞ|だ ぢ づ で ど|ば び ぶ べ ぼ',
    'ga gi gu ge go|za ji zu ze zo|da ji zu de do|ba bi bu be bo'],
  handakuten: ['Handakuten', 'The p-sounds, marked with ゜', 5,
    'ぱ ぴ ぷ ぺ ぽ', 'pa pi pu pe po'],
  youon: ['Yōon', 'Blended sounds with a small ゃ ゅ ょ', 3,
    'きゃ きゅ きょ|しゃ しゅ しょ|ちゃ ちゅ ちょ|にゃ にゅ にょ|ひゃ ひゅ ひょ|みゃ みゅ みょ|りゃ りゅ りょ|ぎゃ ぎゅ ぎょ|じゃ じゅ じょ|びゃ びゅ びょ|ぴゃ ぴゅ ぴょ',
    'kya kyu kyo|sha shu sho|cha chu cho|nya nyu nyo|hya hyu hyo|mya myu myo|rya ryu ryo|gya gyu gyo|ja ju jo|bya byu byo|pya pyu pyo']
};
const KATA_EXT = ['Extended', 'Extra sounds for foreign words', 5,
  'ファ フィ フェ フォ _|ティ ディ _ _ _|ウィ ウェ ウォ _ _|シェ チェ ジェ _ _|ヴ _ _ _ _',
  'fa fi fe fo _|ti di _ _ _|wi we wo _ _|she che je _ _|vu _ _ _ _'];

const ALT = { shi: ['si'], chi: ['ti'], tsu: ['tu'], fu: ['hu'], ji: ['zi'], wo: ['o'], sha: ['sya'], shu: ['syu'], sho: ['syo'],
  cha: ['tya', 'cya'], chu: ['tyu', 'cyu'], cho: ['tyo', 'cyo'], ja: ['jya', 'zya'], ju: ['jyu', 'zyu'], jo: ['jyo', 'zyo'], n: ['nn'] };
function accepted(it) {
  const a = [it.ro].concat(ALT[it.ro] || []);
  if ('ぢヂ'.includes(it.ch)) a.push('di');
  if ('づヅ'.includes(it.ch)) a.push('du');
  return a;
}

const KANA = [];            // flat list of every kana item
const KANA_TABLE = { h: [], k: [] };   // [{key,title,sub,cols,rows:[[item|null]]}]
(function buildKana() {
  ['h', 'k'].forEach(type => {
    let n = 0;
    const groups = Object.keys(KANA_SPEC).map(k => [k].concat(KANA_SPEC[k]));
    if (type === 'k') groups.push(['ext'].concat(KATA_EXT));
    groups.forEach(([key, title, sub, cols, jp, ro]) => {
      const jr = jp.split('|'), rr = ro.split('|');
      const rows = jr.map((row, ri) => row.split(' ').map((ch, ci) => {
        if (ch === '_') return null;
        n++;
        const it = { id: type + ':' + (type === 'k' ? toKata(ch) : ch), type, ch: type === 'k' ? toKata(ch) : ch,
          ro: rr[ri].split(' ')[ci], group: key, n };
        KANA.push(it);
        return it;
      }));
      KANA_TABLE[type].push({ key, title, sub, cols, rows });
    });
  });
})();

/* romaji from kana reading (hiragana or katakana) */
const HMAP = {};
KANA.filter(i => i.type === 'h').forEach(i => { HMAP[i.ch] = i.ro; });
const RO_FIX = { 'こんにちは': 'konnichiwa', 'こんばんは': 'konbanwa' };
function romaji(str) {
  if (RO_FIX[str]) return RO_FIX[str];
  const s = toHira(str);
  const look = i => HMAP[s.substr(i, 2)] ? [HMAP[s.substr(i, 2)], 2] : HMAP[s[i]] ? [HMAP[s[i]], 1] : null;
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === 'っ') { const nx = look(i + 1); if (nx) out += nx[0].startsWith('ch') ? 't' : nx[0][0]; continue; }
    if (c === 'ー') { out = out.replace(/[aiueo]$/, m => ({ a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' })[m]); continue; }
    const two = look(i);
    if (two) {
      let r = two[0];
      if (c === 'ん') { const nx = look(i + 1); if (nx && /^[aiueoy]/.test(nx[0])) r = "n'"; }
      out += r; i += two[1] - 1; continue;
    }
    out += c;
  }
  return out;
}

/* ---- Kanji ---- */
const KANJI_CATS = [['numbers', 'Numbers'], ['time', 'Time'], ['nature', 'Nature'], ['people', 'People & school'], ['body', 'Body'],
  ['direction', 'Direction & size'], ['city', 'City & things'], ['actions', 'Actions'], ['desc', 'Describing']];
/* Official JLPT N5 kanji set (103), checked against nihongomaster.com's N5 list */
const N5_KANJI = '日一国会人年大十二本中長出三時行社見月分後前生五間上東四今新金九入立手学高円子目外言八六下来気小七山話多安女北午百書先名川千道水半男西電口少校語空土木聞食車何南足万店毎白古天買週母火花右読友左休父駅雨飲魚耳';
const KANJI_RAW = `
一|イチ イツ|ひと(つ)|one|1|numbers|一人 ひとり one person; 一月 いちがつ January
二|ニ|ふた(つ)|two|2|numbers|二人 ふたり two people; 二月 にがつ February
三|サン|み(っつ)|three|3|numbers|三月 さんがつ March; 三日 みっか third day
四|シ|よ よん よっ(つ)|four|5|numbers|四月 しがつ April; 四時 よじ four o'clock
五|ゴ|いつ(つ)|five|4|numbers|五月 ごがつ May; 五分 ごふん five minutes
六|ロク|む(っつ)|six|4|numbers|六月 ろくがつ June; 六時 ろくじ six o'clock
七|シチ|なな なの|seven|2|numbers|七月 しちがつ July; 七日 なのか seventh day
八|ハチ|や(っつ)|eight|2|numbers|八月 はちがつ August; 八時 はちじ eight o'clock
九|キュウ ク|ここの(つ)|nine|2|numbers|九月 くがつ September; 九時 くじ nine o'clock
十|ジュウ|とお|ten|2|numbers|十分 じゅっぷん ten minutes; 十月 じゅうがつ October
百|ヒャク|-|hundred|6|numbers|三百 さんびゃく 300; 百円 ひゃくえん 100 yen
千|セン|ち|thousand|3|numbers|三千 さんぜん 3,000; 千円 せんえん 1,000 yen
万|マン|-|ten thousand|3|numbers|一万円 いちまんえん 10,000 yen
円|エン|まる(い)|yen, circle|4|numbers|千円 せんえん 1,000 yen; 円 えん yen
日|ニチ ジツ|ひ か|day, sun|4|time|日曜日 にちようび Sunday; 今日 きょう today
月|ゲツ ガツ|つき|moon, month|4|time|月曜日 げつようび Monday; 一月 いちがつ January
年|ネン|とし|year|6|time|今年 ことし this year; 来年 らいねん next year
時|ジ|とき|time, hour|10|time|時間 じかん time; 三時 さんじ three o'clock
分|ブン フン|わ(ける)|minute, part|4|time|十分 じゅっぷん ten minutes; 半分 はんぶん half
半|ハン|なか(ば)|half|5|time|半分 はんぶん half; 三時半 さんじはん half past three
今|コン|いま|now|4|time|今 いま now; 今日 きょう today
午|ゴ|うま|noon|4|time|午前 ごぜん morning (AM); 午後 ごご afternoon (PM)
前|ゼン|まえ|before, front|9|time|午前 ごぜん AM; 名前 なまえ name
後|ゴ コウ|のち あと うし(ろ)|after, behind|9|time|午後 ごご PM; 後ろ うしろ behind
間|カン ケン|あいだ ま|interval, between|12|time|時間 じかん time; 間 あいだ between
毎|マイ|-|every|6|time|毎日 まいにち every day; 毎朝 まいあさ every morning
週|シュウ|-|week|11|time|今週 こんしゅう this week; 来週 らいしゅう next week
曜|ヨウ|-|day of the week|18|time|日曜日 にちようび Sunday; 何曜日 なんようび what day?
火|カ|ひ|fire|4|nature|火曜日 かようび Tuesday; 花火 はなび fireworks
水|スイ|みず|water|4|nature|水曜日 すいようび Wednesday; 水 みず water
木|モク ボク|き|tree, wood|4|nature|木曜日 もくようび Thursday; 木 き tree
金|キン コン|かね|gold, money|8|nature|金曜日 きんようび Friday; お金 おかね money
土|ド ト|つち|earth, soil|3|nature|土曜日 どようび Saturday; 土 つち soil
山|サン|やま|mountain|3|nature|富士山 ふじさん Mt. Fuji; 山 やま mountain
川|セン|かわ|river|3|nature|川 かわ river; 小川 おがわ stream
田|デン|た|rice field|5|nature|田 た rice field; 田中 たなか Tanaka (surname)
天|テン|あま あめ|heaven, sky|4|nature|天気 てんき weather; 天ぷら てんぷら tempura
雨|ウ|あめ|rain|8|nature|雨 あめ rain; 大雨 おおあめ heavy rain
気|キ ケ|-|spirit, air|6|nature|天気 てんき weather; 元気 げんき healthy
空|クウ|そら あ(く)|sky, empty|8|nature|空 そら sky; 空港 くうこう airport
花|カ|はな|flower|7|nature|花 はな flower; 花見 はなみ flower viewing
石|セキ|いし|stone|5|nature|石 いし stone; 小石 こいし pebble
林|リン|はやし|woods|8|nature|林 はやし woods; 小林 こばやし Kobayashi (surname)
森|シン|もり|forest|12|nature|森 もり forest
海|カイ|うみ|sea|9|nature|海 うみ sea; 日本海 にほんかい Sea of Japan
犬|ケン|いぬ|dog|4|nature|犬 いぬ dog; 子犬 こいぬ puppy
魚|ギョ|さかな うお|fish|11|nature|魚 さかな fish; 金魚 きんぎょ goldfish
人|ジン ニン|ひと|person|2|people|日本人 にほんじん Japanese person; 三人 さんにん three people
男|ダン ナン|おとこ|man, male|7|people|男の人 おとこのひと man; 男子 だんし boy
女|ジョ ニョ|おんな|woman, female|3|people|女の人 おんなのひと woman; 彼女 かのじょ she, girlfriend
子|シ ス|こ|child|3|people|子ども こども child; 女子 じょし girl
父|フ|ちち|father|4|people|父 ちち my father; お父さん おとうさん father
母|ボ|はは|mother|5|people|母 はは my mother; お母さん おかあさん mother
友|ユウ|とも|friend|4|people|友達 ともだち friend; 友人 ゆうじん friend
先|セン|さき|previous, ahead|6|people|先生 せんせい teacher; 先週 せんしゅう last week
生|セイ ショウ|い(きる) う(まれる) なま|life, birth, raw|5|people|学生 がくせい student; 生まれる うまれる to be born
学|ガク|まな(ぶ)|study|8|people|学校 がっこう school; 大学 だいがく university
校|コウ|-|school|10|people|学校 がっこう school; 高校 こうこう high school
名|メイ ミョウ|な|name|6|people|名前 なまえ name; 有名 ゆうめい famous
語|ゴ|かた(る)|language, word|14|people|日本語 にほんご Japanese language; 英語 えいご English
目|モク|め|eye|5|body|目 め eye; 目薬 めぐすり eye drops
耳|ジ|みみ|ear|6|body|耳 みみ ear
口|コウ ク|くち|mouth|3|body|口 くち mouth; 入口 いりぐち entrance
手|シュ|て|hand|4|body|手 て hand; 上手 じょうず skillful
足|ソク|あし た(りる)|foot, leg|7|body|足 あし foot, leg; 足りる たりる to be enough
力|リョク リキ|ちから|power|2|body|力 ちから power; 力持ち ちからもち strong person
大|ダイ タイ|おお(きい)|big|3|direction|大きい おおきい big; 大学 だいがく university
小|ショウ|ちい(さい) こ お|small|3|direction|小さい ちいさい small; 小学校 しょうがっこう elementary school
中|チュウ ジュウ|なか|middle, inside|4|direction|中 なか inside; 中国 ちゅうごく China
上|ジョウ|うえ あ(がる)|up, above|3|direction|上 うえ above; 上手 じょうず skillful
下|カ ゲ|した くだ(さい)|down, below|3|direction|下 した below; 地下鉄 ちかてつ subway
左|サ|ひだり|left|5|direction|左 ひだり left; 左手 ひだりて left hand
右|ウ ユウ|みぎ|right|5|direction|右 みぎ right; 右手 みぎて right hand
北|ホク|きた|north|5|direction|北 きた north; 北海道 ほっかいどう Hokkaido
南|ナン|みなみ|south|9|direction|南 みなみ south; 南口 みなみぐち south exit
東|トウ|ひがし|east|8|direction|東 ひがし east; 東京 とうきょう Tokyo
西|セイ サイ|にし|west|6|direction|西 にし west; 西口 にしぐち west exit
外|ガイ ゲ|そと|outside|5|direction|外 そと outside; 外国 がいこく foreign country
内|ナイ|うち|inside|4|direction|内 うち inside; 国内 こくない domestic
国|コク|くに|country|8|city|国 くに country; 外国 がいこく foreign country
町|チョウ|まち|town|7|city|町 まち town
駅|エキ|-|station|14|city|駅 えき station; 東京駅 とうきょうえき Tokyo Station
店|テン|みせ|shop|8|city|店 みせ shop; 喫茶店 きっさてん coffee shop
道|ドウ|みち|road, way|12|city|道 みち road; 北海道 ほっかいどう Hokkaido
車|シャ|くるま|car|7|city|車 くるま car; 電車 でんしゃ train
電|デン|-|electricity|13|city|電車 でんしゃ train; 電話 でんわ telephone
本|ホン|もと|book, origin|5|city|本 ほん book; 日本 にほん Japan
社|シャ|やしろ|company, shrine|7|city|会社 かいしゃ company; 神社 じんじゃ shrine
見|ケン|み(る)|see, look|7|actions|見る みる to see; 花見 はなみ flower viewing
聞|ブン モン|き(く)|hear, ask|14|actions|聞く きく to listen; 新聞 しんぶん newspaper
食|ショク|た(べる)|eat|9|actions|食べる たべる to eat; 食事 しょくじ meal
飲|イン|の(む)|drink|12|actions|飲む のむ to drink; 飲み物 のみもの drink
行|コウ ギョウ|い(く)|go|6|actions|行く いく to go; 銀行 ぎんこう bank
来|ライ|く(る)|come|7|actions|来る くる to come; 来週 らいしゅう next week
帰|キ|かえ(る)|return|10|actions|帰る かえる to return
出|シュツ|で(る) だ(す)|exit, put out|5|actions|出る でる to exit; 出口 でぐち exit
入|ニュウ|はい(る) い(れる)|enter|2|actions|入る はいる to enter; 入口 いりぐち entrance
立|リツ|た(つ)|stand|5|actions|立つ たつ to stand
休|キュウ|やす(む)|rest|6|actions|休む やすむ to rest; 休日 きゅうじつ day off
書|ショ|か(く)|write|10|actions|書く かく to write; 辞書 じしょ dictionary
読|ドク|よ(む)|read|14|actions|読む よむ to read
話|ワ|はな(す)|talk, story|13|actions|話す はなす to speak; 電話 でんわ telephone
言|ゲン|い(う)|say|7|actions|言う いう to say; 言語 げんご language
買|バイ|か(う)|buy|12|actions|買う かう to buy; 買い物 かいもの shopping
会|カイ|あ(う)|meet|6|actions|会う あう to meet; 会社 かいしゃ company
作|サク|つく(る)|make|7|actions|作る つくる to make
使|シ|つか(う)|use|8|actions|使う つかう to use
思|シ|おも(う)|think|9|actions|思う おもう to think
長|チョウ|なが(い)|long|8|desc|長い ながい long; 社長 しゃちょう company president
高|コウ|たか(い)|tall, expensive|10|desc|高い たかい expensive; 高校 こうこう high school
安|アン|やす(い)|cheap, safe|6|desc|安い やすい cheap; 安全 あんぜん safety
新|シン|あたら(しい)|new|13|desc|新しい あたらしい new; 新聞 しんぶん newspaper
古|コ|ふる(い)|old|5|desc|古い ふるい old
多|タ|おお(い)|many|6|desc|多い おおい many
少|ショウ|すく(ない) すこ(し)|few, little|4|desc|少ない すくない few; 少し すこし a little
白|ハク|しろ(い)|white|5|desc|白い しろい white
赤|セキ|あか(い)|red|7|desc|赤い あかい red
青|セイ|あお(い)|blue|8|desc|青い あおい blue
黒|コク|くろ(い)|black|11|desc|黒い くろい black
好|コウ|す(き)|like|6|desc|好き すき to like
何|カ|なに なん|what|7|desc|何 なに what; 何時 なんじ what time
`;
const KANJI_ALL_RAW = (function () {
  const have = new Set(KANJI_RAW.trim().split('\n').map(l => l.split('|')[0]));
  return KANJI_RAW.trim() + '\n' + KANJI_N4_RAW.trim().split('\n').filter(l => !have.has(l.split('|')[0])).join('\n');
})();
const KANJI = KANJI_ALL_RAW.trim().split('\n').map((ln, i) => {
  const [ch, on, kun, mean, st, cat, ex] = ln.split('|');
  const list = s => s.split(' ').filter(x => x && x !== '-');
  return { id: 'j:' + ch, type: 'j', ch, on: list(on), kun: list(kun), mean, strokes: +st, cat, n: i + 1, n5: N5_KANJI.includes(ch), jlpt: N5_KANJI.includes(ch) ? 'n5' : 'n4',
    ex: ex.split(';').map(e => { const t = e.trim().split(' '); return { w: t[0], r: t[1], m: t.slice(2).join(' ') }; }) };
});
const KANJI_BY_CH = {}; KANJI.forEach(k => { KANJI_BY_CH[k.ch] = k; });

/* ---- Vocabulary ---- */
const VOCAB_CATS = [['greetings', 'Greetings'], ['numbers', 'Numbers'], ['time', 'Time'], ['people', 'People'], ['food', 'Food & drink'],
  ['places', 'Places'], ['travel', 'Transport'], ['verbs', 'Verbs'], ['adj', 'Adjectives'], ['words', 'Question & place words']];
const VOCAB_RAW = `
こんにちは|こんにちは|hello, good afternoon|greetings
おはようございます|おはようございます|good morning|greetings
こんばんは|こんばんは|good evening|greetings
さようなら|さようなら|goodbye|greetings
ありがとうございます|ありがとうございます|thank you very much|greetings
どういたしまして|どういたしまして|you're welcome|greetings
すみません|すみません|excuse me, sorry|greetings
ごめんなさい|ごめんなさい|I'm sorry|greetings
はい|はい|yes|greetings
いいえ|いいえ|no|greetings
お願いします|おねがいします|please (making a request)|greetings
初めまして|はじめまして|nice to meet you|greetings
いただきます|いただきます|thanks for the food (before eating)|greetings
ごちそうさまでした|ごちそうさまでした|thanks for the meal (after eating)|greetings
おやすみなさい|おやすみなさい|good night|greetings
行ってきます|いってきます|I'm off (and will be back)|greetings
ただいま|ただいま|I'm home|greetings
お帰りなさい|おかえりなさい|welcome home|greetings
お元気ですか|おげんきですか|how are you?|greetings
元気です|げんきです|I'm fine|greetings
分かりません|わかりません|I don't understand|greetings
零|れい|zero|numbers
一|いち|one|numbers
二|に|two|numbers
三|さん|three|numbers
四|よん|four|numbers
五|ご|five|numbers
六|ろく|six|numbers
七|なな|seven|numbers
八|はち|eight|numbers
九|きゅう|nine|numbers
十|じゅう|ten|numbers
百|ひゃく|hundred|numbers
千|せん|thousand|numbers
一万|いちまん|ten thousand|numbers
一つ|ひとつ|one (thing)|numbers
二つ|ふたつ|two (things)|numbers
三つ|みっつ|three (things)|numbers
一人|ひとり|one person|numbers
二人|ふたり|two people|numbers
何人|なんにん|how many people?|numbers
百円|ひゃくえん|100 yen|numbers
千円|せんえん|1,000 yen|numbers
今日|きょう|today|time
明日|あした|tomorrow|time
昨日|きのう|yesterday|time
今|いま|now|time
毎日|まいにち|every day|time
朝|あさ|morning|time
昼|ひる|daytime, noon|time
夜|よる|night|time
午前|ごぜん|a.m., morning|time
午後|ごご|p.m., afternoon|time
時間|じかん|time|time
今週|こんしゅう|this week|time
来週|らいしゅう|next week|time
来年|らいねん|next year|time
月曜日|げつようび|Monday|time
火曜日|かようび|Tuesday|time
水曜日|すいようび|Wednesday|time
木曜日|もくようび|Thursday|time
金曜日|きんようび|Friday|time
土曜日|どようび|Saturday|time
日曜日|にちようび|Sunday|time
春|はる|spring|time
夏|なつ|summer|time
秋|あき|autumn|time
冬|ふゆ|winter|time
私|わたし|I, me|people
あなた|あなた|you|people
友達|ともだち|friend|people
先生|せんせい|teacher|people
学生|がくせい|student|people
家族|かぞく|family|people
父|ちち|my father|people
母|はは|my mother|people
子ども|こども|child|people
男の人|おとこのひと|man|people
女の人|おんなのひと|woman|people
日本人|にほんじん|Japanese person|people
水|みず|water|food
お茶|おちゃ|tea|food
ご飯|ごはん|rice, meal|food
肉|にく|meat|food
魚|さかな|fish|food
野菜|やさい|vegetables|food
果物|くだもの|fruit|food
パン|パン|bread|food
卵|たまご|egg|food
牛乳|ぎゅうにゅう|milk|food
ラーメン|ラーメン|ramen|food
寿司|すし|sushi|food
コーヒー|コーヒー|coffee|food
ビール|ビール|beer|food
りんご|りんご|apple|food
弁当|べんとう|boxed lunch|food
駅|えき|station|places
空港|くうこう|airport|places
学校|がっこう|school|places
病院|びょういん|hospital|places
銀行|ぎんこう|bank|places
郵便局|ゆうびんきょく|post office|places
ホテル|ホテル|hotel|places
レストラン|レストラン|restaurant|places
店|みせ|shop|places
コンビニ|コンビニ|convenience store|places
トイレ|トイレ|toilet|places
神社|じんじゃ|shrine|places
お寺|おてら|temple|places
公園|こうえん|park|places
山|やま|mountain|places
川|かわ|river|places
海|うみ|sea|places
町|まち|town|places
国|くに|country|places
日本|にほん|Japan|places
東京|とうきょう|Tokyo|places
京都|きょうと|Kyoto|places
大阪|おおさか|Osaka|places
電車|でんしゃ|train|travel
新幹線|しんかんせん|bullet train|travel
バス|バス|bus|travel
地下鉄|ちかてつ|subway|travel
タクシー|タクシー|taxi|travel
切符|きっぷ|ticket|travel
飛行機|ひこうき|airplane|travel
自転車|じてんしゃ|bicycle|travel
車|くるま|car|travel
行く|いく|to go|verbs
来る|くる|to come|verbs
帰る|かえる|to return home|verbs
食べる|たべる|to eat|verbs
飲む|のむ|to drink|verbs
見る|みる|to see, to watch|verbs
聞く|きく|to listen, to ask|verbs
話す|はなす|to speak|verbs
読む|よむ|to read|verbs
書く|かく|to write|verbs
買う|かう|to buy|verbs
会う|あう|to meet|verbs
待つ|まつ|to wait|verbs
休む|やすむ|to rest|verbs
寝る|ねる|to sleep|verbs
起きる|おきる|to wake up|verbs
歩く|あるく|to walk|verbs
勉強する|べんきょうする|to study|verbs
分かる|わかる|to understand|verbs
知る|しる|to know|verbs
使う|つかう|to use|verbs
作る|つくる|to make|verbs
乗る|のる|to ride|verbs
降りる|おりる|to get off|verbs
入る|はいる|to enter|verbs
出る|でる|to exit, to leave|verbs
教える|おしえる|to teach, to tell|verbs
住む|すむ|to live (reside)|verbs
大きい|おおきい|big|adj
小さい|ちいさい|small|adj
新しい|あたらしい|new|adj
古い|ふるい|old (things)|adj
高い|たかい|expensive, tall|adj
安い|やすい|cheap|adj
長い|ながい|long|adj
多い|おおい|many|adj
少ない|すくない|few|adj
近い|ちかい|near|adj
遠い|とおい|far|adj
美味しい|おいしい|delicious|adj
楽しい|たのしい|fun|adj
忙しい|いそがしい|busy|adj
暑い|あつい|hot (weather)|adj
寒い|さむい|cold (weather)|adj
好き|すき|liked, to like|adj
きれい|きれい|pretty, clean|adj
静か|しずか|quiet|adj
有名|ゆうめい|famous|adj
白い|しろい|white|adj
赤い|あかい|red|adj
青い|あおい|blue|adj
黒い|くろい|black|adj
何|なに|what|words
誰|だれ|who|words
どこ|どこ|where|words
いつ|いつ|when|words
いくら|いくら|how much|words
どれ|どれ|which one|words
これ|これ|this (thing)|words
それ|それ|that (thing)|words
あれ|あれ|that over there|words
ここ|ここ|here|words
そこ|そこ|there|words
あそこ|あそこ|over there|words
右|みぎ|right|words
左|ひだり|left|words
上|うえ|above|words
下|した|below|words
前|まえ|front, before|words
後ろ|うしろ|behind|words
中|なか|inside|words
外|そと|outside|words
`;
const V5COUNT = VOCAB_RAW.trim().split('\n').length;
const VOCAB_ALL_RAW = (function () {
  const have = new Set(VOCAB_RAW.trim().split('\n').map(l => l.split('|')[0]));
  return VOCAB_RAW.trim() + '\n' + VOCAB_N4_RAW.trim().split('\n').filter(l => { const k = l.split('|')[0]; if (have.has(k)) return false; have.add(k); return true; }).join('\n');
})();
const VOCAB = VOCAB_ALL_RAW.trim().split('\n').map((ln, i) => {
  const [jp, rd, mean, cat] = ln.split('|');
  return { id: 'v:' + jp, type: 'v', ch: jp, rd, ro: romaji(rd), mean, cat, n: i + 1, jlpt: i < V5COUNT ? 'n5' : 'n4' };
});

/* ---- Travel phrases (romaji written by hand so particles read naturally) ---- */
const PHRASE_RAW = `
日本に行きたいです|にほんにいきたいです|Nihon ni ikitai desu|I want to go to Japan|Dreaming
東京に行きたいです|とうきょうにいきたいです|Tōkyō ni ikitai desu|I want to go to Tokyo|Dreaming
トイレはどこですか|トイレはどこですか|Toire wa doko desu ka|Where is the toilet?|Getting around
駅はどこですか|えきはどこですか|Eki wa doko desu ka|Where is the station?|Getting around
この電車は京都に行きますか|このでんしゃはきょうとにいきますか|Kono densha wa Kyōto ni ikimasu ka|Does this train go to Kyoto?|Getting around
切符を一枚ください|きっぷをいちまいください|Kippu o ichimai kudasai|One ticket, please|Getting around
道に迷いました|みちにまよいました|Michi ni mayoimashita|I'm lost|Getting around
これはいくらですか|これはいくらですか|Kore wa ikura desu ka|How much is this?|Shopping
これをください|これをください|Kore o kudasai|This one, please|Shopping
カードは使えますか|カードはつかえますか|Kādo wa tsukaemasu ka|Can I use a card?|Shopping
水をください|みずをください|Mizu o kudasai|Water, please|Eating out
メニューをください|メニューをください|Menyū o kudasai|Menu, please|Eating out
おすすめは何ですか|おすすめはなんですか|Osusume wa nan desu ka|What do you recommend?|Eating out
お会計をお願いします|おかいけいをおねがいします|Okaikei o onegai shimasu|The bill, please|Eating out
英語を話せますか|えいごをはなせますか|Eigo o hanasemasu ka|Can you speak English?|Talking
日本語が少し話せます|にほんごがすこしはなせます|Nihongo ga sukoshi hanasemasu|I can speak a little Japanese|Talking
もう一度お願いします|もういちどおねがいします|Mō ichido onegai shimasu|One more time, please|Talking
ゆっくり話してください|ゆっくりはなしてください|Yukkuri hanashite kudasai|Please speak slowly|Talking
写真を撮ってもいいですか|しゃしんをとってもいいですか|Shashin o totte mo ii desu ka|May I take a photo?|Talking
助けてください|たすけてください|Tasukete kudasai|Please help me|Emergencies
`;
const PHRASES = PHRASE_RAW.trim().split('\n').map((ln, i) => {
  const [jp, rd, ro, mean, sit] = ln.split('|');
  return { id: 'p:' + i, type: 'p', ch: jp, rd, ro, mean, sit, n: i + 1 };
});

/* ---- Sentence builder ---- */
const SENTENCES = [
  ['私は|日本に|行きたいです', 'I want to go to Japan'],
  ['私は|学生です', 'I am a student'],
  ['これは|いくらですか', 'How much is this?'],
  ['駅は|どこですか', 'Where is the station?'],
  ['水を|ください', 'Water, please'],
  ['私は|毎日|日本語を|勉強します', 'I study Japanese every day'],
  ['昨日|友達と|寿司を|食べました', 'Yesterday I ate sushi with a friend'],
  ['明日|京都へ|行きます', 'Tomorrow I will go to Kyoto'],
  ['電車で|東京に|行きます', 'I go to Tokyo by train'],
  ['この|ラーメンは|美味しいです', 'This ramen is delicious'],
  ['英語を|話せますか', 'Can you speak English?'],
  ['朝|七時に|起きます', 'I get up at seven in the morning'],
  ['友達と|公園で|遊びました', 'I played in the park with a friend'],
  ['新しい|カメラを|買いたいです', 'I want to buy a new camera'],
  ['今日は|とても|暑いです', 'It is very hot today'],
  ['日曜日に|神社へ|行きました', 'I went to a shrine on Sunday'],
  ['私は|コーヒーを|飲みます', 'I drink coffee'],
  ['日本の|電車は|とても|便利です', 'Japanese trains are very convenient']
];

/* ---- Lessons ---- */
const LESSONS = [
  { id: 'l1', jp: '文字と音', title: 'Writing and sounds',
    body: `<p>Japanese mixes three scripts. <b>Hiragana</b> writes grammar and native words. <b>Katakana</b> writes foreign loanwords, names and emphasis, like コーヒー (coffee). <b>Kanji</b> carry meaning and come from Chinese. <b>Romaji</b> is just Latin letters for learners.</p>
      <ul><li>Each kana is one beat: a vowel (a i u e o) or consonant plus vowel. ん is a lone n.</li>
      <li>A dakuten ゛ voices a consonant (か → が). A handakuten ゜ turns は into ぱ.</li>
      <li>A small っ doubles the next consonant with a short pause. A small ゃ ゅ ょ blends into the kana before it (き + ゃ = きゃ, kya).</li>
      <li>Long vowels last two beats: おばさん (aunt) versus おばあさん (grandmother). Katakana marks them with ー.</li></ul>`,
    ex: [['きって', 'kitte', 'stamp'], ['おばさん', 'obasan', 'aunt'], ['おばあさん', 'obāsan', 'grandmother']],
    quiz: [{ q: 'Which script is normally used for loanwords such as コーヒー?', o: ['Hiragana', 'Katakana', 'Kanji'], a: 1 },
      { q: 'What does the small っ do?', o: ['Makes a vowel long', 'Doubles the next consonant', 'Adds a y sound'], a: 1 }] },
  { id: 'l2', jp: 'です', title: 'Basic sentences with です',
    body: `<p>The basic pattern is <b>A は B です</b>, meaning "A is B". The particle は is pronounced <b>wa</b>. です makes the sentence polite.</p>
      <ul><li>Negative: じゃありません (or ではありません). Past: でした.</li>
      <li>Add <b>か</b> at the end to ask a question. No question mark is needed.</li>
      <li>Japanese often drops the subject when it is obvious.</li></ul>`,
    ex: [['私は学生です', 'Watashi wa gakusei desu', 'I am a student'], ['田中さんは先生ではありません', 'Tanaka-san wa sensei dewa arimasen', 'Mr. Tanaka is not a teacher'], ['これは水ですか', 'Kore wa mizu desu ka', 'Is this water?']],
    quiz: [{ q: 'How is は pronounced in 私は学生です?', o: ['ha', 'wa', 'o'], a: 1 },
      { q: 'How do you turn a statement into a polite question?', o: ['Add か at the end', 'Add を at the end', 'Swap the word order'], a: 0 }] },
  { id: 'l3', jp: '助詞', title: 'Essential particles',
    body: `<p>Particles are small words that mark the role of the word before them.</p>
      <ul><li><b>は</b> topic ("as for…"), <b>が</b> subject, <b>を</b> object of a verb.</li>
      <li><b>に</b> target, time, or where something exists. <b>へ</b> direction (read "e").</li>
      <li><b>で</b> place of an action, or means ("by train"). <b>の</b> possession ("of").</li>
      <li><b>と</b> "and" or "with". <b>も</b> "also". <b>から</b> from. <b>まで</b> until.</li></ul>`,
    ex: [['水を飲みます', 'Mizu o nomimasu', 'I drink water'], ['東京に行きます', 'Tōkyō ni ikimasu', 'I go to Tokyo'], ['電車で行きます', 'Densha de ikimasu', 'I go by train'], ['友達と食べます', 'Tomodachi to tabemasu', 'I eat with a friend'], ['これは私の本です', 'Kore wa watashi no hon desu', 'This is my book']],
    quiz: [{ q: 'Which particle marks the object of a verb?', o: ['を', 'で', 'の'], a: 0 },
      { q: '友達___行きます. Choose the particle for "go with a friend".', o: ['と', 'を', 'も'], a: 0 }] },
  { id: 'l4', jp: '動詞', title: 'Verbs in ます form',
    body: `<p>Dictionary form ends in a u-sound (食べる, 飲む, 行く). The polite form ends in <b>ます</b>.</p>
      <ul><li>Present 食べます, negative 食べません, past 食べました, past negative 食べませんでした.</li>
      <li>る-verbs drop る (食べる → 食べます). う-verbs change the last u to i (飲む → 飲みます).</li>
      <li>Two irregular verbs: する → します, 来る → 来ます (きます).</li></ul>`,
    ex: [['食べます', 'tabemasu', 'I eat'], ['飲みません', 'nomimasen', 'I do not drink'], ['行きました', 'ikimashita', 'I went'], ['勉強しませんでした', 'benkyō shimasen deshita', 'I did not study']],
    quiz: [{ q: 'What is the polite past form of 行く?', o: ['行きます', '行きました', '行きません'], a: 1 },
      { q: 'What is the polite form of する?', o: ['します', 'すます', 'しります'], a: 0 }] },
  { id: 'l5', jp: '形容詞', title: 'Adjectives',
    body: `<p>There are two kinds. <b>い-adjectives</b> end in い (高い). <b>な-adjectives</b> are nouns that take な before another noun (静か).</p>
      <ul><li>い-adjective: 高い (tall), 高くない (not tall), 高かった (was tall). The odd one is いい: よくない, よかった.</li>
      <li>な-adjective: 静かです, 静かじゃない. Before a noun: 静かな町.</li>
      <li>い-adjectives sit directly before nouns: 高い山.</li></ul>`,
    ex: [['高い山', 'takai yama', 'a tall mountain'], ['静かな町', 'shizuka na machi', 'a quiet town'], ['このラーメンは美味しくないです', 'Kono rāmen wa oishikunai desu', "This ramen isn't tasty"]],
    quiz: [{ q: 'What is the negative of 安い?', o: ['安くない', '安いない', '安じゃない'], a: 0 },
      { q: '静か___町. Which ending fits before the noun?', o: ['い', 'な', 'の'], a: 1 }] },
  { id: 'l6', jp: '数え方', title: 'Numbers and counting',
    body: `<p>1 to 10: いち、に、さん、し/よん、ご、ろく、しち/なな、はち、きゅう、じゅう. Then 百 ひゃく, 千 せん, 万 まん (10,000).</p>
      <ul><li>Sound changes: 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく, 3,000 さんぜん, 8,000 はっせん.</li>
      <li>Things: ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ、とお.</li>
      <li>People: ひとり、ふたり, then さんにん、よにん. Money: 円 (えん).</li></ul>`,
    ex: [['三百円', 'sanbyaku en', '300 yen'], ['二人', 'futari', 'two people'], ['千五百円', 'sen gohyaku en', '1,500 yen']],
    quiz: [{ q: 'How do you say "two people"?', o: ['ににん', 'ふたり', 'ふたつ'], a: 1 },
      { q: 'How do you read 300?', o: ['さんひゃく', 'さんびゃく', 'さんぴゃく'], a: 1 }] },
  { id: 'l7', jp: '時間', title: 'Telling time and days',
    body: `<p>Hours use <b>〜時 (じ)</b>: 一時 いちじ, 二時 にじ, 三時 さんじ, <b>四時 よじ</b>, 七時 しちじ, <b>九時 くじ</b>. Minutes use ふん or ぷん: 一分 いっぷん, 二分 にふん, 三分 さんぷん, 五分 ごふん, 十分 じゅっぷん. 半 (はん) means half past.</p>
      <ul><li>午前 is a.m. and 午後 is p.m.</li>
      <li>Weekdays: 月 げつ, 火 か, 水 すい, 木 もく, 金 きん, 土 ど, 日 にち, each followed by ようび.</li></ul>`,
    ex: [['三時半', 'sanji han', '3:30'], ['午後五時', 'gogo goji', '5 p.m.'], ['火曜日', 'kayōbi', 'Tuesday']],
    quiz: [{ q: 'How do you say "4 o\'clock"?', o: ['よんじ', 'よじ', 'しじ'], a: 1 },
      { q: 'Which day is かようび?', o: ['Tuesday', 'Thursday', 'Friday'], a: 0 }] },
  { id: 'l8', jp: '〜たい', title: 'Wants and requests',
    body: `<p>Say what you want with the verb stem plus <b>たい</b>. Ask for things with <b>をください</b>.</p>
      <ul><li>行きます → 行きたい (want to go). Negative: 行きたくない.</li>
      <li>Request: て-form + ください (見てください, please look).</li>
      <li>Permission: て-form + もいいですか (撮ってもいいですか, may I take it?).</li></ul>`,
    ex: [['日本に行きたいです', 'Nihon ni ikitai desu', 'I want to go to Japan'], ['寿司が食べたいです', 'Sushi ga tabetai desu', 'I want to eat sushi'], ['ゆっくり話してください', 'Yukkuri hanashite kudasai', 'Please speak slowly']],
    quiz: [{ q: 'How do you say "I want to drink"?', o: ['飲みたいです', '飲みますたい', '飲むください'], a: 0 },
      { q: 'How do you ask for water politely?', o: ['水をください', '水はです', '水がます'], a: 0 }] },
  { id: 'l9', jp: 'こそあど', title: 'Questions and this/that',
    body: `<p>The <b>こそあど</b> words come in sets: こ (near me), そ (near you), あ (far from both), ど (which?).</p>
      <ul><li>Things: これ、それ、あれ、どれ. Places: ここ、そこ、あそこ、どこ. Before a noun: この、その、あの、どの.</li>
      <li>Question words: 何 (なに/なん) what, 誰 (だれ) who, いつ when, どこ where, いくら how much.</li>
      <li>End questions with か.</li></ul>`,
    ex: [['これは何ですか', 'Kore wa nan desu ka', 'What is this?'], ['トイレはどこですか', 'Toire wa doko desu ka', 'Where is the toilet?'], ['あの人は誰ですか', 'Ano hito wa dare desu ka', 'Who is that person?']],
    quiz: [{ q: 'Which word means "that over there" (a thing)?', o: ['これ', 'それ', 'あれ'], a: 2 },
      { q: 'Which question word asks "how much"?', o: ['いくら', 'いつ', 'だれ'], a: 0 }] }
];

/* ---- Registry ---- */
VOCAB_CATS.push(...VOCAB_N4_CATS);
LESSONS_N4.forEach(l => LESSONS.push(l));
LESSONS.forEach(l => { if (!l.lv) l.lv = 'n5'; });
const ALL = KANA.concat(KANJI, VOCAB, PHRASES);
const ITEMS = {}; ALL.forEach(i => { ITEMS[i.id] = i; });
const DECKS = {
  hira: { label: 'Hiragana', short: 'Hira', color: '--c-hira', items: KANA.filter(i => i.type === 'h') },
  kata: { label: 'Katakana', short: 'Kata', color: '--c-kata', items: KANA.filter(i => i.type === 'k') },
  kanji: { label: 'Kanji', short: 'Kanji', color: '--c-kanji', items: KANJI },
  vocab: { label: 'Vocabulary', short: 'Vocab', color: '--c-vocab', items: VOCAB },
  phrase: { label: 'Phrases', short: 'Phrases', color: '--c-phrase', items: PHRASES }
};
const DECK_ORDER = ['hira', 'kata', 'kanji', 'vocab', 'phrase'];
