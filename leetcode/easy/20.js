// time complexity O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];

    const openFlag = ["(", "{", "["];
    const closeFlag = [")", "}", "]"];
    for (const cha of [...s]) {
        let idx = openFlag.indexOf(cha);
        let idx2 = closeFlag.indexOf(cha);
        if (idx >= 0) {
            arr.push(cha);
        } else {
            if (arr.at(-1) !== openFlag[idx2]) {
                return false;
            } else {
                arr.pop();
            }
        }
    }

    return arr.length === 0 ? true : false;
};
