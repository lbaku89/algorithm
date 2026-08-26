// https://leetcode.com/problems/count-good-numbers/

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const MOD = 1000000007n;
  n = BigInt(n);

  const pow = (num, exponential) => {
    let answer = 1n;
    let base = BigInt(num);
    while (exponential > 0n) {
      if (exponential % 2n === 1n) {
        answer = (answer * base) % MOD;
      }

      base = (base * base) % MOD;
      exponential /= 2n;
    }
    return answer;
  };

  const n1 = (n + 1n) / 2n;
  const n2 = n / 2n;

  return Number((pow(5, n1) * pow(4, n2)) % MOD);
};
