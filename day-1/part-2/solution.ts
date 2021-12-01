import { countIncreased, readInputFile } from "../solution";

let slidingWindowSums: number[];

const main = () => {
  readInputFile().then((report) => {
    slidingWindowSums = report.map((r, i, report) => {
      return (
        report[i] &&
        report[i + 1] &&
        report[i + 2] &&
        report[i] + report[i + 1] + report[i + 2]
      );
    });
    console.log(countIncreased(slidingWindowSums));
  });
};

main();
