const NUMBER_LINE = 40;
const NUMBER_SAMPLE_DATA = 1200;
var randomScalingFactor = function () {
  return Math.random() * 40.0;
};
var randomColor = function (opacity) {
  return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
};

var data = [];
for (var i = 0; i < NUMBER_SAMPLE_DATA; i++) {
  data.push({
    x: i,
    y: randomScalingFactor()
  });
}

var getData = function (count1) {
  count1 += 10;
  return data.map(function (point) {
    return {
      x: point.x,
      y: point.y + count1 * 10
    }
  });
}

var count = 0;
var getOrder = function () {
  count++;
  return count;
}

var scatterChartData = {
  datasets: (function () {
    var series = [];
    for (let i = 0; i < NUMBER_LINE; i++) {
      series.push({
        label: 'Series ' + (i + 1),
        type: 'line',
        borderColor: randomColor(1),
        fill: false,
        xAxisID: 'xAxes-1',
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHitDetectionRadius: 0,
        pointHoverRadius: 0,
        data: getData(i),
      });
    }
    return series;
  })()
  // {
  //   label: 'Series ' + getOrder(),
  //   xAxisID: 'xAxes-1',
  //   type: 'scatter',
  //   showLine: false,
  //   pointRadius: 1,
  //   data: getData(getOrder()),
  // }
};

scatterChartData.datasets.forEach(function (dataset) {
  dataset.borderColor = randomColor(0.4);
  dataset.backgroundColor = randomColor(0.1);
  dataset.pointBorderColor = randomColor(0.7);
  dataset.pointBackgroundColor = randomColor(0.5);
  dataset.pointBorderWidth = 1;
});

var tickMin = 0;
var tickMax = 50;

var config = {
  type: 'line',
  data: {
    datasets: scatterChartData.datasets.map(function (dataset) {
      return Object.assign({}, dataset, {
        data: dataset.data.filter(function (data) {
          return (data.x >= tickMin - 10 && data.x <= tickMax + 10);
        })
      })
    }),
  },
  options: {
    animation: {
      duration: 20,
    },
    title: {
      display: true,
      text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
    },
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          id: 'xAxes-1',
          display: false,
          type: 'linear',
          position: 'bottom',
          ticks: {
            // userCallback: function (tick) {
            // 	var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
            // 	if (remain === 1 || remain === 2 || remain === 5) {
            // 		return tick.toString() + "Hz";
            // 	}
            // 	return '';
            // },
            // beginAtZero: false,
            // stepSize: 10,
            min: 0,
            max: 50,
            maxRotation: 0,
            callback: function (value, index, values) {
              if (index === 0 || index === 11) {
                return '';
              }
              return (Math.round(value * 10) / 10).toFixed(1);
            }
          },
          scaleLabel: {
            labelString: 'Frequency',
            display: true,
          },
        },
        // {
        // 	id: 'xAxes-2',
        // 	display: true,
        // 	type: 'linear',
        // 	position: 'bottom',
        // 	// ticks: {
        // 	// 	userCallback: function (tick) {
        // 	// 		var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
        // 	// 		if (remain === 1 || remain === 2 || remain === 5) {
        // 	// 			return tick.toString() + "Hz";
        // 	// 		}
        // 	// 		return '';
        // 	// 	},
        // 	// 	maxRotation: 0
        // 	// },
        // 	scaleLabel: {
        // 		labelString: 'Frequency',
        // 		display: true,
        // 	},
        // }
      ],
      yAxes: [{
        type: 'linear',
        // ticks: {
        // 	userCallback: function (tick) {
        // 		return tick.toFixed(0) + "dB";
        // 	}
        // },
        scaleLabel: {
          labelString: 'Voltage',
          display: true
        }
      }]
    },
    pan: {
      enabled: true,
      mode: 'x',
      limits: {
        xmin: 1e-4,
        ymin: -50,
        ymax: 10
      },
      xScale0: {
        max: 1e4
      }
    },
    zoom: {
      enabled: true,
      mode: 'y',
      limits: {
        max: 10,
        min: 0.5
      }
    }
  }
};

var minXBeforePan = null;
var range = tickMax - tickMin;
window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = new Chart(ctx, config);
  var plotWidth = myScatter.chartArea.right - myScatter.chartArea.left;
  var ratio = (tickMax - tickMin) / plotWidth;
  var hammer = new Hammer(document.getElementById('canvas'));
  hammer.on('pan', function (e) {
    // var isFirst = e.isFirst;
    var isFinal = e.isFinal;
    if (!minXBeforePan) {
      minXBeforePan = tickMin;
    }
    // console.log(minXBeforePan);
    var newMin = minXBeforePan - e.deltaX * ratio;
    var newMax = newMin + range;
    if (isFinal) {
      tickMin = newMin;
      tickMax = newMax;
      minXBeforePan = null;
    }
    reDraw(newMin);
  });
};

function reDraw(newMin) {
  const newMax = newMin + range;
  myScatter.config.options.scales.xAxes[0].ticks.min = newMin;
  myScatter.config.options.scales.xAxes[0].ticks.max = newMax;
  myScatter.config.data.datasets.forEach(function (dataset, index) {
    dataset.data = scatterChartData.datasets[index].data.filter(function (data) {
      return (data.x >= newMin - 10 && data.x <= newMax + 10);
    })
  });
  myScatter.update();
}

function easingLinear(passedTimeRatio) {
  if (passedTimeRatio > 1) {
    passedTimeRatio = 1;
  }
  return passedTimeRatio;
}

function easeOutQuart(passedTimeRatio) {
  return 1 - (--passedTimeRatio) * Math.pow(passedTimeRatio, 3);
}

function moveTo(newMin) {
  const startTime = performance.now();
  const currentMin = myScatter.config.options.scales.xAxes[0].ticks.min;
  const changed = newMin - currentMin;
  if (changed === 0) {
    return;
  }
  const duration = 500; //1s
  function shortMove(now) {
    const passedTime = now - startTime;
    if (passedTime > duration) {
      reDraw(newMin);
      return;
    }
    // console.log(passedTime);
    const tempMin = currentMin + changed * easeOutQuart(passedTime / duration);
    reDraw(tempMin);
    requestAnimationFrame(shortMove);
  }
  requestAnimationFrame(shortMove);
}