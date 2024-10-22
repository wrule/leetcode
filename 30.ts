// 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

//  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
// 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

class QueueSet {
  public constructor(private readonly limit: number) { }

  private queue: string[] = [];
  private queueSet = new Set<string>();

  public get size() {
    return this.queue.length;
  }

  public add(str: string) {
    if (!this.queueSet.has(str)) {
      this.queueSet.add(str);
      this.queue.push(str);
      if (this.queue.length > this.limit) {
        const rmStr = this.queue.shift();
        if (rmStr) {
          this.queueSet.delete(rmStr);
        }
      }
    }
  }

  public clear() {
    this.queue = [];
    this.queueSet.clear();
  }
}

function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const charArray = Array.from(s);
  console.log(charArray);
  return result;
}

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]));
// [6,9,12]
// 准备重写
