// https://www.acmicpc.net/problem/11726

// let n = 9;
// let n = +input;

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const n = +input;
const dp = Array(n + 1).fill(0);

(dp[0] = 0), (dp[1] = 1), (dp[2] = 2);

for (let i = 3; i <= n; ++i) {
    dp[i] = (dp[i - 1] % 10007) + (dp[i - 2] % 10007);
}

console.log(dp[n] % 10007);
