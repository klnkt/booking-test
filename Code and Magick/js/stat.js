'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16x PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    };
  };

  var histogramHeight = 150; //px
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 235;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(2, 14, 134, ' + Math.random() + ')';
    };

    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, times[i] * step * (-1));

    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, 80 + 150 -times[i] * step);

    ctx.fillText(names[i], initialX + (barWidth + indent) * i, 265);
  };
};
