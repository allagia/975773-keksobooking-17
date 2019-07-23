'use strict';

(function () {
  var MAIN_PIN_WIDTH = 65;
  var Y_MAX_VALUE = 630;
  var Y_MIN_VALUE = 130;
  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var adFormFields = adForm.querySelectorAll('.ad-form__element');
  var pinsArea = document.querySelector('.map__pins');
  var mapFilters = document.querySelectorAll('.map__filter');
  var mapFeatures = document.querySelector('.map__features');

  var deleteDisabledAttribute = function () {
    adForm.querySelector('.ad-form-header').removeAttribute('disabled');

    adFormFields.forEach(function (element) {
      element.removeAttribute('disabled');
    });

    mapFilters.forEach(function (element) {
      element.removeAttribute('disabled');
    });

    mapFeatures.removeAttribute('disabled');
  };

  var parentPosition = pinsArea.getBoundingClientRect();
  var parentMaxWidth = Math.round(parentPosition.width);

  var parentMinWidth = 0;

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var topCoordinate = mainPin.offsetTop - shift.y;
      var leftCoordinate = mainPin.offsetLeft - shift.x;

      if (topCoordinate >= Y_MIN_VALUE && topCoordinate <= Y_MAX_VALUE) {
        mainPin.style.top = topCoordinate + 'px';
      } else if (topCoordinate < Y_MIN_VALUE) {
        mainPin.style.top = Y_MIN_VALUE + 'px';
      } else if (topCoordinate > Y_MAX_VALUE) {
        mainPin.style.top = Y_MAX_VALUE + 'px';
      }

      if ((leftCoordinate >= parentMinWidth) && (leftCoordinate <= parentMaxWidth - MAIN_PIN_WIDTH)) {
        mainPin.style.left = leftCoordinate + 'px';
      } else if (leftCoordinate < parentMinWidth) {
        mainPin.style.left = parentMinWidth + 'px';
      } else if (leftCoordinate > parentMaxWidth - MAIN_PIN_WIDTH) {
        mainPin.style.left = parentMaxWidth - MAIN_PIN_WIDTH + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      pageMap.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
      deleteDisabledAttribute();
      window.pin.appendAd(window.allPins.slice(window.pinManage.limits.FROM_NUMBER, window.pinManage.limits.TO_NUMBER));
      window.pinManage.reload();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();
