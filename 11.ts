// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 思路：动矮的一侧的指针才有机会使得面积变大


function maxArea(height: number[]): number {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let result = 0;
  while (rightIndex > leftIndex) {
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];
    const area = (rightIndex - leftIndex) * Math.min(leftHeight, rightHeight);
    if (area > result) result = area;
    if (leftHeight < rightHeight) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return result;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
