// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = 0,
        min = Infinity;

    for (const n of arr) {
        if (n < min) {
            min = n;
        }
        if (n > max) {
            max = n;
        }
        sum += n;
    }

    console.log(`${sum - max} ${sum - min}`);
}

function main() {
    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
