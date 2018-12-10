 // Calculator
 function calculator() {
     let persons = document.querySelectorAll('.counter-block-input')[0],
         restDays = document.querySelectorAll('.counter-block-input')[1],
         place = document.getElementById('select'),
         totalValue = document.getElementById('total');


     persons.addEventListener('input', function () {
         this.value = this.value.replace(/\+|\e|\.|\,/ig, '');
     });

     restDays.addEventListener('input', function () {
         this.value = this.value.replace(/\+|\e|\.|\,/ig, '');
     });


     totalValue.innerHTML = 0;


     function multi() {
         if (persons.value != '' && persons.value > 0 && restDays.value != '' && restDays.value > 0) {
             totalValue.innerHTML = persons.value * restDays.value * place.value * 8000;
         } else {
             totalValue.innerHTML = 0;
         }
     }
    
     persons.addEventListener('input', multi);
     restDays.addEventListener('input', multi);
     place.addEventListener('input', multi);

 }

 module.exports = calculator;