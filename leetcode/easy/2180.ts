// https://leetcode.com/problems/count-integers-with-even-digit-sum/description/

function countEven(num: number): number {
  let answer = 0;
  for (let i = 1; i <= num; ++i) {
    let sum = 0;
    for (const digit of String(i)) {
      sum += Number(digit);
    }

    if (sum % 2 === 0) {
      ++answer;
    }
  }
  return answer;
}
