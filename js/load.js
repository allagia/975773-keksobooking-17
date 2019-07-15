'use strict';
(function () {
  var mapFilter = document.querySelectorAll('.map__filter');
  var checkbox = document.querySelectorAll('.map__checkbox');

  var onError = function () {
    window.message.showError();
  };

  var onSuccess = function (data) {
    window.allPins = data;

    window.pin.appendAd(data.slice(window.pinManage.limits.FROM_NUMBER, window.pinManage.limits.TO_NUMBER));

    var onFilterChange = window.debounce(function () {
      window.pinManage.reload();
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
