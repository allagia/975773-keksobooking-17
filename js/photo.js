'use strict';

(function () {

  var preview = document.querySelector('.ad-form__photo');
  var container = document.querySelector('.ad-form__photo-container');

  var onPhotoUpload = function (reader) {
    var image = document.createElement('img');
    image.style.maxWidth = '100%';
    preview.style.overflow = 'hidden';
    preview.appendChild(image);
    image.src = reader.result;
    var newDiv = document.createElement('div');
    newDiv.className = 'ad-form__photo';
    container.appendChild(newDiv);
    preview = newDiv;
  };

  window.file.uploadPhoto('.ad-form__input', onPhotoUpload);

  var removePhoto = function () {
    var divs = document.querySelectorAll('.ad-form__photo');
    var div = document.querySelector('.ad-form__photo');
    var image = document.querySelector('.ad-form__photo img');

    divs.forEach(function (element) {
      container.removeChild(element);
    });

    preview = container.appendChild(div);
    if (image) {
      div.removeChild(image);
    }
  };

  window.photo = {
    remove: removePhoto
  };
})();
