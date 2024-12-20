// https://www.acmicpc.net/problem/1927

// test case
// let data =
//     "8\n1 1 0 0 0 0 1 1\n1 1 0 0 0 0 1 1\n0 0 0 0 1 1 0 0\n0 0 0 0 1 1 0 0\n1 0 0 0 1 1 1 1\n0 1 0 0 1 1 1 1\n0 0 1 1 1 1 1 1\n0 0 1 1 1 1 1 1";

// let input = data.toString().trim().split("\n");

let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let map = [];

for (let i = 0; i < input.length; ++i) {
    let line = input[i].split(" ").map((n) => Number(n));
    map.push(line);
}

let blue = 0;
let white = 0;

const dfs = (startR, startC, cnt) => {
    if (cnt === 1) {
        if (map[startR][startC] === 1) {
            blue++;
        } else {
            white++;
        }
        return;
    }

    let color = map[startR][startC];
    for (let i = startR; i < startR + cnt; ++i) {
        for (let j = startC; j < startC + cnt; ++j) {
            if (color !== map[i][j]) {
                let half = cnt / 2;
                dfs(startR, startC, half);
                dfs(startR + half, startC, half);
                dfs(startR, startC + half, half);
                dfs(startR + half, startC + half, half);
                return;
            }
        }
    }
    if (color === 1) {
        ++blue;
    } else {
        ++white;
    }
};

dfs(0, 0, N);

console.log(`${white}\n${blue}`);
