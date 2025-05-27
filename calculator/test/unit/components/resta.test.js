const resta = require("../../../src/components/resta.js");

test("Esta prueba unitaria debe restar 5 - 3 y si el resultado da 2 la prueba unitaria es correcta", () => {
  expect(resta(5, 3)).toBe(2);
});
