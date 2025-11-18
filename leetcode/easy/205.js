/**
 * @problem https://leetcode.com/problems/isomorphic-strings/description/
 */

/**
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; ++i) {
    const sCha = s[i],
      tCha = t[i];

    if (map1.get(sCha) !== map2.get(tCha)) {
      return false;
    }

    map1.set(sCha, i);
    map2.set(tCha, i);
  }
  return true;
};
