'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 120;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_HORIZONTAL = CLOUD_Y + GAP * 2 + (FONT_GAP) * 3 + GAP + MAX_BAR_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentTime = times[i];
    var currentPlayer = players[i];
    var barHeight = currentTime / maxTime * MAX_BAR_HEIGHT;
    var barX = CLOUD_X + GAP * 2 + BAR_WIDTH * 2.5 * i;

    ctx.fillStyle = '#000';
    ctx.fillText(currentPlayer, barX, BAR_HORIZONTAL + FONT_GAP);
    ctx.fillText(Math.round(currentTime), barX, BAR_HORIZONTAL - barHeight - GAP);

    if (currentPlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(250,' + Math.random() * 100 + '%, 50%)';
    }

    ctx.fillRect(barX, BAR_HORIZONTAL - barHeight, BAR_WIDTH, barHeight);
  }
};
