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
    document.querySelector('#price').placeholder = '1000';
    document.querySelector('#price').min = '1000';
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.event.removeChild('.map', 'article');
    window.data.removePin();
    window.pin.appendAdPin(window.allPins.slice(0, 5));
    window.data.showSuccessMessage();

    window.addEventListener('click', function () {
      window.event.removeChild('main', '.success');
    });
    window.addEventListener('keydown', window.event.onSuccessEscPress);

  };

  var onError = function () {
    window.data.showErrorMessage();

    var errorButton = document.querySelector('.error__button');
    errorButton.addEventListener('click', function () {
      window.event.removeChild('main', '.error');
    });

    window.addEventListener('click', function () {
      window.event.removeChild('main', '.error');
    });
    window.addEventListener('keydown', window.event.onErrorEscPress);
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.data.upload(new FormData(adForm), onSuccess, onError);
  });
})();
