// https://leetcode.com/problems/stable-subarrays-with-equal-boundary-and-interior-sum/

/**
 * @param {number[]} capacity
 * @return {number}
 */
var countStableSubarrays = function (capacity) {
  const prefix = Array(capacity.length + 1).fill(0);
  prefix[0] = 0;
  for (let i = 1; i < capacity.length; ++i) {
    prefix[i] = capacity[i - 1] + prefix[i - 1];
  }

  const map = new Map();
  let answer = 0;
  for (let r = 2; r <= capacity.length - 1; ++r) {
    const l = r - 2;
    const leftKey = `${capacity[l]},${prefix[l] + 2 * capacity[l]}`;

    map.set(leftKey, (map.get(leftKey) ?? 0) + 1);
    // 현재 r과 맞는 과거 l이 몇 개 있는지 한 번에 조회
    const rightKey = `${capacity[r]},${prefix[r]}`;

    answer += map.get(rightKey) ?? 0;
  }

  return answer;
};
