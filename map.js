const map = (array, func) => {
  result = []
  for(elm of array){
    result.push(func(elm))
  }
  return result
}

module.exports = map