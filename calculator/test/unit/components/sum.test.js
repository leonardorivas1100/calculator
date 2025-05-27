const sum = require("../../../src/components/sum.js");

test("Este testeo se basa es que se debe sumar 1 + 2 y si el resultado es 3, este testeo es correcto", () => {
  expect(sum(1, 2)).toBe(3);
});
