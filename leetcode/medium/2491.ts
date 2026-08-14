function dividePlayers(skill: number[]): number {
  const teamCount = skill.length / 2;
  const sum = skill.reduce((acc, cur) => (acc += cur), 0) / teamCount;

  const arr = new Array(1001).fill(0);

  skill.forEach((n) => {
    ++arr[n];
  });

  let answer = 0;

  for (let i = 0; i <= skill.length - 1; ++i) {
    const n = skill[i];
    if (arr[n] >= 1) {
      --arr[n];
      if (arr[sum - n] >= 1) {
        --arr[sum - n];
        answer += n * (sum - n);
      } else {
        return -1;
      }
    }
  }

  return answer;
}
