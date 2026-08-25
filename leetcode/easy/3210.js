// https://leetcode.com/problems/find-the-encrypted-string/description/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  return s
    .split("")
    .map((_, idx) => {
      return s[(idx + k) % s.length];
    })
    .join("");
};
