"use strict";

// DATA
const startTime = 0;
const baseDataSet = genData(startTime);
const datasets = [];
for (let i = 0; i < 10; i++) {
  const newDataSet = baseDataSet.map(([x, y]) => ([x, y + i * 20]));
  datasets.push({
    label: `Line${i}`,
    data: newDataSet
  });
}
for (let i = 10; i < 20; i++) {
  const newDataSet = baseDataSet.map(([x, y]) => ([x, y + i * 20]));
  datasets.push({
    label: `Line${i}`,
    data: newDataSet,
    xaxis: 2
  });
}

// OPTIONS
const options = {
  legend: {
    show: false,
  },
  series: {
    lines: {
      show: true,
      lineWidth: 1,
      pointRadius: 2,
    },
    shadowSize: 0,
  },
  xaxis: {
    show: true,
    min: startTime + 72000 * 300,
    max: startTime + 72000 * 900,
    panRange: null,
  },
  yaxis: {
    panRange: false,
  },
  zoom: {
    interactive: false
  },
  pan: {
    interactive: false,
    frameRate: 60
  },
  lines: {
    show: true,
  },
  points: {
    show: false,
    radius: 1,
  }
};

function getVisibleData(datasets, min, max) {
  return datasets.map(dataset => {
    return {
      ...dataset,
      // data: dataset.data.filter(([x, y]) => x >= min && x <= max),
    }
  });
}

const plot = $.plot("#placeholder", getVisibleData(datasets, options.xaxis.min, options.xaxis.max), options);

function reDraw(newMin) {
  const options = plot.getOptions();
  const newMax = newMin + 72000 * 600;
  options.xaxes[0].min = newMin;
  options.xaxes[0].max = newMax;
  plot.setData(getVisibleData(datasets, newMin, newMax));
  plot.setupGrid();
  plot.draw();
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
  const currentMin = plot.getOptions().xaxes[0].min;
  const changed = newMin - currentMin;
  if (changed === 0) {
    return;
  }
  const duration = 1000; //1s
  function shortMove() {
    const passedTime = performance.now() - startTime;
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

$("#placeholder").on('plotpan', (e, plot, delta) => {
  // console.log(delta);
});

// Panning by hammer
// let deltaX = null;
// const hammer = new Hammer(document.getElementById('placeholder'));
// const ratio = plot.width() / 72000 * 600;
// console.log(ratio);
// hammer.on('pan', function (e) {
//   // console.log(e.deltaX);
//   if (deltaX === null) {
//     deltaX = e.deltaX
//   } else {
//     deltaX = e.deltaX - deltaX;
//   }
//   // console.log(deltaX);
//   plot.pan({
//     left: -deltaX / ratio,
//   });
//   if (e.isFinal) {
//     deltaX = null;
//   }
//   // var isFirst = e.isFirst;
//   // var isFinal = e.isFinal;
//   // if (!minXBeforePan) {
//   //   minXBeforePan = plot.getOptions().xaxes[0].min;
//   // }
//   // const ratio = 72000 * 600 / plot.width();
//   // var newMin = minXBeforePan - e.deltaX * ratio;
//   // reDraw(newMin);
//   // if (isFinal) {
//   //   minXBeforePan = null;
//   // }
// });
let prevPageX = null;
$('.flot-overlay').on("dragstart", { distance: 10 }, e => {
  prevPageX = e.pageX;
});
$('.flot-overlay').on("drag", e => {
  setTimeout(() => {
    plot.pan({
      left: prevPageX - e.pageX,
    });
    prevPageX = e.pageX;
  }, 20);
});
$('.flot-overlay').on("dragend", e => {
  plot.pan({ left: prevPageX - e.pageX });
});