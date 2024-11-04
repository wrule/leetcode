// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

function quickSortPrune(arr: number[], left: number, right: number, targetIndex: number) {
  if (left >= right) return;
  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
  [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];
  let mvLeft = left, mvRight = right;
  const baseValue = arr[left];
  while (mvLeft < mvRight) {
    while (mvLeft < mvRight && arr[mvRight] >= baseValue) mvRight--;
    while (mvLeft < mvRight && arr[mvLeft] <= baseValue) mvLeft++;
    if (mvLeft < mvRight) {
      [arr[mvLeft], arr[mvRight]] = [arr[mvRight], arr[mvLeft]];
    }
  }
  arr[left] = arr[mvLeft];
  arr[mvLeft] = baseValue;
  if (targetIndex < mvLeft) {
    quickSortPrune(arr, left, mvLeft - 1, targetIndex);
  } else if (targetIndex > mvLeft) {
    quickSortPrune(arr, mvLeft + 1, right, targetIndex);
  } else {
    return mvLeft;
  }
}

function findKthLargest(nums: number[], k: number): number {
  quickSortPrune(nums, 0, nums.length - 1, nums.length - k);
  return nums[nums.length - k];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
