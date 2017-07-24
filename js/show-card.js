'use strict';

window.showCard = (function () {
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var showCard = function (pinData, onDialogClosed) {
    var firstOfferCardElement = document.querySelector('.dialog__panel');
    var offerDialogElement = document.querySelector('#offer-dialog');
    var offerCard = window.renderOfferCard(pinData);
    var dialogElement = document.querySelector('.dialog');
    var closeDialog = document.querySelector('.dialog__close');

    offerDialogElement.removeChild(firstOfferCardElement);
    offerDialogElement.appendChild(offerCard);
    offerDialogElement.style.display = 'block';

    var closeOfferDialog = function () {
      dialogElement.style.display = 'none';
      onDialogClosed();
      document.removeEventListener('keydown', onDialogEscPressed);
    };

    var onDialogEscPressed = function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        closeOfferDialog();
      }
    };

    document.addEventListener('keydown', onDialogEscPressed);
    closeDialog.addEventListener('click', function () {
      closeOfferDialog();
    });
    closeDialog.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        closeOfferDialog();
      }
    });
  };
  return showCard;
})();
