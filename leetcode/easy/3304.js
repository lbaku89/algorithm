/**
 * @problem https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/
 */

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let word = "a";

  let arr = "abcdefghijklmnopqrstuvwxyz".split(""); // 26 개

  while (word.length < k) {
    let newWord = word
      .split("")
      .map((cha) => {
        const idx = arr.indexOf(cha); // 0~ 25 일꺼임
        return arr[(idx + 1) % 26];
      })
      .join("");

    word += newWord;
  }

  return word[k - 1];
};
