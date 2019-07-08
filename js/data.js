'use strict';

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var adForm = document.querySelector('.ad-form');
  var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];
  var adFormElements = adForm.querySelectorAll('.ad-form__element');

  window.allPins = [];

  var housingTypeDict = {
    flat: 'Квартира',
    bungalo: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец'
  };

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
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
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

  var URL = 'https://js.dump.academy/keksobooking';

  var upload = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var removePin = function () {
    var mapPins = document.querySelector('.map__pins');
    var pins = mapPins.querySelectorAll('button.map__pin:not(.map__pin--main)');

    var pinsArray = Array.from(pins);

    pinsArray.forEach(function (element) {
      mapPins.removeChild(element);
    });
  };

  var filterPins = function (filter) {
    return filter === 'any'
      ? window.allPins
      : window.allPins.filter(function (pin) {
        return pin.offer.type === filter;
      });
  };

  var reloadPins = function (filter) {
    window.data.removePin();
    window.pin.appendAdPin(filterPins(filter).slice(0, 5));
  };

  var showErrorMessage = function (message) {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var mainBlock = document.querySelector('main');

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  var showSuccessMessage = function (message) {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var mainBlock = document.querySelector('main');

    message = successTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  window.data = {
    getAdsArray: getAdsArray,
    load: load,
    upload: upload,
    removePin: removePin,
    reloadPins: reloadPins,
    showErrorMessage: showErrorMessage,
    showSuccessMessage: showSuccessMessage,
    housingTypeDict: housingTypeDict,
    addDisabledAttribute: addDisabledAttribute
  };
})();
