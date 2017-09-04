'use strict';

(function () {
  var photoContainer = document.querySelector('.form__photo-container');
  var draggedPhoto = null;
  var draggedContainer = null;
  var placeholder = null;

  photoContainer.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'div') {
      draggedPhoto = evt.target.parentNode.children[1];
      draggedContainer = evt.target.parentNode;
      placeholder = draggedPhoto.cloneNode(true);
      draggedPhoto.classList.add('placeholder');
    }
  });

  photoContainer.addEventListener('dragend', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'div') {
      draggedPhoto.classList.remove('placeholder');
    }
  });

  photoContainer.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.classList.contains('hover')) {
      var container = evt.target.parentNode;
      if (!container.classList.contains('filled')) {
        container.classList.add('filled');
        container.insertBefore(placeholder, container.children[0]);
      }
    }
  });

  photoContainer.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.classList.contains('hover')) {
      var container = evt.target.parentNode;
      if (container.classList.contains('filled')) {
        container.classList.remove('filled');
        container.removeChild(container.children[0]);
      }
    }
  });

  photoContainer.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  photoContainer.addEventListener('drop', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.classList.contains('hover')) {
      var container = evt.target.parentNode;
      draggedPhoto.classList.remove('placeholder');
      photoContainer.insertBefore(draggedContainer, container);
      if (container.classList.contains('filled')) {
        container.classList.remove('filled');
        container.removeChild(container.children[0]);
      }
    }
  });
})();
