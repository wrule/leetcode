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

function hasCycle(head: ListNode | null): boolean {
  let fastCurrent = head;
  let slowCurrent = head;
  while (fastCurrent && slowCurrent) {
    // if (fastCurrent === slowCurrent && fastCurrent !== head) {
    //   return true;
    // }
    fastCurrent = fastCurrent.next?.next ?? null;
    slowCurrent = slowCurrent.next;
  }
  return false;
}
