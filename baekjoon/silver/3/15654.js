// https://www.acmicpc.net/problem/15654

// let data = "3 1\n4 5 2";
// let data = "4 2\n9 8 7 1";
// let input = data.split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let num_arr = input[0].split(" ").map((n) => Number(n));

// 정렬
num_arr.sort((a, b) => a - b);

let dfs = (arr, picked) => {
    if (arr.length === M) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = 0; i < num_arr.length; ++i) {
        if (!picked.includes(i)) {
            arr.push(num_arr[i]);
            picked.push(i);
            dfs(arr, picked);
            picked.pop();
            arr.pop();
        }
    }
};

for (let i = 0; i < num_arr.length; ++i) {
    dfs([num_arr[i]], [i]);
}
