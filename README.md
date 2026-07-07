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

function bitisSec(t){

    bitisTuru=t;

    document.getElementById("bitisBilgi").innerHTML=
    "<b>Seçilen Bitiş :</b> "+t;

}
</script>

</body>

</html>
