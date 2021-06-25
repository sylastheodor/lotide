const takeUntil = function(array, callback) {
  results = []
  for (elm of array){
    if (!callback(elm)) {
      results.push(elm);
    } else {
      return results;
    }
  }
  return results;
};