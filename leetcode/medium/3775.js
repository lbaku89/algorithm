/**
 * @source https://leetcode.com/problems/reverse-words-with-same-vowel-count/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arraged = s.split(" ");
  let firstCount = undefined;

  for (let i = 0; i < arraged.length; ++i) {
    const word = arraged[i];
    let vowelCnt = 0;
    for (let cha of word) {
      if (["a", "e", "i", "o", "u"].includes(cha)) {
        ++vowelCnt;
      }
    }

    if (i === 0) {
      firstCount = vowelCnt;
      continue;
    }

    if (firstCount === vowelCnt) {
      arraged[i] = [...word].reverse().join("");
    }
  }

  return arraged.join(" ");
};
