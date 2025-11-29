// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  const answer = [];
  let store = [nums[0]];

  for (let i = 1; i < nums.length; ++i) {
    let n = nums[i];

    if (n - store.at(-1) === 1) {
      store.push(n);
    } else {
      if (store.length === 1) {
        answer.push(`${store[0]}`);
      } else {
        answer.push(`${store[0]}->${store.at(-1)}`);
      }
      store = [n];
    }
  }

  if (store.length === 1) {
    answer.push(`${store[0]}`);
  } else {
    answer.push(`${store[0]}->${store.at(-1)}`);
  }

  return answer;
};
