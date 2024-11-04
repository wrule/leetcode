// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

function findKthLargest(nums: number[], k: number): number {
  let result = 0;
  nums.forEach((num) => {

  });
  return result;
}

function fastSort(nums: number[]) {
  let result = nums.slice();
  function quickSort(arr: number[], left: number, right: number) {
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
    quickSort(arr, left, mvLeft - 1);
    quickSort(arr, mvLeft + 1, right);
  }
  quickSort(result, 0, result.length - 1);
  return result;
}

console.log(fastSort([3, 1, 9, 2, 5, 5, 8]));
