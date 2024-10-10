// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。


function isValid(s: string): boolean {
  const charArray = Array.from(s);
  const charStack: string[] = [];
  for (let i = 0; i < charArray.length; ++i) {
    const char = charArray[i];
    if (char === '(') {
      charStack.push(char);
    }
    if (char === ')') {
      if (charStack.pop() !== '(') return false;
    }
    if (char === '{') {
      charStack.push(char);
    }
    if (char === '}') {
      if (charStack.pop() !== '{') return false;
    }
    if (char === '[') {
      charStack.push(char);
    }
    if (char === ']') {
      if (charStack.pop() !== '[') return false;
    }
  }
  return charStack.length === 0;
}

console.log(isValid('()[]{}'));
