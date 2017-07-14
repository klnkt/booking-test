'use strict';

window.showCard = (function () {
  var showCard = function (element, pinData) {
    element.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        window.pin.activatePin(element);
        window.renderOfferCard(pinData);
      }
    });
  };
  return showCard;
})();
