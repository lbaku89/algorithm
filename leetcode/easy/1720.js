/**
 * https://leetcode.com/problems/decode-xored-array/
 */

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  // encoded[i] = arr[i] ^ arr[i+1]

  const answer = Array(encoded.length + 1).fill(undefined);
  answer[0] = first;
  encoded.forEach((n, i) => {
    answer[i + 1] = answer[i] ^ encoded[i];
  });
  return answer;
};
