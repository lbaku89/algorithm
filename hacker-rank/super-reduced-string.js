// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

"use strict";

const fs = require("fs");

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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    const sArr = [...s];

    for (let i = 0; i < sArr.length - 1; ++i) {
        if (i < 0) {
            i = 0;
        }
        if (sArr[i] === sArr[i + 1]) {
            sArr.splice(i, 2);
            i = i - 2;
        }
    }

    return sArr.length ? sArr.join("") : "Empty String";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + "\n");

    ws.end();
}
