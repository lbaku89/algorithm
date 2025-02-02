// https://www.acmicpc.net/problem/11047

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map((n) => Number(n));

let answer = 0;

for (let i = N; i >= 1; --i) {
    let coin = Number(input[i]);

    if (parseInt(K / coin) > 0) {
        answer += parseInt(K / coin);
        K = K % coin;
    }
}
console.log(answer);
