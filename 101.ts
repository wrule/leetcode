// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p && q) {
    const stack1 = [p];
    const stack2 = [q];
    while (stack1.length >= 1 && stack2.length >= 1) {
      const current1 = stack1.pop()!;
      const current2 = stack2.pop()!;
      if (current1.val === current2.val) {
        if (
          !!current1.left !== !!current2.left ||
          !!current1.right !== !!current2.right
        ) {
          return false;
        }
        if (current1.right) stack1.push(current1.right);
        if (current1.left) stack1.push(current1.left);
        if (current2.right) stack2.push(current2.right);
        if (current2.left) stack2.push(current2.left);
      } else {
        return false;
      }
    }
    return stack1.length === stack2.length;
  } else if (!p && !q) {
    return true;
  } else {
    return false;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue = [[root.left, root.right]];
  while (queue.length >= 1) {
    const [left, right] = queue.shift()!;
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }
  return true;
}
