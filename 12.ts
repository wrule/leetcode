// 罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：

// 如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
// 如果该值以 4 或 9 开头，使用 减法形式，表示从以下符号中减去一个符号，例如 4 是 5 (V) 减 1 (I): IV ，9 是 10 (X) 减 1 (I)：IX。仅使用以下减法形式：4 (IV)，9 (IX)，40 (XL)，90 (XC)，400 (CD) 和 900 (CM)。
// 只有 10 的次方（I, X, C, M）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加 5 (V)，50 (L) 或 500 (D)。如果需要将符号附加4次，请使用 减法形式。
// 给定一个整数，将其转换为罗马数字。

const weightMap: any = { 1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V', 1: 'I' };
const weightList = Object.keys(weightMap).map((key) => Number(key)).sort((a, b) => b - a);

function intToRoman(num: number): string {
  let result = '';
  for (let i = 0; i < weightList.length && num > 0; ++i) {
    const weight = weightList[i];
    const weightIs10 = !(weight === 500 || weight === 50 || weight === 5);
    if (weightIs10) {
      const count = Math.floor(num / weight);
      result += Array(count).fill(weightMap[weight]).join('');
      num -= count * weight;
    } else {
      if (num >= weight) {
        result += weightMap[weight];
        num -= weight;
      }
    }
  }
  result = result.replaceAll('DCCCC', 'CM');
  result = result.replaceAll('CCCC', 'CD');
  result = result.replaceAll('LXXXX', 'XC');
  result = result.replaceAll('XXXX', 'XL');
  result = result.replaceAll('VIIII', 'IX');
  result = result.replaceAll('IIII', 'IV');
  return result;
}

console.log(intToRoman(3749));
// MMMDCCXLIX
