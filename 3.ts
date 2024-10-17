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
    if (windowMap[char] == null) {
      windowMap[char] = rightIndex;
      const length = rightIndex - leftIndex + 1;
      if (length > lengthMax) lengthMax = length;
      rightIndex++;
    } else {
      const charIndex = windowMap[char] + 1;
      windowMap[char] = null;
      if (charIndex > leftIndex) leftIndex = charIndex;
    }
  }
  return lengthMax;
}

console.log(lengthOfLongestSubstring('abba'));
