'use strict';

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var adForm = document.querySelector('.ad-form');
  var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];
  var adFormElements = adForm.querySelectorAll('.ad-form__element');

  var addDisabledAttribute = function () {
    adForm.querySelector('.ad-form-header').setAttribute('disabled', '');

    adFormElements.forEach(function (element) {
      element.setAttribute('disabled', '');
    });
  };
  addDisabledAttribute();

  var randomInteger = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  var getAdsArray = function (numberOfAds) {
    var ads = [];
    for (var i = 1; i <= numberOfAds; i++) {
      ads.push(
          {
            author: {
              avatar: 'img/avatars/user' + '0' + i + '.png'
            },
            offer: {
              type: apartmentTypes[randomInteger(0, 4)]
            },
            location: {
              x: randomInteger(25, 1175) - PIN_WIDTH / 2,
              y: randomInteger(130 + PIN_HEIGHT, 631) - PIN_HEIGHT
            }
          }
      );
    }
    return ads;
  };

  var load = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var errorTemplate = document.querySelector('#error').content.querySelector('.error');
      var errorMessage = errorTemplate.cloneNode(true);
      var mainBlock = document.querySelector('main');

      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        // onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText); /*удалить эту часть или оставить*/
        onError(mainBlock.appendChild(errorMessage));
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  };

  window.data = {
    getAdsArray: getAdsArray,
    load: load
  };
})();
