'use strict';

(function () {
  // render wizards

  var userDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similar = userDialog.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  window.renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var wizardsNumber = 4;
    similarListElement.innerHTML = '';
    for (var i = 0; i < wizardsNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    similar.classList.remove('hidden');
  };
})();
