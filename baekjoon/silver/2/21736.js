//https://www.acmicpc.net/problem/15663

// TEST CASE
// let data = "3 5\nOOOPO\nOIOOX\nOOOXP";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift();

// 캠퍼스 지도를를 2차원 배열로 생성
let map = [];
let startRow = undefined,
    startColumn = undefined;

for (let row = 0; row < input.length; ++row) {
    let line = input[row].split("");
    line.forEach((flag, column) => {
        if (flag === "I") {
            // 도연이 위치 확인
            startRow = row;
            startColumn = column;
        }
    });
    map.push(line);
}

let personCnt = 0;
let dfs = (nowR, nowC) => {
    if (map[nowR][nowC] === "P") {
        ++personCnt;
    }
    map[nowR][nowC] = "X";

    // 동서남북
    let nextR = [nowR, nowR, nowR + 1, nowR - 1];
    let nextC = [nowC + 1, nowC - 1, nowC, nowC];

    for (let i = 0; i <= 3; ++i) {
        if (map[nextR[i]] && map[nextR[i]][nextC[i]] && map[nextR[i]][nextC[i]] !== "X") {
            dfs(nextR[i], nextC[i]);
        }
    }
};

dfs(startRow, startColumn);

console.log(personCnt === 0 ? "TT" : personCnt);
