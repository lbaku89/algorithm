// https://leetcode.com/problems/monotone-increasing-digits/

/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  const isIncreasingDigits = (n) => {
    let digits = String(n);
    for (let i = 1; i < digits.length; ++i) {
      if (digits[i] !== undefined) {
        if (Number(digits[i]) < Number(digits[i - 1])) {
          return false;
        }
      }
    }
    return true;
  };

  // 일단 현재 숫자가 되는지 확인하기
  if (isIncreasingDigits(n)) {
    return n;
  }

  // 모노톤 안되는 지점에서 앞자리를 내려버려
  /// 3332811 -> 332999 -> 329999 ->29999

  let answer = n;
  let arr = String(n).split("");
  while (!isIncreasingDigits(answer)) {
    for (let i = 1; i < arr.length; ++i) {
      if (Number(arr[i]) < Number(arr[i - 1])) {
        arr[i - 1] = String(Number(arr[i - 1]) - 1);

        // [2,3,2]
        answer =
          arr.slice(0, i).join("") +
          Array(String(n).length - i)
            .fill("9")
            .join("");
        answer = Number(answer);
        break;
      }
    }
  }
  return answer;
};
