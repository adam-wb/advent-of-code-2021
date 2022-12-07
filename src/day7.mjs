import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day7Input = getInput(7);
const puzzleInput = day7Input.split(",").map((input) => parseInt(input));

const part1Function = (input) => {
  const minPos = Math.min(...input);
  const maxPos = Math.max(...input);

  const costs = [];
  for (let i = minPos; i <= maxPos; i++) {
    costs.push(converge(input, i));
  }

  return Math.min(...costs);
};

const converge = (input, position) =>
  input.reduce((prev, curr) => Math.abs(curr - position) + prev, 0);

const part2Function = (input) => {
  const minPos = Math.min(...input);
  const maxPos = Math.max(...input);

  const costs = [];
  for (let i = minPos; i <= maxPos; i++) {
    costs.push(convergeV2(input, i));
  }

  return Math.min(...costs);
};

const convergeV2 = (input, position) =>
  input.reduce((prev, curr) => rampUp(Math.abs(curr - position)) + prev, 0);

const rampUp = (number) => {
  return 0.5 * number * (number + 1);
};

export const part1 = () => {
  return part1Function(puzzleInput);
};

export const part2 = () => {
  return part2Function(puzzleInput);
};
