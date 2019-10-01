// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var getRandomFromArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomWizards = function () {
  var wizardsArray = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var randomWizard = {
      name: getRandomFromArr(WIZARD_NAMES) + ' ' + getRandomFromArr(WIZARD_SURNAMES),
      coatColor: getRandomFromArr(WIZARD_COATCOLORS),
      eyesColor: getRandomFromArr(WIZARD_EYESCOLORS)
    };
    wizardsArray.push(randomWizard);
  }
  return wizardsArray;
};

var wizards = getRandomWizards();

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', nextWizardCoatColor);
  wizardEyes.addEventListener('click', nextWizardEyesColor);
  wizardFireball.addEventListener('click', nextWizardFireballColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', nextWizardCoatColor);
  wizardEyes.removeEventListener('click', nextWizardEyesColor);
  wizardFireball.removeEventListener('click', nextWizardFireballColor);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});


var setupWizard = document.querySelector('.setup-wizard');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setupWizardForm.querySelector('.setup-fireball-wrap');
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var currentCoatColorIndex = 0;
var currentEyeColorIndex = 0;
var currentFireballColorIndex = 0;

var nextWizardCoatColor = function () {
  currentCoatColorIndex = (currentCoatColorIndex + 1) % COAT_COLORS.length;
  var nextColor = COAT_COLORS[currentCoatColorIndex];
  wizardCoat.style.fill = nextColor;
  setupWizardForm.querySelector('input[name="coat-color"]').value = nextColor;
};

var nextWizardEyesColor = function () {
  currentEyeColorIndex = (currentEyeColorIndex + 1) % EYES_COLORS.length;
  var nextColor = EYES_COLORS[currentEyeColorIndex];
  wizardEyes.style.fill = nextColor;
  setupWizardForm.querySelector('input[name="eyes-color"]').value = nextColor;
};

var nextWizardFireballColor = function () {
  currentFireballColorIndex = (currentFireballColorIndex + 1) % FIREBALL_COLORS.length;
  var nextColor = FIREBALL_COLORS[currentFireballColorIndex];
  wizardFireball.style.background = nextColor;
  setupWizardForm.querySelector('input[name="fireball-color"]').value = nextColor;
};

wizardCoat.addEventListener('click', nextWizardCoatColor);

wizardEyes.addEventListener('click', nextWizardEyesColor);

wizardFireball.addEventListener('click', nextWizardFireballColor);
