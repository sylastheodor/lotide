const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🌸😌🌸 Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`🦠😵‍💫🦠 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function (text) {
  //first thing seperate all the letters
  //then for every new letter create an object propert
  //assign that propert how many times it
  let trim = text.trim()
  let countString = trim.split('')
  let returnObj = {}
  console.log(countString)
  for (letters of countString){
    for (property in returnObj){
      if (letters !== property){
        returnObj[countstring[letters]] = 0
      }
    } //looping thru the array of letters. if the letter doesn't exist in the 
    console.log("Now the return Obj is", returnObj)
    //return obj then CREATE it.
    

  }
}

countLetters("I am getting a tattoo")