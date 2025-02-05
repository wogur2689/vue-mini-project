<script setup>
let h = 0; //시 
let m = 0; //분
let s = 0; //초
let t = 0; //밀리
let saveH = document.getElementById("hour"); //현재 시
let saveM = document.getElementById("minute"); //현재 분
let saveS = document.getElementById("second"); //현재 초
let saveT = document.getElementById("teMilli"); //현재 밀리
const btnStart = document.getElementById("btnsta"); //시작버튼
const btnStop = document.getElementById("btnsto"); //멈춤버튼
const btnReset = document.getElementById("btnres"); //초기화버튼
let intervalId;

btnStart.onclick(() => {
    clearInterval(intervalId)
    intervalId = setInterval(operateTimer, 10)
});
btnStop.onclick = function () {
    clearInterval(intervalId)
}
btnReset.onclick = function () {
    clearInterval(intervalId)
    h = 0; m = 0; s = 0; t = 0;
    saveH.textContent = "00";
    saveM.textContent = "00";
    saveS.textContent = "00";
    saveT.textContent = "00";
}
function operateTimer() {
    t++;
    saveT.textContent = t > 9 ? t : '0' + t;
    if (t > 99) {
        s++;
        saveS.textContent = s > 9 ? s : '0' + s;
        t = 0;
        saveT.textContent = "00";
    }
    if (s > 59) {
        m++;
        saveM.textContent = m > 9 ? m : '0' + m;
        s = 0;
        saveS.textContent = "00";
    }
    if (m > 59) {
        h++;
        saveH.textContent = h > 9 ? h : '0' + h;
        m = 0;
        saveM.textContent = "00";
    }
}
</script>

<template>
    <div class="sidebar-Timer">
        <b>스톱워치</b>
        <strong>
            <span id="hour">00</span>
            <span>:</span>
            <span id="minute">00</span>
            <span>:</span>
            <span id="second">00</span>
            <span>.</span>
            <span id="teMilli">00</span>
        </strong>
        <button id="btnsta">시작</button>
        <button id="btnsto">멈춤</button>
        <button id="btnres">초기화</button>
    </div>
</template>

<style scoped>
.sidebar-Timer {
    background: -webkit-linear-gradient(top, #ae4eff, #3567ff);
    background-repeat: no-repeat;
    display: inline-block;
    width: 260px;
    height: 180px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
    line-height: 50px;
}

.sidebar-Timer b {
    font-size: 30px;
}

.sidebar-Timer strong {
    display: block;
    font-size: 30px;
}

.sidebar-Timer button {
    width: 60px;
    height: 50px;
    font-size: 15px;
    color: white;
    margin-left: 5px;
    margin-right: 5px;
    background: black;
    border: solid 1px black;
}
</style>