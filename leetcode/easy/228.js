// https://chatgpt.com/c/692a4ece-6a14-8324-a8e0-92204eb0f975
// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let l = 0,
    r = 0;

  const answer = [];

  while (l < nums.length) {
    l = r;
    while (nums[r + 1] !== undefined && nums[r + 1] - nums[r] === 1) {
      ++r;
    }

    if (l === r) {
      answer.push(`${nums[l]}`);
    } else {
      answer.push(`${nums[l]}->${nums[r]}`);
    }

    ++r;
    l = r;
  }
  return answer;
};

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
