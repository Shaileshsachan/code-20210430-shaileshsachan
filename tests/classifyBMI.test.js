const { expect } = require("@jest/globals");
const classifyBMI = require("../testFunction/classifyBMI");

test("Classify the category and health risk correctly", () => {
  expect(classifyBMI(25.21)).toBe("Enhanced Risk");
});

test("Classify the category and health risk correctly ", () => {
  expect(classifyBMI(36)).toBe("Very high Risk");
});

test("Classify the category and health risk correctly ", () => {
  expect(classifyBMI(10)).toBe("Malnutrition risk");
});

test("Classify the category and health risk correctly ", () => {
  expect(classifyBMI(100)).toBe("Very high Risk");
});

test("Classify the category and health risk correctly ", () => {
  expect(classifyBMI(20)).toBe("Low Risk");
});
