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

    mapFilter.forEach(function (element) {
      element.addEventListener('change', window.debounce(function () {
        window.pinManage.reloadPins();
      }));
    });

    checkbox.forEach(function (element) {
      element.addEventListener('click', window.debounce(function () {
        window.pinManage.reloadPins();
      }));
    });
  };

  window.exchange.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
