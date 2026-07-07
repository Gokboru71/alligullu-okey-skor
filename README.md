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
