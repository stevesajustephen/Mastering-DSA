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

// 1 -> 2 -> 3      2 ->  1 -> 3
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  } else {
    const newHead = head.next;

    let prev = null;
    let current = head;
    let next = current.next;

    while (next) {
      current.next = next.next;
      next.next = current;
      if (prev) {
        prev.next = next;
      }
      prev = current;
      current = prev.next;
      next = current?.next;
    }

    return newHead;
  }
};
