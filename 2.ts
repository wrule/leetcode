// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let result = new ListNode();
  let current1 = l1;
  let current2 = l2;
  let currentResult = result;

  let carry = 0;
  while (current1 || current2) {
    const sum = (current1?.val ?? 0) + (current2?.val ?? 0) + carry;
    const num = sum % 10;
    currentResult.next = new ListNode(num);
    carry = Math.floor(sum / 10);
    current1 = current1?.next ?? null;
    current2 = current2?.next ?? null;
    currentResult = currentResult.next;
  }
  if (carry > 0) currentResult.next = new ListNode(carry);

  return result.next;
}
