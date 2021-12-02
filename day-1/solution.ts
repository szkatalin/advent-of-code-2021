import {promises as fs} from "fs";

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

const generateSlidingWindowSums = (report) =>
    report.map(
        (r, i, report) =>
            report[i] &&
            report[i + 1] &&
            report[i + 2] &&
            report[i] + report[i + 1] + report[i + 2]
    );

const main = () => {
    readInputFile().then((report) => {
        console.log("Day 1");
        console.log("---- Part 1 ----");
        console.log(countIncreased(report));

        console.log("---- Part 2 ----");
        console.log(countIncreased(generateSlidingWindowSums(report)));
    });
};

main();
