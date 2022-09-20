import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import ItcTabs from './switcher.js'
// import {Howl, Howler} from './howler.js'; //The requested module './howler.js' does not provide an export named 'Howl'
// // const {Howl, Howler} = require('./howler.js');  //require is not defined

// var sound = new Howl({
//   src: ['./../goodmorning.mp3'],
// });

// sound.play();


new ItcTabs('.tabs');


const form = document.getElementById("datecalc")


form.onsubmit = (event) => {
  event.preventDefault();

  console.log('form', event.target)

  const formData = new FormData(event.target)

  const firstDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firstDate || !secondDate) {
    printError('Oooppppss -> put date')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate)

    printResult(dateDiff)
  }
}

 


const timer = document.getElementById("timer")
timer.onsubmit = (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const timerSetUp = formData.get('setTime');
  console.log (timerSetUp);


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// var deadline="January 01 2018 00:00:00 GMT+0300"; //for Moscow
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
var deadline = new Date(timerSetUp);
initializeClock('countdown', deadline);
}