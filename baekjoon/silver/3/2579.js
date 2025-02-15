// https://www.acmicpc.net/problem/2579

// testCase
//https://breathtaking-life.tistory.com/150
// let data = "6\n10\n20\n15\n25\n10\n20";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [stairCnt, ...stairs] = input.map((n) => Number(n));

let dp = Array.from({ length: stairCnt }, () => {
    return [0, 0];
});

// [연속으로 밟는경우, 연속으로 밟지 않는 경우]
dp[0] = [stairs[0], stairs[0]];
dp[1] = [dp[0][0] + stairs[1], stairs[1]];

for (let idx = 2; idx < stairCnt; ++idx) {
    dp[idx][0] = stairs[idx] + dp[idx - 1][1];
    dp[idx][1] = stairs[idx] + Math.max(dp[idx - 2][0], dp[idx - 2][1]);
}

console.log(Math.max(dp[stairCnt - 1][0], dp[stairCnt - 1][1]));
