// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 
// 子串
//  的长度。

function lengthOfLongestSubstring(s: string): number {
  const charArray = Array.from(s);
  let leftIndex = 0;
  let rightIndex = 0;
  let lengthMax = 0;
  const windowMap: any = { };
  while (rightIndex < charArray.length) {
    const char = charArray[rightIndex];
    console.log(leftIndex, rightIndex, char);
    if (windowMap[char] == null) {
      windowMap[char] = rightIndex;
      const length = rightIndex - leftIndex + 1;
      console.log(length);
      if (length > lengthMax) lengthMax = length;
    } else {
      leftIndex = windowMap[char] + 1;
      windowMap[char] = null;
    }
    rightIndex++;
  }
  return lengthMax;
}

console.log(lengthOfLongestSubstring('abcabcbb'));