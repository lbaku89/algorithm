// https://leetcode.com/problems/find-maximum-area-of-a-triangle/description/
// time complexity O(n log n)
// space complexity O(n)

/**
 * @param {number[][]} coords
 * @return {number}
 */
var maxArea = function (coords) {
  let finalAnswer = 0;

  const operateMax = (parellel) => {
    let answer = 0;
    const arr = [];
    const axis = {};

    // O(n)
    for (const [x, y] of coords) {
      parellel === "x" ? arr.push(y) : arr.push(x);

      if (parellel === "y") {
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

    // O(nlog n)
    arr.sort((a, b) => b - a);

    // O(n)
    Object.entries(axis).forEach(([x, [min, max]]) => {
      let temp = (max - min) * Math.abs(Number(x) - arr[0]);
      temp = Math.max(temp, (max - min) * Math.abs(Number(x) - arr.at(-1)));
      answer = Math.max(temp, answer);
    });

    return answer;
  };

  finalAnswer = Math.max(finalAnswer, operateMax("y"));
  finalAnswer = Math.max(finalAnswer, operateMax("x"));

  return finalAnswer === 0 ? -1 : finalAnswer;
};
