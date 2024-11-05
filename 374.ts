
class NumberMinHeap {
  public constructor(private readonly size: number) { }

  public heap: number[] = [];

  public Add(num: number) {
    if (this.heap.length < this.size) {
      this.heap.push(num);
    } else {
      if (num > this.heap[0]) {
        this.heap[0] = num;
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

console.log(topKFrequent([1,1,1,2,2,3], 2));
