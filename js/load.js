'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = mapFilters.querySelector('select[name = housing-type]');

  var onError = function (message) {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var mainBlock = document.querySelector('main');

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  var onSuccess = function (data) {
    var pinsData = data;
    window.appendAd(data.slice(0, 5));

    var housePins = pinsData.filter(function (pin) {
      return pin.offer.type === 'house';
    });

    var flatPins = pinsData.filter(function (pin) {
      return pin.offer.type === 'flat';
    });

    var bungaloPins = pinsData.filter(function (pin) {
      return pin.offer.type === 'bungalo';
    });

    var palacePins = pinsData.filter(function (pin) {
      return pin.offer.type === 'palace';
    });


    var removePin = function () {
      var mapPins = document.querySelector('.map__pins');
      var pins = mapPins.querySelectorAll('.map__pin');
      var pinsArray = Array.from(pins);

      pinsArray.forEach(function (element) {
        if (!element.classList.contains('map__pin--main')) {
          mapPins.removeChild(element);
        }
      });
    };

    housingType.addEventListener('change', function () {
      if (housingType.options[housingType.selectedIndex].value === 'house') {
        removePin();
        window.appendAd(housePins.slice(0, 5));
      } else if (housingType.options[housingType.selectedIndex].value === 'flat') {
        removePin();
        window.appendAd(flatPins.slice(0, 5));
      } else if (housingType.options[housingType.selectedIndex].value === 'bungalo') {
        removePin();
        window.appendAd(bungaloPins.slice(0, 5));
      } else if (housingType.options[housingType.selectedIndex].value === 'palace') {
        removePin();
        window.appendAd(palacePins.slice(0, 5));
      } else if (housingType.options[housingType.selectedIndex].value === 'any') {
        removePin();
        window.appendAd(data.slice(0, 5));
      }
    });
  };

  window.data.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
