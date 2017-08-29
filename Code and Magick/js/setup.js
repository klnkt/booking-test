'use strict';
var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var wizards = [];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)]'
];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate =
  document.querySelector('#similar-wizard-template').content;
var similarElement = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();

var createSimilarWizards = function () {
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizard = {
      firstName: wizardFirstNames[getRandomNumber(0, wizardFirstNames.length - 1)],
      lastName: wizardLastNames[getRandomNumber(0, wizardLastNames.length - 1)],
      coatColor: wizardCoatColor[getRandomNumber(0, wizardCoatColor.length - 1)],
      eyesColor: wizardEyesColor[getRandomNumber(0, wizardEyesColor.length - 1)]
    };
    wizards.push(wizard[i]);
  }
};

var renderWizard = function (similarWizardData) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent =
    similarWizardData.firstName + ' ' + similarWizardData.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill =
    similarWizardData.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill =
    similarWizardData.eyesColor;
  return wizardElement;
};

var addElementToFragment = function (element) {
  fragment.appendChild(element);
};

var addWizardsToSetup = function () {
  createSimilarWizards();
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var element = renderWizard(wizards[i]);
    addElementToFragment(element);
  }
  similarListElement.appendChild(fragment);
  similarElement.classList.remove('hidden');
};

addWizardsToSetup();

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var saveButton = setup.querySelector('.setup-submit');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var escPressed = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var changeCoatColor = function () {
  wizardCoat.style.fill = coatColors[getRandomNumber(0, coatColors.length - 1)];
};

var changeEyesColor = function () {
  wizardEyes.style.fill = wizardEyesColor[getRandomNumber(0, wizardEyesColor.length - 1)];
};

var changeFireballColor = function () {
  wizardFireball.style.background =
    fireballColors[getRandomNumber(0, fireballColors.length - 1)];
};

var saveButtonPressed = function (evt) {
  evt.preventDefault();
  closePopup();
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', escPressed);
  saveButton.addEventListener('click', saveButtonPressed);
  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', escPressed);
  saveButton.removeEventListener('click', saveButtonPressed);
  wizardCoat.removeEventListener('click', changeCoatColor);
  wizardEyes.removeEventListener('click', changeEyesColor);
  wizardFireball.removeEventListener('click', changeFireballColor);
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});
