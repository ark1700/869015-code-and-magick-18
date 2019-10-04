'use strict';

(function () {
  // generaterandom wizard

  var userDialog = document.querySelector('.setup');

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NUMBER = 4;

  var getRandomWizards = function () {
    var wizardsArray = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      var randomWizard = {
        name: window.getRandomFromArr(WIZARD_NAMES) + ' ' + window.getRandomFromArr(WIZARD_SURNAMES),
        coatColor: window.getRandomFromArr(WIZARD_COATCOLORS),
        eyesColor: window.getRandomFromArr(WIZARD_EYESCOLORS)
      };
      wizardsArray.push(randomWizard);
    }
    return wizardsArray;
  };

  var wizards = getRandomWizards();

  // render wizards

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

})();
