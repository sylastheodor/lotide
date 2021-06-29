const head = require('../head')
const assert = require('chai').assert;

describe("#head", () => {
  it("returns Lighthouse for ['Lighthouse']", () => {
    assert.strictEqual(head(["Lighthouse"]), "Lighthouse");
  });
  it("returns false for []", () => {
    assert.notEqual(head([]), '5'); 
  });
});
