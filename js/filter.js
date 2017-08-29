'use strict';

window.filterOffers = (function () {
  var filterForm = document.querySelector('.tokyo__filters');
  var featuresElements = filterForm
      .querySelector('#housing_features')
      .querySelectorAll('input');

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
      case 'middle':
        return value2 >= 10000 && value2 < 50000;
      case 'high':
        return value2 >= 50000;
      default:
        return false;
    }
  };

  var getSelectedFeatures = function () {
    var array = [];
    for (var i = 0; i < featuresElements.length; i++) {
      if (featuresElements[i].checked) {
        array.push(featuresElements[i].value);
      }
    }
    return array;
  };

  var filterFeatures = function (arr1, arr2) {
    var result = true;
    for (var i = 0; i < arr1.length; i++) {
      result = result && (arr2.indexOf(arr1[i]) !== -1);
    }
    return result;
  };

  var getFields = function () {
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
      },
      {
        name: 'features',
        value: getSelectedFeatures(),
        cb: filterFeatures
      }
    ];
    return arr;
  };

  var filterOffers = function (element) {
    var arr = getFields();
    var result = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].value !== 'any') {
        result =
          result && arr[i].cb(arr[i].value, element.offer[arr[i].name]);
      }
    }
    return result;
  };
  return filterOffers;
})();
