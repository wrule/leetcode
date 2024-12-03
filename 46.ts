// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

function permute(nums: number[]): number[][] {
  if (nums.length <= 1) return [nums];
  const result: number[][] = [];
  nums.forEach((num) => {
    const others = nums.filter((item) => item !== num);
    permute(others).forEach((subArray) => {
      result.push([num].concat(subArray));
    });
  });
  return result;
}

console.log(permute([1, 2, 3, 4]));

// TS题目

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
