// time complexity O(n)
// space complexity O(n)
// monotonic stack

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
