'use strict';

(function () {
  var INITIAL_IMAGE_ADDRESS = 'img/muffin-grey.svg';

  var preview = document.querySelector('.ad-form-header__preview img');

  var onAvatarUpload = function (reader) {
    preview.src = reader.result;
  };

  window.file.uploadPhoto('.ad-form-header__input', onAvatarUpload);

  var removeAvatar = function () {
    preview.src = INITIAL_IMAGE_ADDRESS;
  };

  window.avatar = {
    remove: removeAvatar
  };
})();
