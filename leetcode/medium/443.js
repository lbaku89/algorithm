// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let n = chars.length;

    let i = 0;
    j = 0;

    while (j < n) {
        let char = chars[j];
        let cnt = 0;
        while (char === chars[j]) {
            ++cnt;
            ++j;
        }

        if (cnt === 1) {
            chars[i] = char;
            ++i;
        } else {
            chars[i] = char;
            ++i;
            cnt.toString()
                .split("")
                .forEach((str) => {
                    chars[i] = str;
                    ++i;
                });
        }
    }

    chars.length = i;

    return chars.length;
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // 6
console.log(compress(["a"])); // 1
