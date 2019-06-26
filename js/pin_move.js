'use strict';

(function () {
  var MAIN_PIN_WIDTH = 65;
  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var adFormElements = adForm.querySelectorAll('.ad-form__element');
  var pinsArea = document.querySelector('.map__pins');

  var deleteDisabledttribute = function () {
    adForm.querySelector('.ad-form-header').removeAttribute('disabled', '');

    adFormElements.forEach(function (element) {
      element.removeAttribute('disabled', '');
    });
  };

  var parentPosition = pinsArea.getBoundingClientRect();
  var parentMaxWidth = Math.round(parentPosition.width);
  var parentMinWidth = 0;

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var topCoord = mainPin.offsetTop - shift.y;
      var leftCoord = mainPin.offsetLeft - shift.x;

      if (topCoord >= 130 && topCoord <= 630) {
        mainPin.style.top = topCoord + 'px';
      } else if (topCoord < 130) {
        mainPin.style.top = 130 + 'px';
      } else if (topCoord > 630) {
        mainPin.style.top = 630 + 'px';
      }

      if ((leftCoord >= parentMinWidth) && (leftCoord <= parentMaxWidth - MAIN_PIN_WIDTH)) {
        mainPin.style.left = leftCoord + 'px';
      } else if (leftCoord < parentMinWidth) {
        mainPin.style.left = parentMinWidth + 'px';
      } else if (leftCoord > parentMaxWidth - MAIN_PIN_WIDTH) {
        mainPin.style.left = parentMaxWidth - MAIN_PIN_WIDTH + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      pageMap.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
      deleteDisabledttribute();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();
