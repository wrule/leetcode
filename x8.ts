// 使用JavaScript实现快速排序
// // 测试
// var arr = [5, 3, 7, 6, 2, 9];
// console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]

function quickSort(numList: number[]) {
  const randomIndex = Math.floor(Math.random() * numList.length);
  const randomNum = numList[randomIndex];
  console.log(randomIndex, randomNum);
  let leftIndex = 0, rightIndex = numList.length - 1;
  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && numList[rightIndex] >= randomNum) rightIndex--;
    while (leftIndex < rightIndex && numList[leftIndex] <= randomNum) leftIndex++;
    if (leftIndex < rightIndex) {
      [numList[leftIndex], numList[rightIndex]] = [numList[rightIndex], numList[leftIndex]];
    }
  }
  console.log(leftIndex);
  numList[randomIndex] = numList[leftIndex];
  numList[leftIndex] = randomNum;
  return numList;
}

console.log(quickSort([5, 3, 7, 6, 2, 9]));
