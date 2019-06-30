'use strict';
(function () {
  var onError = function (message) {
    console.error(message);
  };

  window.data.load('https://js.dump.academy/keksobooking1/data', window.appendAd, onError);
})();
