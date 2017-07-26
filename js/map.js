'use strict';

(function () {
  var URL =
    'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';

  var onLoad = function (data) {
    var offers = data;
    window.pin.addPinsToMap(offers);
    window.showCard(offers[0]);
  };

  var onError = function (message) {
    var errorWarning = document.createElement('div');
    errorWarning.classList.add('error_panel');
    errorWarning.innerHTML = message;
    document.body.insertAdjacentElement('afterbegin', errorWarning);
  };

  window.load(URL, onLoad, onError);

  var mainPin = document.querySelector('.pin__main');
  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
      var mainPinLocation = {
        x: mainPin.offsetTop - shift.y + mainPin.offsetHeight,
        y: mainPin.offsetLeft - shift.x + mainPin.offsetHeight / 2
      };
      window.offerForm.setAddress(mainPinLocation.x, mainPinLocation.y);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
