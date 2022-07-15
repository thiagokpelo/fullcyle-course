const div = require('./div')

test('div two files', () => {
  const result = div(4, 2);
  expect(result).toBe(2);
})
