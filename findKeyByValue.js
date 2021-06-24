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
    console.log("properties:", properties)
  }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Freaking NEWS, DUDE!!!!111!11!11!",
  comedy: "The Simpsons",
  drama:  "Drama belongs on the stage, bro"
};

findKeyByValue(bestTVShowsByGenre, "The Simpsons")