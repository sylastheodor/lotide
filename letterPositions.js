const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

let letterPositions = function(sentence) {
  let textArray = sentence.split('')
  let returnObj = {}
  for (let i = 0; i < textArray.length; i++) {
    console.log("textArray[i]:", textArray[i]);
    console.log("i:", i)
    if (textArray[i] in returnObj) {
      returnObj[textArray[i]].push(i)
    } else {
      returnObj[textArray[i]] = [i]
    }
  }
  console.log("returnObj:", returnObj)
}

  letterPositions("lllaa")