const tail = require('../tail')
const assertArraysEqual = require('../assertArraysEqual')

const words = [1, 2, 3, 4];
tail(words);
assertArraysEqual(tail(words), [2, 3, 4]);