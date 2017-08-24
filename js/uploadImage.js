'use strict';

(function () {
  var notice = document.querySelector('.notice');
  var avatar = [notice.querySelector('.notice__preview img')];
  var avatarInput = notice.querySelector('.upload input[type=file]');
  var photoContainer = notice.querySelector('.form__photo-container');
  var photoInput = photoContainer.querySelector('.upload input[type=file]');
  var avatarDropzone = notice.querySelector('div.drop-zone');
  var photosDropzone = photoContainer.querySelector('div.drop-zone');

  var getPhotoElements = function () {
    return photoContainer.querySelectorAll('.form__photo:not(.filled)');
  };

  var uploadFiles = function (elements, files, cb) {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    var length = Math.min(elements.length, files.length);
    var elementIndex = 0;

    for (var i = 0; i < length; i++) {
      var file = files[i];
      var fileName = file.name.toLowerCase();

      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });

      if (matches) {
        window.readFileInput(elements[elementIndex], file, cb);
        elementIndex++;
      }
    }
  };

  var changeSrc = function (img, source) {
    img.src = source;
  };

  var addIMG = function (element, src) {
    element.classList.add('filled');
    var img = document.createElement('img');
    img.src = src;
    img.height = 70;
    img.width = 70;
    element.appendChild(img);
  };

  avatarInput.addEventListener('change', function (evt) {
    var files = avatarInput.files;
    uploadFiles(avatar, files, changeSrc);
  });

  photoInput.addEventListener('change', function (evt) {
    var files = photoInput.files;
    uploadFiles(getPhotoElements(), files, addIMG);
  });

  avatarDropzone.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  avatarDropzone.addEventListener('drop', function (evt) {
    evt.preventDefault();
    var files = evt.dataTransfer.files;
    if (files) {
      uploadFiles(avatar, files, changeSrc);
    }
  });

  photosDropzone.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  photosDropzone.addEventListener('drop', function (evt) {
    evt.preventDefault();
    var files = evt.dataTransfer.files;
    if (files) {
      uploadFiles(getPhotoElements(), files, addIMG);
    }
  });
})();
