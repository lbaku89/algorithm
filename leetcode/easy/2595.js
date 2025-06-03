// time complexity O(log n)
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let binary = n.toString(2).split("").reverse();
    let answer = [0, 0];
    binary.forEach((n, idx) => {
        if (n === "1") {
            if (idx % 2 === 0) {
                ++answer[0];
            } else {
                ++answer[1];
            }
        }
    });

    return answer;
};
