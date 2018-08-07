var times = function (n) {
  return Array.apply(null, new Array(n));
};

var data = times(2000).map(Math.random).reduce(function (data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function (series) {
    series.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
    })
  });

  return data;
}, {
    labels: [],
    series: times(4).map(function () { return new Array() })
  });

var options = {
  showLine: false,
  axisX: {
    high: 50,
    low: 20,
    type: Chartist.AutoScaleAxis,
    // labelInterpolationFnc: function (value, index) {
    //   return index % 130 === 0 ? 'W' + value : null;
    // }
  }
};

new Chartist.Line('#root', data, options);