'use strict';

window.pinCollection = (function () {
  var items = [];

  var PinCollection = function () {
    this.items = items;
    this.deactivateAll = this.deactivateAll.bind(this);
  };
  PinCollection.prototype = {
    set: function (data) {
      this.items = [];
      for (var i = 0; i < data.length; i++) {
        var pin = new window.Pin(data[i], this.deactivateAll);
        this.items.push(pin);
      }
    },
    get: function () {
      return this.items;
    },
    show: function (map) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].add(map);
      }
    },
    clear: function () {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].remove();
      }
    },
    activateFirst: function () {
      this.items[0].activate();
    },
    deactivateAll: function () {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].deactivate();
      }
    }
  };
  var pinCollection = new PinCollection();
  return pinCollection;
})();
