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
  const cpNodes: _Node[] = Array(101).fill(null);
  const stack: _Node[] = [node];
  cpNodes[node.val] = new _Node(node.val);
  while (stack.length > 0) {
    const current = stack.pop() as _Node;
    current.neighbors.forEach((neighbor) => {
      if (!cpNodes[neighbor.val]) {
        cpNodes[neighbor.val] = new _Node(neighbor.val);
        stack.push(neighbor);
      }
      cpNodes[current.val].neighbors.push(cpNodes[neighbor.val]);
    });
  }
  return cpNodes[node.val];
}
