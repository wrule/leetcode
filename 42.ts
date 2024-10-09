// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

function trap(height: number[]): number {
  let leftMax = 0;
  let rightMax = 0;
  const leftMaxList = Array(height.length).fill(0);
  const rightMaxList = Array(height.length).fill(0);
  for (let leftIndex = 0; leftIndex < height.length; ++leftIndex) {
    const rightIndex = height.length - 1 - leftIndex;
    const currentLeft = height[leftIndex];
    const currentRight = height[rightIndex];
    if (currentLeft > leftMax) leftMax = currentLeft;
    if (currentRight > rightMax) rightMax = currentRight;
    leftMaxList[leftIndex] = leftMax;
    rightMaxList[rightIndex] = rightMax;
  }
  let sum = 0;
  height.forEach((num, index) => {
    const leftMax = leftMaxList[index];
    const rightMax = rightMaxList[index];
    let result = 0;
    if (num < leftMax && num < rightMax) {
      result = Math.min(leftMax, rightMax) - num;
    }
    sum += result;
    // console.log(leftMax, num, rightMax, result);
  });
  return sum;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
