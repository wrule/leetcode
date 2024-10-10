// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1) return '';
  const first = strs[0];
  let result = '';
  for (let i = 1; i <= first.length; ++i) {
    const subStr = first.slice(0, i);
    console.log(subStr);
  }
  return result;
}

longestCommonPrefix(['束带结发', '']);
