'use strict';
(function () {
  window.getRandomFromArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
})();

