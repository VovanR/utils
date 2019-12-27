/**
 * Object is empty or not
 *
 * {@link https://stackoverflow.com/a/34491966/1284255}
 * @version 0.0.1
 *
 * @param {Object} obj
 * @returns {boolean}
 *
 * @example
 * isEmptyObject({}); //=> true
 * isEmptyObject({foo: 1}); //=> false
 */
function isEmptyObject(obj) {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

module.exports = isEmptyObject;
