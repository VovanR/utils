/**
 * {@link https://github.com/VovanR/utils}
 * @version 0.0.1
 *
 * @param {string[]} path
 * @param {Object} settings
 * @returns {Object}
 *
 * @example
 * getSettingByPath(['a', 'b'], {items: {a: {items: {b: {c: 1}}}}})
 * //=> {c: 1}
 */
function getSettingByPath(path, settings) {
  const getId = pathIndex => path[pathIndex];

  const findItem = (node, id) => node.items.find(item => item.id === id);

  const isEndOfPath = pathIndex => pathIndex === path.length;

  const findInNode = (pathIndex, node) => {
    if (isEndOfPath(pathIndex)) {
      return node;
    }

    const id = getId(pathIndex);
    const nextNode = findItem(node, id);
    const nextIndex = pathIndex + 1;
    return findInNode(nextIndex, nextNode);
  };

  return findInNode(0, settings);
}

module.exports = getSettingByPath;
