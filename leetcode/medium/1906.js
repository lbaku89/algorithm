/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
  const prefix = Array.from({ length: nums.length + 1 }, () => {
    return Array(101).fill(0);
  });

  for (let i = 0; i < nums.length; ++i) {
    for (let v = 1; v <= 100; ++v) {
      prefix[i + 1][v] = prefix[i][v];
    }
    ++prefix[i + 1][nums[i]];
  }

  const answer = [];

  for (const query of queries) {
    let minimum = Infinity;
    let prev = -1;
    for (let v = 1; v <= 100; ++v) {
      const cnt = prefix[query[1] + 1][v] - prefix[query[0]][v];
      if (cnt === 0) {
        continue;
      }

      if (prev !== -1) {
        minimum = Math.min(v - prev, minimum);
      }
      prev = v;
    }
    minimum === Infinity ? answer.push(-1) : answer.push(minimum);
  }
  return answer;
};
