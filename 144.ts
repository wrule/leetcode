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
    this.val = (val == null ? 0 : val);
    this.left = (left == null ? null : left);
    this.right = (right == null ? null : right);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};
