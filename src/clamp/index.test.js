const test = require('ava');
const clamp = require('.');

test('should return minimum if value lt minimum', t => {
  t.is(clamp(1, 3, 9), 3);
});

test('should return value if value gt minimum and lt maximum', t => {
  t.is(clamp(5, 3, 9), 5);
});

test('should return maximum if value gt maximum', t => {
  t.is(clamp(22, 3, 9), 9);
});
