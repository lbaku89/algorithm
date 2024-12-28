// https://www.acmicpc.net/problem/10026

// test case
// let data = "5\nRRRBB\nGGBBB\nBBBRR\nBBRRR\nRRRRR";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let map1 = [];
let map2 = [];

let map1GroupCnt = 0;
let map2GroupCnt = 0;

input.forEach((line) => {
    map1.push(line.split(""));
    map2.push(line.replaceAll("R", "G").split(""));
});

let makeGroup = (now_row, now_column, group_color, ref_map) => {
    let diffRow = [0, 0, 1, -1];
    let diffCol = [1, -1, 0, 0];

    for (let i = 0; i < 4; ++i) {
        let nextRow = now_row + diffRow[i];
        let nextColumn = now_column + diffCol[i];

        if (ref_map[nextRow] && ref_map[nextRow][nextColumn] && ref_map[nextRow][nextColumn] === group_color) {
            ref_map[nextRow][nextColumn] = "X";
            makeGroup(nextRow, nextColumn, group_color, ref_map);
        }
    }
};

for (let row = 0; row < N; ++row) {
    for (let column = 0; column < N; ++column) {
        if (map1[row][column] !== "X") {
            let color = map1[row][column];
            map1[row][column] = "X";
            makeGroup(row, column, color, map1);
            ++map1GroupCnt;
        }

        if (map2[row][column] !== "X") {
            let color = map2[row][column];
            map2[row][column] = "X";
            makeGroup(row, column, color, map2);
            ++map2GroupCnt;
        }
    }
}

let answer = `${map1GroupCnt} ${map2GroupCnt}`;
console.log(answer);
