// https://leetcode.com/problems/longest-common-prefix/

// time complexity O(nlog n * m)
// space complexity O(1)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // n log (n*m)
  strs.sort();

  const first = strs[0],
    last = strs.at(-1);
  let answer = "";

  // O(n)
  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== last[i]) {
      break;
    }
    answer += first[i];
  }
  return answer;
};

// --------------------------------

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // O(nlog n) ( n <==200)
  strs.sort((a, b) => a.length - b.length);

  const candidates = [];
  let tempStr = "";
  // 최대 200개
  for (let i = 0; i < strs[0].length; ++i) {
    tempStr += strs[0][i];
    candidates.push(tempStr);
  }

  // 최대 200개
  for (const str of strs) {
    // 최대 200개
    for (let i = candidates.length - 1; i >= 0; --i) {
      if (!str.startsWith(candidates[i])) {
        candidates.pop();
      } else {
        break;
      }
    }

    if (candidates.length === 0) {
      return "";
    }
  }

  return candidates.at(-1);
};

// --------------------------------

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // O(nlog n) ( n <==200)
  strs.sort((a, b) => a.length - b.length);

  const subStrs = {};
  let tempStr = "";
  let answer = "";
  // O(n)
  for (let i = 0; i < strs[0].length; ++i) {
    tempStr += strs[0][i];
    subStrs[tempStr] = true;
  }

  // O(n)
  for (const subStr in subStrs) {
    // O(n)
    for (let i = 0; i < strs.length; ++i) {
      if (!strs[i].startsWith(subStr)) {
        return answer;
      }

      if (i === strs.length - 1) {
        answer = subStr;
      }
    }
  }

  return answer ?? "";
};
