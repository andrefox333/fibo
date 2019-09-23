var expect = require("chai").expect;
var createFiboSeries = require("../src/createFiboSeries");

describe("createFiboSeries()", function() {
  it("should return a fibonacci series", function() {
    const expectedValue = [0, 1, 1, 2, 3, 5];
    const assertValue = createFiboSeries(6);
    expect(assertValue).to.eql(expectedValue);
  });
});
