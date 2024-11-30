// https://www.acmicpc.net/problem/15652
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let [N, M] = input.split(" ").map((n) => Number(n));

const dfs = (start, arr) => {
    if (arr.length === M) {
        console.log(String(arr.join(" ")));
        return;
    }

    for (let i = start; i <= N; ++i) {
        arr.push(i);
        dfs(i, arr);
        arr.pop(i);
    }
};

dfs(1, []);
