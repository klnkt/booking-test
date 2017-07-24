'use strict';

window.synchronizeFields = (function () {
  return function (element1, element2, arr1, arr2, cb) {
    element1.addEventListener('change', function () {
      var value1 = element1.value;
      var index1 = arr1.indexOf(value1);
      var value2 = arr2[index1];
      cb(element2, value2);
    });
  };
})();
