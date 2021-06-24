const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object, value){
  for (var properties in object) {
  var val = object[properties];
  if (val === value){
    return properties
  }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Freaking NEWS, DUDE!!!!111!11!11!",
  comedy: "The Simpsons",
  drama:  "Drama belongs on the stage, bro"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), "comedy")
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), "sci_fi")
assertEqual(findKeyByValue(bestTVShowsByGenre, "Drama belongs on the stage, bro"), "drama")