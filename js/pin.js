'use strict';

(function () {
  var NUMBER_OF_ADS = 8;

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

  appendAd(window.data.getAdsArray(NUMBER_OF_ADS));
})();
