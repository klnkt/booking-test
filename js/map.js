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
  console.log(window);
  console.log(window.createOffers);
  console.log(window.createOffers());
  var offers = window.createOffers();
  window.pin.addPinsToMap(offers);
  window.renderCard(offers[0]);
  closeDialog.addEventListener('click', function () {
    closeOfferDialog();
  });
})();
