// 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

//  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
// 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

class Queue {
  public constructor(private readonly limit: number) { }

  private queue: string[] = [];

  public get size() {
    return this.queue.length;
  }

  public get joinStr() {
    return this.queue.join('');
  }

  public add(str: string) {
    this.queue.push(str);
    if (this.queue.length > this.limit) {
      this.shift();
    }
  }

  public shift() {
    return this.queue.shift();
  }
}

class QueueSet {
  public constructor(private readonly limit: number) { }

  private queue: string[] = [];
  private queueSet = new Set<string>();

  public get size() {
    return this.queue.length;
  }

  public get joinStr() {
    return this.queue.join('');
  }

  public add(str: string) {
    if (!this.queueSet.has(str)) {
      this.queueSet.add(str);
      this.queue.push(str);
      if (this.queue.length > this.limit) {
        this.shift();
      }
    }
  }

  public shift() {
    const rmStr = this.queue.shift();
    if (rmStr) {
      this.queueSet.delete(rmStr);
    }
    return rmStr;
  }

  public has(str: string) {
    return this.queueSet.has(str);
  }

  public clear() {
    this.queue = [];
    this.queueSet.clear();
  }
}

function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordsSet = new Set(words);
  const wordLength = words[0].length;
  const charWindow = new Queue(wordLength);
  const charArray = Array.from(s);
  for (let rightIndex = 0; rightIndex < charArray.length; ++rightIndex) {
    charWindow.add(charArray[rightIndex]);
    if (wordsSet.has(charWindow.joinStr)) {
      console.log(charWindow.joinStr);
    }
  }
  return result;
}

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]));
// [6,9,12]
// 准备重写
