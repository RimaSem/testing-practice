import { calculator } from "../js/calculator";

test("Add two numbers", () => {
  expect(calculator.add(2, 3)).toStrictEqual(5);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.add(-8, 0.2)).toBeCloseTo(-7.8);
});

test("Subtract two numbers", () => {
  expect(calculator.subtract(10, 3)).toStrictEqual(7);
  expect(calculator.subtract(-125, 10)).toStrictEqual(-135);
  expect(calculator.subtract(5.5, 2.1)).toBeCloseTo(3.4);
});

test("Divide two numbers", () => {
  expect(calculator.divide(100, 2)).toStrictEqual(50);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
  expect(calculator.divide(52, 1)).toStrictEqual(52);
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(5, 3)).toStrictEqual(15);
  expect(calculator.multiply(105, -5)).toStrictEqual(-525);
  expect(calculator.multiply(1.5, 7.8)).toStrictEqual(11.7);
});
