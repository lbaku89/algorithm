/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    if (n & 1) {
      ++count;
    }
    n = n >>> 1;
  }

  return count;
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((v) => v !== "0").length;
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  const arr = [];

  let remainder = 0;
  let rest = n;

  while (rest !== 0) {
    remainder = rest % 2;
    rest = Math.floor(rest / 2);
    arr.push(remainder);
  }

  return arr.filter((v) => v !== 0).length;
};
