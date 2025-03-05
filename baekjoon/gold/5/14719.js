// https://www.acmicpc.net/problem/14719

// let testCase = "4 4\n3 0 1 4";
// let input = testCase.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [H, W] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let map = Array.from({ length: H }, () => {
    return Array(W).fill(0);
});

let arr = input[0].split(" ").map((n) => Number(n));

arr.forEach((height, column) => {
    for (let i = 0; i < height; ++i) {
        map[H - 1 - i][column] = 1;
    }
});

// 위에서 아래로 체크하면서 내려와야 함
let answer = 0;
let temp = 0;
let flag = undefined;
for (let r = 0; r < H; ++r) {
    flag = 0;
    for (let c = 0; c < W; ++c) {
        if (flag === 1) {
            if (map[r][c] === 0) {
                ++temp;
            } else {
                answer += temp;
                temp = 0;
            }
        } else {
            // flag =0 일때
            if (map[r][c] === 1) {
                flag = 1;
                temp = 0;
            } else {
                continue;
            }
        }
    }
}

console.log(answer);
