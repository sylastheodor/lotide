const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected) === true) {
    console.log(`πΈππΈ Assertion Passed: ${actual} === ${expected}`);
  } else if(eqArrays(actual, expected) === false) {
    console.log(`π¦ π΅βπ«π¦  Assertion Failed: ${actual} === ${expected}`);
  }
};


module.exports = assertArraysEqual