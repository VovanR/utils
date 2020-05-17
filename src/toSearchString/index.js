/**
 * {@link https://jsfiddle.net/VovanR/jnvcp9f1/}
 * @version 0.0.1
 *
 * @param {object} json
 * @returns {string}
 *
 * @example
 * toSearchString({type: 'span', text: 'Foo'});
 * //=> "type=span&text=Foo"
 */
function toSearchString(json) {
  const result = [];

  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'undefined') {
      continue;
    }

    result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }

  return result.join('&');
}

module.exports = toSearchString;
