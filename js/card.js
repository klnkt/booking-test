'use strict';

window.renderOfferCard = (function () {
  var offerTypeRU = {
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
    var firstOfferCard = offerTemplate.cloneNode(true);
    var firstOfferCardElement = document.querySelector('.dialog__panel');
    var offerDialogElement = document.querySelector('#offer-dialog');
    firstOfferCard.querySelector('.lodge__title').textContent =
      arr.offer.title;
    firstOfferCard.querySelector('.lodge__address').textContent =
      arr.offer.address;
    firstOfferCard.querySelector('.lodge__price').innerHTML =
      arr.offer.price + '&#x20bd;/ночь';
    firstOfferCard.querySelector('.lodge__type').textContent =
      offerTypeRU[arr.offer.type];
    firstOfferCard.querySelector('.lodge__rooms-and-guests').textContent =
      'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms +
      ' комнатах';
    firstOfferCard.querySelector('.lodge__checkin-time').textContent =
      'Заезд после ' + arr.offer.checkin + ', выезд до ' +
      arr.offer.checkout;
    firstOfferCard
      .querySelector('.lodge__features')
      .appendChild(renderFeatures(arr.offer.features));
    firstOfferCard.querySelector('.lodge__description').textContent =
    arr.offer.description;
    document.querySelector('.dialog__title').querySelector('img').src =
      arr.author.avatar;
    offerDialogElement.removeChild(firstOfferCardElement);
    offerDialogElement.appendChild(firstOfferCard);
    offerDialogElement.style.display = 'block';
  };
  return renderCard;
})();
