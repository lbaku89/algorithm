// https://leetcode.com/problems/find-maximum-area-of-a-triangle/description/
// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[][]} coords
 * @return {number}
 */
var maxArea = function (coords) {
  let finalAnswer = 0;

  const operateMax = (parallel) => {
    let maxPoint = -Infinity;
    let minPoint = Infinity;
    let answer = 0;
    const arr = [];
    const axis = {};

    // O(n)
    for (const [x, y] of coords) {
      if (parallel === "y") {
        maxPoint = Math.max(maxPoint, x);
        minPoint = Math.min(minPoint, x);
      } else {
        maxPoint = Math.max(maxPoint, y);
        minPoint = Math.min(minPoint, y);
      }

      if (parallel === "y") {
        if (axis[x] === undefined) {
          axis[x] = [y, y];
        } else {
          if (axis[x][1] < y) {
            axis[x][1] = y;
          }
          if (axis[x][0] > y) {
            axis[x][0] = y;
          }
        }
      } else {
        if (axis[y] === undefined) {
          axis[y] = [x, x];
        } else {
          if (axis[y][1] < x) {
            axis[y][1] = x;
          }
          if (axis[y][0] > x) {
            axis[y][0] = x;
          }
        }
      }
    }

    // O(n)
    Object.entries(axis).forEach(([x, [min, max]]) => {
      let temp = (max - min) * Math.abs(Number(x) - minPoint);
      temp = Math.max(temp, (max - min) * Math.abs(Number(x) - maxPoint));
      answer = Math.max(temp, answer);
    });

    return answer;
  };

  finalAnswer = Math.max(finalAnswer, operateMax("y"));
  finalAnswer = Math.max(finalAnswer, operateMax("x"));

  return finalAnswer === 0 ? -1 : finalAnswer;
};
