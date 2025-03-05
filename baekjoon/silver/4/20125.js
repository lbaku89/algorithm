// https://www.acmicpc.net/problem/20125

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

const isInner = (r, c) => {
    return r >= 0 && r < N && c >= 0 && c < N;
};
let heart = [undefined, undefined];
for (let r = 0; r < N; ++r) {
    for (let c = 0; c < N; ++c) {
        // 위,아래,좌측,우측 좌표위치
        let nextPosition = [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ];

        let isHeart = true;
        for (let i = 0; i < 4; ++i) {
            let [aroundR, aroundC] = nextPosition[i];

            if (isInner(aroundR, aroundC) && input[aroundR][aroundC] === "*") {
                continue;
            } else {
                isHeart = false;
                break;
            }
        }

        if (isHeart) {
            heart = [r, c];
            break;
        }
    }
}

let headLength = 0;
let checkPoint = [heart[0] - 1, heart[1]];
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++headLength;
    --checkPoint[0];
}

let leftArm = 0;
checkPoint = [heart[0], heart[1] - 1];
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++leftArm;
    --checkPoint[1];
}

let rightArm = 0;
checkPoint = [heart[0], heart[1] + 1];
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++rightArm;
    ++checkPoint[1];
}

let waist = 0;
checkPoint = [heart[0] + 1, heart[1]];
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++waist;
    ++checkPoint[0];
}

--checkPoint[0];

let base = [checkPoint[0], checkPoint[1]];

checkPoint = [base[0] + 1, base[1] - 1];
let leftLeg = 0;
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++leftLeg;
    ++checkPoint[0];
}

checkPoint = [base[0] + 1, base[1] + 1];
let rightLeg = 0;
while (isInner(checkPoint[0], checkPoint[1]) && input[checkPoint[0]][checkPoint[1]] === "*") {
    ++rightLeg;
    ++checkPoint[0];
}

let answer = `${heart[0] + 1} ${heart[1] + 1}\n${leftArm} ${rightArm} ${waist} ${leftLeg} ${rightLeg}`;
console.log(answer);

// 다른 풀이
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let N = Number(input.shift());

// const isInner = (r, c) => {
//     return r >= 0 && r < N && c >= 0 && c < N;
// };
// let heart = [undefined, undefined];
// for (let r = 0; r < N; ++r) {
//     for (let c = 0; c < N; ++c) {
//         // 위,아래,좌측,우측 좌표위치
//         let nextPosition = [
//             [r - 1, c],
//             [r + 1, c],
//             [r, c - 1],
//             [r, c + 1],
//         ];

//         let isHeart = true;
//         for (let i = 0; i < 4; ++i) {
//             let [aroundR, aroundC] = nextPosition[i];

//             if (isInner(aroundR, aroundC) && input[aroundR][aroundC] === "*") {
//                 continue;
//             } else {
//                 isHeart = false;
//                 break;
//             }
//         }

//         if (isHeart) {
//             heart = [r, c];
//             break;
//         }
//     }
// }

// const getLength = (point, repeatFn) => {
//     let length = 0;
//     while (isInner(point[0], point[1]) && input[point[0]][point[1]] === "*") {
//         ++length;
//         repeatFn();
//     }
//     return length;
// };

// let checkPoint = [heart[0] - 1, heart[1]];
// let headLength = getLength(checkPoint, () => {
//     --checkPoint[0];
// });

// checkPoint = [heart[0], heart[1] - 1];
// let leftArm = getLength(checkPoint, () => {
//     --checkPoint[1];
// });

// checkPoint = [heart[0], heart[1] + 1];
// let rightArm = getLength(checkPoint, () => {
//     ++checkPoint[1];
// });

// checkPoint = [heart[0] + 1, heart[1]];
// let waist = getLength(checkPoint, () => {
//     ++checkPoint[0];
// });

// --checkPoint[0];
// let base = [checkPoint[0], checkPoint[1]];

// checkPoint = [base[0] + 1, base[1] - 1];
// let leftLeg = getLength(checkPoint, () => {
//     ++checkPoint[0];
// });

// checkPoint = [base[0] + 1, base[1] + 1];
// let rightLeg = getLength(checkPoint, () => {
//     ++checkPoint[0];
// });

// let answer = `${heart[0] + 1} ${heart[1] + 1}\n${leftArm} ${rightArm} ${waist} ${leftLeg} ${rightLeg}`;
// console.log(answer);
