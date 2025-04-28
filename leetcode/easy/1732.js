// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let nowHeight = 0;
    let maxAltitude = 0;
    for (let i = 0; i < gain.length; ++i) {
        nowHeight += gain[i];
        maxAltitude = Math.max(maxAltitude, nowHeight);
    }

    return maxAltitude;
};
