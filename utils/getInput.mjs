import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getInput = (day) => {
  return fs
    .readFileSync(`${__dirname}/../input/day${day}.txt`)
    .toString("utf-8")
    .trim();
};

export default getInput;
