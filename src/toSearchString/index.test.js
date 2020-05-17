const test = require('ava');
const toSearchString = require('.');

test('should return search string', t => {
  t.is(toSearchString({type: 'span', text: 'Foo'}), 'type=span&text=Foo');
});

test('should skip nil values', t => {
  t.is(toSearchString({foo: undefined, bar: 1}), 'bar=1');
});
