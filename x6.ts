// 使用JavaScript实现插入排序
// let array = [12, 11, 13, 5, 6];
// console.log("Sorted array is:", insertionSort(array));

function insertionSort(numList: number[]) {
  for (let i = 1; i < numList.length; ++i) {
    const current = numList[i];
    let j = i - 1;
    for (; j >= 0 && numList[j] > current; --j) {
      numList[j + 1] = numList[j];
    }
    numList[j + 1] = current;
  }
  return numList;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
