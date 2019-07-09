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

  var filterPins = function (filter) {
    return filter === 'any'
      ? window.allPins
      : window.allPins.filter(function (pin) {
        return pin.offer.type === filter;
      });
  };

  var reloadPins = function (filter) {
    window.pinManage.removePin();
    window.pin.appendAdPin(filterPins(filter).slice(0, 5));
  };

  window.pinManage = {
    filterPins: filterPins,
    reloadPins: reloadPins,
    removePin: removePin
  };

})();
