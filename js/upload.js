'use strict';
(function () {

  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');

  var onSuccess = function () {
    adForm.reset();
    mainPin.style.left = '570px';
    mainPin.style.top = '375px';
    window.form.setAddress();
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.event.removeCard();
    window.data.removePin();
    window.pin.appendAdPin(window.allPins.slice(0, 5));
    window.data.showOnSuccessMessage();
  };

  var onError = function () {
    window.data.showErrorMessage();
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.data.upload(new FormData(adForm), onSuccess, onError);
  });
})();
