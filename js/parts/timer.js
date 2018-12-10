 // Timer 

 function timer() {
  let deadline = '2018-12-15 14:30';

  function getTimeRemaining(endtime) {

      function setZero(number) {
          if (number >= 0 && number < 10) {
              return '0' + number;
          } else {
              return number;
          }

      }
      let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = setZero(Math.floor((t / 1000) % 60)),
          minutes = setZero(Math.floor((t / 1000 / 60) % 60)),
          hours = setZero(Math.floor((t / (1000 * 60 * 60))));
      //hours = Math.floor((t/1000/60/60) % 24),
      //days = Math.floor((t/(1000*60*60*24)))

      if (t < 0) {
          seconds = '00';
          minutes = '00';
          hours = '00';
      }

      return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };

  }

  function setClock(id, endtime) {
      let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
          let t = getTimeRemaining(endtime);
          hours.textContent = t.hours;
          minutes.textContent = t.minutes;
          seconds.textContent = t.seconds;

          if (t.total <= 0) {
              clearInterval(timeInterval);
          }

      }


      setClock('timer', deadline);

  }