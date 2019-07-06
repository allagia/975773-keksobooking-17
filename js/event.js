'use strict';
(function () {
  var ESC_KEYCODE = 27;

  var removeCard = function () {
    var parent = document.querySelector('.map');
    var child = parent.querySelector('article');
    if (child) {
      parent.removeChild(child);
    }
  };


  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeCard();
    }
  };

  window.event = {
    removeCard: removeCard,
    onPopupEscPress: onPopupEscPress
  };

})();
