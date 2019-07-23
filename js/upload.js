'use strict';
(function () {
  var INITIAL_LEFT_COORDINATE = '570px';
  var INITIAL_TOP_COORDINATE = '375px';
  var INITIAL_PRICE = 1000;
  var adForm = document.querySelector('.ad-form');
  var pageMap = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');
  var formReset = document.querySelector('.ad-form__reset');
  var mapFilters = document.querySelector('.map__filters');
  var submitButton = document.querySelector('.ad-form__submit');
  var priceInput = document.querySelector('#price');

  var onSuccessClick = function () {
    window.handler.removeChild('main', '.success');
    window.removeEventListener('click', onSuccessClick);
    window.removeEventListener('keydown', onEscSuccessPress);
  };

  var onEscSuccessPress = function (evt) {
    window.handler.onPopupEscPress(evt, '.success');
    window.removeEventListener('click', onSuccessClick);
    window.removeEventListener('keydown', onEscSuccessPress);
  };

  var onErrorClick = function () {
    window.handler.removeChild('main', '.error');
    window.removeEventListener('click', onErrorClick);
    window.removeEventListener('keydown', onEscPress);
  };

  var onEscPress = function (evt) {
    window.handler.onPopupEscPress(evt, '.error');
    window.removeEventListener('click', onErrorClick);
    window.removeEventListener('keydown', onEscPress);
  };

  var resetForm = function () {
    adForm.reset();
    mapFilters.reset();
    mainPin.style.left = INITIAL_LEFT_COORDINATE;
    mainPin.style.top = INITIAL_TOP_COORDINATE;
    window.form.setAddress();
    priceInput.placeholder = INITIAL_PRICE;
    priceInput.min = INITIAL_PRICE;
    pageMap.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.data.addDisabledAttribute();
    window.handler.removeChild('.map', 'article');
    window.pinManage.remove();
    window.photo.remove();
    window.avatar.remove();
  };

  var onFormReset = function () {
    resetForm();
  };

  var onSuccess = function () {

    resetForm();
    window.message.showSuccess();
    submitButton.removeAttribute('disabled');

    window.addEventListener('click', onSuccessClick);
    window.addEventListener('keydown', onEscSuccessPress);
  };

  var onError = function () {
    window.message.showError();
    submitButton.removeAttribute('disabled');

    var errorButton = document.querySelector('.error__button');

    errorButton.addEventListener('click', function () {
      window.handler.removeChild('main', '.error');
    });

    window.addEventListener('click', onErrorClick);
    window.addEventListener('keydown', onEscPress);
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    submitButton.setAttribute('disabled', '');
    window.exchange.upload(new FormData(adForm), onSuccess, onError);
  });

  formReset.addEventListener('click', onFormReset);
})();
