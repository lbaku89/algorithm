// https://leetcode.com/problems/fruit-into-baskets/description/

// time complexity O(n)
// space complexity O(1)

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let kind = 0;
  let left = 0;
  let answer = 0;
  const basket = {};

  for (let right = 0; right < fruits.length; ++right) {
    const fruit = fruits[right];
    if (basket[fruit] === undefined || basket[fruit] === 0) {
      ++kind;
    }
    basket[fruit] = (basket[fruit] || 0) + 1;

    while (kind > 2) {
      --basket[fruits[left]];
      if (basket[fruits[left]] === 0) {
        --kind;
      }
      ++left;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};
