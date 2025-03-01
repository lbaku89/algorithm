// https://www.acmicpc.net/problem/9375

// 이거 조합으로 최적화 하는 방법을 찾을 수 있다.
// let testCase = "2\n3\nhat headgear\nsunglasses eyewear\nturban headgear\n3\nmask face\nsunglasses face\nmakeup face";
// let input = testCase.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";

for (let i = 1; i < input.length; ) {
    let clothCnt = +input[i];

    let obj = {};

    for (let j = 1; j <= clothCnt; ++j) {
        let [cloth, type] = input[i + j].split(" ");
        if (obj[type] === undefined) {
            obj[type] = 1;
        } else {
            ++obj[type];
        }
    }

    let total = 1;
    Object.values(obj).forEach((v) => {
        total = total * (v + 1);
    });

    total -= 1;
    answer += `${total}\n`;

    i += clothCnt + 1;
}
console.log(answer.toString());
