// Form 

function form() {
  let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
  };


  let form = document.getElementsByClassName('main-form')[0],
      formBottom = document.getElementById('form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  input[3].addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9+]/ig, '');
  });

  input[4].addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9+]/ig, '');
  });


  function sendForm(elem) {
      elem.addEventListener('submit', function (e) {
          e.preventDefault();
          elem.appendChild(statusMessage);
          let formData = new FormData(elem);


          function postData(data) {
              return new Promise(function (resolve, reject) {
                  let request = new XMLHttpRequest();

                  request.open('POST', 'server.php');
                  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                  request.onreadystatechange = function () {
                      if (request.readyState < 4) {
                          resolve();
                      } else if (request.readyState === 4) {
                          if (request.status == 200 && request.status < 3) {
                              resolve();
                          } else {
                              reject();
                          }
                      }
                  }

                  request.send(data);

              });
          }

          function clearInput() {
              for (let i = 0; i < input.length; i++) {
                  input[i].value = '';
              }
          }

          postData(formData)
              .then(() => statusMessage.innerHTML = message.loading)
              .then(() => statusMessage.innerHTML = message.success)
              .catch(() => statusMessage.innerHTML = message.failure)
              .then(clearInput)


      });
  }
  sendForm(form);
  sendForm(formBottom);
}