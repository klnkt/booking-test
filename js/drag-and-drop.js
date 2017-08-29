'use strict';

(function () {
  var photoContainer = document.querySelector('.form__photo-container');
  var draggedPhoto = null;

  photoContainer.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedPhoto = evt.target.parentNode;
    }
  });

  photoContainer.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.classList.contains('form__photo')) {
      var container = evt.target.parentNode;
      if (!container.classList.contains('filled')) {
        var placeholder = draggedPhoto.cloneNode(true);
        placeholder.style.backgroundColor = 'yellow';
        placeholder.classList.add('placeholder');
        container.insertBefore(placeholder, container.firstChild);
      }
    }
  });

  photoContainer.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.classList.contains('form__photo')) {
      var container = evt.target.parentNode;
      var firstNode = container.firstChild;
      if (firstNode.classList.contains('placeholder')) {
        container.removeChild(firstNode);
      }
    }
  });

  photoContainer.addEventListener('drop', function (evt) {
    var draggedDiv = draggedPhoto.parentNode;
    photoContainer.removeChild(draggedDiv);
    photoContainer.insertBefore(draggedDiv, evt.target.parentNode);
  });
})();
