
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

console.log(twoSum([1, 3, 4, 2, 9], 13));
