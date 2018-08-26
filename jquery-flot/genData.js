function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomPoint(lastClose) {
  let open = randomNumber(lastClose * 0.95, lastClose * 1.05);
  let close = randomNumber(open * 0.95, open * 1.05);
  return close;
}

function genData(from = 0, length = 1200) {
  let lastPoint = [
    from,
    randomPoint(50),
  ];
  const data = [lastPoint];
  while (data.length < length) {
    lastPoint = [
      lastPoint[0] + 72000,
      randomPoint(lastPoint[1]),
    ];
    data.push(lastPoint);
  }
  return data;
}