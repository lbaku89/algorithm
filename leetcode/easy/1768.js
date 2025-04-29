// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0;
    let answer = "";
    while (word1[i] || word2[i]) {
        answer = answer + (word1[i] || "") + (word2[i] || "");
        ++i;
    }

    return answer;
};
