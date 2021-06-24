const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function (text) {
  //first thing seperate all the letters
  //then for every new letter create an object propert
  //assign that propert how many times it
  let countString = text.split(' ') //split into JUST words
  let returnObj = { }
  console.log("countString: ", countString.join('').split('')) //split into JUST the letters
  for (letters of countString.join('').split('')){
    if (returnObj[letters]) {
      returnObj[letters] += 1
    } else {
      returnObj[letters] = 1
    }
  }
  console.log("returnObj:", returnObj)
  return returnObj 
}
//this should be all gucci 
countLetters("Three e\'s and two d\'s")