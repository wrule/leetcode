// 使用JavaScript实现快速排序
// // 测试
// var arr = [5, 3, 7, 6, 2, 9];
// console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]

function quickSort(numList: number[]) {
  // console.log('init', numList);
  const randomIndex = Math.floor(Math.random() * numList.length);
  const randomNum = numList[randomIndex];
  [numList[0], numList[randomIndex]] = [numList[randomIndex], numList[0]];
  // console.log(randomIndex, randomNum);
  // console.log('swap', numList);
  let leftIndex = 1, rightIndex = numList.length - 1;
  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && numList[rightIndex] >= randomNum) rightIndex--;
    while (leftIndex < rightIndex && numList[leftIndex] <= randomNum) leftIndex++;
    if (leftIndex < rightIndex) {
      // console.log('snap', numList[leftIndex], numList[rightIndex]);
      [numList[leftIndex], numList[rightIndex]] = [numList[rightIndex], numList[leftIndex]];
      // console.log(numList);
    }
  }
  numList[0] = numList[leftIndex];
  numList[leftIndex] = randomNum;
  return numList;
}

console.log(quickSort([5, 3, 7, 6, 2, 9, 11, 0, 8, 4]));
// console.log(quickSort([5, 3, 7, 6, 2, 9, 11, 0, 8, 4]));
