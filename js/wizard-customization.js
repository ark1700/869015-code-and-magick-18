'use strict';

(function () {
  // wizard customization

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

  window.wizardCustomization = {
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    wizardFireball: wizardFireball,
    nextWizardCoatColor: nextWizardCoatColor,
    nextWizardEyesColor: nextWizardEyesColor,
    nextWizardFireballColor: nextWizardFireballColor
  };
})();
