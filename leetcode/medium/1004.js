// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let zeroCnt = 0;
  let answer = 0;

  for (let right = 0; right < nums.length; ++right) {
    const n = nums[right];
    if (n === 0) {
      ++zeroCnt;
    }

    while (zeroCnt > k) {
      if (nums[left] === 0) {
        --zeroCnt;
      }
      ++left;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};

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

// other solution for sliding window
// time complexity O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let zeroCnt = 0;
  let max = 0;
  for (let right = 0; right < nums.length; ++right) {
    if (nums[right] === 0) {
      ++zeroCnt;
    }

    if (zeroCnt > k) {
      while (nums[left] !== 0) {
        ++left;
      }
      ++left;
      --zeroCnt;
    }

    let cnt = right - left + 1;
    max = Math.max(cnt, max);
  }
  return max;
};

// testCase
console.log(
  longestOnes(
    [
      1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1,
      1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1,
    ],
    8
  )
); //25
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); //6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); //10
