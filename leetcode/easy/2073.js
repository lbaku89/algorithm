/**
 * @problem https://leetcode.com/problems/time-needed-to-buy-tickets/
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0,
    turn = 0;
  const l = tickets.length;

  while (tickets[k] > 0) {
    turn %= l;
    if (tickets[turn] > 0) {
      --tickets[turn];
      ++time;
    }
    if (k === turn && tickets[turn] === 0) {
      break;
    }

    ++turn;
  }

  return time;
};
