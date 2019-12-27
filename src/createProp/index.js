/**
 * {@link https://jsfiddle.net/VovanR/4e1wj2gb/}
 * @version 0.0.1
 *
 * @param {*} value
 * @returns {function}
 *
 * @example
 * const name = createProp('Foo');
 * name();
 * //=> "Foo"
 * name('Bar');
 * name();
 * //=> "Bar"
 */
function createProp(value) {
  let _value = value;

  return function (value) {
    if (typeof value === 'undefined') {
      return _value;
    }

    _value = value;
  };
}

module.exports = createProp;
