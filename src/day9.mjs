import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day9Input = getInput(9);
const puzzleInput = day9Input.split("\n").map((input) =>
  input
    .trim()
    .split("")
    .map((num) => parseInt(num))
);
const exampleInput = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

const part1Function = (input) => {
  const riskLevels = [];
  const lowPointInitialiser = isLowPoint(input);
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const lowPointChecker = lowPointInitialiser(line, i);
    riskLevels.push(
      line
        .filter((number, index) => lowPointChecker(number, index))
        .map((lowPoint) => lowPoint + 1)
    );
  }
  return riskLevels.reduce(
    (prev, curr) => prev + curr.reduce((prev, curr) => prev + curr, 0),
    0
  );
};

const isLowPoint = (grid) => (line, lineNo) => (number, index) => {
  const previousRow = grid[lineNo - 1];
  const nextRow = grid[lineNo + 1];

  const leftNeighbour = line[index - 1] ?? 9;
  const rightNeighbour = line[index + 1] ?? 9;
  const upNeighbour = previousRow ? previousRow[index] : 9;
  const downNeighbour = nextRow ? nextRow[index] : 9;

  return (
    number < leftNeighbour &&
    number < rightNeighbour &&
    number < upNeighbour &&
    number < downNeighbour
  );
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
