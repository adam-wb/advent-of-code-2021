import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day3Input = getInput(3);
const puzzleInput = day3Input.split("\n").map((input) => input.trim());

const powerConsumption = (input) => {
  const transformedInput = [];
  for (let i = 0; i < input[0].length; i++) {
    transformedInput.push("");
  }

  for (const binary of input) {
    for (let i = 0; i < binary.length; i++) {
      transformedInput[i] = transformedInput[i].concat(binary.charAt(i));
    }
  }

  const gammaArr = transformedInput.map((binary) => getMostCommonBit(binary));
  const epsilonArr = gammaRate.map((bit) => (bit === "0" ? "1" : "0"));

  const gammaString = flattenStringArray(gammaArr);
  const epsilonString = flattenStringArray(epsilonArr);
  const gammaDec = binaryStringToInt(gammaString);
  const epsilonDec = binaryStringToInt(epsilonString);

  return gammaDec * epsilonDec;
};

const lifeSupportRating = (input) => {
  const oxygenRating = getCandidates(input, true, 0, "1");
  const co2Rating = getCandidates(input, false, 0, "0");

  return binaryStringToInt(oxygenRating) * binaryStringToInt(co2Rating);
};

const getCandidates = (input, mostCommon, index) => {
  if (input.length === 1) {
    return input[0];
  }
  const commonBit = getMostCommonBit(
    flattenStringArray(input.map((binary) => binary.charAt(index)))
  );
  const leastCommonBit = commonBit === "1" ? "0" : "1";
  const searchBit = mostCommon ? commonBit : leastCommonBit;

  const candidates = input.filter(
    (binary) => binary.charAt(index) === searchBit
  );
  return getCandidates(candidates, mostCommon, index + 1);
};

export const part1 = () => {
  return powerConsumption(puzzleInput);
};

export const part2 = () => {
  return lifeSupportRating(puzzleInput);
};

const flattenStringArray = (stringArr) => {
  if (Array.isArray(stringArr)) {
    return stringArr.reduce((prev, curr) => prev.concat(curr));
  }
  return stringArr;
};

const binaryStringToInt = (binary) => parseInt(binary, 2);

const getMostCommonBit = (binaryString) => {
  let zeros = 0;
  let ones = 0;
  binaryString.split("").forEach((char) => (char === "1" ? ones++ : zeros++));

  return ones >= zeros ? "1" : "0";
};
