'use strict';

(function () {
  var filterForm = document.querySelector('.tokyo__filters');
  var offers = [];
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
    var filterValues = function (value1, value2) {
      if (isNaN(parseInt(value1, 10))) {
        return value1 === value2;
      } else {
        return parseInt(value1, 10) === value2;
      }
    };

    var filterPrice = function (value1, value2) {
      switch (value1) {
        case 'low':
          return value2 < 10000;
          break;
        case 'middle':
          return value2 >= 10000 && value2 < 50000;
          break;
        case 'high':
          return value2 >= 50000;
          break;
        default:
          return false;
      }
    };

    var filterFeatures = function (arr1, arr2) {
      var boolean = true;
      for (var i = 0; i < arr1.length; i++) {
        boolean = boolean && (arr2.indexOf(arr1[i]) !== -1);
      }
      return boolean;
    };

    var arr = [
      {
        name: 'type',
        value: filterForm.querySelector('#housing_type').value,
        cb: filterValues
      },
      {
        name: 'price',
        value: filterForm.querySelector('#housing_price').value,
        cb: filterPrice
      },
      {
        name: 'rooms',
        value: filterForm.querySelector('#housing_room-number').value,
        cb: filterValues
      },
      {
        name: 'guests',
        value: filterForm.querySelector('#housing_guests-number').value,
        cb: filterValues
      }
    ];

    var featuresSelected = (function () {
      var featuresElements = filterForm
          .querySelector('#housing_features')
          .querySelectorAll('input');
      var array = [];
      for (var i = 0; i < featuresElements.length; i++) {
        if (featuresElements[i].checked) {
          array.push(featuresElements[i].value);
        }
      }
      return array;
    })();


    var filterOffers = function (element) {
      var boolean = true;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].value !== 'any') {
          boolean =
            boolean && arr[i].cb(arr[i].value, element.offer[arr[i].name]);
        }
      }
      if (boolean === true) {
        boolean =
          boolean && filterFeatures(featuresSelected, element.offer.features);
      }
      return boolean;
    };

    var offersFiltered = offers.filter(function (it) {
      var boolean = filterOffers(it);
      return boolean;
    });

    window.pin.clearMap();
    window.pin.addPinsToMap(offersFiltered);
    window.showCard(offersFiltered[0], window.pin.deactivatePin);
  };

  window.load(URL, onLoad, onError);

  filterForm.addEventListener('change', function (evt) {
    window.debounce(updatePins);
  });
})();
