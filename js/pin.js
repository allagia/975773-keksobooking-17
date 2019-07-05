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

  var appendAdPin = function (ads) {
    var similarListElement = document.querySelector('.map__pins');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderAdPin(ads[i]));
    }

    similarListElement.appendChild(fragment);
  };

  var renderAdText = function (ad) {
    var similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
    var element = similarAddTemplate.cloneNode(true);

    element.querySelector('.popup__title').textContent = ad.offer.title;
    element.querySelector('.popup__text--address').textContent = ad.offer.address;
    element.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
    element.querySelector('.popup__type').textContent = housingTypeDict[ad.offer.type];
    element.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    element.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',  выезд до ' + ad.offer.checkout;
    element.querySelector('.popup__features').innerHTML = window.field.renderFeatures(ad.offer.features);
    element.querySelector('.popup__description').textContent = ad.offer.description;
    element.querySelector('.popup__photos').innerHTML = window.field.renderPhotos(ad.offer.photos);
    element.querySelector('.popup__avatar').src = ad.author.avatar;

    return element;
  };

  var appendAdText = function (ad) {
    var filtersContainer = document.querySelector('.map__filters-container');
    var fragment = document.createDocumentFragment();

    fragment.appendChild(renderAdText(ad));

    filtersContainer.before(fragment);
  };

  window.pin = {
    appendAdPin: appendAdPin,
    appendAdText: appendAdText
  };
})();
