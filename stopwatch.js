let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0, milliseconds=0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

startStopBtn.addEventListener("click", function() {
    if (!isRunning) {
        timer = setInterval(startStopwatch, 10);
        startStopBtn.textContent = "Stop";
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        isRunning = false;
    }
});

resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds=0
    display.textContent = "00:00:00:000";
    startStopBtn.textContent = "Start";
    isRunning = false;
});

function startStopwatch() {
    milliseconds+=20
    if(milliseconds===1000){
        milliseconds=0;
    
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
}
    display.textContent = formatTime(hours, minutes, seconds, milliseconds);
}

function formatTime(h, m, s, ms) {
    return (h < 10 ? "0" + h : h) + ":" + 
           (m < 10 ? "0" + m : m) + ":" + 
           (s < 10 ? "0" + s : s) + ":" +
           (ms < 10 ? "0" + ms : ms);
}