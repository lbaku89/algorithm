/**
 * @source https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/
 */

/**
 * time complexity O(n)
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let maxChairs = 0,
    current = 0;

  for (const eventType of s) {
    if (eventType === "E") {
      ++current;
      maxChairs = Math.max(maxChairs, current);
    } else {
      --current;
    }
  }

  return maxChairs;
};
