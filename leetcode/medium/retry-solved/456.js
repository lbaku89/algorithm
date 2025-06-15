// https://leetcode.com/problems/132-pattern/

/**
 * @todo 유사한 다음문제 Leet code 739 Daily temperature 풀어보기 (monotonic stack관련 )
 */

// time complexity O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
    let minArr = new Array(nums.length).fill(0);
    nums.forEach((v, idx) => {
        if (idx !== 0) {
            if (v <= minArr[idx - 1]) {
                minArr[idx] = v;
            } else {
                minArr[idx] = minArr[idx - 1];
            }
        } else {
            minArr[idx] = v;
        }
    });

    // console.log("minArr", minArr);
    let stack = [];

    for (let i = nums.length - 1; i >= 0; --i) {
        let n = nums[i];

        if (n > minArr[i]) {
            while (stack.length && stack[stack.length - 1] <= minArr[i]) {
                stack.pop();
            }

            if (stack.length && stack[stack.length - 1] < n) {
                return true;
            }

            stack.push(n);
        }
    }
    return false;
}

// test case
console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
console.log(find132pattern([2, 3, 1, 2]));
