class BinarySearchTree {
    constructor () {
        this.root = null;
    }
    insert (data) {
        let newNode = new BinaryTreeNode(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            while (currentNode != null) {
                if (newNode.data < currentNode.data) {
                    let currentNode = currentNode.left;
                }
                else if (newNode.data > currentNode.data) {
                    let currentNode = currentNode.right;
                }
                else {
                    return;
                }
            }
        }
    }
    find (string) {

    }
    remove (string) {

    }
    min () {

    }
    max() {

    }
    toString () {

    }
}

class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(node){
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}