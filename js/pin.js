'use strict';

window.pin = (function () {
  var ENTER_KEY_CODE = 13;
  var PIN_HEIGHT = 150;
  var PIN_WIDTH = 56;
  var AVATAR_SIZE = 40;

  var Pin = function (data) {
    window.BaseComponent.call(this, data, 'div');
    this.addPinToMap = this.addPinToMap.bind(this);
  };

  window.utils.inherit(Pin, window.BaseComponent);

  Pin.prototype.createElement = function () {
    var element = window.BaseComponent.prototype.createElement.call(this);
    var avatarElement = document.createElement('img');
    element.classList.add('pin');
    avatarElement.src = this.data.author.avatar;
    avatarElement.tabIndex = 0;
    avatarElement.width = AVATAR_SIZE;
    avatarElement.height = AVATAR_SIZE;
    avatarElement.classList.add('rounded');
    element.appendChild(avatarElement);
    element.style.left = this.data.location.x - PIN_WIDTH / 2 + 'px';
    element.style.top = this.data.location.y - PIN_HEIGHT / 2 + 'px';
    return element;
  };

  Pin.prototype.add = function (parentElement) {
    this.element.addEventListener('click', this.addPinToMap);
    this.element.addEventListener('keydown', this.addPinToMap);
    window.BaseComponent.prototype.add.call(this, parentElement);
  };

  Pin.prototype.remove = function () {
    this.element.removeEventListener('click', this.addPinToMap);
    this.element.removeEventListener('keydown', this.addPinToMap);
    window.BaseComponent.prototype.remove.call(this);
  };

  Pin.prototype.addPinToMap = function (evt) {
    if (evt.type === 'keydown') {
      if (evt.keyCode === ENTER_KEY_CODE) {
        this.activatePin();
        window.showCard(this.data);
      }
    } else {
      this.activatePin();
      window.showCard(this.data);
    }
  };

  Pin.prototype.activatePin = function () {
    this.element.classList.add('pin--active');
  };

  Pin.prototype.deactivatePin = function () {
    this.element.classList.remove('pin--active');
  };

  // var map = document.querySelector('.tokyo__pin-map');
  // var fragment = document.createDocumentFragment();
  // var addElementToFragment = function (frg, element) {
  //   frg.appendChild(element);
  // };

  // var addPinsToMap = function (offersData) {
  //   for (var i = 0; i < offersData.length; i++) {
  //     var pinElement = renderPin(offersData[i]);
  //     if (i === 0) {
  //       activatePin(pinElement);
  //     }
  //     addElementToFragment(fragment, pinElement);
  //   }
  //   map.appendChild(fragment);
  // };
  //
  // var clearMap = function (offersData) {
  //   var pins = map.querySelectorAll('.pin:not(.pin__main)');
  //   for (var i = 0; i < pins.length; i++) {
  //     map.removeChild(pins[i]);
  //   }
  // };
})();
