var msec = 0;
var sec = 0;
var min = 0;
var hours = 0;
var timer = 0;

var stopWatchEl = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');

function start() {

    if (!timer) {
        timer = setInterval(run, 10);
    }
}


function run() {
    stopWatchEl.textContent = getTimer();
    msec++;

    if (msec == 100) {
        msec = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hours++;
    }

}

function pause() {
    stopTimer();
}

function stop() {
    clearInterval(timer);
    timer = false;
    min = 0, sec = 0, msec = 0, hours = 0;

    stopWatchEl.textContent = getTimer();
}


function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (hours < 10 ? "0" + hours : hours) + ':' + (min < 10 ? "0" + min : min) + ':' + (sec < 10 ? "0" + sec : sec) + ':' + (msec < 10 ? "0" + msec : msec);
}


function restart() {
    stop();
    start();
}

function lap() {
    if (timer) {
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapsContainer.appendChild(li);
    }
}