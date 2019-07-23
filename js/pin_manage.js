'use strict';

(function () {

  var PRICE_LOW = 10000;
  var PRICE_HIGH = 50000;

  var Limits = {
    FROM_NUMBER: 0,
    TO_NUMBER: 5
  };

  var removePin = function () {
    var mapPins = document.querySelector('.map__pins');
    var pins = mapPins.querySelectorAll('button.map__pin:not(.map__pin--main)');

    var pinsArray = Array.from(pins);

    pinsArray.forEach(function (element) {
      mapPins.removeChild(element);
    });
  };

  var filterPriceMap = {
    low: function (pin) {
      return pin.offer.price < PRICE_LOW;
    },
    middle: function (pin) {
      return pin.offer.price >= PRICE_LOW && pin.offer.price < PRICE_HIGH;
    },
    high: function (pin) {
      return pin.offer.price >= PRICE_HIGH;
    }
  };

  var getFilterByPrice = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(filterPriceMap[filter]);
  };

  var isElementExist = function (arr, elem) {
    return arr.some(function (element) {
      if (element === elem) {
        return true;
      }
      return false;
    });
  };

  var getFilterByType = function (data, filter, type) {
    return filter === 'any'
      ? data
      : data.filter(function (pin) {
        return String(pin.offer[type]) === filter;
      });
  };

  var getFilterByFeature = function (data, filter) {
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

    var featureInputs = mapFilters.querySelectorAll('input[type = "checkbox"]');
    var features = Array.from(featureInputs);

    window.pinManage.remove();
    window.handler.removeChild('.map', 'article');

    var data = window.allPins;

    data = getFilterByType(data, housingType.options[housingType.selectedIndex].value, 'type');
    data = getFilterByType(data, housingRooms.options[housingRooms.selectedIndex].value, 'rooms');
    data = getFilterByType(data, housingGuests.options[housingGuests.selectedIndex].value, 'guests');
    data = getFilterByPrice(data, housingPrice.options[housingPrice.selectedIndex].value);

    features.forEach(function (element) {
      if (element.checked) {
        data = getFilterByFeature(data, element.value);
      }
    });

    window.pin.appendAd(data.slice(window.pinManage.limits.FROM_NUMBER, window.pinManage.limits.TO_NUMBER));
  };

  window.pinManage = {
    limits: Limits,
    reload: reloadPins,
    remove: removePin
  };
})();
