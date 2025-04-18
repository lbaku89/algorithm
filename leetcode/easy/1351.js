// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let cMax = grid[0].length;
    let rMax = grid.length;
    let cnt = 0;

    for (let r = 0; r < rMax; ++r) {
        for (let c = 0; c < cMax; ++c) {
            if (grid[r][c] >= 0) {
                ++cnt;
            } else {
                if (c < cMax) {
                    cMax = c;
                }
                break;
            }
        }
    }

    return grid[0].length * grid.length - cnt;
};
