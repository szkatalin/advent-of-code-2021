import { promises as fs } from "fs";

let report: number[];

const readInputFile = async () => {
  await fs.readFile("day-1/input.txt", "utf8").then((r) => {
    report = r
      .split(/\r?\n/)
      .filter((x) => !!x)
      .map((v) => +v);
  });
};

const countIncreased = (): number => {
  let numberOfIncreasing: number = 0;
  for (let i = 0; i < report.length; i++) {
    if (report[i] > report[i - 1]) {
      ++numberOfIncreasing;
    }
  }
  return numberOfIncreasing;
};

const main = () => {
  readInputFile().then(() => {
    console.log(countIncreased());
  });
};

main();
