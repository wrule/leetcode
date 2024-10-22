// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

class CountMap {
  public constructor(private readonly limit: number) { }

  private count = 0;
  private queue: string[] = [];
  private countMap = new Map<string, number>();

  public inc(str: string) {
    this.countMap.set(str, (this.countMap.get(str) ?? 0) + 1);
    this.count++;
  }

  public dec(str: string) {
    this.countMap.set(str, (this.countMap.get(str) ?? 0) - 1);
    this.count--;
  }

  public has(str: string) {
    return this.countMap.has(str);
  }

  public push(str: string) {
    this.queue.push(str);
    this.dec(str);
    if (this.queue.length > this.limit) this.shift();
  }

  public shift() {
    const rmStr = this.queue.shift();
    if (rmStr) this.inc(rmStr);
  }
}

function minWindow(s: string, t: string): string {
  const sCharArray = Array.from(s);
  const tCharArray = Array.from(t);
  const tCharMap = new CountMap(tCharArray.length);
  tCharArray.forEach((char) => {
    tCharMap.inc(char);
  });
  console.log(tCharMap);
  let leftIndex = 0;
  for (let rightIndex = 0; rightIndex < sCharArray.length; ++rightIndex) {
    const char = sCharArray[rightIndex];
    if (tCharMap.has(char)) {
      console.log(char, rightIndex);
      tCharMap.push(char);
      console.log(tCharMap);
    }
  }
  return '';
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
// BANC
