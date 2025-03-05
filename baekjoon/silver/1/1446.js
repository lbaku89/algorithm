// https://www.acmicpc.net/problem/1446

// let testCase = "5 150\n0 50 10\n0 50 20\n50 100 10\n100 151 10\n110 140 90";
// let input = testCase.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, D] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let dp = Array(D + 1).fill(0);

let shortcut = input.map((str) => {
    return str.split(" ").map((n) => Number(n));
});

shortcut.sort((a, b) => {
    if (b[1] !== a[1]) {
        return a[1] - b[1];
    } else {
        return a[2] - b[2];
    }
});

for (let i = 1; i <= D; ++i) {
    dp[i] = dp[i - 1] + 1;

    for (let j = 0; j < N; ++j) {
        let [start, end, length] = shortcut[j];
        if (end === i) {
            dp[i] = Math.min(dp[i], dp[start] + length);
        }
    }
}

console.log(dp[D]);

// console.log(dp);
// console.log(dp.slice(90, 140));
// console.log("dp[50]>", dp[50]);
// console.log("dp[100]>", dp[100]);
