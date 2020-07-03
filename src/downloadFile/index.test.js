const test = require('ava');
const downloadFile = require('.');

test('should be a function', t => {
  t.is(typeof downloadFile, 'function');
});
