//https://www.acmicpc.net/problem/14940

// let data = "5 5\n1 1 1 1 1\n0 0 1 1 0\n1 0 2 1 1\n0 0 1 1 0\n1 0 1 1 1";

// let data =
// "15 15\n2 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 0 0 0 0 1\n1 1 1 1 1 1 1 1 1 1 0 1 1 1 1\n1 1 1 1 1 1 1 1 1 1 0 1 0 0 0\n1 1 1 1 1 1 1 1 1 1 0 1 1 1 1";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let s_row = undefined,
    s_column = undefined;

let map = [];
for (let i = 0; i < input.length; ++i) {
    let line = input[i].split(" ").map((n) => Number(n));

    line.forEach((v, column) => {
        if (v === 2) {
            s_row = i;
            s_column = column;
        }
    });
    map.push(line);
}

let answer = Array.from({ length: N }, () => {
    return Array(M).fill(Infinity);
});

answer[s_row][s_column] = 0;

let nextPoint = [[s_row, s_column]];

while (nextPoint.length) {
    let [now_r, now_c] = nextPoint.shift();
    let now_distance = answer[now_r][now_c];

    // 동서남북
    let dr = [0, 0, 1, -1];
    let dc = [1, -1, 0, 0];

    for (let i = 0; i < 4; ++i) {
        let nextRow = now_r + dr[i];
        let nextColumn = now_c + dc[i];

        if (map[nextRow] && map[nextRow][nextColumn] === 1 && now_distance + 1 < answer[nextRow][nextColumn]) {
            answer[nextRow][nextColumn] = now_distance + 1;
            nextPoint.push([nextRow, nextColumn]);
        }
    }
}
answer.forEach((line, row) => {
    line.forEach((distance, column) => {
        if (distance === Infinity) {
            if (map[row][column] === 0) {
                answer[row][column] = 0;
            } else if (map[row][column] === 1) {
                answer[row][column] = -1;
            }
        }
    });
});

let str = "";
answer.forEach((row) => {
    str = str + row.join(" ") + "\n";
});

console.log(str.trim());
