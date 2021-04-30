const { expect } = require("@jest/globals");
const convertToMeters = require("../testFunction/convertToMeters");

test("Convert Centimeters to metres succesfully", () => {
  expect(convertToMeters(175)).toBe(1.75);
});
