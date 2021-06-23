const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const words = [1, 2, 3, 4];
tail(words);
assertEqual([2, 3, 4], tail(words));
 