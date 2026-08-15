function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;

  // 애초에 필요한 꽃 수가 전체 꽃 수보다 많으면 불가능
  if (m * k > n) return -1;

  let left = Math.min(...bloomDay);
  let right = Math.max(...bloomDay);

  const canMake = (day: number): boolean => {
    let bouquets = 0;
    let consecutive = 0;

    for (const bloom of bloomDay) {
      if (bloom <= day) {
        consecutive++;

        if (consecutive === k) {
          bouquets++;
          consecutive = 0;

          if (bouquets >= m) {
            return true;
          }
        }
      } else {
        // 인접해야 하므로 안 핀 꽃을 만나면 끊김
        consecutive = 0;
      }
    }

    return false;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canMake(mid)) {
      // mid일이면 가능하니 더 빠른 날짜 탐색
      right = mid;
    } else {
      // mid일에는 불가능하니 더 늦은 날짜 탐색
      left = mid + 1;
    }
  }

  return left;
}
