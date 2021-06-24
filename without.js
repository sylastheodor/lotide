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

const without = function(source, itemsToRemove) {
  let output = source
  console.log(output)
  for (let i = 0; i < source.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
        output.splice(source.indexOf(itemsToRemove[j]), 1) // this feels elite
      }
    }
  }
  return output
} 



assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["69", 1, 44, 2, "2", 3], [1, "2", 44]), ["69", 2, 3]) // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]), ["1"]) // => ["1", "2"]

/*
I came up with that kind of crazy one with the triple method, but Andy in the chat came up with
const without = function(source, toRemove) {
  let toInclude = true;
  let newArray = [];
  for (let element of source) {
    toInclude = true;
    for (let target of toRemove) {
      if (element === target) {
        toInclude = false;
      }
    }
    if (toInclude) {
      newArray.push(element);
    }
  }
  return newArray;
}
///////this was my original plan but I think I messed up on the inner/outer loop placement.
*/
