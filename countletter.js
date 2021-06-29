const countLetters = function(text) {

  let countString = text.split(' ') 
  let returnObj = { }
  for (letters of countString.join('').split('')){
    if (returnObj[letters]) {
      returnObj[letters] += 1
    } else {
      returnObj[letters] = 1
    }
  }
  return returnObj 
}

module.exports = countLetters