// https://www.acmicpc.net/problem/1764

// let testCase = "3 4\nohhenrie\ncharlie\nbaesangwook\nobama\nbaesangwook\nohhenrie\nclinton";
// let input = testCase.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let set = new Set();

for (let i = 0; i < N; ++i) {
    set.add(input[i]);
}

let answer = [];
for (let i = N; i < N + M; ++i) {
    if (set.has(input[i])) {
        answer.push(input[i]);
    }
}

if (answer.length !== 0) {
    answer.sort();
    console.log(answer.length + "\n" + answer.join("\n"));
} else {
    console.log(0);
}
