// https://leetcode.com/problems/arranging-coins/description/

// 2진 탐색 하나 더 풀어보기
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let left = 1;
    let right = n;
    let mid = parseInt((left + right) / 2);

    while (right >= left) {
        mid = parseInt((left + right) / 2);
        let result = (mid + 1) * mid * 0.5;

        if (result < n) {
            left = mid + 1;
        } else if (result === n) {
            return mid;
        } else {
            right = mid - 1;
        }
    }

    return right;
};
