import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day1Input = getInput(1);
const puzzleInput = day1Input.split("\n").map((item) => parseInt(item));

const countLargerMeasurements = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      count++;
    }
  }
  return count;
};

const countLargerWindows = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (i + 3 < input.length) {
      const previousWindow = input[i] + input[i + 1] + input[i + 2];
      const newWindow = input[i + 1] + input[i + 2] + input[i + 3];
      if (newWindow > previousWindow) {
        count++;
      }
    }
  }
  return count;
};

export const part1 = () => {
  return countLargerMeasurements(puzzleInput);
};

export const part2 = () => {
  return countLargerWindows(puzzleInput);
};
