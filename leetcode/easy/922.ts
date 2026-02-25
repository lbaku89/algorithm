function sortArrayByParityII(nums: number[]): number[] {
  const evenNum: number[] = [];
  const oddNum: number[] = [];

  nums.forEach((n: number) => {
    if (n % 2 === 0) {
      evenNum.push(n);
    } else {
      oddNum.push(n);
    }
  });

  const answer: number[] = [];
  for (let i = 0; i < nums.length; ++i) {
    if (i % 2 === 0) {
      answer.push(evenNum.pop() as number);
    } else {
      answer.push(oddNum.pop() as number);
    }
  }

  return answer;
}
