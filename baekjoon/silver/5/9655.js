// https://www.acmicpc.net/problem/9655

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let N = Number(input);
let answer = "SK";

if (N % 2 === 0) {
    answer = "CY";
}
console.log(answer);
