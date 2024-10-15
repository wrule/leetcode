// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

function threeSum(nums: number[]): number[][] {
  nums.sort();
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let result: number[][] = [];
  while (leftIndex < rightIndex - 1) {
    const leftNum = nums[leftIndex];
    const rightNum = nums[rightIndex];
    for (let middleIndex = leftIndex + 1; middleIndex < rightIndex; ++middleIndex) {
      const middleNum = nums[middleIndex];
      const sum = leftNum + middleNum + rightNum;
      if (sum < 0) {

      } else if (sum > 0) {

      } else {
        result.push([leftIndex, middleIndex, rightIndex]);
      }
    }
  }
  return [];
}

console.log(threeSum([-1,0,1,2,-1,-4]))
// [[-1,-1,2],[-1,0,1]]
