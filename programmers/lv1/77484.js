// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let winNumCnt = 0;
  let unknownCnt = 0;
  lottos.forEach((n) => {
    if (n === 0) {
      ++unknownCnt;
    }

    if (win_nums.includes(n)) {
      ++winNumCnt;
    }
  });

  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };

  const best = rank[winNumCnt + unknownCnt] ? rank[winNumCnt + unknownCnt] : 6;
  const worst = rank[winNumCnt] ? rank[winNumCnt] : 6;
  return [best, worst];
}
