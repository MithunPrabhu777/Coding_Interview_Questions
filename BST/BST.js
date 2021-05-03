class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        var newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
        return this.root;
    }

    insertNode(node,newNode){
        if(node.data < newNode.data){
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right,newNode);
            }
        }
        else{
            if(node.left === null){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left,newNode);
            }
        }
    }

    search(data){
        var current = this.root;
        var count = 0;
        while(current !== null){
            if(current.data === data){
                count+=1;
                return count;
            }
            else{
                if(current.data > data){
                    current = current.left;
                    count+=1;
                }
                else{
                    current = current.right;
                    count+=1;
                }
            }
        }
        return false;
    }
    min(){
        if(this.root === null) return undefined;
        var current= this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
}

var bst = new BST();
console.log(bst.insert(7));
console.log(bst.insert(3));
console.log(bst.insert(4));
console.log(bst.insert(6));
console.log(bst.search(4));
console.log(bst.min());