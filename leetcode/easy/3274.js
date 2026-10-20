/**
 * @source https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/
 */

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  const [l1, l2] = coordinate1.split("");
  const [l3, l4] = coordinate2.split("");

  const isBlack1 =
    (l1.charCodeAt(0) - "a".charCodeAt(0) + 1 + Number(l2)) % 2 === 0;
  const isBlack2 =
    (l3.charCodeAt(0) - "a".charCodeAt(0) + 1 + Number(l4)) % 2 === 0;

  return isBlack1 === isBlack2;
};
