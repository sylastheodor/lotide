const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

assertEqual("Scorsese", 'sohsese');
assertEqual(1, 999);
assertEqual(40, 40);
assertEqual('cream', 'cream');