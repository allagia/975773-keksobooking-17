'use strict';

(function () {
  var NUMBER_OF_ADS = 8;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGHT = 65;
  var MAIN_PIN_AFTER_HEIGHT = 22;

  var adForm = document.querySelector('.ad-form');
  var mainPin = document.querySelector('.map__pin--main');
  var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];
  var adFormElements = adForm.querySelectorAll('.ad-form__element');
  var inputAddress = adForm.querySelector('input[name = address]');

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

  var similarAddTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var renderAd = function (ad) {
    var adElement = similarAddTemplate.cloneNode(true);

    adElement.style.left = ad.location.x + 'px';
    adElement.style.top = ad.location.y + 'px';
    adElement.querySelector('img').src = ad.author.avatar;
    adElement.querySelector('img').alt = '"заголовок объявления"';

    return adElement;
  };
  var similarListElement = document.querySelector('.map__pins');

  var fragment = document.createDocumentFragment();

  var appendAd = function (ads) {
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderAd(ads[i]));
    }

    similarListElement.appendChild(fragment);
  };

  appendAd(getAdsArray(NUMBER_OF_ADS));

  var setAddress = function (isActive) {
    var coordinateX = mainPin.style.left;
    coordinateX = coordinateX.substring(0, coordinateX.length - 2);
    var coordinateY = mainPin.style.top;
    coordinateY = coordinateY.substring(0, coordinateY.length - 2);

    var x = Number(coordinateX) + Number(MAIN_PIN_WIDTH / 2);

    if (isActive) {
      var y = Number(coordinateY) + MAIN_PIN_HEIGHT + MAIN_PIN_AFTER_HEIGHT;
    } else {
      y = Number(coordinateY) + Number(MAIN_PIN_HEIGHT / 2);
    }

    inputAddress.value = x + ', ' + y;
  };

  setAddress();

  mainPin.addEventListener('mouseup', function () {
    setAddress(true);
  });
})();
