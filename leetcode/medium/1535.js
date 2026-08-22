/**
 *  https://leetcode.com/problems/find-the-winner-of-an-array-game/description/
 * */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let max = arr[0];
  let consecutive = 0;

  for (let i = 1; i < arr.length; ++i) {
    if (max > arr[i]) {
      ++consecutive;
    } else {
      consecutive = 1;
      max = arr[i];
    }

    if (consecutive >= k) {
      return max;
    }
  }
  return max;
};
