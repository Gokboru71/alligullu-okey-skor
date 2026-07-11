/* ==========================================
   ALLI GÜLLÜ OKEY PRO
   Version 1.0
========================================== */

const APP_VERSION = "1.0.0";

const STORAGE_KEY = "alliGulluOkeyPro";

/* ==========================================
   SABİTLER
========================================== */

const MAX_HANDS = 5;

const DEFAULT_GAME = {

    mode: "team",

    indicator: "blue",

    multiplier: 6,

    hand: 1,

    startedAt: Date.now(),

    teamAReward: 0,
    teamAPenalty: 0,

    teamBReward: 0,
    teamBPenalty: 0

};

/* ==========================================
   AVATARLAR
========================================== */

const AVATARS = [

    "IMG_20260710_211030",
    "IMG_20260710_211058",
    "IMG_20260710_211122",
    "IMG_20260710_211151",
    "IMG_20260710_211242",
    "IMG_20260710_211315",
    "IMG_20260710_211347",
    "IMG_20260710_211418",
    "IMG_20260710_211450"

];

/* ==========================================
   UYGULAMA
========================================== */

const app = {

    players: [],

    games: [],

    tableSeats: [

        null,
        null,
        null,
        null

    ],

    lastHand: null,

    currentSeat: -1,

    editingPlayer: null,

    selectedAvatar: AVATARS[0],

    game: structuredClone(DEFAULT_GAME)

};

/* ==========================================
   SAYFA GEÇİŞLERİ
========================================== */

function openPage(id){

    document
        .querySelectorAll(".page")
        .forEach(page=>page.classList.remove("active"));

    const page=document.getElementById(id);

    if(!page) return;

    page.classList.add("active");

    switch(id){

        case "playersPage":
            renderPlayers();
            break;

        case "gamePage":
            renderTable();
            break;

        case "historyPage":
            renderHistory();
            break;

        case "statsPage":
            renderStats();
            break;

        case "settingsPage":
            renderSettings();
            break;

    }

}

/* ==========================================
   LOCAL STORAGE
========================================== */

function save(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(app)

    );

}

function load(){

    const data=

        localStorage.getItem(STORAGE_KEY);

    if(!data) return;

    try{

        const parsed=JSON.parse(data);

        Object.assign(app,parsed);

    }

    catch(e){

        console.error(e);

    }

}
