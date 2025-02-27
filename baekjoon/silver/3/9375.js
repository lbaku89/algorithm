// https://www.acmicpc.net/problem/9375

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let testCase = "2\n3\nhat headgear\nsunglasses eyewear\nturban headgear\n3\nmask face\nsunglasses face\nmakeup face";
let input = testCase.toString().trim().split("\n");

let answer = "";

for (let i = 1; i < input.length; ) {
    let obj = {};
    let clothCount = +input[i];

    for (let j = 1; j <= clothCount; ++j) {
        let [cloth, type] = input[i + j].split(" ");

        if (obj[type] === undefined) {
            obj[type] = 1;
        } else {
            ++obj[type];
        }
    }

    let typeArr = Object.keys(obj);
    // let typeCount = Object.keys(obj).length;
    // let mixArr = [];

    let temp = 0;

    const mix = (start, restPickCnt, pickedArr) => {
        if (restPickCnt === 0) {
            let cnt = 1;
            pickedArr.forEach((type) => {
                cnt = cnt * obj[type];
            });
            temp += cnt;
        }

        for (let z = start; z < typeArr.length; ++z) {
            pickedArr.push(typeArr[z]);
            mix(z + 1, restPickCnt - 1, pickedArr);
            pickedArr.pop();
        }
    };

    for (let k = 1; k <= typeArr.length; ++k) {
        mix(0, k, []);
    }

    answer += `${temp}\n`;

    i += clothCount + 1;
}
console.log(answer);
