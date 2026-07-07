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

</style>
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

<p>
Bu ekran sonraki güncellemede hazırlanacak.
</p>

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

settings:{}

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

<div>

✏️ 🗑️

</div>

</div>

`;

});

}

initialize();

</script>

</body>
</html>
