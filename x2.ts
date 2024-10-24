// 🍎🌲通知：
// 使用JavaScript/TypeScript实现树的先中后序遍历（不能使用递归）
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

function nodeLeft(node: TNode) {
  const queue: TNode[] = [];
  let current: TNode | undefined = node;
  while (current) {
    console.log(current.value);
    if (current.children && current.children.length >= 1) {
      const children: TNode[] = current.children;
      const next = children[0];
      const others = children.slice(1);
      current = next;
      queue.unshift(...others);
    } else {
      current = queue.shift();
    }
  }
}

function nodeMidde(node: TNode) {
  const queue: (TNode | TNode[])[] = [];
  let current: TNode | undefined = node;
  while (current) {
    let leftChilds: TNode[] = [];
    let rightChilds: TNode[] = [];
    if (current.children && current.children.length >= 1) {
      const childs: TNode[] = current.children;
      rightChilds = childs.slice(childs.length - Math.floor(childs.length / 2), childs.length);
      leftChilds = childs.slice(0, childs.length - rightChilds.length);
    }
    const next: TNode | undefined = leftChilds[0];
    const others = leftChilds.slice(1);
    if (others.length > )
  }
}

nodeLeft(rootNode);
// nodeBFS(rootNode);
