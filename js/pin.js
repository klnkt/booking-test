'use strict';

window.pin = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  var ENTER_KEY_CODE = 13;
  var PIN_HEIGHT = 150;
  var PIN_WIDTH = 56;
  var AVATAR_SIZE = 40;

  var activatePin = function (pin) {
    var currentActivePin = map.querySelector('.pin--active');
    if (currentActivePin !== null) {
      currentActivePin.classList.remove('pin--active');
    }
    pin.classList.add('pin--active');
  };

  var deactivatePin = function () {
    var currentActivePin = map.querySelector('.pin--active');
    if (currentActivePin !== null) {
      currentActivePin.classList.remove('pin--active');
    }
  };

  var renderPin = function (pinData) {
    var coordinateX = pinData.location.x - PIN_WIDTH / 2;
    var coordinateY = pinData.location.y - PIN_HEIGHT / 2;
    var autorAvatarUrl = pinData.author.avatar;
    var pinElement = document.createElement('div');
    pinElement.classList.add('pin');
    var avatarElement = document.createElement('img');

    avatarElement.src = autorAvatarUrl;
    avatarElement.tabIndex = 0;
    avatarElement.width = AVATAR_SIZE;
    avatarElement.height = AVATAR_SIZE;
    avatarElement.classList.add('rounded');
    pinElement.appendChild(avatarElement);
    pinElement.style.left = coordinateX + 'px';
    pinElement.style.top = coordinateY + 'px';

    pinElement.addEventListener('click', function () {
      activatePin(pinElement);
      window.showCard(pinData, deactivatePin);
    });

    pinElement.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        activatePin(pinElement);
        window.showCard(pinData, deactivatePin);
      }
    });
    return pinElement;
  };

  var addElementToFragment = function (frg, element) {
    frg.appendChild(element);
  };

  var addPinsToMap = function (offersData) {
    for (var i = 0; i < offersData.length; i++) {
      var pinElement = renderPin(offersData[i]);
      if (i === 0) {
        activatePin(pinElement);
      }
      addElementToFragment(fragment, pinElement);
    }
    map.appendChild(fragment);
  };

  var clearMap = function (offersData) {
    var pins = map.querySelectorAll('.pin:not(.pin__main)');
    for (var i = 0; i < pins.length; i++) {
      map.removeChild(pins[i]);
    }
  };

  return {
    activatePin: activatePin,
    deactivatePin: deactivatePin,
    addPinsToMap: addPinsToMap,
    clearMap: clearMap
  };
})();
