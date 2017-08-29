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

  var setAddress = function (coordinateX, coordinateY) {
    offerAddress.value = coordinateX + ', ' + coordinateY;
  };

  var syncValues = function (element, value) {
    element.value = value;
  };

  var syncValueWithMin = function (element, value) {
    element.placeholder = value;
  };

  createOfferButton.addEventListener('click', function () {
    if (offerForm.reportValidity()) {
      offerForm.reset();
    }
  });

  window.utils.synchronizeFields(
      checkinElement,
      checkoutElement,
      ['12', '13', '14'],
      ['12', '13', '14'],
      syncValues
    );
  window.utils.synchronizeFields(
      checkoutElement,
      checkinElement,
      ['12', '13', '14'],
      ['12', '13', '14'],
      syncValues
    );
  window.utils.synchronizeFields(
      roomsNumberElement,
      guestsNumberElement,
      ['1', '2', '100'],
      ['no guests', '3 guests', '3 guests'],
      syncValues
    );
  window.utils.synchronizeFields(
      offerTypeElement,
      offerPriceElement,
      ['flat', 'shack', 'palace'],
      ['1000', '0', '10000'],
      syncValueWithMin
    );

  return {
    setAddress: setAddress
  };
})();
