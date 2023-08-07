import { ntw } from "./index";

describe("ntw", () => {
  it.each([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [21, "twenty one"],
    [22, "twenty two"],
    [33, "thirty three"],
    [40, "forty"],
    [50, "fifty"],
    [99, "ninety nine"],
    [100, "one hundred"],
    [101, "one hundred one"],
    [111, "one hundred eleven"],
    [120, "one hundred twenty"],
    [121, "one hundred twenty one"],
    [2572, "two thousand five hundred seventy two"],
    [12353, "twelve thousand three hundred fifty three"],
    [100000, "one hundred thousand"],
    [
      672343602049,
      "six hundred seventy two billion three hundred forty three million six hundred two thousand forty nine",
    ],
  ])("when given %s should output %s", (input, expected) => {
    expect(ntw(input)).toBe(expected);
  });
});
