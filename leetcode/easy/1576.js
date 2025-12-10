// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const aCode = "a".charCodeAt(0);
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const sArr = [...s];

  for (let i = 0; i < sArr.length; ++i) {
    if (sArr[i] === "?") {
      let forbidden = "";

      if (sArr[i - 1] && sArr[i - 1] !== "?") {
        forbidden += sArr[i - 1];
      }

      if (sArr[i + 1] && sArr[i + 1] !== "?") {
        forbidden += sArr[i + 1];
      }

      for (const letter of arr) {
        if (forbidden.indexOf(letter) == -1) {
          sArr[i] = letter;
          break;
        }
      }
    }
  }
  return sArr.join("");
};
