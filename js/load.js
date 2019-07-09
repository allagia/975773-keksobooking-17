'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = mapFilters.querySelector('#housing-type');
  var housingPrice = mapFilters.querySelector('#housing-price');
  var housingRooms = mapFilters.querySelector('#housing-rooms');
  var housingGuests = mapFilters.querySelector('#housing-guests');

  var onError = function () {
    window.message.showErrorMessage();
  };

  var onSuccess = function (data) {
    window.allPins = data;
    console.log(window.allPins);
    window.pin.appendAdPin(data.slice(0, 5));

    housingType.addEventListener('change', function () {
      window.pinManage.reloadPins();
    });

    housingRooms.addEventListener('change', function () {
      window.pinManage.reloadPins();
    });

    housingGuests.addEventListener('change', function () {
      window.pinManage.reloadPins();
    });

    housingPrice.addEventListener('change', function () {
      window.pinManage.reloadPins();
    });
  };


  window.exchange.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
