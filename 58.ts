
function lengthOfLastWord(s: string): number {
  return s.match(/(\S*)\s*$/)?.[1].length ?? 0;
}

lengthOfLastWord('  11  ssd ');
