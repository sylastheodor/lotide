const without = function(source, itemsToRemove) {
  let output = source
  for (let i = 0; i < source.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
        output.splice(source.indexOf(itemsToRemove[j]), 1) // this feels elite
      }
    }
  }
  return output
} 

module.exports = without