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

sayfa.innerHTML="<h2>Eşli modu seçildi.</h2>";

}

document

.getElementById("tek")

.onclick=function(){

oyunTuru="HERKES TEK";

sayfa.classList.remove("hidden");

sayfa.innerHTML="<h2>Herkes Tek modu seçildi.</h2>";

}

</script>

</body>

</html>
