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
addIcon('Start');

function startStop() {
    
    // Check if the action is of Start or Stop
    if (action.textContent == 'Start') {
        console.log('Start')
        action.innerHTML = 'Stop';
        intervalId = setInterval(start, 10);
        action.style.background = 'linear-gradient(275deg, rgba(210,10,10,1) 0%, rgba(132,6,6,1) 100%)'
        addIcon('Stop');
        
    } else {
        console.log('Stop');
        action.innerHTML = 'Start'
        action.style.background = 'linear-gradient(275deg, rgba(0,112,242,1) 0%, rgba(0,42,134,1) 100%)'
        addIcon('Start');

        if (intervalId !== null) {
            clearInterval(intervalId);
        }
    }
}

function resetTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        action.innerHTML = 'Start'
        action.style.background = 'linear-gradient(275deg, rgba(0,112,242,1) 0%, rgba(0,42,134,1) 100%)'
        addIcon('Start');

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
const label = document.getElementsByClassName('label')[0];
const themeButton = document.getElementById('toggle-theme');

toggle.style.backgroundImage = "url('img/ventura-light.jpeg')";
themeIcon('light');
// function to toggle theme 
function toggleTheme() {
    const property = toggle.style.getPropertyValue('background-image');

    if (property == 'url("img/ventura-light.jpeg")') {
        themeButton.innerHTML = '';
        themeButton.style.backgroundColor = 'white';
        themeButton.style.color = 'black';
        toggle.style.backgroundImage = "url('img/ventura-dark.jpeg')";
        toggle.style.color = 'white';
        container.style.border = '1px solid rgba(0, 0, 0, 0.18)'
        container.style.backgroundColor = 'rgba(57, 57, 57, 0.2)';
        label.style.color = 'rgba(198, 198, 198, 0.5)';
        themeIcon('dark');
    } else { 
        themeButton.innerHTML = '';
        themeButton.style.backgroundColor = 'black';
        themeButton.style.color = 'white';
        toggle.style.backgroundImage = "url('img/ventura-light.jpeg')";
        toggle.style.color = 'black';
        container.style.border = '1px solid rgba(255, 255, 255, 0.18)';
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
        label.style.color = 'rgba(53, 53, 53, 0.5)';
        themeIcon('light');

    }
    
}




// function to change start, stop icon
function addIcon(button) {
    let i = document.createElement('i');
    i.classList.add('fa-solid', button === 'Start' ? 'fa-play' : 'fa-stop'); 
    document.getElementById('startStop').prepend(i);
}


// function to change light, dark theme icon
function themeIcon(icon) {
    let i = document.createElement('i');
    i.classList.add('fa-solid', icon === 'dark' ? 'fa-sun' : 'fa-moon'); 
    document.getElementById('toggle-theme').prepend(i);

    let span = document.createElement('span');
    span.classList.add('tooltip');
    if (icon === 'dark') {
        span.innerHTML = 'Light';
    } else {
        span.innerHTML = 'Dark';
    }
    
    document.getElementById('toggle-theme').prepend(span);

}




