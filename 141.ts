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

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//   }
// }

function hasCycle(head: ListNode | null): boolean {
  let fastCurrent = head;
  let slowCurrent = head;
  do {
    fastCurrent = fastCurrent?.next?.next ?? null;
    slowCurrent = slowCurrent?.next ?? null;
    if (fastCurrent !== null && fastCurrent === slowCurrent) {
      return true;
    }
  } while (fastCurrent && slowCurrent);
  return false;
}
