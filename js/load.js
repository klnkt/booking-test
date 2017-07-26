'use strict';

window.load = function (url, onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  debugger;
  xhr.addEventListener('load', function () {
    switch (xhr.status) {
      case 200:
        onLoad(xhr.response);
        break;
      default:
        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
    };
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  })
};
