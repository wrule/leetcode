
class NumberMinHeap {
  public constructor(private readonly size: number) { }

  public Add(num: number) {
    
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
