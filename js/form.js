'use strict';
(function () {
  var lodgingPrice = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  var lodgingSelect = document.querySelector('select[name = type]');
  var priceInput = document.querySelector('input[name = price]');
  var timein = document.querySelector('select[name = timein]');
  var timeout = document.querySelector('select[name = timeout]');


  lodgingSelect.addEventListener('change', function () {
    var selectedIndex = lodgingSelect.selectedIndex;

    var value = lodgingSelect.options[selectedIndex].value;

    priceInput.placeholder = lodgingPrice[value];
  });

  timein.addEventListener('change', function () {
    var value = timein.options[timein.selectedIndex].value;

    timeout.value = value;
  });

  timeout.addEventListener('change', function () {
    var value = timeout.options[timeout.selectedIndex].value;

    timein.value = value;
  });
})();
