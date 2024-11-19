// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const root = new ListNode();
  let current = root;
  let list1Node = list1, list2Node = list2;
  while (list1Node || list2Node) {
    if (list1Node && list2Node) {
      if (list1Node.val <= list2Node.val) {
        current.next = new ListNode(list1Node.val);
        list1Node = list1Node.next;
      } else {
        current.next = new ListNode(list2Node.val);
        list2Node = list2Node.next;
      }
    } else if (list1Node) {
      current.next = new ListNode(list1Node.val);
      list1Node = list1Node.next;
    } else {
      current.next = new ListNode(list2Node!.val);
      list2Node = list2Node!.next;
    }
    current = current.next!;
  }
  return root.next;
}
