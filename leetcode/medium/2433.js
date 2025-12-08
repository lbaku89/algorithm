/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  // time-complexity O(n)
  // space-complexity O(1)

  const reverse = (n) => {
    let reversed = 0;
    // O(Log10 n)
    while (n > 0) {
      reversed = reversed * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return reversed;
  };

  // O(n)
  for (let x = 0; x <= num; ++x) {
    if (num === x + reverse(x)) {
      return true;
    }
  }

  return false;
};
