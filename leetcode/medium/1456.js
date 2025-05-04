// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const isVowel = (cha) => {
        if (cha === "a" || cha === "e" || cha === "i" || cha === "o" || cha === "u") {
            return true;
        }
        return false;
    };

    let str = s.slice(0, k).split("");
    let cnt = 0;
    let idx = 0;
    for (let i = 0; i < str.length; ++i) {
        if (isVowel(str[i])) {
            ++cnt;
        }
    }

    let max = cnt;

    for (let i = k; i < s.length; ++i) {
        if (isVowel(str[idx])) {
            cnt = Math.max(0, cnt - 1);
        }

        if (isVowel(s[i])) {
            cnt = cnt + 1;
        }

        str[idx] = s[i];
        max = Math.max(max, cnt);
        idx = (idx + 1) % k;
    }

    return max;
};

// test case
console.log(maxVowels("novowels", 1));
console.log(maxVowels("pdzndkhhoujpqyex", 5));
