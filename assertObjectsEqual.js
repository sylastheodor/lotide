const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    } 
  }
  return true 
}

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let result;
  for(keys2 in object2){
    if (Array.isArray(object1[keys2]) && Array.isArray(object2[keys2])){
      if (eqArrays(object1[keys2], object2[keys2]) === false){
        return false;
      }
    } else if (object1[keys2] !== object2[keys2]){
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected) === true) {
    console.log(`💎😻💎 Object assertion passed! ${inspect(actual)} === I ${inspect(expected)}!`);
  } else if(eqObjects(actual, expected) === false) {
    console.log(`🤬💣🤬 Object assertion failed: ${actual} === ${expected}`);
  }
};


const a = {a: 1, b: 3, c: [4, 7, 9]};
const b = {a: 1, c: [4, 7, 9], b: 3};
const c = {a: 1, b: 3, c: [4, 6, 6]}

assertObjectsEqual(a, b)
// assertObjectsEqual(b, c)