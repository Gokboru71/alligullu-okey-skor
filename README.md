<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Allı Güllü Okey Skor</title>

<style>

body{
margin:0;
background:#0f172a;
font-family:Arial,sans-serif;
color:white;
padding:20px;
}

h1{
text-align:center;
margin-bottom:25px;
}

input{
width:100%;
padding:15px;
font-size:18px;
margin:10px 0;
border:none;
border-radius:10px;
box-sizing:border-box;
}

button{
width:100%;
padding:15px;
font-size:20px;
background:#16a34a;
color:white;
border:none;
border-radius:10px;
font-weight:bold;
margin-top:15px;
}

#oyuncular{
display:none;
margin-top:30px;
}

.kart{
background:#1e293b;
padding:15px;
border-radius:10px;
margin:12px 0;
text-align:center;
font-size:24px;
}

</style>

</head>

<body>

<h1>🎲 Allı Güllü Okey Skor</h1>

<input id="o1" placeholder="1. Oyuncu">
<input id="o2" placeholder="2. Oyuncu">
<input id="o3" placeholder="3. Oyuncu">
<input id="o4" placeholder="4. Oyuncu">

<button onclick="baslat()">
Oyunu Başlat
</button>

<div id="oyuncular">

<h2 style="text-align:center;">Oyuncular</h2>

<div class="kart" id="k1"></div>
<div class="kart" id="k2"></div>
<div class="kart" id="k3"></div>
<div class="kart" id="k4"></div>

</div>

<script>

function baslat(){

document.getElementById("oyuncular").style.display="block";

document.getElementById("k1").innerHTML=document.getElementById("o1").value;
document.getElementById("k2").innerHTML=document.getElementById("o2").value;
document.getElementById("k3").innerHTML=document.getElementById("o3").value;
document.getElementById("k4").innerHTML=document.getElementById("o4").value;

}

</script>

</body>
</html>
