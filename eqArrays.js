const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};


//comparing two arrays
//we need to compare each element in the array
//so we loop through both arrays, and compare each element 
//at each point. Loop for i
const eqArrays = function (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    } 
  }
  return true
  
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false