//https://leetcode.com/problems/height-checker/

function heightChecker(heights: number[]): number {
  const sorted = [...heights].sort((a, b) => a - b);
  return sorted.reduce((acc, cur, idx) => {
    if (sorted[idx] !== heights[idx]) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
