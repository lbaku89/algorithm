//https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/

function countPrimeSetBits(left: number, right: number): number {
  let answer = 0;
  const isPrime = (n) => {
    if (n === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); ++i) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let num = left; num <= right; ++num) {
    let cnt = 0;
    let converted: string = num.toString(2);

    for (const digit of converted) {
      if (digit === "1") {
        ++cnt;
      }
    }

    if (isPrime(cnt)) {
      ++answer;
    }
  }

  return answer;
}
