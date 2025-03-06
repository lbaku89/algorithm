// https://www.acmicpc.net/problem/1244

let testCase = "8\n0 1 0 1 0 0 0 1\n2\n1 3\n2 3";

let input = testCase.toString().trim().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 남학생 1
// 여학생 2

let switchCount = Number(input[0]);

let switchArr = input[1].split(" ").map((n) => Number(n));
switchArr.unshift(undefined);
for (let i = 3; i < input.length; ++i) {
    let [gender, n] = input[i].split(" ").map((v) => Number(v));

    if (gender === 1) {
        // 남자
        let multipliedNum = n;
        while (multipliedNum <= switchCount) {
            switchArr[multipliedNum] = switchArr[multipliedNum] === 1 ? 0 : 1;
            multipliedNum += n;
        }
    } else {
        // 여자
        switchArr[n] = switchArr[n] === 0 ? 1 : 0;
        let left = n - 1,
            right = n + 1;

        while (left >= 1 && right <= switchCount && switchArr[left] === switchArr[right]) {
            switchArr[left] = switchArr[left] === 0 ? 1 : 0;
            switchArr[right] = switchArr[right] === 0 ? 1 : 0;
            left -= 1;
            right += 1;
        }
    }
}

switchArr.shift();
let answer = "";
let cnt = 0;
for (let i = 0; i < switchArr.length; ++i) {
    if (cnt !== 20) {
        answer += ` ${switchArr[i]}`;
        ++cnt;
    } else {
        answer += `\n${switchArr[i]}`;
        cnt = 1;
    }
}
console.log(answer.trim());
