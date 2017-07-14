'use strict';

window.offerForm = (function () {
  var offerForm = document.querySelector('.notice__form');
  var offerTypeElement = offerForm.querySelector('#type');
  var offerPriceElement = offerForm.querySelector('#price');
  var roomsNumberElement = offerForm.querySelector('#room_number');
  var guestsNumberElement = offerForm.querySelector('#capacity');
  var checkinElement = offerForm.querySelector('#time');
  var checkoutElement = offerForm.querySelector('#timeout');
  var createOfferButton = offerForm.querySelector('.form__submit');
  var offerAddress = document.querySelector('#address');

  var syncSelectedIndex = function (element1, element2, arr1, arr2) {
    element2.selectedIndex = element1.selectedIndex;
  };

  var syncMinVal = function (element1, element2, arr1, arr2) {
    element2.placeholder = arr2[element1.selectedIndex];
  };

  var switchSelectedIndex = function (element1, element2, arr1, arr2) {
    element2.selectedIndex = arr2[element1.selectedIndex];
  };

  window.synchronizeFields(
      checkinElement, checkoutElement, [], [], syncSelectedIndex);
  window.synchronizeFields(
      checkoutElement, checkinElement, [], [], syncSelectedIndex);
  window.synchronizeFields(
      offerTypeElement, offerPriceElement, [], [1000, 0, 10000], syncMinVal);
  window.synchronizeFields(
      roomsNumberElement, guestsNumberElement, [], [1, 0, 0], switchSelectedIndex);

  createOfferButton.addEventListener('click', function () {
    if (offerForm.reportValidity()) {
      offerForm.reset();
    }
  });

  var setAddress = function (coordinateX, coordinateY) {
    offerAddress.value = coordinateX + ', ' + coordinateY;
  };

  return {
    setAddress: setAddress
  };
})();
