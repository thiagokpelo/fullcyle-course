const sum = require('./sum')

test('sum two files', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})
