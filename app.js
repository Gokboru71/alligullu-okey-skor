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
   GAME RULES
========================================== */

const GAME_RULES = {

    HAND_COUNT: 5,

    COLORS: {

        yellow: {
            reward: 30,
            penalty: 3
        },

        red: {
            reward: 40,
            penalty: 4
        },

        black: {
            reward: 50,
            penalty: 5
        },

        blue: {
            reward: 60,
            penalty: 6
        },

        joker: {
            reward: 100,
            penalty: 10
        }

    },

    FINISH: {

        normal: 1,

        okey: 2,

        konken: 2,

        konkenOkey: 4

    },

    FAKE_OKEY_MULTIPLIER: 10

};

/* ==========================================
   RULES ENGINE
========================================== */

const RULES={

    hands:5,

    colors:{

        yellow:{
            reward:30,
            penalty:3
        },

        red:{
            reward:40,
            penalty:4
        },

        black:{
            reward:50,
            penalty:5
        },

        blue:{
            reward:60,
            penalty:6
        },

        joker:{
            reward:100,
            penalty:10
        }

    },

    finishMultiplier:{

        normal:1,

        okey:2,

        konken:2,

        konkenOkey:4

    },

    fakeOkeyMultiplier:10

};

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

/* ==========================================
   VARSAYILAN OYUNCULAR
========================================== */

const DEFAULT_PLAYERS = [

    ["Fatih","IMG_20260710_211030"],
    ["Mustafa","IMG_20260710_211058"],
    ["Cumali","IMG_20260710_211122"],
    ["Cemil","IMG_20260710_211151"],
    ["Ali","IMG_20260710_211242"],
    ["Şefik","IMG_20260710_211315"],
    ["Yıldırım","IMG_20260710_211347"],
    ["Hakkı","IMG_20260710_211418"]

];

function emptyStats(){

    return{

        games:0,
        wins:0,

        normal:0,
        okey:0,
        konken:0,
        konkenOkey:0,
        renk:0,

        reward:0,
        penalty:0

    };

}

/* ==========================================
   İLK KURULUM
========================================== */

function createDefaultPlayers(){

    app.players=[];

    DEFAULT_PLAYERS.forEach((p,index)=>{

        app.players.push({

            id:Date.now()+index,

            name:p[0],

            avatar:p[1],

            stats:emptyStats()

        });

    });

}

/* ==========================================
   OYUNCU BUL
========================================== */

function getPlayer(id){

    return app.players.find(p=>p.id===id);

}

/* ==========================================
   OYUNCU EKLE
========================================== */

function addPlayer(name,avatar){

    app.players.push({

        id:Date.now(),

        name,

        avatar,

        stats:emptyStats()

    });

    save();

    renderPlayers();

}

/* ==========================================
   OYUNCU GÜNCELLE
========================================== */

function updatePlayer(id,name,avatar){

    const player=getPlayer(id);

    if(!player) return;

    player.name=name;

    player.avatar=avatar;

    save();

    renderPlayers();

    renderTable();

}

/* ==========================================
   OYUNCU SİL
========================================== */

function deletePlayer(id){

    const player=getPlayer(id);

    if(!player) return;

    if(!confirm(player.name+" silinsin mi?"))
        return;

    app.players=

        app.players.filter(p=>p.id!==id);

    app.tableSeats=

        app.tableSeats.map(seat=>

            seat===id
            ? null
            : seat

        );

    save();

    renderPlayers();

    renderTable();

}

/* ==========================================
   AVATAR SEÇ
========================================== */

function selectAvatar(name){

    app.selectedAvatar=name;

    renderAvatarGrid();

}

/* ==========================================
   OYUNCULAR SAYFASI
========================================== */

function renderPlayers(){

    const list = document.getElementById("playerList");

    if(!list) return;

    list.innerHTML = "";

    if(app.players.length===0){

        list.innerHTML = `
            <div class="emptyCard">
                Henüz oyuncu bulunmuyor.
            </div>
        `;

        return;
    }

    app.players.forEach(player=>{

        const stats = player.stats || emptyStats();

        list.innerHTML += `

<div class="playerCard">

    <div class="playerLeft">

        <img
            src="avatarlar/${player.avatar}.png"
            class="tableAvatar"
            onerror="this.src='avatarlar/${AVATARS[0]}.png'">

        <div class="playerInfo">

            <div class="playerName">
                ${player.name}
            </div>

            <div class="playerStats">

                🎮 ${stats.games} oyun

            </div>

        </div>

    </div>

    <div class="playerButtons">

        <button
            onclick="editPlayer(${player.id})">

            ✏️

        </button>

        <button
            onclick="deletePlayer(${player.id})">

            🗑️

        </button>

    </div>

</div>

`;

    });

}

/* ==========================================
   OYUNCU DÜZENLE
========================================== */

function editPlayer(id){

    const player = getPlayer(id);

    if(!player) return;

    app.editingPlayer = player;

    app.selectedAvatar = player.avatar;

    document.getElementById("playerName").value = player.name;

    renderAvatarGrid();

    document
        .getElementById("playerModal")
        .classList.add("show");

}

/* ==========================================
   OYUNCU KAYDET
========================================== */

function savePlayer(){

    const input =
        document.getElementById("playerName");

    const name = input.value.trim();

    if(name===""){

        alert("Oyuncu adı giriniz.");

        return;

    }

    if(app.editingPlayer){

        updatePlayer(

            app.editingPlayer.id,

            name,

            app.selectedAvatar

        );

    }
    else{

        addPlayer(

            name,

            app.selectedAvatar

        );

    }

    input.value="";

    app.editingPlayer=null;

    app.selectedAvatar=AVATARS[0];

    closePlayerModal();

}

/* ==========================================
   MODAL AÇ
========================================== */

function openPlayerModal(){

    app.editingPlayer = null;

    app.selectedAvatar = AVATARS[0];

    document.getElementById("playerName").value="";

    renderAvatarGrid();

    document
        .getElementById("playerModal")
        .classList.add("show");

}

/* ==========================================
   MODAL KAPAT
========================================== */

function closePlayerModal(){

    document
        .getElementById("playerModal")
        .classList.remove("show");

}

/* ==========================================
   MASA
========================================== */

function renderTable(){

    const gameOptions=document.getElementById("gameOptions");

    if(gameOptions){

        const ready=
            app.tableSeats.every(seat=>seat!==null);

        gameOptions.style.display=
            ready ? "block" : "none";

    }

    for(let i=0;i<4;i++){

        renderSeat(i);

    }

}


/* ==========================================
   KOLTUK ÇİZ
========================================== */

function renderSeat(index){

    const seat=document.getElementById("seat"+index);

    if(!seat) return;

    const playerId=app.tableSeats[index];

    if(playerId===null){

        seat.innerHTML=`

<button class="seatButton"

onclick="chooseSeat(${index})">

➕

<br>

Oyuncu Seç

</button>

`;

        return;

    }

    const player=getPlayer(playerId);

    if(!player){

        app.tableSeats[index]=null;

        save();

        renderSeat(index);

        return;

    }

    seat.innerHTML=`

<div class="seatCard">

<img

src="avatarlar/${player.avatar}.png"

class="tableAvatar"

onerror="this.src='avatarlar/${AVATARS[0]}.png'">

<div class="seatName">

${player.name}

</div>

<div class="seatButtons">

<button

onclick="chooseSeat(${index})">

🔄

</button>

<button

onclick="clearSeat(${index})">

❌

</button>

</div>

</div>

`;

}

/* ==========================================
   KOLTUK SEÇ
========================================== */

function chooseSeat(index){

    app.currentSeat=index;

    renderPlayerSheet();

    document

        .getElementById("playerSheet")

        .classList.add("show");

}

/* ==========================================
   KOLTUĞU BOŞALT
========================================== */

function clearSeat(index){

    app.tableSeats[index]=null;

    save();

    renderTable();

}

/* ==========================================
   OYUNCU SEÇİMİ
========================================== */

function renderPlayerSheet(){

    const area=document.getElementById("sheetPlayerList");

    if(!area) return;

    area.innerHTML="";

    const players=

        app.players.filter(player=>

            !app.tableSeats.includes(player.id)

        );

    if(players.length===0){

        area.innerHTML=`

<div class="emptyCard">

Seçilebilecek oyuncu kalmadı.

</div>

`;

        return;

    }

    players.forEach(player=>{

        area.innerHTML+=`

<div

class="sheetPlayer"

onclick="selectSeatPlayer(${player.id})">

<img

src="avatarlar/${player.avatar}.png"

class="tableAvatar"

onerror="this.src='avatarlar/${AVATARS[0]}.png'">

<div>

<div class="playerName">

${player.name}

</div>

<div class="playerStats">

🎮 ${player.stats.games}

</div>

</div>

</div>

`;

    });

}

/* ==========================================
   OYUNCUYU OTURT
========================================== */

function selectSeatPlayer(playerId){

    app.tableSeats[app.currentSeat]=playerId;

    save();

    closePlayerSheet();

    renderTable();

}

/* ==========================================
   PLAYER SHEET
========================================== */

function closePlayerSheet(){

    app.currentSeat=-1;

    document

        .getElementById("playerSheet")

        .classList.remove("show");

}

/* ==========================================
   YENİ OYUN
========================================== */

function newGame(){

    // Masada 4 oyuncu olmalı
    if(app.tableSeats.includes(null)){

        alert("Lütfen önce 4 oyuncuyu masaya yerleştirin.");

        return;

    }

    app.game = structuredClone(DEFAULT_GAME);

    app.game.players = [...app.tableSeats];

    app.game.hands = [];

    app.game.startedAt = Date.now();

    save();

    renderGameInfo();

    openPage("gamePage");

}

/* ==========================================
   OYUN BİLGİLERİ
========================================== */

function renderGameInfo(){

    const hand =
        document.getElementById("handNumber");

    const indicator =
        document.getElementById("indicatorText");

    const multiplier =
        document.getElementById("multiplierText");

    if(hand)
        hand.textContent=app.game.hand;

    if(indicator)
        indicator.textContent=app.game.indicator;

    if(multiplier)
        multiplier.textContent=app.game.multiplier;

}
/* ==========================================
   EL EKLE
========================================== */

function addHand(result){

    if(!app.game.hands){

        app.game.hands=[];

    }

    app.game.hands.push({

        hand:app.game.hand,

        result:result,

        time:Date.now()

    });

    app.lastHand = structuredClone(

        app.game.hands[app.game.hands.length-1]

    );

    app.game.hand++;

    save();

    renderGameInfo();

}

/* ==========================================
   SON ELİ GERİ AL
========================================== */

function undoLastHand(){

    if(!app.game.hands) return;

    if(app.game.hands.length===0){

        alert("Geri alınacak el yok.");

        return;

    }

    app.game.hands.pop();

    app.game.hand =

        Math.max(1,app.game.hand-1);

    save();

    renderGameInfo();

}

/* ==========================================
   OYUNU İPTAL ET
========================================== */

function cancelGame(){

    if(!confirm("Oyun iptal edilsin mi?"))

        return;

    app.game = structuredClone(DEFAULT_GAME);

    save();

    renderGameInfo();

}

/* ==========================================
/* ==========================================
   EL HESAPLAMA MOTORU
========================================== */

function calculateHand(data){

    const{

        winner,
        color,
        finish,
        remaining,

        fakeOkey=false,

        colorFinish=false

    }=data;

    const colorRule=RULES.colors[color];

    if(!colorRule){

        throw new Error("Geçersiz renk.");

    }

    let reward=colorRule.reward;

    let penalty=

        remaining*

        colorRule.penalty;

    penalty*=

        RULES.finishMultiplier[finish] || 1;

    if(fakeOkey){

        penalty*=RULES.fakeOkeyMultiplier;

        reward*=2;

    }

    const result={

        hand:app.game.hand,

        winner,

        color,

        finish,

        remaining,

        fakeOkey,

        colorFinish,

        rewardA:0,
        rewardB:0,

        penaltyA:0,
        penaltyB:0,

        time:Date.now()

    };

    if(winner==="A"){

        result.rewardA=-reward;

        result.penaltyB=penalty;

    }
    else{

        result.rewardB=-reward;

        result.penaltyA=penalty;

    }

    return result;

}

/* ==========================================
   RENK BİTİŞ MOTORU
========================================== */

function calculateColorFinish(data){

    const {

        winner,
        color,
        remaining,

        konken=false,
        konkenOkey=false,
        fakeOkey=false

    } = data;

    const rule = RULES.colors[color];

    if(!rule){

        throw new Error("Geçersiz renk.");

    }

    let reward = rule.reward;

    let penalty = remaining * rule.penalty;

    /* Konken */

    if(konken){

        reward *= 20;
        penalty *= 2;

    }

    /* Konkenden Okey */

    if(konkenOkey){

        reward *= 2;
        penalty *= 2;

    }

    /* Sahte Okey */

    if(fakeOkey){

        reward = GAME_RULES.COLORS.joker.reward;

        penalty =

            remaining *

            GAME_RULES.COLORS.joker.penalty;

    }

    const result={

        hand:app.game.hand,

        finish:"renk",

        winner,

        color,

        remaining,

        konken,

        konkenOkey,

        fakeOkey,

        rewardA:0,
        rewardB:0,

        penaltyA:0,
        penaltyB:0,

        endGame:true,

        time:Date.now()

    };

    if(winner==="A"){

        result.rewardA=-reward;

        result.penaltyB=penalty;

    }
    else{

        result.rewardB=-reward;

        result.penaltyA=penalty;

    }

    return result;

}

/* ==========================================
   ELİ BİTİR
========================================== */

function finishHand(type){

    const result=

        calculateHand(

            type,

            app.game.multiplier

        );

    addHand(result);

}

/* ==========================================
   KAZANAN TAKIM
========================================== */

function setWinner(team){

    app.game.winner=team;

}

/* ==========================================
   ÖDÜL
========================================== */

function addReward(team){

    if(team==="A")

        app.game.teamAReward++;

    else

        app.game.teamBReward++;

    save();

}

/* ==========================================
   CEZA
========================================== */

function addPenalty(team){

    if(team==="A")

        app.game.teamAPenalty++;

    else

        app.game.teamBPenalty++;

    save();

}

/* ==========================================
   TOPLAM SKOR
========================================== */

function calculateGameScore(){

    let teamA=0;

    let teamB=0;

    app.game.hands.forEach(hand=>{

        teamA+=hand.result.teamA;

        teamB+=hand.result.teamB;

    });

    teamA+=app.game.teamAReward;

    teamA-=app.game.teamAPenalty;

    teamB+=app.game.teamBReward;

    teamB-=app.game.teamBPenalty;

    return{

        teamA,

        teamB

    };

}

/* ==========================================
   OYUN SONU HESAPLAMA
========================================== */

function calculateGameResult(){

    const result={

        teamA:{

            reward:0,

            penalty:0,

            total:0

        },

        teamB:{

            reward:0,

            penalty:0,

            total:0

        },

        winner:null,

        loser:null

    };

    app.game.hands.forEach(hand=>{

        result.teamA.reward += hand.rewardA;
        result.teamA.penalty += hand.penaltyA;

        result.teamB.reward += hand.rewardB;
        result.teamB.penalty += hand.penaltyB;

    });

    result.teamA.total =
        result.teamA.penalty +
        result.teamA.reward;

    result.teamB.total =
        result.teamB.penalty +
        result.teamB.reward;

    if(result.teamA.total < result.teamB.total){

        result.winner="A";
        result.loser="B";

    }

    else if(result.teamB.total < result.teamA.total){

        result.winner="B";
        result.loser="A";

    }

    return result;

}

/* ==========================================
   OYUNU BİTİR
========================================== */

function finishGame(){

    const result=

        calculateGameResult();

    const endedBy = app.game.hands.some(hand => hand.endGame)
    ? "renk"
    : "normal";

const startedAt = app.game.startedAt || Date.now();
const finishedAt = Date.now();

app.games.push({

    id: finishedAt,

    version: APP_VERSION,

    date: new Date(finishedAt).toISOString(),

    startedAt,

    finishedAt,

    duration: finishedAt - startedAt,

    endedBy,

    players: [...app.tableSeats],

    hands: structuredClone(app.game.hands),

    result

});

    updatePlayerStats(result);

    app.game=

        structuredClone(DEFAULT_GAME);

    app.tableSeats=[

        null,
        null,
        null,
        null

    ];

    save();

    renderTable();

    renderPlayers();

    openPage("historyPage");

}

/* ==========================================
   OYUN GEÇMİŞİ
========================================== */

function renderHistory(){

    const list = document.getElementById("historyList");

    if(!list) return;

    list.innerHTML = "";

    if(app.games.length===0){

        list.innerHTML = `
            <div class="emptyCard">
                Henüz oyun oynanmadı.
            </div>
        `;

        return;

    }

    [...app.games].reverse().forEach(game=>{

        const date = new Date(game.date);

        const endedText =
            game.endedBy==="renk"
            ? "🌈 Renk"
            : "🎯 5 El";

        const durationMin =
            Math.round((game.duration||0)/60000);

        list.innerHTML += `

<div
class="historyCard"
onclick="openGameReport(${game.id})">

    <div class="historyHeader">

        <strong>

        ${date.toLocaleDateString("tr-TR")}

        </strong>

        <span>

        ${endedText}

        </span>

    </div>

    <div>

        Süre :

        ${durationMin} dk

    </div>

    <div>

        Sürüm :

        ${game.version}

    </div>

    <div>

        A Takımı :

        ${game.result.teamA.total}

    </div>

    <div>

        B Takımı :

        ${game.result.teamB.total}

    </div>

    <div>

        🏆 Kazanan :

        Takım ${game.result.winner}

    </div>

</div>

`;

    });

}

/* ==========================================
   MAÇ KARNESİ
========================================== */

function openGameReport(gameId){

    const game = app.games.find(g=>g.id===gameId);

    if(!game) return;

    const modal =
        document.getElementById("reportModal");

    const body =
        document.getElementById("reportBody");

    if(!modal || !body) return;

    body.innerHTML="";

    const date=new Date(game.date);

    body.innerHTML+=`

<h2>

📝 Maç Karnesi

</h2>

<div class="reportInfo">

<div>

📅

${date.toLocaleDateString("tr-TR")}

</div>

<div>

🕒

${date.toLocaleTimeString("tr-TR")}

</div>

<div>

⌛

${Math.round(game.duration/60000)} dk

</div>

<div>

🏁

${game.endedBy=="renk"?"🌈 Renk":"🎯 5 El"}

</div>

<div>

📦

v${game.version}

</div>

</div>

`;

    game.hands.forEach(hand=>{

        body.innerHTML+=`

<div class="handCard">

<h3>

${hand.hand}. El

</h3>

<div>

🏆 Kazanan

Takım ${hand.winner}

</div>

<div>

🎨 Renk

${hand.color}

</div>

<div>

🃏 Bitiş

${hand.finish}

</div>

<div>

🎁 A Ödül

${hand.rewardA}

</div>

<div>

🎁 B Ödül

${hand.rewardB}

</div>

<div>

🚫 A Ceza

${hand.penaltyA}

</div>

<div>

🚫 B Ceza

${hand.penaltyB}

</div>

</div>

`;

    });

    body.innerHTML+=`

<div class="resultCard">

<h2>

🏆 SONUÇ

</h2>

<div>

A Takımı

${game.result.teamA.total}

</div>

<div>

B Takımı

${game.result.teamB.total}

</div>

<h3>

Kazanan

Takım ${game.result.winner}

</h3>

</div>

`;

    modal.classList.add("show");

}

function closeReport(){

    document

        .getElementById("reportModal")

        .classList.remove("show");

}

/* ==========================================
   MATCH ANALYTICS
========================================== */

function generateMatchAnalytics(game){

    const analytics={

        teamA:{
            reward:0,
            penalty:0,
            net:0
        },

        teamB:{
            reward:0,
            penalty:0,
            net:0
        },

        hands:[]

    };

    game.hands.forEach(hand=>{

        analytics.teamA.reward+=hand.rewardA;
        analytics.teamA.penalty+=hand.penaltyA;

        analytics.teamB.reward+=hand.rewardB;
        analytics.teamB.penalty+=hand.penaltyB;

        analytics.teamA.net=
            analytics.teamA.penalty+
            analytics.teamA.reward;

        analytics.teamB.net=
            analytics.teamB.penalty+
            analytics.teamB.reward;

        analytics.hands.push({

            hand:hand.hand,

            teamA:analytics.teamA.net,

            teamB:analytics.teamB.net,

            finish:hand.finish,

            color:hand.color

        });

    });

    return analytics;

   const analytics =
    generateMatchAnalytics(game);

renderAnalytics(analytics);

}

/* ==========================================
   ANALİZİ GÖSTER
========================================== */

function renderAnalytics(data){

    const body =
        document.getElementById("reportBody");

    body.innerHTML += `

<h2>

📊 Maç Analizi

</h2>

`;

    data.hands.forEach(hand=>{

        body.innerHTML += `

<div class="analyticsRow">

<div>

${hand.hand}. El

</div>

<div>

A

${hand.teamA}

</div>

<div>

B

${hand.teamB}

</div>

<div>

${hand.color}

</div>

<div>

${hand.finish}

</div>

</div>

`;

    });

}

/* ==========================================
   GEÇMİŞİ TEMİZLE
========================================== */

function clearHistory(){

    if(!confirm("Tüm oyun geçmişi silinsin mi?"))

        return;

    app.games=[];

    save();

    renderHistory();

}

/* ==========================================
   İSTATİSTİKLERİ GÜNCELLE
========================================== */

function updatePlayerStats(result){

    app.tableSeats.forEach((playerId,index)=>{

        const player=

            getPlayer(playerId);

        if(!player) return;

        player.stats.games++;

        const team=

            index%2===0
            ? "A"
            : "B";

        if(team===result.winner)

            player.stats.wins++;

    });

}

/* ==========================================
   OYUN BİTTİ Mİ?
========================================== */

function checkGameFinished(){

    if(!app.game.hands)

        return false;

    if(app.game.hands.some(h=>h.endGame))

        return true;

    return app.game.hands.length>=RULES.hands;

}

/* ==========================================
   ANALYTICS ENGINE
========================================== */

function calculateAnalytics(game){

    const report={

        winner:game.result.winner,

        loser:game.result.loser,

        totalHands:game.hands.length,

        endedBy:game.endedBy,

        duration:game.duration,

        version:game.version,

        highestPenalty:0,

        highestReward:0,

        mvp:null,

        cleanPlayer:null,

        handHistory:[],

        players:{}

    };

    game.players.forEach(id=>{

        const player=getPlayer(id);

        if(!player) return;

        report.players[id]={

            id,

            name:player.name,

            avatar:player.avatar,

            games:1,

            reward:0,

            penalty:0,

            normal:0,

            okey:0,

            konken:0,

            konkenOkey:0,

            renk:0,

            wins:0

        };

    });

    game.hands.forEach(hand=>{

        report.handHistory.push({

            hand:hand.hand,

            winner:hand.winner,

            finish:hand.finish,

            color:hand.color,

            rewardA:hand.rewardA,

            rewardB:hand.rewardB,

            penaltyA:hand.penaltyA,

            penaltyB:hand.penaltyB

        });

        report.highestPenalty=Math.max(

            report.highestPenalty,

            hand.penaltyA,

            hand.penaltyB

        );

        report.highestReward=Math.max(

            report.highestReward,

            Math.abs(hand.rewardA),

            Math.abs(hand.rewardB)

        );

    });

    return report;

}

/* ==========================================
   MVP
========================================== */

function calculateMVP(game){

    const players={};

    game.players.forEach(id=>{

        players[id]=0;

    });

    game.hands.forEach(hand=>{

        const team=

            hand.winner==="A"

            ? [0,2]

            : [1,3];

        team.forEach(index=>{

            const id=game.players[index];

            players[id]++;

        });

    });

    let winner=null;

    let score=-1;

    Object.keys(players).forEach(id=>{

        if(players[id]>score){

            score=players[id];

            winner=id;

        }

    });

    return getPlayer(Number(winner));

}

/* ==========================================
   CLEAN PLAYER
========================================== */

function calculateCleanPlayer(game){

    const players={};

    game.players.forEach(id=>{

        players[id]=0;

    });

    game.hands.forEach(hand=>{

        if(hand.penaltyA>0){

            players[game.players[0]]+=hand.penaltyA;

            players[game.players[2]]+=hand.penaltyA;

        }

        if(hand.penaltyB>0){

            players[game.players[1]]+=hand.penaltyB;

            players[game.players[3]]+=hand.penaltyB;

        }

    });

    let clean=null;

    let value=Infinity;

    Object.keys(players).forEach(id=>{

        if(players[id]<value){

            value=players[id];

            clean=id;

        }

    });

    return getPlayer(Number(clean));

}

/* ==========================================
   RESULT ENGINE
========================================== */

function createGameResult(){

    return{

        teamA:{
            reward:0,
            penalty:0,
            total:0
        },

        teamB:{
            reward:0,
            penalty:0,
            total:0
        },

        winner:null,

        loser:null,

        finished:false,

        endedBy:"normal"

    };

}

function applyHandToResult(result,hand){

    result.teamA.reward+=hand.rewardA;
    result.teamA.penalty+=hand.penaltyA;

    result.teamB.reward+=hand.rewardB;
    result.teamB.penalty+=hand.penaltyB;

    result.teamA.total=
        result.teamA.penalty+
        result.teamA.reward;

    result.teamB.total=
        result.teamB.penalty+
        result.teamB.reward;

}

function decideWinner(result){

    if(result.teamA.total>

       result.teamB.total){

        result.winner="B";
        result.loser="A";

    }

    else if(result.teamB.total>

            result.teamA.total){

        result.winner="A";
        result.loser="B";

    }

    else{

        result.winner="DRAW";
        result.loser=null;

    }

}

function calculateGameResult(){

    const result=

        createGameResult();

    app.game.hands.forEach(hand=>{

        applyHandToResult(

            result,

            hand

        );

        if(hand.endGame)

            result.endedBy="renk";

    });

    decideWinner(result);

    result.finished=true;

    return result;

}

/* ==========================================
   STATISTICS ENGINE
========================================== */

function createStatistics(){

    return{

        players:{},

        totalGames:0,

        totalHands:0,

        totalRewards:0,

        totalPenalties:0

    };

}

function createPlayerStatistics(player){

    return{

        id:player.id,

        name:player.name,

        avatar:player.avatar,

        games:0,

        wins:0,

        losses:0,

        rewards:0,

        penalties:0,

        normal:0,

        okey:0,

        konken:0,

        konkenOkey:0,

        renk:0

    };

}

function initializeStatistics(stats){

    app.players.forEach(player=>{

        stats.players[player.id]=

            createPlayerStatistics(player);

    });

}

function applyGameStatistics(stats,game){

    stats.totalGames++;

    stats.totalHands+=game.hands.length;

    game.hands.forEach(hand=>{

        stats.totalRewards+=

            Math.abs(hand.rewardA)+

            Math.abs(hand.rewardB);

        stats.totalPenalties+=

            hand.penaltyA+

            hand.penaltyB;

    });

}

function updatePlayerStatistics(stats,game){

    game.players.forEach((playerId,index)=>{

        const player=

            stats.players[playerId];

        if(!player) return;

        player.games++;

        const team=

            index%2===0

            ? "A"

            : "B";

        if(team===game.result.winner)

            player.wins++;

        else

            player.losses++;

    });

}

function rebuildStatistics(){

    const stats=

        createStatistics();

    initializeStatistics(stats);

    app.games.forEach(game=>{

        applyGameStatistics(

            stats,

            game

        );

        updatePlayerStatistics(

            stats,

            game

        );

    });

    return stats;

}

/* ==========================================
   ANALYTICS ENGINE
========================================== */

function createAnalytics(game){

    return{

        gameId:game.id,

        winner:game.result.winner,

        loser:game.result.loser,

        endedBy:game.endedBy,

        duration:game.duration,

        version:game.version,

        hands:[],

        players:{},

        highestPenalty:0,

        highestReward:0,

        longestHand:0,

        shortestHand:Infinity,

        mvp:null

    };

}

function initializeAnalyticsPlayers(game,analytics){

    game.players.forEach(playerId=>{

        const player=getPlayer(playerId);

        if(!player) return;

        analytics.players[playerId]={

            id:player.id,

            name:player.name,

            avatar:player.avatar,

            score:0,

            wins:0,

            rewards:0,

            penalties:0,

            konken:0,

            konkenOkey:0,

            renk:0,

            normal:0,

            okey:0

        };

    });

}

function applyHandAnalytics(game,analytics){

    game.hands.forEach(hand=>{

        analytics.hands.push(hand);

        analytics.highestPenalty=Math.max(

            analytics.highestPenalty,

            hand.penaltyA,

            hand.penaltyB

        );

        analytics.highestReward=Math.max(

            analytics.highestReward,

            Math.abs(hand.rewardA),

            Math.abs(hand.rewardB)

        );

    });

}

function calculatePerformanceScore(playerId,game){

    let score=0;

    const index=

        game.players.indexOf(playerId);

    if(index===-1) return 0;

    const team=

        index%2===0

        ? "A"

        : "B";

    game.hands.forEach(hand=>{

        if(hand.winner===team)

            score+=3;

        switch(hand.finish){

            case "normal":

                score+=1;
                break;

            case "okey":

                score+=2;
                break;

            case "konken":

                score+=4;
                break;

            case "konkenOkey":

                score+=8;
                break;

            case "renk":

                score+=10;
                break;

        }

    });

    return score;

}

function calculateMVP(game,analytics){

    let best=null;

    let bestScore=-1;

    game.players.forEach(playerId=>{

        const score=

            calculatePerformanceScore(

                playerId,

                game

            );

        analytics.players[playerId].score=score;

        if(score>bestScore){

            bestScore=score;

            best=playerId;

        }

    });

    analytics.mvp=best;

}

function generateAnalytics(game){

    const analytics=

        createAnalytics(game);

    initializeAnalyticsPlayers(

        game,

        analytics

    );

    applyHandAnalytics(

        game,

        analytics

    );

    calculateMVP(

        game,

        analytics

    );

    return analytics;

}

/* ==========================================
   REPORT ENGINE
========================================== */

function createMatchReport(game){

    return{

        id:game.id,

        version:game.version,

        createdAt:new Date().toISOString(),

        summary:null,

        players:[],

        hands:[],

        analytics:null,

        result:null

    };

}

function addPlayersToReport(game,report){

    game.players.forEach(id=>{

        const player=getPlayer(id);

        if(!player) return;

        report.players.push({

            id:player.id,

            name:player.name,

            avatar:player.avatar

        });

    });

}

function buildHandReport(hand){

    const lines=[];

    const colorRule=RULES.colors[hand.color];

    lines.push(

        `🎨 Açılan renk : ${hand.color}`

    );

    lines.push(

        `🏁 Bitiş : ${hand.finish}`

    );

    lines.push(

        `🏆 Kazanan : Takım ${hand.winner}`

    );

    lines.push(

        `📦 Rakip elde kalan sayı : ${hand.remaining}`

    );

    lines.push(

        `🎁 Ödül : ${Math.abs(hand.rewardA||hand.rewardB)}`

    );

    lines.push(

        `🚫 Ceza : ${hand.penaltyA||hand.penaltyB}`

    );

    return{

        ...hand,

        explanation:lines

    };

}

function explainRules(hand){

    const text=[];

    text.push(

        `${hand.color} rengi seçildi.`

    );

    text.push(

        `Ceza katsayısı : ${RULES.colors[hand.color].penalty}`

    );

    text.push(

        `Ödül : ${RULES.colors[hand.color].reward}`

    );

    if(hand.finish==="okey")

        text.push(

            "Okey ile bitildi. Ceza x2 uygulandı."

        );

    if(hand.konken)

        text.push(

            `Konken yapıldı.
Ceza x${RULES.special.konkenPenalty}
Ödül x${RULES.special.konkenReward}`

        );

    if(hand.konkenOkey)

        text.push(

            `Konkenden Okey yapıldı.
Ceza x${RULES.special.konkenOkeyPenalty}
Ödül x${RULES.special.konkenOkeyReward}`

        );

    if(hand.fakeOkey)

        text.push(

            "Sahte Okey kullanıldı.
Çarpan x10 uygulandı."

        );

    if(hand.endGame)

        text.push(

            "🌈 Renk yapıldığı için oyun hemen sona erdi."

        );

    return text;

}

function generateReport(game){

    const report=

        createMatchReport(game);

    addPlayersToReport(

        game,

        report

    );

    game.hands.forEach(hand=>{

        const row=

            buildHandReport(hand);

        row.rules=

            explainRules(hand);

        report.hands.push(row);

    });

    report.analytics=

        generateAnalytics(game);

    report.result=

        game.result;

    return report;

}

/* ==========================================
   UI ENGINE
========================================== */

function refreshUI(){

    renderPlayers();

    renderTable();

    renderHistory();

    renderStats();

    renderGameInfo();

}

function refreshCurrentPage(){

    const page=document.querySelector(".page.active");

    if(!page) return;

    switch(page.id){

        case "playersPage":

            renderPlayers();

            break;

        case "gamePage":

            renderTable();

            renderGameInfo();

            break;

        case "historyPage":

            renderHistory();

            break;

        case "statsPage":

            renderStats();

            break;

    }

}

function showMessage(text){

    alert(text);

}

function confirmAction(message){

    return confirm(message);

}

function setLoading(state){

    document.body.classList.toggle(

        "loading",

        state

    );

}

function showError(error){

    console.error(error);

    alert(

        "Hata : " +

        error.message

    );

}

function safeExecute(callback){

    try{

        callback();

    }

    catch(error){

        showError(error);

    }

}

/* ==========================================
   BOOTSTRAP
========================================== */

function initializeApp(){

    load();

    if(app.players.length===0){

        createDefaultPlayers();

    }

    refreshUI();

    openPage("homePage");

}

/* ==========================================
   UYGULAMAYI BAŞLAT
========================================== */

document.addEventListener(

    "DOMContentLoaded",

    initializeApp

);
































