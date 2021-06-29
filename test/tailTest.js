const tail = require('../tail')
const assert = require('chai').assert

describe('#tail', function() {
  it("returns [2, 3, 4] from [1, 2, 3, 4]", () => {
  assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]); //looks like deepEqual is used for arrays/objects
});
})
