/**@origin https://leetcode.com/problems/merge-intervals/ */

/**
 * @timeComplexity O(nlogn)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((prev, next) => {
    return prev[0] - next[0] || prev[1] - next[1];
  });
  const answer = [];
  answer.push(intervals[0]);

  for (let i = 1; i < intervals.length; ++i) {
    const last = answer[answer.length - 1];
    const [start, end] = intervals[i];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      answer.push([start, end]);
    }
  }

  return answer;
};
