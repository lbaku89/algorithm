// https://leetcode.com/problems/defuse-the-bomb/

// time complexity O(n * |k|)
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    let ref = code.concat(code);
    let arr = new Array(code.length).fill(0);

    if (k > 0) {
        for (let i = 0; i < code.length; ++i) {
            let sum = 0;
            for (let j = i + 1; j <= i + k; ++j) {
                sum += ref[j];
            }
            arr[i] = sum;
        }
    }

    if (k < 0) {
        for (let i = code.length; i < ref.length; ++i) {
            let sum = 0;
            for (let j = i - 1; j >= i + k; --j) {
                sum += ref[j];
            }

            arr[i - code.length] = sum;
        }
    }

    return arr;
};

// test-case
console.log(decrypt([2, 4, 9, 3], -2));
