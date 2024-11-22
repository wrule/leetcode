// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

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
    while (stack1.length >= 1 || stack2.length >= 1) {
      const current1 = stack1.pop();
      const current2 = stack2.pop();
      if (current1 && current2) {
        if (current1.val === current2.val) {
          if (current1.right) stack1.push(current1.right);
          if (current1.left) stack1.push(current1.left);
          if (current2.right) stack1.push(current2.right);
          if (current2.left) stack1.push(current2.left);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else if (!p && !q) {
    return true;
  } else {
    return false;
  }
}
