import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day1Input = getInput(2);
const puzzleInput = day1Input.split("\n").map((item) => {
  const instruction = item.split(" ");
  return { direction: instruction[0], amount: parseInt(instruction[1]) };
});

const setCourse = () => {
  let state = { position: 0, depth: 0 };
  for (const { direction, amount } of puzzleInput) {
    if (direction === "forward") {
      state.position += amount;
      continue;
    }
    if (direction === "down") {
      state.depth += amount;
    } else {
      state.depth -= amount;
    }
  }
  return state.position * state.depth;
};

const setCourseWithAim = () => {
  let state = { position: 0, depth: 0, aim: 0 };
  for (const { direction, amount } of puzzleInput) {
    if (direction === "forward") {
      state.position += amount;
      state.depth += state.aim * amount;
      continue;
    }
    if (direction === "down") {
      state.aim += amount;
    } else {
      state.aim -= amount;
    }
  }
  return state.position * state.depth;
};

export const part1 = () => {
  return setCourse(puzzleInput);
};

export const part2 = () => {
  return setCourseWithAim(puzzleInput);
};
