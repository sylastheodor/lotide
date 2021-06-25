const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key 
// for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  for (prop in object){
    if(callback(object[prop])) {
      return prop
    }
  }
}

const object1 = {a: 1, b: 2, c: 4, d: 3}
assertEqual(findKey(object1, x => x === 3), "d")