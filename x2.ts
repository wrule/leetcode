// 🍎🌲通知：
// 使用JavaScript/TypeScript实现树的先中后序遍历（不能使用递归）
// 🐻🐻老袁🐻🐻

interface TNode {
  value: string;
  children?: TNode[];
}

// const rootNode: TNode = {
//   value: '1',
//   children: [
//     {
//       value: '1-1',
//       children: [
//         {
//           value: '1-1-1',
//         },
//         {
//           value: '1-1-2',
//           children: [
//             {
//               value: '1-1-2-1',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       value: '1-2',
//     },
//     {
//       value: '1-3',
//       children: [
//         {
//           value: '1-3-1',
//           children: [
//             {
//               value: '1-3-1-1',
//               children: [
//                 {
//                   value: '1-3-1-1-1',
//                 },
//                 {
//                   value: '1-3-1-1-2',
//                 }
//               ],
//             }
//           ],
//         },
//         {
//           value: '1-3-2',
//           children: [
//             {
//               value: '1-3-2-1',
//             },
//             {
//               value: '1-3-2-2',
//             },
//           ],
//         },
//       ],
//     }
//   ],
// };


const rootNode: TNode = {
  value: '1',
  children: [
    {
      value: '2',
      children: [
        {
          value: '4',
        },
        {
          value: '5',
        },
      ],
    },
    {
      value: '3',
    },
  ],
};

function nodeLeft(node: TNode) {
  const stack: TNode[] = [];
  let current: TNode | undefined = node;
  while (current) {
    console.log(current.value);
    if (current.children && current.children.length >= 1) {
      const children: TNode[] = current.children;
      const next = children[0];
      const others = children.slice(1);
      current = next;
      stack.push(...others);
    } else {
      current = stack.pop();
    }
  }
}

function nodeMiddle(node: TNode) {
  const stack: (TNode | TNode[])[] = [];
  let current: TNode | undefined = node;
  while (current) {
    let leftChilds: TNode[] = [];
    let rightChilds: TNode[] = [];
    if (current.children && current.children.length >= 1) {
      const childs: TNode[] = current.children;
      rightChilds = childs.slice(childs.length - Math.floor(childs.length / 2), childs.length);
      leftChilds = childs.slice(0, childs.length - rightChilds.length);
    }
    if (rightChilds.length >= 1) stack.push(rightChilds);
    stack.push(current);
    if (leftChilds.length >= 1) stack.push(leftChilds);
    current = undefined;
    while (current === undefined && stack.length >= 1) {
      const last = stack[stack.length - 1];
      if (Array.isArray(last)) {
        current = last.shift();
        if (last.length === 0) stack.pop();
      } else {
        console.log(last.value);
        stack.pop();
      }
    }
  }
}

function nodeRight(node: TNode) {
  const stack: (TNode | TNode[])[] = [];
  let current: TNode | undefined = node;
  while (current) {
    let leftChilds: TNode[] = [];
    let rightChilds: TNode[] = [];
    if (current.children && current.children.length >= 1) {
      const childs: TNode[] = current.children;
      rightChilds = childs.slice(childs.length - Math.floor(childs.length / 2), childs.length);
      leftChilds = childs.slice(0, childs.length - rightChilds.length);
    }
    stack.push(current);
    if (rightChilds.length >= 1) stack.push(rightChilds);
    if (leftChilds.length >= 1) stack.push(leftChilds);
    current = undefined;
    while (current === undefined && stack.length >= 1) {
      const last = stack[stack.length - 1];
      if (Array.isArray(last)) {
        current = last.shift();
        if (last.length === 0) stack.pop();
      } else {
        console.log(last.value);
        stack.pop();
      }
    }
  }
}

nodeRight(rootNode);
// nodeBFS(rootNode);
