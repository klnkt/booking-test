'use strict';

(function () {
  var offers = [];
  var filterForm = document.querySelector('.tokyo__filters');
  var URL =
    'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';
  var map = document.querySelector('.tokyo__pin-map');

  var onLoad = function (data) {
    offers = data;
    window.pinCollection.set(offers);
    window.pinCollection.show(map);
    window.pinCollection.activateFirst();
    window.showCard(offers[0]);
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
    window.pinCollection.clear();
    window.pinCollection.set(filterResult);
    window.pinCollection.show(map);
    window.pinCollection.activateFirst();
    window.showCard(filterResult[0]);
  };

  window.load(URL, onLoad, onError);
  filterForm.addEventListener('change', window.utils.debounce(updatePins));
})();
