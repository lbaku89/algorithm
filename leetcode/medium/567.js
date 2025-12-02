// https://leetcode.com/problems/permutation-in-string/

// time complexity O(n)
// space complexity O(1)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // s1.length = n, s2.elgnth =m

  if (s1.length > s2.length) {
    return false;
  }

  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);

  // O(26)
  const arr = Array(zCode - aCode + 1).fill(0);

  // O(s1.length)
  for (let i = 0; i < s1.length; ++i) {
    const idx = s1[i].charCodeAt(0) - aCode;
    ++arr[idx];
  }

  let temp = Array(zCode - aCode + 1).fill(0);

  // O(26)
  const isSame = () => {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] !== temp[i]) {
        return false;
      }
    }
    return true;
  };

  //O(s1.length)
  for (let i = 0; i < s1.length; ++i) {
    ++temp[s2[i].charCodeAt(0) - aCode];
  }

  if (isSame()) {
    return true;
  }

  let leftIdx = 0,
    rightIdx = s1.length;

  // O(s2.length)
  while (rightIdx <= s2.length - 1) {
    ++temp[s2[rightIdx].charCodeAt(0) - aCode];
    ++rightIdx;
    --temp[s2[leftIdx].charCodeAt(0) - aCode];
    ++leftIdx;

    if (isSame()) {
      return true;
    }
  }

  return false;
};
