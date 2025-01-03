// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

function isPalindrome(s: string): boolean {
  s = s.replaceAll(/\W/g, '').replaceAll('_', '').toLowerCase();
  const charArray = Array.from(s);
  let result = true;
  let index = 0;
  while (true) {
    const rightIndex = charArray.length - 1 - index;
    if (rightIndex <= index) break;
    if (charArray[index] != charArray[rightIndex]) {
      result = false;
      break;
    }
    index++;
  }
  return result;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
