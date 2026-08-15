/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(" ");
  const answerArr = Array(words.length).fill("");

  words.forEach((word) => {
    const order = Number(word.at(-1));
    const parsedWord = word.substring(0, word.length - 1);
    answerArr[order - 1] = parsedWord;
  });

  return answerArr.join(" ");
};
