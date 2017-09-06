'use strict';

window.Card = (function () {
  var OFFER_TYPE_RU = {
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало'
  };
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

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

  var Card = function (data) {
    window.BaseComponent.call(this, data, 'div');
    this.closeDialog = this.element.querySelector('.dialog__close');
    this.closeOfferDialog = this.closeOfferDialog.bind(this);
    this.onDialogEscPressed = this.onDialogEscPressed.bind(this);
  };

  window.utils.inherit(Card, window.BaseComponent);

  Card.prototype.createElement = function () {
    var offerTemplate = document.querySelector('#lodge-template').content.cloneNode(true);
    var offerCard = offerTemplate.children[0];
    offerCard.querySelector('.lodge__title').textContent =
      this.data.offer.title;
    offerCard.querySelector('.lodge__address').textContent =
      this.data.offer.address;
    offerCard.querySelector('.lodge__price').innerHTML =
      this.data.offer.price + '&#x20bd;/ночь';
    offerCard.querySelector('.lodge__type').textContent =
      OFFER_TYPE_RU[this.data.offer.type];
    offerCard.querySelector('.lodge__rooms-and-guests').textContent =
      'Для ' + this.data.offer.guests + ' гостей в ' + this.data.offer.rooms +
      ' комнатах';
    offerCard.querySelector('.lodge__checkin-time').textContent =
      'Заезд после ' + this.data.offer.checkin + ', выезд до ' +
      this.data.offer.checkout;
    offerCard
      .querySelector('.lodge__features')
      .appendChild(renderFeatures(this.data.offer.features));
    offerCard.querySelector('.lodge__description').textContent =
      this.data.offer.description;
    offerCard.querySelector('.dialog__title').querySelector('img').src =
      this.data.author.avatar;
    return offerCard;
  };

  Card.prototype.add = function (parentElement) {
    document.addEventListener('keydown', this.onDialogEscPressed);
    this.closeDialog.addEventListener('click', this.closeOfferDialog);
    this.closeDialog.addEventListener('keydown', this.closeOfferDialog);
    window.BaseComponent.prototype.add.call(this, parentElement);
  };

  Card.prototype.remove = function () {
    document.removeEventListener('keydown', this.onDialogEscPressed);
    this.closeDialog.removeEventListener('click', this.closeOfferDialog);
    this.closeDialog.removeEventListener('keydown', this.closeOfferDialog);
    window.BaseComponent.prototype.remove.call(this);
  };

  Card.prototype.onDialogEscPressed = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      this.closeOfferDialog(evt);
    }
  };

  Card.prototype.closeOfferDialog = function (evt) {
    if (evt.type === 'keydown') {
      if (evt.keyCode === ENTER_KEY_CODE || evt.keyCode === ESC_KEY_CODE) {
        this.remove();
        window.pinCollection.deactivateAll();
      }
    } else {
      this.remove();
      window.pinCollection.deactivateAll();
    }
  };

  return Card;
})();
