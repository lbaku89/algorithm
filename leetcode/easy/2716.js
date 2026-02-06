// https://leetcode.com/problems/minimize-string-length/
// 시간 복잡도 O(n)
// Set 객체는 해시 기반

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return new Set([...s]).size;
};
