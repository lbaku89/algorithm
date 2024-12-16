//https://www.acmicpc.net/problem/15663

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((n) => Number(n));
let arr = input[1].split(" ").map((n) => Number(n));

// 정렬
arr.sort((a, b) => a - b);

let set = new Set([]);

// 숫자 세트를 담을 array
let group = [];
// 숫자 세트의 인덱스 그룹
let indexGroup = [];

let dfs = (count) => {
    if (count === M) {
        set.add(group.join(" "));
        return;
    }

    for (let i = 0; i < arr.length; ++i) {
        if (!indexGroup.includes(i)) {
            group.push(arr[i]);
            indexGroup.push(i);
            dfs(count + 1);
            group.pop();
            indexGroup.pop();
        }
    }
};

dfs(0, 0);

set.forEach((item) => {
    console.log(item);
});
