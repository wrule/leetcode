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

// 递归实现：时间复杂度O(N)，空间复杂度O(N)
function preorderTraversal2(root: TreeNode | null): number[] {
  if (root == null) return [];
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
}

// 栈实现：时间复杂度O(N)，空间复杂度O(N)
let stack: TreeNode[] = [];
let result: number[] = [];
function preorderTraversal(root: TreeNode | null): number[] {
  stack = [];
  result = [];
  let current = root;
  while (current) {
    result.push(current.val);
    if (current.right) stack.push(current.right);
    current = current.left;
    if (!current) current = stack.pop() ?? null;
  }
  return result;
}
