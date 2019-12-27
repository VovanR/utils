/**
 * 11 → 10 for example
 *
 * @version 0.0.1
 *
 * @param {number} number
 * @returns {number}
 *
 * @example
 * numberToEven(1); //=> 0
 * numberToEven(2); //=> 2
 * numberToEven(5); //=> 4
 */
function numberToEven(number) {
  return number & ~1;
}

module.exports = numberToEven;
