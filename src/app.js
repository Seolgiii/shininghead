const screens = {
  home: document.querySelector("#home-screen"),
  collection: document.querySelector("#collection-screen"),
  deck: document.querySelector("#deck-screen"),
  shop: document.querySelector("#shop-screen"),
  game: document.querySelector("#game-screen"),
  result: document.querySelector("#result-screen"),
};

const els = {
  app: document.querySelector(".app-shell"),
  settingsButton: document.querySelector("#settings-button"),
  settingsModal: document.querySelector("#settings-modal"),
  settingsClose: document.querySelector("#settings-close-button"),
  languageSelect: document.querySelector("#language-select"),
  soundToggle: document.querySelector("#sound-toggle"),
  collectionButton: document.querySelector("#collection-button"),
  deckButton: document.querySelector("#deck-button"),
  shopButton: document.querySelector("#shop-button"),
  collectionBack: document.querySelector("#collection-back-button"),
  deckBack: document.querySelector("#deck-back-button"),
  shopBack: document.querySelector("#shop-back-button"),
  vsButtons: document.querySelectorAll("[data-vs]"),
  back: document.querySelector("#back-button"),
  restart: document.querySelector("#restart-button"),
  plainRestart: document.querySelector("#plain-restart-button"),
  rewardAd: document.querySelector("#reward-ad-button"),
  rewardReveal: document.querySelector("#reward-reveal"),
  rewardRevealCard: document.querySelector("#reward-reveal-card"),
  detailModal: document.querySelector("#card-detail-modal"),
  detailBody: document.querySelector("#detail-body"),
  detailClose: document.querySelector("#detail-close-button"),
  ratesModal: document.querySelector("#rates-modal"),
  ratesButton: document.querySelector("#rates-button"),
  ratesClose: document.querySelector("#rates-close-button"),
  currency: document.querySelector("#currency-value"),
  shopCurrency: document.querySelector("#shop-currency-value"),
  collectionCount: document.querySelector("#collection-count"),
  collectionHint: document.querySelector("#collection-hint"),
  collectionGrid: document.querySelector("#collection-grid"),
  deckPreview: document.querySelector("#deck-preview"),
  deckStatus: document.querySelector("#deck-builder-status"),
  deckCountPill: document.querySelector("#deck-count-pill"),
  deckPoolGrid: document.querySelector("#deck-pool-grid"),
  deckPoolStatus: document.querySelector("#deck-pool-status"),
  autoDeck: document.querySelector("#auto-deck-button"),
  clearDeck: document.querySelector("#clear-deck-button"),
  pullOne: document.querySelector("#pull-one-button"),
  pullTen: document.querySelector("#pull-ten-button"),
  gachaGrid: document.querySelector("#gacha-grid"),
  gachaStatus: document.querySelector("#gacha-status"),
  mode: document.querySelector("#mode-label"),
  gameTitle: document.querySelector("#game-title"),
  roundValue: document.querySelector("#round-value"),
  score: document.querySelector("#score-value"),
  cpuScore: document.querySelector("#cpu-score-value"),
  deck: document.querySelector("#deck-count"),
  shineOwner: document.querySelector("#shine-owner"),
  shineBar: document.querySelector("#shine-bar"),
  multiplier: document.querySelector("#multiplier-value"),
  duelRound: document.querySelector("#duel-round"),
  turnBeam: document.querySelector("#turn-beam"),
  turnStatus: document.querySelector("#turn-status"),
  playerLane: document.querySelector("#player-lane"),
  cpuLane: document.querySelector("#cpu-lane"),
  playerHand: document.querySelector("#player-hand"),
  cpuHand: document.querySelector("#cpu-hand"),
  playerButton: document.querySelector("#player-card-button"),
  cpuButton: document.querySelector("#cpu-card-button"),
  playerFace: document.querySelector("#player-card-face"),
  cpuFace: document.querySelector("#cpu-card-face"),
  playerPot: document.querySelector("#player-pot"),
  cpuPot: document.querySelector("#cpu-pot"),
  playerBank: document.querySelector("#player-bank"),
  cpuBank: document.querySelector("#cpu-bank"),
  playerStatus: document.querySelector("#player-status"),
  cpuStatus: document.querySelector("#cpu-status"),
  cpuName: document.querySelector("#cpu-name"),
  flipAction: document.querySelector("#flip-action"),
  bankAction: document.querySelector("#bank-action"),
  tutorialPanel: document.querySelector("#tutorial-panel"),
  tutorialTitle: document.querySelector("#tutorial-title"),
  tutorialCopy: document.querySelector("#tutorial-copy"),
  eventTitle: document.querySelector("#event-title"),
  eventCopy: document.querySelector("#event-copy"),
  missionList: document.querySelector("#mission-list"),
  resultMissionList: document.querySelector("#result-mission-list"),
  resultKicker: document.querySelector("#result-kicker"),
  finalScoreLabel: document.querySelector("#final-score-label"),
  finalScore: document.querySelector("#final-score"),
  resultTitle: document.querySelector("#result-title"),
  resultCopy: document.querySelector("#result-copy"),
  effectLayer: document.querySelector("#effect-layer"),
  effectText: document.querySelector("#effect-text"),
  battleFlash: document.querySelector("#battle-flash"),
  battleFlashTitle: document.querySelector("#battle-flash-title"),
  battleFlashCopy: document.querySelector("#battle-flash-copy"),
};

const GRADE_POWER = { D: 0, C: 1, B: 2, A: 3, S: 4, SS: 5, SSS: 6 };
const GRADE_ORDER = ["D", "C", "B", "A", "S", "SS", "SSS"];
const BIG_FLASH_GRADES = new Set(["S", "SS", "SSS"]);
const STARTER_IDS = ["h001", "h002", "h003", "h004", "h005", "h006", "h007", "h008"];
const PULL_COST = 10;
const DECK_SIZE = 18;
const HAND_SIZE = 3;
const TYPE_LIMITS = {
  plain: 6,
  shine: 5,
  wig: 4,
  wind: 4,
  mirror: 4,
  master: 4,
  king: 3,
};
const CURRENCY_KEY = "shiny-head-coins-v2";
const COLLECTION_KEY = "shiny-head-collection-v2";
const DECK_KEY = "shiny-head-deck-v2";
const COUNT_KEY = "shiny-head-counts-v1";
const DECOR_KEY = "shiny-head-decorations-v1";
const TUTORIAL_KEY = "shiny-head-tutorial-v1";
const MISSION_KEY = "shiny-head-missions-v1";
const LANGUAGE_KEY = "shiny-head-language-v1";
const SOUND_KEY = "shiny-head-sound-v1";

const MISSIONS = [
  { id: "win3", labelKey: "missionWin3", target: 3, reward: 30 },
  { id: "pull10", labelKey: "missionPull10", target: 10, reward: 40 },
  { id: "new5", labelKey: "missionNew5", target: 5, reward: 50 },
];

const TRANSLATIONS = {
  en: {
    settingsKicker: "Settings",
    settingsTitle: "Game Settings",
    languageLabel: "Language",
    soundLabel: "Sound",
    kicker: "Flip, bank, and outshine the rival.",
    quickGoals: "Quick Goals",
    earnPulls: "Earn pulls faster",
    easyMode: "Shiny Head",
    normalMode: "Shinier Head",
    hardMode: "Blinding Head",
    vsCpu: "VS CPU",
    easyCpuName: "Shiny CPU",
    normalCpuName: "Shinier CPU",
    hardCpuName: "Blinding CPU",
    collectionButton: "Collection",
    deckButton: "Deck Builder",
    shopButton: "Shop / Gacha",
    shopKicker: "Shine Shop",
    shopTitle: "Gacha Lab",
    capsuleKicker: "Head Capsule",
    ratesKicker: "Gacha Rates",
    ratesTitle: "Drop Rate",
    pullPrice: "10 Points per Pull",
    duplicateCopy: "Duplicates are useful: every 10 copies of a head unlocks a cosmetic decoration.",
    pullOne: "Pull 1",
    pullTen: "Pull 10",
    resultsKicker: "Results",
    capsuleDrop: "Capsule Drop",
    dexKicker: "Head Dex",
    collectionTitle: "Collection",
    collectionHint: "Win CPU battles to reveal silhouettes.",
    battleDeckKicker: "Battle Deck",
    deckTitle: "Deck Builder",
    customDeck: "Custom Deck",
    yourHeads: "Your 18 Heads",
    autoFill: "Auto Fill",
    clear: "Clear",
    availableHeads: "Available Heads",
    collectionPool: "Collection Pool",
    flip: "Flip",
    bank: "Bank",
    battleAgain: "Battle Again",
    round: "Round",
    you: "You",
    decks: "Decks",
    pot: "Pot",
    bankLabel: "Bank",
    ready: "Ready",
    waiting: "Waiting",
    shield: "Shield",
    banked: "Banked",
    busted: "Busted",
    yourTurn: "Your turn",
    cpuThinking: "CPU is reading the shine...",
    matchScore: "Match Score",
    duelComplete: "Duel complete",
    playerShine: "Your Shine",
    cpuShine: "CPU Shine",
    watchAd: "Watch Ad: 2x Points",
    rewardClaimed: "Reward Claimed",
    adLoading: "Loading Ad...",
    adUnavailable: "Ad Unavailable",
    lessonFlip: "Lesson 1: Choose a card",
    lessonFlipCopy: "Your three cards are open on the right. Pick one, then read the hidden CPU hand.",
    lessonBank: "Lesson 2: Bank",
    lessonBankCopy: "Nice. Bank now to lock those points before a Head King ruins the party.",
    flipOrBank: "Pick a head or bank?",
    startCopy: "You see your three cards. CPU has three hidden cards on the left. Predict, score, then bank before the King appears.",
    gachaReady: "Win CPU battles for points, then pull new heads here.",
    needPoints: "Need {n} more points. Win CPU battles for 1, 3, or 5 points.",
    pulled: "Pulled {n} capsule{plural}. Duplicates count toward cosmetic decorations.",
    missionWin3: "Win 3 battles",
    missionPull10: "Pull 10 heads",
    missionNew5: "Find 5 new heads",
    goalBonus: "GOAL BONUS!",
    synergyNone: "No synergy yet",
    synergyPlain: "Calm Core",
    synergyShine: "Shine Engine",
    synergyWig: "Wig Shield",
    synergyWind: "Wind Trap",
    synergyMirror: "Mirror Chain",
    synergyMaster: "Master Plan",
    synergyKing: "Royal Risk",
    deckEmpty: "Tap heads from the pool below to build your deck.",
    deckStatus: "{count}/18 cards selected. {synergy} active. Type limits keep the duel readable.",
    deckPoolStatus: "{count} collected heads available. Tap a deck chip to remove it. Type limit: Plain 6, Shine 5, others 4, King 3.",
    autoFilled: "Auto-filled with your collected heads. You can still edit every slot.",
    deckFull: "Deck is full. Tap a deck chip to remove one first.",
    typeLimitReached: "{type} limit reached: {count}/{limit}. Remove one or pick another type.",
    deckCopies: "Deck x{n}",
    typeLimitShort: "{type} {count}/{limit}",
    playCard: "Play",
    hiddenHand: "Hidden card",
    selectedCard: "Selected card",
    toPot: "to pot",
    bust: "BUST",
    recoveredTitle: "Recovered the table",
    recoveredCopy: "A wild card effect fizzled, but the duel can continue.",
    tableResetTitle: "TABLE RESET",
    tableResetCopy: "The shine referee kicked the card back into play.",
    lessonClear: "LESSON CLEAR",
    comboLabel: "Combo",
    potStolen: "POT STOLEN!",
    potStolenCopy: "{actor}'s unbanked shine got eaten alive.",
    actorBusted: "{actor} busted!",
    cpuFlipped: "CPU flipped {name}",
    cpuStrike: "CPU STRIKE",
    yourStrike: "YOUR STRIKE",
    wildWind: "WILD WIND!",
    wildWindCopy: "The table shakes. Somebody should have banked earlier.",
    megaShine: "MEGA SHINE!",
    gradeHead: "{grade} HEAD!",
    pressureCopy: "+{n} pressure. Bank it or dare one more.",
    bankedFlash: "{actor} BANKED",
    bankedCopy: "{n} risky points became safe points.",
    cpuBanked: "CPU banked!",
    playerBanked: "Banked!",
    savedPotCopy: "{actor} saved the pot. Safe points cannot be stolen.",
    roundToYou: "Round to you!",
    roundToCpu: "CPU takes the round!",
    roundDraw: "Round draw!",
    roundWin: "ROUND WIN",
    cpuRound: "CPU ROUND",
    draw: "DRAW",
    newHeadFound: "New Head Found",
    cardGet: "{grade} GET!",
    unlockedDecor: "{name} unlocked",
    copiesCount: "Copies x{n}",
    locked: "Locked",
    signal: "Signal",
    decorCount: "{n} decor",
    detailType: "Type",
    detailScore: "Score",
    detailShine: "Shine",
    detailPower: "Power",
    detailCopies: "Copies",
    detailDecor: "Decor",
    none: "None",
    unscannedHead: "Unscanned Head",
    lockedCopy: "The signal is visible, but this head is not yours yet. Pull it from the Gacha Lab to reveal the full card.",
    typePlain: "Steady score",
    typeShine: "Boosts shine",
    typeWig: "Grants shield",
    typeWind: "Hazard flip",
    typeMirror: "Repeats last gain",
    typeMaster: "Huge score",
    typeKing: "Steals unbanked pot",
    flavorPlain: "A reliable shine with no tricks. Great decks need a few calm heads.",
    flavorShine: "A bright scalp that pushes the Shine Meter toward dangerous multipliers.",
    flavorWig: "A suspiciously confident hairpiece. It can save a pot from disaster once.",
    flavorWind: "A troublemaker card. Bad alone, hilarious when countered by a wig.",
    flavorMirror: "Copies the last good idea and pretends it was planned all along.",
    flavorMaster: "The kind of head that enters a room before the body does.",
    flavorKing: "The royal hazard. Bank before this crown walks in.",
    comboShieldSave: "Shield Save",
    comboMirrorJackpot: "Mirror Jackpot",
    comboCosmicMirror: "Cosmic Mirror",
    comboMirrorCopy: "Mirror Copy",
    comboWigCounter: "Wig Counter",
    comboRareSurge: "Rare Surge",
    comboMasterGuard: "Master Guard",
    comboTripleHead: "Triple Head",
    comboMasterMirror: "Master Mirror",
    comboShineStreak: "Shine Streak",
    copyShieldSave: "The shield cracked, but half the pot survived.",
    copyKingBust: "The Head King stole the unbanked pot.",
    copyMirrorJackpot: "Copied the last big flip and polished it into {n} base points.",
    copyCosmicMirror: "Cosmic Mirror refuses to copy small energy and creates its own shine.",
    copyMirrorSafe: "Mirror copies the safest shine it can find.",
    copyWigCounter: "The wig snapped back and turned wind into points.",
    copyRareSurge: "{copy} {grade} heads add +{n} pressure.",
    copyMasterGuard: "{copy} Master grants a safety shield for the next disaster.",
    copyCpuGap: "{copy}. CPU found a tiny shine gap.",
    copyCpuFumble: "{copy}. CPU fumbled the flip.",
    resultWin: "You outshined the CPU!",
    resultLose: "CPU stole the spotlight",
    resultTie: "Shiny stalemate!",
    battleReward: "Battle reward: +{n} points. {tail} Collection {owned}/{total}.",
    rewardTailWin: "Spend points in the Gacha Lab to pull heads.",
    rewardTailLose: "Win a battle to earn points.",
    rewardDoubled: "Reward doubled! +{n} extra points. Balance {balance}.",
    noAdReward: "No ad reward was granted. You can jump into another battle.",
    bestOf3: "Best of 3 Duel",
    lockTitle: "Lock it in",
    lockCopy: "Banking turns risky pot points into safe points. Try it once, then the duel opens up.",
    tipBankTitle: "Skill read: bank looks smart",
    tipBankCopy: "You are ahead with a fat pot. Banking now is boring, which means it is probably correct.",
    tipShineTitle: "Skill read: shine window",
    tipShineCopy: "Your multiplier is x{n}. One brave Flip can swing the round.",
    tipChaseTitle: "Skill read: chase",
    tipChaseCopy: "CPU is ahead. Flip for pressure unless your pot is already worth saving.",
    tipShieldTitle: "Skill read: shielded",
    tipShieldCopy: "You have a shield. This is the cleanest time to risk one more Flip.",
    tipDefaultCopy: "Flip for more pot, or bank before the Head King gets hungry."
  },
  ja: {
    settingsKicker: "\u8a2d\u5b9a",
    settingsTitle: "\u30b2\u30fc\u30e0\u8a2d\u5b9a",
    languageLabel: "\u8a00\u8a9e",
    soundLabel: "\u30b5\u30a6\u30f3\u30c9",
    kicker: "\u3081\u304f\u3063\u3066\u3001\u78ba\u4fdd\u3057\u3066\u3001\u30e9\u30a4\u30d0\u30eb\u3088\u308a\u8f1d\u3051\u3002",
    quickGoals: "\u30af\u30a4\u30c3\u30af\u76ee\u6a19",
    earnPulls: "\u30ac\u30c1\u30e3\u3092\u65e9\u304f\u56de\u305d\u3046",
    easyMode: "\u5149\u308b\u982d",
    normalMode: "\u3082\u3063\u3068\u5149\u308b\u982d",
    hardMode: "\u307e\u3076\u3057\u3059\u304e\u308b\u982d",
    collectionButton: "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",
    deckButton: "\u30c7\u30c3\u30ad\u4f5c\u6210",
    shopButton: "\u30b7\u30e7\u30c3\u30d7 / \u30ac\u30c1\u30e3",
    pullOne: "1\u56de\u5f15\u304f",
    pullTen: "10\u56de\u5f15\u304f",
    collectionTitle: "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",
    collectionHint: "CPU\u30d0\u30c8\u30eb\u3067\u30b7\u30eb\u30a8\u30c3\u30c8\u3092\u89e3\u653e\u3057\u3088\u3046\u3002",
    deckTitle: "\u30c7\u30c3\u30ad\u4f5c\u6210",
    autoFill: "\u81ea\u52d5\u7de8\u6210",
    clear: "\u30af\u30ea\u30a2",
    flip: "\u3081\u304f\u308b",
    bank: "\u78ba\u4fdd",
    battleAgain: "\u3082\u3046\u4e00\u6226",
    round: "\u30e9\u30a6\u30f3\u30c9",
    you: "\u3042\u306a\u305f",
    decks: "\u30c7\u30c3\u30ad",
    pot: "\u30dd\u30c3\u30c8",
    bankLabel: "\u78ba\u4fdd",
    yourTurn: "\u3042\u306a\u305f\u306e\u756a",
    cpuThinking: "CPU\u304c\u5149\u3092\u8aad\u3093\u3067\u3044\u308b...",
    missionWin3: "\u30d0\u30c8\u30eb\u306b3\u56de\u52dd\u3064",
    missionPull10: "\u982d\u309210\u56de\u5f15\u304f",
    missionNew5: "\u65b0\u3057\u3044\u982d\u30925\u500b\u767a\u898b",
    synergyNone: "\u30b7\u30ca\u30b8\u30fc\u306a\u3057",
    resultWin: "CPU\u3088\u308a\u8f1d\u3044\u305f!",
    resultLose: "CPU\u306b\u30b9\u30dd\u30c3\u30c8\u30e9\u30a4\u30c8\u3092\u596a\u308f\u308c\u305f",
    resultTie: "\u5149\u308b\u5f15\u304d\u5206\u3051!"
  },
  ko: {
    settingsKicker: "\uc124\uc815",
    settingsTitle: "\uac8c\uc784 \uc124\uc815",
    languageLabel: "\uc5b8\uc5b4",
    soundLabel: "\uc0ac\uc6b4\ub4dc",
    kicker: "\ub4a4\uc9d1\uace0, \uc800\uc7a5\ud558\uace0, \ub77c\uc774\ubc8c\ubcf4\ub2e4 \ub354 \ube5b\ub098\ub77c.",
    quickGoals: "\ube60\ub978 \ubaa9\ud45c",
    earnPulls: "\ubf51\uae30\ub97c \ub354 \ube60\ub974\uac8c",
    easyMode: "\ube5b\ub098\ub294 \uba38\ub9ac",
    normalMode: "\ub354 \ube5b\ub098\ub294 \uba38\ub9ac",
    hardMode: "\ub208\uc774 \uba40 \uac83 \uac19\uc740 \uba38\ub9ac",
    collectionButton: "\uceec\ub809\uc158",
    deckButton: "\ub371 \ub9cc\ub4e4\uae30",
    shopButton: "\uc0c1\uc810 / \uac00\ucc60",
    pullOne: "1\ud68c \ubf51\uae30",
    pullTen: "10\ud68c \ubf51\uae30",
    collectionTitle: "\uceec\ub809\uc158",
    collectionHint: "CPU \ubc30\ud2c0\uc5d0\uc11c \uc2e4\ub8e8\uc5e3\uc744 \ud574\uae08\ud574\ubd10.",
    deckTitle: "\ub371 \ub9cc\ub4e4\uae30",
    autoFill: "\uc790\ub3d9 \ucc44\uc6b0\uae30",
    clear: "\ube44\uc6b0\uae30",
    flip: "\ub4a4\uc9d1\uae30",
    bank: "\uc800\uc7a5",
    battleAgain: "\ub2e4\uc2dc \ubc30\ud2c0",
    round: "\ub77c\uc6b4\ub4dc",
    you: "\ub098",
    decks: "\ub371",
    pot: "\ud31f",
    bankLabel: "\uc800\uc7a5",
    yourTurn: "\ub0b4 \ucc28\ub840",
    cpuThinking: "CPU\uac00 \ube5b\uc744 \uc77d\ub294 \uc911...",
    missionWin3: "\ubc30\ud2c0 3\ud68c \uc2b9\ub9ac",
    missionPull10: "\uba38\ub9ac 10\ud68c \ubf51\uae30",
    missionNew5: "\uc0c8 \uba38\ub9ac 5\uac1c \ubc1c\uacac",
    synergyNone: "\uc2dc\ub108\uc9c0 \uc5c6\uc74c",
    resultWin: "CPU\ubcf4\ub2e4 \ub354 \ube5b\ub0ac\ub2e4!",
    resultLose: "CPU\uac00 \uc2a4\ud3ec\ud2b8\ub77c\uc774\ud2b8\ub97c \ud6d4\ucce4\ub2e4",
    resultTie: "\ube5b\ub098\ub294 \ubb34\uc2b9\ubd80!"
  }
};

Object.assign(TRANSLATIONS.ja, {
  shopKicker: "シャインショップ",
  shopTitle: "ガチャ研究所",
  capsuleKicker: "ヘッドカプセル",
  ratesKicker: "ガチャ確率",
  ratesTitle: "排出率",
  pullPrice: "1回10ポイント",
  duplicateCopy: "同じ頭も大事。10枚集めるたびに見た目用の飾りが解放されます。",
  resultsKicker: "結果",
  capsuleDrop: "カプセル結果",
  dexKicker: "ヘッド図鑑",
  battleDeckKicker: "バトルデッキ",
  customDeck: "自由デッキ",
  yourHeads: "18枚の頭",
  availableHeads: "使える頭",
  collectionPool: "コレクションプール",
  ready: "準備OK",
  waiting: "待機中",
  shield: "シールド",
  banked: "確保済み",
  busted: "爆散",
  matchScore: "対戦スコア",
  duelComplete: "対戦終了",
  playerShine: "あなたの輝き",
  cpuShine: "CPUの輝き",
  watchAd: "広告を見る: ポイント2倍",
  rewardClaimed: "報酬受け取り済み",
  adLoading: "広告を読み込み中...",
  adUnavailable: "広告なし",
  lessonFlip: "レッスン1: カードを選ぶ",
  lessonFlipCopy: "右の3枚は自分だけ見えます。1枚選んで、左のCPU手札を読みましょう。",
  lessonBank: "レッスン2: 確保",
  lessonBankCopy: "いい感じ。王様にポットを盗まれる前に、今の点を確保しましょう。",
  flipOrBank: "頭を出す？それとも確保？",
  startCopy: "右に自分の3枚、左にCPUの隠し3枚。相手を読んで得点し、王様の前に確保しよう。",
  gachaReady: "CPUバトルでポイントを集めて、新しい頭を引こう。",
  needPoints: "あと{n}ポイント必要です。CPUバトル勝利で1、3、5ポイントを獲得できます。",
  pulled: "{n}回引きました。同じ頭は飾り解放にカウントされます。",
  goalBonus: "目標達成ボーナス!",
  synergyPlain: "静かな芯",
  synergyShine: "輝きエンジン",
  synergyWig: "カツラシールド",
  synergyWind: "風の罠",
  synergyMirror: "鏡チェーン",
  synergyMaster: "達人の計画",
  synergyKing: "王様リスク",
  deckEmpty: "下のプールから頭を選んでデッキを作りましょう。",
  deckStatus: "{count}/18枚選択中。{synergy}が有効。タイプ制限で読み合いが濃くなります。",
  deckPoolStatus: "{count}枚の所持頭が使用可能。デッキのチップを押すと外せます。制限: 通常6、輝き5、その他4、王様3。",
  autoFilled: "所持頭で自動編成しました。各枠はあとから自由に編集できます。",
  deckFull: "デッキがいっぱいです。先にチップを1枚外しましょう。",
  typeLimitReached: "{type}は上限です: {count}/{limit}。外すか別タイプを選びましょう。",
  deckCopies: "デッキ x{n}",
  typeLimitShort: "{type} {count}/{limit}",
  playCard: "出す",
  hiddenHand: "隠しカード",
  selectedCard: "選択カード",
  toPot: "ポットへ",
  bust: "バースト",
  recoveredTitle: "盤面を立て直した",
  recoveredCopy: "暴れた効果は消えましたが、対戦は続行できます。",
  tableResetTitle: "盤面リセット",
  tableResetCopy: "輝き審判がカードを場に戻しました。",
  lessonClear: "レッスンクリア",
  comboLabel: "コンボ",
  potStolen: "ポット強奪!",
  potStolenCopy: "{actor}の未確保の輝きが丸ごと食われた。",
  actorBusted: "{actor}が爆散!",
  cpuFlipped: "CPUが{name}を出した",
  cpuStrike: "CPUの一撃",
  yourStrike: "あなたの一撃",
  wildWind: "荒ぶる風!",
  wildWindCopy: "盤面が揺れる。さっき確保しておけばよかったかも。",
  megaShine: "メガシャイン!",
  gradeHead: "{grade}ヘッド!",
  pressureCopy: "+{n}の圧。確保するか、もう1枚攻めるか。",
  bankedFlash: "{actor} 確保",
  bankedCopy: "危険な{n}点が安全な点になりました。",
  cpuBanked: "CPUが確保!",
  playerBanked: "確保!",
  savedPotCopy: "{actor}はポットを守った。確保点は盗まれません。",
  roundToYou: "このラウンドはあなた!",
  roundToCpu: "CPUがラウンド獲得!",
  roundDraw: "ラウンド引き分け!",
  roundWin: "ラウンド勝利",
  cpuRound: "CPUラウンド",
  draw: "引き分け",
  resultWin: "CPUより輝いた!",
  resultLose: "CPUに主役を奪われた",
  resultTie: "まぶしい引き分け!",
  battleReward: "バトル報酬: +{n}ポイント。{tail} コレクション {owned}/{total}。",
  rewardTailWin: "ガチャ研究所でポイントを使って頭を引けます。",
  rewardTailLose: "勝利するとポイントを獲得できます。",
  rewardDoubled: "報酬2倍! 追加で+{n}ポイント。残高 {balance}。",
  noAdReward: "広告報酬はありませんでした。すぐ次の対戦へ行けます。",
  bestOf3: "3本勝負",
  lockTitle: "ここで確保",
  lockCopy: "確保すると危険なポット点が安全点になります。一度試すと対戦が開きます。",
  tipBankTitle: "読み: 確保が強い",
  tipBankCopy: "大きなポットでリード中。地味に見える確保が、たぶん正解です。",
  tipShineTitle: "読み: 輝きチャンス",
  tipShineCopy: "倍率はx{n}。勇気ある1枚でラウンドがひっくり返ります。",
  tipChaseTitle: "読み: 追い上げ",
  tipChaseCopy: "CPUが先行中。ポットが惜しくないなら攻めて圧をかけましょう。",
  tipShieldTitle: "読み: シールド中",
  tipShieldCopy: "シールドがあります。もう1枚リスクを取るなら今が一番きれいです。",
  tipDefaultCopy: "さらにポットを伸ばすか、王様が来る前に確保しよう。",
  vsCpu: "CPU対戦",
  easyCpuName: "光るCPU",
  normalCpuName: "もっと光るCPU",
  hardCpuName: "まぶしすぎるCPU",
  newHeadFound: "新しい頭を発見",
  cardGet: "{grade}獲得!",
  unlockedDecor: "{name}解放",
  copiesCount: "所持 x{n}",
  locked: "未所持",
  signal: "信号",
  decorCount: "飾り {n}",
  detailType: "タイプ",
  detailScore: "点数",
  detailShine: "輝き",
  detailPower: "パワー",
  detailCopies: "枚数",
  detailDecor: "飾り",
  none: "なし",
  unscannedHead: "未解析ヘッド",
  lockedCopy: "信号だけは見えますが、まだあなたの頭ではありません。ガチャ研究所で引くとカード全体が開きます。",
  typePlain: "安定得点",
  typeShine: "輝きを増やす",
  typeWig: "シールド付与",
  typeWind: "危険な風",
  typeMirror: "前の得点を反射",
  typeMaster: "大きな得点",
  typeKing: "未確保ポットを盗む",
  flavorPlain: "クセのない安定した輝き。強いデッキには落ち着いた頭も必要です。",
  flavorShine: "危険な倍率へ輝きメーターを押し上げる明るい頭です。",
  flavorWig: "妙に自信のあるカツラ。災難からポットを一度守れます。",
  flavorWind: "単体では困るカード。カツラで返せると急に楽しくなります。",
  flavorMirror: "直前のいい動きをコピーして、最初から狙っていた顔をします。",
  flavorMaster: "本人より先に部屋へ入ってくるタイプの頭です。",
  flavorKing: "王族級の危険牌。この冠が来る前に確保しましょう。",
  comboShieldSave: "シールド救出",
  comboMirrorJackpot: "ミラージャックポット",
  comboCosmicMirror: "コズミックミラー",
  comboMirrorCopy: "ミラーコピー",
  comboWigCounter: "カツラ反撃",
  comboRareSurge: "レア急上昇",
  comboMasterGuard: "達人ガード",
  comboTripleHead: "トリプルヘッド",
  comboMasterMirror: "達人ミラー",
  comboShineStreak: "輝き連打",
  copyShieldSave: "シールドは割れたが、ポットの半分は生き残った。",
  copyKingBust: "ヘッドキングが未確保ポットを盗みました。",
  copyMirrorJackpot: "直前の大きなめくりをコピーし、{n}基本点まで磨きました。",
  copyCosmicMirror: "コズミックミラーは小さな流れをコピーせず、自分で輝きを作ります。",
  copyMirrorSafe: "ミラーは一番安全な輝きを写しました。",
  copyWigCounter: "カツラが跳ね返り、風を得点に変えました。",
  copyRareSurge: "{copy} {grade}ヘッドが+{n}の圧を追加。",
  copyMasterGuard: "{copy} 達人が次の災難に備えてシールドを付けました。",
  copyCpuGap: "{copy} CPUが小さな輝きの隙間を見つけました。",
  copyCpuFumble: "{copy} CPUがめくりで少しミスしました。"
});

Object.assign(TRANSLATIONS.ko, {
  shopKicker: "샤인 상점",
  shopTitle: "가챠 연구소",
  capsuleKicker: "머리 캡슐",
  ratesKicker: "가챠 확률",
  ratesTitle: "등장 확률",
  pullPrice: "1회 10포인트",
  duplicateCopy: "중복도 쓸모 있어. 같은 머리 10장을 모을 때마다 꾸미기 장식이 열려.",
  resultsKicker: "결과",
  capsuleDrop: "캡슐 결과",
  dexKicker: "머리 도감",
  battleDeckKicker: "배틀 덱",
  customDeck: "자유 덱",
  yourHeads: "나의 18장",
  availableHeads: "사용 가능한 머리",
  collectionPool: "컬렉션 풀",
  ready: "준비",
  waiting: "대기",
  shield: "실드",
  banked: "저장 완료",
  busted: "터짐",
  matchScore: "대전 스코어",
  duelComplete: "대전 종료",
  playerShine: "내 빛",
  cpuShine: "CPU 빛",
  watchAd: "광고 보기: 포인트 2배",
  rewardClaimed: "보상 받음",
  adLoading: "광고 불러오는 중...",
  adUnavailable: "광고 없음",
  lessonFlip: "레슨 1: 카드 선택",
  lessonFlipCopy: "오른쪽 3장은 너에게만 보여. 한 장을 고르고, 왼쪽 CPU 손패를 예측해.",
  lessonBank: "레슨 2: 저장",
  lessonBankCopy: "좋아. 머리 왕이 팟을 훔치기 전에 지금 점수를 저장해봐.",
  flipOrBank: "머리를 낼까, 저장할까?",
  startCopy: "오른쪽은 내 공개 3장, 왼쪽은 CPU의 숨겨진 3장. 상대를 읽고 점수를 만들다가 왕이 오기 전에 저장해.",
  gachaReady: "CPU 배틀로 포인트를 모은 뒤, 여기서 새 머리를 뽑아.",
  needPoints: "{n}포인트가 더 필요해. CPU 배틀 승리 보상은 1, 3, 5포인트야.",
  pulled: "{n}회 뽑았어. 중복 머리는 장식 해금에 누적돼.",
  goalBonus: "목표 보너스!",
  synergyPlain: "침착한 중심",
  synergyShine: "빛 엔진",
  synergyWig: "가발 실드",
  synergyWind: "바람 함정",
  synergyMirror: "거울 체인",
  synergyMaster: "마스터 플랜",
  synergyKing: "왕의 리스크",
  deckEmpty: "아래 풀에서 머리를 눌러 덱을 만들어.",
  deckStatus: "{count}/18장 선택됨. {synergy} 활성. 타입 제한 때문에 읽는 재미가 생겨.",
  deckPoolStatus: "{count}개의 보유 머리를 쓸 수 있어. 덱 칩을 누르면 제거돼. 제한: 기본6, 빛5, 그 외4, 왕3.",
  autoFilled: "보유 머리로 자동 편성했어. 각 슬롯은 자유롭게 다시 바꿀 수 있어.",
  deckFull: "덱이 가득 찼어. 먼저 덱 칩 하나를 제거해.",
  typeLimitReached: "{type} 타입은 한도야: {count}/{limit}. 하나 빼거나 다른 타입을 골라.",
  deckCopies: "덱 x{n}",
  typeLimitShort: "{type} {count}/{limit}",
  playCard: "내기",
  hiddenHand: "숨겨진 카드",
  selectedCard: "선택한 카드",
  toPot: "팟으로",
  bust: "폭망",
  recoveredTitle: "판 복구",
  recoveredCopy: "이상한 카드 효과가 사라졌지만, 대전은 계속돼.",
  tableResetTitle: "테이블 리셋",
  tableResetCopy: "빛나는 심판이 카드를 다시 판 위로 돌려놨어.",
  lessonClear: "레슨 클리어",
  comboLabel: "콤보",
  potStolen: "팟 강탈!",
  potStolenCopy: "{actor}의 저장 안 된 빛이 통째로 먹혔어.",
  actorBusted: "{actor} 폭망!",
  cpuFlipped: "CPU가 {name}을 냈다",
  cpuStrike: "CPU 일격",
  yourStrike: "내 일격",
  wildWind: "거친 바람!",
  wildWindCopy: "판이 흔들린다. 아까 저장했어야 했을지도.",
  megaShine: "메가 샤인!",
  gradeHead: "{grade} 머리!",
  pressureCopy: "+{n} 압박. 저장할지, 한 장 더 갈지 선택해.",
  bankedFlash: "{actor} 저장",
  bankedCopy: "위험했던 {n}점이 안전한 점수로 바뀌었어.",
  cpuBanked: "CPU 저장!",
  playerBanked: "저장!",
  savedPotCopy: "{actor}가 팟을 지켰어. 저장 점수는 빼앗기지 않아.",
  roundToYou: "이번 라운드는 내 것!",
  roundToCpu: "CPU가 라운드 획득!",
  roundDraw: "라운드 무승부!",
  roundWin: "라운드 승리",
  cpuRound: "CPU 라운드",
  draw: "무승부",
  resultWin: "CPU보다 더 빛났다!",
  resultLose: "CPU가 스포트라이트를 훔쳤다",
  resultTie: "빛나는 무승부!",
  battleReward: "배틀 보상: +{n}포인트. {tail} 컬렉션 {owned}/{total}.",
  rewardTailWin: "가챠 연구소에서 포인트로 머리를 뽑을 수 있어.",
  rewardTailLose: "승리하면 포인트를 받을 수 있어.",
  rewardDoubled: "보상 2배! 추가 +{n}포인트. 잔액 {balance}.",
  noAdReward: "광고 보상은 없었어. 바로 다음 배틀로 갈 수 있어.",
  bestOf3: "3판 2선승 대전",
  lockTitle: "여기서 저장",
  lockCopy: "저장하면 위험한 팟 점수가 안전한 점수가 돼. 한 번 저장하면 진짜 대전이 열려.",
  tipBankTitle: "판단: 저장이 좋아 보여",
  tipBankCopy: "큰 팟으로 앞서고 있어. 재미없어 보여도 지금 저장이 정답일 가능성이 높아.",
  tipShineTitle: "판단: 빛 타이밍",
  tipShineCopy: "배율이 x{n}이야. 과감한 한 장으로 라운드를 뒤집을 수 있어.",
  tipChaseTitle: "판단: 추격",
  tipChaseCopy: "CPU가 앞서고 있어. 팟이 아깝지 않다면 한 장 더 내서 압박해.",
  tipShieldTitle: "판단: 실드 있음",
  tipShieldCopy: "실드가 있어. 한 장 더 리스크를 걸기 가장 깔끔한 순간이야.",
  tipDefaultCopy: "더 큰 팟을 노리거나, 머리 왕이 오기 전에 저장해.",
  vsCpu: "CPU 대전",
  easyCpuName: "빛나는 CPU",
  normalCpuName: "더 빛나는 CPU",
  hardCpuName: "눈멀 CPU",
  newHeadFound: "새 머리 발견",
  cardGet: "{grade} 획득!",
  unlockedDecor: "{name} 해금",
  copiesCount: "보유 x{n}",
  locked: "미보유",
  signal: "신호",
  decorCount: "장식 {n}",
  detailType: "타입",
  detailScore: "점수",
  detailShine: "빛",
  detailPower: "파워",
  detailCopies: "보유",
  detailDecor: "장식",
  none: "없음",
  unscannedHead: "미확인 머리",
  lockedCopy: "신호만 보이고 아직 내 머리는 아니야. 가챠 연구소에서 뽑으면 전체 카드가 열려.",
  typePlain: "안정 점수",
  typeShine: "빛 증가",
  typeWig: "실드 부여",
  typeWind: "위험한 바람",
  typeMirror: "직전 득점 반사",
  typeMaster: "큰 점수",
  typeKing: "미저장 팟 강탈",
  flavorPlain: "특별한 장난은 없지만 믿을 수 있는 빛. 강한 덱에는 차분한 머리도 필요해.",
  flavorShine: "위험한 배율을 향해 빛 게이지를 밀어 올리는 밝은 머리야.",
  flavorWig: "수상하게 자신감 넘치는 가발. 재앙에서 팟을 한 번 살릴 수 있어.",
  flavorWind: "혼자 나오면 곤란한 카드. 가발로 받아치면 갑자기 웃겨져.",
  flavorMirror: "직전의 좋은 판단을 복사하고 원래 계획이었다는 표정을 지어.",
  flavorMaster: "몸보다 먼저 방에 들어오는 느낌의 머리야.",
  flavorKing: "왕족급 위험 카드. 이 왕관이 걷기 전에 저장해야 해.",
  comboShieldSave: "실드 세이브",
  comboMirrorJackpot: "미러 잭팟",
  comboCosmicMirror: "코스믹 미러",
  comboMirrorCopy: "미러 복사",
  comboWigCounter: "가발 반격",
  comboRareSurge: "레어 폭발",
  comboMasterGuard: "마스터 가드",
  comboTripleHead: "트리플 머리",
  comboMasterMirror: "마스터 미러",
  comboShineStreak: "빛 연타",
  copyShieldSave: "실드는 깨졌지만 팟 절반은 살아남았어.",
  copyKingBust: "머리 왕이 저장 안 된 팟을 훔쳐갔어.",
  copyMirrorJackpot: "직전의 큰 뒤집기를 복사해서 기본 {n}점으로 닦아냈어.",
  copyCosmicMirror: "코스믹 미러는 작은 흐름을 복사하지 않고 자기 빛을 만들어.",
  copyMirrorSafe: "거울이 가장 안전한 빛을 복사했어.",
  copyWigCounter: "가발이 튕겨 올라 바람을 점수로 바꿨어.",
  copyRareSurge: "{copy} {grade} 머리가 +{n} 압박을 더했어.",
  copyMasterGuard: "{copy} 마스터가 다음 재앙을 막을 실드를 줬어.",
  copyCpuGap: "{copy} CPU가 작은 빛 틈을 찾았어.",
  copyCpuFumble: "{copy} CPU가 뒤집기에서 살짝 삐끗했어."
});


const GACHA_RATES = [
  ["SSS", 1],
  ["SS", 3],
  ["S", 6],
  ["A", 12],
  ["B", 18],
  ["C", 25],
  ["D", 35],
];

const DECORATIONS = [
  { id: "sunglasses", label: "Sunglasses", className: "decor-sunglasses" },
  { id: "cap", label: "Cap", className: "decor-cap" },
  { id: "star", label: "Star Pin", className: "decor-star" },
  { id: "halo", label: "Tiny Halo", className: "decor-halo" },
  { id: "party", label: "Party Hat", className: "decor-party" },
];

const DESIGN_SEEDS = [
  ["Rookie Shine", "D", "plain", "#ffd4a8", null],
  ["Peach Dome", "D", "plain", "#ffc8b0", null],
  ["Starter Wig", "D", "wig", "#f1b894", "#2d2118"],
  ["Tiny Gust", "D", "wind", "#bde7ff", "#ffffff"],
  ["Pocket Mirror", "D", "mirror", "#c7f3df", null],
  ["Junior Glow", "D", "shine", "#ffe0c7", null],
  ["Button Monk", "D", "plain", "#efc3a5", "#6b4128"],
  ["Rookie King", "D", "king", "#ffb8c4", "#f8e15c"],
  ["Mint Monk", "C", "plain", "#c7f3df", null],
  ["Candle Scalp", "C", "shine", "#ffe2a0", null],
  ["Beanie Trick", "C", "wig", "#e7b6ff", "#553178"],
  ["Sidewind Shine", "C", "wind", "#cde7ff", "#ffffff"],
  ["Lucky Reflection", "C", "mirror", "#d4fff1", null],
  ["Polka Dome", "C", "plain", "#ffd0d0", "#8b3b3b"],
  ["Amber Smoothie", "C", "shine", "#ffd884", null],
  ["Garden Toupee", "C", "wig", "#d9f7b5", "#477233"],
  ["Tiny Crown", "C", "king", "#ffc3d2", "#f8e15c"],
  ["Chrome Rookie", "B", "shine", "#d7e8ff", null],
  ["Thunder Fringe", "B", "wind", "#bee2ff", "#ffffff"],
  ["Velvet Wig", "B", "wig", "#e4c5ff", "#24162f"],
  ["Double Mirror", "B", "mirror", "#bfffe4", null],
  ["Roundhouse Dome", "B", "plain", "#f6c69f", "#472819"],
  ["Mild Master", "B", "master", "#ffe7a9", "#e9e9e9"],
  ["Apricot Flash", "B", "shine", "#ffc09e", null],
  ["Bento Crown", "B", "king", "#ffaec6", "#f4cf42"],
  ["Laser Scalp", "B", "shine", "#f6d5ff", null],
  ["Golden Noodle", "A", "wig", "#ffd3a2", "#c8922a"],
  ["Zen Master", "A", "master", "#ffe8b8", "#ededed"],
  ["Mirror Monk", "A", "mirror", "#bbf6ea", "#4f7f71"],
  ["Cyclone Dome", "A", "wind", "#b7ddff", "#ffffff"],
  ["Sunrise Scalp", "A", "shine", "#ffca93", null],
  ["Marble Head", "A", "plain", "#dfd6c9", null],
  ["Prize Toupee", "A", "wig", "#ffd2f1", "#7e3b73"],
  ["Radiant Crown", "A", "king", "#ffb4bd", "#f8e15c"],
  ["Solar Monk", "S", "shine", "#ffe08a", null],
  ["Grand Master", "S", "master", "#fff0b8", "#ffffff"],
  ["Storm Halo", "S", "wind", "#a9d8ff", "#ffffff"],
  ["Royal Mirror", "S", "mirror", "#b6ffe7", "#1d5b52"],
  ["Diamond Dome", "S", "plain", "#d9f0ff", null],
  ["Lion Wig", "S", "wig", "#ffd18f", "#a35d16"],
  ["Flash King", "S", "king", "#ff9eb1", "#f8e15c"],
  ["Nova Scalp", "SS", "shine", "#fff09b", null],
  ["Oracle Mirror", "SS", "mirror", "#c1fff7", null],
  ["Typhoon Crown", "SS", "wind", "#9fcfff", "#ffffff"],
  ["Supreme Master", "SS", "master", "#fff2c1", "#ffffff"],
  ["Meteor Wig", "SS", "wig", "#e8c0ff", "#4f2875"],
  ["Blindlight Head", "SSS", "shine", "#fff7b0", null],
  ["Eclipse King", "SSS", "king", "#ff8da6", "#f8e15c"],
  ["Mythic Mirror", "SSS", "mirror", "#aaffed", null],
  ["Final Shine Master", "SSS", "master", "#fff5c7", "#ffffff"],
  ["Bucket Hat Bean", "D", "plain", "#f3c0a0", "#6a4a35"],
  ["Sleepy Shine", "D", "shine", "#ffcfa7", null],
  ["Paper Cap Pal", "D", "wig", "#ffd9b8", "#2f5b7a"],
  ["Dusty Breeze", "D", "wind", "#d3ecff", "#ffffff"],
  ["Snack Mirror", "D", "mirror", "#c9f4dd", null],
  ["Pebble Crown", "D", "king", "#ffcad5", "#e8c84c"],
  ["Freckle Dome", "D", "plain", "#fac7a7", null],
  ["Tiny Visor", "D", "wig", "#ffd0aa", "#264a7a"],
  ["Lime Lantern", "C", "shine", "#d9f8b5", null],
  ["Raincoat Head", "C", "plain", "#cfe7ff", "#e0bc4c"],
  ["Soft Beret", "C", "wig", "#f5c6dc", "#7a3658"],
  ["Pocket Storm", "C", "wind", "#bfe3ff", "#ffffff"],
  ["Mirror Mint", "C", "mirror", "#c6ffe8", null],
  ["Market Monk", "C", "plain", "#eec3a5", "#593b2c"],
  ["Ribbon Crown", "C", "king", "#ffc1d8", "#ffeb75"],
  ["Cactus Shine", "C", "shine", "#d7f0b6", null],
  ["Blue Beanie", "B", "wig", "#c6d9ff", "#294173"],
  ["Prism Dome", "B", "shine", "#f3d0ff", null],
  ["Arcade Master", "B", "master", "#ffe0a6", "#eaeaea"],
  ["Neon Mirror", "B", "mirror", "#b8fff0", "#273c52"],
  ["Skater Gust", "B", "wind", "#a8d2ff", "#ffffff"],
  ["Cocoa Smooth", "B", "plain", "#c89474", null],
  ["Temple Cap", "B", "wig", "#f4d19e", "#51391f"],
  ["Crown Pop", "B", "king", "#ff9fc0", "#f6d74e"],
  ["Berry Beacon", "B", "shine", "#ffb5d2", null],
  ["Pixel Dome", "B", "plain", "#d8e1f4", "#1f2535"],
  ["Comet Wig", "A", "wig", "#f5c1ff", "#6f3b9a"],
  ["Ruby Shine", "A", "shine", "#ffb0a4", null],
  ["Monsoon Halo", "A", "wind", "#a5d7ff", "#ffffff"],
  ["Sage Mirror", "A", "mirror", "#c0ffe4", "#356c5b"],
  ["Chef Master", "A", "master", "#ffe7be", "#ffffff"],
  ["Trophy Dome", "A", "plain", "#f5d185", null],
  ["Candy Crown", "A", "king", "#ff9db5", "#ffe066"],
  ["Indigo Cap", "A", "wig", "#c4c8ff", "#31356e"],
  ["Aurora Head", "S", "shine", "#e9ffbf", null],
  ["Velvet Master", "S", "master", "#f8ddb5", "#f4f4f4"],
  ["Glass Mirror", "S", "mirror", "#afffee", null],
  ["Cyclops Gust", "S", "wind", "#9fd0ff", "#ffffff"],
  ["Goldfish Wig", "S", "wig", "#ffc77c", "#cf7626"],
  ["Crown Voltage", "S", "king", "#ff91b2", "#ffe66c"],
  ["Moon Dome", "S", "plain", "#dde6ff", null],
  ["Photon Scalp", "SS", "shine", "#fff3a1", null],
  ["Nebula Mirror", "SS", "mirror", "#b6fff5", "#27234f"],
  ["Dragon Master", "SS", "master", "#ffe4b5", "#ffffff"],
  ["Rocket Wig", "SS", "wig", "#ffc8ef", "#5e246d"],
  ["Royal Storm", "SS", "wind", "#92c6ff", "#ffffff"],
  ["Supernova Crown", "SSS", "king", "#ff86a5", "#fff06f"],
  ["Sun God Scalp", "SSS", "shine", "#fff6a8", null],
  ["Cosmic Mirror", "SSS", "mirror", "#9effee", "#101b3b"],
  ["Ascended Master", "SSS", "master", "#fff2cf", "#ffffff"],
];

const TYPE_COPY = {
  plain: "Steady score",
  shine: "Boosts shine",
  wig: "Grants shield",
  wind: "Hazard flip",
  mirror: "Repeats last gain",
  master: "Huge score",
  king: "Steals unbanked pot",
};

function getTypeCopy(type) {
  const key = `type${type[0].toUpperCase()}${type.slice(1)}`;
  return t(key);
}

const CARD_CATALOG = DESIGN_SEEDS.map(([name, grade, type, color, hair], index) => {
  const power = GRADE_POWER[grade];
  const no = index + 1;
  const id = `h${String(no).padStart(3, "0")}`;
  const card = {
    no,
    id,
    name,
    grade,
    type,
    color,
    hair,
    rank: grade,
    effect: TYPE_COPY[type],
    score: 1,
    coin: 1 + Math.floor(power / 2),
    shine: 8 + power * 2,
    weight: Math.max(1, 9 - power),
  };

  if (type === "shine") {
    card.score = 3 + power;
    card.shine = 18 + power * 4;
  } else if (type === "wig") {
    card.score = 1 + Math.floor(power / 2);
    card.shine = 14 + power * 2;
    card.shield = true;
  } else if (type === "wind") {
    card.score = -2;
    card.shine = -18;
    card.weight = 5;
  } else if (type === "mirror") {
    card.score = 0;
    card.shine = 12 + power * 2;
    card.mirror = true;
  } else if (type === "master") {
    card.score = 5 + power;
    card.shine = 24 + power * 3;
    card.weight = Math.max(1, 5 - Math.floor(power / 2));
  } else if (type === "king") {
    card.score = 0;
    card.shine = -35;
    card.bust = true;
    card.weight = 2;
  } else {
    card.score = 1 + Math.floor(power / 2);
  }

  card.tier = type === "king" ? "legendary" : type === "wind" ? "hazard" : power >= 4 ? "epic" : power >= 2 ? "rare" : "common";
  return card;
});

const CPU_LEVELS = {
  easy: {
    label: "VS CPU: Shiny Head",
    shortLabel: "Shiny Head",
    name: "Shiny CPU",
    delay: 980,
    bankAt: 8,
    chaseMargin: 3,
    courage: 0.2,
    bonusChance: 0.04,
    mistakeChance: 0.28,
    coinWin: 1,
    coinLose: 0,
  },
  normal: {
    label: "VS CPU: Shinier Head",
    shortLabel: "Shinier Head",
    name: "Shinier CPU",
    delay: 760,
    bankAt: 13,
    chaseMargin: 6,
    courage: 0.48,
    bonusChance: 0.14,
    mistakeChance: 0.09,
    coinWin: 3,
    coinLose: 0,
  },
  hard: {
    label: "VS CPU: Blinding Head",
    shortLabel: "Blinding Head",
    name: "Blinding CPU",
    delay: 540,
    bankAt: 19,
    chaseMargin: 9,
    courage: 0.78,
    bonusChance: 0.28,
    mistakeChance: 0,
    coinWin: 5,
    coinLose: 0,
  },
};

const fallbackPoki = {
  init: () => Promise.resolve(),
  gameLoadingFinished: () => {},
  gameplayStart: () => {},
  gameplayStop: () => {},
  commercialBreak: () => Promise.resolve(),
  rewardedBreak: () => Promise.resolve(true),
  movePill: () => {},
};

const state = {
  difficulty: "easy",
  maxRounds: 3,
  round: 1,
  turn: "player",
  phase: "idle",
  inputLocked: false,
  sdkReady: false,
  gameplayActive: false,
  cpuTimer: null,
  effectTimer: null,
  audioContext: null,
  flips: 0,
  language: loadString(LANGUAGE_KEY, "en"),
  soundEnabled: loadString(SOUND_KEY, "on") !== "off",
  currency: loadNumber(CURRENCY_KEY, 50000),
  collection: loadCollection(),
  ownedCounts: loadObject(COUNT_KEY, {}),
  decorations: loadObject(DECOR_KEY, {}),
  currentDeckIds: loadDeck(),
  missions: loadMissions(),
  tutorial: {
    active: !loadFlag(TUTORIAL_KEY),
    step: 0,
  },
  lastAwardCoins: 0,
  lastAwardDoubled: false,
  lastUnlockedNames: [],
  actors: {
    player: createActor("You", []),
    cpu: createActor("CPU", []),
  },
  matchWins: {
    player: 0,
    cpu: 0,
  },
};

const poki = {
  get sdk() {
    return window.PokiSDK || fallbackPoki;
  },
  async init() {
    try {
      await this.sdk.init();
    } catch {
      // Local development can run without the Poki SDK.
    }

    state.sdkReady = true;
    this.sdk.gameLoadingFinished();
    if (this.sdk.movePill) this.sdk.movePill(0, 24);
  },
  gameplayStart() {
    if (state.gameplayActive) return;
    state.gameplayActive = true;
    this.sdk.gameplayStart();
  },
  gameplayStop() {
    if (!state.gameplayActive) return;
    state.gameplayActive = false;
    this.sdk.gameplayStop();
  },
  async commercialBreak() {
    state.inputLocked = true;
    try {
      await this.sdk.commercialBreak(() => {
        state.inputLocked = true;
      });
    } finally {
      state.inputLocked = false;
    }
  },
  async rewardedBreak() {
    state.inputLocked = true;
    try {
      return await this.sdk.rewardedBreak({
        size: "medium",
        onStart: () => {
          state.inputLocked = true;
        },
      });
    } finally {
      state.inputLocked = false;
    }
  },
};

function createActor(name, deck) {
  return {
    name,
    deck,
    hand: [],
    banked: 0,
    pot: 0,
    shield: false,
    shine: 0,
    lastDelta: 0,
    lastType: null,
    streakType: null,
    streakCount: 0,
    active: true,
    busted: false,
    bankedOut: false,
  };
}

function loadNumber(key, fallback) {
  try {
    const value = Number(localStorage.getItem(key));
    return Number.isFinite(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveNumber(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function loadString(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function saveString(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function loadObject(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value && typeof value === "object" && !Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveObject(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function loadFlag(key) {
  try {
    return localStorage.getItem(key) === "done";
  } catch {
    return false;
  }
}

function saveFlag(key) {
  try {
    localStorage.setItem(key, "done");
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function loadMissions() {
  const saved = loadObject(MISSION_KEY, {});
  const missions = {};
  MISSIONS.forEach((mission) => {
    const current = saved[mission.id] || {};
    missions[mission.id] = {
      progress: clamp(Number(current.progress) || 0, 0, mission.target),
      complete: Boolean(current.complete),
    };
  });
  return missions;
}

function saveMissions() {
  saveObject(MISSION_KEY, state.missions);
}

function t(key, values = {}) {
  const table = TRANSLATIONS[state.language] || TRANSLATIONS.en;
  const template = table[key] || TRANSLATIONS.en[key] || key;
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.languageSelect.value = state.language;
  els.soundToggle.checked = state.soundEnabled;
  els.collectionHint.textContent = t("collectionHint");
  els.gachaStatus.textContent = t("gachaReady");
  els.rewardAd.textContent = t("watchAd");
  if (screens.game.classList.contains("screen-active")) {
    state.actors.player.name = t("you");
    state.actors.cpu.name = t(`${state.difficulty}CpuName`);
    els.mode.textContent = `${t("vsCpu")}: ${t(`${state.difficulty}Mode`)}`;
    els.gameTitle.textContent = t("bestOf3");
    els.cpuName.textContent = state.actors.cpu.name;
    updateStats();
  }
  updateMetaUI();
  renderDeckBuilder();
  updateTurnUI();
}

function loadCollection() {
  try {
    const saved = JSON.parse(localStorage.getItem(COLLECTION_KEY) || "null");
    if (Array.isArray(saved) && saved.length) return new Set(saved);
  } catch {
    // Keep the starter collection when storage parsing fails.
  }
  return new Set(STARTER_IDS);
}

function saveCollection() {
  try {
    localStorage.setItem(COLLECTION_KEY, JSON.stringify([...state.collection]));
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function loadDeck() {
  try {
    const saved = JSON.parse(localStorage.getItem(DECK_KEY) || "null");
    if (Array.isArray(saved) && saved.length === DECK_SIZE) return saved;
  } catch {
    // Fall back to starter deck.
  }
  const deck = makeDeckFromPool(STARTER_IDS.map(getCardById), DECK_SIZE, true);
  try {
    localStorage.setItem(DECK_KEY, JSON.stringify(deck));
  } catch {
    // Storage can be unavailable in some embeds.
  }
  return deck;
}

function saveDeck() {
  try {
    localStorage.setItem(DECK_KEY, JSON.stringify(state.currentDeckIds));
  } catch {
    // Storage can be unavailable in some embeds.
  }
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("screen-active"));
  screens[name].classList.add("screen-active");
}

function getCardById(id) {
  return CARD_CATALOG.find((card) => card.id === id);
}

function getUnlockedCards() {
  return CARD_CATALOG.filter((card) => state.collection.has(card.id));
}

function shuffle(items, seed = Date.now()) {
  const copy = [...items];
  let localSeed = seed;
  for (let i = copy.length - 1; i > 0; i -= 1) {
    localSeed = (localSeed * 9301 + 49297) % 233280;
    const j = Math.floor((localSeed / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function weightedPick(cards, seedBox, mode = "player") {
  const weights = cards.map((card) => {
    const power = GRADE_POWER[card.grade];
    if (mode === "hardCpu") return Math.max(1, card.weight + power);
    if (mode === "normalCpu") return Math.max(1, card.weight + Math.floor(power / 2));
    return Math.max(1, card.weight);
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  seedBox.value = (seedBox.value * 9301 + 49297) % 233280;
  let roll = (seedBox.value / 233280) * total;
  for (let i = 0; i < cards.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return cards[i];
  }
  return cards[cards.length - 1];
}

function makeDeckFromPool(pool, size, starter = false, mode = "player", seed = Date.now()) {
  const cleanPool = pool.filter(Boolean);
  const fallbackPool = STARTER_IDS.map(getCardById).filter(Boolean);
  const usablePool = cleanPool.length ? cleanPool : fallbackPool;
  const seedBox = { value: seed };
  const deck = [];

  for (let i = 0; i < size; i += 1) {
    deck.push(weightedPick(usablePool, seedBox, mode).id);
  }

  const king = usablePool.find((card) => card.type === "king") || fallbackPool.find((card) => card.type === "king");
  if (king) deck[Math.max(3, Math.floor(size * 0.72))] = king.id;

  const wind = usablePool.find((card) => card.type === "wind");
  if (starter && wind) deck[Math.max(1, Math.floor(size * 0.42))] = wind.id;

  return shuffle(deck, seed + 77);
}

function getTypeLimit(type) {
  return TYPE_LIMITS[type] || 4;
}

function getDeckTypeCounts(ids = state.currentDeckIds) {
  return ids.map(getCardById).filter(Boolean).reduce((counts, card) => {
    counts[card.type] = (counts[card.type] || 0) + 1;
    return counts;
  }, {});
}

function canAddCardType(card, ids = state.currentDeckIds) {
  const counts = getDeckTypeCounts(ids);
  return (counts[card.type] || 0) < getTypeLimit(card.type);
}

function makeLimitedDeckFromPool(pool, size, seed = Date.now(), baseIds = []) {
  const cleanPool = pool.filter(Boolean);
  const fallbackPool = STARTER_IDS.map(getCardById).filter(Boolean);
  const usablePool = cleanPool.length ? cleanPool : fallbackPool;
  const seedBox = { value: seed };
  const deck = [...baseIds];
  let guard = 0;

  while (deck.length < DECK_SIZE && deck.length < baseIds.length + size && guard < 500) {
    guard += 1;
    const card = weightedPick(usablePool, seedBox, "player");
    if (canAddCardType(card, deck)) deck.push(card.id);
  }

  if (deck.length < DECK_SIZE && deck.length < baseIds.length + size) {
    for (const card of shuffle(usablePool, seed + 19)) {
      if (deck.length >= DECK_SIZE || deck.length >= baseIds.length + size) break;
      if (canAddCardType(card, deck)) deck.push(card.id);
    }
  }

  return deck.slice(baseIds.length);
}

function materializeDeck(ids, seed) {
  return shuffle(ids.map(getCardById).filter(Boolean), seed);
}

function generateCpuDeck(difficulty, seed) {
  const allowedByDifficulty = {
    easy: ["D", "C", "B"],
    normal: ["D", "C", "B", "A", "S"],
    hard: GRADE_ORDER,
  };
  const pool = CARD_CATALOG.filter((card) => allowedByDifficulty[difficulty].includes(card.grade));
  const mode = difficulty === "hard" ? "hardCpu" : difficulty === "normal" ? "normalCpu" : "player";
  return materializeDeck(makeDeckFromPool(pool, DECK_SIZE, false, mode, seed), seed + 404);
}

async function beginBattle(difficulty) {
  if (state.inputLocked) return;
  clearCpuTimer();
  poki.gameplayStop();
  ensurePlayableDeck();
  await poki.commercialBreak();
  startGame(difficulty);
  poki.gameplayStart();
}

function startGame(difficulty) {
  state.difficulty = difficulty;
  state.round = 1;
  state.flips = 0;
  state.lastAwardCoins = 0;
  state.lastAwardDoubled = false;
  state.lastUnlockedNames = [];
  state.matchWins.player = 0;
  state.matchWins.cpu = 0;
  state.phase = "playing";
  showScreen("game");
  startRound(1);
}

function startRound(roundNumber) {
  clearCpuTimer();
  state.round = roundNumber;
  state.turn = "player";
  state.inputLocked = false;
  state.phase = "playing";

  const baseSeed = Date.now() + roundNumber * 491;
  state.actors.player = createActor(t("you"), materializeDeck(state.currentDeckIds, baseSeed + 41));
  state.actors.cpu = createActor(t(`${state.difficulty}CpuName`), generateCpuDeck(state.difficulty, baseSeed + 9001));
  if (state.tutorial.active && roundNumber === 1) {
    const firstSafeIndex = state.actors.player.deck.findIndex((card) => card && !card.bust && card.score > 0);
    if (firstSafeIndex > 0) {
      const [safeCard] = state.actors.player.deck.splice(firstSafeIndex, 1);
      state.actors.player.deck.unshift(safeCard);
    }
  }
  refillHand(state.actors.player);
  refillHand(state.actors.cpu);

  els.mode.textContent = `${t("vsCpu")}: ${t(`${state.difficulty}Mode`)}`;
  els.gameTitle.textContent = t("bestOf3");
  els.cpuName.textContent = state.actors.cpu.name;
  els.rewardAd.disabled = false;
  els.rewardAd.textContent = t("watchAd");
  resetFace("player");
  resetFace("cpu");
  setEvent(t("flipOrBank"), t("startCopy"));
  applyDeckSynergy(state.actors.player);
  updateStats();
  if (state.tutorial.active && state.round === 1) state.tutorial.step = 0;
  updateTurnUI();
}

function clearCpuTimer() {
  if (!state.cpuTimer) return;
  window.clearTimeout(state.cpuTimer);
  state.cpuTimer = null;
}

function resetFace(actorKey) {
  const face = actorKey === "cpu" ? els.cpuFace : els.playerFace;
  face.className = "card-face card-back card-waiting";
  face.removeAttribute("style");
  face.innerHTML = `
    <div class="card-question">?</div>
  `;
}

function refillHand(actor) {
  while (actor.hand.length < HAND_SIZE && actor.deck.length) {
    actor.hand.push(actor.deck.shift());
  }
}

function getRemainingCards(actor) {
  return actor.deck.length + actor.hand.length;
}

function renderHands() {
  const player = state.actors.player;
  const cpu = state.actors.cpu;
  const playerCanChoose = canPlayerAct() && !(state.tutorial.active && state.tutorial.step === 1);

  els.cpuHand.innerHTML = Array.from({ length: HAND_SIZE }, (_, index) => {
    const hasCard = Boolean(cpu.hand[index]);
    return `
      <button class="hand-card hand-card-back" type="button" data-cpu-hand-index="${index}" disabled aria-label="${t("hiddenHand")}">
        <span>${hasCard ? "?" : "-"}</span>
      </button>
    `;
  }).join("");

  els.playerHand.innerHTML = Array.from({ length: HAND_SIZE }, (_, index) => {
    const card = player.hand[index];
    if (!card) {
      return `
        <button class="hand-card hand-card-empty" type="button" disabled>
          <span>-</span>
        </button>
      `;
    }

    return `
      <button class="hand-card hand-card-open grade-${card.grade.toLowerCase()}" type="button" data-hand-index="${index}" ${playerCanChoose ? "" : "disabled"} aria-label="${t("playCard")} ${card.name}">
        ${renderHead(card, "hand")}
        <strong>${card.grade}</strong>
        <span>${getTypeCopy(card.type)}</span>
      </button>
    `;
  }).join("");
}

function updateStats() {
  const player = state.actors.player;
  const cpu = state.actors.cpu;
  const focus = state.turn === "cpu" ? cpu : player;

  els.roundValue.textContent = `${state.round}/${state.maxRounds}`;
  els.duelRound.textContent = `${t("round")} ${state.round}/${state.maxRounds}`;
  els.score.textContent = String(player.banked + player.pot);
  els.cpuScore.textContent = String(cpu.banked + cpu.pot);
  els.deck.textContent = `${getRemainingCards(player)}/${getRemainingCards(cpu)}`;
  els.playerPot.textContent = `${t("pot")} ${player.pot}`;
  els.cpuPot.textContent = `${t("pot")} ${cpu.pot}`;
  els.playerBank.textContent = `${t("bankLabel")} ${player.banked}`;
  els.cpuBank.textContent = `${t("bankLabel")} ${cpu.banked}`;
  els.playerStatus.textContent = getActorStatus(player);
  els.cpuStatus.textContent = getActorStatus(cpu);
  els.shineOwner.textContent = focus === cpu ? t("cpuShine") : t("playerShine");
  els.multiplier.textContent = `x${getMultiplier(focus)}`;
  els.shineBar.style.width = `${focus.shine}%`;
  renderHands();
  updateMetaUI();
}

function updateMetaUI() {
  els.currency.textContent = String(state.currency);
  els.shopCurrency.textContent = String(state.currency);
  els.collectionCount.textContent = `${state.collection.size}/${CARD_CATALOG.length}`;
  renderMissions();
}

function getActorStatus(actor) {
  if (actor.busted) return t("busted");
  if (actor.bankedOut) return t("banked");
  if (actor.shield) return t("shield");
  return t("ready");
}

function updateTurnUI() {
  const playerCanAct = canPlayerAct();
  const tutorialBankStep = state.tutorial.active && state.tutorial.step === 1;
  els.flipAction.disabled = !playerCanAct || tutorialBankStep;
  els.bankAction.disabled = !playerCanAct || state.actors.player.pot <= 0;
  els.playerButton.disabled = !playerCanAct || tutorialBankStep;
  els.flipAction.classList.toggle("tutorial-focus", state.tutorial.active && state.tutorial.step === 0 && playerCanAct);
  els.bankAction.classList.toggle("tutorial-focus", tutorialBankStep && playerCanAct);
  els.playerLane.classList.toggle("active-lane", state.turn === "player" && state.actors.player.active);
  els.cpuLane.classList.toggle("active-lane", state.turn === "cpu" && state.actors.cpu.active);
  els.turnStatus.textContent = state.turn === "cpu" ? t("cpuThinking") : t("yourTurn");
  renderHands();
  updateTutorialUI();
}

function canPlayerAct() {
  return state.phase === "playing" && !state.inputLocked && state.turn === "player" && state.actors.player.active;
}

function setEvent(title, copy) {
  els.eventTitle.textContent = title;
  els.eventCopy.textContent = copy;
}

function renderMissions() {
  const html = MISSIONS.map((mission) => {
    const saved = state.missions[mission.id];
    const progress = Math.min(saved.progress, mission.target);
    const done = saved.complete || progress >= mission.target;
    return `
      <div class="mission-card ${done ? "complete" : ""}">
        <strong>${t(mission.labelKey)}</strong>
        <span>${progress}/${mission.target} - +${mission.reward} pts</span>
        <i><b style="width: ${(progress / mission.target) * 100}%"></b></i>
      </div>
    `;
  }).join("");
  els.missionList.innerHTML = html;
  els.resultMissionList.innerHTML = html;
}

function addMissionProgress(id, amount) {
  const mission = MISSIONS.find((item) => item.id === id);
  const saved = state.missions[id];
  if (!mission || !saved || saved.complete) return;

  saved.progress = clamp(saved.progress + amount, 0, mission.target);
  if (saved.progress >= mission.target) {
    saved.complete = true;
    state.currency += mission.reward;
    saveNumber(CURRENCY_KEY, state.currency);
    triggerEffect("mission", t("goalBonus"));
    playSound("mission");
  }
  saveMissions();
  updateMetaUI();
}

function updateTutorialUI() {
  if (!state.tutorial.active || !screens.game.classList.contains("screen-active")) {
    els.tutorialPanel.classList.add("hidden");
    return;
  }

  els.tutorialPanel.classList.remove("hidden");
  if (state.tutorial.step === 0) {
    els.tutorialTitle.textContent = t("lessonFlip");
    els.tutorialCopy.textContent = t("lessonFlipCopy");
  } else {
    els.tutorialTitle.textContent = t("lessonBank");
    els.tutorialCopy.textContent = t("lessonBankCopy");
  }
}

function completeTutorial() {
  if (!state.tutorial.active) return;
  state.tutorial.active = false;
  saveFlag(TUTORIAL_KEY);
  els.tutorialPanel.classList.add("hidden");
  triggerEffect("combo", t("lessonClear"));
  playSound("mission");
}

function getAudioContext() {
  if (state.audioContext) return state.audioContext;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  state.audioContext = new AudioContext();
  return state.audioContext;
}

function playSound(kind) {
  if (!state.soundEnabled) return;
  const audio = getAudioContext();
  if (!audio) return;
  if (audio.state === "suspended") audio.resume();

  const patterns = {
    flip: [[320, 0.04], [520, 0.06]],
    bank: [[620, 0.05], [860, 0.08]],
    bust: [[180, 0.08], [92, 0.16]],
    rare: [[740, 0.05], [1040, 0.08], [1320, 0.1]],
    win: [[520, 0.06], [760, 0.08], [980, 0.12]],
    gacha: [[460, 0.04], [690, 0.05], [920, 0.08]],
    mission: [[580, 0.05], [880, 0.08], [1180, 0.14]],
  };

  let offset = 0;
  for (const [frequency, duration] of patterns[kind] || patterns.flip) {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = kind === "bust" ? "sawtooth" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, audio.currentTime + offset);
    gain.gain.setValueAtTime(0.0001, audio.currentTime + offset);
    gain.gain.exponentialRampToValueAtTime(0.08, audio.currentTime + offset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + offset + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(audio.currentTime + offset);
    oscillator.stop(audio.currentTime + offset + duration + 0.02);
    offset += duration * 0.82;
  }
}

function flipCard() {
  if (!canPlayerAct()) return;
  playSound("flip");
  drawCard("player", 0);
}

function bankPlayer() {
  if (!canPlayerAct() || state.actors.player.pot <= 0) return;
  playSound("bank");
  if (state.tutorial.active && state.tutorial.step === 1) completeTutorial();
  bankActor("player");
}

function getHandButton(actorKey, handIndex) {
  const selector = actorKey === "cpu" ? `[data-cpu-hand-index="${handIndex}"]` : `[data-hand-index="${handIndex}"]`;
  return actorKey === "cpu" ? els.cpuHand.querySelector(selector) : els.playerHand.querySelector(selector);
}

function animateHandToFace(actorKey, handIndex, card) {
  const source = getHandButton(actorKey, handIndex);
  const target = actorKey === "cpu" ? els.cpuFace : els.playerFace;
  if (!source || !target) return Promise.resolve();

  const sourceRect = source.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const clone = source.cloneNode(true);
  clone.classList.add("flying-card", `flying-card-${actorKey}`);
  clone.style.left = `${sourceRect.left}px`;
  clone.style.top = `${sourceRect.top}px`;
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.setProperty("--fly-x", `${targetRect.left + targetRect.width * 0.5 - sourceRect.left - sourceRect.width * 0.5}px`);
  clone.style.setProperty("--fly-y", `${targetRect.top + targetRect.height * 0.5 - sourceRect.top - sourceRect.height * 0.5}px`);
  clone.style.setProperty("--fly-scale-x", targetRect.width / sourceRect.width);
  clone.style.setProperty("--fly-scale-y", targetRect.height / sourceRect.height);

  if (actorKey === "cpu" && card) {
    clone.innerHTML = `<span>?</span>`;
  }

  document.body.appendChild(clone);
  source.classList.add("hand-card-spent");

  return new Promise((resolve) => {
    window.setTimeout(() => {
      clone.remove();
      resolve();
    }, 470);
  });
}

function drawCard(actorKey, handIndex = 0) {
  const actor = state.actors[actorKey];
  const face = actorKey === "cpu" ? els.cpuFace : els.playerFace;
  refillHand(actor);
  const safeIndex = clamp(handIndex, 0, actor.hand.length - 1);
  if (!actor.active || !actor.hand.length || face.classList.contains("flipping")) return;

  state.inputLocked = true;
  updateTurnUI();
  resetFace(actorKey);
  const sourceIndex = safeIndex;

  window.setTimeout(() => {
    (async () => {
      const card = actor.hand[safeIndex];
      if (!card) throw new Error("Missing hand card");
      await animateHandToFace(actorKey, sourceIndex, card);
      actor.hand.splice(safeIndex, 1);
      renderHands();
      face.classList.add("flipping");
      const result = applyCard(card, actorKey);
      refillHand(actor);
      window.setTimeout(() => {
        renderCard(card, actorKey, result);
        face.classList.remove("flipping");
        state.flips += 1;
        updateStats();
        playCardDrama(card, actorKey, result);
        state.inputLocked = false;
        afterActorAction(actorKey, result);
      }, 150);
    })().catch((error) => {
      console.error(error);
      face.classList.remove("flipping");
      state.inputLocked = false;
      setEvent(t("recoveredTitle"), t("recoveredCopy"));
      showBattleFlash(t("tableResetTitle"), t("tableResetCopy"), "combo");
      updateTurnUI();
    });
  }, 40);
}

function applyCard(card, actorKey) {
  const actor = state.actors[actorKey];
  const isCpu = actorKey === "cpu";
  const cpuLevel = CPU_LEVELS[state.difficulty];
  const result = {
    delta: 0,
    combo: "",
    copy: getTypeCopy(card.type),
    busted: false,
    dramatic: false,
  };

  if (card.bust) {
    const savedByShield = actor.shield;
    actor.shield = false;
    actor.shine = clamp(actor.shine + card.shine, 0, 100);

    if (savedByShield) {
      const saved = Math.ceil(actor.pot / 2);
      actor.pot = saved;
      result.combo = t("comboShieldSave");
      result.copy = t("copyShieldSave");
    } else {
      actor.pot = 0;
      actor.active = false;
      actor.busted = true;
      result.busted = true;
      result.copy = t("copyKingBust");
    }

    actor.lastDelta = 0;
    actor.lastType = card.type;
    actor.streakType = card.type;
    actor.streakCount = 1;
    return result;
  }

  let base = card.mirror ? Math.max(1, Math.abs(actor.lastDelta) || 1) : card.score;
  const power = GRADE_POWER[card.grade];

  if (card.mirror && Math.abs(actor.lastDelta) >= 5) {
    base += Math.ceil(Math.abs(actor.lastDelta) / 2);
    result.combo = t("comboMirrorJackpot");
    result.copy = t("copyMirrorJackpot", { n: base });
  } else if (card.mirror) {
    result.combo = card.grade === "SSS" ? t("comboCosmicMirror") : t("comboMirrorCopy");
    result.copy = card.grade === "SSS"
      ? t("copyCosmicMirror")
      : t("copyMirrorSafe");
  }

  if (card.type === "wind" && actor.shield) {
    actor.shield = false;
    base = 3 + Math.floor(power / 2);
    result.combo = t("comboWigCounter");
    result.copy = t("copyWigCounter");
  }

  const multiplier = getMultiplier(actor);
  let delta = base > 0 ? base * multiplier : base;
  actor.shine = clamp(actor.shine + card.shine, 0, 100);

  if (power >= 4 && base > 0) {
    const surge = power + (card.grade === "SSS" ? 2 : 0);
    delta += surge;
    actor.shine = clamp(actor.shine + 10, 0, 100);
    result.combo = result.combo || t("comboRareSurge");
    result.copy = t("copyRareSurge", { copy: result.copy, grade: card.grade, n: surge });
  }

  if (card.type === "master" && base > 0) {
    actor.shield = true;
    result.combo = result.combo || t("comboMasterGuard");
    result.copy = t("copyMasterGuard", { copy: result.copy });
  }

  if (card.shield) actor.shield = true;

  if (actor.streakType === card.type) actor.streakCount += 1;
  else {
    actor.streakType = card.type;
    actor.streakCount = 1;
  }

  if (actor.streakCount >= 3 && base > 0) {
    delta += 5;
    actor.shine = clamp(actor.shine + 8, 0, 100);
    result.combo = t("comboTripleHead");
  }

  if (actor.lastType === "master" && card.type === "mirror") {
    delta += 5;
    actor.shine = clamp(actor.shine + 10, 0, 100);
    result.combo = t("comboMasterMirror");
  }

  if (actor.lastType === "shine" && card.type === "shine") {
    delta += 2;
    actor.shine = clamp(actor.shine + 8, 0, 100);
    result.combo = t("comboShineStreak");
  }

  if (isCpu && cpuLevel) {
    if (delta > 0 && Math.random() < cpuLevel.bonusChance) {
      delta += 1;
      result.copy = t("copyCpuGap", { copy: result.copy });
    }

    if (delta > 1 && Math.random() < cpuLevel.mistakeChance) {
      delta -= 1;
      result.copy = t("copyCpuFumble", { copy: result.copy });
    }
  }

  actor.pot = Math.max(0, actor.pot + delta);
  actor.lastDelta = delta;
  actor.lastType = card.type;
  result.delta = delta;
  result.dramatic = delta >= 8 || GRADE_POWER[card.grade] >= 4 || Boolean(result.combo);
  return result;
}

function getMultiplier(actor) {
  if (actor.shine >= 90) return 4;
  if (actor.shine >= 60) return 3;
  if (actor.shine >= 32) return 2;
  return 1;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function renderCard(card, actorKey, result) {
  const face = actorKey === "cpu" ? els.cpuFace : els.playerFace;
  const signedDelta = result.busted ? t("bust") : result.delta > 0 ? `+${result.delta}` : String(result.delta);
  face.className = `card-face character-card tier-${card.tier} grade-${card.grade.toLowerCase()}`;
  face.style.background = card.type === "king" ? "#fff0f3" : "#fffef5";
  face.innerHTML = `
    ${renderHead(card, "battle")}
    <div>
      <div class="card-name">${card.name}</div>
      <span class="card-rank">${card.grade}</span>
      <div class="card-effect">${signedDelta} ${t("toPot")}</div>
    </div>
  `;
}

function renderHead(card, size = "battle") {
  const hasHair = Boolean(card.hair);
  const sizeClass = size === "dex" ? "dex-head" : size === "detail" ? "detail-head" : "";
  const decoration = getActiveDecoration(card.id);
  return `
    <div class="mini-head ${sizeClass}" style="--skin: ${card.color}; --hair: ${card.hair || "#2d2118"}">
      ${hasHair ? '<span class="hair-piece"></span>' : ""}
      ${decoration ? `<span class="head-decor ${decoration.className}"></span>` : ""}
      <span class="mini-eye left"></span>
      <span class="mini-eye right"></span>
      <span class="mini-mouth"></span>
    </div>
  `;
}

function renderLockedHead(card) {
  const hasHair = Boolean(card.hair);
  return `
    <div class="mini-head dex-head locked-preview" style="--skin: ${card.color}; --hair: ${card.hair || "#2d2118"}">
      ${hasHair ? '<span class="hair-piece"></span>' : ""}
      <span class="mini-eye left"></span>
      <span class="mini-eye right"></span>
      <span class="mini-mouth"></span>
    </div>
  `;
}

function getActiveDecoration(cardId) {
  const unlocked = state.decorations?.[cardId] || [];
  if (!unlocked.length) return null;
  return DECORATIONS.find((decoration) => decoration.id === unlocked[unlocked.length - 1]) || null;
}

function playCardDrama(card, actorKey, result) {
  const actorName = actorKey === "cpu" ? "CPU" : t("you");
  const lane = actorKey === "cpu" ? els.cpuLane : els.playerLane;
  const eventName = actorKey === "cpu" ? t("cpuFlipped", { name: card.name }) : card.name;
  let copy = result.copy;
  const flashName = actorKey === "cpu" ? t("cpuStrike") : t("yourStrike");

  if (result.combo) copy = `${copy} ${t("comboLabel")}: ${result.combo}.`;

  if (result.busted) {
    animateLane(lane, "lane-busted");
    shakeScreen();
    triggerEffect("king", t("typeKing"));
    showBattleFlash(t("potStolen"), t("potStolenCopy", { actor: actorName }), "king", actorKey);
    playSound("bust");
    setEvent(t("actorBusted", { actor: actorName }), copy);
  } else if (result.combo) {
    animateLane(lane, "lane-combo");
    triggerEffect("combo", result.combo);
    showBattleFlash(result.combo, copy, card.type === "mirror" ? "mirror" : "combo", actorKey);
    playSound(GRADE_POWER[card.grade] >= 4 ? "rare" : "bank");
    setEvent(eventName, copy);
  } else if (card.type === "wind") {
    animateLane(lane, "lane-wind");
    shakeScreen();
    triggerEffect("wind", t("wildWind"));
    showBattleFlash(t("wildWind"), t("wildWindCopy"), "wind", actorKey);
    playSound("bust");
    setEvent(eventName, copy);
  } else if (result.dramatic || GRADE_POWER[card.grade] >= 3) {
    animateLane(lane, GRADE_POWER[card.grade] >= 4 ? "lane-rare" : "lane-combo");
    triggerEffect("shine", result.delta >= 10 ? t("megaShine") : card.grade);
    showBattleFlash(BIG_FLASH_GRADES.has(card.grade) ? t("gradeHead", { grade: card.grade }) : flashName, copy, "shine", actorKey);
    playSound(GRADE_POWER[card.grade] >= 4 ? "rare" : "bank");
    setEvent(eventName, copy);
  } else {
    if (result.delta >= 4) showBattleFlash(flashName, t("pressureCopy", { n: result.delta }), "hit", actorKey);
    setEvent(eventName, copy);
  }
}

function animateLane(lane, className) {
  lane.classList.remove(className);
  void lane.offsetWidth;
  lane.classList.add(className);
  window.setTimeout(() => lane.classList.remove(className), 520);
}

function triggerEffect(kind, text) {
  window.clearTimeout(state.effectTimer);
  els.effectText.textContent = text;
  els.effectLayer.className = `effect-layer show effect-${kind}`;
  state.effectTimer = window.setTimeout(() => {
    els.effectLayer.className = "effect-layer";
  }, 820);
}

function showBattleFlash(title, copy, kind = "hit", actorKey = "player") {
  els.battleFlashTitle.textContent = title;
  els.battleFlashCopy.textContent = copy;
  els.battleFlash.className = `battle-flash battle-flash-${kind} flash-${actorKey}`;
  void els.battleFlash.offsetWidth;
  els.battleFlash.classList.add("show");
  window.setTimeout(() => {
    els.battleFlash.classList.add("hidden");
    els.battleFlash.classList.remove("show");
  }, 1050);
}

function shakeScreen() {
  els.app.classList.remove("screen-shake");
  void els.app.offsetWidth;
  els.app.classList.add("screen-shake");
  window.setTimeout(() => els.app.classList.remove("screen-shake"), 420);
}

function pulseTurnBeam() {
  els.turnBeam.classList.remove("pulse");
  void els.turnBeam.offsetWidth;
  els.turnBeam.classList.add("pulse");
}

function afterActorAction(actorKey, result) {
  updateStats();

  if (finishEmptyDeck(actorKey)) return;

  if (bothActorsDone()) {
    window.setTimeout(resolveVsRound, 780);
    return;
  }

  if (actorKey === "player" && state.tutorial.active && state.tutorial.step === 0 && state.actors.player.active && state.actors.player.pot > 0) {
    state.tutorial.step = 1;
    state.turn = "player";
    setEvent(t("lockTitle"), t("lockCopy"));
    updateTurnUI();
    return;
  }

  if (actorKey === "player") {
    state.turn = "cpu";
    pulseTurnBeam();
    updateTurnUI();
    runCpuTurn();
    return;
  }

  if (state.actors.player.active) {
    state.turn = "player";
    pulseTurnBeam();
    updateTurnUI();
    const tip = getDecisionTip();
    setEvent(tip.title, tip.copy);
    return;
  }

  state.turn = "cpu";
  updateTurnUI();
  runCpuTurn();
}

function bankActor(actorKey) {
  const actor = state.actors[actorKey];
  if (!actor.active || actor.pot <= 0) return;

  actor.banked += actor.pot;
  const savedPot = actor.pot;
  actor.pot = 0;
  actor.active = false;
  actor.bankedOut = true;
  actor.shine = 0;
  animateLane(actorKey === "cpu" ? els.cpuLane : els.playerLane, "lane-bank");
  const actorLabel = actorKey === "cpu" ? "CPU" : t("you");
  triggerEffect("bank", t("bankedFlash", { actor: actorLabel.toUpperCase() }));
  showBattleFlash(t("bankedFlash", { actor: actorLabel.toUpperCase() }), t("bankedCopy", { n: savedPot }), "bank", actorKey);
  setEvent(actorKey === "cpu" ? t("cpuBanked") : t("playerBanked"), t("savedPotCopy", { actor: actorLabel }));
  updateStats();

  if (bothActorsDone()) {
    window.setTimeout(resolveVsRound, 760);
    return;
  }

  if (actorKey === "player") {
    state.turn = "cpu";
    pulseTurnBeam();
    updateTurnUI();
    runCpuTurn();
    return;
  }

  state.turn = "player";
  pulseTurnBeam();
  updateTurnUI();
}

function getDecisionTip() {
  const player = state.actors.player;
  const cpu = state.actors.cpu;
  const projected = player.banked + player.pot;
  const cpuScore = cpu.banked + cpu.pot;

  if (player.pot >= 12 && projected > cpuScore) {
    return { title: t("tipBankTitle"), copy: t("tipBankCopy") };
  }

  if (player.shine >= 60 && player.pot < 10) {
    return { title: t("tipShineTitle"), copy: t("tipShineCopy", { n: getMultiplier(player) }) };
  }

  if (cpuScore > projected + 5) {
    return { title: t("tipChaseTitle"), copy: t("tipChaseCopy") };
  }

  if (player.shield) {
    return { title: t("tipShieldTitle"), copy: t("tipShieldCopy") };
  }

  return { title: t("yourTurn"), copy: t("tipDefaultCopy") };
}

function bothActorsDone() {
  return !state.actors.player.active && !state.actors.cpu.active;
}

function finishEmptyDeck(actorKey) {
  const actor = state.actors[actorKey];
  if (!actor.active || getRemainingCards(actor) > 0) return false;

  if (actor.pot > 0) {
    bankActor(actorKey);
  } else {
    actor.active = false;
    actor.bankedOut = true;
    updateStats();
    if (bothActorsDone()) window.setTimeout(resolveVsRound, 760);
    else if (actorKey === "player") runCpuTurn();
    else {
      state.turn = "player";
      updateTurnUI();
    }
  }

  return true;
}

function runCpuTurn() {
  clearCpuTimer();
  const cpu = state.actors.cpu;
  if (state.phase !== "playing" || !cpu.active) return;

  state.turn = "cpu";
  updateTurnUI();
  state.cpuTimer = window.setTimeout(() => {
    if (!cpu.active) return;
    if (!getRemainingCards(cpu)) {
      finishEmptyDeck("cpu");
      return;
    }
    if (shouldCpuBank()) bankActor("cpu");
    else drawCard("cpu", chooseCpuHandIndex());
  }, CPU_LEVELS[state.difficulty].delay);
}

function chooseCpuHandIndex() {
  const cpu = state.actors.cpu;
  const level = CPU_LEVELS[state.difficulty];
  refillHand(cpu);
  if (!cpu.hand.length) return 0;

  const handScores = cpu.hand.map((card, index) => {
    let value = card.score + GRADE_POWER[card.grade] * 0.6 + card.shine * 0.04;
    if (card.bust && !cpu.shield) value -= cpu.pot + level.bankAt;
    if (card.mirror) value += Math.abs(cpu.lastDelta) * 0.7;
    if (card.type === "master" || card.shield) value += 2;
    if (card.type === "wind" && cpu.shield) value += 4;
    return { index, value };
  });

  handScores.sort((a, b) => b.value - a.value);
  const mistakeRoll = Math.random() < level.mistakeChance;
  if (mistakeRoll && handScores[1]) return handScores[1].index;
  return handScores[0].index;
}

function shouldCpuBank() {
  const cpu = state.actors.cpu;
  const player = state.actors.player;
  const level = CPU_LEVELS[state.difficulty];
  if (cpu.pot <= 0) return false;
  if (!getRemainingCards(cpu)) return true;

  const cpuTotalIfBanked = cpu.banked + cpu.pot;
  const playerTotal = player.banked + player.pot;
  const aheadEnough = cpuTotalIfBanked >= playerTotal + level.chaseMargin;
  const danger = cpu.pot >= level.bankAt;
  const endgame = getRemainingCards(cpu) <= 3 && cpu.pot >= 4;
  const greedyFlip = Math.random() < level.courage;

  if (aheadEnough && cpu.pot >= Math.floor(level.bankAt * 0.65)) return true;
  if (endgame) return true;
  if (danger && !greedyFlip) return true;
  if (!player.active && cpuTotalIfBanked > playerTotal) return true;
  return false;
}

function resolveVsRound() {
  const player = state.actors.player.banked;
  const cpu = state.actors.cpu.banked;
  const playerWon = player > cpu;
  const cpuWon = cpu > player;

  if (playerWon) state.matchWins.player += 1;
  if (cpuWon) state.matchWins.cpu += 1;

  const title = playerWon ? t("roundToYou") : cpuWon ? t("roundToCpu") : t("roundDraw");
  const copy = `${t("round")} ${state.round}: ${t("you")} ${player}, CPU ${cpu}. ${t("matchScore")} ${state.matchWins.player}-${state.matchWins.cpu}.`;
  setEvent(title, copy);
  triggerEffect(playerWon ? "shine" : cpuWon ? "wind" : "combo", playerWon ? t("roundWin") : cpuWon ? t("cpuRound") : t("draw"));

  if (state.matchWins.player >= 2 || state.matchWins.cpu >= 2 || state.round >= state.maxRounds) {
    window.setTimeout(endVsMatch, 1180);
    return;
  }

  window.setTimeout(() => startRound(state.round + 1), 1350);
}

function endVsMatch() {
  clearCpuTimer();
  poki.gameplayStop();
  state.phase = "result";
  const playerWins = state.matchWins.player;
  const cpuWins = state.matchWins.cpu;
  const won = playerWins > cpuWins;
  const tied = playerWins === cpuWins;
  const rewards = grantBattleRewards(won, tied);
  if (won) addMissionProgress("win3", 1);

  els.resultKicker.textContent = t("duelComplete");
  els.finalScoreLabel.textContent = t("matchScore");
  els.finalScore.textContent = `${playerWins}-${cpuWins}`;
  els.resultTitle.textContent = tied ? t("resultTie") : won ? t("resultWin") : t("resultLose");
  els.resultCopy.textContent = buildRewardCopy(rewards);
  els.rewardAd.disabled = state.lastAwardCoins <= 0;
  els.rewardAd.textContent = t("watchAd");
  playSound(won ? "win" : "bust");
  renderCollection();
  renderDeckBuilder();
  updateMetaUI();
  showScreen("result");
  if (rewards.unlocked.length) {
    window.setTimeout(() => showRewardReveal(rewards.unlocked), 420);
  }
}

function grantBattleRewards(won, tied) {
  const level = CPU_LEVELS[state.difficulty];
  const coins = won ? level.coinWin : level.coinLose;
  const unlocked = [];

  state.currency += coins;
  state.lastAwardCoins = coins;
  state.lastAwardDoubled = false;
  state.lastUnlockedNames = unlocked.map((card) => card.name);
  saveNumber(CURRENCY_KEY, state.currency);

  return { coins, unlocked };
}

function buildRewardCopy(rewards) {
  const tail = rewards.coins > 0 ? t("rewardTailWin") : t("rewardTailLose");
  return t("battleReward", { n: rewards.coins, tail, owned: state.collection.size, total: CARD_CATALOG.length });
}

function showRewardReveal(cards, label = t("newHeadFound")) {
  let index = 0;

  const showNext = () => {
    const card = cards[index];
    if (!card) {
      els.rewardReveal.classList.add("hidden");
      els.rewardRevealCard.innerHTML = "";
      return;
    }

    els.rewardRevealCard.className = `reward-reveal-card grade-${card.grade.toLowerCase()}`;
    els.rewardRevealCard.innerHTML = `
      <p>${label}</p>
      <div class="reward-card-body">
        <div class="reward-number">#${String(card.no).padStart(3, "0")}</div>
        ${renderHead(card, "detail")}
        <h2>${card.name}</h2>
        <strong>${card.grade}</strong>
      </div>
    `;
    els.rewardReveal.classList.remove("hidden");
    triggerEffect("shine", t("cardGet", { grade: card.grade }));
    index += 1;
    window.setTimeout(showNext, cards.length > 1 ? 1450 : 1200);
  };

  showNext();
}

function pickGachaCard() {
  const total = GACHA_RATES.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = Math.random() * total;
  let grade = "D";

  for (const [candidate, weight] of GACHA_RATES) {
    roll -= weight;
    if (roll <= 0) {
      grade = candidate;
      break;
    }
  }

  const pool = CARD_CATALOG.filter((card) => card.grade === grade);
  return pool[Math.floor(Math.random() * pool.length)];
}

function addCardCopy(card) {
  const previous = state.ownedCounts[card.id] || 0;
  const next = previous + 1;
  const wasNew = previous === 0 && !state.collection.has(card.id);
  let decoration = null;

  state.collection.add(card.id);
  state.ownedCounts[card.id] = next;

  const previousMilestone = Math.floor(previous / 10);
  const nextMilestone = Math.floor(next / 10);
  if (nextMilestone > previousMilestone) {
    const unlocked = state.decorations[card.id] || [];
    decoration = DECORATIONS[(nextMilestone - 1) % DECORATIONS.length];
    if (!unlocked.includes(decoration.id)) {
      unlocked.push(decoration.id);
      state.decorations[card.id] = unlocked;
    }
  }

  saveCollection();
  saveObject(COUNT_KEY, state.ownedCounts);
  saveObject(DECOR_KEY, state.decorations);
  return { card, count: next, wasNew, decoration };
}

function performGachaPull(amount) {
  const cost = amount * PULL_COST;
  if (state.currency < cost) {
    els.gachaStatus.textContent = t("needPoints", { n: cost - state.currency });
    return;
  }

  state.currency -= cost;
  saveNumber(CURRENCY_KEY, state.currency);
  const results = Array.from({ length: amount }, () => addCardCopy(pickGachaCard()));
  const newCount = results.filter((result) => result.wasNew).length;
  addMissionProgress("pull10", amount);
  if (newCount) addMissionProgress("new5", newCount);
  renderGachaResults(results);
  renderCollection();
  renderDeckBuilder();
  updateMetaUI();
  els.gachaStatus.textContent = t("pulled", { n: amount, plural: amount > 1 ? "s" : "" });
  playSound(results.some((result) => GRADE_POWER[result.card.grade] >= 4) ? "rare" : "gacha");
}

function renderGachaResults(results) {
  els.gachaGrid.innerHTML = results.map((result, index) => {
    const card = result.card;
    const decorText = result.decoration ? `<em>${t("unlockedDecor", { name: result.decoration.label })}</em>` : "";
    return `
      <button class="gacha-card grade-${card.grade.toLowerCase()} ${result.wasNew ? "new-card" : ""}" data-card-id="${card.id}" type="button" style="--delay: ${index * 18}ms">
        <div class="dex-number">#${String(card.no).padStart(3, "0")}</div>
        ${renderHead(card, "dex")}
        <strong>${card.name}</strong>
        <small class="gacha-count">${card.grade} - ${t("copiesCount", { n: result.count })}</small>
        ${decorText}
      </button>
    `;
  }).join("");
}

function unlockRandomCards(count, difficulty) {
  const unlocked = [];
  for (let i = 0; i < count; i += 1) {
    const card = pickLockedCard(difficulty);
    if (!card) break;
    state.collection.add(card.id);
    unlocked.push(card);
  }

  if (unlocked.length) saveCollection();
  return unlocked;
}

function pickLockedCard(difficulty) {
  const gradeWeights = {
    easy: { D: 8, C: 5, B: 2, A: 1 },
    normal: { C: 6, B: 5, A: 3, S: 1 },
    hard: { A: 5, S: 4, SS: 2, SSS: 1 },
  };
  let pool = CARD_CATALOG.filter((card) => !state.collection.has(card.id) && gradeWeights[difficulty][card.grade]);
  if (!pool.length) pool = CARD_CATALOG.filter((card) => !state.collection.has(card.id));
  if (!pool.length) return null;

  const total = pool.reduce((sum, card) => sum + (gradeWeights[difficulty][card.grade] || 1), 0);
  let roll = Math.random() * total;
  for (const card of pool) {
    roll -= gradeWeights[difficulty][card.grade] || 1;
    if (roll <= 0) return card;
  }
  return pool[pool.length - 1];
}

async function claimRewardAd() {
  if (state.inputLocked || els.rewardAd.disabled || state.lastAwardDoubled || state.lastAwardCoins <= 0) return;

  els.rewardAd.disabled = true;
  els.rewardAd.textContent = t("adLoading");
  const success = await poki.rewardedBreak();

  if (success) {
    state.currency += state.lastAwardCoins;
    state.lastAwardDoubled = true;
    saveNumber(CURRENCY_KEY, state.currency);
    els.resultCopy.textContent = t("rewardDoubled", { n: state.lastAwardCoins, balance: state.currency });
    els.rewardAd.textContent = t("rewardClaimed");
    updateMetaUI();
    renderDeckBuilder();
  } else {
    els.resultCopy.textContent = t("noAdReward");
    els.rewardAd.textContent = t("adUnavailable");
  }
}
function renderCollection() {
  els.collectionGrid.innerHTML = CARD_CATALOG.map((card) => {
    const unlocked = state.collection.has(card.id);
    const count = state.ownedCounts[card.id] || (unlocked ? 1 : 0);
    const decorCount = (state.decorations[card.id] || []).length;
    return `
      <button class="dex-card grade-${card.grade.toLowerCase()} ${unlocked ? "unlocked" : "locked"}" data-card-id="${card.id}" type="button">
        <div class="dex-number">#${String(card.no).padStart(3, "0")}</div>
        <div class="dex-portrait">
          ${unlocked ? renderHead(card, "dex") : renderLockedHead(card)}
        </div>
        <div class="dex-name">${unlocked ? card.name : `${t("signal")} #${String(card.no).padStart(3, "0")}`}</div>
        <div class="dex-meta">
          <span>${unlocked ? card.grade : t("locked")}</span>
          <span>${unlocked ? `x${count}` : getTypeCopy(card.type)}</span>
          ${decorCount ? `<span>${t("decorCount", { n: decorCount })}</span>` : ""}
        </div>
      </button>
    `;
  }).join("");
  updateMetaUI();
}

function openCardDetail(cardId) {
  const card = getCardById(cardId);
  if (!card) return;

  const unlocked = state.collection.has(card.id);
  const power = GRADE_POWER[card.grade];
  const count = state.ownedCounts[card.id] || (unlocked ? 1 : 0);
  const decorations = state.decorations[card.id] || [];
  els.detailBody.innerHTML = unlocked ? `
    <div class="detail-hero grade-${card.grade.toLowerCase()}">
      <div class="detail-number">#${String(card.no).padStart(3, "0")}</div>
      ${renderHead(card, "detail")}
      <h2 id="detail-title">${card.name}</h2>
      <span class="detail-grade">${card.grade}</span>
    </div>
    <div class="detail-stats">
      <div><span>${t("detailType")}</span><strong>${getTypeCopy(card.type)}</strong></div>
      <div><span>${t("detailScore")}</span><strong>${card.bust ? t("bust") : card.score}</strong></div>
      <div><span>${t("detailShine")}</span><strong>${card.shine > 0 ? `+${card.shine}` : card.shine}</strong></div>
      <div><span>${t("detailPower")}</span><strong>${power + 1}/7</strong></div>
      <div><span>${t("detailCopies")}</span><strong>${count}</strong></div>
      <div><span>${t("detailDecor")}</span><strong>${decorations.length ? decorations.length : t("none")}</strong></div>
    </div>
    <p class="detail-copy">${getFlavorText(card)}</p>
  ` : `
    <div class="detail-hero locked-detail">
      <div class="detail-number">#${String(card.no).padStart(3, "0")}</div>
      ${renderLockedHead(card)}
      <h2 id="detail-title">${t("unscannedHead")}</h2>
      <span class="detail-grade">${t("locked")}</span>
    </div>
    <p class="detail-copy">${t("lockedCopy")}</p>
  `;

  els.detailModal.classList.remove("hidden");
}

function closeCardDetail() {
  els.detailModal.classList.add("hidden");
}

function openRatesModal() {
  els.ratesModal.classList.remove("hidden");
}

function closeRatesModal() {
  els.ratesModal.classList.add("hidden");
}

function openSettingsModal() {
  els.languageSelect.value = state.language;
  els.soundToggle.checked = state.soundEnabled;
  els.settingsModal.classList.remove("hidden");
}

function closeSettingsModal() {
  els.settingsModal.classList.add("hidden");
}

function getFlavorText(card) {
  const key = `flavor${card.type[0].toUpperCase()}${card.type.slice(1)}`;
  return t(key);
}

function renderDeckBuilder() {
  const unlocked = getUnlockedCards();
  const deckCards = state.currentDeckIds.map(getCardById).filter(Boolean);
  const synergy = getDeckSynergy();
  const typeCounts = getDeckTypeCounts();

  els.deckPreview.innerHTML = deckCards.length ? deckCards.map((card, index) => `
    <button class="deck-chip deck-slot grade-${card.grade.toLowerCase()}" data-remove-card-index="${index}" type="button" aria-label="Remove ${card.name}">
      <span>#${String(card.no).padStart(3, "0")}</span>
      <strong>${card.grade}</strong>
    </button>
  `).join("") : `<span class="empty-deck-copy">${t("deckEmpty")}</span>`;

  els.deckCountPill.textContent = `${deckCards.length}/${DECK_SIZE}`;
  els.deckStatus.textContent = t("deckStatus", { count: deckCards.length, synergy: synergy.label });
  els.deckPoolStatus.textContent = t("deckPoolStatus", { count: unlocked.length });
  els.autoDeck.disabled = !unlocked.length;
  els.clearDeck.disabled = !state.currentDeckIds.length;

  els.deckPoolGrid.innerHTML = unlocked.map((card) => {
    const selected = state.currentDeckIds.filter((id) => id === card.id).length;
    const isFull = state.currentDeckIds.length >= DECK_SIZE;
    const typeCount = typeCounts[card.type] || 0;
    const typeLimit = getTypeLimit(card.type);
    const typeBlocked = typeCount >= typeLimit;
    return `
      <button class="dex-card deck-pool-card grade-${card.grade.toLowerCase()} ${selected ? "selected" : ""}" data-add-card-id="${card.id}" type="button" ${isFull || typeBlocked ? "disabled" : ""}>
        <div class="dex-number">#${String(card.no).padStart(3, "0")}</div>
        <div class="dex-portrait">
          ${renderHead(card, "dex")}
        </div>
        <div class="dex-name">${card.name}</div>
        <div class="dex-meta">
          <span>${card.grade}</span>
          <span>${t("deckCopies", { n: selected })}</span>
          <span>${t("typeLimitShort", { type: getTypeCopy(card.type), count: typeCount, limit: typeLimit })}</span>
        </div>
      </button>
    `;
  }).join("");
}

function addCardToDeck(cardId) {
  if (state.currentDeckIds.length >= DECK_SIZE) {
    els.deckStatus.textContent = t("deckFull");
    return;
  }

  if (!state.collection.has(cardId)) return;
  const card = getCardById(cardId);
  if (!card || !canAddCardType(card)) {
    const typeCount = getDeckTypeCounts()[card?.type] || 0;
    els.deckStatus.textContent = t("typeLimitReached", { type: card ? getTypeCopy(card.type) : "", count: typeCount, limit: card ? getTypeLimit(card.type) : 0 });
    return;
  }
  state.currentDeckIds.push(cardId);
  saveDeck();
  renderDeckBuilder();
}

function removeCardFromDeck(index) {
  state.currentDeckIds.splice(index, 1);
  saveDeck();
  renderDeckBuilder();
}

function clearDeck() {
  state.currentDeckIds = [];
  saveDeck();
  renderDeckBuilder();
}

function autoFillDeck() {
  state.currentDeckIds = makeLimitedDeckFromPool(getUnlockedCards(), DECK_SIZE, Date.now());
  saveDeck();
  renderDeckBuilder();
  els.deckStatus.textContent = t("autoFilled");
}

function ensurePlayableDeck() {
  const unlockedIds = new Set(getUnlockedCards().map((card) => card.id));
  const validDeck = [];
  for (const id of state.currentDeckIds) {
    const card = getCardById(id);
    if (card && unlockedIds.has(id) && canAddCardType(card, validDeck)) validDeck.push(id);
  }
  if (validDeck.length === DECK_SIZE) return;

  const filler = makeLimitedDeckFromPool(getUnlockedCards(), DECK_SIZE - validDeck.length, Date.now(), validDeck);
  state.currentDeckIds = [...validDeck, ...filler].slice(0, DECK_SIZE);
  saveDeck();
}

function getDeckSynergy(ids = state.currentDeckIds) {
  const counts = {};
  ids.map(getCardById).filter(Boolean).forEach((card) => {
    counts[card.type] = (counts[card.type] || 0) + 1;
  });
  const [type, count] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || ["none", 0];
  if (count < 6) return { type: "none", count: 0, label: t("synergyNone") };
  const key = `synergy${type[0].toUpperCase()}${type.slice(1)}`;
  return { type, count, label: t(key) };
}

function applyDeckSynergy(actor) {
  const synergy = getDeckSynergy();
  if (synergy.type === "none") return;

  if (synergy.type === "shine") actor.shine = 28;
  else if (synergy.type === "wig") actor.shield = true;
  else if (synergy.type === "mirror") actor.lastDelta = 4;
  else if (synergy.type === "master") {
    actor.shine = 18;
    actor.shield = true;
  } else if (synergy.type === "king") actor.banked = 3;
  else if (synergy.type === "wind") {
    actor.shine = 12;
    actor.shield = true;
  } else if (synergy.type === "plain") actor.banked = 2;

  triggerEffect("combo", synergy.label);
}

function openCollection() {
  renderCollection();
  showScreen("collection");
}

function openDeck() {
  renderDeckBuilder();
  showScreen("deck");
}

function openShop() {
  renderGachaResults([]);
  els.gachaStatus.textContent = t("gachaReady");
  updateMetaUI();
  showScreen("shop");
}

function openMenu() {
  clearCpuTimer();
  poki.gameplayStop();
  state.phase = "idle";
  renderDeckBuilder();
  updateMetaUI();
  showScreen("home");
}

function setupInitialState() {
  if (state.currency < 50000) {
    state.currency = 50000;
    saveNumber(CURRENCY_KEY, state.currency);
  }

  const validDeck = state.currentDeckIds.filter((id) => getCardById(id));
  if (validDeck.length !== DECK_SIZE) {
    state.currentDeckIds = makeLimitedDeckFromPool(STARTER_IDS.map(getCardById), DECK_SIZE, Date.now());
    saveDeck();
  }

  for (const id of STARTER_IDS) state.collection.add(id);
  for (const id of STARTER_IDS) {
    if (!state.ownedCounts[id]) state.ownedCounts[id] = 1;
  }
  saveCollection();
  saveObject(COUNT_KEY, state.ownedCounts);
  saveObject(DECOR_KEY, state.decorations);
  ensurePlayableDeck();
  renderCollection();
  renderDeckBuilder();
  updateMetaUI();
  applyLanguage();
}

window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", " "].includes(event.key)) event.preventDefault();

  if (event.key === " " && screens.game.classList.contains("screen-active")) flipCard();
  if (event.key.toLowerCase() === "b" && screens.game.classList.contains("screen-active")) bankPlayer();
  if (event.key === "Escape") {
    if (!els.detailModal.classList.contains("hidden")) closeCardDetail();
    else if (!els.ratesModal.classList.contains("hidden")) closeRatesModal();
    else if (!els.settingsModal.classList.contains("hidden")) closeSettingsModal();
    else openMenu();
  }
});

window.addEventListener("wheel", (event) => {
  if (
    !screens.collection.classList.contains("screen-active")
    && !screens.deck.classList.contains("screen-active")
    && !screens.shop.classList.contains("screen-active")
  ) event.preventDefault();
}, { passive: false });

els.collectionButton.addEventListener("click", openCollection);
els.deckButton.addEventListener("click", openDeck);
els.shopButton.addEventListener("click", openShop);
els.collectionBack.addEventListener("click", openMenu);
els.deckBack.addEventListener("click", openMenu);
els.shopBack.addEventListener("click", openMenu);
els.collectionGrid.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-card-id]");
  if (cardButton) openCardDetail(cardButton.dataset.cardId);
});
els.deckPreview.addEventListener("click", (event) => {
  const slot = event.target.closest("[data-remove-card-index]");
  if (slot) removeCardFromDeck(Number(slot.dataset.removeCardIndex));
});
els.deckPoolGrid.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-add-card-id]");
  if (cardButton) addCardToDeck(cardButton.dataset.addCardId);
});
els.gachaGrid.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-card-id]");
  if (cardButton) openCardDetail(cardButton.dataset.cardId);
});
els.detailClose.addEventListener("click", closeCardDetail);
els.detailModal.addEventListener("click", (event) => {
  if (event.target === els.detailModal) closeCardDetail();
});
els.ratesButton.addEventListener("click", openRatesModal);
els.ratesClose.addEventListener("click", closeRatesModal);
els.ratesModal.addEventListener("click", (event) => {
  if (event.target === els.ratesModal) closeRatesModal();
});
els.settingsButton.addEventListener("click", openSettingsModal);
els.settingsClose.addEventListener("click", closeSettingsModal);
els.settingsModal.addEventListener("click", (event) => {
  if (event.target === els.settingsModal) closeSettingsModal();
});
els.languageSelect.addEventListener("change", () => {
  state.language = els.languageSelect.value;
  saveString(LANGUAGE_KEY, state.language);
  applyLanguage();
});
els.soundToggle.addEventListener("change", () => {
  state.soundEnabled = els.soundToggle.checked;
  saveString(SOUND_KEY, state.soundEnabled ? "on" : "off");
});
els.autoDeck.addEventListener("click", autoFillDeck);
els.clearDeck.addEventListener("click", clearDeck);
els.pullOne.addEventListener("click", () => performGachaPull(1));
els.pullTen.addEventListener("click", () => performGachaPull(10));
els.vsButtons.forEach((button) => {
  button.addEventListener("click", () => beginBattle(button.dataset.vs));
});
els.back.addEventListener("click", openMenu);
els.restart.addEventListener("click", () => beginBattle(state.difficulty));
els.plainRestart.addEventListener("click", () => beginBattle(state.difficulty));
els.rewardAd.addEventListener("click", claimRewardAd);
els.playerHand.addEventListener("click", (event) => {
  const handButton = event.target.closest("[data-hand-index]");
  if (!handButton) return;
  playSound("flip");
  drawCard("player", Number(handButton.dataset.handIndex));
});
els.playerButton.addEventListener("click", flipCard);
els.flipAction.addEventListener("click", flipCard);
els.bankAction.addEventListener("click", bankPlayer);

setupInitialState();
poki.init();

