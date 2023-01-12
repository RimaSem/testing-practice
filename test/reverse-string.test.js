import { reverseString } from "../js/reverse-string";

test("Return reversed string", () => {
  expect(reverseString("qwerty")).toStrictEqual("ytrewq");
  expect(reverseString("tic-tac-toe")).toStrictEqual("eot-cat-cit");
  expect(reverseString("LONG&JOHN")).toStrictEqual("NHOJ&GNOL");
  expect(reverseString("LONG JOHN")).toStrictEqual("NHOJ GNOL");
});
