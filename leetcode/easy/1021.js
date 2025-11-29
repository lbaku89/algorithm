// https://leetcode.com/problems/remove-outermost-parentheses/description/
// time complexity O(n)
// space complexity O(n

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const map = {
    "(": 0,
    ")": 0,
  };
  let stack = [];
  let answer = "";

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    map[ch] = (map[ch] || 0) + 1;
    stack.push(ch);

    if (ch === "(") {
      continue;
    }

    if (stack.length % 2 === 0 && map["("] === map[")"]) {
      if (stack.length !== 2) {
        answer += stack.slice(1, stack.length - 1).join("");
      }
      stack = [];
      map["("] = 0;
      map[")"] = 0;
    }
  }

  return answer;
};
