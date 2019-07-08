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


  /* нужно ли объединять 3 последующие функции в одну с 3 переменными (пример ниже)? Или как записать проще?

  // var onPopupEscPress = function (evt, parentClass, childClass) {
  //   if (evt.keyCode === ESC_KEYCODE) {
  //     removeChild(parentClass, childClass);
  //   }
  // };*/

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeChild('.map', 'arcitle');
    }
  };

  var onSuccessEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeChild('main', '.success');
    }
  };

  var onErrorEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeChild('main', '.error');
    }
  };


  window.event = {
    removeChild: removeChild,
    onPopupEscPress: onPopupEscPress,
    onSuccessEscPress: onSuccessEscPress,
    onErrorEscPress: onErrorEscPress
  };

})();
