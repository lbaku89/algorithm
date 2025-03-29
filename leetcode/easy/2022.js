//  https://leetcode.com/problems/convert-1d-array-into-2d-array/description/

// 시간 복잡도 O(n)
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) {
        return [];
    }

    let answer = [];

    for (let i = 0; i < m; ++i) {
        let sliced = original.slice(i * n, (i + 1) * n);
        answer.push(sliced);
    }
    return answer;
};
