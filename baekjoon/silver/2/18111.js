// https://www.acmicpc.net/problem/18111

// let test = "3 4 99\n0 0 0 0\n0 0 0 0\n0 0 0 1";
// let test = "3 4 1\n64 64 64 64\n64 64 64 64\n64 64 64 63";
// let test = "3 4 0\n64 64 64 64\n64 64 64 64\n64 64 64 63";
// let test = "2 2 1\n0 0\n0 0";
// let input = test.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [info, ...arr] = input;
let [N, M, B] = info.split(" ").map((n) => Number(n));
let set = [];
arr = arr.map((line) => {
    let lineArr = line.split(" ").map((n) => Number(n));

    lineArr.forEach((v) => {
        if (!set.includes(v)) {
            set.push(v);
        }
    });

    return lineArr;
});

let [minH, maxH] = [Math.min(...set), Math.max(...set)];
let spendTime = Infinity;
let proper_height = undefined;

for (let h = minH; h <= maxH; ++h) {
    if (h > 256) {
        break;
    }

    let block = B;
    let time = 0;
    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < M; ++c) {
            let height = arr[r][c];
            if (height !== h) {
                if (height > h) {
                    block += height - h;
                    time += 2 * (height - h);
                } else {
                    block -= h - height;
                    time += h - height;
                }
            }
        }
    }

    if (block >= 0 && time <= spendTime) {
        spendTime = time;
        proper_height = h;
    }
}

console.log(spendTime + " " + proper_height);
