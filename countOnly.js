const countOnly = function (array, targets) {
  const returnObj = {};
  for (arr of array) { //loop thru the array
    let findMe = targets[arr]; //variable is the property targets, with the name from the array
    if (findMe && !returnObj[arr]) { //if the variable matches, AND there is not a property matching in our return object
      returnObj[arr] = 0;  //then we create a property with the name from target in our return object
    }
    
    if (arr in returnObj) { //if that property already exists in our return ojbect
      returnObj[arr] += 1; //we add one (count it up)
    }
  }
  return returnObj;
};

module.exports = countOnly
