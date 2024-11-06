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

class LinkNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

class MinHeap<T extends { num: number }> {
  public constructor(private readonly size: number) { }

  private heap: T[] = [];

  private siftUp() {
    let index = this.heap.length - 1;
    while (index >= 1) {
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
    if (this.heap.length < 2) return;
    let index = 0;
    while (true) {
      let minIndex = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < this.heap.length && this.heap[left].num < this.heap[minIndex].num) {
        minIndex = left;
      }
      if (right < this.heap.length && this.heap[right].num < this.heap[minIndex].num) {
        minIndex = right;
      }
      if (minIndex !== index) {
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        index = minIndex;
      } else {
        break;
      }
    }
  }

  public Push(item: T) {
    if (this.heap.length < this.size) {
      this.heap.push(item);
      this.siftUp();
    }
  }

  public Swap(next: (first: T) => T | null): T | null {
    if (this.heap.length === 0) return null;
    const first = this.heap.shift()!;
    const newFirst = next(first);
    if (newFirst) {
      this.heap.unshift(newFirst);
      this.siftDown();
    } else if (this.heap.length >= 2) {
      const last = this.heap.pop()!;
      this.heap.unshift(last);
      this.siftDown();
    }
    return first;
  }

  public Nums() {
    return this.heap.map((item) => item.num);
  }

  public Heap() {
    return this.heap.slice();
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  return null;
}

function test() {
  const lists = [
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({ index: 0, num })),
    [0.5, 7, 11, 12, 12, 9].map((num) => ({ index: 1, num })),
    [5.2, 10, 10.5, 11, 20, 21, 100, 111].map((num) => ({ index: 2, num })),
  ];
  const heap = new MinHeap<{ index: number, num: number }>(lists.length);
  lists.forEach((list) => {
    heap.Push(list.shift()!);
  });
  const result: number[] = [];
  while (true) {
    const min = heap.Swap((first) => {
      return lists[first.index].shift() ?? null;
    });
    if (min) {
      result.push(min.num);
    } else {
      break;
    }
  }
  console.log(result);
}

test();
