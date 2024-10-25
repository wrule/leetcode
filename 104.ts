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
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

function maxDepth(root: TreeNode | null): number {
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
