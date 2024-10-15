// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort();
  for (let startIndex = 0; startIndex < nums.length - 2; ++startIndex) {
    let leftIndex = startIndex + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      const startNum = nums[startIndex];
      const leftNum = nums[leftIndex];
      const rightNum = nums[rightIndex];
      const sum = startNum + leftNum + rightNum;
      if (sum > 0) {
        rightIndex--;
      } else if (sum < 0) {
        leftIndex++;
      } else {
        result.push([startNum, leftNum, rightNum]);
        leftIndex++;
      }
    }
  }
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
// [[-1,-1,2],[-1,0,1]]
