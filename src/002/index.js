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
 * @returns {Node}
 */
export default function addTwoNumbers(l1, l2) {
  console.log('add two numbers!', arguments)
  return l1
}
