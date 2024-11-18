// 使用JavaScript实现顺序搜索
// // 测试数据
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sequentialSearch(arr, 5)); // 输出: 4
// console.log(sequentialSearch(arr, 10)); // 输出: -1


function binarySearch(numList: number[], target: number) {
  let leftIndex = 0, rightIndex = numList.length - 1;
  while (leftIndex <= rightIndex) {
    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const middleNum = numList[middleIndex];
    if (target < middleNum) {
      rightIndex = middleIndex - 1;
    } else if (target > middleNum) {
      leftIndex = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
