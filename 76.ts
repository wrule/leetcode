// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

function minWindow(s: string, t: string): string {
  let result = '';
  let leftIndex = 0;
  const tCharArray = Array.from(t);
  const tCharDict: any = { };
  tCharArray.forEach((char) => tCharDict[char] = (tCharDict[char] ?? 0) + 1);
  let tCharNum = Object.keys(tCharDict).length;
  const sCharDict: any = { };
  for (let rightIndex = 0; rightIndex < s.length; ++rightIndex) {
    const char = s[rightIndex];
    if (tCharDict[char]) {
      console.log(char);
      sCharDict[char] = (sCharDict[char] ?? 0) + 1;
      if (sCharDict[char] === tCharDict[char]) {
        tCharNum--;
        console.log(sCharDict, tCharNum);
      }
    }
  }
  return result;
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
// // BANC
// console.log(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'));
// // abbbbbcdd
