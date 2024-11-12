// 使用JavaScript实现插入排序
// let array = [12, 11, 13, 5, 6];
// console.log("Sorted array is:", insertionSort(array));

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
