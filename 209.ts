// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 
// 子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

function minSubArrayLen(target: number, nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = 0;
  let lengthMin = Infinity;
  let sum = nums[0];
  while (rightIndex < nums.length) {
    if (sum < target) {
      rightIndex++;
      sum += nums[rightIndex];
    } else {
      const length = rightIndex - leftIndex + 1;
      if (length === 1) return 1;
      if (length < lengthMin) lengthMin = length;
      sum -= nums[leftIndex];
      leftIndex++;
    }
  }
  return lengthMin === Infinity ? 0 : lengthMin;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
