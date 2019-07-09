'use strict';
(function () {
  var ESC_KEYCODE = 27;

  var removeChild = function (parentClass, childClass) {
    var parent = document.querySelector(parentClass);
    var child = parent.querySelector(childClass);
    if (child) {
      parent.removeChild(child);
    }
  };

  var onPopupEscPress = function (evt, childClass, parentClass) {
    var defaultParentClass = 'main';
    if (evt.keyCode === ESC_KEYCODE) {
      removeChild(parentClass || defaultParentClass, childClass);
    }
  };

  window.event = {
    onPopupEscPress: onPopupEscPress,
    removeChild: removeChild
  };

})();
