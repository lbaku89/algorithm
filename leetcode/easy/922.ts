//https://leetcode.com/problems/sort-array-by-parity-ii/description/
function sortArrayByParityII(nums: number[]): number[] {
  const answer: number[] = Array(nums.length).fill(0);

  let oddIdx = 1;
  let evenIdx = 0;
  let idx = 0;
  while (idx < nums.length) {
    const n = nums[idx];
    if (n % 2 === 0) {
      answer[evenIdx] = n;
      evenIdx += 2;
    } else {
      answer[oddIdx] = n;
      oddIdx += 2;
    }
    ++idx;
  }
  return answer;
}

// function sortArrayByParityII(nums: number[]): number[] {
//   const evenNum: number[] = [];
//   const oddNum: number[] = [];

//   nums.forEach((n: number) => {
//     if (n % 2 === 0) {
//       evenNum.push(n);
//     } else {
//       oddNum.push(n);
//     }
//   });

//   const answer: number[] = [];
//   for (let i = 0; i < nums.length; ++i) {
//     if (i % 2 === 0) {
//       answer.push(evenNum.pop() as number);
//     } else {
//       answer.push(oddNum.pop() as number);
//     }
//   }

//   return answer;
// }
