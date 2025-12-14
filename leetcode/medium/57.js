//https://leetcode.com/problems/insert-interval/description/

// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  const answer = [];
  let i = 0;

  // newInterval 가 들어가는 타이밍 까지 answer 에 push
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    answer.push(intervals[i]);
    ++i;
  }

  // newInterval과 겹치는 부분을 최대한 연장 하여 Push
  let [start, end] = newInterval;
  while (
    i < intervals.length &&
    start <= intervals[i][1] &&
    end >= intervals[i][0]
  ) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    ++i;
  }
  answer.push([start, end]);

  // 남은 범위 push
  while (i < intervals.length) {
    answer.push(intervals[i]);
    ++i;
  }

  return answer;
};

// ------------------------------------------------------------

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  let isInserted = false;
  const answer = [];

  let [start, end] = intervals[0];

  if (newInterval[0] <= end && start <= newInterval[1]) {
    start = Math.min(start, newInterval[0]);
    end = Math.max(end, newInterval[1]);
    isInserted = true;
  } else if (newInterval[1] < start) {
    answer.push(newInterval);
    isInserted = true;
  }

  answer.push([start, end]);

  for (let i = 1; i < intervals.length; ++i) {
    const current = intervals[i];
    if (isInserted) {
      //
      const last = answer.at(-1);

      if (last[1] >= current[0]) {
        answer[answer.length - 1] = [
          Math.min(last[0], current[0]),
          Math.max(last[1], current[1]),
        ];
      } else {
        answer.push(current);
      }
    } else {
      // newInterval 겹침 여부 확인
      if (newInterval[0] <= current[1] && newInterval[1] >= current[0]) {
        answer.push([
          Math.min(current[0], newInterval[0]),
          Math.max(current[1], newInterval[1]),
        ]);
        isInserted = true;
      } else {
        if (current[0] > newInterval[1]) {
          answer.push(newInterval);
          isInserted = true;
        }

        answer.push(current);
      }
    }
  }

  if (!isInserted) {
    answer.push(newInterval);
  }
  return answer;
};
