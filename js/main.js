'use strict';

var NUMBER_OF_ADS = 8;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var MAIN_PIN_WIDTH = 65;
var MAIN_PIN_HEIGHT = 65;
var MAIN_PIN_AFTER_HEIGHT = 22;

var adForm = document.querySelector('.ad-form');
var mainPin = document.querySelector('.map__pin--main');
var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];
var map = document.querySelector('.map');
var adFormElements = adForm.querySelectorAll('.ad-form__element');
var inputAddress = adForm.querySelector('input[name = address]');

var addDisabledAttribute = function () {
  adForm.querySelector('.ad-form-header').setAttribute('disabled', '');

  adFormElements.forEach(function (element) {
    element.setAttribute('disabled', '');
  });
};
addDisabledAttribute();

var deleteDisabledttribute = function () {
  adForm.querySelector('.ad-form-header').removeAttribute('disabled', '');

  adFormElements.forEach(function (element) {
    element.removeAttribute('disabled', '');
  });
};


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


var leftCoordinate = mainPin.style.left;
leftCoordinate = leftCoordinate.substring(0, leftCoordinate.length - 2);

var topCoordinate = mainPin.style.top;
topCoordinate = topCoordinate.substring(0, topCoordinate.length - 2);

var middleCoordinateX = Number(leftCoordinate) + Number(MAIN_PIN_WIDTH / 2); /* коордиината Х середины главной метки */
var middleCoordinateY = Number(topCoordinate) + Number(MAIN_PIN_HEIGHT / 2); /* коордиината Y середины главной метки */
var bottomCoordinateX = Number(topCoordinate) + MAIN_PIN_HEIGHT + MAIN_PIN_AFTER_HEIGHT; /* координата Х острого конца главной метки*/

inputAddress.setAttribute('value', middleCoordinateX + ', ' + middleCoordinateY); /* присвоение значения полю Адрес при неактивном состоянии*/

mainPin.addEventListener('mouseup', function () {
  mainPin.addEventListener('click', function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    deleteDisabledttribute();
  });

  inputAddress.setAttribute('value', middleCoordinateX + ', ' + bottomCoordinateX); /* присвоение значения полю Адрес при активном состоянии*/
});
