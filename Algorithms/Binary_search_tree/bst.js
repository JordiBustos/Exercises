class binarySearchTree{
    constructor (data){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if (this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode){
        if (newNode.data < node.data){
            if (node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode)
        } else {
            if (node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode)
        }
    }


    //Return data in order left to right
    inOrder(node, fn){
        if (node !== null){
            this.inOrder(node.left, fn)
            fn.call(null, node)
            this.inOrder(node.right, fn)
        }
    }
    //Return data in the order that appear
    preOrder(node, fn){
        if (node !== null){
            fn.call(null, node)
            this.preOrder(node.left, fn)
            this.preOrder(node.right, fn)
        }
    }

    posOrder(node, fn){
        if (node !== null){
            this.posOrder(node.left, fn)
            this.posOrder(node.right, fn)
            fn.call(null, node)
        }
    }
    
}

class Node{
    constructor(data){
        this.data = data; this.left=null; this.right=null
    }
}

//create tree
const tree = new binarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(12)
tree.insert(11)
tree.insert(9)
tree.insert(4)
tree.insert(22)

//shown tree inOrder method
const arrResult = []
tree.preOrder(tree.root, (node) => arrResult.push(node.data))

const arrResultEven = []
tree.inOrder(tree.root, (node) => {
    if (node.data % 2 === 0) arrResultEven.push(node.data)
})
