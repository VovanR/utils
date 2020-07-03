/* global document */

/**
 * @version 0.0.1
 *
 * @param {string} url
 * @param {string} [filename]
 *
 * @example
 * downloadFile('https://example.com/some_file.txt');
 * downloadFile('https://example.com/some_file.txt', 'SomeFile.txt');
 */
function downloadFile(url, filename) {
  const $link = document.createElement('a');
  $link.style.display = 'none';
  $link.setAttribute('download', filename || null);
  $link.setAttribute('href', url);
  document.body.append($link);
  $link.click();
  document.body.remove($link);
}

module.exports = downloadFile;
