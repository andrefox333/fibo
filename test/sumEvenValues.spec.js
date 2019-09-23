var expect = require("chai").expect;
var sumEvenValues = require("../src/sumEvenValues");

describe("sumEvenValues()", function() {
  it("should sum all of the even values of a fibo series", function() {
    const expectedValue = 4613732;
    const assertValue = sumEvenValues(1000000);
    expect(assertValue).to.equal(expectedValue);
  });

  it("should sum all of the even values of a fibo series with max input", function() {
    const expectedValue = 44;
    const assertValue = sumEvenValues(1000, 100);
    expect(assertValue).to.equal(expectedValue);
  });

  it("should error out if the value is NaN", function() {
    const expectedValue = "Value must be an valid number";
    const assertValue = sumEvenValues("xyz");
    expect(assertValue).to.equal(expectedValue);
  });
});
