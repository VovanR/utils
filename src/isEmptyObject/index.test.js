import test from 'ava';
import isEmptyObject from '.';

test('should return `true` for empty object', t => {
  t.is(isEmptyObject({}), true);
});

test('should return `false` for not empty object', t => {
  t.is(isEmptyObject({foo: 1}), false);
});
