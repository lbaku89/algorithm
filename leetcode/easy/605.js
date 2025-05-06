// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

// time complexity O(n)
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let cnt = n;
    for (let i = 0; i < flowerbed.length; ++i) {
        if (flowerbed[i] === 0) {
            let canPlant = true;
            if (i - 1 >= 0 && flowerbed[i - 1] === 1) {
                canPlant = false;
            }
            if (i + 1 < flowerbed.length && flowerbed[i + 1] === 1) {
                canPlant = false;
            }

            if (canPlant) {
                flowerbed[i] = 1;
                --cnt;
            }
        }
    }
    return cnt <= 0;
};

// other solution
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let cnt = n;
    for (let i = 0; i < flowerbed.length; ++i) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            --cnt;
            flowerbed[i] = 1;
        }
    }
    return cnt <= 0;
};
