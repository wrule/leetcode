/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;
  const flagMap = Array(101).fill(0).map(() => true);
  const stack: _Node[] = [node];
  while (stack.length > 0) {
    const current = stack.pop() as _Node;
    stack.push(...current.neighbors);
  }
  return null;
}
