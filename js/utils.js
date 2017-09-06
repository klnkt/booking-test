'use strict';

window.utils = (function () {
  var DEBOUNCE_INTERVAL = 300;
  var debounce = function (func) {
    var lastTimeout;
    return function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(func, DEBOUNCE_INTERVAL);
    };
  };

  var readFileInput = function (element, file, cb) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      cb(element, reader.result);
    });

    reader.readAsDataURL(file);
  };

  var synchronizeFields = function (element1, element2, arr1, arr2, cb) {
    element1.addEventListener('change', function () {
      var value1 = element1.value;
      var index1 = arr1.indexOf(value1);
      var value2 = arr2[index1];
      cb(element2, value2);
    });
  };

  var inherit = function (ChildClass, parentClass) {
    var TempConstructor = function () {};
    TempConstructor.prototype = parentClass.prototype;
    ChildClass.prototype = new TempConstructor();
  };

  return {
    debounce: debounce,
    readFileInput: readFileInput,
    synchronizeFields: synchronizeFields,
    inherit: inherit
  };
})();
