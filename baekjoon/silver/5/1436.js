// https://www.acmicpc.net/problem/1436
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// const n = +input;
const n = 500;

let count = 0;
let number = 0;
let answer = undefined;

while (count !== n) {
    ++number;

    if (String(number).includes("666")) {
        ++count;
        answer = number;
    }
}

console.log(answer);
