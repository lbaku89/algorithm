// https://leetcode.com/problems/sum-of-matrix-after-queries/

// 성공 good!
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
    let sum = 0;

    let removedRow = new Set();
    let removedColumn = new Set();

    for (let i = queries.length - 1; i >= 0; --i) {
        let [type, index, val] = queries[i];

        if (type && !removedColumn.has(index)) {
            // 1 -> column
            removedColumn.add(index);
            sum += (n - removedRow.size) * val;
        } else if (!type && !removedRow.has(index)) {
            // 0 -> row
            removedRow.add(index);
            sum += (n - removedColumn.size) * val;
        }
    }

    return sum;
};

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
