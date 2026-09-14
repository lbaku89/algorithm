/**
 * @problem https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let converted = "";

  s.split("").forEach((cha) => {
    let code = cha.charCodeAt(0) - "a".charCodeAt(0) + 1;
    converted += String(code);
  });

  while (k !== 0) {
    converted = String(converted)
      .split("")
      .reduce((acc, cur) => {
        return (acc += Number(cur));
      }, 0);
    --k;
  }

  return converted;
};
