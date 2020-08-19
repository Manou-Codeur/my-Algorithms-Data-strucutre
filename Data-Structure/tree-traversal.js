import { Queue } from "./queue.js";
import { BST } from "./binary-search-tree.js";

const tree = new BST();

//breadth first search; traverse horizontaly or by level
/*

      10
  6       15
3   8      20 

[10, 6, 15, 3, 8, 20]

*/
tree.BFS = () => {
  let node = tree.root,
    data = [],
    queue = new Queue();

  queue.enqueue(node);

  while (queue.length) {
    node = queue.dequeue();
    data.push(node.val.value);
    if (node.val.left) queue.enqueue(node.val.left);
    if (node.val.right) queue.enqueue(node.val.right);
  }
  return data;
};

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//Depth first preOreder; traverse vertically from the top to the bottom
/*

      10
  6       15
3   8      20 

[10, 6, 3 ,8 ,15 ,20]

*/
tree.DFPreOrder = () => {
  let data = [];

  function travers(node) {
    data.push(node.value);

    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
  }
  travers(tree.root);

  return data;
};

//Depth first postOrder; traverse vertically but from the bottom to
//the top, so we need to visit first all the nodes at the bottom then
//go up to the parents until reaching the root
/*

      10
  6       15
3   8      20 

[3, 8, 6, 20, 15, 10]

*/
tree.DFPostOrder = () => {
  let data = [];

  function travers(node) {
    if (node.left) travers(node.left);
    if (node.right) travers(node.right);

    data.push(node.value);
  }
  travers(tree.root);

  console.log(data);
};

tree.DFPostOrder();
