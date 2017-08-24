'use strict';

window.readFileInput = (function () {
  return function (element, file, cb) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      cb(element, reader.result);
    });

    reader.readAsDataURL(file);
  };
})();
