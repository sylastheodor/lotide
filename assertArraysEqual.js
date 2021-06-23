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

