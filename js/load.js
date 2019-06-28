'use strict';
(function () {
  var onError = function (message) {
    console.error(message);
  };

  var onSuccess = function (data) {
    console.log(data);
    window.dataFromServer = data; /* здесь хочу записать полученные данные в глобальную переменную, чтобы затем использовать её в ф-ции appendAd (pin.js)*/
  };

  window.data.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
})();
