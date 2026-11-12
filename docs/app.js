'use strict';
window.APP_ENV = {preview: false, embed: true};
/* ============ JLPT N4 CONTENT (appended after the N5 data; ids of existing items never change) ============ */
/* Kanji rows: ch|on|kun|meaning|strokes|category|examples  (stroke counts checked against public N4 kanji lists) */
const KANJI_N4_RAW = `
同|ドウ|おな(じ)|same|6|desc|同じ おなじ same; 同時 どうじ at the same time
事|ジ|こと|matter, affair|8|city|仕事 しごと work; 大事 だいじ important; 火事 かじ fire
自|ジ シ|みずか(ら)|self|6|people|自分 じぶん oneself; 自転車 じてんしゃ bicycle
発|ハツ ホツ|-|depart, emit|9|actions|出発 しゅっぱつ departure; 発音 はつおん pronunciation
者|シャ|もの|person|8|people|学者 がくしゃ scholar; 医者 いしゃ doctor
地|チ ジ|-|ground, place|6|city|地図 ちず map; 地下鉄 ちかてつ subway
業|ギョウ ゴウ|わざ|business, work|13|city|授業 じゅぎょう class; 卒業 そつぎょう graduation
方|ホウ|かた|direction, way|4|direction|夕方 ゆうがた evening; 作り方 つくりかた how to make; 方 かた person (polite)
場|ジョウ|ば|place|12|city|場所 ばしょ place; 工場 こうじょう factory; 駐車場 ちゅうしゃじょう parking lot
員|イン|-|member|10|people|店員 てんいん shop clerk; 会社員 かいしゃいん office worker
開|カイ|あ(く) あ(ける) ひら(く)|open|12|actions|開く あく to open; 開ける あける to open (something); 開始 かいし start
問|モン|と(い) と(う)|question|11|actions|問題 もんだい problem; 質問 しつもん question
代|ダイ タイ|か(わる) よ|generation, substitute|5|time|時代 じだい era; 代わり かわり substitute; 代金 だいきん price
明|メイ ミョウ|あか(るい) あき(らか)|bright|8|desc|明るい あかるい bright; 説明 せつめい explanation; 明日 あした tomorrow
動|ドウ|うご(く)|move|11|actions|動く うごく to move; 動物 どうぶつ animal; 自動車 じどうしゃ car
京|キョウ ケイ|-|capital|8|city|東京 とうきょう Tokyo; 京都 きょうと Kyoto
通|ツウ ツ|とお(る) かよ(う)|pass, commute|10|actions|通る とおる to pass; 通う かよう to commute; 交通 こうつう traffic
理|リ|-|reason, logic|11|desc|料理 りょうり cooking; 理由 りゆう reason; 無理 むり impossible
体|タイ テイ|からだ|body|7|body|体 からだ body; 体育 たいいく physical education
主|シュ ス|ぬし おも|master, main|5|people|主人 しゅじん husband, master; 主な おもな main
題|ダイ|-|topic, title|18|desc|問題 もんだい problem; 宿題 しゅくだい homework; 題名 だいめい title
意|イ|-|mind, meaning|13|desc|意味 いみ meaning; 注意 ちゅうい caution; 用意 ようい preparation
不|フ ブ|-|not, un-|4|desc|不便 ふべん inconvenient; 不安 ふあん anxious
用|ヨウ|もち(いる)|use, business|5|actions|用事 ようじ errand; 利用 りよう use; 用意 ようい preparation
度|ド タク|たび|degree, times|9|desc|今度 こんど next time; 一度 いちど once; 温度 おんど temperature
強|キョウ ゴウ|つよ(い)|strong|11|desc|強い つよい strong; 勉強 べんきょう study
公|コウ|おおやけ|public|4|city|公園 こうえん park; 公共 こうきょう public
持|ジ|も(つ)|hold|9|actions|持つ もつ to hold; 気持ち きもち feeling
野|ヤ|の|field, plain|11|nature|野菜 やさい vegetables; 野球 やきゅう baseball
以|イ|-|by means of, than|5|desc|以上 いじょう more than; 以下 いか below; 以外 いがい except
家|カ ケ|いえ うち|house, family|10|city|家 いえ house; 家族 かぞく family; 作家 さっか writer
世|セイ セ|よ|world, generation|5|time|世界 せかい world; 世話 せわ care
正|セイ ショウ|ただ(しい)|correct|5|desc|正しい ただしい correct; 正月 しょうがつ New Year
院|イン|-|institution|10|city|病院 びょういん hospital; 大学院 だいがくいん graduate school
心|シン|こころ|heart, mind|4|body|心 こころ heart; 安心 あんしん relief; 心配 しんぱい worry
界|カイ|-|world, boundary|9|city|世界 せかい world; 世界中 せかいじゅう worldwide
教|キョウ|おし(える) おそ(わる)|teach|11|actions|教える おしえる to teach; 教室 きょうしつ classroom; 教科書 きょうかしょ textbook
文|ブン モン|ふみ|sentence, writing|4|desc|文 ぶん sentence; 文化 ぶんか culture; 作文 さくぶん composition
元|ゲン ガン|もと|origin|4|desc|元気 げんき healthy; 元 もと origin; 元日 がんじつ New Year's Day
重|ジュウ チョウ|おも(い) かさ(ねる)|heavy|9|desc|重い おもい heavy; 重要 じゅうよう important
近|キン|ちか(い)|near|7|direction|近い ちかい near; 近所 きんじょ neighbourhood; 最近 さいきん recently
考|コウ|かんが(える)|think|6|actions|考える かんがえる to think; 参考 さんこう reference
画|ガ カク|-|picture, stroke|8|city|映画 えいが movie; 画面 がめん screen; 漫画 まんが manga
売|バイ|う(る)|sell|7|actions|売る うる to sell; 売り場 うりば sales floor; 発売 はつばい release
知|チ|し(る)|know|8|actions|知る しる to know; 知らせ しらせ notice; 知り合い しりあい acquaintance
集|シュウ|あつ(まる) あつ(める)|gather|12|actions|集まる あつまる to gather; 集める あつめる to collect
別|ベツ|わか(れる)|separate, other|7|desc|別 べつ different; 特別 とくべつ special; 別れる わかれる to part
物|ブツ モツ|もの|thing|8|city|物 もの thing; 買い物 かいもの shopping; 食べ物 たべもの food
品|ヒン|しな|goods, quality|9|city|品物 しなもの goods; 食品 しょくひん food product; 作品 さくひん a work
計|ケイ|はか(る)|measure, plan|9|actions|時計 とけい clock; 計画 けいかく plan; 合計 ごうけい total
死|シ|し(ぬ)|die|6|actions|死ぬ しぬ to die; 死 し death
特|トク|-|special|10|desc|特別 とくべつ special; 特に とくに especially; 特急 とっきゅう limited express
私|シ|わたし わたくし|private, I|7|people|私 わたし I; 私立 しりつ private
始|シ|はじ(める) はじ(まる)|begin|8|actions|始める はじめる to begin; 始まる はじまる to start; 開始 かいし start
朝|チョウ|あさ|morning|12|time|朝 あさ morning; 朝ご飯 あさごはん breakfast; 今朝 けさ this morning
運|ウン|はこ(ぶ)|carry, luck|12|actions|運ぶ はこぶ to carry; 運動 うんどう exercise; 運転 うんてん driving
終|シュウ|お(わる) お(える)|end|11|actions|終わる おわる to end; 終電 しゅうでん last train; 最終 さいしゅう final
台|ダイ タイ|-|stand, counter|5|city|台所 だいどころ kitchen; 台風 たいふう typhoon; 一台 いちだい one machine
広|コウ|ひろ(い)|wide|5|desc|広い ひろい wide; 広場 ひろば plaza
住|ジュウ|す(む)|live, reside|7|actions|住む すむ to live; 住所 じゅうしょ address
真|シン|ま まこと|true|10|desc|真ん中 まんなか middle; 写真 しゃしん photo
有|ユウ ウ|あ(る)|have, exist|6|desc|有名 ゆうめい famous; 有料 ゆうりょう paid
料|リョウ|-|fee, material|10|city|料理 りょうり cooking; 料金 りょうきん fee; 無料 むりょう free
工|コウ ク|-|craft|3|city|工場 こうじょう factory; 工事 こうじ construction
建|ケン コン|た(てる) た(つ)|build|9|actions|建物 たてもの building; 建てる たてる to build
急|キュウ|いそ(ぐ)|hurry|9|desc|急ぐ いそぐ to hurry; 急に きゅうに suddenly; 特急 とっきゅう limited express
止|シ|と(まる) と(める)|stop|4|actions|止まる とまる to stop; 止める とめる to stop (something); 中止 ちゅうし cancellation
送|ソウ|おく(る)|send|9|actions|送る おくる to send; 送料 そうりょう shipping fee; 放送 ほうそう broadcast
切|セツ サイ|き(る) き(れる)|cut|4|actions|切る きる to cut; 切手 きって stamp; 大切 たいせつ important
転|テン|ころ(ぶ) ころ(がる)|turn, roll|11|actions|転ぶ ころぶ to fall over; 自転車 じてんしゃ bicycle; 運転 うんてん driving
研|ケン|と(ぐ)|polish, study|9|actions|研究 けんきゅう research; 研修 けんしゅう training
究|キュウ|きわ(める)|investigate|7|actions|研究 けんきゅう research; 究める きわめる to master
楽|ガク ラク|たの(しい)|fun, music|13|desc|楽しい たのしい fun; 音楽 おんがく music; 楽 らく easy
起|キ|お(きる) お(こす)|wake, rise|10|actions|起きる おきる to wake up; 起こす おこす to wake someone
着|チャク|き(る) つ(く)|wear, arrive|12|actions|着る きる to wear; 着く つく to arrive; 下着 したぎ underwear
病|ビョウ|や(む) やまい|illness|10|body|病気 びょうき illness; 病人 びょうにん patient
質|シツ シチ|-|quality, matter|15|desc|質問 しつもん question; 品質 ひんしつ quality
待|タイ|ま(つ)|wait|9|actions|待つ まつ to wait; 招待 しょうたい invitation
試|シ|ため(す) こころ(みる)|test, try|13|actions|試験 しけん exam; 試合 しあい match; 試す ためす to try
族|ゾク|-|tribe, family|11|people|家族 かぞく family; 民族 みんぞく ethnic group
銀|ギン|-|silver|14|city|銀行 ぎんこう bank; 銀 ぎん silver
早|ソウ サッ|はや(い)|early|6|time|早い はやい early, fast; 早く はやく quickly; 早朝 そうちょう early morning
映|エイ|うつ(る) うつ(す) は(える)|reflect, project|9|city|映画 えいが movie; 映画館 えいがかん cinema
親|シン|おや した(しい)|parent, intimate|16|people|親 おや parent; 両親 りょうしん parents; 親切 しんせつ kind
験|ケン|-|test, effect|18|desc|試験 しけん exam; 経験 けいけん experience
英|エイ|-|England, excellent|8|city|英語 えいご English; 英国 えいこく United Kingdom
医|イ|-|medicine|7|people|医者 いしゃ doctor; 医学 いがく medicine
仕|シ ジ|つか(える)|serve, do|5|actions|仕事 しごと work; 仕方 しかた way of doing
去|キョ コ|さ(る)|leave, past|5|time|去年 きょねん last year; 過去 かこ past
味|ミ|あじ|taste|8|desc|味 あじ taste; 意味 いみ meaning; 趣味 しゅみ hobby
写|シャ|うつ(す)|copy, photograph|5|actions|写真 しゃしん photo; 写す うつす to copy
字|ジ|あざ|character, letter|6|city|文字 もじ character; 漢字 かんじ kanji; 名字 みょうじ surname
答|トウ|こた(える)|answer|12|actions|答え こたえ answer; 答える こたえる to answer; 回答 かいとう reply
夜|ヤ|よる よ|night|8|time|夜 よる night; 今夜 こんや tonight; 夜中 よなか midnight
音|オン イン|おと ね|sound|9|city|音 おと sound; 音楽 おんがく music; 発音 はつおん pronunciation
注|チュウ|そそ(ぐ)|pour, note|8|actions|注意 ちゅうい caution; 注文 ちゅうもん order
歌|カ|うた うた(う)|song, sing|14|actions|歌 うた song; 歌う うたう to sing; 歌手 かしゅ singer
悪|アク オ|わる(い)|bad|11|desc|悪い わるい bad; 悪口 わるぐち insult
図|ズ ト|はか(る)|diagram, map|7|city|地図 ちず map; 図書館 としょかん library
室|シツ|むろ|room|9|city|教室 きょうしつ classroom; 会議室 かいぎしつ meeting room
歩|ホ ブ フ|ある(く) あゆ(む)|walk|8|actions|歩く あるく to walk; 散歩 さんぽ stroll
風|フウ フ|かぜ|wind, style|9|nature|風 かぜ wind; 台風 たいふう typhoon; 和風 わふう Japanese style
紙|シ|かみ|paper|10|city|紙 かみ paper; 手紙 てがみ letter
春|シュン|はる|spring|9|time|春 はる spring; 春休み はるやすみ spring break
館|カン|やかた|building, hall|16|city|映画館 えいがかん cinema; 図書館 としょかん library; 旅館 りょかん inn
屋|オク|や|roof, shop|9|city|部屋 へや room; 本屋 ほんや bookshop; 屋上 おくじょう rooftop
色|ショク シキ|いろ|colour|6|desc|色 いろ colour; 茶色 ちゃいろ brown
走|ソウ|はし(る)|run|7|actions|走る はしる to run; 走者 そうしゃ runner
秋|シュウ|あき|autumn|9|time|秋 あき autumn; 秋風 あきかぜ autumn wind
夏|カ ゲ|なつ|summer|10|time|夏 なつ summer; 夏休み なつやすみ summer holiday
洋|ヨウ|-|ocean, Western|9|city|洋服 ようふく clothes; 西洋 せいよう the West
旅|リョ|たび|travel|10|actions|旅行 りょこう travel; 旅 たび journey; 旅館 りょかん inn
服|フク|-|clothes|8|city|服 ふく clothes; 洋服 ようふく clothes
夕|セキ|ゆう|evening|3|time|夕方 ゆうがた evening; 夕べ ゆうべ last night; 夕飯 ゆうはん dinner
借|シャク|か(りる)|borrow|10|actions|借りる かりる to borrow; 借金 しゃっきん debt
肉|ニク|-|meat|6|city|肉 にく meat; 牛肉 ぎゅうにく beef; 豚肉 ぶたにく pork
貸|タイ|か(す)|lend|12|actions|貸す かす to lend; 貸家 かしや house for rent
堂|ドウ|-|hall|11|city|食堂 しょくどう canteen; 堂々 どうどう majestic
鳥|チョウ|とり|bird|11|nature|鳥 とり bird; 小鳥 ことり small bird
飯|ハン|めし|cooked rice, meal|12|city|ご飯 ごはん meal, rice; 朝ご飯 あさごはん breakfast; 昼ご飯 ひるごはん lunch
勉|ベン|-|effort|10|actions|勉強 べんきょう study; 勉学 べんがく studies
冬|トウ|ふゆ|winter|5|time|冬 ふゆ winter; 冬休み ふゆやすみ winter break
昼|チュウ|ひる|noon, daytime|9|time|昼 ひる noon; 昼ご飯 ひるごはん lunch; 昼休み ひるやすみ lunch break
茶|チャ サ|-|tea|9|city|お茶 おちゃ tea; 茶色 ちゃいろ brown; 喫茶店 きっさてん cafe
弟|ダイ テイ デ|おとうと|younger brother|7|people|弟 おとうと younger brother; 兄弟 きょうだい siblings
牛|ギュウ|うし|cow|4|nature|牛 うし cow; 牛肉 ぎゅうにく beef; 牛乳 ぎゅうにゅう milk
兄|ケイ キョウ|あに|older brother|5|people|兄 あに older brother; お兄さん おにいさん older brother (polite)
妹|マイ|いもうと|younger sister|8|people|妹 いもうと younger sister
姉|シ|あね|older sister|8|people|姉 あね older sister; お姉さん おねえさん older sister (polite)
漢|カン|-|Chinese, Han|13|city|漢字 かんじ kanji; 漢語 かんご Sino-Japanese word
`;

/* Vocabulary rows: word|reading|meaning|category */
const VOCAB_N4_RAW = `
開ける|あける|to open (something)|verbs
閉める|しめる|to close (something)|verbs
付ける|つける|to attach, to turn on|verbs
消す|けす|to turn off, to erase|verbs
教える|おしえる|to teach, to tell|verbs
習う|ならう|to learn|verbs
覚える|おぼえる|to remember, to memorise|verbs
忘れる|わすれる|to forget|verbs
考える|かんがえる|to think, to consider|verbs
知る|しる|to know|verbs
思う|おもう|to think, to feel|verbs
使う|つかう|to use|verbs
作る|つくる|to make|verbs
持つ|もつ|to hold, to have|verbs
待つ|まつ|to wait|verbs
呼ぶ|よぶ|to call|verbs
歩く|あるく|to walk|verbs
走る|はしる|to run|verbs
泳ぐ|およぐ|to swim|verbs
歌う|うたう|to sing|verbs
踊る|おどる|to dance|verbs
笑う|わらう|to laugh, to smile|verbs
泣く|なく|to cry|verbs
怒る|おこる|to get angry|verbs
困る|こまる|to be in trouble|verbs
驚く|おどろく|to be surprised|verbs
疲れる|つかれる|to get tired|verbs
寝る|ねる|to sleep, to go to bed|verbs
起きる|おきる|to wake up, to get up|verbs
着る|きる|to wear (on the body)|verbs
脱ぐ|ぬぐ|to take off (clothes)|verbs
履く|はく|to put on (shoes, trousers)|verbs
乗る|のる|to ride, to get on|verbs
降りる|おりる|to get off, to go down|verbs
乗り換える|のりかえる|to transfer (trains)|verbs
止まる|とまる|to stop (by itself)|verbs
止める|とめる|to stop (something)|verbs
動く|うごく|to move|verbs
運ぶ|はこぶ|to carry, to transport|verbs
送る|おくる|to send|verbs
届ける|とどける|to deliver|verbs
渡す|わたす|to hand over|verbs
受ける|うける|to receive, to take (an exam)|verbs
貸す|かす|to lend|verbs
借りる|かりる|to borrow|verbs
返す|かえす|to return (something)|verbs
払う|はらう|to pay|verbs
売る|うる|to sell|verbs
集める|あつめる|to collect|verbs
集まる|あつまる|to gather|verbs
決める|きめる|to decide|verbs
始める|はじめる|to begin (something)|verbs
始まる|はじまる|to begin (by itself)|verbs
続ける|つづける|to continue (something)|verbs
変わる|かわる|to change (by itself)|verbs
変える|かえる|to change (something)|verbs
増える|ふえる|to increase|verbs
減る|へる|to decrease|verbs
直す|なおす|to fix, to correct|verbs
壊す|こわす|to break (something)|verbs
壊れる|こわれる|to be broken|verbs
落とす|おとす|to drop|verbs
落ちる|おちる|to fall|verbs
拾う|ひろう|to pick up|verbs
探す|さがす|to look for|verbs
見つける|みつける|to find|verbs
見える|みえる|to be visible|verbs
聞こえる|きこえる|to be audible|verbs
比べる|くらべる|to compare|verbs
選ぶ|えらぶ|to choose|verbs
並ぶ|ならぶ|to line up|verbs
育てる|そだてる|to raise, to bring up|verbs
生まれる|うまれる|to be born|verbs
死ぬ|しぬ|to die|verbs
間に合う|まにあう|to be in time|verbs
遅れる|おくれる|to be late|verbs
急ぐ|いそぐ|to hurry|verbs
結婚する|けっこんする|to get married|verbs
予約する|よやくする|to make a reservation|verbs
連絡する|れんらくする|to get in touch|verbs
心配する|しんぱいする|to worry|verbs
散歩する|さんぽする|to take a walk|verbs
掃除する|そうじする|to clean|verbs
洗濯する|せんたくする|to do laundry|verbs
運転する|うんてんする|to drive|verbs
優しい|やさしい|kind, gentle|adj
厳しい|きびしい|strict, severe|adj
悲しい|かなしい|sad|adj
寂しい|さびしい|lonely|adj
眠い|ねむい|sleepy|adj
痛い|いたい|painful|adj
怖い|こわい|scary|adj
恥ずかしい|はずかしい|embarrassing|adj
汚い|きたない|dirty|adj
危ない|あぶない|dangerous|adj
太い|ふとい|thick, fat|adj
細い|ほそい|thin, narrow|adj
深い|ふかい|deep|adj
浅い|あさい|shallow|adj
硬い|かたい|hard|adj
柔らかい|やわらかい|soft|adj
弱い|よわい|weak|adj
軽い|かるい|light (weight)|adj
暗い|くらい|dark|adj
薄い|うすい|thin, weak (taste)|adj
遠い|とおい|far|adj
速い|はやい|fast|adj
遅い|おそい|slow, late|adj
若い|わかい|young|adj
珍しい|めずらしい|rare, unusual|adj
詳しい|くわしい|detailed, knowledgeable|adj
上手|じょうず|skilled|adj
下手|へた|unskilled, poor at|adj
特別|とくべつ|special|adj
大切|たいせつ|important, precious|adj
大変|たいへん|serious, hard, very|adj
便利|べんり|convenient|adj
不便|ふべん|inconvenient|adj
有名|ゆうめい|famous|adj
親切|しんせつ|kind, helpful|adj
丈夫|じょうぶ|sturdy, healthy|adj
無理|むり|impossible, too much|adj
十分|じゅうぶん|enough|adj
自由|じゆう|free, freedom|adj
必要|ひつよう|necessary|adj
会議|かいぎ|meeting|work
社長|しゃちょう|company president|work
部長|ぶちょう|department head|work
仕事|しごと|work, job|work
研究|けんきゅう|research|work
試験|しけん|exam|work
宿題|しゅくだい|homework|work
授業|じゅぎょう|class, lesson|work
説明|せつめい|explanation|work
質問|しつもん|question|work
問題|もんだい|problem, question|work
答え|こたえ|answer|work
意味|いみ|meaning|work
経験|けいけん|experience|work
趣味|しゅみ|hobby|work
予定|よてい|plan, schedule|work
約束|やくそく|promise, appointment|work
用事|ようじ|errand, business|work
準備|じゅんび|preparation|work
計画|けいかく|plan|work
辞書|じしょ|dictionary|work
雑誌|ざっし|magazine|work
手紙|てがみ|letter|work
荷物|にもつ|luggage, baggage|work
切手|きって|postage stamp|work
旅行|りょこう|trip, travel|travel
空港|くうこう|airport|travel
飛行機|ひこうき|aeroplane|travel
切符|きっぷ|ticket|travel
乗り場|のりば|boarding point|travel
交通|こうつう|traffic, transport|travel
信号|しんごう|traffic light|travel
交差点|こうさてん|intersection|travel
橋|はし|bridge|travel
道|みち|road, way|travel
地図|ちず|map|travel
住所|じゅうしょ|address|travel
地下鉄|ちかてつ|subway|travel
特急|とっきゅう|limited express|travel
銀行|ぎんこう|bank|places
郵便局|ゆうびんきょく|post office|places
病院|びょういん|hospital|places
図書館|としょかん|library|places
映画館|えいがかん|cinema|places
喫茶店|きっさてん|coffee shop|places
食堂|しょくどう|canteen, diner|places
工場|こうじょう|factory|places
公園|こうえん|park|places
警察|けいさつ|police|places
交番|こうばん|police box|places
薬|くすり|medicine|health
熱|ねつ|fever, heat|health
風邪|かぜ|cold (illness)|health
頭|あたま|head|health
顔|かお|face|health
髪|かみ|hair|health
首|くび|neck|health
気持ち|きもち|feeling|health
気分|きぶん|mood, feeling|health
病気|びょうき|illness|health
体|からだ|body|health
台風|たいふう|typhoon|nature
地震|じしん|earthquake|nature
季節|きせつ|season|nature
春|はる|spring|nature
夏|なつ|summer|nature
秋|あき|autumn|nature
冬|ふゆ|winter|nature
風|かぜ|wind|nature
鳥|とり|bird|nature
朝ご飯|あさごはん|breakfast|food
昼ご飯|ひるごはん|lunch|food
晩ご飯|ばんごはん|dinner|food
肉|にく|meat|food
牛肉|ぎゅうにく|beef|food
豚肉|ぶたにく|pork|food
鶏肉|とりにく|chicken (meat)|food
果物|くだもの|fruit|food
牛乳|ぎゅうにゅう|milk|food
砂糖|さとう|sugar|food
塩|しお|salt|food
醤油|しょうゆ|soy sauce|food
料理|りょうり|cooking, dish|food
部屋|へや|room|home
台所|だいどころ|kitchen|home
玄関|げんかん|entrance hall|home
階段|かいだん|stairs|home
庭|にわ|garden|home
壁|かべ|wall|home
机|つくえ|desk|home
椅子|いす|chair|home
鍵|かぎ|key|home
財布|さいふ|wallet|home
鞄|かばん|bag|home
傘|かさ|umbrella|home
靴|くつ|shoes|home
服|ふく|clothes|home
洋服|ようふく|Western clothes|home
眼鏡|めがね|glasses|home
時計|とけい|watch, clock|home
写真|しゃしん|photograph|home
映画|えいが|film|home
音楽|おんがく|music|home
絵|え|picture, drawing|home
漫画|まんが|manga|home
事故|じこ|accident|home
火事|かじ|fire|home
試合|しあい|match, game|home
運動|うんどう|exercise|home
買い物|かいもの|shopping|home
料金|りょうきん|fee, fare|home
無料|むりょう|free of charge|home
両親|りょうしん|parents|people
兄弟|きょうだい|siblings|people
親戚|しんせき|relatives|people
大人|おとな|adult|people
彼|かれ|he, boyfriend|people
彼女|かのじょ|she, girlfriend|people
皆|みんな|everyone|people
自分|じぶん|oneself|people
相手|あいて|partner, other party|people
社会|しゃかい|society|words
文化|ぶんか|culture|words
歴史|れきし|history|words
経済|けいざい|economy|words
政治|せいじ|politics|words
世界|せかい|world|words
将来|しょうらい|future|words
今度|こんど|next time, this time|words
最近|さいきん|recently|words
去年|きょねん|last year|words
再来年|さらいねん|year after next|words
毎朝|まいあさ|every morning|words
毎晩|まいばん|every night|words
例えば|たとえば|for example|words
全部|ぜんぶ|all|words
必ず|かならず|without fail|words
特に|とくに|especially|words
本当に|ほんとうに|really|words
全然|ぜんぜん|not at all (with negative)|words
一度|いちど|once|words
初めて|はじめて|for the first time|words
最後|さいご|last, end|words
最初|さいしょ|first, beginning|words
一緒に|いっしょに|together|words
別に|べつに|not particularly|words
だんだん|だんだん|gradually|words
`;

/* Extra vocabulary categories for the N4 words */
const VOCAB_N4_CATS = [['work', 'School & work'], ['home', 'Home & things'], ['health', 'Body & health'], ['nature', 'Nature & seasons']];

/* Grammar lessons for N4 */
const LESSONS_N4 = [
  { id: 'l10', lv: 'n4', jp: 'て形', title: 'The て-form',
    body: `<p>The <b>て-form</b> links actions and builds many patterns. How you make it depends on the verb group.</p>
      <ul><li><b>Group 2</b> (ends in えるいる-type): drop る, add て. 食べる → 食べて.</li>
      <li><b>Group 1</b>: う つ る → <b>って</b> (買って, 待って, 帰って). む ぶ ぬ → <b>んで</b> (飲んで, 遊んで, 死んで). く → <b>いて</b> (書いて). ぐ → <b>いで</b> (泳いで). す → <b>して</b> (話して).</li>
      <li>Exception: 行く → 行って. Irregular: する → して, 来る → 来て.</li></ul>
      <p>Common patterns: <b>～てください</b> (please do), <b>～ています</b> (is doing, or a state), <b>～てもいいです</b> (may), <b>～てはいけません</b> (must not).</p>`,
    ex: [['ここに名前を書いてください', 'Koko ni namae o kaite kudasai', 'Please write your name here'], ['今、ご飯を食べています', 'Ima, gohan o tabete imasu', 'I am eating right now'], ['写真を撮ってもいいですか', 'Shashin o totte mo ii desu ka', 'May I take a photo?'], ['ここで走ってはいけません', 'Koko de hashitte wa ikemasen', 'You must not run here']],
    quiz: [{ q: 'What is the て-form of 飲む?', o: ['飲んで', '飲って', '飲いて'], a: 0 }, { q: 'What is the て-form of 書く?', o: ['書って', '書んで', '書いて'], a: 2 }, { q: 'Which pattern means “may I…?”', o: ['～てはいけません', '～てもいいですか', '～てください'], a: 1 }] },
  { id: 'l11', lv: 'n4', jp: 'ない形', title: 'The ない-form (plain negative)',
    body: `<p>The <b>ない-form</b> is the plain negative, used in casual speech and in many patterns.</p>
      <ul><li><b>Group 2</b>: drop る, add ない. 食べる → 食べない.</li>
      <li><b>Group 1</b>: change the final u-sound to the a-sound and add ない. 書く → 書かない, 飲む → 飲まない. Verbs ending in う use わ: 買う → 買わない.</li>
      <li>する → しない. 来る → 来ない (こない). ある → ない.</li></ul>
      <p>Patterns: <b>～ないでください</b> (please do not), <b>～なければなりません</b> (must), <b>～なくてもいいです</b> (do not have to).</p>`,
    ex: [['ここで写真を撮らないでください', 'Koko de shashin o toranaide kudasai', 'Please do not take photos here'], ['明日は早く起きなければなりません', 'Ashita wa hayaku okinakereba narimasen', 'I have to get up early tomorrow'], ['今日は来なくてもいいです', 'Kyō wa konakute mo ii desu', 'You do not have to come today']],
    quiz: [{ q: 'What is the ない-form of 買う?', o: ['買あない', '買わない', '買らない'], a: 1 }, { q: 'Which means “I have to go”?', o: ['行かなければなりません', '行かないでください', '行ってもいいです'], a: 0 }] },
  { id: 'l12', lv: 'n4', jp: 'た形', title: 'The た-form and experiences',
    body: `<p>The <b>た-form</b> is the plain past. Make it exactly like the て-form, but with <b>た / だ</b> instead of て / で: 食べた, 書いた, 飲んだ, 行った.</p>
      <ul><li><b>～たことがあります</b> = I have done it before. 日本へ行ったことがあります.</li>
      <li><b>～たり～たりします</b> = do things such as A and B. 週末は本を読んだり、映画を見たりします.</li>
      <li><b>～たあとで</b> = after doing. ご飯を食べたあとで、散歩します.</li>
      <li><b>～ないで</b> = without doing. 朝ご飯を食べないで学校へ行きました.</li></ul>`,
    ex: [['寿司を食べたことがあります', 'Sushi o tabeta koto ga arimasu', 'I have eaten sushi'], ['休みの日は、掃除をしたり、買い物に行ったりします', 'Yasumi no hi wa, sōji o shitari, kaimono ni ittari shimasu', 'On days off I clean, go shopping and so on'], ['仕事が終わったあとで、飲みに行きます', 'Shigoto ga owatta ato de, nomi ni ikimasu', 'After work I go for a drink']],
    quiz: [{ q: 'How do you say “I have been to Japan”?', o: ['日本へ行きたいです', '日本へ行ったことがあります', '日本へ行かなければなりません'], a: 1 }, { q: 'What is the た-form of 飲む?', o: ['飲んだ', '飲った', '飲いた'], a: 0 }] },
  { id: 'l13', lv: 'n4', jp: '可能形', title: 'Wanting and being able to',
    body: `<p><b>～たい</b> means “want to do”: ます-stem + たい. 行きたい, 食べたい. It conjugates like an い-adjective (行きたくない, 行きたかった).</p>
      <p>The <b>potential form</b> means “can do”:</p>
      <ul><li><b>Group 2</b>: drop る, add られる. 食べる → 食べられる.</li>
      <li><b>Group 1</b>: change the final u-sound to the e-sound and add る. 書く → 書ける, 飲む → 飲める.</li>
      <li>する → できる. 来る → 来られる.</li></ul>
      <p>Another way is <b>～ことができます</b>: 泳ぐことができます. With the potential form, the object is often marked with が: 日本語が話せます.</p>`,
    ex: [['日本で温泉に入りたいです', 'Nihon de onsen ni hairitai desu', 'I want to take a hot spring bath in Japan'], ['漢字が少し読めます', 'Kanji ga sukoshi yomemasu', 'I can read a little kanji'], ['泳ぐことができません', 'Oyogu koto ga dekimasen', 'I cannot swim']],
    quiz: [{ q: 'What is the potential form of 食べる?', o: ['食べれる', '食べられる', '食べえる'], a: 1 }, { q: 'What is the potential form of 飲む?', o: ['飲める', '飲まれる', '飲めない'], a: 0 }] },
  { id: 'l14', lv: 'n4', jp: 'あげる・くれる・もらう', title: 'Giving and receiving',
    body: `<p>Japanese has separate verbs depending on who gives to whom.</p>
      <ul><li><b>あげる</b>: I (or someone) give to another person.</li>
      <li><b>くれる</b>: someone gives to me (or my group).</li>
      <li><b>もらう</b>: I receive from someone.</li></ul>
      <p>Add て-form to talk about favours: <b>～てあげる</b> (do for someone), <b>～てくれる</b> (someone does for me), <b>～てもらう</b> (I get someone to do it). These often express gratitude.</p>`,
    ex: [['友達に本をあげました', 'Tomodachi ni hon o agemashita', 'I gave a book to a friend'], ['母が私にプレゼントをくれました', 'Haha ga watashi ni purezento o kuremashita', 'My mother gave me a present'], ['先生に教えてもらいました', 'Sensei ni oshiete moraimashita', 'I was taught by the teacher']],
    quiz: [{ q: 'Someone gives something to you. Which verb?', o: ['あげる', 'くれる', 'もらう'], a: 1 }, { q: 'How do you say “I received a book from a friend”?', o: ['友達に本をもらいました', '友達に本をあげました', '友達が本をあげました'], a: 0 }] },
  { id: 'l15', lv: 'n4', jp: '条件と理由', title: 'Conditions and reasons',
    body: `<p><b>～たら</b> means “if / when”: た-form + ら. 雨が降ったら、行きません.</p>
      <p><b>～と</b> gives a natural result: 春になると、暖かくなります.</p>
      <p><b>～ば</b> is another “if”: 安ければ買います.</p>
      <p>Reasons: <b>～から</b> (because, after a plain or polite clause) and <b>～ので</b> (softer; use なので after nouns and な-adjectives). <b>～のに</b> means “although”.</p>`,
    ex: [['時間があったら、遊びに来てください', 'Jikan ga attara, asobi ni kite kudasai', 'If you have time, please come over'], ['頭が痛いので、薬を飲みました', 'Atama ga itai node, kusuri o nomimashita', 'My head hurt, so I took medicine'], ['勉強したのに、わかりませんでした', 'Benkyō shita noni, wakarimasen deshita', 'I studied, yet I did not understand']],
    quiz: [{ q: 'Which word means “although”?', o: ['から', 'ので', 'のに'], a: 2 }, { q: 'Which is the softer “because”?', o: ['ので', 'のに', 'たら'], a: 0 }] },
  { id: 'l16', lv: 'n4', jp: '意向形', title: 'Plans and intentions',
    body: `<p>The <b>volitional form</b> means “let’s” or “I will”: Group 2 drop る, add よう (食べよう). Group 1 changes the final sound to the o-sound plus う (行く → 行こう, 飲む → 飲もう). する → しよう, 来る → 来よう.</p>
      <ul><li><b>～ようと思っています</b>: I am thinking of doing.</li>
      <li><b>～つもりです</b>: I intend to. Dictionary form + つもり.</li>
      <li><b>～予定です</b>: it is scheduled.</li>
      <li><b>～ことにしました</b>: I decided to. <b>～ことになりました</b>: it has been decided (by circumstances).</li></ul>`,
    ex: [['来年、日本へ行こうと思っています', 'Rainen, Nihon e ikō to omotte imasu', 'I am thinking of going to Japan next year'], ['夏休みに京都へ行くつもりです', 'Natsuyasumi ni Kyōto e iku tsumori desu', 'I intend to go to Kyoto in the summer holidays'], ['毎日勉強することにしました', 'Mainichi benkyō suru koto ni shimashita', 'I decided to study every day']],
    quiz: [{ q: 'What is the volitional form of 行く?', o: ['行こう', '行きよう', '行くう'], a: 0 }, { q: 'Which means “I intend to”?', o: ['～つもりです', '～てください', '～たことがあります'], a: 0 }] },
  { id: 'l17', lv: 'n4', jp: '比較とそう', title: 'Comparing and appearances',
    body: `<p>Comparison: <b>AはBより～です</b> (A is more… than B). Ask with <b>AとBとどちらが～ですか</b>, answer with <b>Aのほうが～です</b>. The superlative is <b>～の中でいちばん～</b>.</p>
      <p><b>～そうです</b> means “looks like”: drop the final い of an い-adjective (おいしい → おいしそう) or add it to the stem of a verb (降る → 降りそう). <b>～すぎる</b> means “too much”: 食べすぎました.</p>
      <p>Note: いい → よさそう, ない → なさそう.</p>`,
    ex: [['電車はバスより速いです', 'Densha wa basu yori hayai desu', 'Trains are faster than buses'], ['このケーキはおいしそうですね', 'Kono kēki wa oishisō desu ne', 'This cake looks delicious'], ['昨日は飲みすぎました', 'Kinō wa nomisugimashita', 'I drank too much yesterday']],
    quiz: [{ q: 'Which particle marks the thing compared against (“than”)?', o: ['より', 'まで', 'から'], a: 0 }, { q: 'How do you say “looks delicious”?', o: ['おいしいそう', 'おいしそう', 'おいしくそう'], a: 1 }] },
  { id: 'l18', lv: 'n4', jp: '受身・使役・敬語', title: 'Passive, causative and polite speech',
    body: `<p><b>Passive</b> (～られる): Group 2 add られる (食べる → 食べられる); Group 1 change to the a-sound and add れる (ほめる → ほめられる, 書く → 書かれる). 先生にほめられました = I was praised by the teacher.</p>
      <p><b>Causative</b> (～させる): make or let someone do. Group 2 add させる; Group 1 a-sound + せる. 子供に野菜を食べさせます.</p>
      <p><b>Polite speech (敬語)</b>: <b>お～ください</b> (お待ちください), <b>お～になる</b> (respectful), <b>お～する</b> (humble). Special verbs: いらっしゃる (be, go, come), 召し上がる (eat, drink), 申す (say), 参る (go, come), ございます (be).</p>`,
    ex: [['先生にほめられました', 'Sensei ni homeraremashita', 'I was praised by my teacher'], ['少々お待ちください', 'Shōshō omachi kudasai', 'Please wait a moment'], ['田中と申します', 'Tanaka to mōshimasu', 'My name is Tanaka']],
    quiz: [{ q: 'Which is the humble way to say “my name is X”?', o: ['Xです', 'Xと申します', 'Xでございます'], a: 1 }, { q: 'Which is the polite request “please wait”?', o: ['お待ちください', '待ってね', '待つ'], a: 0 }] },
  { id: 'l19', lv: 'n4', jp: 'ておく・てしまう・てみる', title: 'Useful て-form extras',
    body: `<p>More patterns built on the て-form:</p>
      <ul><li><b>～ておく</b>: do in advance. 予約しておきます.</li>
      <li><b>～てしまう</b>: finish completely, or do by accident (regret). 全部食べてしまいました.</li>
      <li><b>～てみる</b>: try doing. この服を着てみてもいいですか.</li>
      <li><b>～てくる / ～ていく</b>: come to be, go on being. 暗くなってきました.</li></ul>
      <p>Also useful: noun-modifying clauses put the plain form before the noun: 私が昨日見た映画 (the movie I saw yesterday).</p>`,
    ex: [['ホテルを予約しておきました', 'Hoteru o yoyaku shite okimashita', 'I booked the hotel in advance'], ['財布を忘れてしまいました', 'Saifu o wasurete shimaimashita', 'I forgot my wallet (oh no)'], ['この料理を食べてみてください', 'Kono ryōri o tabete mite kudasai', 'Please try this dish']],
    quiz: [{ q: 'Which pattern means “try doing”?', o: ['～てみる', '～ておく', '～てしまう'], a: 0 }, { q: 'Which pattern expresses doing something in advance?', o: ['～てしまう', '～ておく', '～てくる'], a: 1 }] }
];

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

/* ============ CORE ============ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const rnd = n => Math.floor(Math.random() * n);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const dayKey = d => { d = d || new Date(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };

/* ---- state ---- */
const KEY = 'nihon-ni-ikitai.v1';
const DEF = () => ({ saved: 0, xp: 0, items: {}, days: {}, best: {}, ach: {}, lessons: {}, games: 0, perfect: 0, tot: { ok: 0, all: 0 },
  flags: {}, last: 0, mine: [], prof: { name: '', lang: '', color: '--c-hira', face: 'panda', glyph: '日', motto: '', nameAt: 0 },
  set: { goal: 30, romaji: true, sound: true, speak: true, font: 'klee', theme: 'system', qRomaji: false, qEnglish: false } });
/* storage is per signed-in user so several people can share one browser */
let STORE_UID = '';
const storeKey = () => KEY + (STORE_UID ? '.u.' + STORE_UID : '');
const mergeState = o => {
  const d = DEF(), s = Object.assign(d, o);
  s.set = Object.assign(d.set, o.set || {}); s.tot = Object.assign(DEF().tot, o.tot || {}); s.prof = Object.assign(DEF().prof, o.prof || {}); s.flags = Object.assign({}, o.flags || {});
  return s;
};
let S = DEF();
function loadState() {
  try {
    const o = JSON.parse(localStorage.getItem(storeKey()) || 'null');
    S = (o && typeof o === 'object') ? mergeState(o) : DEF();
  } catch (e) { S = DEF(); /* storage unavailable: run in memory */ }
}
let saveT;
function save() { S.saved = Date.now(); if (typeof cloudDirty === 'function') cloudDirty(); if (typeof syncDirty === 'function') syncDirty(); clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(storeKey(), JSON.stringify(S)); } catch (e) {} }, 200); }

const UI = { ptab: 'overview', lv: 'all', dex: 'hira', dexFilter: 'all', dexQ: '', dexCat: 'all', vocCat: 'all', study: 'cards', lesson: null,
  cfg: { deck: 'hira', mode: 'mix', size: 10, dir: 'mixed' }, quiz: { deck: 'hira', dir: 'mixed', size: 10 },
  game: { deck: 'h', scope: 'basic', pairs: 8 } };

/* ---- item state & spaced repetition ---- */
const DAY = 864e5, GAP = [0, 1, 3, 7, 14, 30];
const peek = id => S.items[id] || { b: 0, due: 0, c: 0, w: 0, s: 0 };
const ref = id => S.items[id] || (S.items[id] = { b: 0, due: 0, c: 0, w: 0, s: 0 });
const lvl = id => { const x = peek(id); return x.b >= 5 ? 3 : x.b >= 3 ? 2 : (x.b >= 1 || x.s > 0) ? 1 : 0; };
const LVL_NAME = ['New', 'Learning', 'Familiar', 'Mastered'];

function today() { const k = dayKey(); return S.days[k] || (S.days[k] = { xp: 0, rev: 0, learn: 0, games: 0, ok: 0, all: 0, met: false }); }
function tally(ok) { S.tot.all++; const d = today(); d.all++; if (ok) { S.tot.ok++; d.ok++; } }
function addXP(n) {
  if (!n) return;
  const d = today(); d.xp += n; S.xp += n;
  const now = new Date(), hr = now.getHours();
  if (S.last && now - S.last > 7 * DAY) S.flags.comeback = 1;
  if (hr < 5) S.flags.night = 1; else if (hr < 7) S.flags.early = 1;
  S.last = +now;
  if (!d.met && d.xp >= S.set.goal) { d.met = true; toast('Daily goal reached'); sfx.win(); }
  checkAch(); refreshChips(); save();
}
/* g: 0 again, 1 hard, 2 good, 3 easy. Returns true when the item was new. */
function grade(id, g) {
  const x = ref(id), now = Date.now(), first = x.s === 0;
  x.s++;
  if (g === 0) { x.w++; x.b = Math.max(0, x.b - 1); x.due = now + 10 * 60e3; tally(false); }
  else {
    x.c++;
    if (g === 1) { x.b = Math.max(1, x.b); x.due = now + Math.max(36e5, GAP[x.b] * DAY * 0.5); }
    else { x.b = Math.min(5, x.b + (g === 3 ? 2 : 1)); x.due = now + GAP[x.b] * DAY; }
    tally(true);
  }
  const d = today(); if (first) d.learn++; else d.rev++;
  addXP(g + (first && g > 0 ? 1 : 0));
  return first;
}
/* lighter update used by quizzes and games */
function touch(id, ok) {
  const x = ref(id), now = Date.now(), first = x.s === 0;
  x.s++;
  if (ok) { x.c++; if (x.b === 0) { x.b = 1; x.due = now + DAY; } else if (x.due <= now) { x.b = Math.min(5, x.b + 1); x.due = now + GAP[x.b] * DAY; } }
  else { x.w++; if (x.b > 1) x.b--; x.due = now + 10 * 60e3; }
  tally(ok); if (first) today().learn++;
  save();
}
function markKnown(id) { const x = ref(id); x.b = 5; x.s = Math.max(1, x.s); x.due = Date.now() + 30 * DAY; save(); checkAch(); }
function resetItem(id) { delete S.items[id]; save(); }

const LV_CHIPS = [['all', 'N5 + N4'], ['n5', 'N5 only'], ['n4', 'N4 only']];
const lvOk = i => UI.lv === 'all' || !i.jlpt || i.jlpt === UI.lv;
const poolOf = deck => ((deck && deck !== 'all') ? DECKS[deck].items : ALL).filter(lvOk);
const dueList = deck => poolOf(deck).filter(i => { const x = S.items[i.id]; return x && x.s > 0 && x.due <= Date.now(); }).sort((a, b) => S.items[a.id].due - S.items[b.id].due);
const newList = deck => poolOf(deck).filter(i => { const x = S.items[i.id]; return !x || (x.s === 0 && x.b === 0); });
const deckStat = key => { const r = [0, 0, 0, 0]; DECKS[key].items.forEach(i => r[lvl(i.id)]++); return r; };
const cnt = (deck, min) => DECKS[deck].items.filter(i => lvl(i.id) >= min).length;

function levelInfo() { const l = Math.floor(Math.sqrt(S.xp / 30)) + 1, lo = 30 * (l - 1) * (l - 1), hi = 30 * l * l; return { l, lo, hi, p: (S.xp - lo) / (hi - lo) }; }
function streak() {
  let n = 0; const d = new Date();
  if (!(S.days[dayKey(d)] || {}).met) d.setDate(d.getDate() - 1);
  while ((S.days[dayKey(d)] || {}).met) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---- badges live in badges.js; flag() records counters they read ---- */
const flag = (k, n) => { S.flags[k] = (S.flags[k] || 0) + (n == null ? 1 : n); save(); checkAch(); };
let achBusy = false;
function checkAch() {
  if (achBusy || typeof ACH === 'undefined') return; achBusy = true;
  ACH.forEach(a => { if (!S.ach[a.id] && a.test()) { S.ach[a.id] = Date.now(); toast('Badge unlocked: ' + a.name); } });
  achBusy = false;
}

/* ---- feedback: toast, sound, speech ---- */
let toastT;
function toast(msg) { const t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2300); }
let AC;
function beep(f, d, type, v) {
  if (!S.set.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'sine'; o.frequency.value = f; g.gain.value = v || 0.05;
    o.connect(g); g.connect(AC.destination); o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + d); o.stop(AC.currentTime + d);
  } catch (e) {}
}
const sfx = {
  ok: () => { beep(660, 0.09); setTimeout(() => beep(880, 0.12), 80); },
  no: () => beep(170, 0.2, 'square', 0.03),
  win: () => { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 0.14), i * 110)); },
  tick: () => beep(500, 0.04)
};
function speakText(it) {
  return it.type === 'j' ? it.ex[0].w : it.type === 'v' ? it.rd : it.ch;
}
function speak(text) {
  if (!S.set.speak) { toast('Speech is switched off in your Profile settings'); return; }
  try {
    const u = new SpeechSynthesisUtterance(text); u.lang = 'ja-JP'; u.rate = 0.85;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().indexOf('ja') === 0);
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { toast('Speech is not available in this browser'); }
}

/* ---- item display helpers ---- */
const answerOf = it => (it.type === 'h' || it.type === 'k') ? it.ro : it.mean;
const codeOf = it => it.type === 'h' ? 'H' + pad2(it.n) : it.type === 'k' ? 'K' + pad2(it.n) : it.type === 'j' ? 'J' + String(it.n).padStart(3, '0') : it.type === 'v' ? 'V' + String(it.n).padStart(3, '0') : 'P' + pad2(it.n);
const colorOf = it => ({ h: '--c-hira', k: '--c-kata', j: '--c-kanji', v: '--c-vocab', p: '--c-phrase' })[it.type];
const TYPE_NAME = { h: 'Hiragana', k: 'Katakana', j: 'Kanji', v: 'Word', p: 'Phrase' };
const kanjiRead = k => k.on.concat(k.kun).join('、');
const isKana = it => it.type === 'h' || it.type === 'k';

/* ---- generic UI helpers ---- */
const chipRow = (opts, cur, key) => '<div class="chips" role="group">' + opts.map(o =>
  `<button class="chip${String(o[0]) === String(cur) ? ' on' : ''}" data-act="ui" data-k="${key}" data-v="${esc(o[0])}" aria-pressed="${String(o[0]) === String(cur)}">${esc(o[1])}</button>`).join('') + '</div>';
const segBar = key => {
  const s = deckStat(key), n = DECKS[key].items.length;
  return `<div class="seg" style="--c:var(${DECKS[key].color})" title="${s[3]} mastered, ${s[2]} familiar, ${s[1]} learning, ${s[0]} new">` +
    [3, 2, 1].map(l => `<i class="s${l}" style="width:${(s[l] / n * 100).toFixed(2)}%"></i>`).join('') + '</div>';
};
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

const ACT = {};
const SPEAK_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

/* ---- clipboard ---- */
ACT.copyText = el => copyText(el.dataset.t);
function copyText(t) {
  const done = () => toast('Copied');
  const fallback = () => {
    const ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Select the text and copy it by hand'); } ta.remove();
  };
  try { navigator.clipboard.writeText(t).then(done, fallback); } catch (e) { fallback(); }
}

/* ---- modal ---- */
function openModal(html, cls) {
  const m = $('#modal');
  m.innerHTML = `<div class="dlg ${cls || ''}" role="dialog" aria-modal="true">${html}</div>`;
  m.hidden = false; document.body.classList.add('noscroll');
  const c = $('.dlg .x', m); if (c) c.focus();
}
function closeModal() { const m = $('#modal'); if (!m) return; m.hidden = true; m.innerHTML = ''; document.body.classList.remove('noscroll'); }

/* ---- routing ---- */
const ROUTES = ['start', 'today', 'dex', 'study', 'games', 'profile'];
const route = () => {
  let h = location.hash.slice(1); if (h === 'progress') h = 'profile';
  if (ROUTES.indexOf(h) >= 0) return h;
  return S.prof.lang ? 'today' : 'start';
};
function go(r) { if (location.hash === '#' + r) render(); else location.hash = r; }

function applyPrefs() {
  const r = document.documentElement;
  if (S.set.theme === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.set.theme);
  r.setAttribute('data-font', S.set.font);
}

/* Traced from the supplied red panda artwork (vector, 700 x 700 box). Generated file. */
const PANDA_ART = {"base": "#0a0206", "head": "<g fill-rule=\"evenodd\"><path fill=\"#0a0206\" d=\"M131.5 78.5Q124 81 116.5 88.5Q109 96 104.5 105.5Q100 115 97.5 124.5Q95 134 93 150Q91 166 91.5 182Q92 198 95.5 216Q99 234 106 250.5Q113 267 115.5 271Q118 275 120.5 276Q123 277 111 286Q99 295 91.5 298.5Q84 302 75.5 303.5Q67 305 66.5 307Q66 309 70.5 313Q75 317 84.5 320.5Q94 324 105 324Q116 324 122 322Q128 320 129 320.5Q130 321 124.5 328.5Q119 336 112.5 342.5Q106 349 98.5 353.5Q91 358 85.5 359.5Q80 361 79.5 362Q79 363 79.5 365Q80 367 84 368.5Q88 370 97.5 370Q107 370 113.5 367.5Q120 365 121 365.5Q122 366 109 378.5Q96 391 88.5 395.5Q81 400 74.5 401Q68 402 68 405.5Q68 409 77 412Q86 415 95 415Q104 415 114 412Q124 409 132.5 403.5Q141 398 140.5 417Q140 436 141.5 442.5Q143 449 144.5 449.5Q146 450 148 448.5Q150 447 150.5 438.5Q151 430 153.5 420.5Q156 411 158.5 425.5Q161 440 167.5 454Q174 468 182.5 478Q191 488 199 494Q207 500 211 501.5Q215 503 216.5 502.5Q218 502 218.5 500Q219 498 213.5 488Q208 478 205 467.5Q202 457 200.5 446.5Q199 436 199.5 426.5Q200 417 203 422Q206 427 214 434.5Q222 442 221 443.5Q220 445 220 449.5Q220 454 221 459Q222 464 223.5 466Q225 468 235 474.5Q245 481 262.5 488.5Q280 496 271 500Q262 504 251.5 511Q241 518 240 519.5Q239 521 239.5 524.5Q240 528 253 535.5Q266 543 280 555Q294 567 296.5 568Q299 569 303.5 568Q308 567 318.5 562.5Q329 558 329.5 553.5Q330 549 332.5 551.5Q335 554 342 556Q349 558 351.5 556.5Q354 555 356 558.5Q358 562 360 563Q362 564 366.5 563.5Q371 563 374 559Q377 555 379 556.5Q381 558 388 556Q395 554 397.5 551.5Q400 549 400.5 553.5Q401 558 411 562.5Q421 567 426 568Q431 569 443.5 558.5Q456 548 466.5 541.5Q477 535 477.5 535.5Q478 536 472 552.5Q466 569 463 583Q460 597 460.5 599.5Q461 602 464 602Q467 602 474.5 585.5Q482 569 499 543.5Q516 518 522 503.5Q528 489 528 502.5Q528 516 531 516Q534 516 535.5 513Q537 510 540 500Q543 490 545.5 474Q548 458 548 437.5Q548 417 546 405Q544 393 545 393Q546 393 549 398Q552 403 557.5 419.5Q563 436 563.5 450Q564 464 561 475.5Q558 487 558.5 489.5Q559 492 560.5 492.5Q562 493 563.5 492.5Q565 492 569.5 486Q574 480 578 472Q582 464 584.5 455Q587 446 587 431Q587 416 585.5 409Q584 402 580.5 393Q577 384 588 384Q599 384 607.5 380.5Q616 377 618.5 374.5Q621 372 620.5 369.5Q620 367 615 367Q610 367 607 366Q604 365 593.5 359Q583 353 581 351Q579 349 579.5 346Q580 343 575 333Q570 323 570.5 322Q571 321 575.5 322Q580 323 589 322.5Q598 322 605.5 319Q613 316 614 314.5Q615 313 614.5 310.5Q614 308 606.5 306.5Q599 305 590.5 300.5Q582 296 575 291Q568 286 571.5 285.5Q575 285 577 282.5Q579 280 586.5 266.5Q594 253 597 244.5Q600 236 603.5 219Q607 202 607.5 180.5Q608 159 607 150.5Q606 142 603 129Q600 116 596 107Q592 98 584 89.5Q576 81 568.5 78.5Q561 76 555 76Q549 76 537.5 78.5Q526 81 508.5 87.5Q491 94 476.5 101.5Q462 109 451 117Q440 125 430.5 121Q421 117 412 116.5Q403 116 401 117Q399 118 392.5 112Q386 106 381 103.5Q376 101 366 98.5Q356 96 343.5 96Q331 96 321.5 97.5Q312 99 294 104.5Q276 110 264.5 115.5Q253 121 235.5 110Q218 99 197.5 90.5Q177 82 164.5 79Q152 76 145.5 76Q139 76 131.5 78.5Z\"/><path fill=\"#e4cdd1\" d=\"M369.5 529.5Q365 519 360.5 530Q356 541 356.5 546.5Q357 552 359.5 556Q362 560 365 560Q368 560 370 557.5Q372 555 373 552Q374 549 374 544.5Q374 540 369.5 529.5ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 249.5 528.5Q255 531 262 535.5Q269 540 284 552.5Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM249 370Q238 370 238.5 372.5Q239 375 242 380.5Q245 386 250 391Q255 396 259 398Q263 400 268 400.5Q273 401 279 399.5Q285 398 282 393.5Q279 389 279.5 388Q280 387 283 387.5Q286 388 287.5 392.5Q289 397 290 397Q291 397 291.5 392.5Q292 388 293.5 387Q295 386 297 386.5Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 301 384.5Q293 383 292 382Q291 381 290.5 378Q290 375 289 374.5Q288 374 287 375Q286 376 285.5 379.5Q285 383 281.5 383.5Q278 384 276.5 385Q275 386 269 386Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 446.5 379Q438 378 437 374.5Q436 371 434.5 370.5Q433 370 432 374Q431 378 422.5 380.5Q414 383 414 385Q414 387 415 388.5Q416 390 421.5 390.5Q427 391 427.5 390.5Q428 390 426.5 388Q425 386 425 384.5Q425 383 427.5 382.5Q430 382 431 383Q432 384 432.5 387.5Q433 391 434 391Q435 391 436 387Q437 383 439.5 382Q442 381 443 383Q444 385 442 388.5Q440 392 444 393Q448 394 455 393.5Q462 393 466 390.5Q470 388 473.5 384Q477 380 480.5 372ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 254 348.5Q266 350 281 355Q296 360 293 356.5Q290 353 285.5 345.5Q281 338 277 328Q273 318 270.5 307.5ZM469.5 277.5Q462 266 456 260.5Q450 255 442 250.5Q434 246 429.5 244.5Q425 243 415.5 243Q406 243 404.5 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 385 289.5Q381 312 381.5 330Q382 348 387.5 364.5Q393 381 397.5 389.5Q402 398 411.5 411.5Q421 425 420 426Q419 427 388 413Q357 399 346.5 391Q336 383 331.5 378Q327 373 327 375Q327 377 330.5 384.5Q334 392 333.5 393.5Q333 395 323.5 389.5Q314 384 314 390.5Q314 397 305 398.5Q296 400 286 403.5Q276 407 267.5 406.5Q259 406 255 404.5Q251 403 246.5 399.5Q242 396 242 397Q242 398 245 402Q248 406 247.5 407Q247 408 246 408Q245 408 241.5 406Q238 404 240 412.5Q242 421 245 427Q248 433 251 437Q254 441 263.5 449.5Q273 458 271 459Q269 460 261 459.5Q253 459 244 456Q235 453 229.5 449.5Q224 446 225 454.5Q226 463 237 470.5Q248 478 263 484Q278 490 279 491Q280 492 299.5 497.5Q319 503 337 505Q355 507 375.5 506Q396 505 413 501.5Q430 498 445.5 492.5Q461 487 479.5 477Q498 467 500 464.5Q502 462 503.5 454.5Q505 447 496.5 450.5Q488 454 480 454.5Q472 455 470.5 453.5Q469 452 474 448.5Q479 445 484.5 439.5Q490 434 495 425Q500 416 502.5 405.5Q505 395 505 383.5Q505 372 504 366.5Q503 361 502 361.5Q501 362 496.5 369.5Q492 377 487 382.5Q482 388 472.5 394Q463 400 463.5 403Q464 406 465.5 408Q467 410 472 411.5Q477 413 478 414Q479 415 473.5 418Q468 421 466 431Q464 441 462.5 440.5Q461 440 460.5 436.5Q460 433 458 428Q456 423 450 420Q444 417 445 415.5Q446 414 448.5 413.5Q451 413 452.5 411.5Q454 410 454 408Q454 406 452.5 403Q451 400 432.5 396.5Q414 393 412.5 391.5Q411 390 410.5 384Q410 378 408 379.5Q406 381 404.5 381Q403 381 400.5 382.5Q398 384 397.5 383.5Q397 383 399 377Q401 371 410 364.5Q419 358 432.5 352.5Q446 347 455 345Q464 343 473.5 342Q483 341 490.5 341.5Q498 342 497.5 338Q497 334 491.5 320Q486 306 481.5 297.5Q477 289 469.5 277.5ZM399.5 444.5Q401 445 401 446Q401 447 399.5 448.5Q398 450 393.5 452.5Q389 455 384.5 455Q380 455 377 454Q374 453 365.5 453Q357 453 352 455Q347 457 342 457.5Q337 458 333.5 456.5Q330 455 329 453.5Q328 452 329.5 451.5Q331 451 332.5 452Q334 453 339.5 453Q345 453 354 450Q363 447 370.5 448.5Q378 450 383.5 450Q389 450 393 448Q397 446 397.5 445Q398 444 399.5 444.5ZM375 420Q379 420 377.5 422Q376 424 369 429Q362 434 353.5 429Q345 424 345.5 423Q346 422 348.5 421.5Q351 421 353 422.5Q355 424 355 425.5Q355 427 356 428Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 375 420ZM343.5 411Q345 410 345.5 411Q346 412 344.5 413Q343 414 342.5 413Q342 412 343.5 411ZM346 411Q345 410 351 408Q357 406 362 406Q367 406 372.5 408Q378 410 379.5 413Q381 416 380 418Q379 420 378.5 417.5Q378 415 376 413Q374 411 365 410.5Q356 410 351.5 411Q347 412 346 411ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM133 82Q127 84 119.5 91.5Q112 99 108 107.5Q104 116 101.5 125.5Q99 135 97 151Q95 167 95.5 182Q96 197 98 209.5Q100 222 104.5 236Q109 250 115 261Q121 272 121.5 270Q122 268 118 259Q114 250 110.5 238.5Q107 227 104.5 212.5Q102 198 101.5 183.5Q101 169 103.5 152.5Q106 136 110 133Q114 130 114.5 130.5Q115 131 112.5 145.5Q110 160 110.5 180.5Q111 201 114.5 218Q118 235 124 250Q130 265 153 234.5Q176 204 186.5 192Q197 180 195 177Q193 174 191 173.5Q189 173 189 170Q189 167 189.5 166.5Q190 166 195 171.5Q200 177 210.5 167Q221 157 231.5 149Q242 141 235.5 135.5Q229 130 211.5 120.5Q194 111 175 105Q156 99 155.5 98Q155 97 156 97Q157 97 159 94.5Q161 92 163 92Q165 92 174 95Q183 98 192.5 102Q202 106 217.5 114.5Q233 123 241.5 129Q250 135 263 128.5Q276 122 290.5 117Q305 112 316.5 110Q328 108 341.5 108.5Q355 109 361.5 111Q368 113 377 118.5Q386 124 392 130Q398 136 402 142Q406 148 405 148.5Q404 149 394 139.5Q384 130 376.5 126Q369 122 358.5 119.5Q348 117 337 117Q326 117 314.5 119Q303 121 293.5 124Q284 127 271.5 133Q259 139 248 146.5Q237 154 227.5 162Q218 170 203 185.5Q188 201 180.5 210Q173 219 157.5 240.5Q142 262 133 272Q124 282 115.5 288.5Q107 295 99.5 299Q92 303 86 305Q80 307 75 307.5Q70 308 74 311Q78 314 86 317Q94 320 105 320Q116 320 121.5 318.5Q127 317 133 313.5Q139 310 140 310.5Q141 311 133.5 322.5Q126 334 117.5 343Q109 352 100.5 357Q92 362 87.5 363Q83 364 85.5 365Q88 366 97.5 366Q107 366 110.5 365Q114 364 120.5 360Q127 356 137 345Q147 334 158 319Q169 304 172 301Q175 298 175.5 298.5Q176 299 173.5 306.5Q171 314 170 315Q169 316 167 315.5Q165 315 162 320.5Q159 326 142 347.5Q125 369 112 381.5Q99 394 91.5 398.5Q84 403 77.5 404.5Q71 406 78.5 408.5Q86 411 95 411Q104 411 112.5 408.5Q121 406 129.5 400.5Q138 395 139.5 393Q141 391 146 372Q151 353 156.5 338.5Q162 324 163.5 327Q165 330 158.5 348.5Q152 367 150.5 375Q149 383 148 384.5Q147 386 147.5 387Q148 388 146 398Q144 408 144 421.5Q144 435 145 440.5Q146 446 146 441Q146 436 148.5 423.5Q151 411 155 399.5Q159 388 161 385Q163 382 163.5 383.5Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 165 437Q168 448 172.5 456.5Q177 465 182.5 472Q188 479 196 486Q204 493 209.5 496Q215 499 211.5 494Q208 489 203 473.5Q198 458 196.5 447.5Q195 437 195 420.5Q195 404 197 404Q199 404 199.5 406.5Q200 409 203 414.5Q206 420 214 428.5Q222 437 231 442.5Q240 448 250 451Q260 454 253.5 447.5Q247 441 243.5 436Q240 431 230 406Q220 381 217 376.5Q214 372 207 364.5Q200 357 200.5 355.5Q201 354 207 355Q213 356 219.5 355.5Q226 355 226.5 340Q227 325 229.5 310Q232 295 234.5 285Q237 275 243 259.5Q249 244 253 235.5Q257 227 267 211.5Q277 196 283.5 188Q290 180 301 169.5Q312 159 323 151.5Q334 144 344.5 139.5Q355 135 363.5 134Q372 133 377.5 134.5Q383 136 386.5 138.5Q390 141 388 141.5Q386 142 382 140.5Q378 139 371 139.5Q364 140 358.5 143Q353 146 343.5 156Q334 166 333 165Q332 164 331.5 161.5Q331 159 327 158.5Q323 158 315 164Q307 170 299 178Q291 186 285 193.5Q279 201 271.5 213Q264 225 256 244Q248 263 244.5 279Q241 295 240.5 312Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277.5 264Q276 270 275.5 281Q275 292 277.5 305.5Q280 319 284 328Q288 337 290.5 340.5Q293 344 293.5 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 326Q293 325 294 325.5Q295 326 297.5 336Q300 346 306 357Q312 368 316.5 373Q321 378 316.5 360Q312 342 311.5 335.5Q311 329 312 329Q313 329 313.5 328Q314 327 320.5 343Q327 359 331 365Q335 371 339.5 376Q344 381 353.5 388Q363 395 370 398Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 395.5 409.5Q407 416 407 415Q407 414 399.5 403Q392 392 387 381.5Q382 371 378 359Q374 347 368.5 319.5Q363 292 362 268Q361 244 362 231.5Q363 219 365 208.5Q367 198 372.5 185Q378 172 381 168.5Q384 165 387 163.5Q390 162 392.5 162Q395 162 398 163.5Q401 165 405 168.5Q409 172 411.5 175.5Q414 179 413.5 180Q413 181 406 175.5Q399 170 395 169.5Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 186.5Q373 197 373.5 198Q374 199 372.5 202.5Q371 206 369 219Q367 232 367 251Q367 270 370.5 294.5Q374 319 375.5 305.5Q377 292 382.5 270.5Q388 249 395 233.5Q402 218 405 213.5Q408 209 410 208Q412 207 412.5 207.5Q413 208 408.5 216Q404 224 401.5 231.5Q399 239 404 237Q409 235 410.5 236Q412 237 414 235Q416 233 421.5 230.5Q427 228 431 228.5Q435 229 441 233.5Q447 238 456 248.5Q465 259 474 273Q483 287 490 301.5Q497 316 502 331Q507 346 508 347Q509 348 511 364.5Q513 381 511 395Q509 409 503.5 420.5Q498 432 495.5 435.5Q493 439 487.5 443.5Q482 448 487 447Q492 446 497 443.5Q502 441 507.5 436.5Q513 432 517 426Q521 420 522 420.5Q523 421 522 425Q521 429 517.5 434.5Q514 440 514 443Q514 446 513 447.5Q512 449 510 459Q508 469 496.5 497.5Q485 526 479 543Q473 560 468.5 579.5Q464 599 467 591Q470 583 474.5 574.5Q479 566 489 552Q499 538 506 526.5Q513 515 518 503.5Q523 492 526.5 480.5Q530 469 531.5 470Q533 471 533 484Q533 497 532 505Q531 513 534 505Q537 497 540.5 477Q544 457 544 437.5Q544 418 542.5 407.5Q541 397 538 384Q535 371 535.5 370.5Q536 370 544.5 383Q553 396 558 408Q563 420 565 427.5Q567 435 567.5 450Q568 465 565 477Q562 489 566.5 483Q571 477 574.5 470Q578 463 580.5 454Q583 445 583.5 436.5Q584 428 583 419.5Q582 411 579 401Q576 391 567.5 380.5Q559 370 560 369.5Q561 369 565 372Q569 375 575.5 377.5Q582 380 590.5 380Q599 380 608 375.5Q617 371 613.5 371Q610 371 605.5 369.5Q601 368 590.5 362Q580 356 569 346Q558 336 553.5 330Q549 324 550.5 323.5Q552 323 564 334Q576 345 571 334Q566 323 562.5 318.5Q559 314 560 313Q561 312 567.5 315Q574 318 583 318.5Q592 319 598 317.5Q604 316 607 314.5Q610 313 610.5 312Q611 311 608 311Q605 311 594.5 306.5Q584 302 570.5 292.5Q557 283 546 272Q535 261 518 240.5Q501 220 494 213Q487 206 479 199.5Q471 193 466 190Q461 187 453.5 185Q446 183 439.5 184Q433 185 428 188.5Q423 192 422 191Q421 190 421 185.5Q421 181 419.5 174Q418 167 422 161Q426 155 435 146Q444 137 459 127Q474 117 485 111.5Q496 106 511.5 100Q527 94 537.5 91.5Q548 89 554 89Q560 89 561 90.5Q562 92 560 94.5Q558 97 551.5 97.5Q545 98 528.5 103Q512 108 502.5 112Q493 116 481 122.5Q469 129 460 135.5Q451 142 442.5 150.5Q434 159 430 164.5Q426 170 426.5 175.5Q427 181 433 178.5Q439 176 447 176.5Q455 177 464 181.5Q473 186 478.5 190.5Q484 195 485 195Q486 195 493.5 185Q501 175 501.5 176.5Q502 178 497.5 184.5Q493 191 492.5 196Q492 201 499.5 208.5Q507 216 523 236Q539 256 549 266Q559 276 561 277Q563 278 570 263Q577 248 582.5 226Q588 204 589 194.5Q590 185 590 175Q590 165 588.5 152.5Q587 140 584 130Q581 120 581.5 119Q582 118 584.5 118Q587 118 589.5 123.5Q592 129 594.5 141Q597 153 597 177.5Q597 202 594.5 215Q592 228 589.5 236.5Q587 245 579.5 263.5Q572 282 576.5 276Q581 270 585.5 261Q590 252 593 243.5Q596 235 599.5 218Q603 201 603 175.5Q603 150 600.5 137Q598 124 593.5 112.5Q589 101 582.5 93.5Q576 86 572.5 84Q569 82 565 81Q561 80 551.5 80.5Q542 81 534 83Q526 85 510 91Q494 97 479.5 104.5Q465 112 452 121Q439 130 430 125.5Q421 121 412 120.5Q403 120 406.5 127Q410 134 409 135Q408 136 404.5 131Q401 126 394 119Q387 112 380 108Q373 104 367.5 102.5Q362 101 346.5 100.5Q331 100 321.5 101.5Q312 103 295.5 108Q279 113 266.5 119Q254 125 252.5 125Q251 125 246 121Q241 117 228 109.5Q215 102 196 94Q177 86 164.5 83Q152 80 145.5 80Q139 80 133 82ZM558 369Q557 368 558 367.5Q559 367 559.5 368Q560 369 559.5 369.5Q559 370 558 369ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM429 217Q428 216 429.5 215Q431 214 432 215.5Q433 217 431.5 217.5Q430 218 429 217ZM316 190Q320 185 320.5 186Q321 187 313.5 202Q306 217 301 233.5Q296 250 293.5 266Q291 282 291 293Q291 304 292.5 312.5Q294 321 292.5 322Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 288.5 263Q291 248 297 230Q303 212 307.5 203.5Q312 195 316 190ZM579.5 115.5Q578 113 579.5 112.5Q581 112 582 113Q583 114 583 115.5Q583 117 582 117.5Q581 118 579.5 115.5ZM574.5 101Q577 99 578.5 101.5Q580 104 577.5 105.5Q575 107 573.5 105Q572 103 574.5 101ZM565 94.5Q568 92 569.5 93Q571 94 571 95Q571 96 569 98Q567 100 564.5 98.5Q562 97 565 94.5Z\"/><path fill=\"#f5dfd9\" d=\"M369.5 529.5Q365 519 360.5 530Q356 541 356.5 546.5Q357 552 359.5 556Q362 560 365 560Q368 560 370 557.5Q372 555 373 552Q374 549 374 544.5Q374 540 369.5 529.5ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM518 502.5Q523 490 516.5 499Q510 508 495 525Q480 542 475 556Q470 570 467 584.5Q464 599 467 591Q470 583 474.5 574.5Q479 566 489 552Q499 538 506 526.5Q513 515 518 502.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM249 370Q238 370 238.5 372.5Q239 375 242 380.5Q245 386 250 391Q255 396 259 398Q263 400 268 400.5Q273 401 279 399.5Q285 398 282 393.5Q279 389 279.5 388Q280 387 283 387.5Q286 388 287.5 392.5Q289 397 290 397Q291 397 291.5 392.5Q292 388 293.5 387Q295 386 297 386.5Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 301 384.5Q293 383 292 382Q291 381 290.5 378Q290 375 289 374.5Q288 374 287 375Q286 376 285.5 379.5Q285 383 281.5 383.5Q278 384 276.5 385Q275 386 269 386Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 446.5 379Q438 378 437 374.5Q436 371 434.5 370.5Q433 370 432 374Q431 378 422.5 380.5Q414 383 414 385Q414 387 415 388.5Q416 390 421.5 390.5Q427 391 427.5 390.5Q428 390 426.5 388Q425 386 425 384.5Q425 383 427.5 382.5Q430 382 431 383Q432 384 432.5 387.5Q433 391 434 391Q435 391 436 387Q437 383 439.5 382Q442 381 443 383Q444 385 442 388.5Q440 392 444 393Q448 394 455 393.5Q462 393 466 390.5Q470 388 473.5 384Q477 380 480.5 372ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM166.5 322Q169 316 167 315.5Q165 315 162 320.5Q159 326 147 341.5Q135 357 120.5 372.5Q106 388 98 394Q90 400 84.5 402.5Q79 405 75 405.5Q71 406 78.5 408.5Q86 411 95 411Q104 411 112.5 408.5Q121 406 129.5 400.5Q138 395 140 391.5Q142 388 144.5 377Q147 366 154.5 345Q162 324 163 326Q164 328 166.5 322ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM73 308Q71 308 71.5 309Q72 310 73.5 310Q75 310 75 309Q75 308 73 308ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 264.5 349.5Q268 349 269 350.5Q270 352 278 353.5Q286 355 291 357.5Q296 360 293 356.5Q290 353 285.5 345.5Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM469.5 277.5Q462 266 456 260.5Q450 255 442 250.5Q434 246 429.5 244.5Q425 243 415.5 243Q406 243 404.5 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 385 289.5Q381 312 381.5 330Q382 348 387.5 364.5Q393 381 397.5 389.5Q402 398 411.5 411.5Q421 425 420 426Q419 427 388 413Q357 399 346.5 391Q336 383 331.5 378Q327 373 327 375Q327 377 330.5 384.5Q334 392 333.5 393.5Q333 395 323.5 389.5Q314 384 314 390.5Q314 397 305 398.5Q296 400 286 403.5Q276 407 267.5 406.5Q259 406 255 404.5Q251 403 246.5 399.5Q242 396 242 397Q242 398 245 402Q248 406 247.5 407Q247 408 246 408Q245 408 241.5 406Q238 404 240 412.5Q242 421 245 427Q248 433 251 437Q254 441 263.5 449.5Q273 458 271 459Q269 460 261 459.5Q253 459 244 456Q235 453 229.5 449.5Q224 446 225 454.5Q226 463 237 470.5Q248 478 263 484Q278 490 279 491Q280 492 299.5 497.5Q319 503 337 505Q355 507 375.5 506Q396 505 413 501.5Q430 498 445.5 492.5Q461 487 479.5 477Q498 467 500 464.5Q502 462 503.5 454.5Q505 447 496.5 450.5Q488 454 480 454.5Q472 455 470.5 453.5Q469 452 474 448.5Q479 445 484.5 439.5Q490 434 495 425Q500 416 502.5 405.5Q505 395 505 383.5Q505 372 504 366.5Q503 361 502 361.5Q501 362 496.5 369.5Q492 377 487 382.5Q482 388 472.5 394Q463 400 463.5 403Q464 406 465.5 408Q467 410 472 411.5Q477 413 478 414Q479 415 473.5 418Q468 421 466 431Q464 441 462.5 440.5Q461 440 460.5 436.5Q460 433 458 428Q456 423 450 420Q444 417 445 415.5Q446 414 448.5 413.5Q451 413 452.5 411.5Q454 410 454 408Q454 406 452.5 403Q451 400 432.5 396.5Q414 393 412.5 391.5Q411 390 410.5 384Q410 378 408 379.5Q406 381 404.5 381Q403 381 400.5 382.5Q398 384 397.5 383.5Q397 383 399 377Q401 371 410 364.5Q419 358 432.5 352.5Q446 347 455 345Q464 343 473.5 342Q483 341 490.5 341.5Q498 342 497.5 338Q497 334 491.5 320Q486 306 481.5 297.5Q477 289 469.5 277.5ZM399.5 444.5Q401 445 401 446Q401 447 399.5 448.5Q398 450 393.5 452.5Q389 455 384.5 455Q380 455 377 454Q374 453 365.5 453Q357 453 352 455Q347 457 342 457.5Q337 458 333.5 456.5Q330 455 329 453.5Q328 452 329.5 451.5Q331 451 332.5 452Q334 453 339.5 453Q345 453 354 450Q363 447 370.5 448.5Q378 450 383.5 450Q389 450 393 448Q397 446 397.5 445Q398 444 399.5 444.5ZM375 420Q379 420 377.5 422Q376 424 369 429Q362 434 353.5 429Q345 424 345.5 423Q346 422 348.5 421.5Q351 421 353 422.5Q355 424 355 425.5Q355 427 356 428Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 375 420ZM343.5 411Q345 410 345.5 411Q346 412 344.5 413Q343 414 342.5 413Q342 412 343.5 411ZM346 411Q345 410 351 408Q357 406 362 406Q367 406 372.5 408Q378 410 379.5 413Q381 416 380 418Q379 420 378.5 417.5Q378 415 376 413Q374 411 365 410.5Q356 410 351.5 411Q347 412 346 411ZM475.5 399Q475 398 476 397.5Q477 397 477.5 398Q478 399 477 399.5Q476 400 475.5 399ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM503.5 225.5Q499 223 498.5 223.5Q498 224 501 229.5Q504 235 506 242Q508 249 506.5 250Q505 251 500.5 248Q496 245 495.5 245.5Q495 246 497.5 251Q500 256 499 257.5Q498 259 509.5 277Q521 295 524 297.5Q527 300 531 308Q535 316 534 317Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 561 387Q562 388 564.5 402Q567 416 566.5 425Q566 434 567 441.5Q568 449 568 457Q568 465 565 477Q562 489 566.5 483Q571 477 575.5 467Q580 457 582 445.5Q584 434 583 422.5Q582 411 578 399Q574 387 568 381Q562 375 560.5 372.5Q559 370 559.5 369.5Q560 369 559.5 369.5Q559 370 558 369Q557 368 557.5 367.5Q558 367 557 366Q556 365 546 340Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 534 303Q525 291 525.5 288.5Q526 286 519.5 268.5Q513 251 514.5 250Q516 249 525 255.5Q534 262 535 262Q536 262 522 245Q508 228 503.5 225.5ZM557 377Q558 376 558 378.5Q558 381 557 379.5Q556 378 557 377ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM101.5 220.5Q102 218 101 218Q100 218 100.5 220.5Q101 223 101.5 220.5ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 191Q422 191 422.5 195.5Q423 200 421.5 207Q420 214 417.5 214Q415 214 413.5 211.5Q412 209 405.5 223ZM414 216Q415 215 417 216.5Q419 218 418 220Q417 222 415.5 221Q414 220 413.5 218.5Q413 217 414 216ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286.5 287Q287 269 289 258.5Q291 248 295 235Q299 222 303.5 212Q308 202 314 193.5Q320 185 320.5 186Q321 187 315 198.5Q309 210 305 220.5Q301 231 298 245Q295 259 296.5 260.5Q298 262 301 256.5Q304 251 306 249Q308 247 309.5 247.5Q311 248 312.5 253Q314 258 314 267.5Q314 277 316.5 290Q319 303 320 294.5Q321 286 323 282Q325 278 326.5 278Q328 278 335 285Q342 292 348.5 296.5Q355 301 355.5 272Q356 243 354 249Q352 255 347.5 260.5Q343 266 340.5 265.5Q338 265 335 262Q332 259 329 253.5Q326 248 324.5 243Q323 238 322.5 232Q322 226 320.5 228.5Q319 231 318 230.5Q317 230 318.5 218Q320 206 324.5 192.5Q329 179 326.5 181.5Q324 184 323 183.5Q322 183 327.5 175Q333 167 332 163ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM392 137Q391 136 389.5 137.5Q388 139 389 140Q390 141 389.5 141.5Q389 142 391 140Q393 138 392 137ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM303.5 122Q304 121 294 124Q284 127 271.5 133Q259 139 243.5 150Q228 161 208 181Q188 201 165 231Q142 261 143.5 260.5Q145 260 160 244Q175 228 177 228.5Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 230Q198 232 198.5 234Q199 236 195.5 244.5Q192 253 192 255.5Q192 258 184.5 272.5Q177 287 174 294.5Q171 302 174.5 298.5Q178 295 186.5 278Q195 261 197.5 262.5Q200 264 200 265.5Q200 267 196 277Q192 287 199.5 279.5Q207 272 212 268Q217 264 220.5 262.5Q224 261 225.5 261Q227 261 228 262Q229 263 230.5 274Q232 285 233.5 281Q235 277 237 274.5Q239 272 244 258Q249 244 253 236.5Q257 229 256 229Q255 229 247.5 234.5Q240 240 236.5 240.5Q233 241 232 240Q231 239 231 234Q231 229 233 222.5Q235 216 239 208.5Q243 201 250.5 190Q258 179 264.5 174Q271 169 262.5 174.5Q254 180 245.5 188Q237 196 236 195.5Q235 195 235 194Q235 193 237 190.5Q239 188 238.5 187Q238 186 232 188.5Q226 191 224.5 191Q223 191 222.5 190Q222 189 232.5 175.5Q243 162 250 155.5Q257 149 267 142Q277 135 290 129Q303 123 303.5 122ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM555 80Q549 80 537.5 82.5Q526 85 510 91Q494 97 479.5 104.5Q465 112 455.5 118.5Q446 125 445 126.5Q444 128 447.5 130Q451 132 468 121.5Q485 111 499 105Q513 99 530.5 94Q548 89 554 89Q560 89 561 90Q562 91 560 94Q558 97 551.5 97.5Q545 98 528.5 103Q512 108 502.5 112Q493 116 481 122.5Q469 129 460 135.5Q451 142 442.5 150.5Q434 159 430 164.5Q426 170 426.5 175.5Q427 181 433 178.5Q439 176 447 176.5Q455 177 464 181.5Q473 186 478.5 190.5Q484 195 485 195Q486 195 493.5 185Q501 175 501.5 176.5Q502 178 497.5 184.5Q493 191 492.5 196Q492 201 499.5 208.5Q507 216 523 236Q539 256 549 266Q559 276 561 277Q563 278 567 270.5Q571 263 575.5 251Q580 239 583 227.5Q586 216 587.5 206Q589 196 589.5 180.5Q590 165 588.5 152.5Q587 140 584 130Q581 120 581.5 119Q582 118 584.5 118Q587 118 588 119Q589 120 592.5 133Q596 146 597 154.5Q598 163 598 177Q598 191 597 197Q596 203 598 207Q600 211 601 209Q602 207 603 198.5Q604 190 604 175Q604 160 602.5 148.5Q601 137 598.5 127Q596 117 590.5 106Q585 95 580.5 90.5Q576 86 572.5 84Q569 82 565 81Q561 80 555 80ZM579.5 115.5Q578 113 579.5 112.5Q581 112 582 113Q583 114 583 115.5Q583 117 582 117.5Q581 118 579.5 115.5ZM574 100.5Q576 98 578 101Q580 104 577.5 105.5Q575 107 573.5 105Q572 103 574 100.5ZM565 94.5Q568 92 569.5 93Q571 94 571 95Q571 96 569 98Q567 100 564.5 98.5Q562 97 565 94.5ZM96.5 197Q98 210 99.5 210Q101 210 102 208.5Q103 207 102 196.5Q101 186 102 168Q103 150 104.5 143Q106 136 110 133Q114 130 114.5 131.5Q115 133 114 135.5Q113 138 111.5 149Q110 160 110.5 180.5Q111 201 114.5 218Q118 235 124 250Q130 265 153 234.5Q176 204 186.5 192Q197 180 195 177Q193 174 191 173.5Q189 173 189 170Q189 167 189.5 166.5Q190 166 195 171.5Q200 177 208.5 168.5Q217 160 229.5 150.5Q242 141 235.5 135.5Q229 130 211.5 120.5Q194 111 175 105Q156 99 155.5 98Q155 97 156 97Q157 97 159 94.5Q161 92 163 92Q165 92 174 95Q183 98 192.5 102Q202 106 217.5 114.5Q233 123 241.5 129Q250 135 268 126.5Q286 118 303 113.5Q320 109 334 108.5Q348 108 355 109.5Q362 111 367.5 113.5Q373 116 375 114Q377 112 379.5 112Q382 112 382.5 110.5Q383 109 378 106.5Q373 104 367.5 102.5Q362 101 346.5 100.5Q331 100 314 103.5Q297 107 285.5 111Q274 115 264 120Q254 125 252.5 125Q251 125 246 121Q241 117 228 109.5Q215 102 196 94Q177 86 164.5 83Q152 80 145.5 80Q139 80 135 81Q131 82 127.5 84Q124 86 118 92.5Q112 99 107 111Q102 123 99.5 135Q97 147 96 157Q95 167 95 175.5Q95 184 96.5 197Z\"/><path fill=\"#bf3d25\" d=\"M369.5 529.5Q365 519 360.5 530Q356 541 356.5 546.5Q357 552 359.5 556Q362 560 365 560Q368 560 370 557.5Q372 555 373 552Q374 549 374 544.5Q374 540 369.5 529.5ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM518 502.5Q523 490 516.5 499Q510 508 495 525Q480 542 475 556Q470 570 467 584.5Q464 599 467 591Q470 583 474.5 574.5Q479 566 489 552Q499 538 506 526.5Q513 515 518 502.5ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM344 413Q342 415 343 418Q344 421 348.5 421.5Q353 422 355 425.5Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 373 420.5Q375 421 376.5 420Q378 419 378 417Q378 415 376 413Q374 411 372 410.5Q370 410 363 410Q356 410 353 411Q350 412 348 411.5Q346 411 344 413ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM246.5 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 239.5 410Q241 416 247 412.5Q253 409 255 410Q257 411 263.5 409.5Q270 408 271.5 408.5Q273 409 267.5 417.5Q262 426 260 432Q258 438 256.5 440Q255 442 264 450Q273 458 271 459Q269 460 261.5 459.5Q254 459 254 460Q254 461 258.5 468.5Q263 476 269 481.5Q275 487 274.5 488Q274 489 286 493.5Q298 498 306.5 499.5Q315 501 317 502Q319 503 329.5 504Q340 505 338 505Q336 505 330.5 503Q325 501 316.5 496Q308 491 301.5 484.5Q295 478 293 475Q291 472 289 463Q287 454 288 449Q289 444 292 437Q295 430 300 423Q305 416 308.5 412.5Q312 409 321 403Q330 397 336 394.5Q342 392 343.5 392Q345 392 349 394Q353 396 344.5 389.5Q336 383 331.5 378Q327 373 327 375Q327 377 330.5 384.5Q334 392 333.5 393.5Q333 395 323.5 389.5Q314 384 314 390.5Q314 397 305 398.5Q296 400 286 403.5Q276 407 267.5 406.5Q259 406 255 404.5Q251 403 246.5 399.5ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 266 393Q271 401 278 399.5Q285 398 282 393.5Q279 389 279.5 388Q280 387 283 387.5Q286 388 287.5 392.5Q289 397 290 397Q291 397 291.5 392.5Q292 388 293.5 387Q295 386 297 386.5Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 301 384.5Q293 383 292 382Q291 381 290.5 378Q290 375 289 374.5Q288 374 287 375Q286 376 285.5 379.5Q285 383 281.5 383.5Q278 384 276.5 385Q275 386 269 386Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 446.5 379Q438 378 437 374.5Q436 371 434.5 370.5Q433 370 432 374Q431 378 422.5 380.5Q414 383 414 385Q414 387 415 388.5Q416 390 421.5 390.5Q427 391 427.5 390.5Q428 390 426.5 388Q425 386 425 384.5Q425 383 427.5 382.5Q430 382 431 383Q432 384 432.5 387.5Q433 391 434 391Q435 391 436 387Q437 383 439.5 382Q442 381 443 383Q444 385 442 388.5Q440 392 447.5 393Q455 394 454.5 393.5Q454 393 456.5 389Q459 385 459.5 382.5Q460 380 468.5 380Q477 380 480.5 372ZM504 366.5Q503 361 502 361.5Q501 362 496.5 369.5Q492 377 487 382.5Q482 388 472.5 394Q463 400 463.5 403Q464 406 465.5 408Q467 410 469 410.5Q471 411 468 406Q465 401 470.5 400.5Q476 400 476 398.5Q476 397 483 399Q490 401 492 403.5Q494 406 498 407.5Q502 409 503.5 402Q505 395 505 383.5Q505 372 504 366.5ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM166.5 322Q169 316 167 315.5Q165 315 162 320.5Q159 326 147 341.5Q135 357 120.5 372.5Q106 388 98 394Q90 400 84.5 402.5Q79 405 75 405.5Q71 406 78.5 408.5Q86 411 95 411Q104 411 112.5 408.5Q121 406 129.5 400.5Q138 395 140 391.5Q142 388 144.5 377Q147 366 154.5 345Q162 324 163 326Q164 328 166.5 322ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 265.5 349.5Q270 349 275 350.5Q280 352 288 356Q296 360 293 356.5Q290 353 283 351Q276 349 272 349Q268 349 266.5 348Q265 347 263.5 347.5Q262 348 260 347Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 273.5 335Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 518 284Q524 294 529.5 305.5Q535 317 534 317.5Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 561 387Q562 388 564.5 402Q567 416 566.5 425Q566 434 567 441.5Q568 449 568 457Q568 465 565 477Q562 489 566.5 483Q571 477 575.5 467Q580 457 582 445.5Q584 434 583 422.5Q582 411 578 399Q574 387 568 381Q562 375 560.5 372.5Q559 370 559.5 369.5Q560 369 559.5 369.5Q559 370 558 369Q557 368 557.5 367.5Q558 367 557 366Q556 365 546 340Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 527.5 294.5ZM557 377Q558 376 558 378.5Q558 381 557 379.5Q556 378 557 377ZM429.5 244.5Q425 243 414 243.5Q403 244 398 249.5Q393 255 390.5 263Q388 271 385 287.5Q382 304 381.5 322.5Q381 341 384 353.5Q387 366 392.5 378.5Q398 391 399.5 393Q401 395 406 397Q411 399 416.5 402.5Q422 406 430 413.5Q438 421 441.5 426.5Q445 432 447 437Q449 442 449.5 450Q450 458 447 465.5Q444 473 437 480.5Q430 488 422 493Q414 498 404.5 501.5Q395 505 393 505Q391 505 397 504.5Q403 504 416.5 501Q430 498 445.5 492.5Q461 487 463.5 485.5Q466 484 465 484Q464 484 463.5 483Q463 482 468.5 477Q474 472 479 464Q484 456 488.5 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 452.5Q505 450 504.5 448.5Q504 447 503 448Q502 449 495 451.5Q488 454 479 454Q470 454 469.5 453Q469 452 476.5 446Q484 440 482.5 435Q481 430 478 424Q475 418 471.5 419.5Q468 421 467 424Q466 427 465.5 433.5Q465 440 463.5 440.5Q462 441 459 432Q456 423 450 420Q444 417 445 415.5Q446 414 448.5 413.5Q451 413 452.5 411.5Q454 410 454 408Q454 406 452.5 403Q451 400 432.5 396.5Q414 393 412.5 391.5Q411 390 410.5 384Q410 378 408 379.5Q406 381 404.5 381Q403 381 400.5 382.5Q398 384 397.5 383.5Q397 383 399 377Q401 371 408.5 366Q416 361 419.5 357.5Q423 354 432.5 350Q442 346 443.5 346Q445 346 442 346Q439 346 429.5 349.5Q420 353 416 355.5Q412 358 411 357.5Q410 357 415 350.5Q420 344 428 338.5Q436 333 444.5 330.5Q453 328 460 328Q467 328 477 332Q487 336 487.5 337.5Q488 339 486.5 340.5Q485 342 491.5 342Q498 342 497.5 338Q497 334 491.5 320Q486 306 475.5 288Q465 270 457.5 262.5Q450 255 442 250.5Q434 246 429.5 244.5ZM444.5 292.5Q446 294 444 301Q442 308 438.5 313.5Q435 319 430.5 324Q426 329 419.5 333.5Q413 338 406.5 340.5Q400 343 396 343Q392 343 390 341.5Q388 340 387.5 336Q387 332 389 325.5Q391 319 394 314Q397 309 401.5 304.5Q406 300 412.5 296.5Q419 293 425.5 291.5Q432 290 437.5 290.5Q443 291 444.5 292.5ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM143 235.5Q135 233 134.5 235Q134 237 137 244.5Q140 252 145.5 245Q151 238 143 235.5ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 405.5 223ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 287 270.5Q288 263 291 250Q294 237 298.5 224.5Q303 212 307.5 203.5Q312 195 314.5 191.5Q317 188 319.5 186Q322 184 327.5 175.5Q333 167 332 163ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM560.5 140Q560 135 555 136.5Q550 138 543 141.5Q536 145 524 154Q512 163 508 167.5Q504 172 502.5 176Q501 180 497 185.5Q493 191 492.5 196Q492 201 499.5 208.5Q507 216 519.5 232Q532 248 541.5 258Q551 268 558 253Q565 238 565 235.5Q565 233 558 235.5Q551 238 549 237.5Q547 237 554 224.5Q561 212 564.5 200.5Q568 189 566.5 188.5Q565 188 556 192Q547 196 546 195.5Q545 195 551.5 178Q558 161 559.5 153Q561 145 560.5 140ZM150 139Q140 135 140 145Q140 155 143 165.5Q146 176 150 185Q154 194 152.5 194.5Q151 195 143 191.5Q135 188 133.5 188.5Q132 189 132 190.5Q132 192 135.5 203Q139 214 145.5 225Q152 236 174.5 207.5Q197 179 195 176.5Q193 174 191 173.5Q189 173 188.5 169Q188 165 183.5 160.5Q179 156 169.5 149.5Q160 143 150 139ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM509 113.5Q521 106 516.5 107Q512 108 502.5 112Q493 116 483.5 121Q474 126 465 132Q456 138 445 148.5Q434 159 430 164.5Q426 170 426.5 175.5Q427 181 433 178.5Q439 176 446.5 176.5Q454 177 459 167.5Q464 158 472.5 147Q481 136 489 128.5Q497 121 509 113.5ZM186.5 108.5Q179 106 186.5 110.5Q194 115 203 122.5Q212 130 220.5 140.5Q229 151 235.5 146Q242 141 238.5 137.5Q235 134 224.5 127.5Q214 121 204 116Q194 111 186.5 108.5ZM583.5 111Q580 104 578 106Q576 108 577.5 110Q579 112 581 113Q583 114 582.5 116Q582 118 583.5 118.5Q585 119 586 118.5Q587 118 583.5 111ZM573 96.5Q571 95 570 97.5Q569 100 571 101Q573 102 574 100Q575 98 573 96.5ZM565 94.5Q567 93 564.5 92Q562 91 561 93.5Q560 96 561.5 96Q563 96 565 94.5ZM158.5 95Q160 93 152.5 91.5Q145 90 139.5 91Q134 92 130 94.5Q126 97 123 100.5Q120 104 117 109.5Q114 115 111 124.5Q108 134 111 132Q114 130 118 120Q122 110 126 105Q130 100 135.5 97.5Q141 95 149 96Q157 97 158.5 95Z\"/><path fill=\"#a7231a\" d=\"M369.5 529.5Q365 519 360.5 530Q356 541 356.5 546.5Q357 552 359.5 556Q362 560 365 560Q368 560 370 557.5Q372 555 373 552Q374 549 374 544.5Q374 540 369.5 529.5ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM518 502.5Q523 490 517 498.5Q511 507 495.5 524.5Q480 542 475 556Q470 570 467 584.5Q464 599 467 591Q470 583 474.5 574.5Q479 566 489 552Q499 538 506 526.5Q513 515 518 502.5ZM461.5 486Q466 484 462 485Q458 486 457.5 487Q457 488 461.5 486ZM455 482Q455 481 451 481.5Q447 482 444 479Q441 476 435.5 482Q430 488 424 492Q418 496 409.5 499.5Q401 503 396 504Q391 505 404.5 503Q418 501 435.5 495.5Q453 490 451.5 487Q450 484 452.5 483.5Q455 483 455 482ZM434 493.5Q433 492 434 491.5Q435 491 436 492.5Q437 494 436 494.5Q435 495 434 493.5ZM440 482Q442 480 443 481.5Q444 483 442.5 484.5Q441 486 440 486Q439 486 438.5 485Q438 484 440 482ZM258 459.5Q254 459 256 464Q258 469 260.5 472.5Q263 476 269 481.5Q275 487 274.5 488Q274 489 286 493.5Q298 498 306.5 499.5Q315 501 317 502Q319 503 329.5 504Q340 505 335 504Q330 503 321 498.5Q312 494 303.5 486Q295 478 293 474.5Q291 471 288 471Q285 471 281.5 469Q278 467 276 467Q274 467 271.5 465Q269 463 266 462.5Q263 462 262.5 461Q262 460 258 459.5ZM504.5 451Q505 447 496.5 450.5Q488 454 482 454.5Q476 455 471.5 459Q467 463 467 465Q467 467 464.5 470.5Q462 474 464 474Q466 474 467 476Q468 478 471.5 474Q475 470 474 468.5Q473 467 473.5 465Q474 463 476.5 464Q479 465 481.5 460.5Q484 456 488.5 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM344 413Q342 415 343 418Q344 421 348.5 421.5Q353 422 355 425.5Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 373 420.5Q375 421 376.5 420Q378 419 378 417Q378 415 376 413Q374 411 372 410.5Q370 410 363 410Q356 410 353 411Q350 412 348 411.5Q346 411 344 413ZM241.5 406Q238 404 239.5 410Q241 416 243.5 414.5Q246 413 246 411Q246 409 247 408Q248 407 249.5 408.5Q251 410 253 409.5Q255 409 256 410Q257 411 265 409.5Q273 408 266.5 407Q260 406 259 407.5Q258 409 257 409Q256 409 255 408Q254 407 255 406Q256 405 253.5 404Q251 403 246.5 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406ZM481.5 393Q484 391 482.5 391Q481 391 480.5 390Q480 389 471.5 394.5Q463 400 469.5 400Q476 400 475 398.5Q474 397 475 396.5Q476 396 477 397Q478 398 478.5 396.5Q479 395 481.5 393ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM487.5 386Q488 385 487 384.5Q486 384 485 385Q484 386 485.5 386.5Q487 387 487.5 386ZM316.5 385.5Q314 384 313.5 388.5Q313 393 315 394Q317 395 318 391Q319 387 316.5 385.5ZM410 382Q410 378 406.5 380Q403 382 405 386Q407 390 409 391Q411 392 411.5 391.5Q412 391 411 388.5Q410 386 410 382ZM331.5 378Q327 373 327 375Q327 377 329 381.5Q331 386 333 386Q335 386 338.5 389Q342 392 343.5 392Q345 392 349 394Q353 396 344.5 389.5Q336 383 331.5 378ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 266 393Q271 401 278 399.5Q285 398 282 393.5Q279 389 279.5 388Q280 387 283 387.5Q286 388 287.5 392.5Q289 397 290 397Q291 397 291.5 392.5Q292 388 293.5 387Q295 386 297 386.5Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 301 384.5Q293 383 292 382Q291 381 290.5 378Q290 375 289 374.5Q288 374 287 375Q286 376 285.5 379.5Q285 383 281.5 383.5Q278 384 276.5 385Q275 386 269 386Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 446.5 379Q438 378 437 374.5Q436 371 434.5 370.5Q433 370 432 374Q431 378 422.5 380.5Q414 383 414 385Q414 387 415 388.5Q416 390 421.5 390.5Q427 391 427.5 390.5Q428 390 426.5 388Q425 386 425 384.5Q425 383 427.5 382.5Q430 382 431 383Q432 384 432.5 387.5Q433 391 434 391Q435 391 436 387Q437 383 439.5 382Q442 381 443 383Q444 385 442 388.5Q440 392 447.5 393Q455 394 454.5 393.5Q454 393 456.5 389Q459 385 459.5 382.5Q460 380 468.5 380Q477 380 480.5 372ZM502.5 363.5Q501 362 500 364Q499 366 501.5 367Q504 368 504 366.5Q504 365 502.5 363.5ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM498 340.5Q498 339 496 340.5Q494 342 496 342Q498 342 498 340.5ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM434 349.5Q445 345 436 347.5Q427 350 419 354Q411 358 410.5 357Q410 356 412.5 352.5Q415 349 420 344.5Q425 340 430 337Q435 334 432.5 334.5Q430 335 418 341Q406 347 404 349Q402 351 400 355Q398 359 398.5 359.5Q399 360 402.5 358Q406 356 407.5 357Q409 358 407 360Q405 362 404 365Q403 368 403.5 368.5Q404 369 412 363.5Q420 358 421.5 356Q423 354 434 349.5ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM166.5 322Q169 316 167 315.5Q165 315 162 320.5Q159 326 147 341.5Q135 357 120.5 372.5Q106 388 98 394Q90 400 84.5 402.5Q79 405 75 405.5Q71 406 78.5 408.5Q86 411 95 411Q104 411 112.5 408.5Q121 406 129.5 400.5Q138 395 140 391.5Q142 388 144.5 377Q147 366 154.5 345Q162 324 163 326Q164 328 166.5 322ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 265.5 349.5Q270 349 275 350.5Q280 352 288 356Q296 360 293 356.5Q290 353 283 351Q276 349 272 349Q268 349 266.5 348Q265 347 263.5 347.5Q262 348 260 347Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 273.5 335Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 518 284Q524 294 529.5 305.5Q535 317 534 317.5Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 561 387Q562 388 564.5 402Q567 416 566.5 425Q566 434 567 441.5Q568 449 568 457Q568 465 565 477Q562 489 566.5 483Q571 477 575.5 467Q580 457 582 445.5Q584 434 583 422.5Q582 411 578 399Q574 387 568 381Q562 375 560.5 372.5Q559 370 559.5 369.5Q560 369 559.5 369.5Q559 370 558 369Q557 368 557.5 367.5Q558 367 555.5 365Q553 363 553.5 360.5Q554 358 545 336.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 527.5 294.5ZM557 377Q558 376 558 378.5Q558 381 557 379.5Q556 378 557 377ZM443.5 252Q433 246 438 248.5Q443 251 456.5 264.5Q470 278 466 272Q462 266 458 262Q454 258 443.5 252ZM412.5 243.5Q414 243 408.5 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 398 258.5Q401 254 406 249Q411 244 412.5 243.5ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM143 235.5Q135 233 134.5 235Q134 237 137 244.5Q140 252 145.5 245Q151 238 143 235.5ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 405.5 223ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM443 171.5Q439 171 440 172.5Q441 174 440.5 175Q440 176 447 176.5Q454 177 450.5 174.5Q447 172 443 171.5ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM433 167.5Q431 164 428.5 167Q426 170 426.5 175.5Q427 181 432.5 179Q438 177 436.5 175.5Q435 174 435 172.5Q435 171 433 167.5ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 287 270.5Q288 263 291 250Q294 237 298.5 224.5Q303 212 307.5 203.5Q312 195 314.5 191.5Q317 188 319.5 186Q322 184 327.5 175.5Q333 167 332 163ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM560.5 140Q560 135 555 136.5Q550 138 543 141.5Q536 145 524 154Q512 163 508 167.5Q504 172 502.5 176Q501 180 497 185.5Q493 191 492.5 196Q492 201 499.5 208.5Q507 216 519.5 232Q532 248 541.5 258Q551 268 558 253Q565 238 565 235.5Q565 233 558 235.5Q551 238 549 237.5Q547 237 554 224.5Q561 212 564.5 200.5Q568 189 566.5 188.5Q565 188 556 192Q547 196 546 195.5Q545 195 551.5 178Q558 161 559.5 153Q561 145 560.5 140ZM150 139Q140 135 140 145Q140 155 143 165.5Q146 176 150 185Q154 194 152.5 194.5Q151 195 143 191.5Q135 188 133.5 188.5Q132 189 132 190.5Q132 192 135.5 203Q139 214 145.5 225Q152 236 174.5 207.5Q197 179 195 176.5Q193 174 191 173.5Q189 173 188.5 169Q188 165 183.5 160.5Q179 156 169.5 149.5Q160 143 150 139ZM235 134.5Q230 131 230 132.5Q230 134 227 137Q224 140 223 140Q222 140 222.5 141.5Q223 143 225.5 142.5Q228 142 229 143Q230 144 228 145Q226 146 227.5 148.5Q229 151 232.5 148Q236 145 234 143Q232 141 233 140Q234 139 236 140Q238 141 238 142.5Q238 144 240 142.5Q242 141 241 139.5Q240 138 235 134.5ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM212.5 120.5Q211 120 211 121Q211 122 212 122.5Q213 123 213.5 122Q214 121 212.5 120.5ZM202 117Q204 116 202.5 115.5Q201 115 199 116.5Q197 118 198.5 119Q200 120 200 119Q200 118 202 117ZM517 108Q521 106 511.5 109Q502 112 495.5 115Q489 118 488 119.5Q487 121 490.5 123Q494 125 495 124Q496 123 496 122Q496 121 495 120.5Q494 120 495 118.5Q496 117 498.5 118Q501 119 507 114.5Q513 110 517 108ZM186.5 108.5Q179 106 186 110.5Q193 115 193.5 113Q194 111 186.5 108.5ZM583.5 111Q580 104 578 106Q576 108 577.5 110Q579 112 581 113Q583 114 582.5 116Q582 118 583.5 118.5Q585 119 586 118.5Q587 118 583.5 111ZM573 96.5Q571 95 570 97.5Q569 100 571 101Q573 102 574 100Q575 98 573 96.5ZM565 94.5Q567 93 564.5 92Q562 91 561 93.5Q560 96 561.5 96Q563 96 565 94.5ZM158.5 95Q160 93 152.5 91.5Q145 90 139.5 91Q134 92 130 94.5Q126 97 123 100.5Q120 104 117 109.5Q114 115 111 124.5Q108 134 111 132Q114 130 118 120Q122 110 126 105Q130 100 135.5 97.5Q141 95 149 96Q157 97 158.5 95Z\"/><path fill=\"#d51217\" d=\"M372 535Q370 530 365 531Q360 532 358.5 534.5Q357 537 356.5 542.5Q356 548 359 554Q362 560 365 560Q368 560 367.5 559Q367 558 368.5 558Q370 558 372 553.5Q374 549 374 544.5Q374 540 372 535ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM514.5 510.5Q521 497 519.5 497Q518 497 513.5 503.5Q509 510 494.5 526Q480 542 476.5 551Q473 560 469 576Q465 592 466 592Q467 592 468.5 587.5Q470 583 474.5 574.5Q479 566 493.5 545Q508 524 514.5 510.5ZM504.5 451Q505 447 501 449Q497 451 491 452.5Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM344 413Q342 415 343 418Q344 421 348.5 421.5Q353 422 355 425.5Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 373 420.5Q375 421 376.5 420Q378 419 378 417Q378 415 376 413Q374 411 372 410.5Q370 410 363 410Q356 410 353 411Q350 412 348 411.5Q346 411 344 413ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM446.5 390.5Q444 389 443.5 389.5Q443 390 445.5 392Q448 394 448.5 393Q449 392 446.5 390.5ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM316.5 385.5Q314 384 313.5 388.5Q313 393 314.5 394Q316 395 317.5 391Q319 387 316.5 385.5ZM410 382Q410 378 407.5 379.5Q405 381 405 383Q405 385 406 387.5Q407 390 409 391Q411 392 411.5 391.5Q412 391 411 388.5Q410 386 410 382ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM445.5 381Q446 379 442 378.5Q438 378 437 374.5Q436 371 434.5 370.5Q433 370 432 374Q431 378 428 378.5Q425 379 423.5 380.5Q422 382 420 381.5Q418 381 416 382Q414 383 414 385Q414 387 415 388.5Q416 390 421.5 390.5Q427 391 427.5 390.5Q428 390 426.5 388Q425 386 425 384.5Q425 383 427.5 382.5Q430 382 431 383Q432 384 432.5 387.5Q433 391 434 391Q435 391 436 387Q437 383 439 382Q441 381 443 382Q445 383 445.5 381ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 264.5 390.5Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 276.5 387.5Q277 386 281 386.5Q285 387 287 392Q289 397 290 397Q291 397 291.5 392.5Q292 388 293.5 387Q295 386 297 386.5Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 301 384.5Q293 383 292 382Q291 381 290.5 378Q290 375 289 374.5Q288 374 287 375Q286 376 285.5 379.5Q285 383 281.5 383.5Q278 384 276.5 385Q275 386 269 386Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 452 379.5Q449 379 449 380Q449 381 453.5 383.5Q458 386 459.5 382.5Q461 379 469 379.5Q477 380 480.5 372ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 411.5 363.5Q420 358 422.5 355ZM410.5 361Q410 360 411 359.5Q412 359 412.5 360Q413 361 412 361.5Q411 362 410.5 361ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM284 351.5Q278 350 278 351Q278 352 287 356Q296 360 293 356.5Q290 353 284 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM439 347.5Q445 345 439 346.5Q433 348 433 349Q433 350 439 347.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM166.5 322Q169 316 167 315.5Q165 315 164 318Q163 321 149 339Q135 357 120.5 372.5Q106 388 98 394Q90 400 84.5 402.5Q79 405 75 405.5Q71 406 78.5 408.5Q86 411 95 411Q104 411 112 408.5Q120 406 120 405Q120 404 125 399Q130 394 135.5 385.5Q141 377 143 375.5Q145 374 153.5 349Q162 324 163 326Q164 328 166.5 322ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 267.5 350Q274 350 266 348Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 518 284Q524 294 529.5 305.5Q535 317 534 317.5Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 561 387Q562 388 564.5 402Q567 416 566.5 425Q566 434 567 441.5Q568 449 568 457Q568 465 566 473.5Q564 482 564.5 483.5Q565 485 568 481Q571 477 574.5 470Q578 463 580.5 454Q583 445 583.5 436.5Q584 428 582 415.5Q580 403 577 395Q574 387 569.5 383.5Q565 380 563 376.5Q561 373 559.5 374Q558 375 557 374Q556 373 555.5 370.5Q555 368 556.5 367.5Q558 367 555.5 365Q553 363 553.5 360.5Q554 358 545 336.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 527.5 294.5ZM557 377Q558 376 558 378.5Q558 381 557 379.5Q556 378 557 377ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 405.5 223ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 287 270.5Q288 263 291 250Q294 237 298.5 224.5Q303 212 307.5 203.5Q312 195 314.5 191.5Q317 188 319.5 186Q322 184 327.5 175.5Q333 167 332 163ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM583.5 111Q580 104 578 106Q576 108 577.5 110Q579 112 581 113Q583 114 582.5 116Q582 118 583.5 118.5Q585 119 586 118.5Q587 118 583.5 111ZM573 96.5Q571 95 570 97.5Q569 100 571 101Q573 102 574 100Q575 98 573 96.5ZM565 94.5Q567 93 564.5 92Q562 91 561 93.5Q560 96 561.5 96Q563 96 565 94.5ZM158.5 95Q160 93 152.5 91.5Q145 90 139.5 91Q134 92 130 94.5Q126 97 123 100.5Q120 104 117 109.5Q114 115 111 124.5Q108 134 111 132Q114 130 118 120Q122 110 126 105Q130 100 135.5 97.5Q141 95 149 96Q157 97 158.5 95Z\"/><path fill=\"#c30610\" d=\"M372 535Q370 530 365 531Q360 532 358.5 534.5Q357 537 356.5 542Q356 547 357 547Q358 547 359.5 545Q361 543 362.5 545Q364 547 364 548Q364 549 362.5 550Q361 551 359 550.5Q357 550 359.5 555Q362 560 365 560Q368 560 367.5 559Q367 558 368.5 558Q370 558 368.5 556.5Q367 555 366.5 551.5Q366 548 365 547.5Q364 547 366 544Q368 541 370 541.5Q372 542 371 545.5Q370 549 371 550Q372 551 373 550Q374 549 374 544.5Q374 540 372 535ZM360 540.5Q359 540 359.5 538.5Q360 537 361.5 538Q363 539 362 540Q361 541 360 540.5ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM514.5 510.5Q521 497 519.5 497Q518 497 513.5 503.5Q509 510 494.5 526Q480 542 474 561Q468 580 469 580Q470 580 470.5 581Q471 582 469 582Q467 582 466 587Q465 592 466 592Q467 592 468.5 587.5Q470 583 474.5 574.5Q479 566 493.5 545Q508 524 514.5 510.5ZM504.5 451Q505 447 501 449Q497 451 491 452.5Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM344 413Q342 415 343 418Q344 421 348.5 421.5Q353 422 355 425.5Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 373 420.5Q375 421 376.5 420Q378 419 378 417Q378 415 376 413Q374 411 372 410.5Q370 410 363 410Q356 410 353 411Q350 412 348 411.5Q346 411 344 413ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM446.5 390.5Q444 389 443.5 389.5Q443 390 445.5 392Q448 394 448.5 393Q449 392 446.5 390.5ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM316.5 385.5Q314 384 313.5 388.5Q313 393 314.5 394Q316 395 317.5 391Q319 387 316.5 385.5ZM305 385.5Q300 384 298.5 389.5Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 305 385.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM410 382Q410 378 407.5 379.5Q405 381 405 383Q405 385 406 387.5Q407 390 409 391Q411 392 411.5 391.5Q412 391 411 388.5Q410 386 410 382ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 264.5 390.5Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387Q274 385 268.5 385.5Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 452 379.5Q449 379 449 380Q449 381 453.5 383.5Q458 386 459.5 382.5Q461 379 469 379.5Q477 380 480.5 372ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 411.5 363.5Q420 358 422.5 355ZM410.5 361Q410 360 411 359.5Q412 359 412.5 360Q413 361 412 361.5Q411 362 410.5 361ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM284 351.5Q278 350 278 351Q278 352 287 356Q296 360 293 356.5Q290 353 284 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM149.5 360Q154 346 153 346Q152 346 147 351Q142 356 137.5 362Q133 368 131.5 368Q130 368 132 368.5Q134 369 136.5 372.5Q139 376 139 377.5Q139 379 138 380Q137 381 133.5 380.5Q130 380 126.5 382.5Q123 385 119 384.5Q115 384 113 386Q111 388 110 387.5Q109 387 107 389Q105 391 103 391.5Q101 392 95 396Q89 400 90.5 401.5Q92 403 91.5 403.5Q91 404 88 403Q85 402 81.5 403.5Q78 405 77.5 406.5Q77 408 78.5 408.5Q80 409 82 408Q84 407 85 409Q86 411 95 411Q104 411 112 408.5Q120 406 120 405Q120 404 125 399Q130 394 135.5 385.5Q141 377 143 375.5Q145 374 149.5 360ZM90 408Q89 407 90 406Q91 405 92 406Q93 407 92 408Q91 409 90 408ZM439 347.5Q445 345 439 346.5Q433 348 433 349Q433 350 439 347.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM166.5 322Q169 316 167 315.5Q165 315 164 318Q163 321 160.5 324Q158 327 159 328.5Q160 330 161 327Q162 324 163 326Q164 328 166.5 322ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 267.5 350Q274 350 266 348Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 523.5 295Q535 316 534 317Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 317Q529 319 527.5 319.5Q526 320 523.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 560.5 386Q564 383 571 390.5Q578 398 576 392.5Q574 387 569.5 383.5Q565 380 563 376.5Q561 373 559.5 374Q558 375 557 374Q556 373 555.5 370.5Q555 368 556.5 367.5Q558 367 555.5 365Q553 363 553.5 360.5Q554 358 545 336.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 527.5 294.5ZM557 377Q558 376 558 378.5Q558 381 557 379.5Q556 378 557 377ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 405.5 223ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 287 270.5Q288 263 291 250Q294 237 298.5 224.5Q303 212 307.5 203.5Q312 195 314.5 191.5Q317 188 319.5 186Q322 184 327.5 175.5Q333 167 332 163ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM583.5 111Q580 104 578 106Q576 108 577.5 110Q579 112 581 113Q583 114 582.5 116Q582 118 583.5 118.5Q585 119 586 118.5Q587 118 583.5 111ZM573 96.5Q571 95 570 97.5Q569 100 571 101Q573 102 574 100Q575 98 573 96.5ZM565 94.5Q567 93 564.5 92Q562 91 561 93.5Q560 96 561.5 96Q563 96 565 94.5ZM158.5 95Q160 93 152.5 91.5Q145 90 139.5 91Q134 92 130 94.5Q126 97 123 100.5Q120 104 117 109.5Q114 115 111 124.5Q108 134 111 132Q114 130 118 120Q122 110 126 105Q130 100 135.5 97.5Q141 95 149 96Q157 97 158.5 95Z\"/><path fill=\"#29191c\" d=\"M365 548Q364 548 363.5 552.5Q363 557 362 558Q361 559 364.5 559.5Q368 560 367 554Q366 548 365 548ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 439.5 535.5Q427 553 426 553Q425 553 424.5 552Q424 551 427 545Q430 539 429.5 538Q429 537 422 540Q415 543 409.5 548Q404 553 404 554Q404 555 415.5 560Q427 565 429 565Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 307 562.5Q315 560 320.5 557.5Q326 555 326 554Q326 553 320.5 548Q315 543 307.5 539.5Q300 536 299.5 537Q299 538 302.5 545Q306 552 304.5 553Q303 554 290 535.5Q277 517 277.5 516Q278 515 290.5 520Q303 525 310.5 529.5Q318 534 328 542.5Q338 551 343.5 552.5Q349 554 346 547.5Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM504.5 451Q505 447 501 449Q497 451 491 452.5Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458.5Q509 463 512.5 454.5Q516 446 518 438ZM344 413Q342 415 343 418Q344 421 348.5 421.5Q353 422 355 425.5Q357 429 360.5 429Q364 429 367.5 424.5Q371 420 373 420.5Q375 421 376.5 420Q378 419 378 417Q378 415 376 413Q374 411 372 410.5Q370 410 363 410Q356 410 353 411Q350 412 348 411.5Q346 411 344 413ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM195.5 396Q194 388 194.5 394.5Q195 401 196 402.5Q197 404 195.5 396ZM298.5 390Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 308 386Q306 385 303 385Q300 385 298.5 390ZM316.5 385.5Q314 384 313.5 388.5Q313 393 314.5 394Q316 395 317.5 391Q319 387 316.5 385.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM410 382Q410 378 407.5 379.5Q405 381 405 383Q405 385 406 387.5Q407 390 409 391Q411 392 411.5 391.5Q412 391 411 388.5Q410 386 410 382ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 264.5 390.5Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387Q274 385 268.5 385.5Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 381 401.5Q381 403 382.5 403Q384 403 388 405.5Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM382 402Q381 401 382 400Q383 399 384 400.5Q385 402 384 402.5Q383 403 382 402ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 452 379.5Q449 379 449 380Q449 381 453.5 383.5Q458 386 459.5 382.5Q461 379 469 379.5Q477 380 480.5 372ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 411.5 363.5Q420 358 422.5 355ZM410.5 361Q410 360 411 359.5Q412 359 412.5 360Q413 361 412 361.5Q411 362 410.5 361ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM284 351.5Q278 350 278 351Q278 352 287 356Q296 360 293 356.5Q290 353 284 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM439 347.5Q445 345 439 346.5Q433 348 433 349Q433 350 439 347.5ZM508 343Q506 343 507.5 345Q509 347 509.5 345Q510 343 508 343ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 173.5 361Q163 381 163.5 383Q164 385 162.5 392.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM167.5 315.5Q166 315 164 319Q162 323 163 325.5Q164 328 166.5 322Q169 316 167.5 315.5ZM164.5 321.5Q163 321 164 319.5Q165 318 166 319Q167 320 166.5 321Q166 322 164.5 321.5ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312 325Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 267.5 350Q274 350 266 348Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 518 284Q524 294 529.5 305.5Q535 317 534 317.5Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530.5 357.5Q535 370 538.5 374Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 560 384.5Q560 383 558 380.5Q556 378 556.5 376Q557 374 556 371Q555 368 556.5 367.5Q558 367 555.5 365Q553 363 553.5 360.5Q554 358 545 336.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 543 317.5Q549 324 549.5 322.5Q550 321 546.5 318Q543 315 527.5 294.5ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579 265Q572 282 576.5 276Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM405.5 223Q399 237 399 238Q399 239 404 237Q409 235 410.5 236Q412 237 416 230.5Q420 224 422 222Q424 220 426.5 219Q429 218 428.5 217Q428 216 429.5 215Q431 214 431.5 215Q432 216 439 215.5Q446 215 450.5 216.5Q455 218 464 223.5Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 405.5 223ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM332 163Q331 159 327 158.5Q323 158 315 164Q307 170 294.5 183.5Q282 197 273 211Q264 225 257 241Q250 257 247 267.5Q244 278 242 292Q240 306 240 317.5Q240 329 241 328.5Q242 328 246 318Q250 308 263 282.5Q276 257 277 256.5Q278 256 278.5 257Q279 258 277 269Q275 280 276 293.5Q277 307 280 317Q283 327 285.5 332Q288 337 291 340.5Q294 344 294 341Q294 338 292.5 336Q291 334 291 330.5Q291 327 292 325Q293 323 292 323Q291 323 289.5 321Q288 319 287 312Q286 305 286 291.5Q286 278 287 270.5Q288 263 291 250Q294 237 298.5 224.5Q303 212 307.5 203.5Q312 195 314.5 191.5Q317 188 319.5 186Q322 184 327.5 175.5Q333 167 332 163ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120Q403 120 405.5 125Q408 130 412 126Q416 122 415.5 121Q415 120 409 120ZM583.5 111Q580 104 578 106Q576 108 577.5 110Q579 112 581 113Q583 114 582.5 116Q582 118 583.5 118.5Q585 119 586 118.5Q587 118 583.5 111ZM573 96.5Q571 95 570 97.5Q569 100 571 101Q573 102 574 100Q575 98 573 96.5ZM565 94.5Q567 93 564.5 92Q562 91 561 93.5Q560 96 561.5 96Q563 96 565 94.5ZM158.5 95Q160 93 152.5 91.5Q145 90 139.5 91Q134 92 130 94.5Q126 97 123 100.5Q120 104 117 109.5Q114 115 111 124.5Q108 134 111 132Q114 130 118 120Q122 110 126 105Q130 100 135.5 97.5Q141 95 149 96Q157 97 158.5 95Z\"/><path fill=\"#ddc2c5\" d=\"M365 548Q364 548 363.5 552.5Q363 557 362 558Q361 559 364.5 559.5Q368 560 367 554Q366 548 365 548ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 442 531.5Q432 545 427.5 552.5Q423 560 423.5 562Q424 564 427.5 564.5Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM254 514.5Q243 522 243.5 524Q244 526 245.5 525.5Q247 525 247.5 526.5Q248 528 253 530Q258 532 259 533.5Q260 535 261 534.5Q262 534 262.5 535Q263 536 264.5 536Q266 536 267.5 538Q269 540 269.5 539.5Q270 539 275.5 542.5Q281 546 282 548.5Q283 551 291 558Q299 565 303 564Q307 563 307 562Q307 561 300.5 550.5Q294 540 285.5 528.5Q277 517 277.5 515.5Q278 514 286.5 517.5Q295 521 305 526.5Q315 532 322.5 537.5Q330 543 334 547Q338 551 343.5 552Q349 553 346 547Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294 507Q292 505 286.5 503Q281 501 279.5 501Q278 501 271.5 504Q265 507 254 514.5ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM504.5 451Q505 447 501 449Q497 451 491 452.5Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 230 455.5Q235 457 243.5 457.5Q252 458 243.5 455.5Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458Q509 462 512.5 454Q516 446 518 438ZM361 414Q362 413 361.5 412Q361 411 358.5 411Q356 411 355 412Q354 413 351.5 412.5Q349 412 351.5 413.5Q354 415 357 415Q360 415 361 414ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM298.5 390Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 308 386Q306 385 303 385Q300 385 298.5 390ZM316.5 385.5Q314 384 313.5 388.5Q313 393 314.5 394Q316 395 317.5 391Q319 387 316.5 385.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM409 379Q408 379 406.5 380Q405 381 405 383Q405 385 406 387.5Q407 390 408.5 390.5Q410 391 410 385Q410 379 409 379ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 264.5 390.5Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387Q274 385 268.5 385.5Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM318 369Q317 368 316.5 370Q316 372 318 374Q320 376 319.5 373Q319 370 318 369ZM355.5 367Q353 366 358 374.5Q363 383 363 384Q363 385 360.5 388Q358 391 360 392.5Q362 394 363.5 392.5Q365 391 366.5 391Q368 391 369.5 393Q371 395 370.5 396.5Q370 398 373.5 399.5Q377 401 375 398.5Q373 396 374 395Q375 394 378 397Q381 400 382 399.5Q383 399 384 400Q385 401 385 402.5Q385 404 388.5 406Q392 408 393 407.5Q394 407 395.5 409Q397 411 400 412.5Q403 414 404.5 413.5Q406 413 402.5 409Q399 405 399 403.5Q399 402 397.5 399.5Q396 397 393.5 395.5Q391 394 391.5 392Q392 390 390.5 387Q389 384 387 383Q385 382 385.5 380Q386 378 384 374.5Q382 371 381 371Q380 371 378 373Q376 375 373 375Q370 375 366.5 378Q363 381 361 378.5Q359 376 359.5 374Q360 372 359 370Q358 368 355.5 367ZM370.5 388.5Q371 387 372 387Q373 387 374.5 388.5Q376 390 375 392Q374 394 372 392Q370 390 370.5 388.5ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 452 379.5Q449 379 449 380Q449 381 453.5 383.5Q458 386 459.5 382.5Q461 379 469 379.5Q477 380 480.5 372ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 411.5 363.5Q420 358 422.5 355ZM410.5 361Q410 360 411 359.5Q412 359 412.5 360Q413 361 412 361.5Q411 362 410.5 361ZM225.5 353.5Q225 352 224.5 353Q224 354 225 354.5Q226 355 225.5 353.5ZM306.5 351.5Q306 351 304.5 351Q303 351 303.5 353Q304 355 305.5 353.5Q307 352 306.5 351.5ZM284 351.5Q278 350 278 351Q278 352 287 356Q296 360 293 356.5Q290 353 284 351.5ZM314 353.5Q313 349 311.5 350Q310 351 309.5 353.5Q309 356 307.5 357Q306 358 307.5 360.5Q309 363 312 360.5Q315 358 314 353.5ZM439 347.5Q445 345 439 346.5Q433 348 433 349Q433 350 439 347.5ZM322 342.5Q321 342 320.5 343Q320 344 321.5 344.5Q323 345 323 344Q323 343 322 342.5ZM176 366Q184 341 174.5 359Q165 377 163 388.5Q161 400 161.5 413Q162 426 163 430Q164 434 165.5 436Q167 438 166.5 440Q166 442 170 451Q174 460 175.5 460.5Q177 461 177 463Q177 465 183.5 473Q190 481 192 480.5Q194 480 195 481Q196 482 196 484Q196 486 197.5 487.5Q199 489 200.5 488Q202 487 202 489Q202 491 205.5 493.5Q209 496 210 494.5Q211 493 210 491.5Q209 490 207.5 490Q206 490 205 489Q204 488 204 487Q204 486 205.5 485Q207 484 205.5 481Q204 478 202.5 477.5Q201 477 202 475.5Q203 474 202 470.5Q201 467 200 466Q199 465 199 462Q199 459 197 460Q195 461 191 460.5Q187 460 184.5 457.5Q182 455 182 452.5Q182 450 179 444Q176 438 169.5 433Q163 428 163.5 420.5Q164 413 166 402Q168 391 176 366ZM372 338.5Q372 337 371 339Q370 341 371 340.5Q372 340 372 338.5ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM570 332Q569 329 566.5 331.5Q564 334 565.5 336Q567 338 568 338Q569 338 570 336.5Q571 335 570 332ZM164.5 318Q166 315 164.5 317Q163 319 162.5 321.5Q162 324 163 323Q164 322 163.5 321.5Q163 321 164.5 318ZM367 315Q366 312 365.5 314.5Q365 317 366.5 317.5Q368 318 367 315ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM312.5 316Q311 307 311 314Q311 321 312.5 323Q314 325 313.5 327Q313 329 313.5 327Q314 325 312.5 316ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251.5 348.5Q261 350 267.5 350Q274 350 266 348Q258 346 260.5 340.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM148.5 296.5Q154 287 144 299.5Q134 312 131 312Q128 312 129 313Q130 314 131.5 314Q133 314 139 311Q145 308 144 307Q143 306 148.5 296.5ZM378.5 287.5Q379 284 377.5 284Q376 284 372.5 287Q369 290 371.5 304.5Q374 319 375.5 308Q377 297 376.5 295.5Q376 294 377 292.5Q378 291 378.5 287.5ZM527.5 294.5Q512 274 518 284Q524 294 529.5 305.5Q535 317 534 317.5Q533 318 532 316Q531 314 529.5 313.5Q528 313 527 314Q526 315 527.5 316.5Q529 318 528.5 319Q528 320 524.5 318Q521 316 516 315.5Q511 315 511 316.5Q511 318 518.5 331.5Q526 345 530 356.5Q534 368 538 373Q542 378 548 388.5Q554 399 555.5 397.5Q557 396 557 392.5Q557 389 558.5 387.5Q560 386 560 384.5Q560 383 558 380.5Q556 378 556.5 376Q557 374 556 371Q555 368 556.5 367.5Q558 367 555.5 365Q553 363 553.5 360.5Q554 358 545 336.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 542.5 317Q548 323 547.5 322.5Q547 322 548.5 321.5Q550 321 546.5 318Q543 315 527.5 294.5ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM186.5 231.5Q186 231 183.5 233.5Q181 236 179 242Q177 248 180.5 243.5Q184 239 185.5 235.5Q187 232 186.5 231.5ZM596.5 225.5Q595 224 593.5 224Q592 224 589 236Q586 248 579.5 264Q573 280 577 275Q581 270 585.5 261Q590 252 594 239.5Q598 227 596.5 225.5ZM106 223Q106 220 105 222Q104 224 104.5 226.5Q105 229 104 231Q103 233 106 241.5Q109 250 112.5 257Q116 264 119 268Q122 272 122 270Q122 268 118 259Q114 250 111 239Q108 228 107 227Q106 226 106 223ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM484 205.5Q480 200 479.5 202.5Q479 205 482 208Q485 211 486.5 211Q488 211 484 205.5ZM205 215.5Q212 197 200.5 206Q189 215 182.5 222Q176 229 177.5 229Q179 229 181.5 225.5Q184 222 185.5 222Q187 222 188 223Q189 224 192 223.5Q195 223 197.5 225.5Q200 228 199 231Q198 234 205 215.5ZM470.5 193.5Q469 192 468.5 193Q468 194 469 195Q470 196 471 195.5Q472 195 470.5 193.5ZM399.5 236.5Q399 239 400 239Q401 239 403.5 236.5Q406 234 409 235.5Q412 237 417.5 228.5Q423 220 425.5 217.5Q428 215 431 214.5Q434 214 442 215Q450 216 455.5 218.5Q461 221 467 225Q473 229 480 235.5Q487 242 484.5 239.5Q482 237 482 236Q482 235 472.5 226.5Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422.5 196.5Q423 200 420 211Q417 222 415.5 221Q414 220 414 216Q414 212 413 210.5Q412 209 407.5 218Q403 227 404 230Q405 233 402.5 233.5Q400 234 399.5 236.5ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM457 186Q455 185 455 186.5Q455 188 457 187.5Q459 187 457 186ZM443 183.5Q441 184 442 184.5Q443 185 444 184Q445 183 443 183.5ZM418.5 177Q417 177 416.5 180.5Q416 184 417.5 185Q419 186 420 185Q421 184 420.5 180.5Q420 177 418.5 177ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM424 154Q424 150 422 154Q420 158 420.5 160Q421 162 422.5 160Q424 158 424 154ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5ZM409 120.5Q403 121 405.5 125.5Q408 130 412 126Q416 122 415.5 121Q415 120 409 120.5Z\"/><path fill=\"#87656c\" d=\"M365 548Q364 548 363.5 552.5Q363 557 362 558Q361 559 364.5 559.5Q368 560 367 554Q366 548 365 548ZM479.5 524Q481 519 474 514Q467 509 459 505Q451 501 445 502.5Q439 504 436.5 506.5Q434 509 426.5 512.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 433.5 522.5Q447 516 449 516Q451 516 451.5 517Q452 518 442 531.5Q432 545 427.5 552.5Q423 560 423.5 562Q424 564 427.5 564.5Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM268 506Q258 511 258 512Q258 513 265.5 516Q273 519 279 524Q285 529 281 523Q277 517 277.5 515.5Q278 514 286.5 517.5Q295 521 306.5 527.5Q318 534 328 542.5Q338 551 343.5 552Q349 553 346 547Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 293 506.5Q290 504 284 502.5Q278 501 268 506ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM504.5 451Q505 447 501 449Q497 451 491 452.5Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 451ZM229.5 449.5Q224 446 224.5 450Q225 454 233.5 456Q242 458 245 457.5Q248 457 241.5 455Q235 453 229.5 449.5ZM518 438Q520 430 517 435Q514 440 514 443Q514 446 513 447.5Q512 449 512 451.5Q512 454 510.5 458Q509 462 512.5 454Q516 446 518 438ZM361 414Q362 413 361.5 412Q361 411 358.5 411Q356 411 355 412Q354 413 351.5 412.5Q349 412 351.5 413.5Q354 415 357 415Q360 415 361 414ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM298.5 390Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 308 386Q306 385 303 385Q300 385 298.5 390ZM316.5 385.5Q314 384 313.5 388.5Q313 393 314.5 394Q316 395 317.5 391Q319 387 316.5 385.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM409 379Q408 379 406.5 380Q405 381 405 383Q405 385 406 387.5Q407 390 408.5 390.5Q410 391 410 385Q410 379 409 379ZM366 384.5Q358 375 365.5 387Q373 399 375 400Q377 401 375 398.5Q373 396 373.5 395Q374 394 366 384.5ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM249 370Q238 370 238.5 372.5Q239 375 242.5 381Q246 387 253.5 386Q261 385 264.5 390.5Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387Q274 385 268.5 385.5Q263 386 262 385Q261 384 260.5 377Q260 370 249 370ZM480.5 372Q484 364 472.5 364Q461 364 461 371Q461 378 458 379Q455 380 452 379.5Q449 379 449 380Q449 381 453.5 383.5Q458 386 459.5 382.5Q461 379 469 379.5Q477 380 480.5 372ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 406.5 366.5Q410 364 410.5 361.5Q411 359 412.5 360Q414 361 414.5 360Q415 359 417.5 358.5Q420 358 422.5 355ZM284 351.5Q278 350 278 351Q278 352 287 356Q296 360 293 356.5Q290 353 284 351.5ZM268.5 348.5Q263 347 263 348Q263 349 264 349.5Q265 350 269.5 350Q274 350 268.5 348.5ZM439 347.5Q445 345 439 346.5Q433 348 433 349Q433 350 439 347.5ZM176 366Q184 341 174.5 359Q165 377 163 388.5Q161 400 161 407.5Q161 415 162 422Q163 429 163.5 421Q164 413 166 402Q168 391 176 366ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM526 342.5Q519 331 522.5 338Q526 345 530 356.5Q534 368 536 370Q538 372 545 383.5Q552 395 542.5 374.5Q533 354 526 342.5ZM164.5 318Q166 315 164.5 317Q163 319 162.5 321.5Q162 324 163 323Q164 322 163.5 321.5Q163 321 164.5 318ZM312.5 318Q311 311 311 316Q311 321 312.5 323Q314 325 313.5 327Q313 329 313.5 327Q314 325 312.5 318ZM556.5 310Q553 307 557 312Q561 317 560 315.5Q559 314 559.5 313.5Q560 313 556.5 310ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251 348Q260 349 260.5 348Q261 347 260 347Q259 347 258.5 345.5Q258 344 260.5 339.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM148 298Q154 287 145 298.5Q136 310 133.5 312Q131 314 136.5 311.5Q142 309 148 298ZM530 297Q512 274 518 284Q524 294 531 308Q538 322 546 341Q554 360 545 337.5Q536 315 536 313.5Q536 312 536.5 311.5Q537 311 542.5 317Q548 323 548 321.5Q548 320 530 297ZM583.5 258.5Q582 257 577.5 268.5Q573 280 576 276.5Q579 273 582 267.5Q585 262 585 261Q585 260 583.5 258.5ZM118.5 259.5Q115 251 113.5 252.5Q112 254 112 255Q112 256 117 264Q122 272 122 270Q122 268 118.5 259.5ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM399.5 236.5Q399 239 400 239Q401 239 403.5 236.5Q406 234 409 235.5Q412 237 417.5 228.5Q423 220 425.5 217.5Q428 215 431 214.5Q434 214 442 215Q450 216 455.5 218.5Q461 221 467 225Q473 229 480 235.5Q487 242 475 230Q463 218 455 213.5Q447 209 440.5 209Q434 209 428.5 213Q423 217 422.5 212.5Q422 208 423.5 199.5Q425 191 423.5 192Q422 193 422 200Q422 207 419.5 215.5Q417 224 416 225Q415 226 414.5 225.5Q414 225 414 218.5Q414 212 413 210.5Q412 209 407.5 218Q403 227 404 230Q405 233 402.5 233.5Q400 234 399.5 236.5ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM406.5 177Q409 178 405 174.5Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 384 183.5Q388 180 392.5 178Q397 176 400.5 176Q404 176 406.5 177ZM265 173.5Q271 169 259.5 177Q248 185 240 192.5Q232 200 227 206Q222 212 207 234.5Q192 257 181.5 279.5Q171 302 174.5 298.5Q178 295 185.5 279Q193 263 205.5 243Q218 223 228 211Q238 199 248.5 188.5Q259 178 265 173.5ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM435 132.5Q438 129 436.5 129.5Q435 130 433.5 133Q432 136 435 132.5Z\"/><path fill=\"#513b42\" d=\"M365 548Q364 548 363.5 552.5Q363 557 362 558Q361 559 364.5 559.5Q368 560 367 554Q366 548 365 548ZM479.5 524Q481 519 477 516Q473 513 472 513Q471 513 463.5 516.5Q456 520 452.5 522.5Q449 525 444 530Q439 535 431.5 546.5Q424 558 423.5 560.5Q423 563 427 564Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM435.5 522Q451 515 445 511Q439 507 437.5 507Q436 507 427.5 511.5Q419 516 409 522.5Q399 529 393.5 534.5Q388 540 384.5 547Q381 554 386.5 552.5Q392 551 398.5 545Q405 539 412.5 534Q420 529 435.5 522ZM286 510Q279 514 297 523Q315 532 322.5 537.5Q330 543 334 547Q338 551 343.5 552Q349 553 346 547Q343 541 336.5 534.5Q330 528 322.5 523Q315 518 305.5 513.5Q296 509 294.5 507.5Q293 506 286 510ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM510.5 458.5Q512 455 511 456Q510 457 509.5 459.5Q509 462 510.5 458.5ZM240 456Q238 457 241 457.5Q244 458 243 456.5Q242 455 240 456ZM232.5 451Q231 450 229.5 452Q228 454 230.5 455Q233 456 233.5 454Q234 452 232.5 451ZM504.5 452.5Q505 450 504 449Q503 448 494 451Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 452.5ZM513.5 449Q513 447 512.5 449.5Q512 452 513 451.5Q514 451 513.5 449ZM517.5 438Q518 435 517 435.5Q516 436 515 438Q514 440 515.5 440.5Q517 441 517.5 438ZM361 414Q362 413 361.5 412Q361 411 358.5 411Q356 411 355 412Q354 413 351.5 412.5Q349 412 351.5 413.5Q354 415 357 415Q360 415 361 414ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM315.5 391Q314 389 313.5 391Q313 393 315 393Q317 393 315.5 391ZM298.5 390Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 308 386Q306 385 303 385Q300 385 298.5 390ZM275 387Q274 385 268.5 385.5Q263 386 265.5 391Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387ZM410.5 386.5Q410 384 408 385.5Q406 387 407 389Q408 391 409 391Q410 391 410.5 390Q411 389 410.5 386.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM454.5 379Q449 379 449.5 380.5Q450 382 454 384Q458 386 459 382.5Q460 379 454.5 379ZM360.5 378Q358 375 360 378.5Q362 382 362.5 381.5Q363 381 360.5 378ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 406.5 366.5Q410 364 410.5 361.5Q411 359 412.5 360Q414 361 415 359.5Q416 358 418 358Q420 358 422.5 355ZM284 351.5Q278 350 278 351Q278 352 282.5 353.5Q287 355 289.5 357Q292 359 292.5 357.5Q293 356 291.5 354.5Q290 353 284 351.5ZM427 339Q434 334 428 336Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 427 339ZM526 342.5Q519 331 524.5 344Q530 357 532 360Q534 363 534 365.5Q534 368 534.5 367.5Q535 367 536 368Q537 369 540 375Q543 381 545.5 383.5Q548 386 540.5 370Q533 354 526 342.5ZM542.5 331Q541 329 547 343.5Q553 358 548.5 345.5Q544 333 542.5 331ZM539 323Q538 321 538 322.5Q538 324 539 324.5Q540 325 539 323ZM164.5 318Q166 315 164.5 317Q163 319 162.5 321.5Q162 324 163 323Q164 322 163.5 321.5Q163 321 164.5 318ZM312.5 318.5Q311 311 311 316Q311 321 312.5 323.5Q314 326 312.5 318.5ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251 348Q260 349 260.5 348Q261 347 260 347Q259 347 258.5 345.5Q258 344 260.5 339.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM583.5 258.5Q582 257 577.5 268.5Q573 280 576 276.5Q579 273 582 267.5Q585 262 585 261Q585 260 583.5 258.5ZM118.5 259.5Q115 251 113.5 252.5Q112 254 112 255Q112 256 116.5 264Q121 272 121.5 270Q122 268 118.5 259.5ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM423.5 235Q419 237 432.5 241Q446 245 440 239Q434 233 431 233Q428 233 423.5 235ZM423.5 219.5Q426 217 425 217Q424 217 422.5 219.5Q421 222 423.5 219.5ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM414 217.5Q413 209 408.5 216.5Q404 224 403.5 226.5Q403 229 404 231Q405 233 402.5 233.5Q400 234 399.5 236.5Q399 239 401 238.5Q403 238 404.5 236Q406 234 409 235.5Q412 237 414.5 233Q417 229 415 228.5Q413 228 414 227Q415 226 414 217.5ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM402.5 176.5Q408 177 406.5 175.5Q405 174 404 174.5Q403 175 402 173Q401 171 398.5 170Q396 169 393.5 169Q391 169 389 170Q387 171 384.5 173.5Q382 176 377.5 187Q373 198 376.5 192.5Q380 187 382.5 184.5Q385 182 389 180Q393 178 394 175.5Q395 173 396 174.5Q397 176 402.5 176.5ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM437 130.5Q438 129 437 129Q436 129 435 130.5Q434 132 435 132Q436 132 437 130.5Z\"/><path fill=\"#801512\" d=\"M365 548Q364 548 363.5 552.5Q363 557 362 558Q361 559 364.5 559.5Q368 560 367 554Q366 548 365 548ZM479.5 524Q481 519 477 516Q473 513 472 513Q471 513 463.5 516.5Q456 520 452.5 522.5Q449 525 444 530Q439 535 431.5 546.5Q424 558 423.5 560.5Q423 563 427 564Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM318.5 500Q317 502 324 503.5Q331 505 335.5 505Q340 505 335 504Q330 503 325 500.5Q320 498 318.5 500ZM240 456Q238 457 241 457.5Q244 458 243 456.5Q242 455 240 456ZM232.5 451Q231 450 229.5 452Q228 454 230.5 455Q233 456 233.5 454Q234 452 232.5 451ZM504.5 452.5Q505 450 504 449Q503 448 494 451Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 452.5ZM258 408Q256 410 258.5 410.5Q261 411 267 409Q273 407 266.5 406.5Q260 406 258 408ZM467 399Q467 398 465 399Q463 400 464 400.5Q465 401 466 400.5Q467 400 467 399ZM247 399.5Q242 396 245 401.5Q248 407 246.5 407.5Q245 408 241.5 406Q238 404 238 406Q238 408 241 409.5Q244 411 248 407Q252 403 247 399.5ZM483.5 392Q484 391 481.5 390.5Q479 390 476 392Q473 394 474.5 395Q476 396 479.5 394.5Q483 393 483.5 392ZM315.5 391Q314 389 313.5 391Q313 393 315 393Q317 393 315.5 391ZM298.5 390Q297 395 303 394.5Q309 394 309.5 390.5Q310 387 308 386Q306 385 303 385Q300 385 298.5 390ZM275 387Q274 385 268.5 385.5Q263 386 265.5 391Q268 396 269.5 394Q271 392 273.5 390.5Q276 389 275 387ZM410.5 386.5Q410 384 408 385.5Q406 387 407 389Q408 391 409 391Q410 391 410.5 390Q411 389 410.5 386.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM454.5 379Q449 379 449.5 380.5Q450 382 454 384Q458 386 459 382.5Q460 379 454.5 379ZM360.5 378Q358 375 360 378.5Q362 382 362.5 381.5Q363 381 360.5 378ZM331.5 378Q327 373 327 375Q327 377 329 381Q331 385 342 390.5Q353 396 344.5 389.5Q336 383 331.5 378ZM422.5 355Q425 352 421.5 353Q418 354 414 357Q410 360 409 359.5Q408 359 405.5 364Q403 369 406.5 366.5Q410 364 410.5 361.5Q411 359 412.5 360Q414 361 415 359.5Q416 358 418 358Q420 358 422.5 355ZM284 351.5Q278 350 278 351Q278 352 282.5 353.5Q287 355 289.5 357Q292 359 292.5 357.5Q293 356 291.5 354.5Q290 353 284 351.5ZM426.5 339.5Q433 335 427.5 336.5Q422 338 414 342.5Q406 347 404 349Q402 351 400.5 355Q399 359 402.5 357.5Q406 356 408 356Q410 356 415 350Q420 344 426.5 339.5ZM526 342.5Q519 331 524.5 344Q530 357 533 361.5Q536 366 537 369.5Q538 373 541.5 378.5Q545 384 546.5 385Q548 386 540.5 370Q533 354 526 342.5ZM542.5 331Q541 329 547 343.5Q553 358 548.5 345.5Q544 333 542.5 331ZM539 323Q538 321 538 322.5Q538 324 539 324.5Q540 325 539 323ZM164.5 318Q166 315 164.5 317Q163 319 162.5 321.5Q162 324 163 323Q164 322 163.5 321.5Q163 321 164.5 318ZM312.5 318Q311 311 311 316Q311 321 312.5 323Q314 325 312.5 318ZM270.5 307.5Q268 297 261.5 306.5Q255 316 250.5 325Q246 334 244 340.5Q242 347 251 348Q260 349 260.5 348Q261 347 260 347Q259 347 258.5 345.5Q258 344 260.5 339.5Q263 335 264.5 333.5Q266 332 267 332.5Q268 333 269.5 331Q271 329 273 330Q275 331 274.5 333Q274 335 277.5 336.5Q281 338 277 328Q273 318 270.5 307.5ZM583.5 258.5Q582 257 577.5 268.5Q573 280 576 276.5Q579 273 582 267.5Q585 262 585 261Q585 260 583.5 258.5ZM118.5 259.5Q115 251 113.5 252.5Q112 254 112 255Q112 256 116.5 264Q121 272 121.5 270Q122 268 118.5 259.5ZM446 253Q438 248 446 254Q454 260 462 269Q470 278 466 272Q462 266 458 262Q454 258 446 253ZM403 253Q411 243 407 243.5Q403 244 398.5 248.5Q394 253 391.5 260Q389 267 387.5 276Q386 285 387.5 280Q389 275 392 269Q395 263 403 253ZM518 218Q507 216 513.5 224.5Q520 233 525 227.5Q530 222 529.5 221Q529 220 518 218ZM180 190Q173 188 176 192Q179 196 179.5 198Q180 200 183.5 196Q187 192 180 190ZM519 161Q525 153 517 159.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497.5 206.5Q503 212 504.5 209.5Q506 207 515 198.5Q524 190 522 190Q520 190 513.5 193Q507 196 505 195Q503 194 508 181.5Q513 169 519 161ZM179 156.5Q173 152 179 160Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 179 156.5ZM437 130.5Q438 129 437 129Q436 129 435 130.5Q434 132 435 132Q436 132 437 130.5Z\"/><path fill=\"#bda0a5\" d=\"M365 559.5Q368 559 367 558Q366 557 364 558.5Q362 560 365 559.5ZM479.5 524Q481 519 477 516Q473 513 472 513Q471 513 463.5 516.5Q456 520 452.5 522.5Q449 525 444 530Q439 535 431.5 546.5Q424 558 423.5 560.5Q423 563 427 564Q431 565 440 556.5Q449 548 457.5 542Q466 536 471 533.5Q476 531 477 530Q478 529 479.5 524ZM240 456Q238 457 241 457.5Q244 458 243 456.5Q242 455 240 456ZM232.5 451Q231 450 229.5 452Q228 454 230.5 455Q233 456 233.5 454Q234 452 232.5 451ZM504.5 452.5Q505 450 504 449Q503 448 494 451Q485 454 485 455Q485 456 489 456Q493 456 496.5 455Q500 454 502 454.5Q504 455 504.5 452.5ZM241.5 406Q238 404 238 406Q238 408 239 407Q240 406 242.5 407Q245 408 241.5 406ZM348 392.5Q343 389 344.5 391Q346 393 349.5 394.5Q353 396 348 392.5ZM315.5 391Q314 389 313.5 391Q313 393 315 393Q317 393 315.5 391ZM300.5 386Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 305.5 385.5Q302 385 300.5 386ZM410.5 386.5Q410 384 408 385.5Q406 387 407 389Q408 391 409 391Q410 391 410.5 390Q411 389 410.5 386.5ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM360.5 378Q358 375 360 378.5Q362 382 362.5 381.5Q363 381 360.5 378ZM408.5 365Q410 363 409 364Q408 365 406.5 364Q405 363 404 366Q403 369 405 368Q407 367 408.5 365ZM426.5 339.5Q433 335 426.5 337Q420 339 420 341.5Q420 344 426.5 339.5ZM256 332.5Q247 332 244.5 339.5Q242 347 251 348Q260 349 260.5 348Q261 347 260 347Q259 347 258.5 345.5Q258 344 261.5 338.5Q265 333 256 332.5ZM526 342.5Q519 331 524.5 344Q530 357 533 361.5Q536 366 537 369.5Q538 373 541.5 378.5Q545 384 546.5 385Q548 386 540.5 370Q533 354 526 342.5ZM542.5 331Q541 329 547 343.5Q553 358 548.5 345.5Q544 333 542.5 331ZM539 323Q538 321 538 322.5Q538 324 539 324.5Q540 325 539 323ZM312.5 318Q311 311 311 316Q311 321 312.5 323Q314 325 312.5 318ZM583.5 258.5Q582 257 577.5 268.5Q573 280 576 276.5Q579 273 582 267.5Q585 262 585 261Q585 260 583.5 258.5ZM118.5 259.5Q115 251 113.5 252.5Q112 254 112 255Q112 256 116.5 264Q121 272 121.5 270Q122 268 118.5 259.5ZM403.5 245.5Q404 244 402 245.5Q400 247 401.5 247Q403 247 403.5 245.5ZM176 189.5Q175 190 177.5 194.5Q180 199 183.5 195.5Q187 192 182 190.5Q177 189 176 189.5ZM178 156Q177 156 181 162Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 182 158.5Q179 156 178 156ZM518 162Q523 155 516 160.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497 206Q502 211 512 201.5Q522 192 521 191Q520 190 513.5 193Q507 196 505 195.5Q503 195 505.5 187Q508 179 510.5 174Q513 169 518 162ZM437 130.5Q438 129 437 129Q436 129 435 130.5Q434 132 435 132Q436 132 437 130.5Z\"/><path fill=\"#5c0c0d\" d=\"M365 559.5Q368 559 367 558Q366 557 364 558.5Q362 560 365 559.5ZM240 456Q238 457 241 457.5Q244 458 243 456.5Q242 455 240 456ZM232.5 451Q231 450 229.5 452Q228 454 230.5 455Q233 456 233.5 454Q234 452 232.5 451ZM504.5 452.5Q505 450 504 449Q503 448 494 451.5Q485 455 494.5 455Q504 455 504.5 452.5ZM241.5 406Q238 404 238 406Q238 408 239 407Q240 406 242.5 407Q245 408 241.5 406ZM348 392.5Q343 389 344.5 391Q346 393 349.5 394.5Q353 396 348 392.5ZM315.5 391Q314 389 313.5 391Q313 393 315 393Q317 393 315.5 391ZM300.5 386Q299 387 298 391Q297 395 300.5 395Q304 395 307 394Q310 393 309.5 389.5Q309 386 305.5 385.5Q302 385 300.5 386ZM416 382Q414 383 414 385Q414 387 415 388.5Q416 390 422 390Q428 390 426 386Q424 382 421 381.5Q418 381 416 382ZM361 378.5Q359 376 360.5 379Q362 382 362.5 381.5Q363 381 361 378.5ZM406 364.5Q406 363 404.5 366Q403 369 404.5 367.5Q406 366 406 364.5ZM526 343.5Q525 343 531.5 358Q538 373 541.5 378.5Q545 384 546.5 385Q548 386 540.5 370Q533 354 530 349Q527 344 526 343.5ZM426.5 339.5Q433 335 426.5 337Q420 339 420 341.5Q420 344 426.5 339.5ZM255.5 332.5Q247 332 244.5 339.5Q242 347 251 348Q260 349 259 346.5Q258 344 261 338.5Q264 333 255.5 332.5ZM542.5 331Q541 329 547 343.5Q553 358 548.5 345.5Q544 333 542.5 331ZM539 323Q538 321 538 322.5Q538 324 539 324.5Q540 325 539 323ZM312.5 319Q311 313 311 317Q311 321 312.5 323Q314 325 312.5 319ZM403.5 245.5Q404 244 402 245.5Q400 247 401.5 247Q403 247 403.5 245.5ZM176 189.5Q175 190 177.5 194.5Q180 199 183.5 195.5Q187 192 182 190.5Q177 189 176 189.5ZM178 156Q177 156 181 162Q185 168 188.5 176.5Q192 185 194.5 182Q197 179 195 176.5Q193 174 191 173.5Q189 173 189 170Q189 167 187 164Q185 161 182 158.5Q179 156 178 156ZM518 162Q523 155 516 160.5Q509 166 501 178.5Q493 191 492.5 196Q492 201 497 206Q502 211 512 201.5Q522 192 521 191Q520 190 513.5 193Q507 196 505 195.5Q503 195 505.5 187Q508 179 510.5 174Q513 169 518 162ZM437 130.5Q438 129 437 129Q436 129 435 130.5Q434 132 435 132Q436 132 437 130.5Z\"/><path fill=\"#a4787a\" d=\"M240 456Q238 457 241 457.5Q244 458 243 456.5Q242 455 240 456ZM232.5 451Q231 450 229.5 452Q228 454 230.5 455Q233 456 233.5 454Q234 452 232.5 451ZM504.5 452.5Q505 450 504 449Q503 448 494 451.5Q485 455 494.5 455Q504 455 504.5 452.5ZM315.5 391Q314 389 313.5 391Q313 393 315 393Q317 393 315.5 391ZM361 378.5Q359 376 360.5 379Q362 382 362.5 381.5Q363 381 361 378.5ZM526 343.5Q525 343 531.5 358Q538 373 541.5 378.5Q545 384 546.5 385Q548 386 540.5 370Q533 354 530 349Q527 344 526 343.5ZM255.5 332.5Q247 332 244.5 339.5Q242 347 251 348Q260 349 259 346.5Q258 344 261 338.5Q264 333 255.5 332.5ZM542.5 331Q541 329 547 343.5Q553 358 548.5 345.5Q544 333 542.5 331ZM539 323Q538 321 538 322.5Q538 324 539 324.5Q540 325 539 323ZM312.5 319Q311 313 311 317Q311 321 312.5 323Q314 325 312.5 319ZM437 130.5Q438 129 437 129Q436 129 435 130.5Q434 132 435 132Q436 132 437 130.5Z\"/></g>", "ring": "<g fill-rule=\"evenodd\"><path fill=\"#e4cdd1\" d=\"M289 614Q268 608 269 613Q270 618 274.5 620Q279 622 301 626.5Q323 631 338.5 632Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 341.5 623Q332 623 321 621.5Q310 620 289 614ZM455.5 605.5Q456 600 446 604.5Q436 609 427 612Q418 615 407.5 617.5Q397 620 388 621Q379 622 377.5 625Q376 628 376 630Q376 632 391.5 629.5Q407 627 428 620.5Q449 614 452 612.5Q455 611 455.5 605.5ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM368 564.5Q366 562 365 562Q364 562 362 564.5Q360 567 360 568.5Q360 570 362 572Q364 574 364 575Q364 576 361.5 578.5Q359 581 357 585.5Q355 590 355 595Q355 600 360 621.5Q365 643 370 622Q375 601 374.5 594Q374 587 371.5 582.5Q369 578 366.5 577Q364 576 367 573Q370 570 370 568.5Q370 567 368 564.5ZM377.5 564Q372 568 374.5 571Q377 574 381.5 576Q386 578 390.5 578Q395 578 404.5 574.5Q414 571 418.5 570.5Q423 570 416.5 568Q410 566 404 563Q398 560 394.5 559.5Q391 559 387 559.5Q383 560 377.5 564ZM358 569Q358 568 352.5 564Q347 560 341.5 559.5Q336 559 320 565Q304 571 308.5 571Q313 571 324 574.5Q335 578 339.5 578Q344 578 348.5 576Q353 574 355.5 572Q358 570 358 569ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 205.5 460Q207 469 209.5 476.5Q212 484 215 490Q218 496 222.5 502Q227 508 225.5 508.5Q224 509 213.5 504Q203 499 198.5 496Q194 493 186.5 486Q179 479 182 494Q185 509 189.5 521.5Q194 534 201.5 547Q209 560 207.5 554.5Q206 549 205 540Q204 531 204 523.5Q204 516 206 516Q208 516 215 531.5Q222 547 240.5 577.5Q259 608 244 560Q229 512 225.5 496.5Q222 481 221 479.5Q220 478 220 475Q220 472 218.5 467.5Q217 463 215 450.5Q213 438 208 432.5ZM73 414Q67 411 67 413Q67 415 70.5 426.5Q74 438 82 455.5Q90 473 99.5 488Q109 503 124 521Q139 539 152.5 551.5Q166 564 178.5 573Q191 582 212 593.5Q233 605 242.5 608.5Q252 612 252 611Q252 610 247.5 603.5Q243 597 233 592.5Q223 588 204 576Q185 564 176 557Q167 550 151 534Q135 518 124.5 504.5Q114 491 105.5 477Q97 463 91.5 451Q86 439 82.5 428Q79 417 73 414ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66.5 363Q64 361 62 364Q60 367 60.5 376.5Q61 386 62.5 392.5Q64 399 69 398.5Q74 398 72 388Q70 378 69.5 371.5Q69 365 66.5 363ZM631 360Q628 357 626.5 370.5Q625 384 620 404Q615 424 608 440.5Q601 457 592.5 472.5Q584 488 573.5 502.5Q563 517 547 533.5Q531 550 520.5 558.5Q510 567 492.5 578.5Q475 590 473 594.5Q471 599 471 601Q471 603 485.5 595Q500 587 518.5 573.5Q537 560 552.5 544.5Q568 529 580.5 512Q593 495 604.5 473.5Q616 452 619.5 443.5Q623 435 627.5 419.5Q632 404 634.5 386.5Q637 369 635.5 366Q634 363 631 360ZM646.5 331Q645 328 640.5 334Q636 340 632 342Q628 344 634 349Q640 354 642 358Q644 362 648 357Q652 352 659 348.5Q666 345 659.5 342Q653 339 650.5 336.5Q648 334 646.5 331ZM54 332Q52 328 48 333.5Q44 339 37.5 342Q31 345 36.5 347.5Q42 350 45.5 353.5Q49 357 50.5 360Q52 363 54.5 358.5Q57 354 56 351Q55 348 56 347Q57 346 58.5 347.5Q60 349 64 347.5Q68 346 62 341Q56 336 54 332ZM63.5 311.5Q59 307 59 315Q59 323 60.5 325.5Q62 328 65 330.5Q68 333 68 324.5Q68 316 63.5 311.5ZM615.5 226Q608 210 606.5 219Q605 228 607 231.5Q609 235 614 250Q619 265 621 276.5Q623 288 624 290Q625 292 627 312.5Q629 333 633 328Q637 323 637 311.5Q637 300 634.5 285.5Q632 271 627.5 256.5Q623 242 615.5 226ZM91.5 210Q92 209 88.5 214Q85 219 78 235Q71 251 66.5 267Q62 283 62 291Q62 299 66 299Q70 299 71 293Q72 287 75.5 273.5Q79 260 86.5 242.5Q94 225 93.5 220Q93 215 92 213Q91 211 91.5 210ZM400.5 59.5Q391 61 393 62Q395 63 401.5 63.5Q408 64 419.5 67Q431 70 442.5 74.5Q454 79 464 84Q474 89 478 92Q482 95 488 93Q494 91 493.5 90Q493 89 484 83.5Q475 78 467 74Q459 70 446 65Q433 60 429 59Q425 58 417.5 58Q410 58 400.5 59.5ZM307 62Q309 61 301 59.5Q293 58 284 58Q275 58 258.5 63.5Q242 69 224.5 78.5Q207 88 206 89.5Q205 91 209 93Q213 95 215 95Q217 95 224 90.5Q231 86 245.5 79.5Q260 73 271.5 69.5Q283 66 294 64.5Q305 63 307 62ZM353 31Q350 23 346.5 32.5Q343 42 341.5 43.5Q340 45 331 49Q322 53 326 54Q330 55 335.5 58Q341 61 346 71.5Q351 82 353 75Q355 68 356.5 65.5Q358 63 360.5 61Q363 59 371 55.5Q379 52 375 51Q371 50 366 47.5Q361 45 358.5 42Q356 39 353 31Z\"/><path fill=\"#f5dfd9\" d=\"M289 614Q268 608 269 613Q270 618 274.5 620Q279 622 301 626.5Q323 631 338.5 632Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 341.5 623Q332 623 321 621.5Q310 620 289 614ZM455.5 605.5Q456 600 446 604.5Q436 609 427 612Q418 615 407.5 617.5Q397 620 388 621Q379 622 377.5 625Q376 628 376 630Q376 632 391.5 629.5Q407 627 428 620.5Q449 614 452 612.5Q455 611 455.5 605.5ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM368 564.5Q366 562 365 562Q364 562 362 564.5Q360 567 360 568.5Q360 570 362 572Q364 574 364 575Q364 576 361.5 578.5Q359 581 357 585.5Q355 590 355 595Q355 600 360 621.5Q365 643 370 622Q375 601 374.5 594Q374 587 371.5 582.5Q369 578 366.5 577Q364 576 367 573Q370 570 370 568.5Q370 567 368 564.5ZM377.5 564Q372 568 374.5 571Q377 574 381.5 576Q386 578 390.5 578Q395 578 404.5 574.5Q414 571 418.5 570.5Q423 570 416.5 568Q410 566 404 563Q398 560 394.5 559.5Q391 559 387 559.5Q383 560 377.5 564ZM358 569Q358 568 352.5 564Q347 560 341.5 559.5Q336 559 320 565Q304 571 308.5 571Q313 571 324 574.5Q335 578 339.5 578Q344 578 348.5 576Q353 574 355.5 572Q358 570 358 569ZM227 505Q226 505 226 506Q226 507 227 507.5Q228 508 228 506.5Q228 505 227 505ZM186.5 486Q179 479 180.5 488Q182 497 186.5 512Q191 527 195 535.5Q199 544 204 552Q209 560 207.5 554.5Q206 549 205 540Q204 531 204.5 523Q205 515 206.5 515.5Q208 516 209.5 519.5Q211 523 209 515.5Q207 508 207 505.5Q207 503 208 502.5Q209 502 201.5 497.5Q194 493 186.5 486ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM73 414Q67 411 67 413Q67 415 70.5 426.5Q74 438 82 455.5Q90 473 99.5 488Q109 503 124 521Q139 539 152.5 551.5Q166 564 178.5 573Q191 582 212 593.5Q233 605 242.5 608.5Q252 612 252 611Q252 610 247.5 603.5Q243 597 233 592.5Q223 588 204 576Q185 564 176 557Q167 550 151 534Q135 518 124.5 504.5Q114 491 105.5 477Q97 463 91.5 451Q86 439 82.5 428Q79 417 73 414ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66.5 363Q64 361 62 364Q60 367 60.5 376.5Q61 386 62.5 392.5Q64 399 69 398.5Q74 398 72 388Q70 378 69.5 371.5Q69 365 66.5 363ZM631 360Q628 357 626.5 370.5Q625 384 620 404Q615 424 608 440.5Q601 457 592.5 472.5Q584 488 573.5 502.5Q563 517 547 533.5Q531 550 520.5 558.5Q510 567 492.5 578.5Q475 590 473 594.5Q471 599 471 601Q471 603 485.5 595Q500 587 518.5 573.5Q537 560 552.5 544.5Q568 529 580.5 512Q593 495 604.5 473.5Q616 452 619.5 443.5Q623 435 627.5 419.5Q632 404 634.5 386.5Q637 369 635.5 366Q634 363 631 360ZM646.5 331Q645 328 640.5 334Q636 340 632 342Q628 344 634 349Q640 354 642 358Q644 362 648 357Q652 352 659 348.5Q666 345 659.5 342Q653 339 650.5 336.5Q648 334 646.5 331ZM54 332Q52 328 48 333.5Q44 339 37.5 342Q31 345 36.5 347.5Q42 350 45.5 353.5Q49 357 50.5 360Q52 363 54.5 358.5Q57 354 56 351Q55 348 56 347Q57 346 58.5 347.5Q60 349 64 347.5Q68 346 62 341Q56 336 54 332ZM63.5 311.5Q59 307 59 315Q59 323 60.5 325.5Q62 328 65 330.5Q68 333 68 324.5Q68 316 63.5 311.5ZM615.5 226Q608 210 606.5 219Q605 228 607 231.5Q609 235 614 250Q619 265 621 276.5Q623 288 624 290Q625 292 627 312.5Q629 333 633 328Q637 323 637 311.5Q637 300 634.5 285.5Q632 271 627.5 256.5Q623 242 615.5 226ZM91.5 210Q92 209 88.5 214Q85 219 78 235Q71 251 66.5 267Q62 283 62 291Q62 299 66 299Q70 299 71 293Q72 287 75.5 273.5Q79 260 86.5 242.5Q94 225 93.5 220Q93 215 92 213Q91 211 91.5 210ZM400.5 59.5Q391 61 393 62Q395 63 401.5 63.5Q408 64 419.5 67Q431 70 442.5 74.5Q454 79 464 84Q474 89 478 92Q482 95 488 93Q494 91 493.5 90Q493 89 484 83.5Q475 78 467 74Q459 70 446 65Q433 60 429 59Q425 58 417.5 58Q410 58 400.5 59.5ZM307 62Q309 61 301 59.5Q293 58 284 58Q275 58 258.5 63.5Q242 69 224.5 78.5Q207 88 206 89.5Q205 91 209 93Q213 95 215 95Q217 95 224 90.5Q231 86 245.5 79.5Q260 73 271.5 69.5Q283 66 294 64.5Q305 63 307 62ZM353 31Q350 23 346.5 32.5Q343 42 341.5 43.5Q340 45 331 49Q322 53 326 54Q330 55 335.5 58Q341 61 346 71.5Q351 82 353 75Q355 68 356.5 65.5Q358 63 360.5 61Q363 59 371 55.5Q379 52 375 51Q371 50 366 47.5Q361 45 358.5 42Q356 39 353 31Z\"/><path fill=\"#bf3d25\" d=\"M289 614Q268 608 269 613Q270 618 274.5 620Q279 622 301 626.5Q323 631 338.5 632Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 341.5 623Q332 623 321 621.5Q310 620 289 614ZM455.5 605.5Q456 600 446 604.5Q436 609 427 612Q418 615 407.5 617.5Q397 620 388 621Q379 622 377.5 625Q376 628 376 630Q376 632 391.5 629.5Q407 627 428 620.5Q449 614 452 612.5Q455 611 455.5 605.5ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM368 564.5Q366 562 365 562Q364 562 362 564.5Q360 567 360 568.5Q360 570 362 572Q364 574 364 575Q364 576 361.5 578.5Q359 581 357 585.5Q355 590 355 595Q355 600 360 621.5Q365 643 370 622Q375 601 374.5 594Q374 587 371.5 582.5Q369 578 366.5 577Q364 576 367 573Q370 570 370 568.5Q370 567 368 564.5ZM377.5 564Q372 568 374.5 571Q377 574 381.5 576Q386 578 390.5 578Q395 578 404.5 574.5Q414 571 418.5 570.5Q423 570 416.5 568Q410 566 404 563Q398 560 394.5 559.5Q391 559 387 559.5Q383 560 377.5 564ZM358 569Q358 568 352.5 564Q347 560 341.5 559.5Q336 559 320 565Q304 571 308.5 571Q313 571 324 574.5Q335 578 339.5 578Q344 578 348.5 576Q353 574 355.5 572Q358 570 358 569ZM186.5 486Q179 479 180.5 488Q182 497 186.5 512Q191 527 195 535.5Q199 544 204 552Q209 560 207.5 554.5Q206 549 205 540Q204 531 204.5 523Q205 515 206.5 515.5Q208 516 209.5 519.5Q211 523 208.5 513Q206 503 206.5 502Q207 501 200.5 497Q194 493 186.5 486ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM73 414Q67 411 67 413Q67 415 70.5 426.5Q74 438 82 455.5Q90 473 99.5 488Q109 503 124 521Q139 539 152.5 551.5Q166 564 178.5 573Q191 582 212 593.5Q233 605 242.5 608.5Q252 612 252 611Q252 610 247.5 603.5Q243 597 233 592.5Q223 588 204 576Q185 564 176 557Q167 550 151 534Q135 518 124.5 504.5Q114 491 105.5 477Q97 463 91.5 451Q86 439 82.5 428Q79 417 73 414ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66.5 363Q64 361 62 364Q60 367 60.5 376.5Q61 386 62.5 392.5Q64 399 69 398.5Q74 398 72 388Q70 378 69.5 371.5Q69 365 66.5 363ZM631 360Q628 357 626.5 370.5Q625 384 620 404Q615 424 608 440.5Q601 457 592.5 472.5Q584 488 573.5 502.5Q563 517 547 533.5Q531 550 520.5 558.5Q510 567 492.5 578.5Q475 590 473 594.5Q471 599 471 601Q471 603 485.5 595Q500 587 518.5 573.5Q537 560 552.5 544.5Q568 529 580.5 512Q593 495 604.5 473.5Q616 452 619.5 443.5Q623 435 627.5 419.5Q632 404 634.5 386.5Q637 369 635.5 366Q634 363 631 360ZM646.5 331Q645 328 640.5 334Q636 340 632 342Q628 344 634 349Q640 354 642 358Q644 362 648 357Q652 352 659 348.5Q666 345 659.5 342Q653 339 650.5 336.5Q648 334 646.5 331ZM54 332Q52 328 48 333.5Q44 339 37.5 342Q31 345 36.5 347.5Q42 350 45.5 353.5Q49 357 50.5 360Q52 363 54.5 358.5Q57 354 56 351Q55 348 56 347Q57 346 58.5 347.5Q60 349 64 347.5Q68 346 62 341Q56 336 54 332ZM63.5 311.5Q59 307 59 315Q59 323 60.5 325.5Q62 328 65 330.5Q68 333 68 324.5Q68 316 63.5 311.5ZM615.5 226Q608 210 606.5 219Q605 228 607 231.5Q609 235 614 250Q619 265 621 276.5Q623 288 624 290Q625 292 627 312.5Q629 333 633 328Q637 323 637 311.5Q637 300 634.5 285.5Q632 271 627.5 256.5Q623 242 615.5 226ZM91.5 210Q92 209 88.5 214Q85 219 78 235Q71 251 66.5 267Q62 283 62 291Q62 299 66 299Q70 299 71 293Q72 287 75.5 273.5Q79 260 86.5 242.5Q94 225 93.5 220Q93 215 92 213Q91 211 91.5 210ZM400.5 59.5Q391 61 393 62Q395 63 401.5 63.5Q408 64 419.5 67Q431 70 442.5 74.5Q454 79 464 84Q474 89 478 92Q482 95 488 93Q494 91 493.5 90Q493 89 484 83.5Q475 78 467 74Q459 70 446 65Q433 60 429 59Q425 58 417.5 58Q410 58 400.5 59.5ZM307 62Q309 61 301 59.5Q293 58 284 58Q275 58 258.5 63.5Q242 69 224.5 78.5Q207 88 206 89.5Q205 91 209 93Q213 95 215 95Q217 95 224 90.5Q231 86 245.5 79.5Q260 73 271.5 69.5Q283 66 294 64.5Q305 63 307 62ZM353 31Q350 23 346.5 32.5Q343 42 341.5 43.5Q340 45 331 49Q322 53 326 54Q330 55 335.5 58Q341 61 346 71.5Q351 82 353 75Q355 68 356.5 65.5Q358 63 360.5 61Q363 59 371 55.5Q379 52 375 51Q371 50 366 47.5Q361 45 358.5 42Q356 39 353 31Z\"/><path fill=\"#a7231a\" d=\"M289 614Q268 608 269 613Q270 618 274.5 620Q279 622 301 626.5Q323 631 338.5 632Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 341.5 623Q332 623 321 621.5Q310 620 289 614ZM455.5 605.5Q456 600 446 604.5Q436 609 427 612Q418 615 407.5 617.5Q397 620 388 621Q379 622 377.5 625Q376 628 376 630Q376 632 391.5 629.5Q407 627 428 620.5Q449 614 452 612.5Q455 611 455.5 605.5ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM368 564.5Q366 562 365 562Q364 562 362 564.5Q360 567 360 568.5Q360 570 362 572Q364 574 364 575Q364 576 361.5 578.5Q359 581 357 585.5Q355 590 355 595Q355 600 360 621.5Q365 643 370 622Q375 601 374.5 594Q374 587 371.5 582.5Q369 578 366.5 577Q364 576 367 573Q370 570 370 568.5Q370 567 368 564.5ZM377.5 564Q372 568 374.5 571Q377 574 381.5 576Q386 578 390.5 578Q395 578 404.5 574.5Q414 571 418.5 570.5Q423 570 416.5 568Q410 566 404 563Q398 560 394.5 559.5Q391 559 387 559.5Q383 560 377.5 564ZM358 569Q358 568 352.5 564Q347 560 341.5 559.5Q336 559 320 565Q304 571 308.5 571Q313 571 324 574.5Q335 578 339.5 578Q344 578 348.5 576Q353 574 355.5 572Q358 570 358 569ZM186.5 486Q179 479 180.5 488Q182 497 186.5 512Q191 527 195 535.5Q199 544 204 552Q209 560 207.5 554.5Q206 549 205 540Q204 531 204.5 523Q205 515 206.5 515.5Q208 516 209.5 519.5Q211 523 208.5 513Q206 503 206.5 502Q207 501 200.5 497Q194 493 186.5 486ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM73 414Q67 411 67 413Q67 415 70.5 426.5Q74 438 82 455.5Q90 473 99.5 488Q109 503 124 521Q139 539 152.5 551.5Q166 564 178.5 573Q191 582 212 593.5Q233 605 242.5 608.5Q252 612 252 611Q252 610 247.5 603.5Q243 597 233 592.5Q223 588 204 576Q185 564 176 557Q167 550 151 534Q135 518 124.5 504.5Q114 491 105.5 477Q97 463 91.5 451Q86 439 82.5 428Q79 417 73 414ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66.5 363Q64 361 62 364Q60 367 60.5 376.5Q61 386 62.5 392.5Q64 399 69 398.5Q74 398 72 388Q70 378 69.5 371.5Q69 365 66.5 363ZM631 360Q628 357 626.5 370.5Q625 384 620 404Q615 424 608 440.5Q601 457 592.5 472.5Q584 488 573.5 502.5Q563 517 547 533.5Q531 550 520.5 558.5Q510 567 492.5 578.5Q475 590 473 594.5Q471 599 471 601Q471 603 485.5 595Q500 587 518.5 573.5Q537 560 552.5 544.5Q568 529 580.5 512Q593 495 604.5 473.5Q616 452 619.5 443.5Q623 435 627.5 419.5Q632 404 634.5 386.5Q637 369 635.5 366Q634 363 631 360ZM646.5 331Q645 328 640.5 334Q636 340 632 342Q628 344 634 349Q640 354 642 358Q644 362 648 357Q652 352 659 348.5Q666 345 659.5 342Q653 339 650.5 336.5Q648 334 646.5 331ZM54 332Q52 328 48 333.5Q44 339 37.5 342Q31 345 36.5 347.5Q42 350 45.5 353.5Q49 357 50.5 360Q52 363 54.5 358.5Q57 354 56 351Q55 348 56 347Q57 346 58.5 347.5Q60 349 64 347.5Q68 346 62 341Q56 336 54 332ZM63.5 311.5Q59 307 59 315Q59 323 60.5 325.5Q62 328 65 330.5Q68 333 68 324.5Q68 316 63.5 311.5ZM615.5 226Q608 210 606.5 219Q605 228 607 231.5Q609 235 614 250Q619 265 621 276.5Q623 288 624 290Q625 292 627 312.5Q629 333 633 328Q637 323 637 311.5Q637 300 634.5 285.5Q632 271 627.5 256.5Q623 242 615.5 226ZM91.5 210Q92 209 88.5 214Q85 219 78 235Q71 251 66.5 267Q62 283 62 291Q62 299 66 299Q70 299 71 293Q72 287 75.5 273.5Q79 260 86.5 242.5Q94 225 93.5 220Q93 215 92 213Q91 211 91.5 210ZM400.5 59.5Q391 61 393 62Q395 63 401.5 63.5Q408 64 419.5 67Q431 70 442.5 74.5Q454 79 464 84Q474 89 478 92Q482 95 488 93Q494 91 493.5 90Q493 89 484 83.5Q475 78 467 74Q459 70 446 65Q433 60 429 59Q425 58 417.5 58Q410 58 400.5 59.5ZM307 62Q309 61 301 59.5Q293 58 284 58Q275 58 258.5 63.5Q242 69 224.5 78.5Q207 88 206 89.5Q205 91 209 93Q213 95 215 95Q217 95 224 90.5Q231 86 245.5 79.5Q260 73 271.5 69.5Q283 66 294 64.5Q305 63 307 62ZM353 31Q350 23 346.5 32.5Q343 42 341.5 43.5Q340 45 331 49Q322 53 326 54Q330 55 335.5 58Q341 61 346 71.5Q351 82 353 75Q355 68 356.5 65.5Q358 63 360.5 61Q363 59 371 55.5Q379 52 375 51Q371 50 366 47.5Q361 45 358.5 42Q356 39 353 31Z\"/><path fill=\"#d51217\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM283.5 618.5Q281 621 282 622Q283 623 285 622.5Q287 622 288.5 623.5Q290 625 295.5 625.5Q301 626 305.5 627.5Q310 629 312 628.5Q314 628 315.5 629Q317 630 317.5 629.5Q318 629 317.5 627Q317 625 314 622.5Q311 620 303.5 618Q296 616 295.5 616.5Q295 617 293.5 616Q292 615 289 615.5Q286 616 283.5 618.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM448 612.5Q448 611 445 608.5Q442 606 438 608.5Q434 611 432.5 610.5Q431 610 428.5 611.5Q426 613 424 613Q422 613 417.5 615Q413 617 412.5 616.5Q412 616 409 621.5Q406 627 422 622.5Q438 618 441.5 616Q445 614 446.5 614Q448 614 448 612.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM368 564.5Q366 562 365 562Q364 562 362 564.5Q360 567 360 568.5Q360 570 362 572Q364 574 364 575Q364 576 361.5 578.5Q359 581 357 585.5Q355 590 355 595Q355 600 360 621.5Q365 643 370 622Q375 601 374.5 594Q374 587 371.5 582.5Q369 578 366.5 577Q364 576 367 573Q370 570 370 568.5Q370 567 368 564.5ZM377.5 564Q372 568 374.5 571Q377 574 381.5 576Q386 578 390.5 578Q395 578 404.5 574.5Q414 571 418.5 570.5Q423 570 416.5 568Q410 566 404 563Q398 560 394.5 559.5Q391 559 387 559.5Q383 560 377.5 564ZM387.5 569Q387 568 388 567.5Q389 567 389.5 568Q390 569 389 569.5Q388 570 387.5 569ZM358 569Q358 568 352.5 564Q347 560 341.5 559.5Q336 559 320 565Q304 571 308.5 571Q313 571 324 574.5Q335 578 339.5 578Q344 578 348.5 576Q353 574 354 572.5Q355 571 356.5 570.5Q358 570 358 569ZM190 489.5Q188 487 187.5 489.5Q187 492 184.5 492Q182 492 183.5 500.5Q185 509 189.5 521.5Q194 534 201 546Q208 558 206 544.5Q204 531 204 523.5Q204 516 205.5 515.5Q207 515 209 519Q211 523 209 515.5Q207 508 207 504.5Q207 501 199.5 496.5Q192 492 190 489.5ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM72.5 421Q69 421 73 433.5Q77 446 83.5 459.5Q90 473 99.5 488Q109 503 118.5 515Q128 527 137 536.5Q146 546 162 559.5Q178 573 194.5 583.5Q211 594 225 600.5Q239 607 239.5 605.5Q240 604 238 601.5Q236 599 236 596.5Q236 594 226 589Q216 584 200.5 574Q185 564 176 557Q167 550 153.5 537Q140 524 132.5 515Q125 506 115 491.5Q105 477 97 461.5Q89 446 84.5 433Q80 420 79 419.5Q78 419 77 420Q76 421 72.5 421ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66 369.5Q62 367 61 367.5Q60 368 60 373.5Q60 379 62 389Q64 399 67.5 399Q71 399 72.5 397.5Q74 396 72 384Q70 372 66 369.5ZM631 366Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 369Q627 374 621 399Q615 424 608 440.5Q601 457 592.5 472.5Q584 488 573.5 502.5Q563 517 547 533.5Q531 550 520.5 558.5Q510 567 496.5 576Q483 585 482.5 587.5Q482 590 480 593Q478 596 478 597.5Q478 599 484 596Q490 593 504 584Q518 575 532.5 563Q547 551 557.5 540Q568 529 580.5 512Q593 495 604.5 473.5Q616 452 621 439Q626 426 630 410.5Q634 395 635 387.5Q636 380 635.5 379.5Q635 379 636 375.5Q637 372 636.5 370Q636 368 633.5 369Q631 370 629.5 369.5Q628 369 631 366ZM52 330Q51 330 50.5 331.5Q50 333 47 336Q44 339 38 341.5Q32 344 32 345Q32 346 37 348Q42 350 46.5 355.5Q51 361 52 361Q53 361 55 357.5Q57 354 55 350.5Q53 347 54 346Q55 345 55.5 346Q56 347 56.5 346.5Q57 346 60 347Q63 348 64 347.5Q65 347 65 345Q65 343 63 342.5Q61 342 57 336Q53 330 52 330ZM647.5 333Q644 328 642 332Q640 336 634 340.5Q628 345 631.5 347Q635 349 640 355Q645 361 648.5 356.5Q652 352 658 349Q664 346 664.5 345Q665 344 658 341Q651 338 647.5 333ZM63.5 311.5Q59 307 59 313Q59 319 60 320Q61 321 64.5 321.5Q68 322 68 319Q68 316 63.5 311.5ZM615 225.5Q614 225 611.5 231Q609 237 613.5 249Q618 261 620.5 274.5Q623 288 624 290Q625 292 626.5 310Q628 328 630 329Q632 330 631.5 329.5Q631 329 634 326Q637 323 637 311.5Q637 300 634.5 285.5Q632 271 627.5 256.5Q623 242 619.5 234Q616 226 615 225.5ZM86.5 230Q84 224 80 231Q76 238 71 252Q66 266 63.5 277.5Q61 289 61.5 294Q62 299 66 299Q70 299 71 293Q72 287 75.5 273.5Q79 260 84 248Q89 236 86.5 230ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM418 62.5Q414 64 414 65Q414 66 422.5 68Q431 70 439 73Q447 76 461 83Q475 90 479 87.5Q483 85 482.5 83.5Q482 82 470.5 76Q459 70 444 64.5Q429 59 428 60Q427 61 424.5 61Q422 61 418 62.5ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM287 65Q287 64 283.5 63.5Q280 63 276 61Q272 59 257 64Q242 69 232 74Q222 79 217 82.5Q212 86 215 88Q218 90 220.5 90.5Q223 91 234 85Q245 79 258.5 74Q272 69 279.5 67.5Q287 66 287 65ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5ZM350.5 26.5Q349 26 346 34Q343 42 341.5 43.5Q340 45 332.5 48Q325 51 324.5 52Q324 53 332.5 57Q341 61 344.5 67.5Q348 74 348.5 76.5Q349 79 350 79.5Q351 80 354.5 71.5Q358 63 360.5 61Q363 59 369 56.5Q375 54 375.5 52.5Q376 51 368.5 48Q361 45 358.5 42Q356 39 354 33Q352 27 350.5 26.5Z\"/><path fill=\"#c30610\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM283.5 618.5Q281 621 282 622Q283 623 285 622.5Q287 622 288.5 623.5Q290 625 295.5 625.5Q301 626 305.5 627.5Q310 629 312 628.5Q314 628 315.5 629Q317 630 317.5 629.5Q318 629 317.5 627Q317 625 314 622.5Q311 620 303.5 618Q296 616 295.5 616.5Q295 617 293.5 616Q292 615 289 615.5Q286 616 283.5 618.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM448 612.5Q448 611 445 608.5Q442 606 438 608.5Q434 611 432.5 610.5Q431 610 428.5 611.5Q426 613 424 613Q422 613 417.5 615Q413 617 412.5 616.5Q412 616 409 621.5Q406 627 422 622.5Q438 618 441.5 616Q445 614 446.5 614Q448 614 448 612.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM230 591Q224 588 224 592Q224 596 226 596Q228 596 229 597Q230 598 228.5 599.5Q227 601 225 600.5Q223 600 231 603.5Q239 607 239.5 605.5Q240 604 238 601.5Q236 599 236 596.5Q236 594 230 591ZM491.5 580.5Q493 579 492 579Q491 579 487 582Q483 585 482.5 587.5Q482 590 480 593Q478 596 478 597.5Q478 599 485.5 595Q493 591 491.5 589Q490 587 490 584.5Q490 582 491.5 580.5ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 374 570.5Q376 573 376.5 572Q377 571 382 570Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM203.5 546Q201 546 202.5 549Q204 552 203.5 551Q203 550 204.5 549Q206 548 206 547Q206 546 203.5 546ZM203.5 525.5Q203 523 202.5 524.5Q202 526 203 527Q204 528 203.5 525.5ZM127 522.5Q125 522 126.5 524Q128 526 128.5 524.5Q129 523 127 522.5ZM190 489.5Q188 487 187.5 489.5Q187 492 184.5 492Q182 492 182 494.5Q182 497 183.5 501.5Q185 506 186.5 504.5Q188 503 189 504Q190 505 188.5 507Q187 509 186 509Q185 509 190.5 523.5Q196 538 197 534Q198 530 195 529Q192 528 191 524.5Q190 521 194 515Q198 509 199 508.5Q200 508 201 509Q202 510 202 512Q202 514 204.5 514.5Q207 515 209 519Q211 523 209 514.5Q207 506 206 505.5Q205 505 206 503Q207 501 199.5 496.5Q192 492 190 489.5ZM93 454Q92 452 87.5 454.5Q83 457 83 458Q83 459 84 460.5Q85 462 88 462.5Q91 463 89 465Q87 467 98.5 485.5Q110 504 111.5 501.5Q113 499 115.5 497.5Q118 496 113 489Q108 482 101.5 470Q95 458 93.5 459Q92 460 91 459.5Q90 459 90.5 457Q91 455 92.5 455.5Q94 456 93 454ZM75.5 436.5Q73 434 76 442Q79 450 81 450Q83 450 86 447Q89 444 87 439Q85 434 84.5 435Q84 436 85 439.5Q86 443 85 444Q84 445 81.5 445Q79 445 78 444Q77 443 77.5 441Q78 439 75.5 436.5ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM80.5 423.5Q79 419 77.5 420Q76 421 72.5 421Q69 421 70 424Q71 427 72 427Q73 427 74.5 428.5Q76 430 79 429Q82 428 80.5 423.5ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM66 369.5Q62 367 61 367.5Q60 368 60.5 376Q61 384 62 383.5Q63 383 64 384Q65 385 63.5 386.5Q62 388 63 393.5Q64 399 67.5 399Q71 399 72.5 397.5Q74 396 72 384Q70 372 66 369.5ZM631 366Q634 363 631.5 364Q629 365 628 364.5Q627 364 626.5 370.5Q626 377 627 378Q628 379 626.5 380Q625 381 624.5 384.5Q624 388 626.5 386Q629 384 632 385Q635 386 636 377.5Q637 369 632.5 369Q628 369 631 366ZM52 330Q51 330 50.5 331.5Q50 333 47 336Q44 339 38 341.5Q32 344 32 345Q32 346 37 348Q42 350 46.5 355.5Q51 361 52 361Q53 361 55 357.5Q57 354 55 350.5Q53 347 54 346Q55 345 55.5 346Q56 347 56.5 346.5Q57 346 60 347Q63 348 64 347.5Q65 347 65 345Q65 343 63 342.5Q61 342 57 336Q53 330 52 330ZM647.5 333Q644 328 642 332Q640 336 634 340.5Q628 345 631.5 347Q635 349 640 355Q645 361 648.5 356.5Q652 352 658 349Q664 346 664.5 345Q665 344 658 341Q651 338 647.5 333ZM637 317Q637 311 634 312Q631 313 629.5 315Q628 317 628 322.5Q628 328 630 329Q632 330 631.5 329.5Q631 329 634 326Q637 323 637 317ZM63.5 311.5Q59 307 59 313Q59 319 60 320Q61 321 64.5 321.5Q68 322 68 319Q68 316 63.5 311.5ZM70.5 297Q71 295 69 295.5Q67 296 65.5 297.5Q64 299 67 299Q70 299 70.5 297ZM615 225.5Q614 225 611.5 231Q609 237 610.5 240.5Q612 244 616 240.5Q620 237 619.5 234.5Q619 232 617.5 229Q616 226 615 225.5ZM84 224.5Q83 224 79.5 231.5Q76 239 77 238.5Q78 238 82 241Q86 244 87.5 239.5Q89 235 87 230Q85 225 84 224.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM418 62.5Q414 64 414 65Q414 66 422.5 68Q431 70 439 73Q447 76 461 83Q475 90 479 87.5Q483 85 482.5 83.5Q482 82 470.5 76Q459 70 444 64.5Q429 59 428 60Q427 61 424.5 61Q422 61 418 62.5ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM287 65Q287 64 283.5 63.5Q280 63 276 61Q272 59 257 64Q242 69 232 74Q222 79 217 82.5Q212 86 215 88Q218 90 220.5 90.5Q223 91 234 85Q245 79 258.5 74Q272 69 279.5 67.5Q287 66 287 65ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5ZM350.5 26.5Q349 26 346 34Q343 42 341.5 43.5Q340 45 332.5 48Q325 51 324.5 52Q324 53 332.5 57Q341 61 344.5 67.5Q348 74 348.5 76.5Q349 79 350 79.5Q351 80 354.5 71.5Q358 63 360.5 61Q363 59 369 56.5Q375 54 375.5 52.5Q376 51 368.5 48Q361 45 358.5 42Q356 39 354 33Q352 27 350.5 26.5Z\"/><path fill=\"#29191c\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404.5 593Q417 579 409 581.5Q401 584 396.5 595.5Q392 607 404.5 593ZM319 581Q311 579 324.5 593Q338 607 333.5 596Q329 585 328 584Q327 583 319 581ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 373.5 570Q375 572 381 570.5Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM158.5 442.5Q155 433 154.5 441Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 158.5 442.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM552 412Q549 407 550.5 422.5Q552 438 555 432.5Q558 427 556.5 422Q555 417 552 412ZM137.5 419Q138 406 134.5 408Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5Z\"/><path fill=\"#ddc2c5\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM254.5 593Q254 591 252.5 592.5Q251 594 252 595.5Q253 597 254 596Q255 595 254.5 593ZM404 593Q416 579 408.5 581.5Q401 584 396.5 595.5Q392 607 404 593ZM319.5 581Q312 579 325 593Q338 607 333.5 596Q329 585 328 584Q327 583 319.5 581ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 373.5 570Q375 572 381 570.5Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM155 434.5Q154 434 154 441.5Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 159 443.5Q156 435 155 434.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM137.5 419.5Q138 407 134.5 408.5Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5Z\"/><path fill=\"#87656c\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM404 593Q416 579 408.5 581.5Q401 584 396.5 595.5Q392 607 404 593ZM319.5 581Q312 579 325 593Q338 607 333.5 596Q329 585 328 584Q327 583 319.5 581ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 373.5 570Q375 572 381 570.5Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM155 434.5Q154 434 154 441.5Q154 449 155.5 456.5Q157 464 161 473.5Q165 483 170 490.5Q175 498 172.5 481.5Q170 465 166 458.5Q162 452 159 443.5Q156 435 155 434.5ZM208 432.5Q203 427 203.5 439Q204 451 206 461.5Q208 472 208 466Q208 460 209 459Q210 458 215 467.5Q220 477 216.5 457.5Q213 438 208 432.5ZM137.5 419.5Q138 407 134.5 408.5Q131 410 129 413Q127 416 124 430Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137.5 419.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5Z\"/><path fill=\"#513b42\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM404 593Q416 579 408.5 581.5Q401 584 396.5 595.5Q392 607 404 593ZM319.5 581Q312 579 325 593Q338 607 333.5 596Q329 585 328 584Q327 583 319.5 581ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 373.5 570Q375 572 381 570.5Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM174 494.5Q173 492 172.5 492.5Q172 493 173.5 495Q175 497 174 494.5ZM157 456.5Q156 456 156.5 460Q157 464 159 469.5Q161 475 164 480.5Q167 486 168 486Q169 486 170 484.5Q171 483 170 482Q169 481 168.5 478.5Q168 476 164 470Q160 464 159 460.5Q158 457 157 456.5ZM155 434.5Q154 434 154 438Q154 442 157 444.5Q160 447 158 441Q156 435 155 434.5ZM137 422.5Q137 413 132 418Q127 423 126 423Q125 423 123 433.5Q121 444 121.5 454.5Q122 465 123.5 470.5Q125 476 128.5 483Q132 490 132 480.5Q132 471 136 459Q140 447 138.5 439.5Q137 432 137 422.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5Z\"/><path fill=\"#801512\" d=\"M346 623Q341 623 341.5 624Q342 625 340.5 628.5Q339 632 346.5 632.5Q354 633 354 630.5Q354 628 352.5 625.5Q351 623 346 623ZM388.5 624.5Q388 621 383.5 621.5Q379 622 377.5 625Q376 628 376 630Q376 632 383.5 631Q391 630 390 629Q389 628 388.5 624.5ZM271.5 608.5Q271 608 269.5 608Q268 608 268 610Q268 612 270 610.5Q272 609 271.5 608.5ZM454 601Q452 602 454 603Q456 604 456 602Q456 600 454 601ZM364.5 576Q364 575 362.5 576.5Q361 578 362 579.5Q363 581 363.5 586Q364 591 365 590.5Q366 590 366.5 585.5Q367 581 368 580.5Q369 580 369 579Q369 578 367 577.5Q365 577 364.5 576ZM373.5 566.5Q372 568 373.5 570Q375 572 381 570.5Q387 569 386.5 568Q386 567 382 567Q378 567 376.5 566Q375 565 373.5 566.5ZM352.5 570Q358 570 358 569Q358 568 356.5 566.5Q355 565 354 566Q353 567 348.5 567.5Q344 568 345.5 569Q347 570 352.5 570ZM174 494.5Q173 492 172.5 492.5Q172 493 173.5 495Q175 497 174 494.5ZM157 456.5Q156 456 156.5 460Q157 464 159 469.5Q161 475 164 480.5Q167 486 168 486Q169 486 170 484.5Q171 483 170 482Q169 481 168.5 478.5Q168 476 164 470Q160 464 159 460.5Q158 457 157 456.5ZM137 422.5Q137 413 132 418Q127 423 126 423Q125 423 123 433.5Q121 444 121.5 454.5Q122 465 124.5 473Q127 481 129.5 485Q132 489 132 480Q132 471 136 459Q140 447 138.5 439.5Q137 432 137 422.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5ZM610 214.5Q608 210 606.5 216.5Q605 223 605 225.5Q605 228 606.5 230.5Q608 233 609 229.5Q610 226 608.5 224.5Q607 223 609.5 221Q612 219 610 214.5ZM92 213Q91 209 89.5 212Q88 215 89 214.5Q90 214 91.5 215.5Q93 217 92 213ZM404 61.5Q404 59 401.5 59Q399 59 395 60.5Q391 62 397.5 63Q404 64 404 61.5ZM415 58Q411 58 412 59Q413 60 416 59Q419 58 415 58ZM300 60Q291 58 292 59Q293 60 292.5 62.5Q292 65 300.5 63.5Q309 62 300 60ZM283 58.5Q280 58 280.5 59.5Q281 61 283.5 60Q286 59 283 58.5Z\"/><path fill=\"#bda0a5\" d=\"M366 576.5Q364 575 363 576Q362 577 362.5 580.5Q363 584 365 583.5Q367 583 367.5 580.5Q368 578 366 576.5ZM174 494.5Q173 492 172.5 492.5Q172 493 173.5 495Q175 497 174 494.5ZM157 456.5Q156 456 156.5 460Q157 464 159 469.5Q161 475 164 480.5Q167 486 168 486Q169 486 170 484.5Q171 483 170 482Q169 481 168.5 478.5Q168 476 164 470Q160 464 159 460.5Q158 457 157 456.5ZM137 422.5Q137 413 132 418Q127 423 126 423Q125 423 123 433.5Q121 444 121.5 454.5Q122 465 124.5 473Q127 481 129.5 485Q132 489 132 480Q132 471 136 459Q140 447 138.5 439.5Q137 432 137 422.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5Z\"/><path fill=\"#5c0c0d\" d=\"M366 576.5Q364 575 363 576Q362 577 362.5 580.5Q363 584 365 583.5Q367 583 367.5 580.5Q368 578 366 576.5ZM174 494.5Q173 492 172.5 492.5Q172 493 173.5 495Q175 497 174 494.5ZM157 456.5Q156 456 156.5 460Q157 464 159 469.5Q161 475 164 480.5Q167 486 168 486Q169 486 170 484.5Q171 483 170 482Q169 481 168.5 478.5Q168 476 164 470Q160 464 159 460.5Q158 457 157 456.5ZM136.5 422.5Q136 413 131.5 418Q127 423 126 423Q125 423 123.5 432Q122 441 124.5 439Q127 437 128.5 437.5Q130 438 132.5 441.5Q135 445 136 449Q137 453 138.5 449Q140 445 138.5 438.5Q137 432 136.5 422.5ZM630.5 366.5Q634 363 631.5 364Q629 365 628 364.5Q627 364 627 367Q627 370 630.5 366.5Z\"/><path fill=\"#a4787a\" d=\"M174 494.5Q173 492 172.5 492.5Q172 493 173.5 495Q175 497 174 494.5ZM157 456.5Q156 456 156.5 460Q157 464 159 469.5Q161 475 164 480.5Q167 486 168 486Q169 486 170 484.5Q171 483 170 482Q169 481 168.5 478.5Q168 476 164 470Q160 464 159 460.5Q158 457 157 456.5ZM136.5 422.5Q136 413 131.5 418Q127 423 126 423Q125 423 123.5 432Q122 441 124.5 439Q127 437 128.5 437.5Q130 438 132.5 441.5Q135 445 136 449Q137 453 138.5 449Q140 445 138.5 438.5Q137 432 136.5 422.5Z\"/></g>"};

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

/* ============ ACCOUNT LAYER ============
   The app only talks to FX. FX talks to window.FBX_IMPL, which is either
   - fb-bridge.js  (real Firebase, used on GitHub Pages once firebase-config.js is filled in), or
   - fb-demo.js    (an in-browser demo backend used by the preview and by tests), or
   - nothing       (guest only: everything stays on this device).                                    */
const RENAME_DAYS = 14, NAME_RE = /^[a-z0-9_]{3,16}$/;
const FX = { impl: null, user: null, profile: null, admin: false, status: 'checking', friends: { incoming: [], outgoing: [], profiles: {} }, busy: false, err: '' };
const fxOn = () => !!FX.impl;
const fxIn = () => !!FX.user;
const fxName = () => (FX.profile && FX.profile.username) || S.prof.name || '';
const nameSafe = s => String(s || '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 16);

/* ---- wiring ---- */
function fxInit() {
  const attach = impl => {
    if (FX.impl || !impl) { if (!impl && FX.status === 'checking') { FX.status = 'guest'; render(); } return; }
    FX.impl = impl; FX.status = 'ready';
    impl.onAuth(u => fxAuth(u));
    render();
  };
  if (window.FBX_IMPL) attach(window.FBX_IMPL);
  else {
    window.addEventListener('fbx-ready', () => attach(window.FBX_IMPL || null), { once: true });
    setTimeout(() => { if (!FX.impl && FX.status === 'checking') { FX.status = 'guest'; render(); } }, 4000);
  }
}

async function fxAuth(u) {
  if (!u) {
    if (FX.user) { FX.user = null; FX.profile = null; FX.admin = false; FX.friends = { incoming: [], outgoing: [], profiles: {} }; STORE_UID = ''; loadState(); applyPrefs(); }
    render(); return;
  }
  if (FX.user && FX.user.uid === u.uid) return;
  FX.user = u; FX.busy = true; render();
  try {
    const guest = S; // progress made before signing in
    STORE_UID = u.uid; loadState();
    const local = S, remote = await FX.impl.loadProgress(u.uid);
    let rs = null; if (remote && remote.json) { try { rs = mergeState(JSON.parse(remote.json)); } catch (e) { rs = null; } }
    if (rs && (!local.saved || rs.saved >= local.saved)) { S = rs; toast('Progress loaded from your account'); }
    else if (!rs && !local.saved && guest.saved && guest.xp > 0) { S = mergeState(guest); toast('Your guest progress was saved to your account'); }
    if (!S.prof.lang) S.prof.lang = guest.prof.lang || '';
    FX.profile = await FX.impl.getProfile(u.uid);
    if (FX.profile) {
      const p = FX.profile; Object.assign(S.prof, { name: p.username, lang: p.lang || S.prof.lang, color: p.color || S.prof.color, face: p.face || S.prof.face, glyph: p.glyph || S.prof.glyph, motto: p.motto != null ? p.motto : S.prof.motto, nameAt: p.usernameChangedAt || 0 });
    }
    FX.admin = !!(await FX.impl.isAdmin(u.uid).catch(() => false));
    flagOnce('signed');
    save(); applyPrefs(); fxPush(true); fxFriends(); fxContent();
    if (!FX.profile) ACT.nameOpen();
  } catch (e) { FX.err = 'Could not reach your account. Your progress is still saved on this device.'; }
  FX.busy = false; render();
}
const flagOnce = k => { if (!S.flags[k]) { S.flags[k] = 1; save(); checkAch(); } };

/* ---- saving progress to the account (debounced) ---- */
let syncT, lastPush = 0;
function syncDirty() { if (!FX.user || !FX.impl) return; clearTimeout(syncT); syncT = setTimeout(() => fxPush(), 4000); }
async function fxPush(now) {
  if (!FX.user || !FX.impl) return;
  try {
    const t = Date.now(); lastPush = t;
    await FX.impl.saveProgress(FX.user.uid, JSON.stringify(S), S.saved || t);
    if (FX.profile) await FX.impl.updateProfile(FX.user.uid, pubStats());
    FX.err = '';
  } catch (e) { FX.err = 'Sync paused: ' + (e && e.message ? e.message : 'offline'); }
}
function pubStats() {
  const li = levelInfo();
  return { xp: S.xp, level: li.l, streak: streak(), mastered: ALL.filter(i => lvl(i.id) === 3).length, lang: S.prof.lang || 'ja', color: S.prof.color, face: S.prof.face, glyph: S.prof.glyph, motto: S.prof.motto || '', lastActive: Date.now(), badges: Object.keys(S.ach).length };
}

/* ---- sign in / out ---- */
ACT.signIn = async () => {
  if (!FX.impl) { toast('Accounts are not set up on this copy of the site'); return; }
  try { await FX.impl.signIn(); } catch (e) { toast(e && e.code === 'auth/popup-closed-by-user' ? 'Sign-in cancelled' : 'Sign-in failed. Check the setup guide.'); }
};
ACT.signOut = async () => { try { await FX.impl.signOut(); } catch (e) {} toast('Signed out. You are back in guest mode.'); go('start'); };

/* ---- username: claim, change with a 14 day cooldown ---- */
const cooldownLeft = () => { const at = S.prof.nameAt || 0; return at ? Math.max(0, at + RENAME_DAYS * DAY - Date.now()) : 0; };
const fmtLeft = ms => { const d = Math.ceil(ms / DAY); return d <= 1 ? 'less than a day' : d + ' days'; };
function nameCheck(raw) {
  const n = String(raw || '').trim().toLowerCase();
  if (!NAME_RE.test(n)) return 'Use 3 to 16 letters, numbers or underscores.';
  return '';
}
const NM = { open: false, first: true, val: '', msg: '', busy: false };
ACT.nameOpen = () => { NM.open = true; NM.first = !FX.profile; NM.msg = ''; NM.val = NM.first ? nameSafe(FX.user && FX.user.name && FX.user.name.split(' ')[0]) : fxName(); renderNameDialog(); };
function renderNameDialog() {
  const left = NM.first ? 0 : cooldownLeft();
  openModal(`<button class="x ibtn" data-act="closeModal" aria-label="Close">×</button>
    <p class="eyebrow">${NM.first ? 'Welcome' : 'Change username'}</p><h2>${NM.first ? 'Choose your username' : 'Pick a new username'}</h2>
    <p class="muted">${NM.first ? 'Friends will find you by this name. You can change it later, but only once every ' + RENAME_DAYS + ' days.' : 'You can change your name once every ' + RENAME_DAYS + ' days.'}</p>
    ${left ? `<p class="fb bad">You changed your name recently. You can change it again in ${fmtLeft(left)}.</p>` :
    `<label class="vh" for="nmin">Username</label><input id="nmin" class="gin" maxlength="16" autocomplete="off" autocapitalize="none" spellcheck="false" value="${esc(NM.val)}" data-input="nm" placeholder="e.g. sakura_42">
    <p class="muted small">3 to 16 characters: a to z, 0 to 9 and _ . Names are not case sensitive.</p>
    <p class="fb ${NM.msg ? 'bad' : ''}" id="nmmsg">${esc(NM.msg)}</p>
    <div class="row"><button class="btn" data-act="nameSave" ${NM.busy ? 'disabled' : ''}>${NM.first ? 'Create profile' : 'Save name'}</button>${NM.first ? '<button class="btn ghost" data-act="signOut">Cancel</button>' : ''}</div>`}`, 'narrow');
  const i = $('#nmin'); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
}
ACT.nameSave = async () => {
  const el = $('#nmin'); if (!el || NM.busy) return;
  const raw = el.value.trim().toLowerCase(); NM.val = raw;
  const bad = nameCheck(raw); if (bad) { NM.msg = bad; renderNameDialog(); return; }
  if (!NM.first && raw === (FX.profile.usernameLower || FX.profile.username.toLowerCase())) { NM.msg = 'That is already your name.'; renderNameDialog(); return; }
  NM.busy = true; NM.msg = 'Checking…'; renderNameDialog();
  try {
    if (NM.first) {
      const data = Object.assign({ username: raw, usernameLower: raw, usernameChangedAt: 0 }, pubStats());
      await FX.impl.createProfile(FX.user.uid, data); FX.profile = Object.assign({}, data, { uid: FX.user.uid }); S.prof.name = raw; S.prof.nameAt = 0;
      toast('Welcome, ' + raw);
    } else {
      const at = await FX.impl.rename(FX.user.uid, FX.profile.usernameLower, raw);
      FX.profile.username = raw; FX.profile.usernameLower = raw; FX.profile.usernameChangedAt = at; S.prof.name = raw; S.prof.nameAt = at; flagOnce('renamed'); toast('Username changed');
    }
    NM.busy = false; NM.open = false; save(); closeModal(); fxPush(); render();
  } catch (e) {
    NM.busy = false; const m = e && e.message || '';
    NM.msg = m === 'taken' ? 'That name is taken. Try another.' : m === 'cooldown' ? 'You can only change your name every ' + RENAME_DAYS + ' days.' : m === 'invalid' ? 'That name is not allowed.' : 'Could not save the name right now. Try again.';
    renderNameDialog();
  }
};

/* ---- friends ---- */
async function fxFriends() {
  if (!FX.user || !FX.profile) return;
  try {
    const r = await FX.impl.requests(FX.user.uid), ids = new Set();
    r.incoming.concat(r.outgoing).forEach(x => { ids.add(x.from); ids.add(x.to); }); ids.delete(FX.user.uid);
    const profiles = ids.size ? await FX.impl.getProfiles(Array.from(ids)) : {};
    FX.friends = { incoming: r.incoming, outgoing: r.outgoing, profiles };
    if (friendList().length) flagOnce('friend');
  } catch (e) { FX.err = 'Could not load friends right now.'; }
  if (route() === 'profile') render();
}
const friendList = () => FX.friends.incoming.concat(FX.friends.outgoing).filter(r => r.status === 'accepted').map(r => ({ r, uid: r.from === FX.user.uid ? r.to : r.from }));
const pendingIn = () => FX.friends.incoming.filter(r => r.status === 'pending');
const pendingOut = () => FX.friends.outgoing.filter(r => r.status === 'pending');
const FR = { q: '', res: null, msg: '' };
ACT.frSearch = async () => {
  const el = $('#frq'); FR.q = el ? el.value.trim().toLowerCase().replace(/^@/, '') : '';
  if (FR.q.length < 2) { FR.msg = 'Type at least 2 letters.'; FR.res = null; render(); return; }
  FR.msg = 'Searching…'; render();
  try { FR.res = (await FX.impl.search(FR.q)).filter(p => p.uid !== FX.user.uid); FR.msg = FR.res.length ? '' : 'No one with that name yet.'; } catch (e) { FR.msg = 'Search is not available right now.'; }
  render();
};
ACT.frAdd = async el => {
  const to = el.dataset.id;
  try { await FX.impl.sendRequest(FX.user.uid, to); toast('Friend request sent'); FR.res = null; await fxFriends(); } catch (e) { toast('Could not send the request'); }
  render();
};
ACT.frAccept = async el => { try { await FX.impl.acceptRequest(el.dataset.id); await fxFriends(); flagOnce('friend'); toast('Friend added'); } catch (e) { toast('Could not accept that request'); } render(); };
ACT.frRemove = async el => { try { await FX.impl.removeRequest(el.dataset.id); await fxFriends(); } catch (e) { toast('Could not remove that'); } render(); };

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

/* ============ PROFILE: avatar, header pill, tabs ============ */
let avSeq = 0;
function avatar(p, px) {
  p = p || {}; const c = 'var(' + (p.color || '--c-hira') + ')', id = 'av' + (++avSeq);
  const inner = p.face === 'glyph'
    ? `<text x="100" y="131" text-anchor="middle" font-family="var(--glyph)" font-size="98" font-weight="600" fill="var(--ink)">${esc(p.glyph || '日')}</text>`
    : `<clipPath id="${id}"><circle cx="100" cy="100" r="86"/></clipPath><g clip-path="url(#${id})"><g transform="translate(100 108) scale(.8) translate(-100 -100)">${pandaHeadInner()}</g></g>`;
  return `<svg class="av" viewBox="0 0 200 200" width="${px || 40}" height="${px || 40}" role="img" aria-label="Avatar"><circle cx="100" cy="100" r="92" fill="var(--card)" stroke="${c}" stroke-width="14"/>${inner}</svg>`;
}

function refreshChips() {
  const el = $('#chips'); if (!el) return;
  const li = levelInfo(), d = today(), name = fxName() || 'Guest', pc = Math.min(100, d.xp / S.set.goal * 100);
  el.innerHTML = `<a class="pill" href="#profile" aria-label="Open your profile">${avatar(S.prof, 38)}<span class="pbody"><span class="pname"><b>${esc(name)}</b>${S.prof.lang ? flagSvg(S.prof.lang, 18) : ''}</span>
    <span class="pstats"><span><b>${streak()}</b> day streak</span><span>Lv <b>${li.l}</b></span><span><b>${d.xp}</b>/${S.set.goal} XP</span></span></span><span class="pbar" aria-hidden="true"><i style="width:${pc.toFixed(0)}%"></i></span></a>`;
}

const PTABS = [['overview', 'Overview'], ['badges', 'Badges'], ['friends', 'Friends'], ['settings', 'Settings']];
const isAdminUi = () => FX.admin || !fxOn();   // with no backend the admin tools edit this browser only
function viewProfile() {
  const tabs = PTABS.concat(isAdminUi() ? [['admin', 'Admin']] : []);
  if (!tabs.some(t => t[0] === UI.ptab)) UI.ptab = 'overview';
  const body = { overview: pOverview, badges: pBadges, friends: pFriends, settings: pSettings, admin: () => viewAdmin() }[UI.ptab]();
  return `<section class="page"><header class="ph"><p class="eyebrow">自分 · Profile</p>${identity()}</header>
    <div class="tabs" role="tablist">${tabs.map(t => `<button class="tab${UI.ptab === t[0] ? ' on' : ''}" role="tab" aria-selected="${UI.ptab === t[0]}" data-act="ui" data-k="ptab" data-v="${t[0]}">${t[1]}${t[0] === 'friends' && pendingIn().length ? ' <span class="dotn">' + pendingIn().length + '</span>' : ''}</button>`).join('')}</div>
    ${body}</section>`;
}
function identity() {
  const li = levelInfo(), name = fxName() || 'Guest', L = LANG_BY[S.prof.lang] || null, earned = ACH.filter(a => S.ach[a.id]).length;
  return `<div class="card ident">${avatar(S.prof, 84)}<div class="idm"><h1>${esc(name)} ${S.prof.lang ? flagSvg(S.prof.lang, 28) : ''}</h1>
    <p class="muted">${L ? 'Learning ' + esc(L.name) : 'No language chosen yet'}${S.prof.motto ? ' · “' + esc(S.prof.motto) + '”' : ''}</p>
    <div class="pstat"><span><b>Lv ${li.l}</b></span><span><b>${streak()}</b> day streak</span><span><b>${S.xp}</b> XP</span><span><b>${earned}</b> of ${ACH.length} badges</span></div>
    <div class="prog thin"><i style="width:${(li.p * 100).toFixed(0)}%"></i></div><p class="muted small">${S.xp - li.lo} / ${li.hi - li.lo} XP to level ${li.l + 1}</p></div>
    ${FX.user ? '' : `<div class="idg"><p class="muted small">Guest mode. Progress is saved in this browser only.</p><button class="btn ghost sm" data-act="goStart">Sign in to save it</button></div>`}</div>`;
}
ACT.goStart = () => go('start');

function pOverview() {
  const tot = S.tot, acc = pct(tot.ok, tot.all), mastered = ALL.filter(i => lvl(i.id) === 3).length, learning = ALL.filter(i => lvl(i.id) === 1 || lvl(i.id) === 2).length;
  const cells = []; for (let i = 27; i >= 0; i--) { const x = new Date(); x.setDate(x.getDate() - i); const r = S.days[dayKey(x)], xp = r ? r.xp : 0; cells.push([x, xp, xp === 0 ? 0 : xp < S.set.goal * 0.5 ? 1 : xp < S.set.goal ? 2 : 3]); }
  const lv = (items, n) => items.filter(i => i.jlpt === n), done = it => it.filter(i => lvl(i.id) >= 1).length;
  const row = (label, items, color) => `<div class="dexrow static" style="--c:var(${color})"><span class="dn"><i class="dotc"></i>${label}</span><div class="seg" style="--c:var(${color})">${[3, 2, 1].map(l => `<i class="s${l}" style="width:${pct(items.filter(i => lvl(i.id) === l).length, items.length)}%"></i>`).join('')}</div><span class="dc"><b>${done(items)}</b>/${items.length}</span></div>`;
  return `<div class="stat4"><div class="card sc"><b>${tot.all}</b><span>Answers given</span></div><div class="card sc"><b>${acc}%</b><span>Answers right</span></div><div class="card sc"><b>${S.games}</b><span>Games played</span></div><div class="card sc"><b>${Object.keys(S.lessons).length}</b><span>Lessons done</span></div></div>
    <div class="cols2"><div class="card"><h2>Collection</h2><p class="muted">${mastered} mastered, ${learning} in progress, ${ALL.length - mastered - learning} not started.</p>
      <div class="dexrows">${DECK_ORDER.map(k => { const s = deckStat(k); return `<div class="dexrow static" style="--c:var(${DECKS[k].color})"><span class="dn"><i class="dotc"></i>${DECKS[k].label}</span>${segBar(k)}<span class="dc"><b>${s[3]}</b>/${DECKS[k].items.length}</span></div>`; }).join('')}</div></div>
      <div class="card"><h2>JLPT progress</h2><p class="muted">Items started, by level.</p><div class="dexrows">
        ${row('Kanji N5', lv(KANJI, 'n5'), '--c-kanji')}${row('Kanji N4', lv(KANJI, 'n4'), '--c-kanji')}${row('Words N5', lv(VOCAB, 'n5'), '--c-vocab')}${row('Words N4', lv(VOCAB, 'n4'), '--c-vocab')}</div>
        <p class="muted small">${LESSONS.filter(l => l.lv === 'n4' && S.lessons[l.id]).length} of ${LESSONS.filter(l => l.lv === 'n4').length} N4 grammar lessons done.</p></div></div>
    <div class="cols2"><div class="card"><h2>Last 28 days</h2><div class="heat">${cells.map(c => `<i class="a${c[2]}" title="${c[0].toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}: ${c[1]} XP"></i>`).join('')}</div>
      <p class="muted small">Darker squares mean more XP. The darkest means you hit your goal.</p></div>
      <div class="card"><h2>Best game scores</h2><ul class="plain scores">${GAMES.map(x => `<li><span>${x[1]}</span><b>${S.best[x[0]] || 0}</b></li>`).join('')}</ul></div></div>`;
}

function pBadges() {
  const earned = ACH.filter(a => S.ach[a.id]).length;
  return `<div class="card"><h2>Badges <span class="muted small">${earned} of ${ACH.length}</span></h2><div class="badges2">${ACH.map(a => {
    const t = S.ach[a.id];
    return `<div class="badge2${t ? ' on' : ''}">${badgeSvg(a, 64)}<b>${esc(a.name)}</b><span>${esc(a.desc)}</span><small>${t ? 'Earned ' + new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Locked'}</small></div>`;
  }).join('')}</div></div>`;
}

function friendCard(p, extra) {
  const L = LANG_BY[p.lang];
  return `<div class="fcard">${avatar(p, 46)}<div class="fm"><b>${esc(p.username)}</b> ${p.lang ? flagSvg(p.lang, 18) : ''}<br><span class="muted small">${p.motto ? '“' + esc(p.motto) + '”' : (L ? 'Learning ' + esc(L.name) : '')}</span>
    <div class="pstat sm"><span>Lv <b>${p.level || 1}</b></span><span><b>${p.streak || 0}</b> day streak</span><span><b>${p.xp || 0}</b> XP</span><span><b>${p.mastered || 0}</b> mastered</span></div></div><div class="fx">${extra || ''}</div></div>`;
}
function pFriends() {
  if (!fxOn()) return `<div class="card"><h2>Friends</h2><p class="muted">Friends need an account. This copy of the site does not have accounts switched on yet. The setup guide explains how to switch them on.</p></div>`;
  if (!FX.user) return `<div class="card"><h2>Friends</h2><p class="muted">Sign in to add friends, see their streaks and levels, and let them see yours. Your progress stays private; friends only see your public stats.</p><button class="btn" data-act="goStart">Go to sign in</button></div>`;
  if (!FX.profile) return `<div class="card"><h2>Friends</h2><p class="muted">Choose a username first so friends can find you.</p><button class="btn" data-act="nameOpen">Choose username</button></div>`;
  const fl = friendList(), P = FX.friends.profiles, pin = pendingIn(), pout = pendingOut();
  return `<div class="card"><h2>Add a friend</h2><div class="row"><label class="vh" for="frq">Search by username</label><input id="frq" class="gin" style="flex:1;min-width:160px" placeholder="Search by username" value="${esc(FR.q)}" autocomplete="off" autocapitalize="none" data-enter="frSearch"><button class="btn" data-act="frSearch">Search</button></div>
      ${FR.msg ? `<p class="muted small">${esc(FR.msg)}</p>` : ''}
      ${FR.res ? `<div class="flist">${FR.res.map(p => { const known = fl.some(f => f.uid === p.uid) || pout.some(r => r.to === p.uid) || pin.some(r => r.from === p.uid);
        return friendCard(p, known ? '<span class="muted small">Already connected</span>' : `<button class="btn sm" data-act="frAdd" data-id="${esc(p.uid)}">Add friend</button>`); }).join('')}</div>` : ''}
      <p class="muted small">Your own name: <b>${esc(fxName())}</b>. Friends can find you by it.</p></div>
    ${pin.length ? `<div class="card"><h2>Requests <span class="dotn">${pin.length}</span></h2><div class="flist">${pin.map(r => P[r.from] ? friendCard(P[r.from], `<button class="btn sm" data-act="frAccept" data-id="${esc(r.id)}">Accept</button><button class="btn ghost sm" data-act="frRemove" data-id="${esc(r.id)}">Decline</button>`) : '').join('')}</div></div>` : ''}
    <div class="card"><h2>Friends <span class="muted small">${fl.length}</span> <button class="link small" data-act="frRefresh">Refresh</button></h2>
      ${fl.length ? `<div class="flist">${fl.map(f => P[f.uid] ? friendCard(P[f.uid], `<button class="btn ghost sm" data-act="frRemove" data-id="${esc(f.r.id)}">Remove</button>`) : '').join('')}</div>` : '<p class="muted">No friends yet. Search for a username above to send your first request.</p>'}
      ${pout.length ? `<hr><p class="lab">Waiting for an answer</p><div class="flist">${pout.map(r => P[r.to] ? friendCard(P[r.to], `<button class="btn ghost sm" data-act="frRemove" data-id="${esc(r.id)}">Cancel</button>`) : '').join('')}</div>` : ''}</div>`;
}
ACT.frRefresh = async () => { await fxFriends(); render(); };

const COLORS = [['--c-hira', 'Orange line'], ['--c-kata', 'Blue line'], ['--c-kanji', 'Purple line'], ['--c-vocab', 'Green line'], ['--c-phrase', 'Red line']];
const GLYPHS = ['日', '桜', '富', '猫', '龍', '星', '侍', '走', '海', '夢'];
function pSettings() {
  const set = S.set, left = cooldownLeft();
  return `<div class="card"><h2>Your profile</h2>
      <p class="lab">Username</p><div class="row"><b>${esc(fxName() || 'Guest')}</b>${FX.user ? `<button class="btn ghost sm" data-act="nameOpen">${FX.profile ? 'Change' : 'Choose'}</button><span class="muted small">${FX.profile ? (left ? 'Next change possible in ' + fmtLeft(left) : 'You can change it now. After that, wait ' + RENAME_DAYS + ' days.') : ''}</span>` : '<span class="muted small">Sign in to choose a username.</span>'}</div>
      <p class="lab">Line colour</p><div class="chips">${COLORS.map(c => `<button class="chip${S.prof.color === c[0] ? ' on' : ''}" data-act="setProf" data-k="color" data-v="${c[0]}" aria-pressed="${S.prof.color === c[0]}"><i class="dotc" style="--c:var(${c[0]})"></i>${c[1]}</button>`).join('')}</div>
      <p class="lab">Picture</p><div class="chips">${[['panda', 'Red panda'], ['glyph', 'A kanji']].map(c => `<button class="chip${S.prof.face === c[0] ? ' on' : ''}" data-act="setProf" data-k="face" data-v="${c[0]}" aria-pressed="${S.prof.face === c[0]}">${c[1]}</button>`).join('')}</div>
      ${S.prof.face === 'glyph' ? `<div class="chips">${GLYPHS.map(g => `<button class="chip glyph${S.prof.glyph === g ? ' on' : ''}" data-act="setProf" data-k="glyph" data-v="${g}" aria-pressed="${S.prof.glyph === g}">${g}</button>`).join('')}</div>` : ''}
      <p class="lab">Motto <span class="muted small">up to 40 characters</span></p><div class="row"><label class="vh" for="motto">Motto</label><input id="motto" class="gin" style="flex:1;min-width:160px" maxlength="40" placeholder="One kanji a day" value="${esc(S.prof.motto || '')}" data-enter="saveMotto"><button class="btn ghost sm" data-act="saveMotto">Save</button></div>
      <p class="lab">Language you are learning</p><div class="chips">${LANGS.filter(l => l.status !== 'later').map(l => `<button class="chip${S.prof.lang === l.id ? ' on' : ''}" data-act="setProf" data-k="lang" data-v="${l.id}" aria-pressed="${S.prof.lang === l.id}">${flagSvg(l.id, 20)} ${l.name}</button>`).join('')}</div>
      <div class="preview"><span class="muted small">How others see you</span><div class="fcardmini">${avatar(S.prof, 40)}<b>${esc(fxName() || 'Guest')}</b>${S.prof.lang ? flagSvg(S.prof.lang, 20) : ''}</div></div></div>

    <div class="card"><h2>Study settings</h2>
      <p class="lab">Daily goal</p><div class="chips">${[20, 30, 50, 100].map(v => `<button class="chip${set.goal === v ? ' on' : ''}" data-act="setPref" data-k="goal" data-v="${v}" aria-pressed="${set.goal === v}">${v} XP</button>`).join('')}</div>
      <p class="lab">Character style</p><div class="chips">${[['klee', 'Textbook'], ['gothic', 'Gothic'], ['mincho', 'Mincho']].map(f => `<button class="chip${set.font === f[0] ? ' on' : ''}" data-act="setPref" data-k="font" data-v="${f[0]}" aria-pressed="${set.font === f[0]}">${f[1]} <span class="glyph">あ漢</span></button>`).join('')}</div>
      <p class="lab">Theme</p><div class="chips">${[['system', 'Match device'], ['light', 'Light'], ['dark', 'Dark']].map(f => `<button class="chip${set.theme === f[0] ? ' on' : ''}" data-act="setPref" data-k="theme" data-v="${f[0]}" aria-pressed="${set.theme === f[0]}">${f[1]}</button>`).join('')}</div>
      <p class="lab">Options</p><div class="chips">
        ${[['romaji', 'Show romaji in tables'], ['sound', 'Sound effects'], ['speak', 'Spoken Japanese']].map(f => `<button class="chip${set[f[0]] ? ' on' : ''}" data-act="togglePref" data-k="${f[0]}" aria-pressed="${set[f[0]]}">${f[1]}</button>`).join('')}</div>
      <p class="muted small">Spoken Japanese uses your browser’s voices. If you hear nothing, install a Japanese voice in your device settings.</p></div>

    <div class="card"><h2>Account</h2>${FX.user ? `<p class="muted">Signed in${FX.user.email ? ' as <b>' + esc(FX.user.email) + '</b>' : ''}. ${FX.err ? '<span class="fb bad">' + esc(FX.err) + '</span>' : 'Your progress is saved to your account automatically.'}</p>
        <div class="row"><button class="btn ghost" data-act="signOut">Sign out</button></div>
        <p class="lab">Account ID</p><div class="row"><code class="uid">${esc(FX.user.uid)}</code><button class="btn ghost sm" data-act="copyText" data-t="${esc(FX.user.uid)}">Copy</button></div>
        <p class="muted small">You only need this ID once, to make yourself the site admin (see the setup guide). It is not secret, but it is not useful to anyone else either.</p>`
      : `<p class="muted">You are in guest mode. Your progress is saved on this device only.</p>${fxOn() ? '<button class="btn" data-act="goStart">Sign in</button>' : ''}`}</div>

    <div class="card"><h2>Backup and restore</h2><p class="muted">You can also move progress by hand: create a backup code, copy it, and paste it into the same page on another device.</p>
      <div class="row"><button class="btn" data-act="mkBackup">Create backup code</button>${PR.code ? '<button class="btn ghost" data-act="cpBackup">Copy code</button>' : ''}</div>
      ${PR.code ? `<label class="vh" for="bkout">Backup code</label><textarea id="bkout" class="anout" readonly rows="3">${esc(PR.code)}</textarea>` : ''}
      <label class="lab" for="bkin">Restore from a code</label><textarea id="bkin" class="anout" rows="3" placeholder="Paste a backup code here"></textarea>
      <div class="row"><button class="btn ghost" data-act="rsBackup">Restore</button><span class="muted small" id="rsmsg">${esc(PR.restoreMsg)}</span></div>
      <hr><h3>Start over</h3>${PR.confirm ? `<p class="fb bad">This erases all progress and badges in ${FX.user ? 'this account' : 'this browser'}.</p><div class="row"><button class="btn danger" data-act="resetDo">Erase everything</button><button class="btn ghost" data-act="resetNo">Keep my progress</button></div>`
        : '<button class="btn ghost" data-act="resetAsk">Reset all progress</button>'}</div>`;
}
ACT.setProf = el => { S.prof[el.dataset.k] = el.dataset.v; save(); if (FX.profile) fxPush(); render(); };
ACT.saveMotto = () => { const v = ($('#motto') || {}).value || ''; S.prof.motto = v.trim().slice(0, 40); save(); if (FX.profile) fxPush(); toast('Motto saved'); render(); };

/* ============ GAMES ============ */
UI.game.mdeck = 'hira';
let GAME = null;
const G = {};
function stopGame() { if (GAME && GAME.stop) GAME.stop(); GAME = null; }
const GAMES = [
  ['rush', 'Kana Rush', 'Type the reading of each kana as fast as you can. You have 60 seconds and combos raise your score.', 'Typing', '--c-hira'],
  ['drop', 'Kana Drop', 'Kana fall from the top. Type each reading before it lands. Three misses and it is over.', 'Typing', '--c-kata'],
  ['match', 'Memory Match', 'Flip cards and pair every character with its reading or meaning. Fewer moves score more.', 'Memory', '--c-kanji'],
  ['build', 'Sentence Builder', 'Put Japanese words in the right order to say the English sentence. Eight rounds.', 'Grammar', '--c-vocab'],
  ['bolt', 'Lightning Round', 'True or false against the clock. Kana, kanji and words are mixed. 30 seconds.', 'Speed', '--c-phrase'],
  ['dojo', 'Stroke Dojo', 'Draw each stroke in the right order and direction. The dojo checks every stroke you make.', 'Writing', '--c-hira'],
  ['particle', 'Particle Pop', 'Pick the right particle (は, を, に, で…) to complete the sentence.', 'Grammar', '--c-vocab'],
  ['sound', 'Sound Match', 'Listen to a kana read aloud and pick the one you heard.', 'Listening', '--c-kata'],
  ['number', 'Number Dash', 'Read numbers written in kanji, or listen and pick the number you heard.', 'Numbers', '--c-kanji'],
  ['shiritori', 'Shiritori', 'Word chain against the panda. Each word must start with the last kana of the one before.', 'Vocabulary', '--c-phrase'],
  ['quote', 'Anime Quotes', 'Read a famous line and guess the anime (easy) or the anime and the character (hard).', 'Anime', '--c-phrase'],
  ['song', 'Guess the Song', 'Listen to a short clip and guess the artist (easy) or the artist and the title (hard).', 'Music', '--c-kanji'],
  ['mock', 'JLPT Mock Test', 'Twenty mixed questions at N5 or N4 level, scored like a mini exam.', 'Exam', '--c-hira']
];
const GAME_GROUPS = [['Core practice', ['rush', 'drop', 'match', 'build', 'bolt']], ['Writing and listening', ['dojo', 'sound', 'number']], ['Grammar and vocabulary', ['particle', 'shiritori']], ['Anime and music', ['quote', 'song']], ['Exam', ['mock']]];
function viewGames() {
  const g = UI.game;
  return `<section class="page"><header class="ph"><p class="eyebrow">遊び · Games</p><h1>Minigames</h1>
    <p class="sub">Short rounds that train recall and speed. Every game updates your progress and earns XP.</p></header>
    <div class="card setup"><p class="lab">Kana for the typing games</p>
      ${chipRow([['h', 'Hiragana'], ['k', 'Katakana'], ['hk', 'Both']], g.deck, 'game.deck')}
      ${chipRow([['basic', 'Basic sounds'], ['all', 'Every kana']], g.scope, 'game.scope')}
      <p class="lab">Memory Match</p>
      ${chipRow([['hira', 'Hiragana'], ['kata', 'Katakana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary']], g.mdeck, 'game.mdeck')}
      ${chipRow([[6, '6 pairs'], [8, '8 pairs'], [10, '10 pairs']], g.pairs, 'game.pairs')}</div>
    ${GAME_GROUPS.map(gr => { const L = gr[1].map(k => GAMES.find(x => x[0] === k)).filter(x => x && !gameOff(x[0])); return L.length ? `<h2 class="gh">${gr[0]}</h2><div class="gcards">${L.map(x => `<article class="gcard" style="--c:var(${x[4]})"><p class="eyebrow"><span class="dotc"></span>${x[3]}</p><h3>${x[1]}</h3><p class="muted">${x[2]}</p>
      <div class="gfoot"><span class="muted small">Best <b>${S.best[x[0]] || 0}</b></span><button class="btn" data-act="play" data-v="${x[0]}">Play</button></div></article>`).join('')}</div>` : ''; }).join('')}</section>`;
}
ACT.play = el => startGame(el.dataset.v);
ACT.gexit = () => { stopGame(); render(); };
function startGame(key) {
  stopGame();
  const meta = GAMES.find(x => x[0] === key);
  $('#view').innerHTML = `<section class="page"><div class="gbar"><button class="link" data-act="gexit">‹ Games</button><span class="eyebrow">${meta[1]}</span></div><div id="gstage" class="gstage"></div></section>`;
  window.scrollTo(0, 0);
  G[key]($('#gstage'));
}
const kanaPool = () => { const g = UI.game; return KANA.filter(i => (g.deck === 'hk' || i.type === g.deck) && (g.scope === 'all' || i.group === 'basic')); };
function finishGame(key, score, stats, missed, xp) {
  const meta = GAMES.find(x => x[0] === key), st = $('#gstage'); if (!st) return;
  const nb = score > (S.best[key] || 0); if (nb) S.best[key] = score;
  S.games++; today().games++; addXP(xp); sfx.win(); checkAch(); save();
  st.innerHTML = `<div class="card done"><p class="eyebrow">${nb ? 'New best score' : 'Round over'}</p><h2>${score} points</h2>
    <div class="stats3">${stats.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>
    <p class="muted">Best ${S.best[key]} · +${xp} XP</p>
    ${missed.length ? `<h4>Practise these</h4><div class="chips">${missed.slice(0, 12).map(id => { const it = ITEMS[id]; return `<button class="chip" data-act="detail" data-id="${esc(id)}"><span class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</span> ${esc(answerOf(it))}</button>`; }).join('')}</div>` : ''}
    <div class="row mt"><button class="btn" data-act="play" data-v="${key}">Play again</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
}
const shakeEl = el => { if (!el) return; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 320); };
const INPUT_ATTR = 'type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"';

/* ---- Kana Rush ---- */
G.rush = function (st) {
  const pool = kanaPool(); let cur = null, last = null, score = 0, combo = 0, bestCombo = 0, ok = 0, miss = 0, left = 60; const missed = new Set();
  st.innerHTML = `<div class="ghud"><span>Time <b id="gt">60</b></span><span>Score <b id="gs">0</b></span><span>Combo <b id="gc">0</b></span></div>
    <div class="gbig glyph" id="gg" aria-live="polite"></div><p class="hint" id="gh">Type the reading, for example <i>ka</i></p>
    <input id="gin" class="gin" ${INPUT_ATTR} aria-label="Type the reading">
    <div class="row ctr"><button class="btn ghost" id="gskip">Skip</button></div>`;
  const inp = $('#gin', st), gg = $('#gg', st), gh = $('#gh', st);
  const hud = () => { $('#gt', st).textContent = left; $('#gs', st).textContent = score; $('#gc', st).textContent = combo; };
  const next = () => { do { cur = pool[rnd(pool.length)]; } while (pool.length > 1 && cur === last); last = cur; gg.textContent = cur.ch; inp.value = ''; };
  const wrong = () => { miss++; combo = 0; missed.add(cur.id); touch(cur.id, false); sfx.no(); gh.textContent = 'It was ' + cur.ro; shakeEl(gg); next(); hud(); };
  inp.addEventListener('input', () => {
    const v = inp.value.trim().toLowerCase(); if (!v) return;
    const acc = accepted(cur);
    if (acc.indexOf(v) >= 0) { ok++; combo++; bestCombo = Math.max(bestCombo, combo); score += 10 + 2 * Math.min(combo, 10); touch(cur.id, true); sfx.tick(); gh.textContent = ''; next(); hud(); }
    else if (!acc.some(a => a.indexOf(v) === 0)) wrong();
  });
  $('#gskip', st).addEventListener('click', () => { wrong(); inp.focus(); });
  const tm = setInterval(() => { left--; hud(); if (left <= 0) { clearInterval(tm); GAME = null; finishGame('rush', score, [[ok, 'correct'], [pct(ok, ok + miss) + '%', 'accuracy'], [bestCombo, 'best combo']], Array.from(missed), Math.round(score / 15)); } }, 1000);
  GAME = { stop: () => clearInterval(tm) };
  next(); hud(); inp.focus();
};

/* ---- Kana Drop ---- */
G.drop = function (st) {
  const pool = kanaPool(), H = 380;
  st.innerHTML = `<div class="ghud"><span>Lives <b id="dl">3</b></span><span>Score <b id="ds">0</b></span><span>Level <b id="dv">1</b></span></div>
    <div class="dstage" id="dst" style="height:${H}px"></div>
    <input id="din" class="gin" ${INPUT_ATTR} aria-label="Type the reading of a falling kana"><p class="hint ctr">Type a reading to clear the lowest matching character.</p>`;
  const stage = $('#dst', st), inp = $('#din', st);
  let items = [], lives = 3, score = 0, cleared = 0, lv = 1, spawnT = 0.3, lastT = performance.now(), raf = 0, over = false; const missed = new Set();
  const hud = () => { $('#dl', st).textContent = lives; $('#ds', st).textContent = score; $('#dv', st).textContent = lv; };
  const spawn = () => {
    const it = pool[rnd(pool.length)], el = document.createElement('span'); el.className = 'fall glyph'; el.textContent = it.ch;
    el.style.left = (10 + rnd(Math.max(1, stage.clientWidth - 70))) + 'px'; stage.appendChild(el); items.push({ it, el, y: -50 });
  };
  const end = () => { over = true; cancelAnimationFrame(raf); GAME = null; finishGame('drop', score, [[cleared, 'cleared'], [lv, 'level reached'], [missed.size, 'missed']], Array.from(missed), Math.round(score / 12)); };
  const tick = now => {
    if (over) return;
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now; spawnT -= dt;
    if (spawnT <= 0) { spawn(); spawnT = Math.max(0.8, 2.3 - lv * 0.17); }
    const v = 45 + lv * 9;
    items.forEach(o => { o.y += v * dt; o.el.style.transform = 'translateY(' + o.y + 'px)'; });
    items.filter(o => o.y > H - 46).forEach(o => { o.el.remove(); items.splice(items.indexOf(o), 1); lives--; missed.add(o.it.id); touch(o.it.id, false); sfx.no(); });
    hud(); if (lives <= 0) { end(); return; }
    raf = requestAnimationFrame(tick);
  };
  inp.addEventListener('input', () => {
    const v = inp.value.trim().toLowerCase(); if (!v) return;
    const hit = items.filter(o => accepted(o.it).indexOf(v) >= 0).sort((a, b) => b.y - a.y)[0];
    if (hit) {
      hit.el.classList.add('pop'); const el = hit.el; setTimeout(() => el.remove(), 180); items.splice(items.indexOf(hit), 1);
      cleared++; lv = 1 + Math.floor(cleared / 8); score += 10 + lv * 2; touch(hit.it.id, true); sfx.tick(); inp.value = ''; hud();
    } else if (!items.some(o => accepted(o.it).some(a => a.indexOf(v) === 0))) inp.value = '';
  });
  GAME = { stop: () => { over = true; cancelAnimationFrame(raf); } };
  hud(); inp.focus(); raf = requestAnimationFrame(tick);
};

/* ---- Memory Match ---- */
G.match = function (st) {
  const deck = UI.game.mdeck, n = +UI.game.pairs, used = {}, picks = [];
  shuffle(DECKS[deck].items.filter(lvOk)).forEach(it => { const a = answerOf(it); if (picks.length < n && !used[a]) { used[a] = 1; picks.push(it); } });
  const cards = shuffle(picks.reduce((a, it) => a.concat([{ p: it.id, t: it.ch, g: isKana(it) || it.type === 'j' }, { p: it.id, t: answerOf(it), g: false }]), []));
  let open = [], moves = 0, found = 0, lock = false; const t0 = Date.now();
  st.innerHTML = `<div class="ghud"><span>Moves <b id="mm">0</b></span><span>Pairs <b id="mp">0/${n}</b></span><span>Time <b id="mt">0</b></span></div>
    <div class="mgrid" style="--cols:${n === 10 ? 5 : 4}">${cards.map((c, i) => `<button class="mc" data-i="${i}" data-p="${esc(c.p)}" aria-label="Card ${i + 1}"><span class="mf">${c.g ? '日' : '本'}</span><span class="mb ${c.g ? 'glyph' : ''}">${esc(c.t)}</span></button>`).join('')}</div>`;
  const tm = setInterval(() => { const t = $('#mt', st); if (t) t.textContent = Math.round((Date.now() - t0) / 1000); }, 500);
  GAME = { stop: () => clearInterval(tm) };
  const btn = i => $('.mc[data-i="' + i + '"]', st);
  st.onclick = e => {
    const b = e.target.closest('.mc'); if (!b || lock) return;
    const i = +b.dataset.i; if (open.indexOf(i) >= 0 || b.classList.contains('done')) return;
    b.classList.add('open'); open.push(i); sfx.tick();
    if (open.length < 2) return;
    moves++; $('#mm', st).textContent = moves;
    const [a, c] = open;
    if (cards[a].p === cards[c].p) {
      [a, c].forEach(k => { btn(k).classList.add('done'); }); touch(cards[a].p, true); found++; $('#mp', st).textContent = found + '/' + n; open = []; sfx.ok();
      if (found === n) {
        clearInterval(tm); GAME = null; const secs = Math.round((Date.now() - t0) / 1000);
        setTimeout(() => finishGame('match', Math.max(n * 10, n * 120 - moves * 15 - secs * 2), [[moves, 'moves'], [secs + 's', 'time'], [n, 'pairs']], [], n * 2 + (moves === n ? 5 : 0)), 500);
      }
    } else { lock = true; setTimeout(() => { [a, c].forEach(k => { const x = btn(k); if (x) x.classList.remove('open'); }); open = []; lock = false; }, 800); }
  };
};

/* ---- Sentence Builder ---- */
G.build = function (st) {
  const order = sample(SENTENCES, 8); let ri = 0, score = 0, first = 0;
  GAME = { stop: () => { st.onclick = null; } };
  function round() {
    const jp = order[ri][0], en = order[ri][1], toks = jp.split('|');
    let bank = shuffle(toks.map((t, i) => ({ t, i })));
    while (toks.length > 1 && bank.every((b, k) => b.i === k)) bank = shuffle(bank);
    let ans = [], tries = 0, hints = 0, busy = false;
    const draw = () => {
      $('#bans', st).innerHTML = ans.length ? ans.map((a, p) => `<button class="tok on" data-a="${p}">${esc(a.t)}</button>`).join('') : '<span class="muted">Tap the words below in order</span>';
      $('#bbank', st).innerHTML = bank.map(b => `<button class="tok" data-b="${b.i}">${esc(b.t)}</button>`).join('');
    };
    const msg = t => { $('#bmsg', st).textContent = t; };
    const advance = () => { ri++; if (ri >= order.length) { GAME = null; finishGame('build', score, [[first, 'first try'], [order.length, 'sentences'], [score, 'points']], [], Math.round(score / 35)); } else round(); };
    st.innerHTML = `<div class="ghud"><span>Round <b>${ri + 1}/${order.length}</b></span><span>Score <b>${score}</b></span></div>
      <div class="card"><p class="eyebrow">Say this in Japanese</p><p class="rom">${esc(en)}</p><div class="ans" id="bans"></div><div class="bank" id="bbank"></div>
      <div class="row"><button class="btn" data-g="chk">Check</button><button class="btn ghost" data-g="hint">Hint (−30)</button><button class="btn ghost" data-g="skip">Skip</button></div><p class="hint" id="bmsg" aria-live="polite"></p></div>`;
    draw();
    st.onclick = e => {
      if (busy) return;
      const t = e.target.closest('button'); if (!t) return;
      if (t.dataset.b != null) { const i = +t.dataset.b, k = bank.findIndex(b => b.i === i); if (k >= 0) { ans.push(bank.splice(k, 1)[0]); sfx.tick(); draw(); } }
      else if (t.dataset.a != null) { const p = +t.dataset.a; bank.push(ans.splice(p, 1)[0]); draw(); }
      else if (t.dataset.g === 'hint') {
        if (ans.some((a, p) => a.i !== p)) { bank = bank.concat(ans); ans = []; }
        const k = bank.findIndex(b => b.i === ans.length); if (k >= 0) { ans.push(bank.splice(k, 1)[0]); hints++; draw(); }
      } else if (t.dataset.g === 'skip') { busy = true; msg('Answer: ' + jp.replace(/\|/g, ' ')); fails_(); setTimeout(advance, 1600); }
      else if (t.dataset.g === 'chk') {
        if (ans.map(a => a.t).join('|') === jp) {
          busy = true; const pts = Math.max(30, 100 - 30 * hints - 25 * tries); score += pts; if (!tries && !hints) first++;
          sfx.ok(); msg('Correct, +' + pts); speak(jp.replace(/\|/g, '')); setTimeout(advance, 1100);
        } else {
          tries++; sfx.no(); shakeEl($('#bans', st));
          if (tries >= 3) { busy = true; msg('Answer: ' + jp.replace(/\|/g, ' ')); setTimeout(advance, 1800); } else msg('Not quite. Try another order.');
        }
      }
    };
    function fails_() { /* skipped rounds score nothing */ }
  }
  round();
};

/* ---- Lightning Round ---- */
G.bolt = function (st) {
  const pool = KANA.filter(i => i.group === 'basic').concat(KANJI, VOCAB);
  let left = 30, score = 0, ok = 0, miss = 0, combo = 0, bestCombo = 0, cur = null, truth = true; const missed = new Set();
  st.innerHTML = `<div class="ghud"><span>Time <b id="bt">30</b></span><span>Score <b id="bs">0</b></span><span>Streak <b id="bc">0</b></span></div>
    <div class="card bolt"><div id="bq"></div></div>
    <div class="row ctr"><button class="btn bad-b" data-v="0">False <kbd>←</kbd></button><button class="btn ok-b" data-v="1">True <kbd>→</kbd></button></div>
    <p class="hint ctr" id="bh">Does the answer match the character?</p>`;
  const hud = () => { $('#bt', st).textContent = left; $('#bs', st).textContent = score; $('#bc', st).textContent = combo; };
  const ask = () => {
    const it = pool[rnd(pool.length)]; cur = it; truth = Math.random() < 0.5;
    let shown = answerOf(it);
    if (!truth) { const alt = pool.filter(o => o.type === it.type && o.id !== it.id && answerOf(o) !== shown && (!it.cat || o.cat === it.cat)); const o2 = alt.length ? alt[rnd(alt.length)] : pool.find(o => o.type === it.type && answerOf(o) !== shown); shown = answerOf(o2); }
    const g = isKana(it) || it.type === 'j';
    $('#bq', st).innerHTML = `<div class="big ${g ? 'glyph' : 'txt'}">${esc(it.ch)}</div><p class="rom">${esc(shown)}</p>`;
  };
  const answer = v => {
    if (left <= 0) return;
    const right = (v === truth);
    touch(cur.id, right);
    if (right) { ok++; combo++; bestCombo = Math.max(bestCombo, combo); score += 10 + Math.min(combo, 10); sfx.tick(); $('#bh', st).textContent = ''; }
    else { miss++; combo = 0; score = Math.max(0, score - 5); missed.add(cur.id); sfx.no(); $('#bh', st).textContent = truth ? 'That was correct: ' + answerOf(cur) : 'That was wrong. It is ' + answerOf(cur); }
    hud(); ask();
  };
  st.onclick = e => { const b = e.target.closest('[data-v]'); if (b) answer(b.dataset.v === '1'); };
  const key = e => { if (e.key === 'ArrowRight' || e.key === 't' || e.key === 'T') { e.preventDefault(); answer(true); } else if (e.key === 'ArrowLeft' || e.key === 'f' || e.key === 'F') { e.preventDefault(); answer(false); } };
  document.addEventListener('keydown', key);
  const tm = setInterval(() => { left--; hud(); if (left <= 0) { clearInterval(tm); document.removeEventListener('keydown', key); GAME = null; finishGame('bolt', score, [[ok, 'correct'], [pct(ok, ok + miss) + '%', 'accuracy'], [bestCombo, 'best streak']], Array.from(missed), Math.round(score / 12)); } }, 1000);
  GAME = { stop: () => { clearInterval(tm); document.removeEventListener('keydown', key); } };
  ask(); hud();
};

/* ============ ANIME QUOTES + GUESS THE SONG ============
   Built-in items are short, famous catchphrases and plain song facts (artist, title).
   Admins can add more from the site (Profile > Admin). No lyrics and no audio are stored here;
   songs play from a YouTube link that an admin adds.                                         */
const QUOTES_BUILTIN = [
  ['お前はもう死んでいる', 'Omae wa mō shindeiru', 'You are already dead', 'Fist of the North Star', 'Kenshiro'],
  ['俺は海賊王になる！', 'Ore wa kaizoku-ō ni naru!', 'I am going to become the Pirate King!', 'One Piece', 'Monkey D. Luffy'],
  ['だってばよ', 'Datte bayo', 'You know? (his verbal tic)', 'Naruto', 'Naruto Uzumaki'],
  ['俺は火影になる！', 'Ore wa Hokage ni naru!', 'I am going to become Hokage!', 'Naruto', 'Naruto Uzumaki'],
  ['真実はいつもひとつ！', 'Shinjitsu wa itsumo hitotsu!', 'There is always only one truth!', 'Detective Conan', 'Conan Edogawa'],
  ['月に代わっておしおきよ！', 'Tsuki ni kawatte oshioki yo!', 'On behalf of the Moon, I will punish you!', 'Sailor Moon', 'Sailor Moon'],
  ['駆逐してやる！', 'Kuchiku shite yaru!', 'I will wipe them out!', 'Attack on Titan', 'Eren Yeager'],
  ['心臓を捧げよ！', 'Shinzō o sasageyo!', 'Dedicate your hearts!', 'Attack on Titan', 'Erwin Smith'],
  ['逃げちゃダメだ', 'Nigecha dame da', 'I mustn’t run away', 'Neon Genesis Evangelion', 'Shinji Ikari'],
  ['あんたバカぁ？', 'Anta baka ā?', 'Are you stupid?', 'Neon Genesis Evangelion', 'Asuka Langley Soryu'],
  ['僕と契約して、魔法少女になってよ！', 'Boku to keiyaku shite, mahō shōjo ni natte yo!', 'Make a contract with me and become a magical girl!', 'Puella Magi Madoka Magica', 'Kyubey'],
  ['じっちゃんの名にかけて！', 'Jicchan no na ni kakete!', 'On my grandfather’s name!', 'The Kindaichi Case Files', 'Hajime Kindaichi'],
  ['我が名はめぐみん！', 'Waga na wa Megumin!', 'My name is Megumin!', 'KonoSuba', 'Megumin'],
  ['エル・プサイ・コングルゥ', 'Eru Pusai Kongurū', 'El Psy Kongroo', 'Steins;Gate', 'Rintarō Okabe'],
  ['これがシュタインズ・ゲートの選択だ！', 'Kore ga Shutainzu Gēto no sentaku da!', 'This is the choice of Steins Gate!', 'Steins;Gate', 'Rintarō Okabe'],
  ['だが断る！', 'Daga kotowaru!', 'But I refuse!', 'JoJo’s Bizarre Adventure', 'Rohan Kishibe'],
  ['やれやれだぜ', 'Yare yare daze', 'Good grief', 'JoJo’s Bizarre Adventure', 'Jotaro Kujo'],
  ['オラオラオラ！', 'Ora ora ora!', '(a barrage battle cry)', 'JoJo’s Bizarre Adventure', 'Jotaro Kujo'],
  ['無駄無駄無駄', 'Muda muda muda', 'Useless, useless, useless!', 'JoJo’s Bizarre Adventure', 'Dio Brando'],
  ['あきらめたらそこで試合終了ですよ', 'Akirametara soko de shiai shūryō desu yo', 'If you give up, the game is over right there', 'Slam Dunk', 'Mitsuyoshi Anzai'],
  ['坊やだからさ', 'Bōya dakara sa', 'Because he is a greenhorn', 'Mobile Suit Gundam', 'Char Aznable'],
  ['領域展開', 'Ryōiki tenkai', 'Domain Expansion', 'Jujutsu Kaisen', 'Satoru Gojo'],
  ['全集中の呼吸', 'Zenshūchū no kokyū', 'Total Concentration Breathing', 'Demon Slayer', 'Tanjiro Kamado'],
  ['わくわく', 'Waku waku', 'Excited! (heh)', 'Spy x Family', 'Anya Forger'],
  ['私、気になります！', 'Watashi, ki ni narimasu!', 'I am curious!', 'Hyouka', 'Eru Chitanda'],
  ['私が来た！', 'Watashi ga kita!', 'I am here!', 'My Hero Academia', 'All Might'],
  ['どこでもドア！', 'Doko demo doa!', 'Anywhere Door!', 'Doraemon', 'Doraemon'],
  ['絶対だいじょうぶだよ', 'Zettai daijōbu da yo', 'It will definitely be okay', 'Cardcaptor Sakura', 'Sakura Kinomoto'],
  ['卍解', 'Bankai', 'Bankai (final release)', 'Bleach', 'Ichigo Kurosaki'],
  ['ジャン・ケン・グー', 'Jan ken gū', 'Rock-paper-scissors: rock!', 'Hunter x Hunter', 'Gon Freecss'],
  ['等価交換の原則', 'Tōka kōkan no gensoku', 'The principle of equivalent exchange', 'Fullmetal Alchemist', 'Edward Elric'],
  ['計画通り', 'Keikaku dōri', 'Just as planned', 'Death Note', 'Light Yagami'],
  ['おろ？', 'Oro?', 'Oro? (bewildered)', 'Rurouni Kenshin', 'Kenshin Himura'],
  ['かめはめ波！', 'Kamehameha!', 'Kamehameha!', 'Dragon Ball', 'Son Goku'],
  ['私の戦闘力は53万です', 'Watashi no sentōryoku wa gojūsan-man desu', 'My power level is 530,000', 'Dragon Ball Z', 'Frieza'],
  ['ペガサス流星拳！', 'Pegasasu ryūseiken!', 'Pegasus Meteor Fist!', 'Saint Seiya', 'Pegasus Seiya'],
  ['立て、立つんだジョー！', 'Tate, tatsu n da Jō!', 'Stand up, Joe!', 'Ashita no Joe', 'Danpei Tange'],
  ['ポケモンゲットだぜ！', 'Pokemon getto da ze!', 'Gotta catch it! (I got it!)', 'Pokémon', 'Ash Ketchum (Satoshi)']
].map((q, i) => ({ id: 'q:' + i, kind: 'quote', jp: q[0], ro: q[1], en: q[2], anime: q[3], char: q[4], b: 1 }));

/* artist | title | reading | YouTube id (only ones checked against search results) | hint */
const SONGS_BUILTIN = [
  ['米津玄師', 'Lemon', '', 'SX_ViT4Ra7k', 'Theme of a 2018 forensic drama'],
  ['Official髭男dism', 'Pretender', '', 'TQ8WlA2GXbk', 'A 2019 hit with a very high chorus'],
  ['LiSA', '紅蓮華', 'Gurenge', 'x1FV6IrjZCY', 'Opening of a famous demon-hunting anime'],
  ['King Gnu', '白日', 'Hakujitsu', 'ony539T074w', 'A 2019 rock hit'],
  ['RADWIMPS', '前前前世', 'Zenzenzense', 'PDSkFeMVNFs', 'From a 2016 body-swap film'],
  ['Creepy Nuts', 'Bling-Bang-Bang-Born', '', '5NzfqW_Yt6Y', 'Opening of a magic-and-muscles anime'],
  ['YOASOBI', 'アイドル', 'Idol', 'ZRtdQ81jPUQ', 'Opening of an idol-themed anime (2023)'],
  ['Eve', '廻廻奇譚', 'Kaikai Kitan', '1tk1pqwrOys', 'Opening of a cursed-spirit anime'],
  ['YOASOBI', '夜に駆ける', 'Yoru ni Kakeru', ''], ['Ado', 'うっせぇわ', 'Usseewa', ''], ['Ado', '新時代', 'Shinjidai', ''], ['Aimer', '残響散歌', 'Zankyō Sanka', ''],
  ['Vaundy', '怪獣の花唄', 'Kaijū no Hanauta', ''], ['藤井風', '死ぬのがいいわ', 'Shinu no ga ii wa', ''], ['宇多田ヒカル', 'First Love', '', ''], ['スピッツ', 'チェリー', 'Cherry', ''],
  ['Mr.Children', 'Tomorrow never knows', '', ''], ['サザンオールスターズ', 'TSUNAMI', '', ''], ['SMAP', '世界に一つだけの花', 'Sekai ni hitotsu dake no hana', ''], ['坂本九', '上を向いて歩こう', 'Ue o muite arukō', ''],
  ['竹内まりや', 'Plastic Love', '', ''], ['山下達郎', 'Christmas Eve', '', ''], ['Perfume', 'ポリリズム', 'Polyrhythm', ''], ['きゃりーぱみゅぱみゅ', 'PONPONPON', '', ''],
  ['BABYMETAL', 'ギミチョコ!!', 'Gimme Chocolate!!', ''], ['椎名林檎', '丸ノ内サディスティック', 'Marunouchi Sadistic', ''], ['ONE OK ROCK', 'The Beginning', '', ''], ['X JAPAN', '紅', 'Kurenai', ''],
  ['いきものがかり', 'ありがとう', 'Arigatō', ''], ['星野源', '恋', 'Koi', ''], ['Yuuri', 'ドライフラワー', 'Dry Flower', ''], ['ヨルシカ', 'ただ君に晴れ', 'Tada kimi ni hare', '']
].map((s, i) => ({ id: 's:' + i, kind: 'song', artist: s[0], title: s[1], ro: s[2] || '', yt: s[3] || '', hint: s[4] || '', b: 1 }));
const BUILTIN = QUOTES_BUILTIN.concat(SONGS_BUILTIN);

/* ---- content store: built-in + (shared cloud items | this browser's own items) ---- */
const CT = { remote: [], remoteCfg: {} };
const CT_KEY = 'nihon-content.v1';
const ctLocal = () => { try { const o = JSON.parse(localStorage.getItem(CT_KEY) || 'null'); return o && typeof o === 'object' ? { items: o.items || [], config: o.config || {} } : { items: [], config: {} }; } catch (e) { return { items: [], config: {} }; } };
const ctSaveLocal = o => { try { localStorage.setItem(CT_KEY, JSON.stringify(o)); } catch (e) {} };
const ctCfg = () => (fxOn() ? CT.remoteCfg : ctLocal().config) || {};
const ctExtra = () => (fxOn() ? CT.remote : ctLocal().items) || [];
const ctAll = kind => { const hid = new Set(ctCfg().hidden || []); return BUILTIN.filter(i => i.kind === kind && !hid.has(i.id)).concat(ctExtra().filter(i => i.kind === kind && i.active !== false)); };
const gameOff = key => (ctCfg().disabledGames || []).indexOf(key) >= 0;
async function fxContent() {
  if (!FX.impl) return;
  try { const c = await FX.impl.loadContent(); CT.remote = c.items || []; CT.remoteCfg = c.config || {}; } catch (e) { /* the built-in content still works */ }
  if (route() === 'games' || route() === 'today') render();
}
function ytId(u) {
  u = String(u || '').trim(); if (!u) return '';
  if (/^[\w-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/); return m ? m[1] : '';
}
const ytStart = u => { const m = String(u || '').match(/[?&#](?:t|start)=(\d+)/); return m ? +m[1] : null; };

/* ---- shared engine for "pick the right answer" rounds ---- */
let GQ = null;
const guessSpecs = {
  quote: {
    key: 'quote', title: 'Anime Quotes', f1: i => i.anime, f2: i => i.char, l1: 'Which anime is this from?', l2: 'Who says it?', unit: 'quotes', flagKey: 'quoteOk',
    blurb: 'A famous line appears in Japanese. Name the anime, or on Hard, the anime and the character. Romaji and English are hidden unless you switch them on.',
    clue: (it, g) => `<div class="qjp glyph">${esc(it.jp)}</div>${S.set.qRomaji ? `<p class="qro">${esc(it.ro || '')}</p>` : ''}${S.set.qEnglish ? `<p class="qen muted">“${esc(it.en || '')}”</p>` : ''}
      <div class="row ctr"><button class="chip${S.set.qRomaji ? ' on' : ''}" data-act="gqTog" data-k="qRomaji" aria-pressed="${!!S.set.qRomaji}">Romaji</button><button class="chip${S.set.qEnglish ? ' on' : ''}" data-act="gqTog" data-k="qEnglish" aria-pressed="${!!S.set.qEnglish}">English</button><button class="chip" data-act="gqSay">${SPEAK_SVG} Say it</button></div>`,
    playable: () => true
  },
  song: {
    key: 'song', title: 'Guess the Song', f1: i => i.artist, f2: i => i.title, l1: 'Who is the artist?', l2: 'What is the song called?', unit: 'songs', flagKey: 'songOk',
    blurb: 'A song plays from its YouTube video. Name the artist, or on Hard, the artist and the title. The video is hidden so you have to rely on your ears.',
    clue: (it, g) => {
      const id = ytId(it.yt), env = window.APP_ENV || {}, s = g.start;
      const frame = id && env.embed !== false ? `<div class="vwrap${g.showVideo ? ' show' : ''}"><iframe title="Song to guess" src="https://www.youtube-nocookie.com/embed/${id}?start=${s}&autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>${g.showVideo ? '' : '<div class="vcover"><span aria-hidden="true">♪</span><b>Listening…</b></div>'}</div>` : '';
      const link = id ? `<a class="btn ghost sm" href="https://www.youtube.com/watch?v=${id}&t=${s}s" target="_blank" rel="noopener">Open on YouTube</a>` : '';
      return `${frame}${!frame && id ? '<p class="muted ctr">Playing inside the page is not available here, so use the link and come back to answer.</p>' : ''}
        <div class="row ctr">${link}${frame ? `<button class="chip${g.showVideo ? ' on' : ''}" data-act="gqVideo" aria-pressed="${!!g.showVideo}">Show video</button>` : ''}${it.hint ? `<button class="chip${g.hint ? ' on' : ''}" data-act="gqHint">Hint</button>` : ''}</div>
        ${g.hint && it.hint ? `<p class="qen muted ctr">${esc(it.hint)}</p>` : ''}${frame ? '<p class="muted small ctr">If the video says it cannot play, the owner blocked embedding. Use “Open on YouTube”.</p>' : ''}`;
    },
    playable: i => !!ytId(i.yt)
  }
};
function guessStart(key) {
  const spec = guessSpecs[key], all = ctAll(key), pool = all.filter(spec.playable);
  GQ = { spec, all, pool, phase: 'setup', diff: (GQ && GQ.key === key && GQ.diff) || 'easy', n: 10, key };
  GAME = { stop() { GQ = null; } };
  gqPaint();
}
const GQ_N = [5, 10, 15];
function gqPaint() {
  const st = $('#gstage'); if (!st || !GQ) return; const g = GQ, spec = g.spec;
  if (g.phase === 'setup') {
    const distinct = new Set(g.all.map(spec.f1)).size;
    const unplayable = g.all.length - g.pool.length;
    st.innerHTML = `<div class="card"><h2>${spec.title}</h2><p class="muted">${spec.blurb}</p>
      <p class="lab">Difficulty</p><div class="chips">${[['easy', spec.key === 'quote' ? 'Easy · guess the anime' : 'Easy · guess the artist'], ['hard', spec.key === 'quote' ? 'Hard · anime and character' : 'Hard · artist and title']].map(d => `<button class="chip${g.diff === d[0] ? ' on' : ''}" data-act="gqSet" data-k="diff" data-v="${d[0]}" aria-pressed="${g.diff === d[0]}">${d[1]}</button>`).join('')}</div>
      <p class="lab">Rounds</p><div class="chips">${GQ_N.map(n => `<button class="chip${g.n === n ? ' on' : ''}" data-act="gqSet" data-k="n" data-v="${n}" aria-pressed="${g.n === n}">${n}</button>`).join('')}</div>
      <p class="muted small">${g.pool.length} ${spec.unit} ready to play${unplayable ? ` · ${unplayable} more need a video link (an admin can add them in Profile › Admin)` : ''}.</p>
      ${g.pool.length < 1 || distinct < 2 ? `<p class="fb bad">There is not enough content to play yet. Add more in Profile › Admin.</p>` : ''}
      <div class="row"><button class="btn lg" data-act="gqGo" ${g.pool.length < 1 || distinct < 2 ? 'disabled' : ''}>Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
    return;
  }
  if (g.phase === 'done') {
    const xp = Math.min(60, g.right * (g.diff === 'hard' ? 6 : 3));
    st.innerHTML = '';
    finishGame(spec.key, g.score, [[g.right + '/' + g.qs.length, 'fully right'], [g.diff, 'difficulty'], [g.streakBest, 'best run']], [], xp);
    const card = $('.card.done', st);
    if (card && g.wrong.length) {
      const h = document.createElement('div'); h.innerHTML = `<h4>Worth remembering</h4><ul class="plain">${g.wrong.map(w => `<li>${spec.key === 'quote' ? `<span class="glyph">${esc(w.jp)}</span> · ${esc(w.anime)}, ${esc(w.char)}` : `${esc(w.artist)} · ${esc(w.title)}${w.ro ? ' (' + esc(w.ro) + ')' : ''}`}</li>`).join('')}</ul>`;
      card.insertBefore(h, card.querySelector('.row'));
    }
    return;
  }
  const q = g.qs[g.i], it = q.item, step = q.step, last = g.diff === 'easy' || step === 2;
  const label = step === 1 ? spec.l1 : spec.l2;
  st.innerHTML = `<div class="ghud"><span>Round <b>${g.i + 1}/${g.qs.length}</b></span><span>Score <b>${g.score}</b></span><span>${g.diff}</span></div>
    <div class="card qcard">${spec.clue(it, g)}</div>
    <p class="lab ctr">${label}${g.diff === 'hard' ? ` · step ${step} of 2` : ''}</p>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${q.sel != null ? (o === q.right[step] ? ' ok' : (q.sel === i ? ' bad' : ' off')) : ''}" data-act="gqPick" data-i="${i}" ${q.sel != null ? 'disabled' : ''}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>
    ${q.sel != null ? `<div class="fb ${q.opts[q.sel] === q.right[step] ? 'ok' : 'bad'}"><span><b>${q.opts[q.sel] === q.right[step] ? 'Correct' : 'Not quite'}</b>${q.opts[q.sel] === q.right[step] ? '' : ' It is ' + esc(q.right[step]) + '.'}${last && spec.key === 'quote' ? ' “' + esc(it.en || '') + '”' : ''}${last && spec.key === 'song' && it.ro ? ' (' + esc(it.ro) + ')' : ''}</span>
      <button class="btn" data-act="gqNext" autofocus>${last && g.i + 1 >= g.qs.length ? 'See results' : last ? 'Next' : 'Continue'}</button></div>` : ''}
    <div class="row ctr"><button class="link" data-act="gexit">Quit</button></div>`;
}
function gqOpts(g, item, step) {
  const spec = g.spec, f = step === 1 ? spec.f1 : spec.f2, right = f(item);
  const pool = g.all.filter(x => x !== item), seen = new Set([right]); let cands = [];
  if (step === 2) cands = shuffle(pool.filter(x => spec.f1(x) === spec.f1(item)).map(f));
  cands = cands.concat(shuffle(pool.map(f)));
  const out = [right]; for (const c of cands) { if (!seen.has(c) && c) { seen.add(c); out.push(c); if (out.length >= 4) break; } }
  return shuffle(out);
}
ACT.gqSet = el => { GQ[el.dataset.k] = /^\d+$/.test(el.dataset.v) ? +el.dataset.v : el.dataset.v; gqPaint(); };
ACT.gqGo = () => {
  const g = GQ, n = Math.min(g.n, g.pool.length), qs = shuffle(g.pool).slice(0, n).map(item => ({ item, step: 1, sel: null, right: { 1: g.spec.f1(item), 2: g.spec.f2(item) } }));
  Object.assign(g, { phase: 'q', qs, i: 0, score: 0, right: 0, run: 0, streakBest: 0, wrong: [], hint: false, showVideo: false });
  gqSetup(); gqPaint();
};
function gqSetup() { const g = GQ, q = g.qs[g.i]; q.opts = gqOpts(g, q.item, 1); g.start = (q.item.start != null && q.item.start !== '') ? +q.item.start : (ytStart(q.item.yt) != null ? ytStart(q.item.yt) : 20 + rnd(70)); g.hint = false; g.showVideo = false; }
ACT.gqPick = el => {
  const g = GQ, q = g.qs[g.i], step = q.step; if (q.sel != null) return;
  q.sel = +el.dataset.i; const ok = q.opts[q.sel] === q.right[step];
  if (ok) { g.score += 10; sfx.ok(); q.okSteps = (q.okSteps || 0) + 1; } else { sfx.no(); }
  q.wrongAny = q.wrongAny || !ok; gqPaint();
};
ACT.gqNext = () => {
  const g = GQ, q = g.qs[g.i];
  if (g.diff === 'hard' && q.step === 1) { q.step = 2; q.sel = null; q.opts = gqOpts(g, q.item, 2); gqPaint(); return; }
  const full = !q.wrongAny; if (full) { g.right++; g.run++; g.streakBest = Math.max(g.streakBest, g.run); flag(g.spec.flagKey); } else { g.run = 0; g.wrong.push(q.item); }
  g.i++; if (g.i >= g.qs.length) { g.phase = 'done'; } else gqSetup();
  gqPaint();
};
ACT.gqTog = el => { S.set[el.dataset.k] = !S.set[el.dataset.k]; save(); gqPaint(); };
ACT.gqVideo = () => { GQ.showVideo = !GQ.showVideo; gqPaint(); };
ACT.gqHint = () => { GQ.hint = !GQ.hint; gqPaint(); };
ACT.gqSay = () => { const q = GQ && GQ.qs && GQ.qs[GQ.i]; if (q) speak(q.item.jp); };
document.addEventListener('keydown', e => {
  if (!GQ || GQ.phase !== 'q' || route() !== 'games' || !$('#modal').hidden) return;
  const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea') return;
  const q = GQ.qs[GQ.i]; if (!q) return;
  if (q.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= q.opts.length) ACT.gqPick({ dataset: { i: String(+e.key - 1) } });
  else if (q.sel != null && e.key === 'Enter') ACT.gqNext();
});
G.quote = () => guessStart('quote');
G.song = () => guessStart('song');

/* ============ MORE MINIGAMES: Particle Pop, Sound Match, Number Dash, Shiritori, JLPT Mock Test ============ */
const hasJaVoice = () => { try { return speechSynthesis.getVoices().some(v => v.lang && v.lang.toLowerCase().indexOf('ja') === 0); } catch (e) { return false; } };

/* ---- a small multiple-choice engine shared by several games ---- */
let MQ = null;
function mqStart(spec) {      // spec: {key, qs:[{prompt, opts:[], a, glyph, sec, note}], xpPer, stats(mq)->[[v,l]], onDone(mq)}
  stopGame(); GAME = { stop() { MQ = null; } };
  MQ = Object.assign({ i: 0, sel: null, score: 0, right: 0, secs: {}, wrong: [] }, spec); mqPaint();
}
function mqPaint() {
  const st = $('#gstage'); if (!st || !MQ) return; const m = MQ, q = m.qs[m.i];
  if (!q) {
    const xp = Math.min(60, m.right * m.xpPer);
    const stats = m.stats ? m.stats(m) : [[m.right + '/' + m.qs.length, 'right'], [pct(m.right, m.qs.length) + '%', 'accuracy']];
    finishGame(m.key, m.score, stats, [], xp);
    const card = $('.card.done', st);
    if (card && m.wrong.length) { const h = document.createElement('div'); h.innerHTML = `<h4>Review these</h4><ul class="plain">${m.wrong.slice(0, 8).map(w => `<li>${w}</li>`).join('')}</ul>`; card.insertBefore(h, card.querySelector('.row')); }
    if (m.onDone) m.onDone(m); return;
  }
  st.innerHTML = `<div class="ghud"><span>Question <b>${m.i + 1}/${m.qs.length}</b></span><span>Score <b>${m.score}</b></span>${q.sec ? `<span>${esc(q.sec)}</span>` : ''}</div>
    <div class="card qcard">${q.prompt}</div>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${m.sel != null ? (i === q.a ? ' ok' : (m.sel === i ? ' bad' : ' off')) : ''}" data-act="mqPick" data-i="${i}" ${m.sel != null ? 'disabled' : ''}><kbd>${i + 1}</kbd><span class="${q.glyph ? 'gl glyph' : ''}">${esc(o)}</span></button>`).join('')}</div>
    ${m.sel != null ? `<div class="fb ${m.sel === q.a ? 'ok' : 'bad'}"><span><b>${m.sel === q.a ? 'Correct' : 'Not quite'}</b>${m.sel === q.a ? '' : ' The answer is ' + esc(q.opts[q.a]) + '.'}${q.note ? ' ' + esc(q.note) : ''}</span><button class="btn" data-act="mqNext" autofocus>${m.i + 1 >= m.qs.length ? 'See results' : 'Next'}</button></div>` : ''}
    <div class="row ctr"><button class="link" data-act="gexit">Quit</button></div>`;
  if (m.i !== m.said && q.say && m.sel == null) { m.said = m.i; setTimeout(() => { if (MQ === m && m.i === m.said) speak(q.say); }, 250); }
}
ACT.mqPick = el => {
  const m = MQ, q = m.qs[m.i]; if (m.sel != null) return; m.sel = +el.dataset.i;
  const ok = m.sel === q.a; if (ok) { m.score += 10; m.right++; sfx.ok(); } else { sfx.no(); m.wrong.push(q.review || esc(q.opts[q.a])); }
  if (q.sec) { const s = m.secs[q.sec] = m.secs[q.sec] || [0, 0]; s[1]++; if (ok) s[0]++; }
  if (q.id) touch(q.id, ok); mqPaint();
};
ACT.mqNext = () => { MQ.i++; MQ.sel = null; mqPaint(); };
ACT.mqSay = () => { const q = MQ && MQ.qs[MQ.i]; if (q && q.say) speak(q.say); };
document.addEventListener('keydown', e => {
  if (!MQ || route() !== 'games' || !$('#modal').hidden) return;
  const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea') return;
  const q = MQ.qs[MQ.i]; if (!q) return;
  if (MQ.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= q.opts.length) ACT.mqPick({ dataset: { i: String(+e.key - 1) } });
  else if (MQ.sel != null && e.key === 'Enter') ACT.mqNext();
});
const mqWrap = (qs, a) => qs.map(q => { const opts = shuffle(q.opts); return Object.assign({}, q, { opts, a: opts.indexOf(q.opts[q.a]) }); });

/* ---- Particle Pop ---- */
const PARTICLES = [
  ['私＿学生です。', 'は', ['を', 'に', 'で'], 'I am a student.'], ['水＿飲みます。', 'を', ['に', 'で', 'の'], 'I drink water.'],
  ['毎朝七時＿起きます。', 'に', ['を', 'で', 'の'], 'I get up at seven every morning.'], ['図書館＿勉強します。', 'で', ['に', 'を', 'の'], 'I study at the library.'],
  ['友達＿会います。', 'に', ['で', 'の', 'から'], 'I meet a friend.'], ['バス＿行きます。', 'で', ['を', 'が', 'の'], 'I go by bus.'],
  ['これは私＿本です。', 'の', ['を', 'で', 'に'], 'This is my book.'], ['友達＿映画を見ます。', 'と', ['を', 'の', 'から'], 'I watch a film with a friend.'],
  ['私＿すしが好きです。', 'も', ['を', 'に', 'で'], 'I like sushi too.'], ['東京＿京都まで電車で行きます。', 'から', ['を', 'の', 'が'], 'I go from Tokyo to Kyoto by train.'],
  ['九時＿五時まで働きます。', 'から', ['を', 'に', 'の'], 'I work from nine to five.'], ['ここ＿座ってください。', 'に', ['を', 'の', 'と'], 'Please sit here.'],
  ['これ＿いくらですか。', 'は', ['を', 'に', 'で'], 'How much is this?'], ['何＿食べますか。', 'を', ['に', 'の', 'で'], 'What will you eat?'],
  ['日本語＿勉強しています。', 'を', ['に', 'の', 'と'], 'I am studying Japanese.'], ['犬＿います。', 'が', ['を', 'の', 'で'], 'There is a dog.'],
  ['机の上＿本があります。', 'に', ['を', 'で', 'の'], 'There is a book on the desk.'], ['私＿母は先生です。', 'の', ['を', 'で', 'に'], 'My mother is a teacher.'],
  ['電車＿降ります。', 'を', ['に', 'で', 'の'], 'I get off the train.'], ['公園＿散歩します。', 'を', ['に', 'の', 'と'], 'I take a walk in the park.'],
  ['先生＿質問します。', 'に', ['を', 'で', 'の'], 'I ask the teacher a question.'], ['りんご＿三つください。', 'を', ['に', 'で', 'の'], 'Three apples, please.'],
  ['この本は先生＿もらいました。', 'に', ['を', 'の', 'で'], 'I received this book from my teacher.'], ['アメリカ＿来ました。', 'から', ['を', 'の', 'で'], 'I came from America.'],
  ['ペン＿書きます。', 'で', ['に', 'の', 'と'], 'I write with a pen.'], ['はし＿食べます。', 'で', ['に', 'の', 'と'], 'I eat with chopsticks.'],
  ['宿題＿終わりました。', 'が', ['を', 'に', 'で'], 'The homework is finished.'], ['お茶＿ください。', 'を', ['に', 'の', 'で'], 'Tea, please.'],
  ['ここ＿写真を撮ってもいいですか。', 'で', ['に', 'の', 'と'], 'May I take a photo here?'], ['何時＿寝ますか。', 'に', ['を', 'の', 'で'], 'What time do you go to bed?']
];
const partQ = p => ({ prompt: `<p class="qen muted ctr">${esc(p[3])}</p><div class="qjp glyph">${esc(p[0]).replace('＿', '<span class="blank">　</span>')}</div>`, opts: [p[1]].concat(p[2]), a: 0, glyph: 1, sec: 'Particles', review: esc(p[0].replace('＿', p[1])) + ' · ' + esc(p[3]), note: p[0].replace('＿', p[1]) });
G.particle = () => mqStart({ key: 'particle', xpPer: 3, qs: mqWrap(sample(PARTICLES, 10).map(partQ)) });

/* ---- Sound Match ---- */
G.sound = st => {
  const voice = hasJaVoice(), pool = KANA.filter(i => i.group === 'basic' && (UI.game.deck === 'hk' || i.type === UI.game.deck));
  const picks = sample(pool, 10), qs = picks.map(it => {
    const dis = sample(pool.filter(x => x.ch !== it.ch && x.ro !== it.ro), 3);
    return { id: it.id, say: it.ch, glyph: 1, sec: 'Sound', opts: [it.ch].concat(dis.map(d => d.ch)), a: 0, review: `<span class="glyph">${esc(it.ch)}</span> ${esc(it.ro)}`,
      prompt: voice ? `<p class="muted ctr">Listen, then pick the kana you heard.</p><div class="row ctr"><button class="btn lg" data-act="mqSay">${SPEAK_SVG} Play again</button></div>` : `<p class="muted ctr">No Japanese voice found on this device, so here is the sound in letters instead.</p><div class="gbig">${esc(it.ro)}</div>` };
  });
  mqStart({ key: 'sound', xpPer: 3, qs: mqWrap(qs) });
};

/* ---- Number Dash ---- */
const numKanji = n => { const d = '〇一二三四五六七八九'; if (n === 0) return '〇'; const th = Math.floor(n / 1000), h = Math.floor(n / 100) % 10, t = Math.floor(n / 10) % 10, o = n % 10; let s = ''; if (th) s += (th > 1 ? d[th] : '') + '千'; if (h) s += (h > 1 ? d[h] : '') + '百'; if (t) s += (t > 1 ? d[t] : '') + '十'; if (o) s += d[o]; return s; };
const ND = { range: 99, mode: 'read' };
G.number = st => {
  const setup = () => {
    st.innerHTML = `<div class="card"><h2>Number Dash</h2><p class="muted">A number appears in Japanese. Type it in digits before the 60 seconds run out. Each answer adds time to your score.</p>
      <p class="lab">Range</p><div class="chips">${[[20, '1 to 20'], [99, '1 to 99'], [999, 'up to 999'], [9999, 'up to 9999']].map(r => `<button class="chip${ND.range === r[0] ? ' on' : ''}" data-act="ndSet" data-k="range" data-v="${r[0]}" aria-pressed="${ND.range === r[0]}">${r[1]}</button>`).join('')}</div>
      <p class="lab">How the number is given</p><div class="chips">${[['read', 'Kanji numerals'], ['listen', 'Spoken']].map(r => `<button class="chip${ND.mode === r[0] ? ' on' : ''}" data-act="ndSet" data-k="mode" data-v="${r[0]}" aria-pressed="${ND.mode === r[0]}">${r[1]}</button>`).join('')}</div>
      ${ND.mode === 'listen' && !hasJaVoice() ? '<p class="fb bad">No Japanese voice found on this device. Pick kanji numerals instead, or install a Japanese voice.</p>' : ''}
      <div class="row"><button class="btn lg" data-act="ndGo">Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
  };
  ACT.ndSet = el => { ND[el.dataset.k] = el.dataset.k === 'range' ? +el.dataset.v : el.dataset.v; setup(); };
  ACT.ndGo = () => run();
  const run = () => {
    let cur = 0, last = 0, score = 0, ok = 0, miss = 0, left = 60, timer = null; const missed = [];
    st.innerHTML = `<div class="ghud"><span>Time <b id="gt">60</b></span><span>Score <b id="gs">0</b></span><span>Right <b id="gc">0</b></span></div>
      <div class="gbig glyph" id="gg" aria-live="polite"></div><div class="row ctr" id="gsp"></div><p class="hint" id="gh">Type the number in digits, then press Enter</p>
      <input id="gin" class="gin" inputmode="numeric" autocomplete="off" aria-label="Number in digits"><div class="row ctr"><button class="btn ghost" id="gskip">Skip</button></div>`;
    const inp = $('#gin', st), gg = $('#gg', st);
    const next = () => { do { cur = 1 + rnd(ND.range); } while (cur === last && ND.range > 1); last = cur; inp.value = '';
      if (ND.mode === 'read') gg.textContent = numKanji(cur); else { gg.textContent = '♪'; $('#gsp', st).innerHTML = `<button class="btn" id="gsay">${SPEAK_SVG} Play again</button>`; $('#gsay', st).onclick = () => speak(String(cur)); speak(String(cur)); } };
    const hud = () => { $('#gt', st).textContent = left; $('#gs', st).textContent = score; $('#gc', st).textContent = ok; };
    const end = () => { clearInterval(timer); GAME = null; finishGame('number', score, [[ok, 'right'], [miss, 'missed'], [ND.range, 'top number']], [], Math.min(40, ok * 2)); };
    const submit = () => { const v = inp.value.trim().replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 65248)); if (!v) return;
      if (+v === cur) { ok++; score += 10 + (String(cur).length * 2); sfx.ok(); } else { miss++; sfx.no(); shakeEl(inp); $('#gh', st).textContent = 'That was ' + cur + ' (' + numKanji(cur) + ')'; setTimeout(() => { const h = $('#gh', st); if (h) h.textContent = ''; }, 1500); }
      hud(); next(); };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    $('#gskip', st).onclick = () => { miss++; next(); hud(); inp.focus(); };
    timer = setInterval(() => { left--; hud(); if (left <= 0) end(); }, 1000);
    GAME = { stop() { clearInterval(timer); } };
    next(); hud(); inp.focus();
  };
  setup();
};

/* ---- Shiritori ---- */
const kanaRows = (() => { const m = []; KANA.filter(i => i.type === 'h').forEach(i => accepted(i).forEach(r => m.push([r, i.ch]))); return m.sort((a, b) => b[0].length - a[0].length); })();
function fromRomaji(s) {
  s = String(s || '').toLowerCase().trim(); if (/^[ぁ-んー]+$/.test(s)) return s; if (/[^a-z' -]/.test(s)) return s;
  s = s.replace(/[\s-]/g, ''); let out = '', i = 0;
  while (i < s.length) {
    if (s[i] === "'") { i++; continue; }
    if (s[i] === 'n' && (i + 1 >= s.length || (!/[aiueoy]/.test(s[i + 1]) && s[i + 1] !== 'n') || s[i + 1] === "'")) { out += 'ん'; i++; continue; }
    if (s[i] === 'n' && s[i + 1] === 'n' && !/[aiueoy]/.test(s[i + 2] || '')) { out += 'ん'; i += 2; continue; }
    if (s[i] === s[i + 1] && /[kstpcghbdfjmrwyz]/.test(s[i])) { out += 'っ'; i++; continue; }
    const hit = kanaRows.find(r => s.startsWith(r[0], i)); if (!hit) return s; out += hit[1]; i += hit[0].length;
  }
  return out;
}
const SMALL = { 'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ', 'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お' };
const LONG_V = { あ: 'あ', い: 'い', う: 'う', え: 'え', お: 'お' };
const lastKana = w => { let c = w.replace(/ー+$/, '').slice(-1); if (SMALL[c]) c = SMALL[c]; return c; };
let SHI_WORDS = null;
const shiWords = () => { if (!SHI_WORDS) { const seen = new Set(); SHI_WORDS = []; VOCAB.forEach(v => { if (/^[ぁ-ゖ]{2,}$/.test(v.rd) && !seen.has(v.rd)) { seen.add(v.rd); SHI_WORDS.push({ rd: v.rd, ch: v.ch, mean: v.mean }); } }); } return SHI_WORDS; };
G.shiritori = st => {
  const words = shiWords(), byRd = {}; words.forEach(w => { byRd[w.rd] = w; });
  const used = new Set(), chain = []; let score = 0, need = '', over = false;
  const pickAI = () => { const c = words.filter(w => !used.has(w.rd) && (!need || w.rd[0] === need) && lastKana(w.rd) !== 'ん'); return c.length ? c[rnd(c.length)] : null; };
  const first = pickAI(); used.add(first.rd); chain.push({ who: 'cpu', w: first }); need = lastKana(first.rd);
  const paint = msg => {
    st.innerHTML = `<div class="ghud"><span>Chain <b>${chain.length}</b></span><span>Score <b>${score}</b></span><span>Next starts with <b class="glyph">${esc(need)}</b></span></div>
      <div class="card"><p class="muted">Say a word that starts with the last sound of the previous word. Do not end a word with ん, and do not repeat words. Type in kana or romaji. I only know the words from this app, so I may not know every word you do.</p>
      <ol class="shichain">${chain.slice(-6).map(c => `<li class="${c.who}"><span class="who">${c.who === 'cpu' ? 'Me' : 'You'}</span><span class="glyph">${esc(c.w.rd)}</span><span class="muted small">${esc(c.w.ch !== c.w.rd ? c.w.ch + ' · ' : '')}${esc(c.w.mean || '')}</span></li>`).join('')}</ol></div>
      <p class="hint" id="gh">${esc(msg || '')}</p><input id="gin" class="gin" ${INPUT_ATTR} aria-label="Your word in kana or romaji" placeholder="Your word">
      <div class="row ctr"><button class="btn" id="gok">Say it</button><button class="btn ghost" id="ghint">Hint</button><button class="btn ghost" id="gend">I give up</button></div>`;
    const inp = $('#gin', st); inp.focus();
    const submit = () => {
      const raw = inp.value.trim(); if (!raw) return; const w = fromRomaji(raw);
      const bad = m => { sfx.no(); shakeEl(inp); $('#gh', st).textContent = m; };
      if (!/^[ぁ-ゖー]+$/.test(w)) return bad('Please use kana or romaji.');
      if (need && w[0] !== need) return bad('It must start with ' + need + '.');
      if (used.has(w)) return bad('That word was already used.');
      if (lastKana(w) === 'ん' || w.slice(-1) === 'ん') { used.add(w); chain.push({ who: 'me', w: { rd: w, ch: w, mean: 'ends with ん' } }); return finish('Your word ends with ん, so the chain ends.'); }
      if (!byRd[w]) return bad('I do not know that word yet. Try another one.');
      used.add(w); chain.push({ who: 'me', w: byRd[w] }); score += 10 + w.length; sfx.ok(); flagWord(byRd[w]);
      need = lastKana(w); const ai = pickAI();
      if (!ai) { score += 30; return finish('I have no word left. You win!'); }
      used.add(ai.rd); chain.push({ who: 'cpu', w: ai }); need = lastKana(ai.rd); paint('Good one.');
    };
    $('#gok', st).onclick = submit; inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    $('#ghint', st).onclick = () => { const c = words.filter(x => !used.has(x.rd) && x.rd[0] === need && lastKana(x.rd) !== 'ん'); $('#gh', st).textContent = c.length ? 'Try: ' + c[rnd(c.length)].rd[0] + '… (' + c[rnd(c.length)].mean + ')' : 'No hint available.'; score = Math.max(0, score - 3); };
    $('#gend', st).onclick = () => finish('Chain ended.');
  };
  const flagWord = w => { const v = VOCAB.find(x => x.rd === w.rd); if (v) touch(v.id, true); };
  const finish = why => { over = true; finishGame('shiritori', score, [[chain.filter(c => c.who === 'me').length, 'your words'], [chain.length, 'chain length']], [], Math.min(40, Math.round(score / 3))); const c = $('.card.done', st); if (c) { const p = document.createElement('p'); p.className = 'muted'; p.textContent = why; c.insertBefore(p, c.querySelector('.stats3')); } };
  paint('I start: ' + first.rd);
};

/* ---- JLPT Mock Test ---- */
const MK = { lv: 'n4' };
G.mock = st => {
  st.innerHTML = `<div class="card"><h2>JLPT Mock Test</h2><p class="muted">Twenty mixed questions in the style of the exam: kanji readings, vocabulary, grammar and particles. Aim for 60% or more. This is practice, not an official score.</p>
    <p class="lab">Level</p><div class="chips">${[['n5', 'N5'], ['n4', 'N4']].map(l => `<button class="chip${MK.lv === l[0] ? ' on' : ''}" data-act="mkSet" data-v="${l[0]}" aria-pressed="${MK.lv === l[0]}">${l[1]}</button>`).join('')}</div>
    <div class="row"><button class="btn lg" data-act="mkGo">Start the test</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
};
ACT.mkSet = el => { MK.lv = el.dataset.v; G.mock($('#gstage')); };
ACT.mkGo = () => {
  const lv = MK.lv, qs = [];
  const kj = KANJI.filter(k => k.jlpt === lv && k.kun.length + k.on.length > 0 && k.ex[0]), vv = VOCAB.filter(v => v.jlpt === lv);
  const kanaOf = s => s;
  sample(kj, 6).forEach(k => { const e = k.ex[0], others = sample(kj.filter(x => x !== k && x.ex[0] && x.ex[0].r !== e.r), 3).map(x => x.ex[0].r);
    qs.push({ id: k.id, sec: 'Kanji', glyph: 1, opts: [e.r].concat(others), a: 0, prompt: `<p class="muted ctr">How do you read this word?</p><div class="qjp glyph">${esc(e.w)}</div>`, review: `<span class="glyph">${esc(e.w)}</span> ${esc(e.r)} · ${esc(e.m)}` }); });
  sample(vv, 6).forEach(v => { const others = sample(vv.filter(x => x !== v), 3).map(x => x.mean);
    qs.push({ id: v.id, sec: 'Vocabulary', opts: [v.mean].concat(others), a: 0, prompt: `<p class="muted ctr">What does this word mean?</p><div class="qjp glyph">${esc(v.ch)}</div><p class="muted ctr">${esc(v.rd)}</p>`, review: `<span class="glyph">${esc(v.ch)}</span> ${esc(v.mean)}` }); });
  const gq = []; LESSONS.filter(l => l.lv === lv).forEach(l => l.quiz.forEach(q => gq.push({ l, q })));
  sample(gq, 4).forEach(x => qs.push({ sec: 'Grammar', opts: x.q.o.slice(), a: x.q.a, prompt: `<p class="muted ctr">${esc(x.l.title)}</p><div class="qjp">${esc(x.q.q)}</div>`, review: esc(x.q.q) + ' → ' + esc(x.q.o[x.q.a]) }));
  sample(PARTICLES, 4).map(partQ).forEach(q => { q.sec = 'Particles'; qs.push(q); });
  const fin = shuffle(qs.filter(q => q.opts.length >= 2));
  mqStart({ key: 'mock', xpPer: 3, qs: mqWrap(fin),
    stats: m => [[pct(m.right, m.qs.length) + '%', m.right / m.qs.length >= 0.6 ? 'pass' : 'not yet'], [m.right + '/' + m.qs.length, 'right'], [Object.keys(m.secs).map(k => k[0] + ':' + m.secs[k][0] + '/' + m.secs[k][1]).join(' ') || '-', 'by section']],
    onDone: m => { flag('mock'); } });
};

/* ============ STROKE ORDER + STROKE DOJO ============
   Stroke data: KanjiVG (c) Ulrich Apel, licensed CC BY-SA 3.0, https://kanjivg.tagaini.net
   Files are fetched once from the jsDelivr CDN and remembered on this device afterwards.            */
const KVG = c => 'https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/' + c.codePointAt(0).toString(16).padStart(5, '0') + '.svg';
const SKC = {};
async function loadStrokes(ch) {
  if (SKC[ch]) return SKC[ch];
  try { const s = localStorage.getItem('kvg:' + ch); if (s) { SKC[ch] = JSON.parse(s); return SKC[ch]; } } catch (e) {}
  const res = await fetch(KVG(ch)); if (!res.ok) throw new Error('http ' + res.status);
  const doc = new DOMParser().parseFromString(await res.text(), 'image/svg+xml');
  const paths = Array.from(doc.querySelectorAll('path')).filter(p => /-s\d+$/.test(p.getAttribute('id') || '')).map(p => p.getAttribute('d'));
  if (!paths.length) throw new Error('no strokes');
  SKC[ch] = paths; try { localStorage.setItem('kvg:' + ch, JSON.stringify(paths)); } catch (e) { /* storage full: still works */ }
  return paths;
}
const SK_ATTR = '<p class="muted small">Stroke data: <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> © Ulrich Apel, CC BY-SA 3.0.</p>';
const NS = 'http://www.w3.org/2000/svg';
const GRID = '<rect x="1" y="1" width="107" height="107" rx="6" class="skbox"/><path d="M54.5 2 V107 M2 54.5 H107" class="skgrid"/><path d="M2 2 L107 107 M107 2 L2 107" class="skgrid d2"/>';

/* ---- viewer inside the detail dialog ---- */
const SKV = { n: 0, token: 0, svgs: [], total: 0, shown: 0 };
function strokePanel(str) {
  return `<h4>Stroke order</h4><div class="skbox2" id="skbox" data-s="${esc(str)}"><p class="muted">Loading stroke order…</p></div>
    <div class="row" id="skctl" hidden><button class="btn" data-act="skPlay">Play</button><button class="btn ghost" data-act="skPrev" aria-label="Previous stroke">‹ Step</button><button class="btn ghost" data-act="skNext" aria-label="Next stroke">Step ›</button><button class="btn ghost" data-act="skAll">Show all</button></div>${SK_ATTR}`;
}
async function initStrokes() {
  const box = $('#skbox'); if (!box) return; const chars = Array.from(box.dataset.s);
  try {
    const all = await Promise.all(chars.map(loadStrokes)); if (!document.body.contains(box)) return;
    SKV.svgs = []; SKV.total = 0; SKV.token++;
    box.innerHTML = chars.map((c, ci) => `<svg class="sksvg" viewBox="0 0 109 109" role="img" aria-label="Stroke order of ${esc(c)}">${GRID}${all[ci].map((d, i) => `<path class="skp hide" d="${d}" pathLength="1"/>`).join('')}<g class="sklab"></g></svg>`).join('');
    $$('.sksvg', box).forEach((svg, ci) => {
      const ps = Array.from(svg.querySelectorAll('.skp')), lab = svg.querySelector('.sklab');
      ps.forEach((p, i) => { const pt = p.getPointAtLength(0); lab.insertAdjacentHTML('beforeend', `<g class="skn hide" transform="translate(${(pt.x - 3).toFixed(1)} ${(pt.y - 3).toFixed(1)})"><circle r="4.6"/><text y="2.2">${i + 1}</text></g>`); });
      const ls = Array.from(lab.children); SKV.svgs.push({ ps, ls }); SKV.total += ps.length;
    });
    $('#skctl').hidden = false; skPlayAll();
  } catch (e) {
    box.innerHTML = '<p class="muted">Stroke order could not be loaded. It needs an internet connection the first time, and is remembered on this device after that.</p>';
  }
}
const skFlat = () => { const a = []; SKV.svgs.forEach(s => s.ps.forEach((p, i) => a.push([p, s.ls[i]]))); return a; };
function skSet(n) { SKV.token++; SKV.shown = n; skFlat().forEach((x, i) => { x[0].style.transition = 'none'; x[0].style.strokeDashoffset = 0; x[0].classList.toggle('hide', i >= n); x[0].classList.toggle('cur', i === n - 1); x[1].classList.toggle('hide', i >= n); }); }
const wait = ms => new Promise(r => setTimeout(r, ms));
async function skPlayAll() {
  const tok = ++SKV.token, all = skFlat(); skSet(0); SKV.token = tok;
  for (let i = 0; i < all.length; i++) {
    if (SKV.token !== tok || !document.body.contains(all[i][0])) return;
    const p = all[i][0]; all.forEach((x, j) => x[0].classList.toggle('cur', j === i));
    p.style.transition = 'none'; p.style.strokeDashoffset = 1; p.classList.remove('hide'); all[i][1].classList.remove('hide'); void p.getBoundingClientRect();
    p.style.transition = 'stroke-dashoffset .6s ease-in-out'; p.style.strokeDashoffset = 0; SKV.shown = i + 1;
    await wait(780);
  }
  if (SKV.token === tok) all.forEach(x => x[0].classList.remove('cur'));
}
ACT.skPlay = () => skPlayAll();
ACT.skNext = () => skSet(Math.min(SKV.total, SKV.shown + 1));
ACT.skPrev = () => skSet(Math.max(0, SKV.shown - 1));
ACT.skAll = () => { skSet(SKV.total); skFlat().forEach(x => x[0].classList.remove('cur')); };

/* ---- Stroke Dojo: draw each stroke in order, it checks start, end and shape ---- */
const SD = { set: 'hira' };
const dojoPool = () => {
  const s = SD.set;
  if (s === 'hira') return KANA.filter(i => i.type === 'h' && i.group === 'basic' && i.ch.length === 1);
  if (s === 'kata') return KANA.filter(i => i.type === 'k' && i.group === 'basic' && i.ch.length === 1);
  return KANJI.filter(k => k.jlpt === s && k.strokes <= 9);
};
G.dojo = st => {
  st.innerHTML = `<div class="card"><h2>Stroke Dojo</h2><p class="muted">Draw each stroke of the character in the right order and direction. The dojo checks where each stroke starts and ends and how it curves. Five characters per round.</p>
    <p class="lab">Practise</p><div class="chips">${[['hira', 'Hiragana'], ['kata', 'Katakana'], ['n5', 'N5 kanji'], ['n4', 'N4 kanji']].map(c => `<button class="chip${SD.set === c[0] ? ' on' : ''}" data-act="sdSet" data-v="${c[0]}" aria-pressed="${SD.set === c[0]}">${c[1]}</button>`).join('')}</div>
    <p class="muted small">Easier kanji with up to 9 strokes are used. Stroke data loads from the internet the first time you meet a character.</p>
    <div class="row"><button class="btn lg" data-act="sdGo">Start</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>`;
};
ACT.sdSet = el => { SD.set = el.dataset.v; G.dojo($('#gstage')); };
ACT.sdGo = () => dojoRun($('#gstage'));

function resample(pts, n) {
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const tot = L[L.length - 1] || 1, out = []; let j = 0;
  for (let k = 0; k < n; k++) { const t = tot * k / (n - 1); while (j < L.length - 2 && L[j + 1] < t) j++; const seg = (L[j + 1] - L[j]) || 1, u = Math.min(1, Math.max(0, (t - L[j]) / seg)); const a = pts[j], b = pts[Math.min(j + 1, pts.length - 1)]; out.push([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]); }
  return out;
}
function refPoints(d) {
  const sv = document.createElementNS(NS, 'svg'), p = document.createElementNS(NS, 'path'); sv.style.cssText = 'position:absolute;width:0;height:0;visibility:hidden'; p.setAttribute('d', d); sv.appendChild(p); document.body.appendChild(sv);
  const L = p.getTotalLength(), pts = []; for (let i = 0; i <= 24; i++) { const q = p.getPointAtLength(L * i / 24); pts.push([q.x, q.y]); } sv.remove(); return pts;
}
function judge(user, ref) {
  const u = resample(user, 16), r = resample(ref, 16), d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  let m = 0, mr = 0; for (let i = 0; i < 16; i++) { m += d(u[i], r[i]); mr += d(u[i], r[15 - i]); } m /= 16; mr /= 16;
  const rl = r.reduce((s, p, i) => i ? s + d(p, r[i - 1]) : 0, 0), ul = u.reduce((s, p, i) => i ? s + d(p, u[i - 1]) : 0, 0);
  const ok = m < 17 && d(u[0], r[0]) < 25 && d(u[15], r[15]) < 25 && (rl < 8 || ul > rl * 0.45);
  return { ok, reversed: !ok && mr < 17 && mr < m * 0.75 };
}
async function dojoRun(st) {
  const items = sample(dojoPool(), 5); let ci = 0, perfect = 0, totalMiss = 0, doneChars = 0;
  const token = {}; GAME = { stop() { token.dead = true; } };
  const loadChar = async () => {
    const it = items[ci], ch = it.ch;
    st.innerHTML = `<div class="ghud"><span>Character <b>${ci + 1}/${items.length}</b></span><span>Mistakes <b id="sdm">0</b></span><span>Stroke <b id="sdn">1</b></span></div><p class="muted ctr">Loading…</p>`;
    let paths; try { paths = await loadStrokes(ch); } catch (e) { st.innerHTML = '<div class="card"><h2>Could not load stroke data</h2><p class="muted">The dojo needs the stroke files, which load from the internet the first time. Check your connection and try again.</p><div class="row"><button class="btn" data-act="sdGo">Try again</button><button class="btn ghost" data-act="gexit">Back to games</button></div></div>'; return; }
    if (token.dead) return;
    const refs = paths.map(refPoints); let k = 0, miss = 0, hintOn = false, drawing = null;
    st.innerHTML = `<div class="ghud"><span>Character <b>${ci + 1}/${items.length}</b></span><span>Mistakes <b id="sdm">0</b></span><span>Stroke <b id="sdn">1</b>/${paths.length}</span></div>
      <p class="hint ctr" id="sdh">Draw stroke 1. ${isKana(it) ? esc(it.ro) : esc(it.mean)}</p>
      <div class="dojo"><svg id="sdsvg" viewBox="0 0 109 109" aria-label="Drawing area">${GRID}<g id="sdref">${paths.map(d => `<path class="skp hide" d="${d}" pathLength="1"/>`).join('')}</g><path id="sdhint" class="skp hintp hide" d="" pathLength="1"/><polyline id="sduser" class="skuser" points=""/></svg></div>
      <div class="row ctr"><button class="btn ghost" id="sdhintbtn">Show next stroke</button><button class="btn ghost" id="sdskip">Skip character</button></div>${SK_ATTR}`;
    const svg = $('#sdsvg', st), poly = $('#sduser', st), refEls = $$('#sdref .skp', st), hintP = $('#sdhint', st), h = $('#sdh', st);
    const pt = e => { const r = svg.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 109, (e.clientY - r.top) / r.height * 109]; };
    const hud = () => { $('#sdm', st).textContent = totalMiss + miss; $('#sdn', st).textContent = Math.min(k + 1, paths.length); };
    const showHint = () => { hintP.setAttribute('d', paths[k]); hintP.classList.remove('hide'); hintP.style.transition = 'none'; hintP.style.strokeDashoffset = 1; void hintP.getBoundingClientRect(); hintP.style.transition = 'stroke-dashoffset .7s ease-in-out'; hintP.style.strokeDashoffset = 0; };
    svg.addEventListener('pointerdown', e => { if (k >= paths.length) return; e.preventDefault(); svg.setPointerCapture(e.pointerId); drawing = [pt(e)]; poly.setAttribute('points', drawing[0].join(',')); hintP.classList.add('hide'); });
    svg.addEventListener('pointermove', e => { if (!drawing) return; drawing.push(pt(e)); poly.setAttribute('points', drawing.map(p => p.join(',')).join(' ')); });
    const endDraw = async () => {
      if (!drawing) return; const pts = drawing; drawing = null; poly.setAttribute('points', '');
      if (pts.length < 2) return;
      const res = judge(pts, refs[k]);
      if (res.ok) {
        sfx.ok(); const p = refEls[k]; p.classList.remove('hide'); p.classList.add('good'); p.style.strokeDashoffset = 0; k++; hud();
        if (k >= paths.length) {
          doneChars++; if (miss <= Math.max(1, Math.floor(paths.length / 3))) { perfect++; flag('dojo'); touch(it.id, true); } totalMiss += miss;
          h.textContent = miss === 0 ? 'Perfect!' : 'Done with ' + miss + ' mistake' + (miss === 1 ? '' : 's') + '.';
          setTimeout(() => { if (token.dead) return; ci++; if (ci >= items.length) finish(); else loadChar(); }, 900);
        } else h.textContent = 'Good. Now stroke ' + (k + 1) + '.';
      } else {
        miss++; sfx.no(); shakeEl(svg); hud(); h.textContent = res.reversed ? 'Right stroke, wrong direction. Check where it starts.' : 'Not quite. The ' + ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'][k] + ' stroke is different. Try again or use the hint.';
        if (miss >= 3 && !hintOn) { hintOn = true; showHint(); }
      }
    };
    svg.addEventListener('pointerup', endDraw); svg.addEventListener('pointercancel', () => { drawing = null; poly.setAttribute('points', ''); });
    $('#sdhintbtn', st).onclick = () => { if (k < paths.length) showHint(); };
    $('#sdskip', st).onclick = () => { totalMiss += paths.length; ci++; if (ci >= items.length) finish(); else loadChar(); };
  };
  const finish = () => { GAME = null; finishGame('dojo', perfect * 20 + Math.max(0, doneChars * 5 - totalMiss * 2), [[perfect + '/' + items.length, 'clean characters'], [totalMiss, 'mistakes'], [SD.set === 'hira' ? 'Hiragana' : SD.set === 'kata' ? 'Katakana' : SD.set.toUpperCase(), 'set']], [], Math.min(40, perfect * 8 + doneChars * 2)); };
  loadChar();
}

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

/* ============ DEX ============ */
const DEX_TABS = [['hira', 'Hiragana'], ['kata', 'Katakana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary'], ['phrase', 'Phrases']];
const tabBar = (tabs, cur, key) => '<div class="tabs" role="tablist">' + tabs.map(t =>
  `<button class="tab${t[0] === cur ? ' on' : ''}" role="tab" aria-selected="${t[0] === cur}" data-act="ui" data-k="${key}" data-v="${t[0]}"${DECKS[t[0]] ? ` style="--c:var(${DECKS[t[0]].color})"` : ''}>${esc(t[1])}</button>`).join('') + '</div>';

const passFilter = it => { const L = lvl(it.id), f = UI.dexFilter; return f === 'all' || (f === 'new' && L === 0) || (f === 'learning' && (L === 1 || L === 2)) || (f === 'mastered' && L === 3); };

function viewDex() {
  return `<section class="page">
    <header class="ph"><p class="eyebrow">図鑑 · Dex</p><h1>Every character, one entry each</h1>
    <p class="sub">Open an entry to hear it, see examples and practise writing it. Entries fill with colour as you learn them.</p></header>
    ${tabBar(DEX_TABS, UI.dex, 'dex')}
    <div id="dexbody">${dexBody()}</div></section>`;
}
function dexBody() {
  const k = UI.dex, d = DECKS[k], s = deckStat(k), n = d.items.length;
  const kana = k === 'hira' || k === 'kata';
  let h = `<div class="deckbar" style="--c:var(${d.color})"><div class="deckinfo"><div><b>${s[3]}</b> of ${n} mastered <span class="muted">· ${s[1] + s[2]} in progress · ${s[0]} new</span></div>${segBar(k)}</div>
    <div class="row">
      <button class="btn" data-act="studyDeck" data-v="${k}">Study these</button>
      <button class="btn ghost" data-act="quizDeck" data-v="${k}">Quiz</button>
      ${kana ? `<button class="btn ghost" data-act="rushDeck" data-v="${k}">Typing game</button>` : ''}
    </div></div>
    <div class="toolbar">
      ${chipRow([['all', 'All'], ['new', 'New'], ['learning', 'In progress'], ['mastered', 'Mastered']], UI.dexFilter, 'dexFilter')}
      ${kana ? `<button class="chip${S.set.romaji ? ' on' : ''}" data-act="toggleRomaji" aria-pressed="${S.set.romaji}">Show romaji</button>`
        : `<label class="search"><span class="vh">Search</span><input id="dexq" data-input="dexq" type="search" placeholder="Search meaning, reading or character" value="${esc(UI.dexQ)}" autocomplete="off"></label>`}
    </div>`;
  if (k === 'kanji' || k === 'vocab') h += `<p class="lab">JLPT level</p>` + chipRow(LV_CHIPS, UI.lv, 'lv');
  if (k === 'kanji') h += chipRow([['all', 'All themes']].concat(KANJI_CATS), UI.dexCat, 'dexCat');
  if (k === 'vocab') h += chipRow([['all', 'All']].concat(VOCAB_CATS), UI.vocCat, 'vocCat');
  return h + `<div id="dexlist">${dexList()}</div>`;
}
const cellHTML = it => {
  const L = lvl(it.id), kana = isKana(it);
  return `<button class="cell l${L}${passFilter(it) ? '' : ' dim'}${kana ? '' : ' kj'}" data-act="detail" data-id="${esc(it.id)}" style="--c:var(${colorOf(it)})" aria-label="${esc(it.ch)} ${esc(answerOf(it))}, ${LVL_NAME[L]}">
    <span class="code">${codeOf(it)}</span><span class="glyph">${esc(it.ch)}</span>
    <span class="cap">${kana ? (S.set.romaji ? esc(it.ro) : '&nbsp;') : esc(it.mean)}</span>${it.type === 'j' ? `<span class="n5">${it.jlpt.toUpperCase()}</span>` : (it.jlpt === 'n4' ? '<span class="n5">N4</span>' : '')}</button>`;
};
function dexList() {
  const k = UI.dex, q = UI.dexQ.trim().toLowerCase();
  if (k === 'hira' || k === 'kata') {
    const type = k === 'hira' ? 'h' : 'k';
    let h = KANA_TABLE[type].map(g => `<div class="kgroup"><div class="kh"><h3>${g.title}</h3><span>${g.sub}</span></div>
      <div class="kgrid" style="--cols:${g.cols}">${g.rows.map(r => r.map(it => it ? cellHTML(it) : '<span class="gap"></span>').join('')).join('')}</div></div>`).join('');
    const pairs = type === 'h' ? [['ぬ', 'め'], ['わ', 'れ', 'ね'], ['は', 'ほ'], ['る', 'ろ'], ['さ', 'き'], ['い', 'り'], ['あ', 'お']]
      : [['シ', 'ツ'], ['ソ', 'ン'], ['ノ', 'メ'], ['ヌ', 'ス'], ['ウ', 'ワ'], ['ク', 'ケ'], ['コ', 'ユ']];
    return h + `<div class="card tip"><h3>Easy to mix up</h3><p class="muted">These sets look alike. Check the stroke direction and the angle before you answer.</p>
      <div class="look">${pairs.map(p => `<span>${p.map(c => `<b class="glyph">${c}</b>`).join('<i>/</i>')}</span>`).join('')}</div></div>`;
  }
  if (k === 'kanji') {
    const list = KANJI.filter(j => lvOk(j) && (UI.dexCat === 'all' || j.cat === UI.dexCat) && passFilter(j) &&
      (!q || j.ch.includes(q) || j.mean.toLowerCase().includes(q) || kanjiRead(j).includes(q) || j.ex.some(e => e.w.includes(q) || e.r.includes(q) || e.m.toLowerCase().includes(q))));
    if (!list.length) return '<p class="empty">No kanji match. Clear the search or the filter.</p>';
    return KANJI_CATS.filter(c => list.some(j => j.cat === c[0])).map(c => `<div class="kgroup"><div class="kh"><h3>${c[1]}</h3><span>${list.filter(j => j.cat === c[0]).length} kanji</span></div>
      <div class="kgrid kj" style="--cols:5">${list.filter(j => j.cat === c[0]).map(cellHTML).join('')}</div></div>`).join('') +
      `<p class="muted small">Tags show the JLPT level. All 103 N5 kanji are included, plus ${KANJI.filter(j => j.jlpt === 'n4').length} N4 kanji. Meanings, readings and stroke counts were checked against online kanji lists.</p>`;
  }
  if (k === 'vocab') {
    const list = VOCAB.filter(v => lvOk(v) && (UI.vocCat === 'all' || v.cat === UI.vocCat) && passFilter(v) &&
      (!q || v.ch.includes(q) || v.rd.includes(q) || v.ro.includes(q) || v.mean.toLowerCase().includes(q)));
    if (!list.length) return '<p class="empty">No words match. Clear the search or the filter.</p>';
    return `<div class="vlist">${list.map(v => `<div class="vrow l${lvl(v.id)}"><button class="vmain" data-act="detail" data-id="${esc(v.id)}">
      <span class="vjp">${esc(v.ch)}</span><span class="vmid"><span class="vrd">${esc(v.rd)}</span><span class="vro">${esc(v.ro)}</span></span><span class="vmean">${esc(v.mean)}</span></button>
      <button class="ibtn" data-act="say" data-id="${esc(v.id)}" aria-label="Listen to ${esc(v.rd)}">${SPEAK_SVG}</button></div>`).join('')}</div>`;
  }
  const sits = Array.from(new Set(PHRASES.map(p => p.sit)));
  const list = PHRASES.filter(p => passFilter(p) && (!q || p.ch.includes(q) || p.ro.toLowerCase().includes(q) || p.mean.toLowerCase().includes(q)));
  if (!list.length) return '<p class="empty">No phrases match.</p>';
  return sits.filter(s => list.some(p => p.sit === s)).map(s => `<div class="kgroup"><div class="kh"><h3>${s}</h3></div><div class="plist">${list.filter(p => p.sit === s).map(p => `
    <div class="pcard l${lvl(p.id)}"><button class="pmain" data-act="detail" data-id="${p.id}"><span class="pjp">${esc(p.ch)}</span><span class="pro">${esc(p.ro)}</span><span class="pen">${esc(p.mean)}</span></button>
    <button class="ibtn" data-act="say" data-id="${p.id}" aria-label="Listen">${SPEAK_SVG}</button></div>`).join('')}</div></div>`).join('');
}

/* ---- detail dialog ---- */
function fmtDue(x) {
  if (!x.s) return 'Not studied yet';
  const df = x.due - Date.now();
  if (df <= 0) return 'Due for review now';
  if (df < 36e5) return 'Next review in ' + Math.max(1, Math.round(df / 6e4)) + ' min';
  if (df < DAY) return 'Next review in ' + Math.round(df / 36e5) + ' h';
  return 'Next review in ' + Math.round(df / DAY) + ' days';
}
function openDetail(id) {
  const it = ITEMS[id]; if (!it) return;
  const x = peek(id), L = lvl(id), kana = isKana(it);
  let body = '';
  if (kana) {
    const other = it.type === 'h' ? toKata(it.ch) : toHira(it.ch);
    const grp = KANA_TABLE[it.type].find(g => g.key === it.group);
    const words = VOCAB.filter(v => toHira(v.rd).indexOf(toHira(it.ch)) === 0).slice(0, 4);
    body = `<div class="big glyph${it.ch.length > 1 ? ' two' : ''}">${esc(it.ch)}</div><p class="rom">${esc(it.ro)}</p>
      <dl class="kv"><dt>${it.type === 'h' ? 'Katakana' : 'Hiragana'}</dt><dd class="glyph">${esc(other)}</dd><dt>Group</dt><dd>${grp.title}</dd><dt>Typing</dt><dd>${accepted(it).join(', ')}</dd></dl>
      ${words.length ? `<h4>Words that start with ${esc(it.ch)}</h4><ul class="exl">${words.map(w => `<li><b>${esc(w.ch)}</b> <span>${esc(w.rd)}</span> <i>${esc(w.mean)}</i></li>`).join('')}</ul>` : ''}`;
  } else if (it.type === 'j') {
    body = `<div class="big glyph">${esc(it.ch)}</div><p class="rom">${esc(it.mean)}</p>
      <dl class="kv"><dt>On'yomi</dt><dd>${it.on.map(esc).join('、') || '-'}</dd><dt>Kun'yomi</dt><dd>${it.kun.map(esc).join('、') || '-'}</dd><dt>Strokes</dt><dd>${it.strokes}</dd>
      <dt>Theme</dt><dd>${esc(KANJI_CATS.find(c => c[0] === it.cat)[1])}${it.jlpt ? ' · JLPT ' + it.jlpt.toUpperCase() : ''}</dd></dl>
      <h4>Examples</h4><ul class="exl">${it.ex.map(e => `<li><b>${esc(e.w)}</b> <span>${esc(e.r)}</span> <i>${esc(e.m)}</i></li>`).join('')}</ul>`;
  } else {
    const ks = Array.from(it.ch).filter(c => KANJI_BY_CH[c]).filter((c, i, a) => a.indexOf(c) === i);
    body = `<div class="big txt">${esc(it.ch)}</div><p class="rom">${esc(it.mean)}</p>
      <dl class="kv"><dt>Reading</dt><dd>${esc(it.rd)}</dd><dt>Romaji</dt><dd>${esc(it.ro)}</dd>${it.sit ? `<dt>Use</dt><dd>${esc(it.sit)}</dd>` : `<dt>Topic</dt><dd>${esc(VOCAB_CATS.find(c => c[0] === it.cat)[1])}</dd>`}</dl>
      ${ks.length ? `<h4>Kanji inside</h4><div class="chips">${ks.map(c => `<button class="chip" data-act="detail" data-id="j:${c}"><span class="glyph">${c}</span> ${esc(KANJI_BY_CH[c].mean)}</button>`).join('')}</div>` : ''}`;
  }
  const stroke = (kana || it.type === 'j') ? strokePanel(it.ch) : '';
  const pad = (kana || it.type === 'j') ? `<h4>Practice writing</h4><div class="pad"><span class="padg glyph${it.ch.length > 1 ? ' two' : ''}">${esc(it.ch)}</span><canvas id="pad" width="640" height="640" aria-label="Drawing area"></canvas></div>
      <div class="row"><button class="btn ghost" data-act="padclear">Clear</button><button class="btn ghost" data-act="padguide">Hide guide</button></div>` : '';
  openModal(`<button class="x" data-act="closeModal" aria-label="Close">×</button>
    <p class="eyebrow" style="--c:var(${colorOf(it)})"><span class="dotc"></span>${codeOf(it)} · ${TYPE_NAME[it.type]} · ${LVL_NAME[L]}</p>${body}
    <div class="row mt"><button class="btn" data-act="say" data-id="${esc(id)}">${SPEAK_SVG} Listen</button>
      ${L < 3 ? `<button class="btn ghost" data-act="known" data-id="${esc(id)}">I already know this</button>` : ''}
      ${x.s ? `<button class="btn ghost" data-act="resetItem" data-id="${esc(id)}">Reset progress</button>` : ''}</div>
    <p class="muted small">${fmtDue(x)}${x.s ? ` · ${x.c} correct, ${x.w} missed` : ''}</p>${stroke}${pad}`);
  initPad(); if (stroke) initStrokes();
}
function initPad() {
  const c = $('#pad'); if (!c) return;
  const ctx = c.getContext('2d'); ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#000';
  let down = false, last = null;
  const pos = e => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * c.width / r.width, (e.clientY - r.top) * c.height / r.height]; };
  c.addEventListener('pointerdown', e => { down = true; last = pos(e); try { c.setPointerCapture(e.pointerId); } catch (x) {} ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(last[0] + 0.1, last[1]); ctx.stroke(); });
  c.addEventListener('pointermove', e => { if (!down) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(p[0], p[1]); ctx.stroke(); last = p; });
  ['pointerup', 'pointercancel'].forEach(t => c.addEventListener(t, () => { down = false; }));
}

/* ---- dex actions ---- */
ACT.detail = el => openDetail(el.dataset.id);
ACT.closeModal = () => closeModal();
ACT.say = el => { const it = ITEMS[el.dataset.id]; if (it) speak(speakText(it)); };
ACT.toggleRomaji = () => { S.set.romaji = !S.set.romaji; save(); render(); };
ACT.known = el => { markKnown(el.dataset.id); openDetail(el.dataset.id); if (route() !== 'games') render(); toast('Marked as mastered'); };
ACT.resetItem = el => { resetItem(el.dataset.id); openDetail(el.dataset.id); if (route() !== 'games') render(); };
ACT.padclear = () => { const c = $('#pad'); if (c) c.getContext('2d').clearRect(0, 0, c.width, c.height); };
ACT.padguide = el => { const p = $('.pad'); const h = p.classList.toggle('hide'); el.textContent = h ? 'Show guide' : 'Hide guide'; };
ACT.studyDeck = el => { UI.cfg.deck = el.dataset.v; UI.cfg.mode = 'mix'; UI.study = 'cards'; SESS = null; go('study'); };
ACT.quizDeck = el => { UI.quiz.deck = el.dataset.v; UI.study = 'quiz'; QZ = null; go('study'); };
ACT.rushDeck = el => { UI.game.deck = el.dataset.v === 'hira' ? 'h' : 'k'; go('games'); setTimeout(() => startGame('rush'), 30); };

/* ============ STUDY ============ */
let SESS = null, QZ = null, LQ = null;

function viewStudy() {
  return `<section class="page"><header class="ph"><p class="eyebrow">勉強 · Study</p><h1>Daily practice</h1>
    <p class="sub">Flashcards bring items back just before you would forget them. Quizzes and lessons fill the gaps.</p></header>
    ${tabBar([['cards', 'Flashcards'], ['quiz', 'Quiz'], ['lessons', 'Lessons']], UI.study, 'study')}
    <div id="studybody">${UI.study === 'cards' ? (SESS ? sessHTML() : cardSetup()) : UI.study === 'quiz' ? (QZ ? quizHTML() : quizSetup()) : lessonsHTML()}</div></section>`;
}

/* ---------- flashcards ---------- */
function cardSetup() {
  const c = UI.cfg, due = dueList(c.deck).length, nw = newList(c.deck).length;
  return `<div class="card setup"><h2>Flashcard session</h2>
    <p class="lab">Deck</p>${chipRow([['all', 'Everything']].concat(DECK_ORDER.map(k => [k, DECKS[k].label])), c.deck, 'cfg.deck')}
    <p class="lab">JLPT level</p>${chipRow(LV_CHIPS, UI.lv, 'lv')}
    <p class="lab">What to study</p>${chipRow([['mix', 'Due, then new'], ['due', 'Only due'], ['new', 'Only new']], c.mode, 'cfg.mode')}
    <p class="lab">Cards in this session</p>${chipRow([[5, '5'], [10, '10'], [20, '20'], [40, '40']], c.size, 'cfg.size')}
    <p class="lab">Direction</p>${chipRow([['mixed', 'Mixed'], ['fwd', 'Character to meaning'], ['rev', 'Meaning to character']], c.dir, 'cfg.dir')}
    <p class="muted">In this deck: <b>${due}</b> due for review, <b>${nw}</b> new.</p>
    <button class="btn lg" data-act="startCards">Start session</button></div>`;
}
function newCardState() {
  const id = SESS.q[SESS.i], c = UI.cfg;
  SESS.reveal = peek(id).s === 0;
  SESS.dir = c.dir === 'mixed' ? (Math.random() < 0.5 ? 'fwd' : 'rev') : c.dir;
}
function backHTML(it, dir) {
  const g = dir === 'rev' ? `<div class="big ${isKana(it) || it.type === 'j' ? 'glyph' : 'txt'}">${esc(it.ch)}</div>` : '';
  let d;
  if (isKana(it)) d = `<p class="rom">${esc(it.ro)}</p><p class="muted">${it.type === 'h' ? 'Katakana' : 'Hiragana'}: <span class="glyph">${esc(it.type === 'h' ? toKata(it.ch) : toHira(it.ch))}</span></p>`;
  else if (it.type === 'j') d = `<p class="rom">${esc(it.mean)}</p><p class="rd">${esc(kanjiRead(it))}</p><p class="muted">${esc(it.ex[0].w)} ${esc(it.ex[0].r)} · ${esc(it.ex[0].m)}</p>`;
  else d = `<p class="rom">${esc(it.mean)}</p><p class="rd">${esc(it.rd)}</p><p class="muted">${esc(it.ro)}</p>`;
  return g + d;
}
function nextHint(id, g) {
  const x = peek(id);
  if (g === 0) return '10 min';
  const b = g === 1 ? Math.max(1, x.b) : Math.min(5, x.b + (g === 3 ? 2 : 1));
  const d = g === 1 ? Math.max(1 / 24, GAP[b] * 0.5) : GAP[b];
  return d < 1 ? '1 h' : (d < 2 ? Math.round(d * 10) / 10 : Math.round(d)) + (d <= 1 ? ' day' : ' days');
}
function sessHTML() {
  if (SESS.done) {
    const gain = today().xp - SESS.xp0, acc = pct(SESS.good, SESS.graded);
    return `<div class="card done"><p class="eyebrow">Session complete</p><h2>Nice work</h2>
      <div class="stats3"><div><b>${SESS.graded}</b><span>cards rated</span></div><div><b>${acc}%</b><span>remembered</span></div><div><b>+${gain}</b><span>XP</span></div></div>
      ${SESS.newCount ? `<p class="muted">${SESS.newCount} new item${SESS.newCount > 1 ? 's' : ''} added to your reviews.</p>` : ''}
      <div class="row"><button class="btn" data-act="startCards">Another session</button><button class="btn ghost" data-act="endSess">Back to setup</button></div></div>`;
  }
  const id = SESS.q[SESS.i], it = ITEMS[id], dir = SESS.dir, isNew = peek(id).s === 0;
  const frontBig = isKana(it) || it.type === 'j' ? `<div class="big glyph">${esc(it.ch)}</div>` : `<div class="big txt">${esc(it.ch)}</div>`;
  const front = dir === 'fwd' ? frontBig + `<p class="muted">${isKana(it) ? 'How is it read?' : 'What does it mean?'}</p>`
    : `<p class="rom">${esc(answerOf(it))}</p><p class="muted">${isKana(it) ? 'Which character is this?' : 'How is it written?'}</p>`;
  return `<div class="sess"><div class="sbar"><div class="prog"><i style="width:${(SESS.i / SESS.q.length * 100).toFixed(1)}%"></i></div><span>${SESS.i + 1} / ${SESS.q.length}</span><button class="link" data-act="endSess">End session</button></div>
    <div class="flash" style="--c:var(${colorOf(it)})">
      <p class="eyebrow"><span class="dotc"></span>${codeOf(it)} · ${TYPE_NAME[it.type]}${isNew ? ' · New' : ''}</p>
      ${front}
      ${SESS.reveal ? `<hr>${backHTML(it, dir)}<button class="ibtn sp" data-act="say" data-id="${esc(id)}" aria-label="Listen">${SPEAK_SVG}</button>` : `<button class="btn lg" data-act="flip">Show answer <kbd>Space</kbd></button>`}
    </div>
    ${SESS.reveal ? `<p class="muted ctr">${isNew ? 'New item. Study it, then rate it.' : 'How well did you remember it?'}</p><div class="grades">
      ${[['Again', 0], ['Hard', 1], ['Good', 2], ['Easy', 3]].map(g => `<button class="gbtn g${g[1]}" data-act="grade" data-g="${g[1]}"><b>${g[0]}</b><span>${nextHint(id, g[1])}</span><kbd>${g[1] + 1}</kbd></button>`).join('')}</div>` : ''}</div>`;
}
ACT.startCards = () => {
  const c = UI.cfg, due = dueList(c.deck), nw = newList(c.deck);
  let q = c.mode === 'due' ? due : c.mode === 'new' ? nw : due.concat(nw);
  q = q.slice(0, +c.size);
  if (!q.length) { toast(c.mode === 'due' ? 'Nothing is due in this deck yet' : 'Nothing to study with these settings'); return; }
  SESS = { q: q.map(i => i.id), i: 0, reveal: false, dir: 'fwd', graded: 0, good: 0, newCount: 0, xp0: today().xp, done: false };
  newCardState(); render();
};
ACT.flip = () => { if (SESS && !SESS.reveal) { SESS.reveal = true; render(); } };
ACT.grade = el => {
  if (!SESS || !SESS.reveal || SESS.done) return;
  const g = +el.dataset.g, id = SESS.q[SESS.i];
  const wasNew = grade(id, g);
  SESS.graded++; if (g > 0) SESS.good++; if (wasNew) SESS.newCount++;
  g === 0 ? sfx.no() : sfx.ok();
  if (g === 0) SESS.q.splice(Math.min(SESS.q.length, SESS.i + 4), 0, id);
  SESS.i++;
  if (SESS.i >= SESS.q.length) { SESS.done = true; sfx.win(); } else newCardState();
  render();
};
ACT.endSess = () => { SESS = null; render(); };

/* ---------- quiz ---------- */
const QDECKS = [['hira', 'Hiragana'], ['kata', 'Katakana'], ['kana', 'Both kana'], ['kanji', 'Kanji'], ['vocab', 'Vocabulary'], ['phrase', 'Phrases']];
const quizPool = deck => (deck === 'kana' ? KANA : DECKS[deck].items).filter(lvOk);
function quizSetup() {
  const q = UI.quiz, canRead = q.deck === 'kanji' || q.deck === 'vocab';
  return `<div class="card setup"><h2>Multiple-choice quiz</h2>
    <p class="lab">Topic</p>${chipRow(QDECKS, q.deck, 'quiz.deck')}
    <p class="lab">Question style</p>${chipRow([['mixed', 'Mixed'], ['fwd', 'See it, pick the answer'], ['rev', 'See the answer, pick it']].concat(canRead ? [['read', 'Readings']] : []), (q.dir === 'read' && !canRead) ? 'mixed' : q.dir, 'quiz.dir')}
    <p class="lab">Questions</p>${chipRow([[10, '10'], [20, '20'], [30, '30']], q.size, 'quiz.size')}
    <p class="muted">Questions favour items you have not mastered yet. Correct answers earn 1 XP each, plus 5 for a perfect score.</p>
    <button class="btn lg" data-act="startQuiz">Start quiz</button></div>`;
}
function readingsOf(it) { return it.type === 'j' ? it.on.concat(it.kun) : [it.rd]; }
function buildQuestion(it, pool, dir) {
  const kana = isKana(it);
  if (dir === 'read' && !(it.type === 'j' || (it.type === 'v' && it.rd !== it.ch))) dir = Math.random() < 0.5 ? 'fwd' : 'rev';
  let correct, label, cands, show, ask;
  if (dir === 'fwd') { correct = answerOf(it); cands = pool.map(answerOf); ask = kana ? 'How is this read?' : 'What does this mean?'; show = it.ch; }
  else if (dir === 'rev') { correct = it.ch; cands = pool.map(o => o.ch); ask = kana ? 'Which character is “' + it.ro + '”?' : 'Which one means “' + it.mean + '”?'; show = null; }
  else {
    const mine = readingsOf(it); correct = mine[rnd(mine.length)];
    cands = pool.filter(o => o.type === it.type && o.id !== it.id).reduce((a, o) => a.concat(readingsOf(o)), []).filter(r => mine.indexOf(r) < 0);
    ask = 'Which is a reading of this?'; show = it.ch;
  }
  const same = it.cat ? pool.filter(o => o.cat === it.cat).map(dir === 'rev' ? (o => o.ch) : answerOf) : [];
  let c = shuffle(Array.from(new Set((dir === 'read' ? cands : same.concat(cands)).filter(t => t && t !== correct))));
  if (dir !== 'read') c = shuffle(Array.from(new Set(cands.filter(t => t && t !== correct)))).slice(0, 12);
  const near = dir !== 'read' && same.length ? shuffle(same.filter(t => t !== correct)).slice(0, 2) : [];
  let wrong = Array.from(new Set(near.concat(c))).slice(0, 3);
  const opts = shuffle(wrong.concat([correct])).map(t => ({ t, ok: t === correct }));
  return { id: it.id, dir, show, ask, opts, glyphOpts: dir === 'rev' && (kana || it.type === 'j'), showKind: (kana || it.type === 'j') ? 'glyph' : 'txt' };
}
ACT.startQuiz = () => {
  const q = UI.quiz, pool = quizPool(q.deck), size = Math.min(+q.size, pool.length);
  const weak = shuffle(pool.filter(i => lvl(i.id) < 3)), strong = shuffle(pool.filter(i => lvl(i.id) >= 3));
  const ns = Math.min(strong.length, Math.floor(size * 0.25));
  let picked = weak.slice(0, size - ns).concat(strong.slice(0, ns));
  if (picked.length < size) picked = picked.concat(shuffle(pool.filter(i => picked.indexOf(i) < 0)).slice(0, size - picked.length));
  const canRead = q.deck === 'kanji' || q.deck === 'vocab';
  const dirs = q.dir === 'read' && !canRead ? 'mixed' : q.dir;
  QZ = { qs: shuffle(picked).map(it => buildQuestion(it, pool, dirs === 'mixed' ? (Math.random() < 0.5 ? 'fwd' : 'rev') : dirs)), i: 0, sel: null, score: 0, missed: [], xp0: today().xp, done: false };
  render();
};
function quizHTML() {
  if (QZ.done) {
    const n = QZ.qs.length, gain = today().xp - QZ.xp0, perfect = QZ.score === n;
    return `<div class="card done"><p class="eyebrow">${perfect ? 'Perfect score' : 'Quiz complete'}</p><h2>${QZ.score} / ${n}</h2>
      <div class="stats3"><div><b>${pct(QZ.score, n)}%</b><span>correct</span></div><div><b>${QZ.missed.length}</b><span>to review</span></div><div><b>+${gain}</b><span>XP</span></div></div>
      ${QZ.missed.length ? `<h4>Review these</h4><ul class="exl">${QZ.missed.map(id => { const it = ITEMS[id]; return `<li><button class="link" data-act="detail" data-id="${esc(id)}"><b class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</b></button> <i>${esc(answerOf(it))}${it.type === 'j' ? ' · ' + esc(kanjiRead(it)) : ''}</i></li>`; }).join('')}</ul>` : ''}
      <div class="row"><button class="btn" data-act="startQuiz">Quiz again</button><button class="btn ghost" data-act="endQuiz">Back to setup</button></div></div>`;
  }
  const q = QZ.qs[QZ.i], done = QZ.sel != null;
  return `<div class="sess"><div class="sbar"><div class="prog"><i style="width:${(QZ.i / QZ.qs.length * 100).toFixed(1)}%"></i></div><span>${QZ.i + 1} / ${QZ.qs.length}</span><button class="link" data-act="endQuiz">End quiz</button></div>
    <div class="flash" style="--c:var(${colorOf(ITEMS[q.id])})">
      ${q.show ? `<div class="big ${q.showKind}">${esc(q.show)}</div>` : ''}<p class="${q.show ? 'muted' : 'rom'}">${esc(q.ask)}</p></div>
    <div class="opts">${q.opts.map((o, i) => `<button class="opt${done ? (o.ok ? ' ok' : (QZ.sel === i ? ' bad' : ' off')) : ''}" data-act="qans" data-i="${i}" ${done ? 'disabled' : ''}><kbd>${i + 1}</kbd><span class="${q.glyphOpts ? 'glyph gl' : ''}">${esc(o.t)}</span></button>`).join('')}</div>
    ${done ? `<div class="fb ${q.opts[QZ.sel].ok ? 'ok' : 'bad'}"><b>${q.opts[QZ.sel].ok ? 'Correct' : 'Not quite'}</b> ${q.opts[QZ.sel].ok ? '' : 'The answer is ' + esc(q.opts.find(o => o.ok).t) + '.'}
      <button class="btn" data-act="qnext">${QZ.i + 1 >= QZ.qs.length ? 'See results' : 'Next'} <kbd>Enter</kbd></button></div>` : ''}</div>`;
}
ACT.qans = el => {
  if (!QZ || QZ.sel != null || QZ.done) return;
  const k = +el.dataset.i, q = QZ.qs[QZ.i]; QZ.sel = k;
  const ok = q.opts[k].ok; touch(q.id, ok);
  if (ok) { QZ.score++; addXP(1); sfx.ok(); } else { QZ.missed.push(q.id); sfx.no(); }
  render();
};
ACT.qnext = () => {
  if (!QZ || QZ.sel == null) return;
  QZ.sel = null; QZ.i++;
  if (QZ.i >= QZ.qs.length) {
    QZ.done = true;
    if (QZ.score === QZ.qs.length) { S.perfect++; addXP(5); sfx.win(); } checkAch(); save();
  }
  render();
};
ACT.endQuiz = () => { QZ = null; render(); };

/* ---------- lessons ---------- */
function lessonsHTML() {
  if (UI.lesson) return lessonView(LESSONS.find(l => l.id === UI.lesson));
  const list = LESSONS.filter(l => UI.lv === 'all' || l.lv === UI.lv), done = LESSONS.filter(l => S.lessons[l.id]).length;
  const card = l => `<button class="lcard${S.lessons[l.id] ? ' done' : ''}" data-act="openLesson" data-id="${l.id}"><span class="ljp">${l.jp}</span><span class="lt">${esc(l.title)}</span><span class="ls">${S.lessons[l.id] ? 'Completed' : 'Lesson ' + (LESSONS.indexOf(l) + 1)}</span></button>`;
  return `<p class="muted">${done} of ${LESSONS.length} lessons complete. Answer every question at the end of a lesson to finish it and earn 10 XP.</p>${chipRow(LV_CHIPS, UI.lv, 'lv')}
    ${['n5', 'n4'].map(L => list.some(l => l.lv === L) ? `<div class="sech"><h2>JLPT ${L.toUpperCase()}</h2></div><div class="lessons">${list.filter(l => l.lv === L).map(card).join('')}</div>` : '').join('')}`;
}
function lessonView(l) {
  if (!LQ || LQ.id !== l.id) LQ = { id: l.id, a: l.quiz.map(() => null) };
  const all = LQ.a.every(a => a != null), right = LQ.a.every((a, i) => a === l.quiz[i].a);
  return `<div class="lesson"><button class="link" data-act="closeLesson">‹ All lessons</button>
    <p class="eyebrow">${l.jp}</p><h2>${esc(l.title)}</h2><div class="prose">${l.body}</div>
    <h4>Examples</h4><ul class="exl ex2">${l.ex.map(e => `<li><span class="jp">${esc(e[0])}</span><span class="r">${esc(e[1])}</span><i>${esc(e[2])}</i><button class="ibtn" data-act="sayText" data-t="${esc(e[0])}" aria-label="Listen">${SPEAK_SVG}</button></li>`).join('')}</ul>
    <h4>Check yourself</h4>${l.quiz.map((q, qi) => `<div class="lq"><p><b>${qi + 1}.</b> ${esc(q.q)}</p><div class="opts">${q.o.map((o, oi) => {
      const a = LQ.a[qi], st = a == null ? '' : (oi === q.a ? ' ok' : (a === oi ? ' bad' : ' off'));
      return `<button class="opt${st}" data-act="lans" data-q="${qi}" data-i="${oi}" ${a != null ? 'disabled' : ''}><span>${esc(o)}</span></button>`;
    }).join('')}</div></div>`).join('')}
    ${all ? `<div class="fb ${right ? 'ok' : 'bad'}"><b>${right ? (S.lessons[l.id] ? 'Lesson complete' : 'Lesson complete, +10 XP') : 'Almost'}</b> ${right ? '' : 'Review the examples and try again.'}
      ${right ? '' : '<button class="btn" data-act="lretry">Try again</button>'}</div>` : ''}</div>`;
}
ACT.openLesson = el => { UI.lesson = el.dataset.id; LQ = null; render(); window.scrollTo(0, 0); };
ACT.closeLesson = () => { UI.lesson = null; LQ = null; render(); };
ACT.sayText = el => speak(el.dataset.t);
ACT.lans = el => {
  const l = LESSONS.find(x => x.id === UI.lesson); if (!l || !LQ) return;
  const qi = +el.dataset.q, oi = +el.dataset.i; if (LQ.a[qi] != null) return;
  LQ.a[qi] = oi; l.quiz[qi].a === oi ? sfx.ok() : sfx.no();
  if (LQ.a.every(a => a != null) && LQ.a.every((a, i) => a === l.quiz[i].a) && !S.lessons[l.id]) { S.lessons[l.id] = Date.now(); addXP(10); sfx.win(); }
  render();
};
ACT.lretry = () => { LQ = null; render(); };

/* ============ TODAY ============ */
const firstNewDeck = () => DECK_ORDER.find(k => newList(k).length) || 'hira';
function wordOfDay() { const ov = ctCfg().wotd; if (ov && ITEMS[ov]) return ITEMS[ov]; let h = 0; dayKey().split('').forEach(c => { h = (h * 31 + c.charCodeAt(0)) >>> 0; }); return VOCAB[h % VOCAB.length]; }
const fmtDate = d => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

function viewToday() {
  const d = today(), g = S.set.goal, p = Math.min(1, d.xp / g), C = 2 * Math.PI * 44, li = levelInfo();
  const due = dueList().length, nd = firstNewDeck(), nn = newList(nd).length, st = streak();
  const missions = [['Reach your daily goal of ' + g + ' XP', Math.min(d.xp, g), g, 'study'], ['Review or learn 10 cards', Math.min(d.rev + d.learn, 10), 10, 'study'],
    ['Learn 3 new items', Math.min(d.learn, 3), 3, 'study'], ['Play one minigame', Math.min(d.games, 1), 1, 'games']];
  const days = []; for (let i = 6; i >= 0; i--) { const x = new Date(); x.setDate(x.getDate() - i); days.push([x, S.days[dayKey(x)] || { xp: 0, met: false }]); }
  const mx = Math.max(g, ...days.map(x => x[1].xp));
  const w = wordOfDay(), weak = Object.keys(S.items).filter(id => ITEMS[id] && S.items[id].w > 0 && lvl(id) < 3).sort((a, b) => S.items[b].w - S.items[a].w).slice(0, 6);
  const total = ALL.length, mastered = ALL.filter(i => lvl(i.id) === 3).length;
  const ban = ctCfg().announcement ? `<div class="banner" role="note"><b>News</b> ${esc(ctCfg().announcement)}</div>` : '';
  const pose = d.met ? 'cheer' : (new Date().getHours() >= 23 || new Date().getHours() < 5) ? 'sleep' : due ? 'think' : 'wave';
  const say = d.met ? 'Goal reached! Yatta!' : pose === 'sleep' ? 'Zzz… study tomorrow?' : due ? due + ' card' + (due === 1 ? '' : 's') + ' waiting for you.' : st ? st + ' days in a row. Don’t stop now.' : 'Ready when you are!';
  return `<section class="page today">${ban}
    <header class="ph"><p class="eyebrow">今日 · ${fmtDate(new Date())}</p><h1>${d.met ? 'Goal reached. Anything more is a bonus.' : st ? 'Keep your ' + st + '-day streak going' : 'Start your first streak today'}</h1></header>
    <div class="pet card"><button class="plain petb" data-act="petSay" aria-label="Pet the panda">${pandaFull({ pose, w: 104 })}</button><div><p class="lab">Your panda</p><p class="bubble" id="petsay">${esc(say)}</p></div></div>
    <div class="hero">
      <div class="goal card"><svg class="ring" viewBox="0 0 100 100" role="img" aria-label="${d.xp} of ${g} XP today"><circle cx="50" cy="50" r="44" class="rbg"/><circle cx="50" cy="50" r="44" class="rfg${d.met ? ' met' : ''}" stroke-dasharray="${(C * p).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 50 50)"/>
        <text x="50" y="49" class="rt1">${d.xp}</text><text x="50" y="64" class="rt2">of ${g} XP</text></svg>
        <div class="gtxt"><p class="lab">Level ${li.l}</p><div class="prog thin"><i style="width:${(li.p * 100).toFixed(0)}%"></i></div><p class="muted small">${S.xp - li.lo} / ${li.hi - li.lo} XP to level ${li.l + 1}</p>
        <p class="muted small">${st} day streak · ${mastered} of ${total} items mastered</p></div></div>
      <div class="go card"><p class="lab">Next up</p>
        <button class="btn lg" data-act="reviewDue" ${due ? '' : 'disabled'}>Review ${due} due card${due === 1 ? '' : 's'}</button>
        <button class="btn lg ghost" data-act="learnNew">Learn ${Math.min(5, nn)} new ${DECKS[nd].label.toLowerCase()}</button>
        <button class="btn ghost" data-act="goto" data-v="games">Play a minigame</button></div></div>

    <div class="cols2">
      <div class="card"><h2>Today’s missions</h2><ul class="missions">${missions.map(m => `<li class="${m[1] >= m[2] ? 'done' : ''}"><button data-act="goto" data-v="${m[3]}"><span class="chk" aria-hidden="true"></span><span class="mtx">${esc(m[0])}</span><span class="mp">${m[1]}/${m[2]}</span></button></li>`).join('')}</ul></div>
      <div class="card"><h2>Last 7 days</h2><div class="week" style="--goal:${(g / mx * 100).toFixed(1)}%">${days.map(x => `<div class="wb${x[1].met ? ' met' : ''}"><i style="height:${Math.max(x[1].xp ? 4 : 0, x[1].xp / mx * 100).toFixed(1)}%" title="${x[1].xp} XP"></i><span>${x[0].toLocaleDateString('en', { weekday: 'short' })}</span></div>`).join('')}</div>
        <p class="muted small">The line marks your daily goal.</p></div></div>

    <div class="card"><h2>Your dex</h2><div class="dexrows">${DECK_ORDER.map(k => { const s = deckStat(k), n = DECKS[k].items.length; return `<button class="dexrow" data-act="dexGo" data-v="${k}" style="--c:var(${DECKS[k].color})"><span class="dn"><i class="dotc"></i>${DECKS[k].label}</span>${segBar(k)}<span class="dc"><b>${s[3]}</b>/${n}</span></button>`; }).join('')}</div>
      <p class="muted small">Bar colours show mastered, familiar and learning items.</p></div>

    <div class="cols2">
      <div class="card word"><p class="lab">Word of the day</p><div class="wj">${esc(w.ch)}</div><p class="wr">${esc(w.rd)} · ${esc(w.ro)}</p><p class="wm">${esc(w.mean)}</p>
        <div class="row"><button class="btn ghost" data-act="say" data-id="${esc(w.id)}">${SPEAK_SVG} Listen</button><button class="btn ghost" data-act="detail" data-id="${esc(w.id)}">Details</button></div></div>
      <div class="card"><h2>Needs attention</h2>${weak.length ? `<div class="chips">${weak.map(id => { const it = ITEMS[id]; return `<button class="chip" data-act="detail" data-id="${esc(id)}"><span class="${isKana(it) || it.type === 'j' ? 'glyph' : ''}">${esc(it.ch)}</span> ${esc(answerOf(it))}</button>`; }).join('')}</div><p class="muted small">Items you have missed most often.</p>` : '<p class="muted">Nothing yet. Items you miss will collect here so you can revisit them.</p>'}</div></div>
  </section>`;
}
ACT.goto = el => { go(el.dataset.v); };
ACT.dexGo = el => { UI.dex = el.dataset.v; go('dex'); };
const startFromHome = (deck, mode, size) => { UI.cfg.deck = deck; UI.cfg.mode = mode; UI.cfg.size = size; UI.study = 'cards'; SESS = null; go('study'); ACT.startCards(); };
ACT.reviewDue = () => startFromHome('all', 'due', 20);
ACT.learnNew = () => startFromHome(firstNewDeck(), 'new', 5);

/* ---------- settings helpers (used by Profile) ---------- */
const PR = { code: '', confirm: false, restoreMsg: '' };
ACT.setPref = el => { const k = el.dataset.k, v = el.dataset.v; S.set[k] = k === 'goal' ? +v : v; applyPrefs(); save(); refreshChips(); render(); };
ACT.togglePref = el => { S.set[el.dataset.k] = !S.set[el.dataset.k]; save(); render(); };
ACT.mkBackup = () => { try { PR.code = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) { PR.code = ''; toast('Could not create a code'); } render(); };
ACT.cpBackup = () => copyText(PR.code);
ACT.rsBackup = () => {
  const t = ($('#bkin') || {}).value || '';
  try {
    const o = JSON.parse(decodeURIComponent(escape(atob(t.trim()))));
    if (!o || typeof o !== 'object' || !o.items || !o.set) throw new Error('shape');
    S = mergeState(o);
    save(); applyPrefs(); PR.restoreMsg = 'Restored.'; PR.code = ''; refreshChips(); render(); toast('Progress restored');
  } catch (e) { PR.restoreMsg = 'That code could not be read. Check that you copied all of it.'; const m = $('#rsmsg'); if (m) m.textContent = PR.restoreMsg; }
};
ACT.resetAsk = () => { PR.confirm = true; render(); };
ACT.resetNo = () => { PR.confirm = false; render(); };
ACT.resetDo = () => { const p = S.prof; S = DEF(); S.prof = p; save(); PR.confirm = false; PR.code = ''; SESS = null; QZ = null; applyPrefs(); refreshChips(); render(); toast('Progress erased'); };

const PET_LINES = ['Kon’nichiwa!', 'Ganbatte!', 'Nyam. Ramen?', 'One more card?', 'Sugoi!', 'Practice makes perfect, 練習!', 'Tail wag. Wag wag.', 'Don’t forget your review!'];
ACT.petSay = () => { const e = $('#petsay'); if (e) e.textContent = PET_LINES[Math.floor(Math.random() * PET_LINES.length)]; };

/* ============ MAIN ============ */
const VIEWS = { start: viewStart, today: viewToday, dex: viewDex, study: viewStudy, games: viewGames, profile: viewProfile };
const LANG_GATED = { today: 1, dex: 1, study: 1, games: 1 };
let lastRoute = null;
function render() {
  stopGame();
  const r = route(), y = window.scrollY, soon = LANG_GATED[r] && S.prof.lang && S.prof.lang !== 'ja';
  $('#view').innerHTML = soon ? viewSoon() : VIEWS[r]();
  $$('.nav a').forEach(a => { const on = a.dataset.r === r; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  refreshChips();
  window.scrollTo(0, r === lastRoute ? y : 0); lastRoute = r;
}

ACT.ui = el => {
  const k = el.dataset.k, v = el.dataset.v, parts = k.split('.');
  let o = UI; for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
  o[parts[parts.length - 1]] = /^\d+$/.test(v) ? +v : v;
  if (k === 'dex') UI.dexQ = '';
  if (k === 'study' && v !== 'lessons') UI.lesson = null;
  render();
};

document.addEventListener('click', e => {
  if (e.target.id === 'modal') { closeModal(); return; }
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const f = ACT[el.dataset.act];
  if (f) { e.preventDefault(); f(el, e); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset && t.dataset.input === 'dexq') { UI.dexQ = t.value; const l = $('#dexlist'); if (l) l.innerHTML = dexList(); }
});
document.addEventListener('keydown', e => {
  const tg = e.target;
  if (e.key === 'Enter' && tg && tg.dataset && tg.dataset.enter && ACT[tg.dataset.enter]) { e.preventDefault(); ACT[tg.dataset.enter](tg, e); return; }
  if (!$('#modal').hidden) { if (e.key === 'Escape') closeModal(); return; }
  const tag = (tg.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || e.ctrlKey || e.metaKey || e.altKey) return;
  if (route() !== 'study') return;
  if (UI.study === 'cards' && SESS && !SESS.done) {
    if (!SESS.reveal && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ACT.flip(); }
    else if (SESS.reveal && ['1', '2', '3', '4'].indexOf(e.key) >= 0) ACT.grade({ dataset: { g: String(+e.key - 1) } });
  } else if (UI.study === 'quiz' && QZ && !QZ.done) {
    if (QZ.sel == null && ['1', '2', '3', '4'].indexOf(e.key) >= 0 && +e.key <= QZ.qs[QZ.i].opts.length) ACT.qans({ dataset: { i: String(+e.key - 1) } });
    else if (QZ.sel != null && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); ACT.qnext(); }
  }
});
window.addEventListener('hashchange', render);

loadState(); applyPrefs();
try { speechSynthesis.getVoices(); } catch (e) {}
document.body.insertAdjacentHTML('afterbegin', pandaSprite());
{ const m0 = $('.mark'); if (m0) m0.innerHTML = pandaMark(40); }
render();
fxInit();
