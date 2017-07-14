'use strict';

window.synchronizeFields = (function () {
  return function (element1, element2, arr1, arr2, cb) {
    console.log('1');
    element1.addEventListener('change', function () {
      cb(element1, element2, arr1, arr2);
      console.log('1');
    });
  };
})();
