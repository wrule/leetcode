// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let diff = gas.map((item, index) => item - cost[index]);
  diff = diff.concat(diff);
  for (let i = 0; i < gas.length; ++i) {
    if (diff[i] < 0) continue;
    let sum = 0;
    for (let j = i; j < i + gas.length; ++j) {
      sum += diff[j];
      if (sum < 0) break;
    }
    if (sum < 0) continue;
    return i;
  }
  return -1;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));
