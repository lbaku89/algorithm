// https://www.acmicpc.net/problem/9251
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let [strA, strB] = input.split("\n");

let dp = Array.from({ length: strA.length + 1 }, () => {
    return Array(strB.length + 1).fill(0);
});

for (let row = 1; row <= strA.length; ++row) {
    for (let col = 1; col <= strB.length; ++col) {
        if (strA[row - 1] === strB[col - 1]) {
            dp[row][col] = dp[row - 1][col - 1] + 1;
        } else {
            dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
        }
    }
}

console.log(dp[strA.length][strB.length]);
