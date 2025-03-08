// https://school.programmers.co.kr/learn/courses/30/lessons/389481

let strToIndex = (str) => {
    let num = 0;
    for (let i = 0; i < str.length; ++i) {
        num = 26 * num + (str[i].charCodeAt(0) - 96);
    }
    return num;
};

let indexToStr = (index) => {
    let str = "";
    while (index > 0) {
        let remain = (index - 1) % 26;
        str = String.fromCharCode(remain + 97) + str;
        index = Math.floor((index - 1) / 26);
    }
    return str;
};

function solution(n, bans) {
    bans = bans.sort((a, b) => {
        let aIndex = strToIndex(a);
        let bIndex = strToIndex(b);
        return aIndex - bIndex;
    });

    let bansArr = [];
    bans.forEach((str) => {
        let num = strToIndex(str);
        bansArr.push(num);
    });

    let targetN = n;
    for (let i = 0; i < bansArr.length; ++i) {
        if (bansArr[i] <= targetN) {
            targetN = targetN + 1;
        }
    }

    let answer = indexToStr(targetN);
    return answer;
}

// 첫 합격 코드 (하단)
//
// let strToIndex = (str) => {
//     const dictionary = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8,
//         i: 9,
//         j: 10,
//         k: 11,
//         l: 12,
//         m: 13,
//         n: 14,
//         o: 15,
//         p: 16,
//         q: 17,
//         r: 18,
//         s: 19,
//         t: 20,
//         u: 21,
//         v: 22,
//         w: 23,
//         x: 24,
//         y: 25,
//         z: 26,
//     };

//     let num = 0;
//     for (let i = 0; i < str.length; ++i) {
//         num = 26 * num + dictionary[str[i]];
//     }
//     return num;
// };

// let indexToStr = (index) => {
//     const dictionary = {
//         0: "a",
//         1: "b",
//         2: "c",
//         3: "d",
//         4: "e",
//         5: "f",
//         6: "g",
//         7: "h",
//         8: "i",
//         9: "j",
//         10: "k",
//         11: "l",
//         12: "m",
//         13: "n",
//         14: "o",
//         15: "p",
//         16: "q",
//         17: "r",
//         18: "s",
//         19: "t",
//         20: "u",
//         21: "v",
//         22: "w",
//         23: "x",
//         24: "y",
//         25: "z",
//     };

//     let str = "";
//     while (index > 0) {
//         let remain = (index - 1) % 26;
//         str = dictionary[remain] + str;
//         index = Math.floor((index - 1) / 26);
//     }
//     return str;
// };

// function solution(n, bans) {
//     bans = bans.sort((a, b) => {
//         let aIndex = strToIndex(a);
//         let bIndex = strToIndex(b);
//         return aIndex - bIndex;
//     });

//     let bansArr = [];
//     bans.forEach((str) => {
//         let num = strToIndex(str);
//         bansArr.push(num);
//     });

//     let targetN = n;
//     for (let i = 0; i < bansArr.length; ++i) {
//         if (bansArr[i] <= targetN) {
//             targetN = targetN + 1;
//         }
//     }

//     let answer = indexToStr(targetN);
//     return answer;
// }
