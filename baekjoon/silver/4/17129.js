let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

let obj = {};

for (let i = 0; i < input.length; ++i) {
    if (i <= N - 1) {
        let [url, pw] = input[i].split(" ");
        obj[url] = pw;
        continue;
    }

    console.log(obj[input[i]]);
}
