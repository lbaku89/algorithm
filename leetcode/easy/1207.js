// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

// time complexity O()
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();

    for (const n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    let entry = [...map.entries()];
    let set = new Set(
        entry.map(([k, v]) => {
            return v;
        })
    );

    return entry.length === set.size;
};

// testCase
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
