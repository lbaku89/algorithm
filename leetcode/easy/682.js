// https://leetcode.com/problems/baseball-game/submissions/1611556294/
// time complexity O(n)
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let arr = [];
    let sum = 0;

    for (const op of operations) {
        if (op === "+") {
            arr.push(arr.at(-1) + arr.at(-2));
        } else if (op === "D") {
            arr.push(arr.at(-1) * 2);
        } else if (op === "C") {
            arr.pop();
        } else {
            arr.push(Number(op));
        }
    }

    return arr.reduce((acc, cur) => acc + cur, 0);
};
