// https://leetcode.com/problems/distribute-money-to-maximum-children/description/

// 시간 복잡도 O(1)

//  두번째 코드
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    if (money < children) {
        return -1;
    }

    if (children * 8 < money) {
        return --children;
    }

    if (children * 8 === money) {
        return children;
    }

    let remainingMoney = money - children;
    let dividedBy7 = Math.floor(remainingMoney / 7);
    let remainingChildren = children - dividedBy7;

    if (remainingChildren === 1 && remainingMoney % 7 === 3) {
        return --dividedBy7;
    }
    return dividedBy7;
};

//  첫 코드
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    if (money < children || (money === 4 && children === 1)) {
        return -1;
    }
    let remainingMoney = money - children;
    let remainingChildren = children;

    let answer = Math.floor(remainingMoney / 7);
    remainingMoney = remainingMoney - answer * 7;
    remainingChildren = remainingChildren - answer;

    if (remainingChildren === 1 && remainingMoney === 3) {
        --answer;
    } else if (remainingChildren === 0 && remainingMoney > 0) {
        --answer;
    } else if (remainingChildren < 0) {
        answer = children - 1;
    }
    return answer;
};
