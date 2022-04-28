import randomiseObject from './randomise-object'

const obj = {
  name: 'Tom',
  country: 'Chile',
  age: 30,
}

test('the object length to be preserved', () => {

  expect(Object.keys(randomiseObject(obj)).length).toBe(3);

})

test('the order of keys should be maintained', () => {

  expect(Object.keys(randomiseObject(obj))).toEqual(Object.keys(obj));

})