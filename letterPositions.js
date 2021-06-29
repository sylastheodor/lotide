let letterPositions = function(sentence) {
  let textArray = sentence.split('')
  let returnObj = {}
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] in returnObj) {
      returnObj[textArray[i]].push(i)
    } else {
      returnObj[textArray[i]] = [i]
    }
  }
  return returnObj
};

module.exports = letterPositions

