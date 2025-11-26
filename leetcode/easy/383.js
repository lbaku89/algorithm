// time complexity O(n + m) => O(n)
// space complexity O(1)

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineArr = Array(26).fill(0); // 공간 복잡도 +26
  const aIdx = "a".charCodeAt(0); // 공간 복잡도 +1

  // 시간 복잡도 magazine.length * 1
  for (const alphabet of magazine) {
    ++magazineArr[alphabet.charCodeAt(0) - aIdx];
  }

  // 시간 복잡도 ransomNote.length * 2
  for (const alphabet of ransomNote) {
    const cnt = --magazineArr[alphabet.charCodeAt(0) - aIdx]; // 공간 복잡도 +1
    if (cnt < 0) {
      return false;
    }
  }

  return true;
};
