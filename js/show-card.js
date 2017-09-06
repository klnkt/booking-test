'use strict';

window.showCard = (function () {
  return function (data) {
    var firstOfferCardElement = document.querySelector('.dialog__panel');
    var offerDialogElement = document.querySelector('#offer-dialog');
    var offerCard = new window.Card(data);

    offerDialogElement.removeChild(firstOfferCardElement);
    offerCard.add(offerDialogElement);
    document.querySelector('.dialog__title').querySelector('img').src =
      data.author.avatar;
  };
})();
