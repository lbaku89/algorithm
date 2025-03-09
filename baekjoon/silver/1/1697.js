// https://www.acmicpc.net/submit/1697

// let testCase = "5 17";
// let input = testCase.toString().trim();
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let [N, K] = input.split(" ").map((n) => Number(n));

let dp = Array(100001).fill(Infinity);
let endPoint = 100000;
let answer = undefined;
dp[N] = 0;

let queue = [[N, 0]];
while (queue.length) {
    let [point, time] = queue.shift();

    if (point === K) {
        answer = time;
        break;
    }

    if (point * 2 <= endPoint && dp[point * 2] > time + 1) {
        dp[point * 2] = time + 1;
        queue.push([point * 2, time + 1]);
    }

    if (point + 1 <= endPoint && dp[point + 1] > time + 1) {
        dp[point + 1] = time + 1;
        queue.push([point + 1, time + 1]);
    }

    if (point - 1 >= 0 && dp[point - 1] > time + 1) {
        dp[point - 1] = time + 1;
        queue.push([point - 1, time + 1]);
    }
}
console.log(answer);

// bfs로 접근 -> 시간초과
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

// let [N, M] = input.split(" ").map((n) => Number(n));

// let queue = [[N, 0]];
// let answer = undefined;

// while (queue.length) {
//     let [position, time] = queue.shift();

//     if (position === M) {
//         answer = time;
//         break;
//     }

//     if (position * 2 <= 100000) {
//         queue.push([position * 2, time + 1]);
//     }

//     if (position + 1 <= 100000) {
//         queue.push([position + 1, time + 1]);
//     }

//     if (position - 1 >= 0) {
//         queue.push([position - 1, time + 1]);
//     }
// }

// console.log(answer);
