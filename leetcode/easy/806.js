// https://leetcode.com/problems/number-of-lines-to-write-string/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let base = "a".charCodeAt(0);
    let line = 1,
        pixels = 0;

    for (let i = 0; i < s.length; ++i) {
        let width = widths[s.charCodeAt(i) - base];
        if (pixels + width <= 100) {
            pixels += width;
        } else {
            ++line;
            pixels = width;
        }
    }

    return [line, pixels];
};
