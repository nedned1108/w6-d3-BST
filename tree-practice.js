const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  //if (!rootNode) return;
  let min = rootNode.val;
  const queue = [rootNode];
  while (queue.length) {
    let currentNode = queue.shift();
    if (currentNode.val < min && !currentNode.left) {
      min = currentNode.val;
    } else if (currentNode.left) {
      queue.push(currentNode.left)
  //  } else if (currentNode.right) {
  //    queue.push(currentNode.right)
    }
  }
  return min;
}

function findMaxBST (rootNode) {
  let max = rootNode.val;
  const queue = [rootNode];
  while(queue.length){
    let currentNode = queue.shift();
    if (currentNode.val > max && !currentNode.right){
      max = currentNode.val;
  //  }else if (currentNode.left) {
  //    queue.push(currentNode.left)
    } else if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }

  return max;
}

function findMinBT (rootNode) {
  let min = rootNode.val
  const queue = [rootNode]
  while(queue.length){
    let currentNode = queue.shift()
    if (currentNode.val < min){
      min = currentNode.val
    }
    if (currentNode.left){
      queue.push(currentNode.left)
    }
    if (currentNode.right){
      queue.push(currentNode.right)
    }
  }
  return min
}

function findMaxBT (rootNode) {
  let max = rootNode.val
  const queue = [rootNode]
  while(queue.length){
    let currentNode = queue.shift()
    if (currentNode.val > max){
      max = currentNode.val
    }
    if (currentNode.left){
      queue.push(currentNode.left)
    }
    if (currentNode.right){
      queue.push(currentNode.right)
    }
  }
  return max
}

function getHeight (rootNode) {
  // ITERATIVE
  // if (!rootNode) return -1;
  // let height = -1;
  // const queue = [rootNode];
  // while (queue.length) {
  //   let currentLength = queue.length;
  //   for (let i = 0; i < currentLength; i++) {
  //     let node = queue.shift();
  //     if (node.left) {
  //       queue.push(node.left)
  //     } 
  //     if (node.right) {
  //       queue.push(node.right)
  //     }
  //   }
  //   height++;
  // }
  // return height;
  
  // RECURSIVE
  if(!rootNode) return -1;
  if(!rootNode.left && !rootNode.right) return 0;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
  
}

function balancedTree (rootNode) {
  if (!rootNode) return;

  // let currentNode = rootNode;
  let queue = [rootNode]
  let count = 0;
  while (currentNode) {
    let node = queue.shift();
    count++;

    if (node.left) {
      queue.push(node.left);
    } 
  }

}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
