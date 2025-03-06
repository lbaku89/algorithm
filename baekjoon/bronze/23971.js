// https://www.acmicpc.net/problem/23971

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let [H, W, N, M] = input.split(" ").map((n) => Number(n));

let answer = 0;
answer = Math.ceil(W / (M + 1)) * Math.ceil(H / (N + 1));
console.log(answer);
