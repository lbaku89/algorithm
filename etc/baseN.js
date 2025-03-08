let dictionary = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
};

// 16진수를 10진수로 변환 하면?
const hexToDecimal = (str) => {
    let num = 0;
    for (let i = 0; i < str.length; ++i) {
        num = num * 16 + dictionary[str[i]];
    }
    return num;
};

// 10진수를 16진수로
const decimalToHex = (num) => {
    if (num === 0) return "0";
    let answer = "";
    while (num > 0) {
        let remain = num % 16;
        num = Math.floor(num / 16);
        answer = dictionary[remain] + answer;
    }
    return answer;
};

console.log(hexToDecimal("1a")); // 26
console.log(decimalToHex(26)); // 1a
console.log(hexToDecimal("0")); // 0
console.log(decimalToHex(0));
