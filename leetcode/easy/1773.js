// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  items.forEach((arr) => {
    if (
      (ruleKey === "type" && ruleValue === arr[0]) ||
      (ruleKey === "color" && ruleValue === arr[1]) ||
      (ruleKey === "name" && ruleValue === arr[2])
    ) {
      ++count;
    }
  });
  return count;
};
