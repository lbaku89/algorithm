// https://www.acmicpc.net/problem/11053

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = Number(input[0]);
let arr = input[1].split(" ").map((n) => Number(n));

let dp = Array(cnt).fill(1);

for (let i = 0; i < cnt; ++i) {
    let num = arr[i];
    let max = 1;
    for (let j = 0; j < i; ++j) {
        if (num > arr[j]) {
            max = Math.max(dp[j] + 1, max);
        }
    }
    dp[i] = max;
}
console.log(Math.max(...dp));
