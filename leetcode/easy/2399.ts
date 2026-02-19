// https://leetcode.com/problems/check-distances-between-same-letters/

function checkDistances(s: string, distance: number[]): boolean {
  const aCode = "a".charCodeAt(0);
  const seen = new Set();
  for (let i = 0; i < s.length - 1; ++i) {
    const char = s[i];
    if (!seen.has(char)) {
      const charCode = char.charCodeAt(0) - aCode;
      const between = distance[charCode];
      if (s[i + between + 1] !== char) {
        return false;
      }
      seen.add(char);
    }
  }

  return true;
}

// function checkDistances(s: string, distance: number[]): boolean {
//   const aCode = "a".charCodeAt(0);
//   for (let i = 0; i < s.length - 1; ++i) {
//     const cha = s[i];
//     const chaCode = cha.charCodeAt(0) - aCode;

//     for (let j = i + 1; j < s.length; ++j) {
//       const pairCha = s[j];

//       if (cha === pairCha && j - i - 1 !== distance[chaCode]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }
