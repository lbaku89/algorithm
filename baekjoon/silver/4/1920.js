// https://www.acmicpc.net/problem/1920

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").map((n) => Number(n));
let set = new Set([...arr]);

let numberArr = input[3].split(" ").map((n) => Number(n));

let answer = "";
numberArr.forEach((searchN) => {
    if (set.has(searchN)) {
        answer += "1\n";
    } else {
        answer += "0\n";
    }
});

console.log(answer.trim());
