'use strict';

(function () {
  // render wizards

  var userDialog = document.querySelector('.setup');
  var renderWizards = function (wizards) {
    var similarListElement = userDialog.querySelector('.setup-similar-list');

    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.xolorEyes;

      return wizardElement;
    };

    var fragment = document.createDocumentFragment();
    var wizardsNumber = 4;
    var wizardIndices = window.randomArrIndices(wizards, wizardsNumber);
    var wizardIndex;

    for (var i = 0; i < 4; i++) {
      wizardIndex = wizardIndices[i];
      fragment.appendChild(renderWizard(wizards[wizardIndex]));
    }
    similarListElement.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.loadWizards(renderWizards, errorHandler);

  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
  setupWizardForm.addEventListener('submit', function (evt) {
    window.save(
        new FormData(setupWizardForm),
        function () {
          userDialog.classList.add('hidden');
        },
        errorHandler
    );
    evt.preventDefault();
  });
})();
