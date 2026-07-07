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
font-family:Arial;
}

body{

background:#0f172a;

color:white;

}

header{

background:#111827;

padding:20px;

text-align:center;

font-size:32px;

font-weight:bold;

box-shadow:0 0 20px black;

}

main{

padding:20px;

}

.card{

background:#1e293b;

border-radius:15px;

padding:20px;

margin-bottom:20px;

}

button{

width:100%;

padding:18px;

font-size:22px;

border:none;

border-radius:12px;

margin-top:15px;

font-weight:bold;

cursor:pointer;

}

#esli{

background:#16a34a;

color:white;

}

#tek{

background:#2563eb;

color:white;

}

.hidden{

display:none;

}

</style>

</head>

<body>

<header>

🎲 ALLI GÜLLÜ OKEY PRO

</header>

<main>

<div class="card">

<h2>

Oyun Türü

</h2>

<button id="esli">

👥 EŞLİ

</button>

<button id="tek">

🧍 HERKES TEK

</button>

</div>

<div

id="sayfa"

class="card hidden">

</div>

</main>

<script>

let oyunTuru="";

const sayfa=document.getElementById("sayfa");

document

.getElementById("esli")

.onclick=function(){

oyunTuru="EŞLİ";

sayfa.classList.remove("hidden");

sayfa.innerHTML=`

<h2>👥 EŞLİ OYUN</h2>

<input id="t1" placeholder="1. Takım - Oyuncu 1">

<input id="t2" placeholder="1. Takım - Oyuncu 2">

<input id="t3" placeholder="2. Takım - Oyuncu 1">

<input id="t4" placeholder="2. Takım - Oyuncu 2">

<br><br>

<button id="devamEt">OYUNU BAŞLAT</button>

<br><br>

<button onclick="puanHesapla()">
🧮 PUANI HESAPLA
</button>

<hr>

<h3>🎲 Açılan Okey</h3>

<button onclick="renkSec(3,'Sarı')">🟨 Sarı</button>

<button onclick="renkSec(4,'Kırmızı')">🟥 Kırmızı</button>

<button onclick="renkSec(5,'Siyah')">⬛ Siyah</button>

<button onclick="renkSec(6,'Mavi')">🟦 Mavi</button>

<button onclick="renkSec(10,'Sahte Okey')">🃏 Sahte Okey</button>

<br><br>

<div id="secilenRenk">
Henüz seçim yapılmadı.
</div>
<hr>

<h3>🏁 Bitiş Türü</h3>

<button onclick="bitisSec('Normal')">Normal</button>

<button onclick="bitisSec('Okey')">🀄 Okey Attı</button>

<button onclick="bitisSec('Konken')">🃏 Konken</button>

<button onclick="bitisSec('KonkenOkey')">💥 Konkenden Okey</button>

<button onclick="bitisSec('Renk')">🌈 RENK</button>

<br><br>

<div id="bitisBilgi">

Henüz bitiş seçilmedi.

</div>
`;

}

document

.getElementById("tek")

.onclick=function(){

oyunTuru="HERKES TEK";

sayfa.classList.remove("hidden");

sayfa.innerHTML=`

<h2>🔥 HERKES TEK</h2>

<input id="p1" placeholder="1. Oyuncu">

<input id="p2" placeholder="2. Oyuncu">

<input id="p3" placeholder="3. Oyuncu">

<input id="p4" placeholder="4. Oyuncu">

<br><br>

<button id="devamEt">OYUNU BAŞLAT</button>
<hr>

<h3>🎲 Açılan Okey</h3>

<button onclick="renkSec(3,'Sarı')">🟨 Sarı</button>

<button onclick="renkSec(4,'Kırmızı')">🟥 Kırmızı</button>

<button onclick="renkSec(5,'Siyah')">⬛ Siyah</button>

<button onclick="renkSec(6,'Mavi')">🟦 Mavi</button>

<button onclick="renkSec(10,'Sahte Okey')">🃏 Sahte Okey</button>

<br><br>

<div id="secilenRenk">
Henüz seçim yapılmadı.
</div>
<hr>

<h3>🏁 Bitiş Türü</h3>

<button onclick="bitisSec('Normal')">Normal</button>

<button onclick="bitisSec('Okey')">🀄 Okey Attı</button>

<button onclick="bitisSec('Konken')">🃏 Konken</button>

<button onclick="bitisSec('KonkenOkey')">💥 Konkenden Okey</button>

<button onclick="bitisSec('Renk')">🌈 RENK</button>

<br><br>

<div id="bitisBilgi">

<hr>

<h3>📝 Elde Kalan Taşlar</h3>

<input id="k1" type="number" placeholder="1. Oyuncu">

<input id="k2" type="number" placeholder="2. Oyuncu">

<input id="k3" type="number" placeholder="3. Oyuncu">

<input id="k4" type="number" placeholder="4. Oyuncu">

<br><br>

<button onclick="cezaHesapla()">
📋 CEZALARI HESAPLA
</button>

<div id="sonucKutusu"></div>

Henüz bitiş seçilmedi.

</div>
`;

}
let carpan=0;
let acilanRenk="";

function renkSec(c,r){

    carpan=c;
    acilanRenk=r;

    document.getElementById("secilenRenk").innerHTML=`
    <b>Açılan:</b> ${r}<br>
    <b>Çarpan:</b> x${c}
    `;
}
let bitisTuru="";
let puanlar=[0,0,0,0];

const normalCeza={
"Sarı":30,
"Kırmızı":40,
"Siyah":50,
"Mavi":60,
"Sahte Okey":100
};

const okeyCeza={
"Sarı":300,
"Kırmızı":400,
"Siyah":500,
"Mavi":600,
"Sahte Okey":1000
};

const konkenCeza={
"Sarı":600,
"Kırmızı":800,
"Siyah":1000,
"Mavi":1200,
"Sahte Okey":2000
};
function bitisSec(t){
function puanHesapla(){
function cezaHesapla(){

let a=Number(document.getElementById("k1").value)||0;
let b=Number(document.getElementById("k2").value)||0;
let c=Number(document.getElementById("k3").value)||0;
let d=Number(document.getElementById("k4").value)||0;

let p1=a*carpan;
let p2=b*carpan;
let p3=c*carpan;
let p4=d*carpan;

document.getElementById("sonucKutusu").innerHTML=`

<h3>Cezalar</h3>

1. Oyuncu : ${p1}

<br>

2. Oyuncu : ${p2}

<br>

3. Oyuncu : ${p3}

<br>

4. Oyuncu : ${p4}

`;

}

if(acilanRenk==""){
alert("Önce açılan okey rengini seç.");
return;
}

if(bitisTuru==""){
alert("Bitiş türünü seç.");
return;
}

alert("Puan hesaplama motoru hazır.");

}
    bitisTuru=t;

    document.getElementById("bitisBilgi").innerHTML=
    "<b>Seçilen Bitiş :</b> "+t;

}
</script>

</body>

</html>
