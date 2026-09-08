/**
 * @source https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const arr = ["I", "V", "X", "L", "C", "D", "M"];

  const str = s.split("");
  let sum = 0;
  for (let i = 0; i < str.length; ) {
    const cur = str[i];
    const next = str[i + 1];

    if (next === undefined) {
      sum += hash[cur];
      ++i;
      continue;
    }

    if (arr.indexOf(cur) < arr.indexOf(next)) {
      sum += hash[next] - hash[cur];
      i += 2;
    } else {
      sum += hash[cur];
      ++i;
    }
  }
  return sum;
};
