'use strict';

(function () {

  var showErrorMessage = function (message) {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var mainBlock = document.querySelector('main');

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  var showSuccessMessage = function (message) {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var mainBlock = document.querySelector('main');

    message = successTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  window.message = {
    showError: showErrorMessage,
    showSuccess: showSuccessMessage
  };

})();
