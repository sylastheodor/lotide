const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🌸😌🌸 Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`🦠😵‍💫🦠 Assertion Failed: ${actual} === ${expected}`);
  }
};

const middle = function (array) {
  let output = [];
  const limit = array.length;
  console.log(array[limit / 2]);
  if (limit > 2) {
    if (limit % 2 === 0) {
      output.push(array[limit / 2 - 1]);
      output.push(array[limit / 2]);
      console.log(output);
    } else if (limit % 2 !== 0) {
      output.push(array[Math.floor(limit / 2)]);
    }
  }
  return output;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 7, 7, 7, 7, 7, 7]), [7]);
