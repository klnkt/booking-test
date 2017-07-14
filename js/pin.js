'use strict';

window.pin = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();

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
    var coordinateX = pinData.location.x - 28;
    var coordinateY = pinData.location.y - 75;
    var autorAvatarUrl = pinData.author.avatar;
    var pinElement = document.createElement('div');
    pinElement.classList.add('pin');
    var avatarElement = document.createElement('img');
    avatarElement.src = autorAvatarUrl;
    avatarElement.tabIndex = 0;
    avatarElement.width = 40;
    avatarElement.height = 40;
    avatarElement.classList.add('rounded');
    pinElement.appendChild(avatarElement);
    pinElement.style.left = coordinateX + 'px';
    pinElement.style.top = coordinateY + 'px';
    pinElement.addEventListener('click', function () {
      window.renderOfferCard(pinData);
      activatePin(pinElement);
    });
    window.showCard(pinElement, pinData);
    return pinElement;
  };

  var addElementToFragment = function (element) {
    fragment.appendChild(element);
  };

  var addPinsToMap = function (offersData) {
    for (var i = 0; i < offersData.length; i++) {
      var pinElement = renderPin(offersData[i]);
      addElementToFragment(pinElement);
    }
    map.appendChild(fragment);
  };

  return {
    activatePin: activatePin,
    deactivatePin: deactivatePin,
    addPinsToMap: addPinsToMap
  };
})();
