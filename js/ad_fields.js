'use strict';

(function () {
  var renderFeatures = function (array) {
    var htmlString = '';
    array.forEach(function (arrayElement) {
      htmlString += '<li class="popup__feature popup__feature--' + arrayElement + '"></li>';
    });
    return htmlString;
  };

  var renderPhotos = function (array) {
    var htmlString = '';
    array.forEach(function (arrayElement) {
      htmlString += '<img src="' + arrayElement + '" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>';
    });
    return htmlString;
  };

  window.field = {
    renderFeatures: renderFeatures,
    renderPhotos: renderPhotos
  };
})();
