import getInput from "/Users/abarron/dev/advent-of-code-2021/utils/getInput.mjs";

const day6Input = getInput(6);
const puzzleInput = day6Input.split(",").map((input) => parseInt(input));
const exampleInput = [3, 4, 3, 1, 2];

const part1Function = (input) => {
  const days = 80;
  // console.log(`Part 1 - Initial State - ${input}`);

  let newFishToAdd = 0;
  for (let i = 0; i < days; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] === 0) {
        input[j] = 6;
        newFishToAdd++;
      } else {
        input[j] = input[j] - 1;
      }
    }
    for (let j = 0; j < newFishToAdd; j++) {
      input.push(8);
    }
    newFishToAdd = 0;
    // console.log(`Part 1 - Day ${i + 1}- ${input}`);
  }
  return input.length;
};

const part2Function = (input) => {
  const days = 256;
  // console.log(`Part 2 - Initial State - ${input}`);

  for (let i = 0; i < days; i++) {
    const ageZeroFish = input[0];

    input.forEach((value, index) => {
      if (index === 0) {
        return;
      }
      if (index === 7) {
        input[6] = ageZeroFish + value;
        return;
      }
      input[index - 1] = value;
    });

    input[8] = ageZeroFish;
    // console.log(`Part 2 - Day ${i + 1} - ${input}`);
  }

  return input.reduce((curr, prev) => curr + prev, 0);
};

const condenseArray = (input) => {
  const fishByAge = [];
  for (let i = 0; i < 9; i++) {
    fishByAge.push(input.filter((fish) => fish === i).length || 0);
  }
  return fishByAge;
};

export const part1 = () => {
  return part1Function(exampleInput);
};

export const part2 = () => {
  return part2Function(condenseArray(puzzleInput));
};
