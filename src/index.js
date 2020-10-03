
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
    if (!Array.isArray(array) || !array.length) return 0;

    let max = array[0];
    for (let value of array) {
        if (value > max) {
            max = value;
        }
    }

    return max;
};

exports.avg = function avg (array) {
  return 0;
}
