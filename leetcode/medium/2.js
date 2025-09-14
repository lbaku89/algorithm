/**
 * @problem https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let [n1, n2] = ["", ""];

  const extractNum = (node) => {
    let currentNode = node;
    let num = "";
    while (currentNode !== null) {
      num += String(currentNode.val);
      currentNode = currentNode.next;
    }
    return [...num].reverse().join("");
  };

  n1 = extractNum(l1);
  n2 = extractNum(l2);

  let sum = String(BigInt(n1) + BigInt(n2));
  let arr = [...sum].map((str) => {
    return new ListNode(Number(str));
  });

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = arr.length - 1; i >= 1; --i) {
    const node = arr[i];
    node.next = arr[i - 1];
  }

  return arr.at(-1);
};
