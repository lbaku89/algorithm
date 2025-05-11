// https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
// time complexity O(n)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    let map = new Map();
    let map2 = new Map();

    for (const cha of word1.split("")) {
        map.set(cha, (map.get(cha) || 0) + 1);
    }

    for (const cha of word2.split("")) {
        map2.set(cha, (map2.get(cha) || 0) + 1);
    }

    let chaArr = [...map.keys()];
    let chaArr2 = [...map2.keys()];

    if (chaArr.length !== chaArr2.length) {
        return false;
    }

    for (const cha of chaArr) {
        if (!map2.has(cha)) {
            return false;
        }
    }

    let cntArr = [...map.values()];
    let cntArr2 = [...map2.values()];

    cntArr.sort((a, b) => a - b);
    cntArr2.sort((a, b) => a - b);

    if (cntArr.length !== cntArr2.length) {
        return false;
    }

    for (let i = 0; i < cntArr.length; ++i) {
        if (cntArr[i] !== cntArr2[i]) {
            return false;
        }
    }

    return true;
};
