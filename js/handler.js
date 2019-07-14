'use strict';
(function () {
  var ESC_KEY_CODE = 27;

  var removeChild = function (parentClass, childClass) {
    var parent = document.querySelector(parentClass);
    var child = parent.querySelector(childClass);
    if (child) {
      parent.removeChild(child);
    }
  };

  var onPopupEscPress = function (evt, childClass, parentClass) {
    var defaultParentClass = 'main';
    if (evt.keyCode === ESC_KEY_CODE) {
      removeChild(parentClass || defaultParentClass, childClass);
    }
  };

  window.handler = {
    onPopupEscPress: onPopupEscPress,
    removeChild: removeChild
  };

})();
