'use strict';

(function () {

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var inputAddress = adForm.querySelector('input[name = address]');

  var setAddress = function () {
    var coordinateX = mainPin.style.left;
    coordinateX = coordinateX.substring(0, coordinateX.length - 2);
    var coordinateY = mainPin.style.top;
    coordinateY = coordinateY.substring(0, coordinateY.length - 2);

    inputAddress.value = coordinateX + ', ' + coordinateY;
  };

  setAddress();

  document.addEventListener('mouseup', function () {
    setAddress();
  });

  var HousingPrice = {
    BUNGALO: 0,
    FLAT: 1000,
    HOUSE: 5000,
    PALACE: 10000
  };

  var housingTypeSelect = document.querySelector('select[name = type]');
  var priceInput = document.querySelector('input[name = price]');
  var timeIn = document.querySelector('select[name = timein]');
  var timeOut = document.querySelector('select[name = timeout]');


  housingTypeSelect.addEventListener('change', function () {
    var selectedIndex = housingTypeSelect.selectedIndex;

    var value = housingTypeSelect.options[selectedIndex].value.toUpperCase();

    priceInput.placeholder = HousingPrice[value];
    priceInput.min = HousingPrice[value];
  });

  timeIn.addEventListener('change', function () {
    var value = timeIn.options[timeIn.selectedIndex].value;

    timeOut.value = value;
  });

  timeOut.addEventListener('change', function () {
    var value = timeOut.options[timeOut.selectedIndex].value;

    timeIn.value = value;
  });

  var roomNumber = document.querySelector('#room_number');
  var roomCapacity = document.querySelector('#capacity');

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

  window.form = {
    setAddress: setAddress
  };
})();
