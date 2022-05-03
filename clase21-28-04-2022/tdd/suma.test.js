const suma = require('./suma.js')

test("Test función suma", () => {
  expect(suma(1,2)).toBe(3)
})