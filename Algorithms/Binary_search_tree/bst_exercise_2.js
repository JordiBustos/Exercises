//Binary Search Tree

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

    lessThan(node){
        if(node !== null){
            if (node.data >= 15853){
                this.lessThan(node.left)
            } else {
                if(node.data < 15853) {
                    this.lessThan(node.left)
                    console.log(node.data)
                    this.lessThan(node.right)
                }
            }
        }
    }
    //Un módulo que reciba la nueva estructura e informe el nombre y apellido de
    //aquellos alumnos cuyo legajo esté comprendido entre 1258 y 7692.
    less_greater_than(node){
        if(node !== null){
            if (node.data > 7692){
                this.lessThan(node.left)
            } else {
                if (node.data < 1258){
                    this.less_greater_than(node.right)
                }
                if (node.data <= 7692 && node.data >= 1258) {
                    this.less_greater_than(node.right)
                    console.log(node.data)
                    this.less_greater_than(node.left)
                }
            }
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
tree.insert(5692)
tree.insert(12)
tree.insert(7692)
tree.insert(15854)
tree.insert(1258)
tree.insert(22)

//shown tree inOrder method
const arrResult = []
tree.less_greater_than(tree.root)