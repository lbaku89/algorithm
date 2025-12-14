// https://leetcode.com/problems/non-overlapping-intervals/description/

// time complexity O(nlogn)
// space complexity O(1)

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // const stack = []

  let cnt = 0;
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; ++i) {
    const current = intervals[i];

    if (prev[1] > current[0]) {
      ++cnt;
      if (prev[1] > current[1]) {
        prev = current;
      }
    } else {
      prev = current;
    }
  }

  return cnt;
};
