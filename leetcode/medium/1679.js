// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75
// time complexity O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let obj = {};
    let answer = 0;
    for (const n of nums) {
        obj[n] = (obj[n] || 0) + 1;
    }

    Object.keys(obj).forEach((key) => {
        if (k - Number(key) > 0 && obj[k - Number(key)] > 0 && obj[key] > 0) {
            if (k - Number(key) === Number(key)) {
                let temp = Math.floor(obj[key] / 2);
                obj[key] = obj[key] - temp * 2;
                answer += temp;
            } else {
                let min = Math.min(obj[k - Number(key)], obj[key]);
                answer += min;
                obj[key] = obj[key] - min;
                obj[k - Number(key)] = obj[k - Number(key)] - min;
            }
        }
    });

    return answer;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));
