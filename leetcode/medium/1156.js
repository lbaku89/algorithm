// https://leetcode.com/problems/swap-for-longest-repeated-character-substring/

// 실패 -> 테케케 aaabaaa에 대응 못함
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
    let map = new Map();
    let cnt = 1;
    let lastIdx = text.length - 1;
    for (let i = 1; i <= lastIdx; ++i) {
        let previous = text[i - 1];
        let alphabet = text[i];

        if (text[i - 1] !== alphabet) {
            if (map.has(text[i - 1])) {
                map.get(text[i - 1]).push(cnt);
            } else {
                map.set(text[i - 1], [cnt]);
            }
            cnt = 0;
        }
        cnt++;
        if (lastIdx === i) {
            if (map.has(alphabet)) {
                map.get(alphabet).push(cnt);
            } else {
                map.set(alphabet, [cnt]);
            }
        }
    }

    let arr = [...map.values()];
    let answer = 0;
    arr.forEach((cntArr) => {
        cntArr.sort((a, b) => {
            return b - a;
        });

        let max = cntArr[0];
        if (cntArr.length > 1) {
            ++max;
        }
        answer = Math.max(max, answer);
    });

    return answer;
};
