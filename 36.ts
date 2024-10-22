// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 注意：
// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 空白格用 '.' 表示。
 
function isValidSudoku(board: string[][]): boolean {
  const rows: any[] = Array(9).fill({ });
  const cols: any[] = Array(9).fill({ });
  const girds: any[] = Array(9).fill({ });
  for (let y = 0; y < 9; ++y) {
    for (let x = 0; x < 9; ++x) {
      const num = board[y][x];
      if (num === '.') continue;
      const rowValue = rows[y][num] = (rows[y][num] ?? 0) + 1;
      if (rowValue > 1) return false;
      const colValue = cols[x][num] = (rows[x][num] ?? 0) + 1;
      if (colValue > 1) return false;
      const girdIndex = Math.floor(y / 3) * 3 + Math.floor(x / 3);
      const girdValue = girds[girdIndex][num] = (girds[girdIndex][num] ?? 0) + 1;
      if (girdValue > 1) return false;
    }
  }
  return true;
}
