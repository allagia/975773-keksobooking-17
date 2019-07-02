'use strict';

(function () {
  var renderAd = function (ad) {
    var similarAddTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var adElement = similarAddTemplate.cloneNode(true);

    adElement.style.left = ad.location.x + 'px';
    adElement.style.top = ad.location.y + 'px';
    adElement.querySelector('img').src = ad.author.avatar;
    adElement.querySelector('img').alt = ad.offer.title;

    return adElement;
  };

  window.appendAd = function (ads) {
    var similarListElement = document.querySelector('.map__pins');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderAd(ads[i]));
    }

    similarListElement.appendChild(fragment);
  };

  // window.removeAd = function (ads) {
  //   var similarListElement = document.querySelector('.map__pins');
  //   window.appendAd();
  //   similarListElement.removeChild(renderAd(ads));
  // };
})();
