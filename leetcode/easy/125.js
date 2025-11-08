/**
 * @problem https://chatgpt.com/c/690efec2-5a4c-8324-947e-e3f5227ae890
 */

/**
 * O(n)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isLetter = (letter) => {
    const code = letter.charCodeAt(0);
    if ("a".charCodeAt(0) <= code && code <= "z".charCodeAt(0)) {
      return true;
    } else if ("A".charCodeAt(0) <= code && code <= "Z".charCodeAt(0)) {
      return true;
    } else if ("0".charCodeAt(0) <= code && code <= "9".charCodeAt(0)) {
      return true;
    }
    return false;
  };

  let [leftIdx, rightIdx] = [0, s.length - 1];

  while (leftIdx < rightIdx) {
    while (leftIdx < rightIdx && !isLetter(s[leftIdx])) {
      ++leftIdx;
    }
    while (leftIdx < rightIdx && !isLetter(s[rightIdx])) {
      --rightIdx;
    }

    if (
      leftIdx < rightIdx &&
      s[leftIdx].toLowerCase() !== s[rightIdx].toLowerCase()
    ) {
      return false;
    }
    ++leftIdx;
    --rightIdx;
  }

  return true;
};

/**
 *
 *O(n)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isLetter = (letter) => {
    const code = letter.charCodeAt(0);

    if ("a".charCodeAt(0) <= code && code <= "z".charCodeAt(0)) {
      return true;
    }

    if ("A".charCodeAt(0) <= code && code <= "Z".charCodeAt(0)) {
      return true;
    }

    if ("0".charCodeAt(0) <= code && code <= "9".charCodeAt(0)) {
      return true;
    }

    return false;
  };

  const arr = [...s]
    .filter((cha) => isLetter(cha))
    .map((cha) => cha.toLowerCase());

  const n = arr.length - 1;
  const end = Math.floor(arr.length / 2) - 1;
  for (let i = 0; i <= end; ++i) {
    if (arr[i] !== arr[n - i]) {
      return false;
    }
  }
  return true;
};
