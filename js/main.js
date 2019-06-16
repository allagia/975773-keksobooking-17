'use strict';

var NUMBER_OF_ADS = 8;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

var randomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];

var map = document.querySelector('.map');
map.classList.remove('map--faded'); /* Временно активный режим */

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
            y: randomInteger(200, 631) - PIN_HEIGHT
          }
        }
    );
  }
  return ads;
};

var ads = getAdsArray(NUMBER_OF_ADS);

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

var appendAd = function () {
  for (var i = 0; i < ads.length; i++) {
    fragment.appendChild(renderAd(ads[i]));
  }

  similarListElement.appendChild(fragment);
};

appendAd();
