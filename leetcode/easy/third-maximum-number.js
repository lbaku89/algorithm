// https://leetcode.com/problems/third-maximum-number/

//  시간 복잡도 O(NLogN)
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const sorted = [...new Set(nums)].sort((prev, next) => next - prev);

    let answer = undefined;
    for (let i = 0; i < 3; ++i) {
        const num = sorted[i];
        if (num === undefined) {
            return sorted[0];
        }

        answer = num;
    }

    return answer;
};
