/**
 * @problem https://leetcode.com/problems/add-two-numbers/
 */

/**
 * @optimize
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
  const answerNode = new ListNode();
  let curNode = answerNode;
  let addOne = false;
  while (l1 || l2 || addOne) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (addOne ? 1 : 0);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if (sum >= 10) {
      addOne = true;
    } else {
      addOne = false;
    }

    curNode.val = sum % 10;

    if (l1 || l2 || addOne) {
      curNode.next = new ListNode();
      curNode = curNode.next;
    }
  }

  return answerNode;
};

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
