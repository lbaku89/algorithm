// https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let cur = head;
    let next = null;

    while (cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};
