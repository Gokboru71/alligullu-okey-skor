<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Allı Güllü Okey Skor</title>
<style>
body{margin:0;background:#0f172a;color:#fff;font-family:Arial,sans-serif;padding:16px}
h1{text-align:center}
input,button{width:100%;padding:12px;margin:6px 0;border-radius:8px;border:none;box-sizing:border-box}
button{background:#16a34a;color:#fff;font-weight:bold}
.card{background:#1e293b;padding:12px;border-radius:10px;margin:12px 0}
.name{font-size:22px;text-align:center}
.score{font-size:38px;text-align:center;margin:10px 0}
.row{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.small{font-size:15px;padding:10px}
#game{display:none}
#history{margin-top:20px}
li{margin:4px 0}
</style>
</head>
<body>

<h1>🎲 Allı Güllü Okey Skor</h1>

<div id="setup">
<input id="n1" placeholder="1. Oyuncu">
<input id="n2" placeholder="2. Oyuncu">
<input id="n3" placeholder="3. Oyuncu">
<input id="n4" placeholder="4. Oyuncu">
<button onclick="startGame()">Oyunu Başlat</button>
</div>

<div id="game"></div>

<script>
let scores=[0,0,0,0];
let names=[];
let history=[];

function startGame(){
 names=[
 document.getElementById('n1').value||'1. Oyuncu',
 document.getElementById('n2').value||'2. Oyuncu',
 document.getElementById('n3').value||'3. Oyuncu',
 document.getElementById('n4').value||'4. Oyuncu'
 ];
 document.getElementById('setup').style.display='none';
 render();
}

function add(i,v){
 scores[i]+=v;
 history.push(names[i]+" : "+(v>0?"+":"")+v);
 render();
}

function render(){
 let g=document.getElementById("game");
 g.style.display="block";
 let html="";
 for(let i=0;i<4;i++){
 html+=`<div class="card">
 <div class="name">${names[i]}</div>
 <div class="score">${scores[i]}</div>
 <div class="row">
 <button class="small" onclick="add(${i},5)">+5</button>
 <button class="small" onclick="add(${i},10)">+10</button>
 <button class="small" onclick="add(${i},20)">+20</button>
 <button class="small" onclick="add(${i},101)">+101</button>
 <button class="small" onclick="add(${i},-5)">-5</button>
 <button class="small" onclick="add(${i},-10)">-10</button>
 <button class="small" onclick="add(${i},-20)">-20</button>
 <button class="small" onclick="add(${i},50)">+50</button>
 </div></div>`;
 }
 let ranking=[0,1,2,3].sort((a,b)=>scores[b]-scores[a]);
 html+="<div class='card'><h3>Sıralama</h3>";
 ranking.forEach((r,k)=>html+=`${k+1}. ${names[r]} - ${scores[r]}<br>`);
 html+="</div>";
 html+="<div class='card'><button onclick='undo()'>↩️ Geri Al</button><button onclick='resetGame()'>🆕 Yeni Oyun</button></div>";
 html+="<div class='card'><h3>Geçmiş</h3><ol>";
 history.slice().reverse().forEach(h=>html+="<li>"+h+"</li>");
 html+="</ol></div>";
 g.innerHTML=html;
}
function undo(){
 if(history.length==0)return;
 let last=history.pop();
 let m=last.match(/^(.*) : ([+-]?)(\d+)/);
 if(!m)return;
 let idx=names.indexOf(m[1]);
 let val=parseInt(m[3]);
 if(m[2]==="+") scores[idx]-=val;
 else scores[idx]+=val;
 render();
}
function resetGame(){
 if(confirm("Yeni oyun başlatılsın mı?")){
 scores=[0,0,0,0];
 history=[];
 document.getElementById("setup").style.display="block";
 document.getElementById("game").style.display="none";
 }
}
</script>
</body>
</html>
