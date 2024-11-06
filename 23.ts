// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

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

class MinHeap<T extends { num: number }> {
  public constructor(private readonly size: number) { }

  private heap: T[] = [];

  public Push(item: T) {
    if (this.heap.length < this.size) {
      this.heap.push(item);
      this.siftUp();
    }
  }

  public Swap(item: T): T | null {
    if (this.heap.length === 0) return null;
    if (item) {
      this.heap[0] = item;
    } else {
      this.heap.splice(0, 1);
    }
  }

  private siftUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].num < this.heap[parentIndex].num) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private siftDown() {
    let index = 0;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }

  public Result() {
    return this.heap.map((tup) => tup[1]);
  }
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let result = new ListNode();
  return result;
}
