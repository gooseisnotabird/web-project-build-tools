// import { DateTime } from './luxon.js'
import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import ItcTabs from './switcher.js'


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


const endtime = timerSetUp;




// const endtime = 'Dec 1 2023, 17:00 GMT+0400';

// приводим к стандартному виду 03:04:05, вместо 3:4:5
function makeCorrectDate(uncorrectDate) {
  let correctDate = uncorrectDate;
  if (uncorrectDate < 10) {
    correctDate = '0' + uncorrectDate;
  }
  return correctDate;
}

// сколько времени осталось
function getDateRemaining(timesup) {
  // total = оставшееся вермя
  var total = Date.parse(timesup) - Date.now();
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  // вывод объектов
  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// инициализация таймера на самом сайте
function setTime(id, timesup) {
  let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    // обновление таймера каждые 1000мс
    timeInterval = setInterval(update, 1000);

  function update() {
    // результат функции getDateRemaining
    let total = getDateRemaining(timesup);
    // Проверка на ноль
    var nowdate = Date.now();
    if (nowdate <= Date.parse(endtime)) {
      var nowdate = Date.now();
      days.textContent = makeCorrectDate(total.days);
    	hours.textContent = makeCorrectDate(total.hours);
    	minutes.textContent = makeCorrectDate(total.minutes);
    	seconds.textContent = makeCorrectDate(total.seconds);
    } else {
      days.textContent = 0;
      hours.textContent = 0;
      minutes.textContent = 0;
      seconds.textContent = 0;
    }
    	

    // Окончания часов
    switch (total.days) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
       correctDays = "ДЕНЬ";
        // console.log(total.days, correctDays); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctDays = "ДНЯ";
         console.log(total.days, correctDays); // DEBUG
        break;
      default:
        correctDays = "ДНЕЙ";
         console.log(total.days, correctDays); // DEBUG
    }
    document.querySelector('.uncorrectDays').textContent = correctDays;

    // Окончания часов
    switch (total.hours) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctHours = "ЧАС";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctHours = "ЧАСА";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      default:
        correctHours = "ЧАСОВ";
        // console.log(total.hours, correctHours); // DEBUG
    }
    document.querySelector('.uncorrectHours').textContent = correctHours;

    // Окончания минут
    switch (total.minutes) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctMinutes = "МИНУТА";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctMinutes = "МИНУТЫ";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      default:
        correctMinutes = "МИНУТ";
        // console.log(total.minutes, correctMinutes); // DEBUG
    }
    document.querySelector('.uncorrectMinutes').textContent = correctMinutes;

    // Окончания секунд
    switch (total.seconds) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctSeconds = "СЕКУНДА";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctSeconds = "СЕКУНДЫ";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      default:
        correctSeconds = "СЕКУНД";
        // console.log(total.seconds, correctSeconds); // DEBUG
    }
    document.querySelector('.uncorrectSeconds').textContent = correctSeconds;
  }
}
setTime('timer', endtime);




}

























// function changeTimezone(date, ianatz) {
//   var invdate = new Date(date.toLocaleString('en-US', {
//     timeZone: ianatz
//   }));

//   var diff = invdate.getTime() - date.getTime();

//   return new Date(date.getTime() - diff);
// };

// document.addEventListener('DOMContentLoaded', function() {
//   // конечная дата
//   const x = new Date("2023-01-01T10:00:00");
 
//   // часовой пояс
//   // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
//   var deadline = changeTimezone(x, "Europe/Ulyanovsk");
//   // id таймера
//   let timerId = null;
//   // склонение числительных
//   function declensionNum(num, words) {
//     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//   }
//   // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//   function countdownTimer() {
//     const diff = deadline - new Date();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }
//     const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//     const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     $days.textContent = days < 10 ? '0' + days : days;
//     $hours.textContent = hours < 10 ? '0' + hours : hours;
//     $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//     $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//     $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//     $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//     $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//     $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//   }
//   // получаем элементы, содержащие компоненты даты
//   const $days = document.querySelector('.timer__days');
//   const $hours = document.querySelector('.timer__hours');
//   const $minutes = document.querySelector('.timer__minutes');
//   const $seconds = document.querySelector('.timer__seconds');
//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   timerId = setInterval(countdownTimer, 1000);
// });