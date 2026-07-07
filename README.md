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

select{

width:100%;

padding:16px;

font-size:20px;

border-radius:10px;

margin-top:10px;

margin-bottom:10px;

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
let gecmis = [];

let elNo = 1;

let sonHamle = null;

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

<h3>👑 Kim Bitti?</h3>

<select id="bitenOyuncu">
<option value="1">1. Oyuncu</option>
<option value="2">2. Oyuncu</option>
<option value="3">3. Oyuncu</option>
<option value="4">4. Oyuncu</option>
</select>

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

<div id="sonucKutusu">
Henüz sonuç yok.
</div>

<hr>

<h3>📜 Geçmiş Eller</h3>

<div id="gecmisKutusu">
Henüz el oynanmadı.
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

<h3>👑 Kim Bitti?</h3>

<select id="bitenOyuncu">
<option value="1">1. Oyuncu</option>
<option value="2">2. Oyuncu</option>
<option value="3">3. Oyuncu</option>
<option value="4">4. Oyuncu</option>
</select>

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

<div id="sonucKutusu">
Henüz bitiş seçilmedi.
</div>

<hr>

<h3>📜 Geçmiş Eller</h3>

<div id="gecmisKutusu">

Henüz el oynanmadı.

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
let takim1Toplam=0;
let takim2Toplam=0;

let gecmisEller=[];    

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

    bitisTuru=t;

    document.getElementById("bitisBilgi").innerHTML=
    "<b>Seçilen Bitiş :</b> "+t;

}

function puanHesapla(){
let oyuncu1 = oyunTuru=="EŞLİ"
    ? document.getElementById("t1").value
    : document.getElementById("p1").value;

let oyuncu2 = oyunTuru=="EŞLİ"
    ? document.getElementById("t2").value
    : document.getElementById("p2").value;

let oyuncu3 = oyunTuru=="EŞLİ"
    ? document.getElementById("t3").value
    : document.getElementById("p3").value;

let oyuncu4 = oyunTuru=="EŞLİ"
    ? document.getElementById("t4").value
    : document.getElementById("p4").value;
    
    if(acilanRenk==""){
        alert("Önce açılan okey rengini seç.");
        return;
    }

    if(bitisTuru==""){
        alert("Bitiş türünü seç.");
        return;
    }

    cezaHesapla();

gecmis.push({
    el: elNo,
    oyuncu1: oyuncu1,
    oyuncu2: oyuncu2,
    oyuncu3: oyuncu3,
    oyuncu4: oyuncu4,
    renk: acilanRenk,
    bitis: bitisTuru,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4,
    takim1: takim1Toplam,
    takim2: takim2Toplam
});

let html="";

for(let i=0;i<gecmis.length;i++){

    html+=`
    <div class="card">

    <b>${gecmis[i].el}. EL</b>

    <br>

    ${gecmis[i].renk}

    -

    ${gecmis[i].bitis}

    <hr>

    Takım 1 : ${gecmis[i].takim1}

    <br>

    Takım 2 : ${gecmis[i].takim2}

    </div>
    `;

}

document.getElementById("gecmisKutusu").innerHTML=html;

elNo++;    
}

function cezaHesapla(){

let a=Number(document.getElementById("k1").value)||0;
let b=Number(document.getElementById("k2").value)||0;
let c=Number(document.getElementById("k3").value)||0;
let d=Number(document.getElementById("k4").value)||0;

let biten = Number(document.getElementById("bitenOyuncu").value);

let katsayi=carpan;

if(bitisTuru=="Normal"){
    katsayi=carpan;
}

if(bitisTuru=="Okey"){
    katsayi=carpan*2;
}

if(bitisTuru=="Konken"){
    katsayi=carpan*2;
}

if(bitisTuru=="KonkenOkey"){
    katsayi=carpan*4;
}

let p1=a*katsayi;
let p2=b*katsayi;
let p3=c*katsayi;
let p4=d*katsayi;

// EŞLİ oyununda biten oyuncunun ortağı ceza almaz
if(oyunTuru=="EŞLİ"){

    if(biten==1){
        p1=0;
        p2=0;
    }

    if(biten==2){
        p1=0;
        p2=0;
    }

    if(biten==3){
        p3=0;
        p4=0;
    }

    if(biten==4){
        p3=0;
        p4=0;
    }

}

let kazananTakim = "";
let kazananOdul = 0;

if(bitisTuru=="Normal"){
    kazananOdul = normalCeza[acilanRenk];
}

if(bitisTuru=="Okey"){
    kazananOdul = okeyCeza[acilanRenk];
}

if(bitisTuru=="Konken"){
    kazananOdul = konkenCeza[acilanRenk];
}

if(bitisTuru=="KonkenOkey"){
    kazananOdul = konkenCeza[acilanRenk];
}
    
if(oyunTuru=="EŞLİ"){

    if(biten==1 || biten==2){
        kazananTakim="1. Takım";
    }

    if(biten==3 || biten==4){
        kazananTakim="2. Takım";
    }

}
    
if(oyunTuru=="EŞLİ"){

takim1Toplam+=p1+p2;

takim2Toplam+=p3+p4;

}

document.getElementById("sonucKutusu").innerHTML=`
<h3>${bitisTuru} Sonucu</h3>
<b>🏆 Kazanan :</b> ${kazananTakim}
<br>

🎁 Kazanan Ödülü : -${kazananOdul}

<br><br>

<b>Açılan:</b> ${acilanRenk}<br>
<b>Çarpan:</b> x${katsayi}

<hr>

${oyuncu1} : ${p1}<br>
${oyuncu2} : ${p2}<br>
${oyuncu3} : ${p3}<br>
${oyuncu4} : ${p4}

<hr>

<b>Toplam Ceza :</b> ${p1+p2+p3+p4}

<hr>

<h3>Takımlar</h3>

1. Takım : ${takim1Toplam}

<br><br>

2. Takım : ${takim2Toplam}

<hr>

<b>Fark :</b> ${Math.abs(takim1Toplam-takim2Toplam)}
`;

}
</script>

</body>

</html>
