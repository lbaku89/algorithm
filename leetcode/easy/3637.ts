function isTrionic(nums: number[]): boolean {
  let p, q;

  for (let i = 0; i <= nums.length - 2; ++i) {
    const [cur, next] = [nums[i], nums[i + 1]];
    if (cur === next) {
      return false;
    }
    if (cur < next) {
      continue;
    }
    if (cur > next) {
      p = i;
      break;
    }
  }

  if (p === 0 || p > nums.length - 3) {
    return false;
  }

  for (let i = p; i <= nums.length - 2; ++i) {
    const [cur, next] = [nums[i], nums[i + 1]];
    if (cur === next) {
      return false;
    }
    if (cur > next) {
      continue;
    }
    if (cur < next) {
      q = i;
      break;
    }
  }

  if (q > nums.length - 2 || q === undefined || p === q) {
    return false;
  }

  for (let i = q; i <= nums.length - 2; ++i) {
    const [cur, next] = [nums[i], nums[i + 1]];
    if (cur === next) {
      return false;
    }
    if (cur < next) {
      continue;
    }
    if (cur > next) {
      return false;
    }
  }

  return true;
}
