'use strict';
(function () {
  var mapFilter = document.querySelectorAll('.map__filter');
  var checkbox = document.querySelectorAll('.map__checkbox');

  var onError = function () {
    window.message.showErrorMessage();
  };

  var onSuccess = function (data) {
    window.allPins = data;

    window.pin.appendAdPin(data.slice(0, 5));

    var onFilterChange = window.debounce(function () {
      window.pinManage.reloadPins();
    });

    mapFilter.forEach(function (element) {
      element.addEventListener('change', onFilterChange);
    });

    checkbox.forEach(function (element) {
      element.addEventListener('click', onFilterChange);
    });
  };

  window.exchange.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
