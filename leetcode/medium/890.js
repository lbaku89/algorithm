/**
 * https://leetcode.com/problems/find-and-replace-pattern/
 */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const answer = [];

  words.forEach((word, idx) => {
    // pattern용
    const map1 = {};
    // word용
    const map2 = {};

    for (let i = 0; i < word.length; ++i) {
      // 처음만 설정
      if (i === 0) {
        map1[pattern[0]] = word[0];
        map2[word[0]] = pattern[0];
      } else {
        if (map1[pattern[i]] === undefined && map2[word[i]] !== undefined) {
          // pattern 새로운 문자 인데 word는 새로운 문자가 아님
          break;
        } else if (
          map1[pattern[i]] !== undefined &&
          map1[pattern[i]] !== word[i]
        ) {
          // pattern 새로운 문자 아닌데 기존 패턴과 맞지 않음
          break;
        } else {
          if (map1[pattern[i]] === undefined) {
            map1[pattern[i]] = word[i];
            map2[word[i]] = pattern[i];
          }
        }
      }

      if (i === word.length - 1) {
        answer.push(word);
      }
    }
  });

  return answer;
};
