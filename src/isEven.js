/**
 * Checks if the number is an even number.
 * @param {Number} value - the value you want to check
 * @returns {Boolean}
 * */
function isEven(value) {
  /* Just to be safe, convert any value to a Number type */
  const convertedValue = Number(value);

  return convertedValue % 2 == 0;
}

module.exports = isEven;
