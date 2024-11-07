// 使用JavaScript实现图的深度优先和广度优先遍历

interface GNode {
  value: number;
  neighbors: GNode[];
}

function DFS(node: GNode) {
  const nodeSet = new Set<GNode>();
  const stack: GNode[] = [node];
  nodeSet.add(node);
  while (stack.length > 0) {
    const current = stack.pop()!;
    console.log(current.value);
    current.neighbors.filter((neighbor) => !nodeSet.has(neighbor)).forEach((neighbor) => {
      stack.push(neighbor);
      nodeSet.add(neighbor);
    });
  }
}

function BFS(node: GNode) {
  const nodeSet = new Set<GNode>();
  const stack: GNode[] = [node];
  nodeSet.add(node);
  while (stack.length > 0) {
    const length = stack.length;
    for (let i = 0; i < length; ++i) {
      const item = stack.shift()!;
      console.log(item.value);
      item.neighbors.filter((neighbor) => !nodeSet.has(neighbor)).forEach((neighbor) => {
        stack.push(neighbor);
        nodeSet.add(neighbor);
      });
    }
  }
}
