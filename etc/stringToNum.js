// string이 주어질때 숫자로 변환하는 함수를 직접 만들어보기

const stringToNum = (str) => {
  const map = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  const isString = (ch) => {
    if (map[ch] === undefined) {
      return true;
    }
    return false;
  };

  const digits = str.split("");
  let isMinus = false;
  let answer = 0;
  let dotCnt = 0;
  let dotIndex = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    // 맨 앞자리가 - 인 경우
    if (i === 0 && digit === "-") {
      isMinus = true;
      continue;
    }

    // '.' 이 맨 앞에 오는 경우
    if (i === 0 && digit === ".") {
      return "invalid string";
    }

    // 소수점 시작 전 처리
    if (digit === "." && dotCnt === 0) {
      ++dotCnt;
      continue;
    }

    // 숫자가 아닌경우 예외처리
    if (isString(digit)) {
      return "invalid string";
    }

    if (dotCnt > 0) {
      --dotIndex;
      answer += map[digit] * 10 ** dotIndex;
      continue;
    }

    answer = answer * 10 + map[digit];
  }

  return isMinus ? -1 * answer : answer;
};

console.log(stringToNum("10"));
console.log(stringToNum("-10"));
console.log(stringToNum("--10"));
console.log(stringToNum("1010"));
console.log(stringToNum("0010"));

// 소수점 처리
console.log(stringToNum("10.1010"));
console.log(stringToNum("0.1010"));
console.log(stringToNum("10-.1010"));
console.log(stringToNum(".1010"));
console.log(stringToNum("0.10.10"));
