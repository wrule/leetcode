// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

class CountMap {
  public constructor(private readonly limit: number) { }

  private notZeros = 0;
  private queue: string[] = [];
  private queueIndex: number[] = [];
  private countMap = new Map<string, number>();

  public change(str: string, inc: number) {
    const num = this.countMap.get(str) ?? 0;
    const newNum = num + inc;
    if (num !== 0 && newNum === 0) this.notZeros--;
    if (num === 0 && newNum !== 0) this.notZeros++;
    this.countMap.set(str, newNum);
  }

  public has(str: string) {
    return this.countMap.has(str);
  }

  public push(str: string, index: number) {
    this.queue.push(str);
    this.queueIndex.push(index);
    this.change(str, -1);
    if (this.queue.length > this.limit) this.shift();
  }

  public shift() {
    const rmStr = this.queue.shift();
    this.queueIndex.shift();
    if (rmStr) this.change(rmStr, 1);
  }

  public get ready() {
    return this.notZeros === 0;
  }

  public get range() {
    return [this.queueIndex[0], this.queueIndex[this.queueIndex.length - 1] + 1];
  }
}

function minWindow(s: string, t: string): string {
  let lengthMin = Infinity;
  let subStrMin = '';
  const sCharArray = Array.from(s);
  const tCharArray = Array.from(t);
  const tCharMap = new CountMap(tCharArray.length);
  tCharArray.forEach((char) => tCharMap.change(char, 1));
  for (let i = 0; i < sCharArray.length; ++i) {
    const char = sCharArray[i];
    if (tCharMap.has(char)) {
      tCharMap.push(char, i);
      if (tCharMap.ready) {
        const subStr = s.slice(...tCharMap.range);
        if (subStr.length <= lengthMin) {
          subStrMin = subStr;
          lengthMin = subStr.length;
        }
      }
    }
  }
  return subStrMin;
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'));
// BANC
