// https://leetcode.com/problems/sum-of-matrix-after-queries/

// FATAL ERROR: Reached heap limit allocation failed
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
    let arr = Array.from({ length: n }, () => {
        return Array(n).fill(0);
    });

    for (const query of queries) {
        const [type, index, val] = query;

        if (type) {
            for (let i = 0; i < n; ++i) {
                arr[index][i] = val;
            }
        } else {
            for (let i = 0; i < n; ++i) {
                arr[i][index] = val;
            }
        }
    }

    let sum = 0;
    arr.forEach((row) => {
        row.forEach((num) => {
            sum += num;
        });
    });
    return sum;
};
