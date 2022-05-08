// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        // const node = new Node(data);
        // this.children.push(node);
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
       
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift(); //shift will take out 1st element of array

            arr.push(...node.children);       //spread operator does the same thing as for loop, it means take all the elements from the array and push them one by one into the new array
            // for (let child of node.children) {
            //     arr.push(child);
            // }
            fn(node);
        }

    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift(); //take one first element from the array and place it's node's children at the front of the array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}


// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;             //now the tree thinks it's root node is the node we just created 

module.exports = { Tree, Node };
