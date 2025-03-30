// https://leetcode.com/problems/ant-on-the-boundary/description/

// 시간 복잡도 O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let position = 0;
    let count = 0;
    for (let i = 0; i < nums.length; ++i) {
        position += nums[i];
        if (position === 0) {
            ++count;
        }
    }

    return count;
};
