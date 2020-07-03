const test = require('ava');
const noop = require('.');

test('should return nothing', t => {
  t.is(noop(), undefined);
});
