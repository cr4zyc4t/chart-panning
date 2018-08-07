var randomScalingFactor = function () {
  return Math.random() * 40.0;
};
var randomColor = function (opacity) {
  return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
};

var data = [];
for (var i = 0; i < 1000; i++) {
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
  datasets: [
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 0,
      pointHitDetectionRadius : 0,
      pointHoverRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    {
      label: 'Series ' + getOrder(),
      type: 'line',
      borderColor: randomColor(0.7),
      borderWidth: 2,
      fill: false,
      xAxisID: 'xAxes-1',
      borderWidth: 1,
      pointRadius: 0,
      data: getData(getOrder()),
    },
    // {
    //   label: 'Series ' + getOrder(),
    //   xAxisID: 'xAxes-1',
    //   type: 'scatter',
    //   showLine: false,
    //   pointRadius: 1,
    //   data: getData(getOrder()),
    // }
  ]
};

scatterChartData.datasets.forEach(function (dataset) {
  dataset.borderColor = randomColor(0.4);
  dataset.backgroundColor = randomColor(0.1);
  dataset.pointBorderColor = randomColor(0.7);
  dataset.pointBackgroundColor = randomColor(0.5);
  dataset.pointBorderWidth = 1;
});

function inOutQuad(n) {
  console.log(n);
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
};

function startAnimation(newMin) {
  var stop = false;

  // animating x (margin-left) from 20 to 300, for example
  var duration = 1000;
  var start = null;
  var end = null;

  function startAnim(timeStamp) {
    start = timeStamp;
    end = start + duration;
    draw(timeStamp);
  }

  function draw(now) {
    if (stop) return;
    if (now - start >= duration) stop = true;
    var p = (now - start) / duration;
    val = p;
    var x = tickMin + (newMin - tickMin) * val;

    myScatter.config.options.scales.xAxes[0].ticks.min = x;
    myScatter.config.options.scales.xAxes[0].ticks.max = x + tickMax - tickMin;
    myScatter.config.data.datasets.forEach(function (dataset, index) {
      dataset.data = scatterChartData.datasets[index].data.filter(function (data) {
        return (data.x >= tickMin - 10 && data.x <= tickMax + 10);
      })
    });
    myScatter.update();

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(startAnim);
}

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
      duration: 50,
    },
    title: {
      display: true,
      text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          id: 'xAxes-1',
          display: true,
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

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = new Chart(ctx, config);
};