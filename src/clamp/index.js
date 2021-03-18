/**
 * @version 0.0.1
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {function}
 *
 * @example
 * clamp(3, 5, 9);
 * //=> 5
 * clamp(7, 5, 9);
 * //=> 7
 * clamp(22, 5, 9);
 * //=> 9
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

module.exports = clamp;
