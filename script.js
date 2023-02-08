const action = document.getElementById('startStop');
const hh = document.getElementById('hour');
const mm = document.getElementById('minute');
const ss = document.getElementById('second');
const ms = document.getElementById('milli-sec');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSec = 0; 
let displayMilliSec = 0;

let intervalId = null;

function startStop() {
    
    // Check if the action is of Start or Stop
    if (action.textContent == 'Start') {
        console.log('Start')
        action.innerHTML = 'Stop';
        intervalId = setInterval(start, 10);
        action.style.backgroundColor = '#D20A0A'
    } else {
        console.log('Stop');
        action.innerHTML = 'Start'
        action.style.backgroundColor = '#0070F2'

        if (intervalId !== null) {
            clearInterval(intervalId);
            action.innerHTML = 'Start'
        }
    }
}

function resetTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        action.innerHTML = 'Start'
        milliSec = 0;
        renderTime(hours = '00', minutes = '00', seconds = '00', displayMilliSec = '00');
    }
}




function start() {
    // calculate time
    ++milliSec;
    seconds = Math.floor(milliSec / 100);
    minutes = Math.floor((milliSec / 100) / 60) ;
    hours = Math.floor(((milliSec / 100) / 60) / 60) ;
    displayMilliSec = milliSec % 100;

    evaluteTimer();
    renderTime(hours, minutes, seconds, displayMilliSec);
}


// function to evaluate time according to the value
function evaluteTimer() {
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes > 59) {
        minutes = minutes % 60;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds > 59) {
        seconds = seconds % 60;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (displayMilliSec < 10) {
        displayMilliSec = '0' + displayMilliSec;
    }



}


// render function to update DOM
function renderTime(hours, minutes, seconds, displayMilliSec) {
    hh.innerHTML = hours;
    mm.innerHTML = minutes;
    ss.innerHTML = seconds;
    ms.innerHTML = displayMilliSec;
}









const toggle = document.getElementsByTagName('body')[0];
const container = document.getElementsByClassName('container')[0];
toggle.style.backgroundColor = 'white';

// function to toggle theme 
function toggleTheme() {
    const property = toggle.style.getPropertyValue('background-color');
    if (property == 'white') {
        toggle.style.backgroundColor = 'black';
        toggle.style.color = 'white';
        container.style.border = '1px solid rgba(255, 255, 255, 0.18)'
    } else { 
        toggle.style.backgroundColor = 'white';
        toggle.style.color = 'black';
        container.style.border = '1px solid rgba(0, 0, 0, 0.18)'
    }
    
}




