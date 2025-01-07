// https://www.acmicpc.net/problem/5430

// testCase
// let data = "4\nRDD\n4\n[1,2,3,4]\nDD\n1\n[42]\nRRD\n6\n[1,1,2,3,5,8]\nD\n0\n[]";
// let data = "1\nD\n1\n[22]";
// let data = "1\nDD\n1\n[1]";
// let data = "1\nR\n0\n[]";
// let data = "4\nRD\n0\n[]\nRRRRRRRRRR\n1\n[1]\nRDRD\n4\n[1,2,3,4]\nR\n1\n[12]";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let testCaseCnt = Number(input.shift());

let answer = "";

for (let i = 0; i < input.length; i += 3) {
    let isError = false;
    let direction = "left";
    let commendArr = input[i].split("");

    let numCnt = Number(input[i + 1]);

    let numArr = input[i + 2];

    // 배열이 애초에 비어있는 경우
    if (numCnt === 0) {
        if (commendArr.includes("D")) {
            answer += "error\n";
        } else {
            answer += "[]\n";
        }
        continue;
    }

    // 양사이드 [] 삭제 후 배열로 만듬
    numArr = numArr.slice(1, numArr.length - 1);
    numArr = numArr.split(",").map((n) => Number(n));

    for (let j = 0; j <= commendArr.length - 1; ++j) {
        let commend = commendArr[j];
        if (commend === "R") {
            // 뒤집기
            direction = direction === "left" ? "right" : "left";
        } else if (commend === "D") {
            if (numArr.length === 0) {
                isError = true;
                break;
            }

            if (direction === "left") {
                numArr.shift();
            } else if (direction === "right") {
                numArr.pop();
            }
        }
    }

    if (isError) {
        answer += "error\n";
    } else {
        if (direction === "left") {
            answer += `[${numArr.join(",")}]\n`;
        } else if (direction === "right") {
            answer += `[${numArr.reverse().join(",")}]\n`;
        }
    }
}

console.log(answer);
