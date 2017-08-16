'use strict';

window.debounce = (function () {
  var DEBOUNCE_INTERVAL = 300;

  return function (func) {
    var lastTimeout;
    return function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(func, DEBOUNCE_INTERVAL);
    };
  };
})();
