// https://leetcode.com/problems/buy-two-chocolates/

// time complexity O(n)

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let priceArr = [prices[0], prices[1]];
    priceArr.sort((a, b) => a - b);

    for (let i = 2; i < prices.length; ++i) {
        let price = prices[i];
        if (price < priceArr[0]) {
            priceArr[1] = priceArr[0];
            priceArr[0] = price;
        } else if (price < priceArr[1]) {
            priceArr[1] = price;
        }
    }

    let sum = priceArr[0] + priceArr[1];

    if (sum > money) {
        return money;
    } else {
        return money - sum;
    }
};
