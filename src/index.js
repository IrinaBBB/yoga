window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calculator = require('./parts/calculator'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');


        calculator();
        form();
        slider();
        tabs();
        timer();

    

});