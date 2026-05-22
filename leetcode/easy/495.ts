// https://leetcode.com/problems/teemo-attacking/

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let acc = 0;

  for (let i = 0; i < timeSeries.length; ++i) {
    const [s, e] = [timeSeries[i], timeSeries[i] + duration - 1];

    if (timeSeries[i + 1] !== undefined && e >= timeSeries[i + 1]) {
      acc += timeSeries[i + 1] - s;
      continue;
    }
    acc += duration;
  }

  return acc;
}

export {};
