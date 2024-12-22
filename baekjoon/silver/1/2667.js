// https://www.acmicpc.net/problem/2667

// test case
// let data = "7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

// 지도 2차원 배열로 저장
let map = [];
// 단지별 집 수를 담을 배열
let apartment = [];

input.forEach((str) => {
    let line = str.split("").map((n) => Number(n));
    map.push(line);
});

// 단지내 아파트 갯수 count
let apartmentCnt = 0;

let recursive = (r, c) => {
    // 동서남북
    let diffRow = [0, 0, 1, -1];
    let diffCol = [1, -1, 0, 0];

    for (let direction = 0; direction < 4; ++direction) {
        let [nextRow, nextCol] = [r + diffRow[direction], c + diffCol[direction]];

        if (map[nextRow] && map[nextRow][nextCol] && map[nextRow][nextCol] === 1) {
            map[nextRow][nextCol] = 0;
            ++apartmentCnt;
            recursive(nextRow, nextCol);
        }
    }
};

for (let row = 0; row < N; ++row) {
    for (let col = 0; col < N; ++col) {
        if (map[row][col] === 1) {
            apartmentCnt = 1;
            map[row][col] = 0;
            recursive(row, col);
            apartment.push(apartmentCnt);
        }
    }
}

apartment.sort((a, b) => a - b);
console.log(String(apartment.length));
console.log(apartment.join("\n"));
