// 使用JavaScript实现插入排序
// let array = [12, 11, 13, 5, 6];
// console.log("Sorted array is:", insertionSort(array));

function insertionSort(numList: number[]) {
  for (let i = 1; i < numList.length; ++i) {
    const current = numList[i];
    for (let j = i - 1; j >= 0; --j) {
      if (numList[j] > current) {
        numList[j + 1] = numList[j];
      } else {
        numList[j + 1] = current;
        break;
      }
    }
  }
  return numList;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
