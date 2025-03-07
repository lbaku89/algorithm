// https://www.acmicpc.net/problem/13305

// let testCase = "4\n2 3 1\n5 2 4 1";
// let testCase = "4\n3 3 4\n1 1 1 1";

// let input = testCase.toString().trim().split("\n");

// 100 점
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let roadArr = input[1].split(" ").map((n) => BigInt(n));
let priceArr = input[2].split(" ").map((n) => BigInt(n));

let price = priceArr[0];
let answer = price * roadArr[0];

for (let i = 1; i < roadArr.length; ++i) {
    price = price > priceArr[i] ? priceArr[i] : price;
    let added = price * roadArr[i];
    answer += added;
}
console.log(String(answer));

// 58 점
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let roadArr = input[1].split(" ").map((n) => Number(n));
// let priceArr = input[2].split(" ").map((n) => Number(n));

// let price = priceArr[0];
// let answer = price * roadArr[0];

// for (let i = 1; i < roadArr.length; ++i) {
//     price = price > priceArr[i] ? priceArr[i] : price;
//     let added = price * roadArr[i];
//     answer += added;
// }
// console.log(answer);
