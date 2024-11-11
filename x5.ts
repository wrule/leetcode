// 使用JavaScript实现选择排序
// // 测试数据
// let arr = [5, 3, 2, 4, 1];
// console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

function selectionSort(numList: number[]) {
  for (let i = 0; i < numList.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < numList.length; ++j) {
      if (numList[j] < numList[i]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [numList[minIndex], numList[i]] = [numList[i], numList[minIndex]];
    }
  }
  return numList;
}

console.log(selectionSort([5, 3, 2, 4, 1]));