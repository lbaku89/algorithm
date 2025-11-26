/**
 * @origin https://leetcode.com/problems/group-anagrams/description/
 */

// 제한 조건
// ( n = strs.length , m = max of strs[i] )
// 1 <= strs.length <= 10**4
// 0 <= strs[i].length <= 100

// space complexity O(n * m)
// time complexity O(n * m*log m)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 공간복잡도 n * m
  const map = {};

  // 시간 복잡도 strs.length
  strs.forEach((str, idx) => {
    // str.length = m
    // 시간 복잡도 m + m * logm + m  , 공간 복잡도  + 1
    const key = [...str].sort().join("");

    if (!map[key]) {
      // 시간 복잡도 +1
      map[key] = [strs[idx]];
    } else {
      // 시간 복잡도 +1
      map[key].push(strs[idx]);
    }
  });

  return Object.values(map);
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const aligned = strs.map((str) => [...str].sort().join(""));
  const map = new Map();

  strs.forEach((str, idx) => {
    const key = aligned[idx];
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  });

  return Array.from(map.values());
};

/**
 * @time compleixty kLogK * n
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  strs.forEach((v) => {
    // v의 길이를 k라고 할때
    // 시간 복잡도 k + kLogk + 1
    const key = [...v].sort().join("");

    if (map[key]) {
      map[key].push(v);
    } else {
      map[key] = [v];
    }
  });

  return Object.values(map);
};
