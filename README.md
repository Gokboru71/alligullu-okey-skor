<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Allı Güllü Okey Bro Ağsatim</title>

<style>

#handEntry input[type=number]{

width:100%;

padding:10px;

font-size:18px;

margin-top:6px;

}

#handEntry label{

display:block;

margin-top:10px;

font-weight:bold;

}

.finishGroup{

margin-top:12px;

}

.finishGroup label{

display:block;

padding:6px 0;

font-size:15px;

}

:root{
    --green:#0f6b3e;
    --green2:#16834e;
    --wood:#7a4d1d;
    --bg:#eef2f3;
    --card:#ffffff;
    --text:#222;
    --radius:18px;
}

/* ===== Indicator Sheet ===== */

.colorItem{

display:flex;

justify-content:space-between;

align-items:center;

padding:15px;

border-bottom:1px solid #ddd;

cursor:pointer;

font-size:20px;

}

.colorItem:hover{

background:#f5f5f5;

}
    
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:var(--bg);
    color:var(--text);
}

header{
    background:linear-gradient(90deg,var(--green),var(--green2));
    color:#fff;
    padding:20px;
    text-align:center;
    font-size:24px;
    font-weight:bold;
}

.page{
    display:none;
    padding:15px;
}

.page.active{
    display:block;
}

.card{
    background:var(--card);
    border-radius:var(--radius);
    padding:15px;
    margin-bottom:15px;
    box-shadow:0 5px 12px rgba(0,0,0,.12);
}

button{
    width:100%;
    border:none;
    border-radius:12px;
    padding:15px;
    margin-top:10px;
    background:var(--green);
    color:white;
    font-size:17px;
    cursor:pointer;
}

button:hover{
    background:var(--green2);
}

.playerCard{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:12px;
    border-radius:12px;
    background:#f5f5f5;
    margin-bottom:10px;
}

.avatar{
    font-size:34px;
    margin-right:10px;
}

.playerLeft{
    display:flex;
    align-items:center;
}

.small{
    color:#777;
    font-size:13px;
}

/* ===== Oyuncu Modal ===== */

.modal{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.55);
    display:none;
    justify-content:center;
    align-items:center;
    z-index:1000;
}

.modal.show{
    display:flex;
}

.modalContent{
    width:92%;
    max-width:420px;
    background:white;
    border-radius:18px;
    padding:20px;
}

.modalContent h2{
    margin-bottom:15px;
}

.modalContent input{
    width:100%;
    padding:12px;
    border-radius:10px;
    border:1px solid #ccc;
    margin-bottom:15px;
    font-size:16px;
}

.avatarGrid{
    display:grid;
    grid-template-columns:repeat(6,1fr);
    gap:8px;
    margin-bottom:15px;
}

.avatarItem{
    font-size:28px;
    text-align:center;
    padding:10px;
    border:2px solid #ddd;
    border-radius:12px;
    cursor:pointer;
}

.avatarItem.selected{
    border-color:#0f6b3e;
    background:#dff7e7;
}

.modal{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.45);
    display:none;
    justify-content:center;
    align-items:center;
    padding:20px;
}

.modal.show{
    display:flex;
}

.modalContent{
    background:#fff;
    width:100%;
    max-width:420px;
    border-radius:18px;
    padding:20px;
}

.avatarGrid{
    display:grid;
    grid-template-columns:repeat(6,1fr);
    gap:8px;
    margin:15px 0;
}

.avatarItem{
    font-size:28px;
    border:2px solid #ddd;
    border-radius:12px;
    text-align:center;
    padding:10px;
    cursor:pointer;
}

.avatarItem.selected{
    border-color:#0f6b3e;
    background:#e8f5e9;
}

.modal input{
    width:100%;
    padding:12px;
    border-radius:10px;
    border:1px solid #ccc;
    font-size:16px;
}

/* ===== OKEY MASASI ===== */

.tableArea{
    margin-top:20px;
    display:flex;
    justify-content:center;
}

.okeyTable{

    position:relative;

    width:340px;

    height:340px;

    background:#167a3d;

    border:12px solid #6a3f17;

    border-radius:50%;

    box-shadow:
    inset 0 0 30px rgba(255,255,255,.15),
    0 8px 25px rgba(0,0,0,.35);

}

.seat{

    position:absolute;

    width:90px;

    text-align:center;

}

.seat .avatar{

    font-size:42px;

}

.seat .name{

    font-weight:bold;

}

.seat .score{

    color:white;

    font-size:14px;

    margin-top:4px;

}

#seat1{

    bottom:-30px;
    left:50%;
    transform:translateX(-50%);

}

#seat2{

    top:-30px;
    left:50%;
    transform:translateX(-50%);

}

#seat3{

    right:-30px;
    top:50%;
    transform:translateY(-50%);

}

#seat4{

    left:-30px;
    top:50%;
    transform:translateY(-50%);

}

.tableCenter{

    position:absolute;

    left:50%;
    top:50%;

    transform:translate(-50%,-50%);

    text-align:center;

    color:white;

}

.tableCenter h2{

    font-size:22px;

}

/* ===== Bottom Sheet ===== */

.bottomSheet{

position:fixed;

left:0;

right:0;

bottom:-100%;

background:white;

border-radius:20px 20px 0 0;

padding:20px;

box-shadow:0 -10px 30px rgba(0,0,0,.25);

transition:.30s;

z-index:2000;

max-height:70vh;

overflow:auto;

}

.bottomSheet.show{

bottom:0;

}

.sheetPlayer{

display:flex;

align-items:center;

gap:12px;

padding:14px;

border-bottom:1px solid #eee;

cursor:pointer;

font-size:20px;

}

.sheetPlayer:hover{

background:#f3f3f3;

}
    
</style>

</head>

<body>

<header>

🀄 ALLI GÜLLÜ OKEY AAĞSATİM

</header>

<!-- ANA MENÜ -->

<div class="page active" id="homePage">

<div class="card">

<h2>Hoş Geldiniz</h2>

<p class="small">
Profesyonel Allı Güllü Okey skor takip sistemi
</p>

<button onclick="openPage('playersPage')">
👥 Oyuncular
</button>

<button onclick="openPage('gamePage')">
🎮 Yeni Oyun
</button>

<button onclick="openPage('historyPage')">
📜 Geçmiş
</button>

<button onclick="openPage('statsPage')">
🏆 İstatistikler
</button>

</div>

</div>

<!-- OYUNCULAR -->

<div class="page" id="playersPage">

<div class="card">

<h2>Oyuncular</h2>

<div id="playerList"></div>

<button onclick="openPlayerModal()">
➕ Oyuncu Ekle
</button>

<button onclick="openPage('homePage')">
⬅ Ana Menü
</button>

</div>

</div>

<!-- YENİ OYUN -->

<div class="page" id="gamePage">

<div class="card">

<h2>Yeni Oyun</h2>

<div class="tableArea">

<div class="okeyTable">

<div class="seat" id="seat1"></div>

<div class="seat" id="seat2"></div>

<div class="seat" id="seat3"></div>

<div class="seat" id="seat4"></div>

<div class="tableCenter">

<h2 id="centerMultiplier">

×6

</h2>

<div id="centerIndicator">

🔵 Mavi

</div>

<div id="centerMode">

👥 Eşli

</div>

<div id="centerHand">

1. EL

</div>

</div>

</div>

</div>

<br>

<button onclick="startNewTable()">

Masayı Hazırla

</button>

<div id="gameOptions" style="display:none;margin-top:15px;">

<h3>Oyun Modu</h3>

<div style="display:flex;gap:10px;">

<button
id="teamBtn"
onclick="setGameMode('team')">

👥 Eşli

</button>

<button
id="soloBtn"
onclick="setGameMode('solo')">

👤 Herkes Tek

</button>

</div>

<br>

<button
style="background:#d35400;"
onclick="startGame()">

▶ Oyunu Başlat

</button>

</div>

<div id="handEntry" style="display:none;margin-top:20px;">

<h3>🀄 El Sonucu</h3>

<div id="handPlayers"></div>

<br>

<button
style="background:#8e44ad;"
onclick="calculateHand()">

🧮 Eli Hesapla

</button>

</div>

<button onclick="openPage('homePage')">

⬅ Ana Menü

</button>

</div>

</div>

<!-- GEÇMİŞ -->

<div class="page" id="historyPage">

<div class="card">

<h2>Geçmiş</h2>

<p>
Henüz oyun oynanmadı.
</p>

<button onclick="openPage('homePage')">
⬅ Ana Menü
</button>

</div>

</div>

<!-- İSTATİSTİK -->

<div class="page" id="statsPage">

<div class="card">

<h2>İstatistikler</h2>

<p>
Henüz veri bulunmuyor.
</p>

<button onclick="openPage('homePage')">
⬅ Ana Menü
</button>

</div>

</div>

<script>

const STORAGE_KEY="alliGulluOkeyPro";

/* ===== Masa Düzeni ===== */

const SEATS = {

    SOUTH:0,   // Oyuncu 1

    EAST:1,    // Oyuncu 2

    NORTH:2,   // Oyuncu 3

    WEST:3     // Oyuncu 4

};

const TEAM_A = [

    SEATS.SOUTH,

    SEATS.NORTH

];

const TEAM_B = [

    SEATS.EAST,

    SEATS.WEST

];

/* Uygulama */

const app={

players:[],

games:[],

settings:{},

tableSeats:[null,null,null,null],

game:{
    mode:"team",
    indicator:"blue",
    multiplier:6,
    hand:1
}

};

/* Varsayılan oyuncular */

const defaultPlayers=[

["😀","Ahmet"],
["😎","Mehmet"],
["🧔","Hasan"],
["👩","Ayşe"],
["👨","Ali"],
["👩‍🦰","Elif"],
["👨‍🦳","Kemal"],
["🤠","Murat"]

];

const avatars=[
"😀","😎","🧔","👩","👨","👩‍🦰",
"👨‍🦳","🤠","🧑","👩‍🦱","👨‍🦱","👩‍🦳",
"🧓","👴","👵","🥸","🤓","🧒",
"👦","👧","🧑‍🦰","🧑‍🦳","🧑‍🦲","🧑‍🦱"
];

let editingPlayerId=null;
let selectedAvatar="😀";
let currentSeat=-1;
    
/* Sayfa Aç */

function openPage(id){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

/* İlk Kurulum */

function initialize(){

const saved=localStorage.getItem(STORAGE_KEY);

if(saved){

Object.assign(app,JSON.parse(saved));

}else{

createDefaultPlayers();

save();

}

renderPlayers();

renderTable();

renderGameInfo();

}

function renderTable(){


       const ready =
app.tableSeats.every(x=>x!==null);

document.getElementById("gameOptions")
.style.display =
ready
? "block"
: "none";
    
    const seats = [
        document.getElementById("seat1"),
        document.getElementById("seat2"),
        document.getElementById("seat3"),
        document.getElementById("seat4")
    ];

    seats.forEach((seat,index)=>{
        
        const playerId = app.tableSeats[index];

        if(playerId === null){

            seat.innerHTML = `
                <button onclick="chooseSeat(${index})">
                    ➕<br>Oyuncu Seç
                </button>
            `;

            return;
        }

        const player = app.players.find(p=>p.id===playerId);

        if(!player){

            seat.innerHTML = `
                <button onclick="chooseSeat(${index})">
                    ➕<br>Oyuncu Seç
                </button>
            `;

            return;
        }

        seat.innerHTML = `
            <div class="avatar">${player.avatar}</div>

            <div class="name">${player.name}</div>

            <div class="score">0</div>

            <div style="display:flex;gap:4px;justify-content:center;margin-top:6px;">

    <button
        style="padding:4px 6px;font-size:11px;width:auto;"
        onclick="chooseSeat(${index})">
        🔄
    </button>

    <button
        style="padding:4px 6px;font-size:11px;width:auto;"
        onclick="clearSeat(${index})">
        ❌
    </button>

</div>
        `;

    });

}

function renderGameInfo(){

    const colors={

        yellow:"🟡 Sarı",

        red:"🔴 Kırmızı",

        black:"⚫ Siyah",

        blue:"🔵 Mavi",

        fake:"🃏 Sahte Okey"

    };

    document.getElementById("centerMultiplier").textContent=
        "×"+app.game.multiplier;

    document.getElementById("centerIndicator").textContent=
        colors[app.game.indicator];

    document.getElementById("centerMode").textContent=
        app.game.mode==="team"
        ?"👥 Eşli"
        :"👤 Herkes Tek";

    document.getElementById("centerHand").textContent=
        app.game.hand+". EL";

}

function setGameMode(mode){

    app.game.mode=mode;

    save();

    renderGameInfo();

}

function startGame(){

    if(app.tableSeats.includes(null)){

        alert("Önce dört oyuncuyu oturtun.");

        return;

    }

    document
    .getElementById("indicatorSheet")
    .classList.add("show");

    document
.getElementById("handEntry")
.style.display="block";

renderHandEntry();

}
    
function calculateHand(){

    const winner =
        document.querySelector(
            'input[name="winner"]:checked'
        );

    if(!winner){
        alert("Biten oyuncuyu seçiniz.");
        return;
    }

    const winnerSeat = Number(winner.value);

    const winnerTeam =

TEAM_A.includes(winnerSeat)

? TEAM_A

: TEAM_B;

const loserTeam =

winnerTeam===TEAM_A

? TEAM_B

: TEAM_A;
    
    const finish =
        document.querySelector(
            'input[name="finish'+winnerSeat+'"]:checked'
        ).value;

    const multiplier = app.game.multiplier;

    let finishMultiplier = 1;

    switch(finish){

        case "okey":
            finishMultiplier = 2;
            break;

        case "konken":
            finishMultiplier = 2;
            break;

        case "konkenOkey":
            finishMultiplier = 4;
            break;

        case "renk":
            finishMultiplier = Infinity;
            break;

    }

    const winnerPlayer =
        app.players.find(
            p=>p.id===app.tableSeats[winnerSeat]
        );

    let totalPenalty = 0;

let report = "";

report += `🏆 Kazanan

${winnerPlayer.avatar} ${winnerPlayer.name}

Bitiş : ${finish}

---------------------

`;

    loserTeam.forEach(seat=>{

        const player=
            app.players.find(
                p=>p.id===app.tableSeats[seat]
            );

        if(!player) return;

        const stones=
            Number(
                document.getElementById(
                    "stone"+seat
                ).value
            );

        let penalty;

        if(finishMultiplier===Infinity){

            penalty="∞";

        }else{

            penalty=
                stones *
                multiplier *
                finishMultiplier;

            totalPenalty += penalty;

        }
            
        report +=

`${player.avatar} ${player.name}

Taş : ${stones}

Ceza : ${penalty}

---------------------

`;

    });

    if(finishMultiplier===Infinity){

        report +=
`🎉 RENK YAPILDI

OYUN SONA ERDİ`;

    }else{

        report +=
`TOPLAM TAKIM CEZASI

${totalPenalty}`;

    }

    alert(report);

    app.game.hand++;

save();

renderGameInfo();
    
}

function closeIndicatorSheet(){

    document
    .getElementById("indicatorSheet")
    .classList.remove("show");

}

function setIndicator(color,multiplier){

    app.game.indicator=color;

    app.game.multiplier=multiplier;

    save();

    renderTable();

    renderGameInfo();

    closeIndicatorSheet();

}

    function renderHandEntry(){

    const area =
    document.getElementById("handPlayers");

    area.innerHTML="";

    app.tableSeats.forEach((id,index)=>{

        const player =
        app.players.find(p=>p.id===id);

        if(!player) return;

        area.innerHTML += `

<div class="card" style="margin-top:10px;">

<b>

${player.avatar}

${player.name}

</b>

<br><br>

Kalan Taş

<input

id="stone${index}"

type="number"

min="0"

max="30"

value="0">

<br><br>

<label>

<input

type="radio"

name="winner"

value="${index}">

Bu oyuncu bitti

</label>

<hr style="margin:12px 0;">

<b>Bitiş Türü</b>

<label>
<input type="radio"
name="finish${index}"
value="normal"
checked>

Normal
</label>

<label>
<input type="radio"
name="finish${index}"
value="okey">

Okey
</label>

<label>
<input type="radio"
name="finish${index}"
value="konken">

Konken (7 Çift)
</label>

<label>
<input type="radio"
name="finish${index}"
value="konkenOkey">

Konkenden Okey
</label>

<label>
<input type="radio"
name="finish${index}"
value="renk">

Renk
</label>

</label>

</div>

`;

    });

    }
    
function chooseSeat(index){

currentSeat=index;

renderPlayerSheet();

document
.getElementById("playerSheet")
.classList.add("show");

}

function closePlayerSheet(){

    document
        .getElementById("playerSheet")
        .classList.remove("show");

}

function renderPlayerSheet(){

    const area = document.getElementById("sheetPlayers");

    area.innerHTML = "";

    app.players.forEach(player=>{

        if(app.tableSeats.includes(player.id))
            return;

        area.innerHTML += `
            <div class="sheetPlayer"
                 onclick="selectSeatPlayer(${player.id})">

                <span style="font-size:34px;">
                    ${player.avatar}
                </span>

                <span>
                    ${player.name}
                </span>

            </div>
        `;

    });

}

function selectSeatPlayer(playerId){

    app.tableSeats[currentSeat] = playerId;

    save();

    renderTable();

    renderGameInfo();
    
    closePlayerSheet();

}

function clearSeat(index){

    app.tableSeats[index] = null;

    save();

    renderTable();

}
    
/* Varsayılan Oyuncular */

function createDefaultPlayers(){

app.players=[];

defaultPlayers.forEach((p,index)=>{

app.players.push({

id:Date.now()+index,

avatar:p[0],

name:p[1],

stats:{

games:0,

wins:0,

normal:0,

okey:0,

konken:0,

konkenOkey:0,

renk:0,

reward:0,

penalty:0

}

});

});

}

/* Kaydet */

function save(){

localStorage.setItem(

STORAGE_KEY,

JSON.stringify(app)

);

}

/* Oyuncuları Listele */

function renderPlayers(){

const list=document.getElementById("playerList");

list.innerHTML="";

app.players.forEach(player=>{

list.innerHTML+=`

<div class="playerCard">

<div class="playerLeft">

<div class="avatar">

${player.avatar}

</div>

<div>

<b>${player.name}</b>

<br>

<span class="small">

${player.stats.games} oyun

</span>

</div>

</div>

<div style="display:flex;gap:6px;">

<button
onclick="editPlayer(${player.id})"
style="width:45px;padding:8px;">
✏️
</button>

<button
onclick="deletePlayer(${player.id})"
style="width:45px;padding:8px;">
🗑️
</button>

</div>

</div>

`;

});

}

function openPlayerModal(player = null){

    editingPlayerId = player ? player.id : null;

    selectedAvatar = player ? player.avatar : "😀";

    document.getElementById("playerName").value =
        player ? player.name : "";

    document.getElementById("modalTitle").textContent =
        player ? "Oyuncuyu Düzenle" : "Yeni Oyuncu";

    renderAvatarGrid();

    document
        .getElementById("playerModal")
        .classList.add("show");

}
    
function closePlayerModal(){

    document
        .getElementById("playerModal")
        .classList.remove("show");

}

function renderAvatarGrid(){

    const grid=document.getElementById("avatarGrid");

    grid.innerHTML="";

    avatars.forEach(a=>{

        grid.innerHTML += `
        <div
            class="avatarItem ${selectedAvatar===a?"selected":""}"
            onclick="selectAvatar('${a}')">

            ${a}

        </div>
        `;

    });

}

function selectAvatar(avatar){

    selectedAvatar = avatar;

    renderAvatarGrid();

} 

function savePlayer(){

    const name = document.getElementById("playerName")
        .value
        .trim();

    if(name===""){

        alert("Lütfen oyuncu adı giriniz.");

        return;

    }

    const duplicate = app.players.find(p =>
        p.name.toLowerCase() === name.toLowerCase() &&
        p.id !== editingPlayerId
    );

    if(duplicate){

        alert("Bu isimde bir oyuncu zaten var.");

        return;

    }

    if(editingPlayerId){

        const player = app.players.find(p=>p.id===editingPlayerId);

        player.name = name;

        player.avatar = selectedAvatar;

    }else{

        app.players.push({

            id:Date.now(),

            avatar:selectedAvatar,

            name:name,

            stats:{
                games:0,
                wins:0,
                normal:0,
                okey:0,
                konken:0,
                konkenOkey:0,
                renk:0,
                reward:0,
                penalty:0
            }

        });

    }

    save();

renderPlayers();

renderTable();

closePlayerModal();

}

function editPlayer(id){

    const player = app.players.find(p => p.id === id);

    if(!player) return;

    openPlayerModal(player);

}

function deletePlayer(id){

    const player = app.players.find(p => p.id === id);

    if(!player) return;

    if(!confirm(`"${player.name}" adlı oyuncu silinsin mi?`))
        return;

    app.players = app.players.filter(p => p.id !== id);

    app.tableSeats = app.tableSeats.map(seat =>
    seat === id ? null : seat
);
    
    save();

    renderPlayers();

renderTable();
    
}

function startNewTable(){

    app.tableSeats = [null,null,null,null];

    save();

    renderTable();

    renderGameInfo();

    alert("Lütfen dört oyuncuyu masaya yerleştirin.");

}    
    
initialize();

</script>

<!-- Oyuncu Ekle / Düzenle Modal -->

<div class="modal" id="playerModal">

    <div class="modalContent">

        <h2 id="modalTitle">Yeni Oyuncu</h2>

        <input
            type="text"
            id="playerName"
            placeholder="Oyuncu adı">

        <div
            id="avatarGrid"
            class="avatarGrid">
        </div>

        <button onclick="savePlayer()">
            💾 Kaydet
        </button>

        <button onclick="closePlayerModal()">
            ❌ Vazgeç
        </button>

    </div>

</div>

<div id="playerSheet" class="bottomSheet">

<h2>Oyuncu Seç</h2>

<div id="sheetPlayers"></div>

<button onclick="closePlayerSheet()">

Kapat

</button>

</div>

<div
id="indicatorSheet"
class="bottomSheet">

<h2>

Açılan Okey

</h2>

<div
onclick="setIndicator('yellow',3)"
class="colorItem">

<span>🟡 Sarı</span>

<b>×3</b>

</div>

<div
onclick="setIndicator('red',4)"
class="colorItem">

<span>🔴 Kırmızı</span>

<b>×4</b>

</div>

<div
onclick="setIndicator('black',5)"
class="colorItem">

<span>⚫ Siyah</span>

<b>×5</b>

</div>

<div
onclick="setIndicator('blue',6)"
class="colorItem">

<span>🔵 Mavi</span>

<b>×6</b>

</div>

<div
onclick="setIndicator('fake',10)"
class="colorItem">

<span>🃏 Sahte Okey</span>

<b>×10</b>

</div>

<br>

<button
onclick="closeIndicatorSheet()">

Kapat

</button>

</div>

</body>
</html>
