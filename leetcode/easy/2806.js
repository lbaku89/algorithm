/**
 * @problem https://leetcode.com/problems/account-balance-after-rounded-purchase/
 */

/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  let answer = 100;
  const remain = purchaseAmount % 10;

  if (remain >= 5) {
    return answer - (purchaseAmount - remain + 10);
  } else {
    return answer - (purchaseAmount - remain);
  }
};
