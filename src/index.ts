const firstTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eigth",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const tensExponent = {
  2: "hundred",
  3: "thousand",
  6: "million",
  9: "billion",
  12: "trillion",
  15: "quadrillion",
  18: "quintillion",
};

export function ntw(value: number): string {
  if (typeof value !== "number") return "";
  if (value === 0) return firstTwenty[0];
  let result = "";
  while (value > 0) {
    if (value < 20) {
      result += " " + firstTwenty[value];
      value = 0;
    } else if (value < 100) {
      result += " " + tens[Math.floor(value / 10)];
      value = value % 10;
    } else if (value < 1000) {
      result +=
        " " + firstTwenty[Math.floor(value / 100)] + " " + tensExponent[2];
      value = value % 100;
    } else {
      const highestExponent = Math.floor(Math.log10(value));
      const exponentRemainder = highestExponent % 3;
      const exponentIndex = highestExponent - exponentRemainder;
      const exponentValue = Math.pow(10, exponentIndex);
      const exponentNumber = tensExponent[exponentIndex];
      const remainder = Math.floor(value / exponentValue);
      result += " " + ntw(remainder) + " " + exponentNumber;
      value = value % exponentValue;
    }
  }
  return result.trim();
}
