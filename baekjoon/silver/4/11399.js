// https://www.acmicpc.net/problem/11399

// test case
// let data = "5\n3 1 4 3 2";
// let input = data.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map((n) => Number(n));
arr.sort((a, b) => {
    return a - b;
});

let dp = Array(N).fill(0);
dp[0] = arr[0];

for (let i = 1; i < N; ++i) {
    dp[i] = dp[i - 1] + arr[i];
}

let answer = dp.reduce((acc, cur) => {
    return (acc += cur);
}, 0);

console.log(answer);
