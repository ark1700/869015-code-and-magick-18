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
})();

