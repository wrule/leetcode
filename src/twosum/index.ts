
function
twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; ++i) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length; ++j) {
      const b = nums[j];
      if (a + b === target) {
        return [i, j];
      }
    }
  }
  return null;
}

function
twoSum2(nums: number[], target: number) {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const diff = target - num;
    if (numMap.has(diff)) {
      return [i, numMap.get(diff)];
    }
    numMap.set(num, i);
  }
  return null;
}

function randomArguments(size: number) {
  const nums = Array(size)
    .fill(0)
    .map(() => Math.floor(Math.random() * 1e6));
  const index1 = Math.floor(Math.random() * size);
  const diff = Math.floor(Math.random() * (size - 1)) + 1;
  const index2 = (index1 + diff) % size;
  return [nums, nums[index1] + nums[index2], index1, index2];
}

const oldTime = Number(new Date());
for (let i = 0; i < 1000; ++i) {
  const args = randomArguments(1e6);
  twoSum2(args[0] as number[], args[1] as number);
}
console.log(Number(new Date()) -  oldTime);

