//https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/
function squareIsWhite(coordinates: string): boolean {
  const even = ["2", "4", "6", "8"];
  const odd = ["1", "3", "5", "7"];

  const evenAlpha = ["b", "d", "f", "h"];
  const oddAlpha = ["a", "c", "e", "g"];

  if (
    (evenAlpha.includes(coordinates[0]) && odd.includes(coordinates[1])) ||
    (oddAlpha.includes(coordinates[0]) && even.includes(coordinates[1]))
  ) {
    return true;
  }
  return false;
}
