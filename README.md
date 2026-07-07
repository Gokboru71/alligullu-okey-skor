<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Allı Güllü Okey Skor - Part 1</title><style>*{box-sizing:border-box}body{margin:0;background:#0f172a;color:#fff;font-family:Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh}.card{width:min(95%,420px);background:#1e293b;border-radius:18px;padding:24px}h1{text-align:center}p{text-align:center;color:#cbd5e1}button{width:100%;padding:18px;margin:10px 0;font-size:22px;font-weight:bold;border:none;border-radius:12px;color:#fff}#esli{background:#16a34a}#tek{background:#2563eb}#status{display:none;margin-top:16px;background:#0f172a;padding:12px;border-radius:10px;color:#facc15;text-align:center}</style></head><body><div class="card"><h1>🎲 Allı Güllü Okey</h1><p>Oyun modunu seçiniz</p><button id="esli" onclick="sec('EŞLİ')">👥 EŞLİ</button><button id="tek" onclick="sec('HERKES TEK')">🧍 HERKES TEK</button><div id="status"></div></div><script>function sec(m){localStorage.setItem('ag_mod',m);let s=document.getElementById('status');s.style.display='block';s.innerHTML='Seçilen Mod: <b>'+m+'</b><br><br>Part 2 yüklendiğinde oyuncu giriş ekranı açılacaktır.';}</script></body></html>
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Allı Güllü Okey - Part 2</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#0f172a;color:#fff;font-family:Arial;padding:20px}
.card{max-width:650px;margin:auto;background:#1e293b;padding:20px;border-radius:16px}
h1{text-align:center}
button{width:100%;padding:14px;margin:8px 0;border:none;border-radius:10px;font-size:18px;font-weight:bold;color:#fff}
input{width:100%;padding:12px;margin:6px 0;border:none;border-radius:8px}
.green{background:#16a34a}.blue{background:#2563eb}
#esliForm,#tekForm{display:none}
</style>
</head>
<body>
<div class="card">
<h1>🎲 Allı Güllü Okey</h1>

<button class="green" onclick="sec('esli')">👥 EŞLİ</button>
<button class="blue" onclick="sec('tek')">🧍 HERKES TEK</button>

<div id="esliForm">
<h2>Eşli Oyun</h2>
<input placeholder="Takım 1 - Oyuncu 1">
<input placeholder="Takım 1 - Oyuncu 2">
<input placeholder="Takım 2 - Oyuncu 1">
<input placeholder="Takım 2 - Oyuncu 2">
<button class="green" onclick="alert('Part 3: Okey rengi seçimi ekranı gelecek.')">Oyunu Başlat</button>
</div>

<div id="tekForm">
<h2>Herkes Tek</h2>
<input placeholder="1. Oyuncu">
<input placeholder="2. Oyuncu">
<input placeholder="3. Oyuncu">
<input placeholder="4. Oyuncu">

<h3>Oturma Sırası</h3>
<select style="width:100%;padding:12px;border-radius:8px">
<option>1 → 2 → 3 → 4</option>
<option>1 → 4 → 3 → 2</option>
</select>

<button class="blue" onclick="alert('Part 3: Okey rengi seçimi ekranı gelecek.')">Oyunu Başlat</button>
</div>

</div>

<script>
function sec(mod){
document.getElementById('esliForm').style.display=mod==='esli'?'block':'none';
document.getElementById('tekForm').style.display=mod==='tek'?'block':'none';
localStorage.setItem('ag_mode',mod);
}
</script>
</body>
</html>
<!DOCTYPE html><html lang='tr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Part3</title><style>
body{margin:0;background:#0f172a;color:#fff;font-family:Arial;padding:20px}
.card{max-width:700px;margin:auto;background:#1e293b;padding:20px;border-radius:16px}
.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.tile{padding:18px;border-radius:12px;text-align:center;font-weight:bold;cursor:pointer;border:3px solid transparent}
.sel{border-color:#fff}
.info{margin-top:20px;background:#0f172a;padding:12px;border-radius:10px}
button{width:100%;padding:14px;margin-top:20px;border:none;border-radius:10px;background:#16a34a;color:#fff;font-size:18px}
</style></head><body><div class='card'><h2>Part 3 - Okey Açılışı</h2><div class='grid'>
<div class='tile' style='background:#2563eb' onclick='sec("Mavi",6,this)'>🟦<br>13</div>
<div class='tile' style='background:#111827' onclick='sec("Siyah",5,this)'>⬛<br>13</div>
<div class='tile' style='background:#dc2626' onclick='sec("Kırmızı",4,this)'>🟥<br>13</div>
<div class='tile' style='background:#ca8a04' onclick='sec("Sarı",3,this)'>🟨<br>13</div>
<div class='tile' style='background:#7c3aed' onclick='sec("Sahte Okey",10,this)'>🃏</div>
</div>
<div class='info'>
<div>Seçilen: <b id='renk'>-</b></div>
<div>Çarpan: <b id='carpan'>-</b></div>
</div>
<button onclick='ileri()'>Part 4'e Geç</button>
</div>
<script>
function sec(ad,c,e){
document.querySelectorAll('.tile').forEach(x=>x.classList.remove('sel'));
e.classList.add('sel');
document.getElementById('renk').textContent=ad;
document.getElementById('carpan').textContent='x'+c;
localStorage.setItem('ag_renk',ad);
localStorage.setItem('ag_carpan',c);
}
function ileri(){alert('Part 4: Normal Bitiş / Okey / Konken / Renk ekranı');}
</script></body></html>
<!DOCTYPE html>
<html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Part 4</title>
<style>
body{margin:0;background:#0f172a;color:#fff;font-family:Arial;padding:20px}
.card{max-width:760px;margin:auto;background:#1e293b;padding:20px;border-radius:16px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
button{padding:16px;border:none;border-radius:10px;font-size:18px;font-weight:bold;color:#fff;cursor:pointer}
.normal{background:#2563eb}.okey{background:#16a34a}.konken{background:#9333ea}.kokey{background:#dc2626}.renk{background:#f59e0b;color:#111}
#sonuc{margin-top:20px;background:#0f172a;padding:15px;border-radius:10px}
canvas{position:fixed;left:0;top:0;pointer-events:none}
</style></head><body>
<canvas id="c"></canvas>
<div class="card">
<h2>Part 4 - Bitiş Türü</h2>
<div class="grid">
<button class="normal" onclick="sec('Normal Bitiş')">Normal Bitiş</button>
<button class="okey" onclick="sec('Okey Attı')">Okey Attı</button>
<button class="konken" onclick="sec('Konken')">Konken</button>
<button class="kokey" onclick="sec('Konkenden Okey Attı')">Konkenden Okey Attı</button>
<button class="renk" style="grid-column:1/3" onclick="renk()">🌈 RENK</button>
</div>
<div id="sonuc">Seçim yapılmadı.</div>
</div>
<script>
function sec(t){
localStorage.setItem("ag_bitis",t);
document.getElementById("sonuc").innerHTML="<b>Seçilen:</b> "+t+"<br>Part 5'te bu seçime göre puan motoru çalışacak.";
}
function renk(){
localStorage.setItem("ag_bitis","RENK");
document.getElementById("sonuc").innerHTML="<h2>🏆 RENK YAPILDI</h2><p>Oyun biter. Rakip kaybeder.</p>";
fire();
}
function fire(){
const c=document.getElementById("c"),x=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let p=[];
for(let i=0;i<180;i++)p.push({x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,l:80});
(function a(){
x.clearRect(0,0,c.width,c.height);
p.forEach(o=>{x.fillStyle=`hsl(${Math.random()*360},100%,60%)`;x.fillRect(o.x,o.y,4,4);o.x+=o.vx;o.y+=o.vy;o.vy+=.08;o.l--;});
p=p.filter(o=>o.l>0);
if(p.length)requestAnimationFrame(a);else x.clearRect(0,0,c.width,c.height);
})();
}
</script></body></html>
<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Part 5</title>
<style>
body{margin:0;background:#0f172a;color:#fff;font-family:Arial;padding:20px}
.card{max-width:800px;margin:auto;background:#1e293b;padding:20px;border-radius:16px}
.row{display:grid;grid-template-columns:1fr 1fr;gap:15px}
input,button{width:100%;padding:12px;border:none;border-radius:8px;box-sizing:border-box}
button{background:#16a34a;color:#fff;font-weight:bold;margin-top:15px}
.out{background:#0f172a;padding:10px;border-radius:8px;margin-top:8px}
</style></head><body>
<div class="card">
<h2>Part 5 - Eşli Puan Motoru</h2>
<div>Çarpan: <b id="c">-</b> | Bitiş: <b id="b">-</b></div>
<div class="row">
<div>
<h3>Takım A</h3>
<input id="a" type="number" placeholder="Elde kalan sayı">
<div class="out">Ceza: <span id="ac">0</span></div>
</div>
<div>
<h3>Takım B</h3>
<input id="bb" type="number" placeholder="Elde kalan sayı">
<div class="out">Ceza: <span id="bc">0</span></div>
</div>
</div>
<button onclick="hesapla()">HESAPLA</button>
<div class="out" id="sonuc">Sonuç burada görünecek.</div>
</div>
<script>
const odul={3:30,4:40,5:50,6:60,10:100};
const okey={3:300,4:400,5:500,6:600,10:1000};
document.getElementById('c').textContent='x'+(localStorage.ag_carpan||'-');
document.getElementById('b').textContent=localStorage.ag_bitis||'-';
function hesapla(){
let carpan=parseInt(localStorage.ag_carpan||0);
let bitis=localStorage.ag_bitis||"";
let a=Number(document.getElementById('a').value||0);
let b=Number(document.getElementById('bb').value||0);
let ac=a*carpan, bc=b*carpan;
document.getElementById('ac').textContent=ac;
document.getElementById('bc').textContent=bc;
let txt="";
if(bitis==="Normal Bitiş"){
 txt="Kazanan takımdan "+odul[carpan]+" puan düşülür.";
}else if(bitis==="Okey Attı"){
 txt="Kazanan takımdan "+okey[carpan]+" puan düşülür.";
}else if(bitis==="Konken"){
 txt="Kazanan: -"+(okey[carpan]*2)+" | Kaybeden çarpanı x"+(carpan*2);
}else if(bitis==="Konkenden Okey Attı"){
 txt="Kazanan: -"+(okey[carpan]*2)+" | Kaybeden çarpanı x"+(carpan*4);
}else if(bitis==="RENK"){
 txt="🏆 RENK! Oyun biter, rakip kaybeder.";
}
document.getElementById('sonuc').innerHTML=txt+"<br><br><b>NOT:</b> Part 6'da kazanan takım seçimi, otomatik puan yazımı ve 5 el toplamı eklenecek.";
}
</script></body></html>
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Part 6</title>
<style>
body{margin:0;background:#0f172a;color:#fff;font-family:Arial;padding:20px}
.card{max-width:900px;margin:auto;background:#1e293b;padding:20px;border-radius:16px}
.row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
input,select,button{width:100%;padding:12px;border:none;border-radius:8px;box-sizing:border-box;margin:5px 0}
button{background:#16a34a;color:#fff;font-weight:bold}
.out{background:#0f172a;padding:10px;border-radius:8px;margin-top:10px}
</style>
</head>
<body>
<div class="card">
<h2>Part 6 - Herkes Tek</h2>

<div class="row">
<input id="p1" placeholder="Oyuncu 1">
<input id="p2" placeholder="Oyuncu 2">
<input id="p3" placeholder="Oyuncu 3">
<input id="p4" placeholder="Oyuncu 4">
</div>

<h3>Biten Oyuncu</h3>
<select id="winner">
<option>Oyuncu 1</option>
<option>Oyuncu 2</option>
<option>Oyuncu 3</option>
<option>Oyuncu 4</option>
</select>

<h3>Taşı Atan Oyuncu</h3>
<select id="thrower">
<option>Oyuncu 1</option>
<option>Oyuncu 2</option>
<option>Oyuncu 3</option>
<option>Oyuncu 4</option>
</select>

<h3>Bitiş Türü</h3>
<select id="finish">
<option>Normal Bitiş</option>
<option>Okey Attı</option>
<option>Konken</option>
<option>Konkenden Okey Attı</option>
<option>RENK</option>
</select>

<button onclick="hesapla()">Hesapla</button>

<div class="out" id="sonuc">Sonuç burada görünecek.</div>
</div>

<script>
function hesapla(){
 const winner=document.getElementById('winner').selectedIndex;
 const thrower=document.getElementById('thrower').selectedIndex;
 const finish=document.getElementById('finish').value;

 let ceza=0;
 if(winner!==thrower){
   ceza=(finish==="Normal Bitiş")?100:200;
 }

 let txt="";
 if(finish==="RENK"){
   txt="🏆 RENK yapıldı. Oyun hemen biter, diğer tüm oyuncular kaybeder.";
 }else{
   txt="Taşı atan oyuncuya yazılacak ceza: <b>"+ceza+"</b> puan.";
 }

 txt+="<hr>";
 txt+="<b>Part 7'de gelecek:</b><br>";
 txt+="• 5 el puan tablosu<br>";
 txt+="• Otomatik toplamlar<br>";
 txt+="• Fark hesabı<br>";
 txt+="• Geri al ve el düzenleme";

 document.getElementById('sonuc').innerHTML=txt;
}
</script>
</body>
</html>
