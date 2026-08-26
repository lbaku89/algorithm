// https://leetcode.com/problems/middle-of-the-linked-list/

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
var middleNode = function (head) {
  let totalLength = 1,
    currentNode = 0;
  currentNode = head;
  while (currentNode.next) {
    ++totalLength;
    currentNode = currentNode.next;
  }

  let order =
    totalLength % 2 === 0 ? totalLength / 2 + 1 : Math.ceil(totalLength / 2);
  let node = head;
  for (let i = 1; i <= totalLength; ++i) {
    if (i === order) {
      return node;
    }
    node = node.next;
  }
};
