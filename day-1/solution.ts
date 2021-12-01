import { promises as fs } from "fs";

export const readInputFile = async (): Promise<number[]> =>
  await fs.readFile("day-1/input.txt", "utf8").then((data) => {
    return data
      .split(/\r?\n/)
      .filter((x) => !!x)
      .map((v) => +v);
  });

export const countIncreased = (report: number[]): number => {
  return report.filter((r, i, report) => i !== 0 && r > report[i - 1]).length;
};

const main = () => {
  readInputFile().then((report) => {
    console.log(countIncreased(report));
  });
};

main();
