'use strict';

window.createOffers = (function () {
  var authorAvatars = [1, 2, 3, 4, 5, 6, 7, 8];
  var offerTitle = ['Большая уютная квартира', 'Маленькая неуютная квартира',
    'Огромный прекрасный дворец', 'Маленький ужасный дворец',
    'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var offerType = ['flat', 'house', 'bungalo'];
  var offerCheckin = ['12:00', '13:00', '14:00'];
  var offerCheckout = ['12:00', '13:00', '14:00'];
  var offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator',
    'conditioner'];
  var OFFER_NUMBER = 8;

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var getRandomArray = function (arr, n) {
    var nonRandomizedArray = arr.slice();
    var randomizedArray = [];
    for (var i = 0; i < n; i++) {
      var j = getRandomNumber(0, nonRandomizedArray.length - 1);
      randomizedArray.push(nonRandomizedArray[j]);
      nonRandomizedArray.splice(j, 1);
    }
    return randomizedArray;
  };

  return function () {
    var array = [];
    var offerTiteleRnd = getRandomArray(offerTitle, OFFER_NUMBER);
    var avatarsRnd = getRandomArray(authorAvatars, OFFER_NUMBER);
    for (var i = 0; i < OFFER_NUMBER; i++) {
      var xRnd = getRandomNumber(300, 900);
      var yRnd = getRandomNumber(200, 500);
      var offer = {
        author: {
          avatar: 'img/avatars/user0' + avatarsRnd[i] + '.png'
        },
        offer: {
          title: offerTiteleRnd[i],
          address: xRnd + ', ' + yRnd,
          price: getRandomNumber(1000, 1000000),
          type: offerType[getRandomNumber(0, offerType.length - 1)],
          rooms: getRandomNumber(1, 5),
          guests: getRandomNumber(1, 10),
          checkin: offerCheckin[getRandomNumber(0, offerCheckin.length - 1)],
          checkout: offerCheckout[getRandomNumber(0, offerCheckout.length - 1)],
          features: getRandomArray(offerFeatures, getRandomNumber(1, offerFeatures.length - 1)),
          description: '',
          photos: []
        },
        location: {
          x: xRnd,
          y: yRnd
        }
      };
      array.push(offer);
    }
    return array;
  };
})();
