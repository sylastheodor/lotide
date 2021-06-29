const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', function () {
  it('returns [1, 2, 3, 4] array as [2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  it('returns the middle element in an odd numbered array', () => {
    assert.deepEqual(middle([1, 3, 5, 6, 9]), [5])
  });
});

