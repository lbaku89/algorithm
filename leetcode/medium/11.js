// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [lIdx, rIdx] = [0, height.length - 1];

    let max = (rIdx - lIdx) * Math.min(height[lIdx], height[rIdx]);

    while (lIdx < rIdx) {
        let left = height[lIdx];
        let right = height[rIdx];

        if (left > right) {
            --rIdx;
        } else {
            ++lIdx;
        }

        max = Math.max(max, (rIdx - lIdx) * Math.min(height[lIdx], height[rIdx]));
    }

    return max;
};

// test case
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
