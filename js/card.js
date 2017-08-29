'use strict';

window.renderOfferCard = (function () {
  var OFFER_TYPE_RU = {
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало'
  };

  var renderFeatures = function (features) {
    var featuresFragment = document.createDocumentFragment();
    for (var i = 0; i < features.length; i++) {
      var element = document.createElement('span');
      element.classList.add('feature__image');
      element.classList.add('feature__image--' + features[i]);
      featuresFragment.appendChild(element);
    }
    return featuresFragment;
  };

  var renderCard = function (arr) {
    var offerTemplate = document.querySelector('#lodge-template').content;
    var offerCard = offerTemplate.cloneNode(true);
    offerCard.querySelector('.lodge__title').textContent =
      arr.offer.title;
    offerCard.querySelector('.lodge__address').textContent =
      arr.offer.address;
    offerCard.querySelector('.lodge__price').innerHTML =
      arr.offer.price + '&#x20bd;/ночь';
    offerCard.querySelector('.lodge__type').textContent =
      OFFER_TYPE_RU[arr.offer.type];
    offerCard.querySelector('.lodge__rooms-and-guests').textContent =
      'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms +
      ' комнатах';
    offerCard.querySelector('.lodge__checkin-time').textContent =
      'Заезд после ' + arr.offer.checkin + ', выезд до ' +
      arr.offer.checkout;
    offerCard
      .querySelector('.lodge__features')
      .appendChild(renderFeatures(arr.offer.features));
    offerCard.querySelector('.lodge__description').textContent =
      arr.offer.description;
    document.querySelector('.dialog__title').querySelector('img').src =
      arr.author.avatar;
    return offerCard;
  };
  return renderCard;
})();
