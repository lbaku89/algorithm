// https://leetcode.com/problems/buy-two-chocolates/description/

function buyChoco(prices: number[], money: number): number {
  let smallest = Math.min(prices[0], prices[1]),
    small = Math.max(prices[0], prices[1]);

  for (let i = 2; i < prices.length; ++i) {
    const price = prices[i];
    if (price < smallest) {
      small = smallest;
      smallest = price;
    } else if (price < small) {
      small = price;
    }
  }

  const leftover = money - (smallest + small);
  return leftover >= 0 ? leftover : money;
}
