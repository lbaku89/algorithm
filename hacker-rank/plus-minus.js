// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let count = arr.length;
    let [positiveCount, negativeCount, zeroCount] = [0, 0, 0];

    for (const num of arr) {
        if (num > 0) {
            ++positiveCount;
        } else if (num < 0) {
            ++negativeCount;
        } else {
            ++zeroCount;
        }
    }

    [positiveCount, negativeCount, zeroCount].forEach((v) => {
        console.log((v / count).toFixed(6));
    });
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    plusMinus(arr);
}
