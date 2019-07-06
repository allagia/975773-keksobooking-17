'use strict';

(function () {
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGHT = 65;
  var MAIN_PIN_AFTER_HEIGHT = 22;

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var inputAddress = adForm.querySelector('input[name = address]');

  var setAddress = function (isActive) {
    var coordinateX = mainPin.style.left;
    coordinateX = coordinateX.substring(0, coordinateX.length - 2);
    var coordinateY = mainPin.style.top;
    coordinateY = coordinateY.substring(0, coordinateY.length - 2);

    var x = Number(coordinateX) + Number(MAIN_PIN_WIDTH / 2);

    if (isActive) {
      var y = Number(coordinateY) + MAIN_PIN_HEIGHT + MAIN_PIN_AFTER_HEIGHT;
    } else {
      y = Number(coordinateY) + Number(MAIN_PIN_HEIGHT / 2);
    }

    inputAddress.value = x + ', ' + y;
  };

  setAddress();

  mainPin.addEventListener('mouseup', function () {
    setAddress(true);
  });

  var housingPrice = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  var housingTypeSelect = document.querySelector('select[name = type]');
  var priceInput = document.querySelector('input[name = price]');
  var timein = document.querySelector('select[name = timein]');
  var timeout = document.querySelector('select[name = timeout]');


  housingTypeSelect.addEventListener('change', function () {
    var selectedIndex = housingTypeSelect.selectedIndex;

    var value = housingTypeSelect.options[selectedIndex].value;

    priceInput.placeholder = housingPrice[value];
    priceInput.min = housingPrice[value];
  });

  timein.addEventListener('change', function () {
    var value = timein.options[timein.selectedIndex].value;

    timeout.value = value;
  });

  timeout.addEventListener('change', function () {
    var value = timeout.options[timeout.selectedIndex].value;

    timein.value = value;
  });

  var roomNumber = document.querySelector('select[id = "room_number"]');
  var roomCapacity = document.querySelector('select[id = "capacity"]');

  var onRoomCapacityChange = function () {
    var currentNumberValue = roomNumber.options[roomNumber.selectedIndex].value;
    var currentCapacityValue = roomCapacity.options[roomCapacity.selectedIndex].value;
    if ((currentNumberValue === '100' && currentCapacityValue !== '0') ||
        (currentNumberValue !== '100' && currentCapacityValue === '0')) {
      roomCapacity.setCustomValidity('Неподходящее число гостей');
    } else if (currentCapacityValue > currentNumberValue) {
      roomCapacity.setCustomValidity('Неподходящее число гостей');
    } else {
      roomCapacity.setCustomValidity('');
    }
  };

  roomCapacity.addEventListener('change', onRoomCapacityChange);
  roomNumber.addEventListener('change', onRoomCapacityChange);
})();
