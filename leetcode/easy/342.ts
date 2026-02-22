// https://leetcode.com/problems/power-of-four/

function isPowerOfFour(n: number): boolean {
  // x : -2 -1 0 1 2
  // n :  1/16   1/4  1  4  16
  //          1/5
  if (n === 1) {
    return true;
  }

  let a = n;
  let b = 0;

  if (n >= 1) {
    while (a > 1) {
      b = a % 4;
      a = a / 4;
      if (b !== 0) {
        return false;
      }
    }
    return true;
  } else if (a > 0) {
    while (a < 1) {
      a = a * 4;
    }
    return a === 1 ? true : false;
  } else {
    return false;
  }
}
