
class NumberMinHeap {
  public constructor(private readonly size: number) { }

  private heap: number[] = [];

  public Add(num: number) {
    if (this.heap.length < this.size) {
      this.heap.push(num);
      this.siftUp();
    } else {
      if (num > this.heap[0]) {
        this.heap[0] = num;
        this.siftDown();
      }
    }
  }

  private siftUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
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
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
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
}

function topKFrequent(nums: number[], k: number): number[] {
  const hashMap: { [name: number]: number } = { };
  nums.forEach((num) => hashMap[num] = (hashMap[num] ?? 0) + 1);
  const mapList = Object.entries(hashMap).map(([name, value]) => ([Number(name), value]));
  console.log(mapList);
  return [];
}

// console.log(topKFrequent([1,1,1,2,2,3], 2));
const minHeap = new NumberMinHeap(3);
minHeap.Add(1);
minHeap.Add(2);
minHeap.Add(3);
minHeap.Add(1.5);
minHeap.display();
