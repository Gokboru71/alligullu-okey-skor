<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Allı Güllü Okey Pro</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#eceff1;
color:#222;
}

header{
background:#1e88e5;
color:white;
padding:18px;
text-align:center;
font-size:24px;
font-weight:bold;
}

.container{
max-width:900px;
margin:auto;
padding:15px;
}

.card{
background:white;
border-radius:12px;
padding:15px;
margin-bottom:15px;
box-shadow:0 2px 8px rgba(0,0,0,.15);
}

h2{
margin-bottom:10px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:10px;
}

input,select,button{
width:100%;
padding:12px;
border-radius:8px;
border:1px solid #bbb;
font-size:16px;
}

button{
background:#1e88e5;
color:white;
border:none;
cursor:pointer;
}

button:hover{
background:#1565c0;
}

table{
width:100%;
border-collapse:collapse;
margin-top:10px;
}

th,td{
padding:10px;
border-bottom:1px solid #ddd;
text-align:center;
}

.hidden{
display:none;
}

footer{
text-align:center;
padding:20px;
color:#777;
font-size:13px;
}
</style>

</head>

<body>

<header>
Allı Güllü Okey Pro
</header>

<div class="container">

<div class="card">

<h2>Yeni Oyun</h2>

<div class="grid">

<div>
<label>Oyun Türü</label>
<select id="gameType">
<option value="tek">Herkes Tek</option>
<option value="esli">Eşli</option>
</select>
</div>

<div>
<label>Oyuncu Sayısı</label>
<select id="playerCount">
<option>4</option>
</select>
</div>

<div>
<label>Başlangıç Puanı</label>
<input
id="startScore"
type="number"
value="0">
</div>

</div>

<br>

<button onclick="createGame()">
Yeni Oyun Başlat
</button>

</div>

<div class="card">

<h2>Oyuncular</h2>

<div id="playersArea">

Henüz oyun oluşturulmadı.

</div>

</div>

<div class="card">

<h2>Yeni El</h2>

<div id="handArea">

Önce oyun başlatın.

</div>

</div>

<div class="card">

<h2>Skor Tablosu</h2>

<div id="scoreArea">

Oyun bekleniyor.

</div>

</div>

<div class="card">

<h2>Geçmiş</h2>

<div id="historyArea">

Henüz kayıt yok.

</div>

</div>

</div>

<footer>

Allı Güllü Okey Pro

</footer>

<script>

class AlliGulluOkey{

constructor(){

this.players=[];

this.history=[];

this.settings={

gameType:"tek",
playerCount:4,
startScore:0

};

this.load();

}

save(){

localStorage.setItem(
"alliGulluOkey",
JSON.stringify(this)
);

}

load(){

let d=localStorage.getItem("alliGulluOkey");

if(!d)
return;

let obj=JSON.parse(d);

this.players=obj.players||[];

this.history=obj.history||[];

this.settings=obj.settings||this.settings;

}

newGame(type,count,start){

this.players=[];

this.history=[];

this.settings={

gameType:type,
playerCount:count,
startScore:start

};

for(let i=1;i<=count;i++){

this.players.push({

id:i,

name:"Oyuncu "+i,

score:start,

penalty:0,

partner:null

});

}

this.save();

render();

}

}

const app=new AlliGulluOkey();

function createGame(){

let type=document.getElementById("gameType").value;

let count=parseInt(document.getElementById("playerCount").value);

let start=parseInt(document.getElementById("startScore").value);

app.newGame(type,count,start);

}

function render(){

let html="<table>";

html+="<tr>";

html+="<th>Oyuncu</th>";

html+="<th>Puan</th>";

html+="<th>Ceza</th>";

html+="<th>Eşi</th>";

html+="</tr>";

app.players.forEach(p=>{

let partner="-";

if(p.partner!=null){

partner=app.players[p.partner].name;

}

html+=`

<tr>

<td>${p.name}</td>

<td>${p.score}</td>

<td>${p.penalty}</td>

<td>${partner}</td>

</tr>

`;

});

html+="</table>";

document.getElementById("playersArea").innerHTML=html;

document.getElementById("scoreArea").innerHTML=html;

if(app.history.length==0){

document.getElementById("historyArea").innerHTML="Henüz el oynanmadı.";

}else{

let html="<table>";

html+="<tr>";

html+="<th>#</th>";

html+="<th>Kazanan</th>";

html+="<th>Tür</th>";

html+="<th>Renk</th>";

html+="</tr>";

app.history.forEach((h,i)=>{

html+=`

<tr>

<td>${i+1}</td>

<td>${app.players[h.winner].name}</td>

<td>${h.flower}</td>

<td>${h.color}</td>

</tr>

`;

});

html+="</table>";

document.getElementById("historyArea").innerHTML=html;

}

renderPlayerEditor();

renderHandEntry();  
    
}

function renderPlayerEditor(){

if(app.players.length==0) return;

let html="<h3>Oyuncu Bilgileri</h3>";

app.players.forEach((p,i)=>{

html+=`

<div style="margin-bottom:12px;border:1px solid #ddd;padding:10px;border-radius:8px;">

<input
value="${p.name}"
onchange="changeName(${i},this.value)">

</div>

`;

});

if(app.settings.gameType=="esli"){

html+="<hr><h3>Eşleştirme</h3>";

html+=`
<select id="teamA1"></select>

<select id="teamA2"></select>

<br><br>

<button onclick="saveTeams()">

Takımları Kaydet

</button>
`;

}

document.getElementById("playersArea").innerHTML=html;

fillTeamSelects();

}

function changeName(index,value){

app.players[index].name=value;

app.save();

render();

}

function fillTeamSelects(){

if(app.settings.gameType!="esli")
return;

let a=document.getElementById("teamA1");

let b=document.getElementById("teamA2");

if(!a) return;

a.innerHTML="";

b.innerHTML="";

app.players.forEach((p,i)=>{

a.innerHTML+=`<option value="${i}">${p.name}</option>`;

b.innerHTML+=`<option value="${i}">${p.name}</option>`;

});

}

function saveTeams(){

function renderHandEntry(){

if(app.players.length==0){

document.getElementById("handArea").innerHTML="Önce oyun başlatın.";

return;

}

let html="";

html+="<label>Kazanan</label>";

html+="<select id='winner'>";

app.players.forEach((p,i)=>{

html+=`<option value="${i}">${p.name}</option>`;

});

html+="</select><br><br>";

html+="<label>Oyun</label>";

html+="<select id='flower'>";

html+="<option value='alli'>Allı</option>";

html+="<option value='gullu'>Güllü</option>";

html+="</select><br><br>";

html+="<label>Renk</label>";

html+="<select id='color'>";

html+="<option value='kirmizi'>Kırmızı</option>";

html+="<option value='mavi'>Mavi</option>";

html+="<option value='yesil'>Yeşil</option>";

html+="<option value='siyah'>Siyah</option>";

html+="</select><br><br>";

html+="<button onclick='saveHand()'>";

html+="Eli Kaydet";

html+="</button>";

document.getElementById("handArea").innerHTML=html;

}

function saveHand(){

let hand={

winner:parseInt(document.getElementById("winner").value),

flower:document.getElementById("flower").value,

color:document.getElementById("color").value,

date:new Date().toLocaleString()

};

app.history.push(hand);

app.save();

render();

}

let a=parseInt(document.getElementById("teamA1").value);

let b=parseInt(document.getElementById("teamA2").value);

if(a==b){

alert("Aynı oyuncu seçilemez.");

return;

}

app.players.forEach(p=>p.partner=null);

app.players[a].partner=b;

app.players[b].partner=a;

let others=[];

app.players.forEach((p,i)=>{

if(i!=a && i!=b)

others.push(i);

});

app.players[others[0]].partner=others[1];

app.players[others[1]].partner=others[0];

app.save();

alert("Takımlar kaydedildi.");

}
    
render();

</script>

</body>
</html>
