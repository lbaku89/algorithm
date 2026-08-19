// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// time complexity O(n^2)
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let answer = 0;
  for (let i = 1; i <= arr.length; i = i + 2) {
    let sum = arr.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    answer += sum;

    for (let j = i; j < arr.length; ++j) {
      sum -= arr[j - i];
      sum += arr[j];
      answer += sum;
    }
  }
  return answer;
};
