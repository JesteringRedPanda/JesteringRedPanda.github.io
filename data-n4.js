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
