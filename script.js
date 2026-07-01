// =======================================
// 23birthday
// script.js Part1
// 初期設定・トップ画面
// =======================================

const app = document.getElementById("app");

// =====================
// カウントダウン
// =====================

const today = new Date();
const trip = new Date(APP.startDate);

today.setHours(0, 0, 0, 0);
trip.setHours(0, 0, 0, 0);

const diff = trip - today;
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

let countdown = "";

if (days > 0) {
    countdown = `あと ${days} 日`;
} else if (days === 0) {
    countdown = "🎉 Today!";
} else {
    countdown = "旅行中";
}

// =====================
// TOP画面
// =====================

function showTop() {

    app.innerHTML = `

    <div class="hero">

        <div class="wave"></div>

        <div class="content">

            <h1>${APP.title}</h1>

            <h2>Welcome, ${APP.name}</h2>

            <h3>${countdown}</h3>

            <p>

                今日は君のためだけに用意した
                <br>
                特別な旅。

            </p>

            <p>${APP.tripDate}</p>

            <button onclick="showMenu()">

                旅をはじめる

            </button>

        </div>

    </div>

    `;

}

// =====================
// HOME画面
// =====================

function showMenu(){

    app.innerHTML = `

    <div class="page">

        <h1>🌊 Home</h1>

        <p style="text-align:center;margin-bottom:35px;">
            行きたい画面を選んでね
        </p>

        <div class="menuCard"
             onclick="showSchedule()">

            <div class="emoji">
                📅
            </div>

            <h2>Schedule</h2>

            <p>
                旅行スケジュールを見る
            </p>

        </div>

        <div class="menuCard"
             onclick="showPacking()">

            <div class="emoji">
                🎒
            </div>

            <h2>Packing List</h2>

            <p>
                持ち物をチェック
            </p>

        </div>

    </div>

    `;

}

// =====================
// 仮の画面
// （Part2で完成させる）
// =====================

function showSchedule() {

    let html = `

    <div class="page">

        <button class="backBtn" onclick="showMenu()">
            ← Home
        </button>

        <h1>📅 Schedule</h1>

    `;

    APP.schedule.forEach(day => {

        html += `

        <div class="dayCard">

            <div class="dayTitle">

                ${day.day}

            </div>

        `;

        day.items.forEach((item, index) => {

            item.opened =
            localStorage.getItem(
            `opened_${APP.schedule.indexOf(day)}_${index}`
            ) === "true";

            html += `

            <div class="scheduleItem">

                <div class="left">

            `;

            // 時間
            if (item.time) {

                html += `<span class="time">${item.time}</span>`;

            } else {

                html += `<span class="time"></span>`;

            }

            // Secretかどうか
            if (item.secret) {

                if (item.opened) {

                    html += `

                    <span>

                        ✅ ${item.title}

                    </span>

                    `;

                } else {

                    html += `

                    <span>

                        🔒 次の目的地

                    </span>

                    `;

                }

            } else {

                html += `

                <span>

                    ${item.title}

                </span>

                `;

            }

            html += `

                </div>

            `;

            // ボタン
            if (item.secret) {

                html += `

                <button
                    class="lockBtn"
                    onclick="showPassword(${APP.schedule.indexOf(day)},${index})">

                    🔑

                </button>

                `;

            } else {

                html += `<div style="width:45px;"></div>`;

            }

            html += `

            </div>

            `;

        });

        html += `

        </div>

        `;

    });

    html += `

    </div>

    `;

    app.innerHTML = html;

}

function showPacking(){

    let html = `

    <div class="page">

        <button class="backBtn" onclick="showMenu()">
            ← Home
        </button>

        <h1>🎒 Packing List</h1>

    `;

    APP.packing.forEach((item,index)=>{

        const checked =
        localStorage.getItem("packing"+index)==="true";

        html += `

        <div class="packItem">

            <input
                type="checkbox"

                ${checked ? "checked" : ""}

                onchange="togglePacking(${index},this.checked)">

            <span>${item}</span>

        </div>

        `;

    });

    html += `

    </div>

    `;

    app.innerHTML = html;

}

function togglePacking(index,checked){

    localStorage.setItem(

        "packing"+index,

        checked

    );

}

// =====================
// 起動
// =====================

showTop();

// =====================
// パスワード画面
// =====================

function showPassword(dayIndex, itemIndex) {

    const item = APP.schedule[dayIndex].items[itemIndex];

    app.innerHTML = `

    <div class="page">

        <button class="backBtn" onclick="showSchedule()">
            ← Schedule
        </button>

        <h1>🔐 Password</h1>

        <div class="dayCard">

            <p style="text-align:center;margin-bottom:20px;">
                パスワードを入力してください
            </p>

            <input
                id="passwordInput"
                type="password"
                placeholder="Password"
                style="
                    width:100%;
                    padding:15px;
                    border:none;
                    border-radius:15px;
                    font-size:18px;
                    text-align:center;
                    margin-bottom:20px;
                ">

            <button
                onclick="checkPassword(${dayIndex},${itemIndex})">

                OPEN

            </button>

        </div>

    </div>

    `;

}

// =====================
// パスワード確認
// =====================

function checkPassword(dayIndex, itemIndex){

    const item = APP.schedule[dayIndex].items[itemIndex];

    const input =
    document.getElementById("passwordInput").value;

    if(input === item.password){

    item.opened = true;

    // 保存
    localStorage.setItem(
        `opened_${dayIndex}_${itemIndex}`,
        "true"
    );

    showSecret(dayIndex,itemIndex);

}else{

    alert("パスワードが違います😢");

}

}

// =====================
// シークレット画面
// =====================

function showSecret(dayIndex,itemIndex){

    const item = APP.schedule[dayIndex].items[itemIndex];

    app.innerHTML = `

    <div class="page">

        <button class="backBtn"
            onclick="showSchedule()">

            ← Schedule

        </button>

        <h1>${item.title}</h1>

        <div class="dayCard">

            <p style="font-size:20px;
                      text-align:center;
                      margin-bottom:20px;">

                ${item.description}

            </p>

            <img

                src="${item.image}"

                style="
                    width:100%;
                    border-radius:20px;
                    margin-bottom:20px;
                ">

            <button
                onclick="window.open('${item.map}')">

                📍Google Map

            </button>

        </div>

    </div>

    `;

}
