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

  const result: number[] = [];
  let leftIndex = 0, rightIndex = 0;
  while (leftIndex < leftList.length || rightIndex < rightList.length) {
    const leftNum = leftList[leftIndex];
    const rightNum = rightList[rightIndex];
    if (leftNum !== null && rightNum !== null) {
      if (leftNum < rightNum) {
        leftIndex++;
        result.push(leftNum);
      } else {
        rightIndex++;
        result.push(rightNum);
      }
    } else {
      result.push(leftNum ?? rightNum);
      break;
    }
  }
  return result;
}

console.log(mergeSort([4, 2, 5, 1, 6, 3]));
