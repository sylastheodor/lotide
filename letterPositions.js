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



let letterPositions = function(sentence) {
  let textArray = sentence.split('')
  let returnObj = {}
  for (let i = 0; i < textArray.length; i++) {
    console.log("textArray[i]:", textArray[i]);
    console.log("i:", i)
    if (textArray[i] in returnObj) {
      returnObj[textArray[i]].push(i)
    } else {
      returnObj[textArray[i]] = [i]
    }
  }
  console.log("returnObj:", returnObj)
  //return returnObj
}


  //pretty good so far but it counts lower and upper case as seperate characters and returns spaces.. 
  //not production ready yet