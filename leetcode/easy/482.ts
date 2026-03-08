// https://leetcode.com/problems/license-key-formatting/description/

function licenseKeyFormatting(s: string, k: number): string {
  let noDashed: string = "";
  for (const letter of s) {
    if (letter !== "-") {
      noDashed += letter.toUpperCase();
    }
  }

  if (k === 1) {
    return noDashed.split("").join("-");
  }

  let startIdx = noDashed.length % k;
  let answer = noDashed.slice(0, startIdx);
  for (let i = startIdx; i < noDashed.length; ++i) {
    if ((i - startIdx + 1) % k === 1 && answer !== "") {
      answer += "-";
    }
    answer += noDashed[i];
  }
  return answer;
}
