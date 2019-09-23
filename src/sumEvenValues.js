var createFiboSeries = require("./createFiboSeries");
var isEven = require("./isEven");

/**
 * Returns the sum of all of the even numbers in a Fibonacci sequence
 * @param {Number} value - The length of term you want to go up to.
 * @param {Number} max - Max value of the term you want to add up to.
 * @returns {Number} The total sum of all of the even numbers
 */
function sumEvenValues(values, max = 4e6) {
  const convertedValues = Number(values);

  if (Number.isNaN(convertedValues)) {
    return "Value must be an valid number";
  }

  const fibo = createFiboSeries(convertedValues);

  /* Once we have the fibo series array, we'll reduce it to a single number.
   * And that single number is the sum of all even numbers that is less than or equal to the max param
   */
  return fibo.reduce((accum, currentValue) => {
    /* We'll need to check first if the value is even and below the max value */
    if (isEven(currentValue) && currentValue <= max) {
      accum += currentValue;
    }

    return accum;
  }, 0);
}

module.exports = sumEvenValues;
