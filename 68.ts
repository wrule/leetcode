// 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

// 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

// 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

// 文本的最后一行应为左对齐，且单词之间不插入额外的空格。

// 注意:

// 单词是指由非空格字符组成的字符序列。
// 每个单词的长度大于 0，小于等于 maxWidth。
// 输入单词数组 words 至少包含一个单词。

function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  const newLine = (words: string[], diff: number) => {
    const interval = Math.floor(diff / (words.length - 1));
    console.log(words, diff, interval);
  };
  let lineWords: string[] = [];
  let lineLength = 0;
  words.forEach((word) => {
    const nextMinLineLength = lineLength + word.length + (lineWords.length > 0 ? lineWords.length : 0);
    // console.log(word, lineWords, nextMinLineLength, maxWidth);
    if (nextMinLineLength <= maxWidth) {
      lineLength += word.length;
      lineWords.push(word);
    } else {
      newLine(lineWords, maxWidth - lineLength);
      lineWords = [word];
      lineLength = word.length;
    }
  });
  newLine(lineWords, maxWidth - lineLength);
  return result;
}

console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
