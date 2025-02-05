<script setup>
import { ref } from 'vue';

let h = ref(0); //시 
let m = ref(0); //분
let s = ref(0); //초
let t = ref(0); //밀리
let intervalId = null;

const startTimer = () => {
    clearInterval(intervalId);
    intervalId = setInterval(operateTimer, 10);
};

const stopTimer = () => {
    clearInterval(intervalId);
}

const resetTimer = () => {
    clearInterval(intervalId)
    h.value = 0;
    m.value = 0;
    s.value = 0;
    t.value = 0;
}

function operateTimer() {
    t.value++;
    if (t.value > 99) {
        s.value++;
        t.value = 0;
    }
    if (s.value > 59) {
        m.value++;
        s.value = 0;
    }
    if (m.value > 59) {
        h.value++;
        m.value = 0;
    }
}

const formatTime = (value) => {
    return String(value).padStart(2, '0'); // 2자리 형식으로 변환
};
</script>

<template>
    <div class="sidebar-Timer">
        <b>스톱워치</b>
        <strong>
            <span id="hour">{{ formatTime(h) }}</span>
            <span>:</span>
            <span id="minute">{{ formatTime(m) }}</span>
            <span>:</span>
            <span id="second">{{ formatTime(s) }}</span>
            <span>.</span>
            <span id="teMilli">{{ formatTime(t) }}</span>
        </strong>
        <button ref="btnsta" @click="startTimer">시작</button>
        <button ref="btnsto" @click="stopTimer">멈춤</button>
        <button ref="btnres" @click="resetTimer">초기화</button>
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