// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let prev1 = 1, prev2 = 2;
  let result = 0;
  for (let i = 3; i <= n; ++i) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }
  return result;
}

console.log(climbStairs(3));
