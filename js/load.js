'use strict';
(function () {
  var mapFilters = document.querySelectorAll('.map__filter');
  var checkboxes = document.querySelectorAll('.map__checkbox');

  var onError = function () {
    window.message.showError();
  };

  var onSuccess = function (data) {
    window.allPins = data;

    var onFilterChange = window.debounce(function () {
      window.pinManage.reload();
    });

    mapFilters.forEach(function (element) {
      element.addEventListener('change', onFilterChange);
    });

    checkboxes.forEach(function (element) {
      element.addEventListener('click', onFilterChange);
    });
  };

  window.exchange.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
