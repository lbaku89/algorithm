// https://www.acmicpc.net/problem/11727

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let dp = Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[N]);
