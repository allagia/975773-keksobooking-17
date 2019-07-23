'use strict';

(function () {

  var renderAdPin = function (ad) {
    var similarAddTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var adPin = similarAddTemplate.cloneNode(true);

    adPin.style.left = ad.location.x + 'px';
    adPin.style.top = ad.location.y + 'px';
    adPin.querySelector('img').src = ad.author.avatar;
    adPin.querySelector('img').alt = ad.offer.title;

    adPin.addEventListener('click', function () {
      window.removeEventListener('keydown', onEscPress);
      window.handler.removeChild('.map', 'article');
      appendAdText(ad);
      adPin.classList.add('map__pin--active');
    });

    adPin.addEventListener('blur', function () {
      adPin.classList.remove('map__pin--active');
    });

    return adPin;
  };

  var appendAdPin = function (ads) {
    var similarList = document.querySelector('.map__pins');
    var fragment = document.createDocumentFragment();

    ads.forEach(function (element) {
      fragment.appendChild(renderAdPin(element));
    });
    // for (var i = 0; i < ads.length; i++) {
    //   fragment.appendChild(renderAdPin(ads[i]));
    // }

    similarList.appendChild(fragment);
  };

  var renderAdText = function (ad) {
    var similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');
    var popup = similarAddTemplate.cloneNode(true);

    popup.querySelector('.popup__title').textContent = ad.offer.title;
    popup.querySelector('.popup__text--address').textContent = ad.offer.address;
    popup.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
    popup.querySelector('.popup__type').textContent = window.data.HousingType[ad.offer.type.toUpperCase()];
    popup.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',  выезд до ' + ad.offer.checkout;
    popup.querySelector('.popup__features').innerHTML = window.field.renderFeatures(ad.offer.features);
    popup.querySelector('.popup__description').textContent = ad.offer.description;
    popup.querySelector('.popup__photos').innerHTML = window.field.renderPhotos(ad.offer.photos);
    popup.querySelector('.popup__avatar').src = ad.author.avatar;

    return popup;
  };

  var onEscPress = function (evt) {
    window.handler.onPopupEscPress(evt, 'article', '.map');
    window.removeEventListener('keydown', onEscPress);
  };

  var appendAdText = function (ad) {
    var filtersContainer = document.querySelector('.map__filters-container');
    var fragment = document.createDocumentFragment();

    fragment.appendChild(renderAdText(ad));

    filtersContainer.before(fragment);

    var closePopup = document.querySelector('.popup__close');

    closePopup.addEventListener('click', function () {
      window.handler.removeChild('.map', 'article');
      window.removeEventListener('keydown', onEscPress);
    });

    window.addEventListener('keydown', onEscPress);
  };


  window.pin = {
    appendAd: appendAdPin,
    appendAdText: appendAdText
  };
})();
