'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';

  var getXHR = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;
    return xhr;
  };

  var load = function (url, onSuccess, onError) {
    var xhr = getXHR(onSuccess, onError);
    xhr.open('GET', url);
    xhr.send();
  };

  var upload = function (data, onSuccess, onError) {
    var xhr = getXHR(onSuccess, onError);
    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.exchange = {
    load: load,
    upload: upload
  };

})();
