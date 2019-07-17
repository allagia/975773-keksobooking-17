'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.ad-form__input');
  var preview = document.querySelector('.ad-form__photo');
  var container = document.querySelector('.ad-form__photo-container');


  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        var image = document.createElement('img');
        image.style.maxWidth = '100%';
        preview.style.overflow = 'hidden';
        preview.appendChild(image);
        image.src = reader.result;
        var newDiv = document.createElement('div');
        newDiv.className = 'ad-form__photo';
        container.appendChild(newDiv);
        preview = newDiv;
      });

      reader.readAsDataURL(file);
    }
  });

  var removePhoto = function () {
    var divs = document.querySelectorAll('.ad-form__photo');
    var div = document.querySelector('.ad-form__photo');
    var image = document.querySelector('.ad-form__photo img');

    divs.forEach(function (element) {
      container.removeChild(element);
    });

    preview = container.appendChild(div);
    div.removeChild(image);
  };

  window.photo = {
    remove: removePhoto
  };
})();
