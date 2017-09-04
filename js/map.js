'use strict';

(function () {
  var offers = [];
  var filterForm = document.querySelector('.tokyo__filters');
  var URL =
    'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';

  var onLoad = function (data) {
    offers = data;
    window.pin.addPinsToMap(offers);
    window.showCard(offers[0], window.pin.deactivatePin);
  };

  var onError = function (message) {
    var errorWarning = document.createElement('div');
    errorWarning.classList.add('error_panel');
    errorWarning.innerHTML = message;
    document.body.insertAdjacentElement('afterbegin', errorWarning);
    window.setTimeout(function () {
      errorWarning.classList.add('active');
    }, 10);
  };

  var updatePins = function () {
    var filterResult = offers.filter(window.filterOffers);
    window.pin.clearMap();
    window.pin.addPinsToMap(filterResult);
    window.showCard(filterResult[0], window.pin.deactivatePin);
  };

  window.load(URL, onLoad, onError);
  filterForm.addEventListener('change', window.utils.debounce(updatePins));
})();
