// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

function subsets(nums: number[]): number[][] {
  return Array.from({ length: Math.pow(2, nums.length) })
    .map((_, i) => nums.filter((_, j) => i >> j & 1));
}

console.log(subsets([1, 2, 3]));

// Ts每日一题


interface TodoA {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<{ [Q in P]: T[P] }, { readonly [Q in P]: T[P] }> extends true ? P : never]: T[P]
};

type Keys = GetReadonlyKeys<TodoA>;
