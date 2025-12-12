// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

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
