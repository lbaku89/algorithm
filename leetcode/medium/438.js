// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

/**
 * O(n)
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) {
    return [];
  }

  const answer = [];
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);
  const l = zCode - aCode + 1;

  const pArr = Array(l).fill(0);
  const windowArr = Array(l).fill(0);

  p.split("").forEach((ch, idx) => {
    ++pArr[ch.charCodeAt(0) - 97];
    ++windowArr[s[idx].charCodeAt(0) - 97];
  });

  const isAnagram = () => {
    for (let i = 0; i < pArr.length; ++i) {
      if (pArr[i] !== windowArr[i]) {
        return false;
      }
    }
    return true;
  };
  if (isAnagram()) {
    answer.push(0);
  }

  for (let right = p.length; right < s.length; ++right) {
    const enteringIdx = s[right].charCodeAt(0) - 97;
    const leavingIdx = s[right - p.length].charCodeAt(0) - 97;
    ++windowArr[enteringIdx];
    --windowArr[leavingIdx];

    if (isAnagram()) {
      answer.push(right - p.length + 1);
    }
  }

  return answer;
};

// ------------------------------------------------------------
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const answer = [];
  const pStore = {};
  const store = {};
  for (let i = 0; i < p.length; ++i) {
    store[s[i]] = (store[s[i]] || 0) + 1;
    pStore[p[i]] = (pStore[p[i]] || 0) + 1;
  }

  // O(p.length)
  const isAnagrams = () => {
    for (const key of Object.keys(pStore)) {
      if (pStore[key] !== store[key]) {
        return false;
      }
    }
    return true;
  };

  if (isAnagrams()) {
    answer.push(0);
  }

  // O(s.length)
  for (let i = p.length; i < s.length; ++i) {
    const ch = s[i];

    store[ch] = (store[ch] || 0) + 1;
    --store[s[i - p.length]];
    // O(p.length)
    if (isAnagrams()) {
      answer.push(i - p.length + 1);
    }
  }

  return answer;
};
