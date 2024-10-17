// 给定两个数组 nums1 和 nums2 ，返回 它们的
// 交集
//  。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// Nodejs 22
function intersection1(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  return Array.from(nums1Set.intersection(nums2Set));
}

function intersection2(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  return Array.from(nums2Set).filter((num) => nums1Set.has(num));
}

console.log(intersection([4,9,5], [9,4,9,8,4]));
