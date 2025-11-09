/**
 * @origin https://leetcode.com/problems/group-anagrams/description/
 */

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
