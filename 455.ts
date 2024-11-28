// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。

function findContentChildren(g: number[], s: number[]): number {
  const maxS = Math.max(...s);
  g = g.filter((num) => num <= maxS);
  s.sort((a, b) => b - a);
  g.sort((a, b) => b - a);
  // console.log(s);
  // console.log(g);
  let result = 0;
  for (let sIndex = 0, gIndex = 0; gIndex < g.length; gIndex++) {
    const sCurrent = s[sIndex];
    const gCurrent = g[gIndex];
    if (sCurrent >= gCurrent) {
      sIndex++;
      result++;
    }
  }
  return result;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
