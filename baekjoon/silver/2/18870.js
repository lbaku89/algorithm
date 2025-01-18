// https://www.acmicpc.net/problem/18870

// let testCase = "5\n2 4 -10 4 -9";
// let input = testCase.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let origin = input[1].split(" ").map((n) => Number(n));
let arr = [...origin];

arr.sort((a, b) => a - b);

// 중복제거
let set = new Set(arr);
let map = {};

[...set].forEach((item, i) => {
    map[item] = i;
});

let answer = "";
origin.forEach((n) => {
    answer += `${map[n]} `;
});

console.log(answer.trim());
