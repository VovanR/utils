/**
 * {@link https://jsfiddle.net/VovanR/jnvcp9f1/}
 * @version 0.0.1
 *
 * @param {object} json
 * @returns {string}
 *
 * @example
 * toSearchString({type: 'span', text: 'Foo'})
 * //=> "type=span&text=Foo"
 */
function toSearchString(json) {
  const res = [];

  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'undefined') {
      continue;
    }

    res.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }

  return res.join('&');
}

module.exports = toSearchString;
