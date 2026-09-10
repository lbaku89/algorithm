/**
 * @source https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/
 */

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const oddArr = Array(10).fill(0);
  const evenArr = Array(10).fill(0);
  const numArr = String(num).split("");

  numArr.forEach((n, idx) => {
    if (Number(n) % 2 === 0) {
      // 짝
      ++evenArr[Number(n)];
    } else {
      ++oddArr[Number(n)];
    }
  });

  let result = "";
  for (let i = 0; i < numArr.length; ++i) {
    let tempIdx = 9;
    if (Number(numArr[i]) % 2 === 0) {
      //짝
      while (evenArr[tempIdx] === 0) {
        --tempIdx;
      }
      --evenArr[tempIdx];
      result += String(tempIdx);
    } else {
      while (oddArr[tempIdx] === 0) {
        --tempIdx;
      }
      --oddArr[tempIdx];
      result += String(tempIdx);
    }
  }

  return Number(result);
};
