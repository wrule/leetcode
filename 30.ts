// 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

//  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
// 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

function findSubstring(s: string, words: string[]): number[] {
  const wordsDict: any = { };
  words.forEach((word) => wordsDict[word] = (wordsDict[word] ?? 0) + 1);

  const wordLength = words[0].length;
  const charWindow: string[] = [];
  const wordList: { word: string, index: number }[] = [];
  const indexMap: any = { };
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    charWindow.push(char);
    if (charWindow.length > wordLength) charWindow.shift();
    if (charWindow.length === wordLength) {
      const word = charWindow.join('');
      if (wordsDict[word]) {
        const index = i - wordLength + 1;
        wordList.push({ word, index });
        indexMap[index] = word;
      }
    }
  }

  console.log(wordList);
  console.log(indexMap);

  let wordsNum = Object.keys(wordsDict).length;
  let leftIndex = 0;
  for (let rightIndex = 0; rightIndex < wordList.length; ++rightIndex) {
    const { word, index } = wordList[rightIndex];
    const sDict: any = { [word]: 1 };
  }
  return [];
}

console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']));
// [6,9,12]
// 准备重写
