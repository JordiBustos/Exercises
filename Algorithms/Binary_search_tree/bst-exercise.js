/*
a. Implemente un módulo que lea números enteros y los almacene en un árbol
binario de búsqueda. La lectura finaliza con el valor 0.
b. Una vez generado el árbol, realice módulos independientes para:
i. Obtener el número más grande.
ii. Obtener el número más chico.
iii. Obtener la cantidad de elementos.
iv. Informar los números en orden creciente.
v. Informar los números pares en orden decreciente.
*/

var counter = 0

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

    inOrder(node, fn){
        if (node !== null){
            this.inOrder(node.right, fn)
            fn.call(null, node)
            this.inOrder(node.left, fn)           
        }
    }

    inOrderEven(node, fun){
        if (node !== null){
            this.inOrderEven(node.left, fun)
            fun.call(null, node)
            this.inOrderEven(node.right, fun)           
        }
    }

    searchNode(node, num){
        if (node === null) return null;
        else if (num < node.data) return this.searchNode(node.left, num)
        else if (num > node.data) return this.searchNode(node.right, num)
        else return node;
    }
    
    findMax(node){
        if (node.right !== null) return this.findMax(node.right)
        else return node.data
    }
    findMin(node){
        if (node.left !== null) return this.findMin(node.left)
        else return node.data
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
tree.inOrder(tree.root, (node) => arrResult.push(node.data))
console.log(arrResult)

const arrResultEven = []
tree.inOrder(tree.root, (node) => {
    if (node.data % 2 === 0) arrResultEven.push(node.data)
})

console.log(arrResultEven)