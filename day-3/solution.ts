import {promises as fs} from "fs";

export const readInputFile = async (): Promise<number[][]> =>
    await fs.readFile("day-3/input.txt", "utf8").then((data) => {
        return data
            .split(/\r?\n/)
            .filter((x) => !!x)
            .map((line) => line.split("").map((char) => +char));
    });

const part1 = (data: number[][]) => {
    console.log("Part 1");
    let gammaRate, epsilonRate;
    gammaRate = epsilonRate = "";

    let i, j;

    for (j = 0; j < data[j].length; ++j) {
        let t, f;
        t = f = 0;
        for (i = 0; i < data.length; ++i) {
            !!data[i][j] ? ++f : ++t;
        }
        gammaRate += t > f ? 0 : 1;
        epsilonRate += t > f ? 1 : 0;
    }

    console.log(
        parseInt(gammaRate, 2),
        " * ",
        parseInt(epsilonRate, 2),
        " = ",
        parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
    );
};

const part2 = (data: number[][]) => {
    console.log("Part 2");
};

const main = () => {
    readInputFile().then((data) => {
        console.log("Day 3");
        part1(data);
        part2(data);
    });
};

main();
