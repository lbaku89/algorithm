// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    let period = s.slice(-2);

    let [hh, mm, ss] = [s.slice(0, 2), s.slice(3, 5), s.slice(6, 8)];
    if (period === "AM" && hh === "12") {
        hh = "00";
    } else if (period === "PM") {
        if (hh !== "12") {
            hh = String(Number(hh) + 12);
        }
    }
    return hh + ":" + mm + ":" + ss;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
