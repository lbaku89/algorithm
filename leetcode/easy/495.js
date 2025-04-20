// https://leetcode.com/problems/teemo-attacking/

// time complexity O(n)
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let sum = 0;

    for (let i = 0; i < timeSeries.length; ++i) {
        const t = timeSeries[i];
        if (i == timeSeries.length - 1) {
            sum += duration;
        } else if (t + duration - 1 > timeSeries[i + 1]) {
            sum = sum + (timeSeries[i + 1] - t);
        } else if (t + duration - 1 === timeSeries[i + 1]) {
            sum = sum + (duration - 1);
        } else {
            sum += duration;
        }
    }

    return sum;
};

console.log(findPoisonedDuration([1, 4], 2)); // 3
console.log(findPoisonedDuration([1, 2], 2)); // 3
