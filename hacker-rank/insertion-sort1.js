// https://www.hackerrank.com/challenges/insertionsort1/problem?isFullScreen=true

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
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here

    let min = arr[n - 1];
    let endFlag = false;
    for (let i = n - 1; i >= 0; --i) {
        if (arr[i - 1] && arr[i - 1] > min) {
            arr[i] = arr[i - 1];
        } else {
            arr[i] = min;
            min = arr[i - 1];
            endFlag = true;
        }

        console.log(arr.join(" "));
        if (endFlag) break;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
