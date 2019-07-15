'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adFormFields = adForm.querySelectorAll('.ad-form__element');
  var mapFilters = document.querySelectorAll('.map__filter');
  var mapFeatures = document.querySelector('.map__features');

  window.allPins = [];

  var HousingType = {
    FLAT: 'Квартира',
    BUNGALO: 'Бунгало',
    HOUSE: 'Дом',
    PALACE: 'Дворец'
  };

  var addDisabledAttribute = function () {
    adForm.querySelector('.ad-form-header').setAttribute('disabled', '');

    adFormFields.forEach(function (element) {
      element.setAttribute('disabled', '');
    });

    mapFilters.forEach(function (element) {
      element.setAttribute('disabled', '');
    });

    mapFeatures.setAttribute('disabled', '');
  };
  addDisabledAttribute();

  window.data = {
    addDisabledAttribute: addDisabledAttribute,
    HousingType: HousingType
  };
})();
