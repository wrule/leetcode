// 使用JavaScript实现归并排序
// let array = [4, 2, 5, 1, 6, 3];
// console.log("Sorted array is:", mergeSort(array));

function mergeSort(numList: number[]): number[] {
  console.log(numList);
  console.log();
  if (numList.length <= 1) return numList.slice();
  const rightStartIndex = Math.floor(numList.length / 2);
  const leftList = mergeSort(numList.slice(0, rightStartIndex));
  const rightList = mergeSort(numList.slice(rightStartIndex));
  return leftList.concat(rightList);
}

console.log(mergeSort([4, 2, 5, 1, 6, 3]));
