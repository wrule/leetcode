// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let sum = 0;
  const stack: [TreeNode, number][] = [];
  let current = root;
  while (current) {
    sum += current.val;
    if (sum === targetSum) return true;
    if (current.right) stack.push([current.right, current.left?.val ?? 0]);
    current = current.left;
    if (!current) {
      const popData = stack.pop();
      if (popData) {
        const [next, leftValue] = popData;
        current = next;
        sum -= leftValue;
      }
    }
  }
  return false;
}
