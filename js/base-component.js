'use strict';

window.BaseComponent = (function () {
  var BaseComponent = function (data) {
    this.data = data;
    this.element = this.createElement();
  };

  BaseComponent.prototype = {
    createElement: function () {
      return document.createElement('div');
    },
    add: function (parentElement) {
      parentElement.appendChild(this.element);
    },
    remove: function () {
      this.element.parentNode.removeChild(this.element);
    }
  };
  return BaseComponent;
})();
