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
  let resultNode = new ListNode();
  let tail = resultNode;

  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    if (sum < 10) {
      const newNode = new ListNode(sum);
      tail.next = newNode;
      tail = newNode;
      carry = 0;
    } else {
      const newNode = new ListNode(sum % 10);
      tail.next = newNode;
      carry = Math.floor(sum / 10);
      tail = newNode;
    }
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resultNode.next;
};
