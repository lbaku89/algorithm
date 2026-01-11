// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const isValidCha = (cha) => {
    if (
      "a".charCodeAt(0) <= cha.charCodeAt(0) &&
      "z".charCodeAt(0) >= cha.charCodeAt(0)
    ) {
      return true;
    }
    return false;
  };
  const isValid = (str) => {
    return isValidCha(str[0]) && isValidCha(str[1]);
  };

  const make = (str) => {
    const map = {};
    for (let i = 1; i < str.length; ++i) {
      let curStr = str[i - 1] + str[i];
      if (!isValid(curStr)) {
        continue;
      }
      map[curStr] === undefined ? (map[curStr] = 1) : ++map[curStr];
    }
    return map;
  };
  const str1Map = make(str1.toLowerCase()),
    str2Map = make(str2.toLowerCase());
  const allKeyword = new Set([
    ...Object.keys(str1Map),
    ...Object.keys(str2Map),
  ]);

  let all = 0;
  let common = 0;

  allKeyword.forEach((str) => {
    if (str1Map[str] && str2Map[str]) {
      common += Math.min(str1Map[str], str2Map[str]);
      all += Math.max(str1Map[str], str2Map[str]);
    } else if (str1Map[str] || str2Map[str]) {
      all += str1Map[str] ? str1Map[str] : str2Map[str];
    }
  });

  return all === 0 ? 1 * 65536 : Math.floor((common / all) * 65536);
}
