'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = mapFilters.querySelector('select[name = housing-type]');

  var onError = function () {
    window.data.showErrorMessage();
  };

  var onSuccess = function (data) {
    window.allPins = data;

    window.pin.appendAdPin(data.slice(0, 5));

    housingType.addEventListener('change', function () {
      window.data.reloadPins(housingType.options[housingType.selectedIndex].value);
    });
  };

  window.data.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
