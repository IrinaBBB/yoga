window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer 

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
    }

    setClock('timer', deadline);


    function smoothScroll(target, duration) {
        var target = document.querySelector(target),
            targetPosition = target.getBoundingClientRect().top,
            startPosition = 0,
            distance = targetPosition + startPosition,
            startTime = null;

    console.log(target.getBoundingClientRect().top);


            

            

            console.log('targetPostition' + targetPosition);
            console.log('startPosition' + startPosition);
            console.log('distnace' + distance); 


        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime,
                run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);

        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);

    }



    let section1 = document.querySelectorAll('a')[0],
        section2 = document.querySelectorAll('a')[1],
        section3 = document.querySelectorAll('a')[2],
        section4 = document.querySelectorAll('a')[3];


    section1.addEventListener('click', function () {
        smoothScroll('#about', 2000);
    });

    section2.addEventListener('click', function () {
        smoothScroll('#photo', 2000);
    });

    section3.addEventListener('click', function () {
        smoothScroll('#price', 2000);
    });

    section4.addEventListener('click', function () {
        smoothScroll('#contacts', 2000);
    });

    console.log(section1.getBoundingClientRect().top);
    console.log(section2.getBoundingClientRect().top);
    console.log(section3.getBoundingClientRect().top);
    console.log(section4.getBoundingClientRect().top);




    // Modal window

    let more = document.querySelector('.more'),
               overlay = document.querySelector('.overlay'),
               close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });


});