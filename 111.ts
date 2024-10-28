// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function minDepth(root: TreeNode | null): number {
  const stack: TreeNode[] = [];
  const stackDeep: number[] = [];
  let deep = 0;
  let maxDeep = 0;
  let current = root;
  while (current) {
    deep++;
    if (deep > maxDeep) {
      maxDeep = deep;
    }
    if (current.right) {
      stack.push(current.right);
      stackDeep.push(deep);
    }
    current = current.left;
    if (current == null) {
      current = stack.pop() ?? null;
      if (current) {
        deep = stackDeep.pop() as number;
      }
    }
  }
  return maxDeep;
}
