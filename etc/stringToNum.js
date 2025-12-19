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
  let seenDot = false;
  let dotIndex = 0;
  let fractionalPart = 0;
  let seenAnyDigit = false;
  let seenFractionalDigit = false;

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
    if (digit === ".") {
      if (seenDot) {
        return "invalid string";
      }
      seenDot = true;
      continue;
    }

    // 숫자가 아닌경우 예외처리
    if (isString(digit)) {
      return "invalid string";
    }

    seenAnyDigit = true;

    if (seenDot) {
      seenFractionalDigit = true;
      fractionalPart = fractionalPart * 10 + map[digit];
      ++dotIndex;

      continue;
    }

    answer = answer * 10 + map[digit];
  }
  if (!seenAnyDigit) {
    return "invalid string";
  }

  if (seenDot && !seenFractionalDigit) {
    return "invalid string";
  }

  if (seenDot) {
    answer = answer + fractionalPart / 10 ** dotIndex;
  }

  return isMinus ? -1 * answer : answer;
};

// TC (정수 케이스)
console.log(stringToNum("10"));
console.log(stringToNum("-10"));
console.log(stringToNum("--10"));
console.log(stringToNum("1010"));
console.log(stringToNum("0010"));

// TC (소수점 케이스)
console.log(stringToNum("10.1010"));
console.log(stringToNum("0.1010"));
console.log(stringToNum("10-.1010"));
console.log(stringToNum(".1010"));
console.log(stringToNum("0.10.10"));

// TC (예외 케이스)
console.log(stringToNum(""));
console.log(stringToNum("a"));
console.log(stringToNum("-"));
console.log(stringToNum("."));
console.log(stringToNum(".0.9"));
console.log(stringToNum("1."));
console.log(stringToNum("-0.a"));
