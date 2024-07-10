// Credited: https://www.npmjs.com/package/round-to

function round(
  method: "round" | "ceil" | "floor",
  number: number,
  precision = 4
) {
  if (precision === Number.POSITIVE_INFINITY) return number;
  if (!Number.isInteger(precision)) {
    throw new TypeError("Expected precision to be an integer");
  }

  const isRoundingAndNegative = method === "round" && number < 0;
  if (isRoundingAndNegative) {
    number = Math.abs(number);
  }

  const power = 10 ** precision;

  let result = Math[method](+(number * power).toPrecision(15)) / power;

  if (isRoundingAndNegative) result = -result;

  return result;
}

export const roundTo = round.bind(undefined, "round");
// export const roundToUp = round.bind(undefined, "ceil");
// export const roundToDown = round.bind(undefined, "floor");
