// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let oneCnt = 0;
    let flipped = 0;
    let max = 0;
    for (let i = 0; i < nums.length; ) {
        let n = nums[i];

        if (n) {
            // 1일때
            ++oneCnt;
        } else {
            // 0일때
            ++flipped;

            let first = nums[i - oneCnt];
            if (flipped > k) {
                // 뒤집은 갯수 최대를 넘을때

                if (first) {
                    let idx = i - oneCnt;

                    while (1) {
                        if (nums[idx] === 0) {
                            break;
                        }
                        --oneCnt;
                        ++idx;
                    }
                    //1일때
                } else {
                    //0일때
                    oneCnt = oneCnt;
                    flipped = k;
                }
            } else {
                // 뒤집은 갯수 최대를 넘지 않았을때
                ++oneCnt;
            }
        }

        // console.log("i", i, "oneCnt", oneCnt);
        max = Math.max(max, oneCnt);
        ++i;
    }
    return max;
};

// testCase
console.log(
    longestOnes([1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1], 8)
); //25
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); //6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); //10
