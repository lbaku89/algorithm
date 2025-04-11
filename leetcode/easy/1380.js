// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let rowMin = Array(matrix.length).fill(0);
    let colmunMax = Array(matrix[0].length).fill(0);
    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[0].length; ++c) {
            if (matrix[r][rowMin[r]] > matrix[r][c]) {
                rowMin[r] = c;
            }

            if (matrix[colmunMax[c]][c] < matrix[r][c]) {
                colmunMax[c] = r;
            }
        }
    }

    let answer = [];
    rowMin.forEach((c, r) => {
        if (r === colmunMax[c]) {
            answer.push(matrix[r][c]);
        }
    });

    return answer;
};
