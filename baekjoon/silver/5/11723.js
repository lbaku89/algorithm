// https://www.acmicpc.net/problem/11723
// 해당 문제는 node.js로 풀었지만 제출이 node 가 없음음

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [operateCnt, ...operateList] = input;

operateCnt = Number(operateCnt);

let map = new Map();
let answer = "";

operateList.forEach((line) => {
    let operate = line.split(" ");
    let type = operate[0];
    if (operate.length === 2) {
        let num = Number(operate[1]);

        switch (type) {
            case "add":
                if (map[num] !== 1) {
                    map.set(num, 1);
                }
                break;
            case "remove":
                if (map[num] === 1) {
                    map.set(num, 0);
                }
                break;
            case "check":
                if (map[num] === 1) {
                    answer += "1\n";
                } else {
                    answer += "0\n";
                }
                break;
            case "toggle":
                if (mpa[num] === 1) {
                    map.set(num, 0);
                } else {
                    map.set(num, 1);
                }
                break;
        }
    } else {
        //  all or empty
        if (type === "all") {
            map = new Map();
            for (let i = 1; i <= 20; ++i) {
                map.set(i, 1);
            }
        }
        if (type === "empty") {
            map = new Map();
        }
    }
});

console.log(answer);
