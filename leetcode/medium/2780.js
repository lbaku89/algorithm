// https://leetcode.com/problems/minimum-index-of-a-valid-split/description/
// time complexity O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    const l = nums.length;

    // Step 1: 전체 카운트 맵 만들기
    const totalMap = new Map();
    for (const n of nums) {
        totalMap.set(n, (totalMap.get(n) || 0) + 1);
    }

    // Step 2: dominant element 찾기 (조건: 등장 횟수가 절반 초과)
    let dominant = -1;
    for (const [n, cnt] of totalMap.entries()) {
        if (cnt * 2 > l) {
            dominant = n;
            break;
        }
    }

    let splitIdx = undefined;
    let leftCnt = 0;
    let rightCnt = totalMap.get(dominant);

    // Step 3: 왼쪽 카운트 누적하면서 valid split 찾기
    for (let i = 0; i <= l - 1; ++i) {
        if (nums[i] === dominant) {
            ++leftCnt;
            --rightCnt;
        }

        if (leftCnt * 2 > i + 1 && rightCnt * 2 > l - (i + 1)) {
            splitIdx = i;
            break;
        }
    }

    return splitIdx === undefined ? -1 : splitIdx;
};
