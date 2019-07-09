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


  var filterByPrice = function (data, filter) {
    return filter === 'any'
      ? data
      : data.filter(function (pin) {
        if (filter === 'low') {
          var result = pin.offer.price < 10000;
        } else if (filter === 'middle') {
          result = pin.offer.price >= 10000 && pin.offer.price < 50000;
        } else if (filter === 'high') {
          result = pin.offer.price >= 50000;
        }
        return result;
      });
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

  var reloadPins = function () {
    var mapFilters = document.querySelector('.map__filters');
    var housingType = mapFilters.querySelector('#housing-type');
    var housingPrice = mapFilters.querySelector('#housing-price');
    var housingRooms = mapFilters.querySelector('#housing-rooms');
    var housingGuests = mapFilters.querySelector('#housing-guests');

    window.pinManage.removePin();

    var data = window.allPins;
    data = filterByType(data, housingType.options[housingType.selectedIndex].value);
    data = filterByRooms(data, housingRooms.options[housingRooms.selectedIndex].value);
    data = filterByGuests(data, housingGuests.options[housingGuests.selectedIndex].value);
    data = filterByPrice(data, housingPrice.options[housingPrice.selectedIndex].value);

    window.pin.appendAdPin(data);
  };


  window.pinManage = {
    reloadPins: reloadPins,
    removePin: removePin
  };

})();
