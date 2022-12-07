import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day4Input = getInput(4);
const puzzleInput = parsePuzzleInput();
const parsePuzzleInput = () => {
  const parts = day4Input.split("\n\n").map((input) => input.trim());
  const numbers = parts[0]
    .split(",")
    .trim()
    .map((number) => parseInt(number));
  const remaining = parts.slice(1);
  const grids = remaining
    .split("\n")
    .trim()
    .split("")
    .map((number) => parseInt(number));
  return { numbers, grids };
};
const exampleInput = [
  [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ],

  [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ],

  [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ],
  [
    ([14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7]),
  ],
];

const part1Function = (input) => {
  // TODO
};

const part2Function = (input) => {
  // TODO
};

export const part1 = () => {
  return part1Function(puzzleInput);
};

export const part2 = () => {
  return part2Function(puzzleInput);
};
