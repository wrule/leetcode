// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  else if (nums.length === 1) return nums[0];
  else {
    return Math.max(
      rob(nums.slice(0, nums.length - 1)),
      rob(nums.slice(0, nums.length - 2)) + nums[nums.length - 1],
    );
  }
}

function rob2(nums: number[]): number {
  let max1 = 0, max2 = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i === 0) {
      max1 = nums[i];
      max2 = 0;
    } else {
      const pmax1 = max1, pmax2 = max2;
      max1 = pmax2 + nums[i];
      max2 = pmax1;
    }
    // console.log(max1, max2);
  }
  return Math.max(max1, max2);
}

console.log(rob2([2, 7, 9, 3, 1]));
