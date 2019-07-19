'use strict';

(function () {

  var uploadPhoto = function (element, handler) {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    var fileChooser = document.querySelector(element);

    fileChooser.addEventListener('change', function () {
      var file = fileChooser.files[0];
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });

      if (matches) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
          handler(reader);
        });

        reader.readAsDataURL(file);
      }
    });
  };

  window.file = {
    uploadPhoto: uploadPhoto
  };
})();
