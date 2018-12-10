window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calculator = require('./parts/calculator'),
        form = require('./parts/form'),
        modalWindow = require('./parts/modalWindow'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');


        calculator();
        form();
        modalWindow();
        slider();
        tabs();
        timer();

    

});