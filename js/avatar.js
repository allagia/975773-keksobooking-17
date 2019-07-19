'use strict';

(function () {

  var preview = document.querySelector('.ad-form-header__preview img');

  var onAvatarUpload = function (reader) {
    preview.src = reader.result;
  };

  window.file.uploadPhoto('.ad-form-header__input', onAvatarUpload);

  var removeAvatar = function () {
    preview.src = 'img/muffin-grey.svg';
  };

  window.avatar = {
    remove: removeAvatar
  };
})();
