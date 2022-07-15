const sub = require('./sub')

test('sub two files', () => {
  const result = sub(1, 2);
  expect(result).toBe(-1);
})
