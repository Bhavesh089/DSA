class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function buildTreeHelper(inorder, preorder, inStart, inEnd, preStart) {
    if (preStart >= preorder.length || inStart > inEnd) {
      return null;
    }
  
    const rootValue = preorder[preStart];
    const root = new TreeNode(rootValue);
  
    const rootIndexInInorder = inorder.indexOf(rootValue);
  
    const leftTreeSize = rootIndexInInorder - inStart;
  
    root.left = buildTreeHelper(
      inorder,
      preorder,
      inStart,
      rootIndexInInorder - 1,
      preStart + 1
    );
  
    root.right = buildTreeHelper(
      inorder,
      preorder,
      rootIndexInInorder + 1,
      inEnd,
      preStart + 1 + leftTreeSize
    );
  
    return root;
  }
  
  function buildTree(inorder, preorder) {
    return buildTreeHelper(inorder, preorder, 0, inorder.length - 1, 0);
  }
  
  // Example usage:
  const inorder = [2, 3, 1]
  const preorder = [2, 1, 3]
  
  const root = buildTree(inorder, preorder);
  console.log(root);
  