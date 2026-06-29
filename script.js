const app = document.getElementById("app");

// カウントダウン
const today = new Date();
const trip = new Date(APP.startDate);

today.setHours(0,0,0,0);
trip.setHours(0,0,0,0);

const diff = trip - today;
const days = Math.ceil(diff / (1000*60*60*24));

let countdown;

if(days > 0){

    countdown = `あと ${days} 日`;

}else if(days === 0){

    countdown = "　Today!!　";

}else{

    countdown = "旅行中";

}

// トップ画面
app.innerHTML = `

<div class="hero">

<div class="wave"></div>

<div class="content">

<h1>${APP.title}</h1>

<h2>Welcome, ${APP.name}</h2>

<h3>${countdown}</h3>

<p>

駿真の23歳の誕生日をお祝いする旅に行こう！！

このしおりにはまだ秘密が隠されています…

</p>

<p>${APP.tripDate}</p>

<button id="startBtn">

start

</button>

</div>

</div>

`;
