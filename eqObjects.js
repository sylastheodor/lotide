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



const cd = { c: "1", d: ["2", 3, 6, 8, 9]};
const dc = { d: ["2", 3, 6, 8, 9], c: "1" };
assertEqual(eqObjects(cd, dc), false)

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false)
