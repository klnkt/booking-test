'use strict';

(function () {
  var offerForm = document.querySelector('.notice__form');
  var offerTypeElement = offerForm.querySelector('#type');
  var offerPriceElement = offerForm.querySelector('#price');
  var roomsNumberElement = offerForm.querySelector('#room_number');
  var guestsNumberElement = offerForm.querySelector('#capacity');
  var checkinElement = offerForm.querySelector('#time');
  var checkoutElement = offerForm.querySelector('#timeout');
  var createOfferButton = offerForm.querySelector('.form__submit');

  offerTypeElement.addEventListener('change', function () {
    var selectedOption = offerTypeElement.options[offerTypeElement.selectedIndex];
    switch (selectedOption.value) {
      case 'Квартира':
        offerPriceElement.placeholder = '1000';
        break;
      case 'Лачуга':
        offerPriceElement.placeholder = '0';
        break;
      case 'Дворец':
        offerPriceElement.placeholder = '10000';
        break;
    }
  });
  roomsNumberElement.addEventListener('change', function () {
    var selectedOption =
      roomsNumberElement.options[roomsNumberElement.selectedIndex];
    switch (selectedOption.value) {
      case '2 комнаты':
        guestsNumberElement.selectedIndex = 0;
        break;
      case '100 комнат':
        guestsNumberElement.selectedIndex = 0;
        break;
      case '1 комната':
        guestsNumberElement.selectedIndex = 1;
        break;
    }
  });
  checkinElement.addEventListener('change', function () {
    checkoutElement.selectedIndex = checkinElement.selectedIndex;
  });
  checkoutElement.addEventListener('change', function () {
    checkinElement.selectedIndex = checkoutElement.selectedIndex;
  });
  createOfferButton.addEventListener('click', function () {
    if (offerForm.reportValidity()) {
      offerForm.reset();
    }
  });
})();
