// https://leetcode.com/problems/earliest-time-to-finish-one-task/

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  let minTime = Infinity;
  tasks.forEach(([s, t]) => {
    minTime = Math.min(minTime, s + t);
  });
  return minTime;
};
