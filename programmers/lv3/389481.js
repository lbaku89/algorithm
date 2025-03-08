// https://school.programmers.co.kr/learn/courses/30/lessons/389481

let dictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    0: "z",
};

const indexToString = (index) => {
    let str = "";
    while (index > 0) {
        let remain = index % 26;
        index = Math.floor(index / 26);
        str = dictionary[remain] + str;
    }
    return str;
};
const stringToIndex = (str) => {
    let num = 0;

    let strArr = str.split("").reverse();

    let digit = 0;

    for (let i = 0; i < strArr.length; ++i) {
        num += 26 ** digit * dictionary[strArr[i]];
        ++digit;
    }
    return num;
};
function solution(n, bans) {
    bans = bans.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    let bansArr = [];
    bans.forEach((str) => {
        let num = 0;

        let strArr = str.split("").reverse();

        let digit = 0;

        for (let i = 0; i < strArr.length; ++i) {
            num += 26 ** digit * dictionary[strArr[i]];
            ++digit;
        }

        bansArr.push(num);
    });

    let targetN = n;
    for (let i = 0; i < bansArr.length; ++i) {
        if (bansArr[i] <= targetN) {
            targetN = targetN + 1;
        }
    }

    let answer = indexToString(targetN);
    return answer;
}
console.log(solution(30, ["d", "e", "bb", "aa", "ae"]));
console.log(solution(7388, ["gqk", "kdn", "jxj", "jxi", "fug", "jxg", "ewq", "len", "bhc"]));
console.log(solution(10 ** 14, ["d", "e", "bb", "aa", "ae"]));
