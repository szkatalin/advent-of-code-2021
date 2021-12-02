import {promises as fs} from "fs";

export const readInputFile = async (): Promise<string[][]> =>
    await fs.readFile("day-2/input.txt", "utf8").then((data) => {
      return data
          .split(/\r?\n/)
          .filter((x) => !!x)
          .map((v) => v.split(" "));
    });

const main = () => {
  let x, y;
  x = y = 0;

  readInputFile().then((data) => {
    console.log("Day 2");

    console.log("---- Part 1 ----");
    data.forEach((v) =>
        v[0] === "forward"
            ? (x += +v[1])
            : v[0] === "up"
                ? (y -= +v[1])
                : (y += +v[1])
    );
    console.log(`(${x}; ${y}) X*Y = ${x * y}`);

    console.log("---- Part 2 ----");
    let aim = 0;
    x = y = aim;

    data.forEach((v) => {
      if (v[0] === "forward") {
        x += +v[1];
        y += aim * +v[1];
      } else {
        v[0] === "down" ? (aim += +v[1]) : (aim -= +v[1]);
      }
    });
    console.log(`(${x}; ${y}) aim: ${aim} X*Y = ${x * y}`);
  });
};

main();
