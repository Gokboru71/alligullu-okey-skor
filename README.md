<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Allı Güllü Okey Pro</title>

<style>

:root{
    --green:#0f6b3e;
    --green2:#16834e;
    --wood:#7a4d1d;
    --bg:#eef2f3;
    --card:#ffffff;
    --text:#222;
    --radius:18px;
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
    
</style>

</head>

<div class="modal" id="playerModal">

<div class="modalContent">

<h2 id="modalTitle">Oyuncu</h2>

<input id="playerName" placeholder="Oyuncu adı">

<div id="avatarGrid" class="avatarGrid"></div>

<button onclick="savePlayer()">Kaydet</button>

<button onclick="closePlayerModal()">İptal</button>

</div>

</div>
<body>

<header>

🀄 ALLI GÜLLÜ OKEY PRO

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

<h2>🀄</h2>

<div>

ALLI GÜLLÜ

</div>

</div>

</div>

</div>

<br>

<button onclick="renderTable()">

Masayı Oluştur

</button>

<button onclick="openPage('homePage')">

⬅ Ana Menü

</button>

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

/* Uygulama */

const app={

players:[],

games:[],

settings:{},

tableSeats:[null,null,null,null]

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

}

function renderTable(){

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

            <button
                style="margin-top:6px;padding:4px 8px;font-size:12px;"
                onclick="chooseSeat(${index})">
                Değiştir
            </button>
        `;

    });

}

function chooseSeat(index){

    const available = app.players.filter(player =>
        !app.tableSeats.includes(player.id)
    );

    if(available.length===0){

        alert("Masaya oturacak başka oyuncu yok.");

        return;

    }

    let text = "";

    available.forEach((player,i)=>{

        text += `${i+1} - ${player.avatar} ${player.name}\n`;

    });

    const secim = prompt(
`Koltuğa oturacak oyuncunun numarasını giriniz:

${text}`
    );

    if(secim===null) return;

    const s = Number(secim)-1;

    if(s<0 || s>=available.length){

        alert("Geçersiz seçim.");

        return;

    }

    app.tableSeats[index] = available[s].id;

    save();

    renderTable();

}

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
0
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

    save();

    renderPlayers();

renderTable();
    
}
    
    
initialize();

</script>

<div class="modal" id="playerModal">

    <div class="modalContent">

        <h2 id="modalTitle">Yeni Oyuncu</h2>

        <input
            id="playerName"
            placeholder="Oyuncu adı">

        <div
            id="avatarGrid"
            class="avatarGrid">
        </div>

        <button onclick="savePlayer()">
            Kaydet
        </button>

        <button onclick="closePlayerModal()">
            Vazgeç
        </button>

    </div>

</div>

</body>
</html>
