// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

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

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: [TreeNode, boolean][] = [];
  let current = root;
  while (current) {
    if (current.right) stack.push([current.right, true]);
    stack.push([current, false]);
    if (current.left) stack.push([current.left, true]);
    current = null;
    while (stack.length > 0 && !current) {
      const popData = stack.pop();
      if (popData) {
        const [next, flag] = popData;
        if (flag) {
          current = next;
        } else {
          result.push(next.val);
        }
      }
    }
  }
  return result;
}
