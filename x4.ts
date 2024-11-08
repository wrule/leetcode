
console.log('你好，世界');

function bubbleSort(list: number[]) {
  for (let i = list.length - 1; i >= 1; --i) {
    for (let j = 0; j < i; ++j) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
}

let arr = [5, 3, 8, 4, 6];
console.log(bubbleSort(arr));
