import test from 'ava';
import getSettingByPath from '.';

const settings = {
  id: 'a',
  items: [
    {
      id: 'aa',
      value: 'aa_value'
    },
    {
      id: 'ab',
      items: [
        {
          id: 'aba',
          value: 'aba_value'
        },
        {
          id: 'abb',
          value: 'abb_value'
        }
      ]
    },
    {
      id: 'ac',
      items: [
        {
          id: 'aca',
          value: 'aca_value'
        },
        {
          id: 'acb',
          items: [
            {
              id: 'acba',
              value: 'acba_value'
            },
            {
              id: 'acbb',
              value: 'acbb_value'
            }
          ]
        }
      ]
    }
  ]
};

test('should return setting', t => {
  t.deepEqual(getSettingByPath(['aa'], settings), {
    id: 'aa',
    value: 'aa_value'
  });
});

test('should return setting deeper', t => {
  t.deepEqual(getSettingByPath(['ab', 'abb'], settings), {
    id: 'abb',
    value: 'abb_value'
  });
});

test('should return setting much deeper', t => {
  t.deepEqual(getSettingByPath(['ac', 'acb', 'acbb'], settings), {
    id: 'acbb',
    value: 'acbb_value'
  });
});
