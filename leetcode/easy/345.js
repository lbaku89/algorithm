// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let str = s.split("");

    const isVowel = (cha) => {
        if (cha === " ") {
            return false;
        }
        switch (cha.toLowerCase()) {
            case "a":
                return true;
            case "e":
                return true;
            case "i":
                return true;
            case "o":
                return true;
            case "u":
                return true;
            default:
                return false;
        }
    };
    let arr = str.filter((v) => isVowel(v));

    let idx = arr.length - 1;
    for (let i = 0; i < str.length; ++i) {
        if (isVowel(str[i])) {
            str[i] = arr[idx];
            --idx;
        }
    }
    return str.join("");
};

// other solution
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let str = s.split("");

    const isVowel = (cha) => {
        if (cha === " ") {
            return false;
        }
        switch (cha.toLowerCase()) {
            case "a":
                return true;
            case "e":
                return true;
            case "i":
                return true;
            case "o":
                return true;
            case "u":
                return true;
            default:
                return false;
        }
    };

    let [left, right] = [0, str.length - 1];

    while (left < right) {
        if (isVowel(str[left])) {
            while (!isVowel(str[right])) {
                --right;
            }
            [str[left], str[right]] = [str[right], str[left]];
            --right;
        }
        ++left;
    }

    return str.join("");
};

// testCase
console.log(reverseVowels("IceCreAm"));
