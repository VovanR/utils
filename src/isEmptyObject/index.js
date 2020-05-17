/**
 * Object is empty or not
 *
 * {@link https://stackoverflow.com/a/34491966/1284255}
 * @version 0.0.1
 *
 * @param {Object} object
 * @returns {boolean}
 *
 * @example
 * isEmptyObject({}); //=> true
 * isEmptyObject({foo: 1}); //=> false
 */
function isEmptyObject(object) {
  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }

  return true;
}

module.exports = isEmptyObject;
