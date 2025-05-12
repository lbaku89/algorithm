// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

var RecentCounter = function () {
    this.q = [];
    this.idx = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.q.push(t);
    while (this.q[this.idx] < t - 3000) {
        ++this.idx;
    }

    return this.q.length - 1 - this.idx + 1;
};
