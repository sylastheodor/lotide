const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌎🌹🌎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤯🥀🤯 Assertion Failed: ${actual} === ${expected}`);
  }
};

//assertEqual is only for primitive objects
//could use it to compare the values of an object property
//could use it to LOOP thru the object properties and return a true if they match
//would it be better to make an array of keys from one object then compare it's length and
//values to the second object??
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let result;
  for(keys2 in object2){
    if (object1[keys2] !== object2[keys2]){
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}



// const ab = {a:"1", b:"2"};
// const ba = {b:"2", a:"1",};
// assertEqual(eqObjects(ab, ba), true)

// const abc = { a: "1", b: "2", c: "3"};
// assertEqual(eqObjects(ab, abc), false)

const cd = { c: "1", d: ["2", 3], e: 0 };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false)

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false)
