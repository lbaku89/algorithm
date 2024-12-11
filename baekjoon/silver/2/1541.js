// https://www.acmicpc.net/problem/1541

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let num = "";
let numArr = [];
for (let i = 0; i < input.length; ++i) {
    if (i === 0) {
        if (input[i] === "-") {
            num += input[i];
        } else {
            num += `+${input[i]}`;
        }
    } else {
        if (input[i] === "+" || input[i] === "-") {
            numArr.push(num);
            num = input[i];
        } else {
            num += input[i];
        }
    }

    if (i === input.length - 1) {
        numArr.push(num);
    }
}

let answer = 0;
for (let i = 0; i < numArr.length; ) {
    let n = numArr[i];
    if (n[0] === "-") {
        let temp = -1 * Number(n);
        let idx = i + 1;
        while (idx < numArr.length && numArr[idx].at(0) === "+") {
            temp += Number(numArr[idx]);
            idx = idx + 1;
        }

        answer -= temp;
        i = idx;
    } else {
        answer += Number(n);
        ++i;
    }
}
console.log(answer);
