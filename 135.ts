// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
// [5, 4, 3, 2, 1, 1, 1, 2, 3, 4, 5, 4, 4, 4]
// [*, \, \, \, \, -, -, /, /, /, /, \, -, -]
// [5, 4, 3, 2, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1]
// [3, 1, 2, 8, 2, 3, 5, 6, 6, 1, 2]
// [*, \, /, /, \, /, /, /, -, \, /]
function candy(ratings: number[]): number {
  ratings = [Infinity, ...ratings, Infinity];
  const results = Array(ratings.length).fill(0);
  const k: (index: number) => number = (index) => {
    if (results[index]) return results[index];
    const curr = ratings[index];
    const prev = ratings[index - 1];
    const next = ratings[index + 1];
    let value = 0;
    if (curr > prev && curr <= next) value = k(index - 1) + 1;
    else if (curr > prev && prev >= next) value = k(index - 1) + 1;
    else if (curr > next && curr <= prev) value = k(index + 1) + 1;
    else if (curr > next && next >= prev) value = k(index + 1) + 1;
    else value = 1;
    results[index] = value;
    return value;
  };
  for (let i = 1; i < ratings.length - 1; ++i) {
    k(i);
  }
  let sum = 0;
  results.forEach((num) => sum += num);
  return sum;
}

console.log(candy([3, 1, 2, 8, 2, 3, 5, 6, 6, 1, 2]));
