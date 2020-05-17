const test = require('ava');
const numberToEven = require('.');

test('should return even', t => {
  t.is(numberToEven(1), 0);
  t.is(numberToEven(2), 2);
  t.is(numberToEven(3), 2);
  t.is(numberToEven(5), 4);
  t.is(numberToEven(11), 10);
});
