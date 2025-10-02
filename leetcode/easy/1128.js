// https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/

// optimize
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = {};
  for (const [a, b] of dominoes) {
    let str = [String(a), String(b)].sort().join("");
    map[str] = (map[str] || 0) + 1;
  }

  return Object.values(map).reduce((acc, cur) => {
    return acc + (cur * (cur - 1)) / 2;
  }, 0);
};

// 3try

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = {};
  for (const [a, b] of dominoes) {
    const normal = `${a}${b}`,
      reversed = `${b}${a}`;

    if (map[normal]) {
      map[normal] = (map[normal] || 0) + 1;
    } else if (map[reversed]) {
      map[reversed] = (map[reversed] || 0) + 1;
    } else {
      map[normal] = (map[normal] || 0) + 1;
    }
  }

  return Object.values(map).reduce((acc, cur) => {
    if (cur <= 1) {
      return acc;
    }
    return acc + (cur * (cur - 1)) / 2;
  }, 0);
};

// 2try
// time complexity O(n)
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let map = new Map();
  let pairs = 0;
  for (const [n1, n2] of dominoes) {
    let key = String(Math.max(n1, n2)) + Math.min(n1, n2);
    map.set(key, (map.get(key) || 0) + 1);
    pairs += map.get(key) - 1;
  }

  return pairs;
};

// 1try
// time complexity O(n)
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  dominoes = dominoes.map((arr) => {
    const key = arr.sort((prev, next) => prev - next).join("");
    return key;
  });

  let map = new Map();

  for (const key of dominoes) {
    map.set(key, (map.get(key) || 0) + 1);
  }

  let pairs = 0;
  map.values().forEach((n) => {
    pairs += n * (n - 1) * 0.5;
  });

  return pairs;
};
