module.exports = function recursion(tree) {
  const arr = [];
  function preOrder(node, level) {
    if (node == null) return;
    if (arr[level] === undefined) {
      arr[level] = [];
    }
    arr[level].push(node.value);
    preOrder(node.left, level + 1);
    preOrder(node.right, level + 1);
  }
  preOrder(tree, 0);
  return arr;
};
