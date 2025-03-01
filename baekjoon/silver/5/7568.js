// https://www.acmicpc.net/problem/7568

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [peopleCount, ...info] = input;

info = info.map((str) => {
    return str.split(" ").map((n) => Number(n));
});

let answer = [];
for (let i = 0; i < info.length; ++i) {
    let [weight, height] = info[i];

    let cnt = 0;

    info.forEach(([compareW, compareH]) => {
        if (compareW > weight && compareH > height) {
            ++cnt;
        }
    });
    answer.push(cnt + 1);
}

console.log(answer.join(" "));
