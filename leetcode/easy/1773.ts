function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string,
): number {
  let matchIdx;
  switch (ruleKey) {
    case "type":
      matchIdx = 0;
      break;
    case "color":
      matchIdx = 1;
      break;
    case "name":
      matchIdx = 2;
      break;
  }

  let cnt = 0;
  for (const item of items) {
    if (item[matchIdx] === ruleValue) {
      ++cnt;
    }
  }
  return cnt;
}
