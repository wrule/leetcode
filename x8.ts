// 使用JavaScript实现快速排序
// // 测试
// var arr = [5, 3, 7, 6, 2, 9];
// console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]

function quickSort(numList: number[]): number[] {
  if (numList.length <= 1) return numList;
  const randomIndex = Math.floor(Math.random() * numList.length);
  const pivot = numList[randomIndex];
  [numList[0], numList[randomIndex]] = [numList[randomIndex], numList[0]];
  let leftIndex = 1, rightIndex = numList.length - 1;
  while (leftIndex <= rightIndex) {
    while (leftIndex <= rightIndex && numList[rightIndex] >= pivot) rightIndex--;
    while (leftIndex <= rightIndex && numList[leftIndex] <= pivot) leftIndex++;
    if (leftIndex <= rightIndex) {
      [numList[leftIndex], numList[rightIndex]] = [numList[rightIndex], numList[leftIndex]];
    }
  }
  if (numList[rightIndex] < pivot) {
    [numList[0], numList[rightIndex]] = [numList[rightIndex], pivot];
  }
  return [
    ...quickSort(numList.slice(0, rightIndex)),
    numList[rightIndex],
    ...quickSort(numList.slice(rightIndex + 1)),
  ];
}

console.log(quickSort([5, 3, 7, 6, 2, 9, 11, 0, 8, 4]));
// console.log(quickSort([5, 3, 7, 6, 2, 9, 11, 0, 8, 4]));

