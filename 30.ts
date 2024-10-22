// 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

//  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
// 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

class QueueSet {
  public constructor(private readonly _size: number) { }

  private queue: string[] = [];
  private queueSet = new Set<string>();

  public add(str: string) {
    if (!this.queueSet.has(str)) {
      this.queueSet.add(str);
      this.queue.push(str);
      if (this.queue.length > this._size) {
        this.queueSet.delete(this.queue.shift() as string);
      }
    }
  }

  public shift() {
    this.queueSet.delete(this.queue.shift() as string);
  }

  public has(str: string) {
    return this.queueSet.has(str);
  }

  public clear() {
    this.queue = [];
    this.queueSet.clear();
  }

  public size() {
    return this.queue.length;
  }

  public data() {
    return this.queue;
  }
}

function findSubstring(s: string, words: string[]): number[] {
  let result: number[] = [];
  const charArray = Array.from(s);
  const wordLength = words[0].length;
  const wordsSet = new Set(words);
  const charWindow: string[] = [];
  let leftIndex = 0;
  let leftWord = '';
  let prevLeftIndex = 0;
  const windowSet = new QueueSet(words.length);
  for (let rightIndex = 0; rightIndex < charArray.length; ++rightIndex) {
    const char = charArray[rightIndex];
    charWindow.push(char);
    if (charWindow.length > wordLength) {
      charWindow.shift();
    }
    if (charWindow.length === wordLength) {
      const wordWindow = charWindow.join('');
      if (wordsSet.has(wordWindow)) {
        const wordLeftIndex = rightIndex - 2;
        console.log(wordWindow);
        if (wordLeftIndex - prevLeftIndex !== wordLength || windowSet.has(wordWindow)) {
          windowSet.clear();
        }
        windowSet.add(wordWindow);
        if (windowSet.size() === words.length) {
          result.push(rightIndex - (words.length * wordLength - 1));
          windowSet.shift();
        }
        console.log(windowSet.data());
        prevLeftIndex = wordLeftIndex;
      }
    }
  }
  return result;
}

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]));
// [6,9,12]
// 准备重写