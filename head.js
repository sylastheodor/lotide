const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};
const head = function (array) {
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Lighthouse"]), "Lighthouse");
