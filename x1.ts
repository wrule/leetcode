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

function nodeBFS(nodes: TNode[]) {
  if (nodes.length === 0) return;
  const childs: TNode[] = [];
  nodes.forEach((node) => {
    console.log(node.value);
    childs.push(...(node.children ?? []));
  });
  nodeBFS(childs);
}

nodeDFS(rootNode);
nodeBFS([rootNode]);
