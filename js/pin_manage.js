'use strict';

(function () {

  var removePin = function () {
    var mapPins = document.querySelector('.map__pins');
    var pins = mapPins.querySelectorAll('button.map__pin:not(.map__pin--main)');

    var pinsArray = Array.from(pins);

    pinsArray.forEach(function (element) {
      mapPins.removeChild(element);
    });
  };

  var filterPriceCb = {
    low: function (pin) {
      return pin.offer.price < 10000;
    },
    middle: function (pin) {
      return pin.offer.price >= 10000 && pin.offer.price < 50000;
    },
    high: function (pin) {
      return pin.offer.price >= 50000;
    }
  };

  var filterByPrice = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(filterPriceCb[filter]);
  };

  var filterByRooms = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(function (pin) {
        return String(pin.offer.rooms) === filter;
      });
  };

  var filterByGuests = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(function (pin) {
        return String(pin.offer.guests) === filter;
      });
  };

  var filterByType = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(function (pin) {
        return pin.offer.type === filter;
      });
  };

  var isElementExist = function (arr, elem) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return true;
      }
    }
    return false;
  };

  var filterByFeature = function (data, filter) {
    return data.filter(function (pin) {
      return isElementExist(pin.offer.features, filter);
    });
  };

  var reloadPins = function () {
    var mapFilters = document.querySelector('.map__filters');
    var housingType = mapFilters.querySelector('#housing-type');
    var housingPrice = mapFilters.querySelector('#housing-price');
    var housingRooms = mapFilters.querySelector('#housing-rooms');
    var housingGuests = mapFilters.querySelector('#housing-guests');

    var featureInput = mapFilters.querySelectorAll('input[type = "checkbox"]');
    var featureArray = Array.from(featureInput);

    window.pinManage.removePin();
    window.event.removeChild('.map', '.map__card');

    var data = window.allPins;

    data = filterByType(data, housingType.options[housingType.selectedIndex].value);
    data = filterByRooms(data, housingRooms.options[housingRooms.selectedIndex].value);
    data = filterByGuests(data, housingGuests.options[housingGuests.selectedIndex].value);
    data = filterByPrice(data, housingPrice.options[housingPrice.selectedIndex].value);

    featureArray.forEach(function (element) {
      if (element.checked) {
        data = filterByFeature(data, element.value);
      }
    });

    window.pin.appendAdPin(data.slice(0, 5));
  };

  window.pinManage = {
    reloadPins: reloadPins,
    // removeCard: removeCard,
    removePin: removePin
  };
})();
