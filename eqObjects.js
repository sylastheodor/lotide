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
  let objKeys1 = [];
  let length2 = 0;
  let result = false;
  for(keys1 in object1){
    objKeys1.push(keys1);
  }
  for(keys2 in object2){
    length2 += 1;
    if (object1[keys2] !== object2[keys2]){
      result = false;
    } else {
      result = true;
    }
  }
  if(objKeys1.length !== length2) {
    result = false;
  }
  return result;
}



const ab = {a:"1", b:"2", c:'the worst word', d: '2'};
const ba = {b:"2", a:"1", c:'the worst word', d: '2'};
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false)
