const trafficLightElGreen = document.querySelector('#trafficLightGreen');
const trafficLightElYellow = document.querySelector('#trafficLightYellow');
const trafficLightElRed = document.querySelector('#trafficLightRed');

trafficLightElGreen.addEventListener('click', makeGreen);
function makeGreen() {
    trafficLightElGreen.style.background = ('green');
    trafficLightElYellow.style.background = ('black');
    trafficLightElRed.style.background = ('black');
}

trafficLightElYellow.addEventListener('click', makeYellow);
function makeYellow() {
    trafficLightElYellow.style.background = ('yellow');
    trafficLightElGreen.style.background = ('black');
    trafficLightElRed.style.background = ('black');
}

trafficLightElRed.addEventListener('click', makeRed);
function makeRed() {
    trafficLightElRed.style.background = ('red');
    trafficLightElYellow.style.background = ('black');
    trafficLightElGreen.style.background = ('black');
}

