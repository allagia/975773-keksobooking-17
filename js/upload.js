'use strict';
(function () {

  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');
  var formReset = document.querySelector('.ad-form__reset');
  var mapFilters = document.querySelector('.map__filters');

  var onSuccessClick = function () {
    window.handler.removeChild('main', '.success');
  };

  var onEscSuccessPress = function (evt) {
    window.handler.onPopupEscPress(evt, '.success');
  };

  var onErrorClick = function () {
    window.handler.removeChild('main', '.error');
  };

  var onEscPress = function (evt) {
    window.handler.onPopupEscPress(evt, '.error');
  };

  var onSuccess = function () {

    adForm.reset();
    mapFilters.reset();
    mainPin.style.left = '570px';
    mainPin.style.top = '375px';
    window.form.setAddress();
    document.querySelector('#price').placeholder = '1000';
    document.querySelector('#price').min = '1000';
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.handler.removeChild('.map', 'article');
    window.pinManage.remove();
    window.pin.appendAd(window.allPins.slice(window.pinManage.limits.FROM_NUMBER, window.pinManage.limits.TO_NUMBER));
    window.message.showSuccess();

    window.addEventListener('click', onSuccessClick);
    window.addEventListener('keydown', onEscSuccessPress);
  };


  var onError = function () {
    window.message.showError();

    var errorButton = document.querySelector('.error__button');

    errorButton.addEventListener('click', function () {
      window.handler.removeChild('main', '.error');
    });

    window.addEventListener('click', onErrorClick);

    window.addEventListener('keydown', onEscPress);
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.exchange.upload(new FormData(adForm), onSuccess, onError);
  });

  formReset.addEventListener('click', function () {
    adForm.reset();
    mapFilters.reset();
    mainPin.style.left = '570px';
    mainPin.style.top = '375px';
    window.form.setAddress();
    document.querySelector('#price').placeholder = '1000';
    document.querySelector('#price').min = '1000';
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.handler.removeChild('.map', 'article');
    window.pinManage.remove();
    window.pin.appendAd(window.allPins.slice(window.pinManage.limits.FROM_NUMBER, window.pinManage.limits.TO_NUMBER));
  });

  window.removeEventListener('click', onErrorClick);
  window.removeEventListener('keydown', onEscPress);
  window.removeEventListener('click', onSuccessClick);
  window.removeEventListener('keydown', onEscSuccessPress);
})();
