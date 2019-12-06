import test from 'ava';
import createProp from '.';

test('should create property with initial value', t => {
  const name = createProp('Foo');
  t.is(name(), 'Foo');
});

test('should update property with new value', t => {
  const name = createProp('Foo');
  name('Bar');
  t.is(name(), 'Bar');
});
