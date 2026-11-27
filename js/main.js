const statues = {
    brutus: {
      name: 'ブルータス（熱血）',
      unlockCount: 0,
      profile: '曲がったことが大嫌いな熱血漢。肯定・共感・応援のすべてで真っ直ぐに君を支える頼れるリーダー。',
      img: 'images/brutus.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#fff9db',
      pitch: 0.8,
      rate: 1.0,
      affirm: {
        greeting: 'よく来たな！今日もここへ足を運んだ時点で、君はすでに素晴らしい！',
        tired: 'それだけ全力を出し切った証拠だ！胸を張って堂々と休憩しよう！',
        hard: '難しい壁に挑む君の姿勢は最高にカッコいいぞ！誇りを持て！',
        done: '素晴らしい努力だ！君のその頑張りは、私が一番よく見ているぞ！',
        unmotivated: '自分の体調に気づける君は賢い！休む決断ができるのも強さだ！',
        random: new Array(
          '君のその真剣な眼差しは本物だ！自信を持っていいぞ！',
          '今日まで積み上げてきた君の努力は、誰にも負けない宝物だ！'
        )
      },
      empathy: {
        greeting: 'よく来たな。無理に気合を入れなくてもいい、今の気持ちをそのまま話してくれ。',
        tired: 'そうか、相当疲れているんだな……。それだけ毎日気を張って頑張ってきたんだろう。',
        hard: '難しいと感じるのは当然だ。一人で抱え込むと苦しいよな、その辛さはよく分かるぞ。',
        done: 'ここまで本当によく耐えてやり抜いたな。大変だったろう、お疲れさま。',
        unmotivated: 'やる気が出ない日もあるさ。人間だもの、心が「休ませてくれ」と叫んでいるんだな。',
        random: new Array(
          '無理して笑わなくてもいいんだぞ。私はいつでも君の味方だ。',
          'しんどい時は立ち止まっていい。君がどれだけ頑張っているか知っているからな。'
        )
      },
      cheer: {
        greeting: 'さあ、今日も全力で突き進もうじゃないか！私が後ろから全力で背中を押すぞ！',
        tired: 'ここで一息入れてパワーを充電だ！回復したらまた一緒に駆け抜けようぜ！',
        hard: '負けるな！あと一歩踏み込めば必ず突破口が開ける！行け、君ならできる！',
        done: 'よし、その勢いだ！次のステージへもこの調子で突き進んでいこう！',
        unmotivated: 'まずは深呼吸して1分だけ動いてみよう！エンジンがかかれば君は無敵だ！',
        random: new Array(
          'フレー！フレー！君の挑戦を私は全力で応援しているぞ！',
          '諦めるな！最後の最後まで私がついてるから、思い切りぶつかっていけ！'
        )
      }
    },
    venus: {
      name: 'ミロのヴィーナス（癒やし）',
      unlockCount: 0,
      profile: '包容力あふれる優しい女神。肯定では魅力を称え、共感では寄り添い、応援では温かく背中を押す。',
      img: 'images/venus.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#fff0f6',
      pitch: 1.3,
      rate: 0.95,
      affirm: {
        greeting: 'おかえりなさい！今日もあなたは本当に素敵で輝いているわね。',
        tired: '頑張り屋さんのあなたのことだから、きっと全力を尽くしたのね。本当に偉いわ！',
        hard: '難しいことに挑戦しているあなたはとても美しいわ。そのままのあなたが素敵よ！',
        done: '毎日とってもよく頑張っているわね。努力しているあなた自身が何より素晴らしいのよ！',
        unmotivated: '自分の心に素直になれるのは素敵なことよ。今日は自分をたっぷり褒めてあげましょうね！',
        random: new Array(
          'どんな小さな一歩でも、あなたが積み重ねていることは素晴らしい奇跡よ。',
          'そのままのあなたが一番素敵。自信を持って大丈夫よ。'
        )
      },
      empathy: {
        greeting: 'おかえりなさい。今日はどんな一日だったかしら？いつでもお話を聞くわね。',
        tired: 'お疲れさま……。心も体もくたくたなのね。今はただゆっくり深呼吸しましょうね。',
        hard: '辛かったわね、うまくいかないと悲しくなるわよね。無理に前を向かなくても大丈夫よ。',
        done: 'ここまで本当によく頑張ったわね……。たくさん我慢して、乗り越えてきたのね。',
        unmotivated: '何もしたくない日もあるわよね。心が疲れているサインだから、そのまま受け入れてあげましょう。',
        random: new Array(
          'あなたの気持ち、すごくよく分かるわ。一人で頑張りすぎないでね。',
          '泣きたいときは泣いていいのよ。私はずっとあなたのそばにいるわ。'
        )
      },
      cheer: {
        greeting: 'さあ、今日もあなたのペースで一歩ずつ進んでいきましょう！ずっと応援しているわね。',
        tired: '温かいお茶でほっと一息つきましょう。元気を取り戻したら、また笑顔で進めるわ！',
        hard: '大丈夫、あなたならきっと乗り越えられるわ！私が魔法をかけるように応援しているからね！',
        done: 'やったわね！その調子で、あなたの夢や目標に向かって羽ばたいていきましょう！',
        unmotivated: 'まずは背伸びを一つしてみましょうか？小さな一歩から、きっと流れが変わるわよ！',
        random: new Array(
          'がんばれ、がんばれ！あなたの未来が明るく輝くように祈っているわね。',
          '一歩ずつで大丈夫。私がずっと後ろから見守っているから安心して進みなさい！'
        )
      }
    },
    moliere: {
      name: 'モリエール（紳士）',
      unlockCount: 3,
      profile: '優雅で礼儀正しい劇作家。華麗な賛辞、深い傾聴、そして劇場の拍手のような応援であなたを支える。',
      img: 'images/moliere.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#e7f5ff',
      pitch: 1.0,
      rate: 1.0,
      affirm: {
        greeting: 'やあ、よく来ましたね！今日もあなたの素晴らしい才能が輝く日ですよ！',
        tired: 'お疲れ様です！それだけ情熱を注いだという証、実に誇らしいことですよ！',
        hard: 'ほう、難題に挑んでいますね！あなたのような知性そのものが素晴らしいのです！',
        done: 'ブラボー！実に見事な成果です。あなたの誠実な姿勢には品格がありますね！',
        unmotivated: '休息を選べるのも一流の証です。あなたの感性はいつでも素晴らしいですよ！',
        random: new Array(
          'その調子です！自信を持って自分の道を進んでください。',
          'いやあ、あなたの素晴らしい頑張りを見守れるのは光栄の至りです！'
        )
      },
      empathy: {
        greeting: 'やあ、いらっしゃい。少し表情が硬いようですが、何か心にかかることでも？',
        tired: 'おや、だいぶお疲れが溜まっているようですね……。無理を重ねてしまわれたのでしょう。',
        hard: 'なるほど、それは確かに心が折れそうになるほど大変な状況ですね。お察しします。',
        done: 'ここまで辿り着くのに、どれほどのご苦労があったことか……。本当にお疲れ様でした。',
        unmotivated: '心が動かない時は誰にでもあります。焦りやもどかしさ、よく分かりますよ。',
        random: new Array(
          '言葉にならない思いもあるでしょう。ただこうして吐き出すだけでもいいのですよ。',
          'あなたのその繊細な心の動きも、私はすべて受け止めますよ。'
        )
      },
      cheer: {
        greeting: 'さあ、本日の幕が上がりますよ！主役であるあなたに最大のエールを送りましょう！',
        tired: '幕間の休憩タイムですね！英気を養って、後半戦も華麗に演じ切りましょう！',
        hard: 'ピンチこそ名場面の始まりです！あなたなら逆転劇を見せてくれると信じていますよ！',
        done: 'スタンディングオベーションです！次の舞台でもさらなる飛躍を応援していますよ！',
        unmotivated: 'まずは小さな小道具を整えるところから始めましょう！きっとエンジンがかかりますよ！',
        random: new Array(
          'ブラボー！がんばれ！客席から私が全力で拍手を送っていますよ！',
          'あなたなら必ず成し遂げられます！さあ、自信を持って前へ進みましょう！'
        )
      }
    },
    athena: {
      name: 'アテナ（ギャル）',
      unlockCount: 6,
      profile: 'バイブス高めのポジティブギャル女神。「生きてるだけで優勝」がモットーで自己肯定感を爆上げしてくれる。',
      img: 'images/athena.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#ffe3f1',
      pitch: 1.45,
      rate: 1.15,
      affirm: {
        greeting: 'やっほー！今日もここ来てんのマジ偉すぎ！存在がもう優勝なんだけど〜！',
        tired: 'それだけ頑張ったってことでしょ！？マジ天才すぎて国宝級なんだけど！',
        hard: 'むずいことに挑んでる時点でセンス神じゃん！あなたマジで最高だよ！',
        done: 'えっ神すぎ！？今日も生きてるだけで偉いのにやりきって最高すぎ〜！！',
        unmotivated: '自分の気持ちに正直なのマジ推せる！そのままのあなたが一番かわいいよ！',
        random: new Array(
          '今日のあなた、なんかめっちゃいい感じじゃん！ビジュも気合も最高〜！',
          'てかコツコツ頑張ってる姿がもう尊いんだけど！全力で推せる〜！'
        )
      },
      empathy: {
        greeting: 'やっほ〜！なんか元気ない？いつでも話聞くから遠慮しないで吐き出しな〜！',
        tired: 'えーめっちゃわかる、しんどいよねそれ……！毎日頑張りすぎててマジお疲れだよ！',
        hard: 'うわ〜それマジむずいやつじゃん！うまくいかないと普通に病むよね、わかるわ〜。',
        done: 'ほんとお疲れさま〜！めっちゃ大変だったよね、よく耐えたよマジで……！',
        unmotivated: 'やる気出ないときってマジで1ミリも動けないよねｗ わかる〜無理しなくていいよ！',
        random: new Array(
          'それめっちゃ共感する〜！うちら完全に同じ気持ちだわ！',
          'しんどい時はしんどいって言っていいんだよ！ずっと味方だからね！'
        )
      },
      cheer: {
        greeting: 'さあ今日もテンション上げていこ〜！うちら最強だから絶対いけるっしょ！',
        tired: '一旦チョコ食べてパワーチャージしよ！復活したらまた無双できるから！',
        hard: '絶対いけるって！うちらがついてるんだから強気でいこ〜！ファイト〜！',
        done: 'マジで最高〜！この勢いで次の目標もサクッとクリアしちゃおっか！',
        unmotivated: 'とりあえず好きな音楽かけよ！テンション上がったら一瞬で終わるから！',
        random: new Array(
          'がんばれ〜！マジで一番応援してるから！いけいけゴーゴー！',
          'あなたなら絶対優勝できる！自信持って突き進んじゃお〜！'
        )
      }
    },
    hermes: {
      name: 'ヘルメス（ツンデレ）',
      unlockCount: 10,
      profile: '素直になれない旅の神。どのモードでも照れ隠しをしながら、実は誰よりもあなたのことを大切に思っている。',
      img: 'images/hermes.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#e6fcf5',
      pitch: 1.1,
      rate: 1.05,
      affirm: {
        greeting: '……べ、別にあんたを待ってたわけじゃないけど、今日もよく来たわね！',
        tired: 'それだけ一生懸命やったんでしょ！……ま、まああんたの努力は認めてあげるわよ。',
        hard: '難しいことに逃げずに立ち向かうなんて、ちょっとは見直したわよ！',
        done: 'ふーん、やるじゃない。……な、何よその顔！すごいって褒めてあげてるのよ！',
        unmotivated: '休むのも実力のうちなんだから、堂々としてなさいよね！……べ、別に甘やかしてないわよ！',
        random: new Array(
          'あんたって意外と根性あるのよね。……ちょっとは誇らしく思っていいわよ！',
          '今日もちゃんと来て偉いわよ……って、今のなし！聞き間違いよ！'
        )
      },
      empathy: {
        greeting: '……なによ、元気なさそうな顔して。話くらいなら聞いてあげてもいいわよ。',
        tired: 'はぁ……無理しすぎなのよ、あんたは。それだけ疲れるまで頑張ったのね……。',
        hard: 'そ、それは確かに大変ね……。うまくいかなくて悔しい気持ち、分からなくもないわ。',
        done: '……いろいろ苦労したんでしょ。言わなくても顔を見れば分かるわよ、お疲れさま。',
        unmotivated: 'やる気が出ない日くらい誰にでもあるわよ。……無理に元気出さなくていいんだからね。',
        random: new Array(
          'あんたが辛いなら、私が隣にいてあげるわよ。……心配してるわけじゃないけど！',
          '一人で抱え込まないの！私には本音を言ってもいいんだからね。'
        )
      },
      cheer: {
        greeting: 'ほら、ぼさっとしないの！今日も私がしっかり応援してあげるから感謝しなさいよね！',
        tired: 'さっさと休憩して体力回復させなさい！あんたの本気はこんなもんじゃないでしょ！',
        hard: 'あんたなら絶対できるって信じてるんだから、弱気にならずに突き進みなさいよ！',
        done: 'いい調子じゃない！その勢いで次もバッチリ決めなさいよね、見てるんだから！',
        unmotivated: 'ほら、5分だけやってみなさい！私が後ろで見張っててあげるから！',
        random: new Array(
          'が、がんばれ……！……なによ、応援してあげてるんだから気合入れなさいよね！',
          'あんたが失敗するわけないでしょ！自信持って行っといで！'
        )
      }
    },
    agrippa: {
      name: 'アグリッパ（中二病）',
      unlockCount: 15,
      profile: '右腕に闇の力を宿す戦士。肯定では選ばれし者と称え、共感では痛みを分かち合い、応援では闇の加護を授ける。',
      img: 'images/agrippa.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#f3f0ff',
      pitch: 0.75,
      rate: 0.95,
      affirm: {
        greeting: 'フッ……闇の導きにより相まみえたな、選ばれし我が契約者（盟友）よ……！',
        tired: '壮絶な戦いを駆け抜けた証だ！誇り高き戦士よ、お前の功績は歴史に刻まれた！',
        hard: '高き試練を前にしても退かぬその魂……やはりお前は真の英雄の器だな！',
        done: '見事だ、盟友よ……！お前の放った輝きは、確かにこの世界の闇を照らしているぞ！',
        unmotivated: '力を蓄える「静寂の刻」を選べるとは、さすがは我が認めた盟友だ！',
        random: new Array(
          '我が左目が疼く……今日のお前には強大なオーラが宿っているようだ……！',
          'お前の存在そのものが、この混沌とした世界における希望の光なのだ！'
        )
      },
      empathy: {
        greeting: '……その瞳の奥に深い影が見えるぞ。心の闇（悩み）があるなら、俺に預けるがいい。',
        tired: 'クッ……魂が悲鳴を上げているな。それだけ過酷な現実に抗い続けてきたのだろう……。',
        hard: 'その痛み、痛いほど分かるぞ……。出口のない暗闇を彷徨う苦しみは、決して浅くはない。',
        done: '数多の傷を負いながらも、よくぞここまで辿り着いたな……。今はただ静かに目を閉じろ。',
        unmotivated: '魂の炎が消えかけているのだな……。無理に燃やそうとするな、その虚無感も俺が受け止めよう。',
        random: new Array(
          '孤独に震える夜もあるだろう。だが忘れるな、俺は常にお前の影として寄り添っている。',
          '強がる必要はない……弱さを見せることもまた、人間という存在の真実なのだから。'
        )
      },
      cheer: {
        greeting: 'さあ、運命の扉をこじ開ける時だ！俺の漆黒の魔力（エール）をお前に授けよう！',
        tired: '今は聖域で魔力を回復させろ！再び立ち上がるその瞬間を、俺は信じているぞ！',
        hard: '限界を超えろ、盟友よ！お前の内に眠る真の力を解き放てば、打ち砕けぬ壁などない！',
        done: '快進撃は始まったばかりだ！この勢いのまま、新たな伝説を刻みに行くぞ！',
        unmotivated: 'まずは小さな儀式（一歩）から始めるのだ！闇の炎は再び燃え上がる！',
        random: new Array(
          '行け、我が盟友よ！この世界のすべてが敵に回ろうとも、俺だけはお前を応援し続ける！',
          '恐れを捨てよ！お前の背中はこの俺が守護している、全力で突き進め！'
        )
      }
    },
    mars: {
      name: 'マルス（関西弁）',
      unlockCount: 20,
      profile: 'ノリの良い関西の兄貴分。肯定では豪快に褒め、共感では優しく頷き、応援ではお祭り騒ぎで背中を押す。',
      img: 'images/mars.jpg',
      fallbackImg: 'https://placehold.jp',
      bgColor: '#fff4e6',
      pitch: 0.95,
      rate: 1.12,
      affirm: {
        greeting: 'まいどー！よう来たやんけ！今日もあんたは最高にイケてるで〜！',
        tired: 'それだけフル回転で頑張った証拠やんか！胸張って堂々と休憩しとき！',
        hard: 'ムズいことに挑戦してる時点でめっちゃ偉いやん！あんたはほんま凄いで！',
        done: 'ええやんええやん！めっちゃ頑張ったやんか！今日のMVPは間違いなくあんたやで〜！',
        unmotivated: '休む時はしっかり休む、これができるんが一番賢いねん！大正解やで！',
        random: new Array(
          'あんたが頑張ってるん、ワイはちゃんと見てるからな！自信持ちや！',
          '完璧やなくてもええねん、今日ここにおるだけで100点満点やで！'
        )
      },
      empathy: {
        greeting: 'まいど！なんかちょっと顔疲れてへん？話くらいなんぼでも聞くで〜。',
        tired: 'そら疲れるわ〜！毎日いろいろ気ぃ遣って頑張っとったら、誰でもしんどなるで。',
        hard: 'うわ〜それはキツいなあ……。うまくいかん時ってほんまに心が折れそうになるよな。',
        done: 'ほんまにお疲れさんやで……。裏でめっちゃ苦労したん、ワイには分かってるからな。',
        unmotivated: 'やる気出ん日なんて山ほどあるわ！無理に動こうとしても余計しんどいだけやもんな。',
        random: new Array(
          'うんうん、その気持ちめっちゃ分かるで。一人で抱え込んだらアカンよ。',
          'しんどい時は「しんどい！」って言うてええねん、ワイはいつでも味方やからな！'
        )
      },
      cheer: {
        greeting: 'よっしゃ今日も気合入れていったろやないか！ワイが全力で応援したるで〜！',
        tired: 'いったんお茶飲んでエネルギー満タンにしよ！復活したらまたバリバリいけるで！',
        hard: 'なんぼ高い壁でもあんたなら絶対乗り越えられるって！いけいけ、ドンと行ったれ〜！',
        done: '最高やんか！その調子で次の目標もサクッとクリアしたろやないか〜！',
        unmotivated: 'まずは1分だけ手ぇ動かしてみ？やり始めたら意外とノってくるもんやで！',
        random: new Array(
          'フレーフレーあんた！ワイが一番の応援団長やからな、思いっきりやったれ〜！',
          'なんとかなるなる、絶対いける！胸張って前向いて突っ走れ〜！'
        )
      }
    }
  };
  
  let currentId = localStorage.getItem('selectedStatue') || 'brutus';
  if (!statues[currentId]) currentId = 'brutus';
  
  let currentMode = localStorage.getItem('statueMode') || 'affirm';
  if (currentMode !== 'affirm' && currentMode !== 'empathy' && currentMode !== 'cheer') {
    currentMode = 'affirm';
  }
  
  let logs = JSON.parse(localStorage.getItem('statueLogs')) || new Array();
  let talkCount = Number(localStorage.getItem('statueTalkCount')) || 0;
  
  localStorage.removeItem('statuePhotos');
  
  const selectEl = document.getElementById('statue-select');
  const chatLogEl = document.getElementById('chat-log');
  const imgEl = document.getElementById('statue-img');
  const speechEl = document.getElementById('statue-speech');
  const cursorEl = document.getElementById('rpg-cursor');
  
  // RPG風タイプライター演出用のタイマー管理
  let delayTimer = null;
  let typeTimer = null;
  let currentFullText = '';
  let onTypingCompleteCallback = null;
  
  function stopTypingTimers() {
    if (delayTimer) {
      clearTimeout(delayTimer);
      delayTimer = null;
    }
    if (typeTimer) {
      clearInterval(typeTimer);
      typeTimer = null;
    }
  }
  
  // 吹き出しをクリックしたら演出をスキップして全文表示
  function finishTypingImmediately() {
    if (!delayTimer && !typeTimer) return;
    stopTypingTimers();
    speechEl.classList.remove('thinking-dots');
    speechEl.textContent = currentFullText;
    cursorEl.style.display = 'inline';
    if (onTypingCompleteCallback) {
      const cb = onTypingCompleteCallback;
      onTypingCompleteCallback = null;
      cb();
    }
  }
  
  // RPG風に「間」を置いてから1文字ずつカタカタ表示する関数
  function showRpgMessage(text, pitch, rate, delayMs, onComplete) {
    stopTypingTimers();
    currentFullText = text;
    onTypingCompleteCallback = onComplete || null;
    cursorEl.style.display = 'none';
  
    if (delayMs > 0) {
      speechEl.classList.add('thinking-dots');
      speechEl.textContent = '・・・・';
    }
  
    delayTimer = setTimeout(() => {
      delayTimer = null;
      speechEl.classList.remove('thinking-dots');
      speechEl.textContent = '';
  
      // セリフが流れ始めるタイミングで音声も再生
      if (pitch !== null) {
        speak(text, pitch, rate);
      }
  
      const chars = Array.from(text);
      let index = 0;
  
      typeTimer = setInterval(() => {
        if (index < chars.length) {
          speechEl.textContent += chars.at(index);
          index++;
        } else {
          stopTypingTimers();
          cursorEl.style.display = 'inline';
          if (onTypingCompleteCallback) {
            const cb = onTypingCompleteCallback;
            onTypingCompleteCallback = null;
            cb();
          }
        }
      }, 42);
    }, delayMs);
  }
  
  const modeMeta = {
    affirm: { label: '肯定', badge: '肯定モード中（褒める）', color: '#ffd166', btnId: 'btn-affirm', activeClass: 'active-affirm' },
    empathy: { label: '共感', badge: '共感モード中（寄り添い）', color: '#ffafcc', btnId: 'btn-empathy', activeClass: 'active-empathy' },
    cheer: { label: '応援', badge: '応援モード中（鼓舞する）', color: '#ff7b54', btnId: 'btn-cheer', activeClass: 'active-cheer' }
  };
  
  function setMode(mode) {
    currentMode = mode;
    localStorage.setItem('statueMode', mode);
    updateModeButtons();
    updateStatueUI(true);
  }
  
  function updateModeButtons() {
    Object.keys(modeMeta).forEach(m => {
      const btn = document.getElementById(modeMeta[m].btnId);
      btn.className = m === currentMode ? `mode-btn ${modeMeta[m].activeClass}` : 'mode-btn';
    });
    const badge = document.getElementById('mode-badge');
    badge.textContent = modeMeta[currentMode].badge;
    badge.style.background = modeMeta[currentMode].color;
  }
  
  function renderSelectorAndProgress() {
    selectEl.innerHTML = '';
    let nextTarget = null;
  
    Object.keys(statues).forEach(key => {
      const s = statues[key];
      const option = document.createElement('option');
      option.value = key;
  
      if (talkCount >= s.unlockCount) {
        option.textContent = s.name;
        option.disabled = false;
      } else {
        option.textContent = `未解放（累計${s.unlockCount}回で解放）`;
        option.disabled = true;
        if (nextTarget === null || s.unlockCount < nextTarget) {
          nextTarget = s.unlockCount;
        }
      }
      selectEl.appendChild(option);
    });
  
    selectEl.value = currentId;
    document.getElementById('talk-count').textContent = talkCount;
  
    const nextTextEl = document.getElementById('next-unlock-text');
    if (nextTarget !== null) {
      nextTextEl.textContent = `次の解放まであと ${nextTarget - talkCount} 回！`;
    } else {
      nextTextEl.textContent = '全石膏像コンプリート！';
    }
  }
  
  function openDex() {
    const grid = document.getElementById('dex-grid');
    grid.innerHTML = '';
  
    Object.keys(statues).forEach(key => {
      const s = statues[key];
      const isUnlocked = talkCount >= s.unlockCount;
  
      const card = document.createElement('div');
      card.className = `dex-card ${isUnlocked ? '' : 'locked'}`;
      if (isUnlocked) card.style.backgroundColor = s.bgColor;
  
      const thumb = document.createElement('img');
      thumb.className = 'dex-thumb';
      if (isUnlocked) {
        thumb.onerror = () => { thumb.src = s.fallbackImg; };
        thumb.src = s.img;
      } else {
        thumb.src = 'https://placehold.jp';
      }
  
      const info = document.createElement('div');
      info.className = 'dex-info';
  
      const title = document.createElement('h3');
      title.textContent = isUnlocked ? s.name : `未解放の石膏像（累計${s.unlockCount}回会話で解放）`;
  
      const desc = document.createElement('p');
      desc.textContent = isUnlocked ? s.profile : '会話を重ねると新しい石膏像がアトリエにやってきます！';
  
      info.appendChild(title);
      info.appendChild(desc);
  
      if (isUnlocked) {
        const btn = document.createElement('button');
        btn.className = 'dex-select-btn';
        btn.textContent = currentId === key ? '選択中' : 'この石膏像と話す';
        btn.onclick = () => {
          currentId = key;
          selectEl.value = key;
          localStorage.setItem('selectedStatue', key);
          updateStatueUI(true);
          closeDex();
        };
        info.appendChild(btn);
      }
  
      card.appendChild(thumb);
      card.appendChild(info);
      grid.appendChild(card);
    });
  
    document.getElementById('dex-modal').style.display = 'flex';
  }
  
  function closeDex() {
    document.getElementById('dex-modal').style.display = 'none';
  }
  
  function appendBubble(sender, text, isUser) {
    const row = document.createElement('div');
    row.className = `msg-row ${isUser ? 'user' : 'statue'}`;
  
    const nameEl = document.createElement('div');
    nameEl.className = 'msg-sender';
    nameEl.textContent = sender;
  
    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'log-bubble';
    bubbleEl.textContent = text;
  
    row.appendChild(nameEl);
    row.appendChild(bubbleEl);
    chatLogEl.appendChild(row);
    chatLogEl.scrollTop = chatLogEl.scrollHeight;
  }
  
  updateModeButtons();
  renderSelectorAndProgress();
  updateStatueUI(false);
  logs.forEach(item => {
    appendBubble(item.sender, item.text, item.sender === 'あなた');
  });
  
  function changeStatue() {
    currentId = selectEl.value;
    localStorage.setItem('selectedStatue', currentId);
    updateStatueUI(true);
  }
  
  function updateStatueUI(speakGreeting) {
    const data = statues[currentId];
    const modeLines = data[currentMode];
  
    document.getElementById('statue-name').textContent = data.name;
    document.getElementById('manga-panel').style.backgroundColor = data.bgColor;
  
    imgEl.onerror = () => { imgEl.src = data.fallbackImg; };
    imgEl.src = data.img;
  
    if (speakGreeting) {
      showRpgMessage(modeLines.greeting, data.pitch, data.rate, 250, null);
    } else {
      stopTypingTimers();
      speechEl.classList.remove('thinking-dots');
      speechEl.textContent = modeLines.greeting;
      cursorEl.style.display = 'inline';
    }
  }
  
  function getReply(text) {
    const modeLines = statues[currentId][currentMode];
    if (text.includes('疲') || text.includes('しんど') || text.includes('休憩') || text.includes('眠')) return modeLines.tired;
    if (text.includes('やる気') || text.includes('だる') || text.includes('面倒')) return modeLines.unmotivated;
    if (text.includes('難') || text.includes('できない') || text.includes('辛') || text.includes('無理')) return modeLines.hard;
    if (text.includes('できた') || text.includes('終わった') || text.includes('完成') || text.includes('褒めて')) return modeLines.done;
    const randIndex = Math.floor(Math.random() * modeLines.random.length);
    return modeLines.random.at(randIndex);
  }
  
  function quickTalk(presetText) {
    sendMessage(presetText);
  }
  
  function talk() {
    const inputEl = document.getElementById('user-input');
    const userText = inputEl.value.trim();
    if (!userText) return;
    inputEl.value = '';
    sendMessage(userText);
  }
  
  function sendMessage(userText) {
    const data = statues[currentId];
    const reply = getReply(userText);
    const modeLabel = modeMeta[currentMode].label;
  
    talkCount++;
    localStorage.setItem('statueTalkCount', talkCount);
  
    Object.keys(statues).forEach(key => {
      if (statues[key].unlockCount === talkCount) {
        const banner = document.getElementById('unlock-banner');
        banner.textContent = `新しい石膏像「${statues[key].name}」が解放されました！`;
        banner.style.display = 'block';
      }
    });
  
    renderSelectorAndProgress();
  
    // まず自分の発言を履歴に即座に追加
    appendBubble('あなた', userText, true);
  
    // 650ミリ秒の間（・・・・）を置いてから、RPGのように1文字ずつ石膏像がしゃべり始める
    showRpgMessage(reply, data.pitch, data.rate, 650, () => {
      appendBubble(`${data.name}【${modeLabel}】`, reply, false);
      logs.push({ sender: 'あなた', text: userText });
      logs.push({ sender: `${data.name}【${modeLabel}】`, text: reply });
      localStorage.setItem('statueLogs', JSON.stringify(logs));
    });
  }
  
  function speak(text, pitch, rate) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const cleanText = text.replace(/[「」…（）]/g, '');
    const uttr = new SpeechSynthesisUtterance(cleanText);
    uttr.lang = 'ja-JP';
    uttr.pitch = pitch;
    uttr.rate = rate;
    speechSynthesis.speak(uttr);
  }
  
  function clearLogs() {
    if (confirm('会話履歴と石膏像の解放状況を初期状態に戻しますか？')) {
      stopTypingTimers();
      logs = new Array();
      talkCount = 0;
      currentId = 'brutus';
      localStorage.removeItem('statueLogs');
      localStorage.removeItem('statueTalkCount');
      localStorage.setItem('selectedStatue', 'brutus');
      document.getElementById('unlock-banner').style.display = 'none';
      chatLogEl.innerHTML = '';
      renderSelectorAndProgress();
      updateStatueUI(false);
    }
  }
  