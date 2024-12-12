// https://www.acmicpc.net/problem/1463
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);

if (num === 1) {
    console.log(0);
    return;
}

let dp = Array(num + 1).fill(Infinity);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= num; ++i) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
}

console.log(dp[num]);
