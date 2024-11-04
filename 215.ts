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
    if(left >= right) return;
    
    const pivot = arr[left];
    let i = left;
    let j = right;
    
    while(i < j) {
      while(i < j && arr[j] >= pivot) j--;
      while(i < j && arr[i] <= pivot) i++;
      if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    arr[left] = arr[i];
    arr[i] = pivot;
    
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
  quickSort(result, 0, result.length - 1);
  // 这里实现快速排序
  return result;
}

console.log(fastSort([3, 1, 9, 2, 5, 5, 8]));
