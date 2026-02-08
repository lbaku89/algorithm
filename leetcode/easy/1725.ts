// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

function countGoodRectangles(rectangles: number[][]): number {
  let max = Math.min(rectangles[0][0], rectangles[0][1]);
  let count = 1;
  for (let i = 1; i < rectangles.length; ++i) {
    let currentMax = Math.min(rectangles[i][0], rectangles[i][1]);
    if (max === currentMax) {
      ++count;
      continue;
    }
    if (max > currentMax) {
      continue;
    }
    max = currentMax;
    count = 1;
  }

  return count;
}
