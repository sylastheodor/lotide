const findKeyByValue = function(object, value){
  for (var properties in object) {
  var val = object[properties];
  if (val === value){
    return properties
  }
  }
};

module.exports = findKeyByValue
