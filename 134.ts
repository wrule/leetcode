// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const diff = gas.map((item, index) => item - cost[index]);
  console.log(diff);
  const list1: number[] = [];
  for (let i = 0, sum = 0; i < diff.length; ++i) {
    sum += diff[i];
    list1[i] = sum;
  }
  console.log(list1);
  const list2: number[] = [];
  for (let i = diff.length - 1, sum = 0; i >= 0; --i) {
    sum += diff[i];
    list2[i] = sum;
  }
  console.log(list2);
  return -1;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
// console.log(canCompleteCircuit([2,3,4], [3,4,3]));
