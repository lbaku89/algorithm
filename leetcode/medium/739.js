// https://leetcode.com/problems/daily-temperatures/

// time complexity O(n)
// space complexity O(n)
// monotonic stack

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  const arr = Array(101).fill(false);
  const answer = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; ++i) {
    const temp = temperatures[i];

    if (!arr[temp]) {
      arr[temp] = [i];
    } else {
      arr[temp].push(i);
    }

    if (i === 0) {
      continue;
    }

    for (let j = 30; j < temp; ++j) {
      if (!arr[j]) {
        continue;
      }

      arr[j].forEach((idx) => {
        answer[idx] = i - idx;
      });
      arr[j] = false;
    }
  }

  return answer;
};

/**
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; ++i) {
    const temp = temperatures[i];

    while (stack.length && temp > temperatures[stack.at(-1)]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }

    stack.push(i);
  }

  return answer;
};
