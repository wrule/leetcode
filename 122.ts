// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

function maxProfit(prices: number[]): number {
  let sum = 0;
  for (let i = 1; i < prices.length; ++i) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) sum += diff;
  }
  return sum;
}

console.log(maxProfit([7,1,5,3,6,4]));

// TS每日一题

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
}

type A = Omit<Todo, 'title'>;
