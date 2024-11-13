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
  const length = Math.max(leftList.length, rightList.length);
  const result: number[] = [];
  for (let i = 0; i < length; ++i) {
    const leftNum = leftList[i];
    const rightNum = rightList[i];
    if (leftNum !== null && rightNum !== null) {
      if (leftNum < rightNum)
    } else if (leftNum == null) {

    } else {

    }
  }
  return leftList.concat(rightList);
}

console.log(mergeSort([4, 2, 5, 1, 6, 3]));
