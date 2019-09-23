var expect = require("chai").expect;
var isEven = require("../src/isEven");

describe("isEven()", function() {
  it("should check if the value is an even number", function() {
    expect(isEven(4)).to.equal(true);
  });

  it("should check if the value is an odd number", function() {
    expect(isEven(3)).to.equal(false);
  });

  it("should check the value if the value is a string", function() {
    expect(isEven("2")).to.equal(true);
  });

  it("should return false if the value is NaN", function() {
    expect(isEven("xyz")).to.equal(false);
  });
});
