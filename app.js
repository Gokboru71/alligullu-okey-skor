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
   MODAL
========================================== */

function openPlayerModal(player=null){

    app.editingPlayer=player;

    app.selectedAvatar=

        player
        ? player.avatar
        : AVATARS[0];

    document.getElementById("playerModal")
        .classList.add("show");

}

function closePlayerModal(){

    document.getElementById("playerModal")
        .classList.remove("show");

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

    const area=document.getElementById("sheetPlayers");

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
























