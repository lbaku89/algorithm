// https://leetcode.com/problems/1-bit-and-2-bit-characters/

// time complexity O(n)
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let isOneBit;

    for (let i = 0; i < bits.length; ) {
        if (bits[i] === 1) {
            isOneBit = false;
            i += 2;
        } else {
            isOneBit = true;
            i += 1;
        }
    }

    return isOneBit;
};

// test cases
console.log(isOneBitCharacter([1, 0, 0])); // true
