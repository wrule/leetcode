
class TupleMinHeap {
  public constructor(private readonly size: number) { }

  private heap: [number, number][] = [];

  public Add(tuple: [number, number]) {
    if (this.heap.length < this.size) {
      this.heap.push(tuple);
      this.siftUp();
    } else {
      if (tuple[1] > this.heap[0][1]) {
        this.heap[0] = tuple;
        this.siftDown();
      }
    }
  }

  private siftUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][1] < this.heap[parentIndex][1]) {
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

function topKFrequent(nums: number[], k: number): number[] {
  const hashMap: { [name: number]: number } = { };
  nums.forEach((num) => hashMap[num] = (hashMap[num] ?? 0) + 1);
  const mapList: [number, number][] = Object.entries(hashMap).map(([name, value]) => ([Number(name), value]));
  const minHeap = new TupleMinHeap(k);
  mapList.forEach((tuple) => {
    minHeap.Add(tuple);
  });
  return minHeap.Result();
}

console.log(topKFrequent([1,1,1,2,2,3], 2));