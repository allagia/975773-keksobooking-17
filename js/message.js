'use strict';

(function () {
  var mainBlock = document.querySelector('main');

  var showErrorMessage = function (message) {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');

    message = errorTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  var showSuccessMessage = function (message) {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');

    message = successTemplate.cloneNode(true);

    mainBlock.appendChild(message);
  };

  window.message = {
    showError: showErrorMessage,
    showSuccess: showSuccessMessage
  };

})();
