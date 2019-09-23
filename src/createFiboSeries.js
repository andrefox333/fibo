/**
 * Generates the Fibonacci sequence based on value value
 * @param {Number} value
 * @returns {Array}
 */
function createFiboSeries(value) {
  /* Get the fibo going with some initial values */
  const fibo = [0, 1];

  for (let index = 2; index < value; index++) {
    const previous = fibo[index - 2];
    const current = fibo[index - 1];
    fibo.push(previous + current);
  }

  return fibo;
}

module.exports = createFiboSeries;
