// 🍎🌲通知：
// 今日算法题：
// 使用JavaScript/TypeScript实现树的深度优先遍历和广度优先遍历~
// 🐻🐻老袁🐻🐻

interface TNode {
  value: string;
  children?: TNode[];
}

const rootNode: TNode = {
  value: '1',
  children: [
    {
      value: '1-1',
      children: [
        {
          value: '1-1-1',
        },
        {
          value: '1-1-2',
          children: [
            {
              value: '1-1-2-1',
            },
          ],
        },
      ],
    },
    {
      value: '1-2',
    },
    {
      value: '1-3',
      children: [
        {
          value: '1-3-1',
          children: [
            {
              value: '1-3-1-1',
              children: [
                {
                  value: '1-3-1-1-1',
                },
                {
                  value: '1-3-1-1-2',
                }
              ],
            }
          ],
        },
        {
          value: '1-3-2',
          children: [
            {
              value: '1-3-2-1',
            },
            {
              value: '1-3-2-2',
            },
          ],
        },
      ],
    }
  ],
};

function nodeDFS(node: TNode) {
  console.log(node.value);
  node.children?.forEach((child) => nodeDFS(child));
}

function nodeBFS(node: TNode) {
  const queue = [node];
  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(node.value);
    queue.push(...(node.children ?? []));
  }
}

nodeDFS(rootNode);
nodeBFS(rootNode);
