// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      const newNode = new TreeNode(val);
      // if there is no root node, insert new node
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      // if the value is less then current node's value
      // look to the left
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode
        } else {
          return this.insert(val, currentNode.left)
        }
      }
      // if the value is greater then current node's value
      // look to the right
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode
        } else {
          return this.insert(val, currentNode.right)
        }
      }
    }
  
    search(val) {
      // if (current === null) return false;
  
      let current = this.root;
  
      while (current !== null) {
        
        if (val < current.val) {
          current = current.left;
        } else if (val > current.val) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      this.inOrderTraversal(currentNode.left) 
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val);
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let current = this.root;
      const queue = [];
      queue.push(current)
      while (queue.length) {
        let node = queue.shift();
        console.log(node.val)
        if (node.left !== null) {
          queue.push(node.left)
        } 
        if (node.right !== null) {
          queue.push(node.right)
        }
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let current = this.root;
      const queue = [];
      queue.push(current)
      while (queue.length) {
        let node = queue.pop();
        console.log(node.val)
        if (node.left !== null) {
          queue.push(node.left)
        } 
        if (node.right !== null) {
          queue.push(node.right)
        }
      }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
