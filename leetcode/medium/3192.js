// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/

// run-time 5ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flipped = false;
    let cnt = 0;

    for (const num of nums) {
        if ((num === 0 && !flipped) || (num === 1 && flipped)) {
            ++cnt;
            flipped = !flipped;
        }
    }
    return cnt;
};

// run-time 6ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flipped = false;
    let cnt = 0;

    for (const num of nums) {
        if (num === 0 && !flipped) {
            ++cnt;
            flipped = !flipped;
        } else if (num === 1 && flipped) {
            ++cnt;
            flipped = !flipped;
        }
        // 0 || true  ++cnt
        // 0 || false

        // 1 || 0   skip
        // 1 || 1   ++cnt
    }
    return cnt;
};

// run time 8ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    return nums.reduce((acc, cur) => {
        if (cur === 0 && acc % 2 === 0) {
            return acc + 1;
        } else if (cur === 1 && acc % 2 === 1) {
            return acc + 1;
        }
        return acc;
    }, 0);
};

// run time 17ms
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flipCnt = 0;
    nums.forEach((num) => {
        if (flipCnt % 2 === 0) {
            if (num === 0) {
                ++flipCnt;
            }
        } else {
            if (num === 1) {
                ++flipCnt;
            }
        }
    });

    return flipCnt;
};
