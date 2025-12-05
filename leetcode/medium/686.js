// https://leetcode.com/problems/repeated-string-match/

// time complexity O(n*m)

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let maxCnt = Math.max(a.length, b.length);
  let temp = a;
  let cnt = 1;
  while (temp.length <= maxCnt * 3) {
    if (temp.indexOf(b) >= 0) {
      return cnt;
    }
    temp += a;
    ++cnt;
  }

  return -1;
};
