class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

root2 = new Node(4);
root2.left = new Node(5);
root2.right = new Node(6);

console.log(checkSubtree(root1, root2));

function inOrder(node, list) {
  if (node === null)
    return;

    inOrder(node.left, list);

    list.push(node.data);

    inOrder(node.right, list);
}

function preOrder(node, list) {
  if (node === null)
    return;

    list.push(node.data);

    preOrder(node.left, list);

    preOrder(node.right, list);
}

function checkSubtree(tree, sub) {
  if (sub === null)
    return true;
  if (tree === null)
    return true;

  let first = [];
  let second = [];
  inOrder(tree, first);
  inOrder(tree, second);

  if (!listToString(first).includes(listToString(second)))
    return false;

  first = [];
  second = [];
  inOrder(tree, first);
  inOrder(tree, second);

  if (!listToString(first).includes(listToString(second)))
    return false;

  return true;
}

function listToString(list) {
  return list.toString().replace(/,/g, '')
}