import { capitalize } from "../js/capitalize";

test("First letter capitalized", () => {
  expect(capitalize("manchester")).toStrictEqual("Manchester");
  expect(capitalize("leTTers")).toStrictEqual("Letters");
  expect(capitalize("RESOLUTION")).toStrictEqual("Resolution");
  expect(capitalize("Something")).toStrictEqual("Something");
});

test("Return empty string when input empty", () => {
  expect(capitalize("")).toStrictEqual("");
});

test("Return single capital letter when input single letter", () => {
  expect(capitalize("d")).toStrictEqual("D");
  expect(capitalize("T")).toStrictEqual("T");
});
