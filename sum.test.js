const sum = require("./sum.js");

describe("Test for sum fn", () => {
  test("Test for 2 +2 is 4 ", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("test for -5 + -5 is -10",()=>{
    expect(sum(-5,-5)).toBe(-10);
  })
});
