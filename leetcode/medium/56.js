/**@origin https://leetcode.com/problems/merge-intervals/ */

// time complexity O(nlogn)
// space complexity O(n)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const answer = [];

  let l = 0,
    r = 0;

  while (l < intervals.length) {
    let range = intervals[l];
    let end = intervals[l][1];
    while (intervals[r + 1] && intervals[r + 1][0] <= end) {
      end = Math.max(end, intervals[r + 1][1]);
      ++r;
    }

    answer.push([range[0], end]);

    ++r;
    l = r;
  }

  return answer;
};

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
