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

function showSchedule(){

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

        day.items.forEach(item => {

            html += `

            <div class="scheduleItem">

                <div class="left">

            `;

            // 時間がある予定
            if(item.time){

                html += `
                    <span class="time">${item.time}</span>
                `;

            }else{

                html += `
                    <span class="time"></span>
                `;

            }

            // タイトル
            html += `
                <span>${item.title}</span>
            `;

            html += `
                </div>
            `;

            // Secretなら鍵ボタン
            if(item.secret){

                html += `

                <button
                    class="lockBtn"
                    onclick="showPassword(${item.stage})">

                    🔒

                </button>

                `;

            }else{

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

    app.innerHTML = `

    <div class="page">

        <button class="backBtn"
        onclick="showMenu()">

            ← Home

        </button>

        <h1>🎒 Packing</h1>

        <p style="text-align:center">

            Part3で完成します😊

        </p>

    </div>

    `;

}

// =====================
// 起動
// =====================

showTop();
