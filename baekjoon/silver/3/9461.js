// https://www.acmicpc.net/problem/9461

// ts
// let data = "2\n6\n12";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseCount = Number(input.shift());

input = input.map((n) => Number(n));
let dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9]; // P(1) P(2) P(3) P(4) p(5) p(6) p(7) p(8) p(9) p(10)

let max = Math.max(...input);

for (let i = 11; i <= max; ++i) {
    dp[i] = dp[i - 1] + dp[i - 5];
}

input.forEach((N) => {
    console.log(dp[N]);
});
