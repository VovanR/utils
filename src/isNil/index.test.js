import test from 'ava';
import isNil from '.';

test('should return `true` for nil values', t => {
  t.is(isNil(null), true);
  t.is(isNil(undefined), true);
  t.is(isNil(), true);
});

test('should return `false` for not nil values', t => {
  t.is(isNil(false), false);
  t.is(isNil(0), false);
  t.is(isNil(''), false);
  t.is(isNil(NaN), false);
});
