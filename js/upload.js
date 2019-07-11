'use strict';
(function () {

  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');
  var formReset = document.querySelector('.ad-form__reset');

  var onSuccess = function () {

    adForm.reset();
    mainPin.style.left = '570px';
    mainPin.style.top = '375px';
    window.form.setAddress();
    document.querySelector('#price').placeholder = '1000';
    document.querySelector('#price').min = '1000';
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.event.removeChild('.map', 'article');
    window.pinManage.removePin();
    window.pin.appendAdPin(window.allPins.slice(0, 5));
    window.message.showSuccessMessage();

    window.addEventListener('click', function () {
      window.event.removeChild('main', '.success');
    });
    window.addEventListener('keydown', function (evt) {
      window.event.onPopupEscPress(evt, '.success');
    });
  };

  var onError = function () {
    window.message.showErrorMessage();

    var errorButton = document.querySelector('.error__button');

    errorButton.addEventListener('click', function () {
      window.event.removeChild('main', '.error');
    });

    window.addEventListener('click', function () {
      window.event.removeChild('main', '.error');
    });
    window.addEventListener('keydown', function (evt) {
      window.event.onPopupEscPress(evt, '.error');
    });
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.exchange.upload(new FormData(adForm), onSuccess, onError);
  });

  formReset.addEventListener('click', function () {
    adForm.reset();
    mainPin.style.left = '570px';
    mainPin.style.top = '375px';
    window.form.setAddress();
    document.querySelector('#price').placeholder = '1000';
    document.querySelector('#price').min = '1000';
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.event.removeChild('.map', 'article');
    window.pinManage.removePin();
    window.pin.appendAdPin(window.allPins.slice(0, 5));
  });
})();
