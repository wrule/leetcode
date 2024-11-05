
class NumberMinHeap {
  public constructor(private readonly size: number) { }

  public heap: number[] = [];

  public Add(num: number) {
    if (this.heap.length < this.size) {
      this.heap.push(num);
      this.siftUp(this.heap.length - 1);
    } else {
      if (num > this.heap[0]) {
        this.heap[0] = num;
        this.siftDown(0);
      }
    }
  }

  private siftUp(index: number) {
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

  private siftDown(index: number) {
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

  public display() {
    if (this.heap.length === 0) return "Empty heap";

    const height = Math.floor(Math.log2(this.heap.length)) + 1;
    const result: string[] = [];
    
    for (let level = 0; level < height; level++) {
      const startIndex = Math.pow(2, level) - 1;
      const endIndex = Math.min(Math.pow(2, level + 1) - 1, this.heap.length);
      const levelNodes = this.heap.slice(startIndex, endIndex);
      
      // 计算当前层的缩进
      const padding = " ".repeat(Math.pow(2, height - level - 1) - 1);
      const spacing = " ".repeat(Math.pow(2, height - level) - 1);
      
      // 构建当前层的字符串
      result.push(padding + levelNodes.join(spacing));
    }

    console.log(result.join("\n"));
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
