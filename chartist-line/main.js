const NUMBER_LINE = 1;
const NUMBER_SAMPLE_DATA = 1000;
let randomScalingFactor = function () {
  return Math.random() * 40.0;
};
let randomColor = function (opacity) {
  return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
};

let data = [];
for (let i = 0; i < NUMBER_SAMPLE_DATA; i++) {
  data.push({
    x: i,
    y: randomScalingFactor()
  });
}

let getData = function (count1) {
  count1 += 10;
  return data.map(function (point) {
    return {
      x: point.x,
      y: point.y + count1 * 10
    }
  });
}

let count = 0;
let getOrder = function () {
  count++;
  return count;
}

let dataSet = {
  // labels: [],
  series: [],
};
for (let i = 0; i < NUMBER_LINE; i++) {
  dataSet.series.push({
    name: `Serie ${i + 1}`,
    data: getData(getOrder())
  });
}

let tickMin = 0;
let tickMax = 50;

let options = {
  // showLine: false,
  showPoint: false,
  axisX: {
    high: tickMax,
    low: tickMin,
    type: Chartist.AutoScaleAxis,
    // labelInterpolationFnc: function (value, index) {
    //   return index % 130 === 0 ? 'W' + value : null;
    // }
  }
};

const lineChart = new Chartist.Line('#root', dataSet, options);

let range = tickMax - tickMin;
let minXBeforePan = null;
let hammer = new Hammer(document.getElementById('root'));
hammer.on('pan', function (e) {
  const plotArea = document.getElementsByClassName("ct-grids");
  const plotWidth = plotArea[0].getBBox().width;
  const ratio = range / plotWidth;
  let isFinal = e.isFinal;
  if (!minXBeforePan) {
    minXBeforePan = tickMin;
  }
  // console.log(minXBeforePan);
  let newMin = minXBeforePan - e.deltaX * ratio;
  let newMax = newMin + 50;
  if (isFinal) {
    tickMin = newMin;
    tickMax = newMax;
    minXBeforePan = null;
  }

  let options = {
    // showLine: false,
    showPoint: false,
    axisX: {
      high: newMax,
      low: newMin,
      type: Chartist.AutoScaleAxis,
      // labelInterpolationFnc: function (value, index) {
      //   return index % 130 === 0 ? 'W' + value : null;
      // }
    }
  };

  let series = dataSet.series.map(function (serie, index) {
    return {
      ...serie,
      data: serie.data.filter(function (data) {
        return (data.x >= newMin - 10 && data.x <= newMax + 10);
      })
    }
  });
  let newDataSet = {
    series,
  }
  lineChart.update(newDataSet, options);
});

function startAnimation(newMin) {
  let stop = false;

  // animating x (margin-left) from 20 to 300, for example
  let duration = 1000;
  let start = null;
  let end = null;

  function startAnim(timeStamp) {
    start = timeStamp;
    end = start + duration;
    draw(timeStamp);
  }

  function draw(now) {
    if (stop) return;
    if (now - start >= duration) stop = true;
    let p = (now - start) / duration;
    let val = p;
    let x = tickMin + (newMin - tickMin) * val;
    tickMin = x;
    tickMax = x + 50;
    let options = {
      // showLine: false,
      showPoint: false,
      axisX: {
        high: x + 50,
        low: x,
        type: Chartist.AutoScaleAxis,
        // labelInterpolationFnc: function (value, index) {
        //   return index % 130 === 0 ? 'W' + value : null;
        // }
      }
    };

    let series = dataSet.series.map(function (serie, index) {
      return {
        ...serie,
        data: serie.data.filter(function (data) {
          return (data.x >= tickMin - 10 && data.x <= tickMax + 10);
        })
      }
    });
    let newDataSet = {
      series,
    }
    lineChart.update(newDataSet, options);

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(startAnim);
}