// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const stack = [root];
  while (stack.length >= 1) {
    const current = stack.pop()!;
    [current.right, current.left] = [current.left, current.right];
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return root;
}
