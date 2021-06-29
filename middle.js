const middle = function (array) {
  let output = [];
  const limit = array.length;
  if (limit > 2) {
    if (limit % 2 === 0) {
      output.push(array[limit / 2 - 1]);
      output.push(array[limit / 2]);
    } else if (limit % 2 !== 0) {
      output.push(array[Math.floor(limit / 2)]);
    }
  }
  return output;
};

module.exports = middle