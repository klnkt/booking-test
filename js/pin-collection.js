'use strict';

window.pinCollection = (function () {
  var array;

  var set = function (data) {
    array = [];
    for (var i = 0; i < data.length; i++) {
      var pin = new window.Pin(data[i]);
      array.push(pin);
    }
  };

  var get = function () {
    return array;
  };

  var show = function (map) {
    for (var i = 0; i < array.length; i++) {
      array[i].add(map);
    }
  };

  var clear = function () {
    for (var i = 0; i < array.length; i++) {
      array[i].remove();
    }
  };

  var deactivate = function () {
    for (var i = 0; i < array.length; i++) {
      array[i].deactivate();
    }
  };

  var activateFirst = function () {
    array[0].activate();
  };

  return {
    set: set,
    get: get,
    show: show,
    clear: clear,
    deactivate: deactivate,
    activateFirst: activateFirst
  };
})();
