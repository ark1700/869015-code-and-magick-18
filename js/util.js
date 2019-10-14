'use strict';
(function () {
  window.getRandomFromArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  window.randomArrIndices = function (arr, number) {
    var result = [];
    var randomIndex;
    while (result.length < number) {
      randomIndex = Math.floor(Math.random() * arr.length);
      if (arr.indexOf(randomIndex) === -1) {
        result.push(randomIndex);
      }
    }
    return result;
  };

  var DEBOUNCE_INTERVAL = 500;

  window.debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();

