// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences.reduce((acc, cur) => {
    const currentLength = cur.split(" ").length;
    return acc < currentLength ? currentLength : acc;
  }, 0);
};
