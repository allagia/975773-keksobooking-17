"use strict";
(function() {
  var mapFilters = document.querySelector(".map__filters");
  var housingType = mapFilters.querySelector("select[name = housing-type]");

  var allPins = [];

  var onError = function(message) {
    var errorTemplate = document
      .querySelector("#error")
      .content.querySelector(".error");
    var mainBlock = document.querySelector("main");

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  var onSuccess = function(data) {
    allPins = data;
    window.appendAd(data.slice(0, 5));

    var removePin = function() {
      var mapPins = document.querySelector(".map__pins");
      var pins = mapPins.querySelectorAll(".map__pin");
      var pinsArray = Array.from(pins);

      pinsArray.forEach(function(element) {
        if (!element.classList.contains("map__pin--main")) {
          mapPins.removeChild(element);
        }
      });
    };

    var filterPins = function(filter) {
      return filter === "any"
        ? allPins
        : allPins.filter(function(pin) {
            return pin.offer.type === filter;
          });
    };

    var reloadPins = function(filter) {
      removePin();
      window.appendAd(filterPins(filter).slice(0, 5));
    };

    housingType.addEventListener("change", function() {
      reloadPins(housingType.options[housingType.selectedIndex].value);
    });
  };

  window.data.load(
    "https://js.dump.academy/keksobooking/data",
    onSuccess,
    onError
  );
})();
