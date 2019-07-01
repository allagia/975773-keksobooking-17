'use strict';
(function () {
  var onError = function (message) {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var mainBlock = document.querySelector('main');

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  window.data.load('https://js.dump.academy/keksobooking/data', window.appendAd, onError);
})();
