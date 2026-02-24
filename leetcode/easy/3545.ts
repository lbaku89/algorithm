function minDeletion(s: string, k: number): number {
  const characterFrequency = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  let characterKind = 0;

  for (const cha of s) {
    if (characterFrequency[cha.charCodeAt(0) - aCode] === 0) {
      ++characterKind;
    }
    ++characterFrequency[cha.charCodeAt(0) - aCode];
  }

  let deleteCnt = 0;
  characterFrequency.sort((a, b) => a - b);
  for (let i = 0; i <= 25; ++i) {
    if (characterFrequency[i] === 0) {
      continue;
    }

    if (characterKind > k) {
      --characterKind;
      deleteCnt += characterFrequency[i];
      continue;
    } else {
      break;
    }
  }

  return deleteCnt;
}
