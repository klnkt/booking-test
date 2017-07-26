'use strict';

window.load = function (url, onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    switch (xhr.status) {
      case 200:
        onLoad(xhr.response);
        break;
      case 404:
        onError('Ошибка 404 - Запрашиваемые данные отсутствуют на сервере');
        break;
      case 500:
        onError('Ошибка 500 - На сервере что-то сломалось');
        break;
      default:
        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
    }
  });
  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });
  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000; // 10sec

  xhr.open('GET', url);
  xhr.send();
};
