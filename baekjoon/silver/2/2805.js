// https://www.acmicpc.net/problem/2805

// testCase
// let data = "4 7\n20 15 10 17";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((n) => Number(n));

let line = input[1].split(" ").map((n) => Number(n));
let max = Math.max(...line);
let [left, right] = [0, max];
let mid = Math.floor((left + right) / 2);

while (left !== mid) {
    let treeLength = 0;

    line.forEach((height) => {
        if (height > mid) {
            treeLength = treeLength + height - mid;
        }
    });
    if (treeLength >= M) {
        left = mid;
        mid = Math.floor((left + right) / 2);
    } else {
        right = mid;
        mid = Math.floor((left + right) / 2);
    }
}

console.log(mid);
