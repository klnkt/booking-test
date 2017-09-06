'use strict';

window.showCard = (function () {
  return function (data) {
    var tokyoSection = document.querySelector('section.tokyo');
    var offerDialogElement = tokyoSection.querySelector('.dialog');
    var offerCard = new window.Card(data);

    if (offerDialogElement) {
      tokyoSection.removeChild(offerDialogElement);
    }
    offerCard.add(tokyoSection);
  };
})();
