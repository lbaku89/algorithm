// https://leetcode.com/problems/sort-vowels-by-frequency/
// time complexity O(s.length)

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const idxMap = {};
  const cntArr = Array(5).fill(0);

  let idx = 0;
  for (const cha of s) {
    if (["a", "e", "i", "o", "u"].includes(cha)) {
      if (idxMap[cha] === undefined) {
        idxMap[cha] = idx;
        cntArr[idx] = [cha, 0];
        ++idx;
      }
      ++cntArr[idxMap[cha]][1];
    }
  }
  cntArr.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = "",
    windowIdx = 0;
  for (const cha of s) {
    if (idxMap[cha] !== undefined) {
      if (cntArr[windowIdx][1] === 0) {
        ++windowIdx;
      }
      answer += cntArr[windowIdx][0];
      --cntArr[windowIdx][1];
    } else {
      answer += cha;
    }
  }
  return answer;
};
