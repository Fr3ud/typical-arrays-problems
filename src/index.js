
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) return 0;

  let min = array[0];
  for (let value of array) {
      if (value < min) {
          min = value;
      }
  }

  return min;
};

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
