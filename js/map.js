'use strict';

(function () {
  var dialogElement = document.querySelector('.dialog');
  var closeDialog = document.querySelector('.dialog__close');

  document.addEventListener('keydown', onDialogEscPressed);

  var closeOfferDialog = function () {
    dialogElement.style.display = 'none';
    window.pin.deactivatePin();
    document.removeEventListener('keydown', onDialogEscPressed);
  };

  var onDialogEscPressed = function (evt) {
    if (evt.keyCode === 27) {
      closeOfferDialog();
    }
  };

  closeDialog.addEventListener('click', function () {
    closeOfferDialog();
  });

  var offers = window.createOffers();
  window.pin.addPinsToMap(offers);
  window.renderOfferCard(offers[0]);

  var mainPin = document.querySelector('.pin__main');
  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
      var mainPinLocation = {
        x: mainPin.offsetTop - shift.y + mainPin.offsetHeight,
        y: mainPin.offsetLeft - shift.x + mainPin.offsetHeight / 2
      };
      window.offerForm.setAddress(mainPinLocation.x, mainPinLocation.y);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
