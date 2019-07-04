'use strict';

(function () {
  var housingTypeDict = {
    flat: 'Квартира',
    bungalo: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец'
  };

  var renderAdPin = function (ad) {
    var similarAddTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var adElement = similarAddTemplate.cloneNode(true);

    adElement.style.left = ad.location.x + 'px';
    adElement.style.top = ad.location.y + 'px';
    adElement.querySelector('img').src = ad.author.avatar;
    adElement.querySelector('img').alt = ad.offer.title;

    return adElement;
  };

  window.appendAdPin = function (ads) {
    var similarListElement = document.querySelector('.map__pins');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderAdPin(ads[i]));
    }

    similarListElement.appendChild(fragment);
  };

  var renderFeatures = function (array) {
    var element = '';
    for (var i = 0; i < array.length; i++) {
      element += '<li class="popup__feature popup__feature--' + array[i] + '"></li>';
    }
    return element;
  };

  var renderPhotos = function (array) {
    var element = '';
    for (var i = 0; i < array.length; i++) {
      element += '<img src="' + array[i] + '" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>';
    }
    return element;
  };

  var renderAdText = function (ad) {
    var similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
    var element = similarAddTemplate.cloneNode(true);

    element.querySelector('.popup__title').innerHTML = ad.offer.title;
    element.querySelector('.popup__text--address').innerHTML = ad.offer.address;
    element.querySelector('.popup__text--price').innerHTML = ad.offer.price + '₽/ночь';
    element.querySelector('.popup__type').innerHTML = housingTypeDict[ad.offer.type];
    element.querySelector('.popup__text--capacity').innerHTML = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    element.querySelector('.popup__text--time').innerHTML = 'Заезд после ' + ad.offer.checkin + ',  выезд до ' + ad.offer.checkout;
    element.querySelector('.popup__features').innerHTML = renderFeatures(ad.offer.features);
    element.querySelector('.popup__description').innerHTML = ad.offer.description;
    element.querySelector('.popup__photos').innerHTML = renderPhotos(ad.offer.photos);
    element.querySelector('.popup__avatar').src = ad.author.avatar;

    return element;
  };

  window.appendAdText = function (ad) {
    var filtersContainer = document.querySelector('.map__filters-container');
    var fragment = document.createDocumentFragment();

    fragment.appendChild(renderAdText(ad));

    filtersContainer.before(fragment);
  };
})();
