const { expect } = require("@jest/globals");
const BMI = require("../testFunction/BMI");

test("Get BMI", () => {
  expect(BMI(1.75, 75)).toBe(24.49);
});
