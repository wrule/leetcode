// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

function convert(s: string, numRows: number): string {
  const charArray = Array.from(s);
  let result = '';
  for (let i = 0; i < numRows; ++i) {
    if (i === 0) {
      for (let n = 0; n < charArray.length; n += numRows + 2) {
        result += charArray[n];
      }
    } else if (i === numRows - 1) {
      for (let n = numRows - 1; n < charArray.length; n += numRows + 2) {
        result += charArray[n];
      }
    } else {
      let n = i;
      while (true) {
        if (n < charArray.length) {
          result += charArray[n];
        } else {
          break;
        }
        const middle = n + (numRows + 2) - i * 2;
        if (middle < charArray.length) {
          result += charArray[middle];
        } else {
          break;
        }
        n += numRows + 2;
      }
    }
  }
  return result;
}

console.log(convert('PAYPALISHIRING', 4));
