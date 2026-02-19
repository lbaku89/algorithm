// https://leetcode.com/problems/check-distances-between-same-letters/
function checkDistances(s: string, distance: number[]): boolean {
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < s.length - 1; ++i) {
    const cha = s[i];
    const chaCode = cha.charCodeAt(0) - aCode;

    for (let j = i + 1; j < s.length; ++j) {
      const pairCha = s[j];

      if (cha === pairCha && j - i - 1 !== distance[chaCode]) {
        return false;
      }
    }
  }

  return true;
}
