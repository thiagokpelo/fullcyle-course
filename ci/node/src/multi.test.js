const mult = require('./mult')

test('mult two files', () => {
  const result = mult(1, 2);
  expect(result).toBe(2);
})
