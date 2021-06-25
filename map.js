const eqArrays = function (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected) === true) {
    console.log(`🌸😌🌸 Assertion Passed: ${actual} === ${expected}`);
  } else if(eqArrays(actual, expected) === false) {
    console.log(`🦠😵‍💫🦠 Assertion Failed: ${actual} === ${expected}`);
  }
};

const map = (array, func) => {
  result = []
  for(elm of array){
    result.push(func(elm))
  }
  return result
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5, 6]
const howLong = (word) => word.length
const jokes = (word) => word.toUpperCase()

assertArraysEqual(map(words, x => x.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])
assertArraysEqual(map(nums, x => x + 3), [4, 5, 6, 7, 8, 9])
// assertArraysEqual()




