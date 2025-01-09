// https://www.acmicpc.net/problem/1931
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let testCase = "11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14";
let input = testCase.toString().trim().split("\n");

let [N, ...arr] = input;

arr = arr.map((str) => {
    return str.split(" ").map((n) => Number(n));
});

arr.sort((prev, next) => {
    if (prev[1] === next[1]) {
        if (prev[0] === prev[1]) {
            return 1;
        } else if (next[0] === next[1]) {
            return -1;
        }
        return next[0] - prev[0];
    }

    return prev[1] - next[1];
});

answer = 1;

let lectureEndTime = arr[0][1];

for (let i = 1; i < Number(N); ++i) {
    let [startTime, endTime] = arr[i];
    if (lectureEndTime <= startTime) {
        ++answer;
        lectureEndTime = endTime;
    }
}

console.log(answer);
