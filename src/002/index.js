export function Node(val) {
  this.val = val
  this.next = null
}

/**
 * You are given two non-empty linked lists representing two
 * non-negative integers. The digits are stored in reverse order and
 * each of their nodes contain a single digit. Add the two numbers and
 * return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 *
 * @param l1 {Node} The head of the first linked list
 * @param l2 {Node} The head of the second linked list
 * @returns {Node} The head of the new list
 * @summary
 *  - Runtime: O(max(n, m))
 *  - Leetcode stats:
 *    - Runtime: 112ms (84.55th percentile)
 *    - Memory: 39.1mb (18.63rd percentile)
 */
export default function addTwoNumbers(l1, l2) {
  let currFirst = l1
  let currSecond = l2
  let carry = 0

  let resultHead
  let resultCurr

  while (currFirst || currSecond) {
    const firstData = currFirst ? currFirst.val : 0
    const secondData = currSecond ? currSecond.val : 0
    const sum = firstData + secondData + carry
    carry = sum > 9 ? 1 : 0

    const node = new Node(sum % 10)
    if (!resultHead) resultHead = node
    if (resultCurr) resultCurr.next = node
    resultCurr = node

    currFirst = currFirst ? currFirst.next : null
    currSecond = currSecond ? currSecond.next : null
  }

  if (carry) {
    resultCurr.next = new Node(1)
  }

  return resultHead
}
